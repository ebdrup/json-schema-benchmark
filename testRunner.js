const fs = require("fs");
const path = require("path");
const _ = require("lodash");
const benchmark = require("benchmark");
const mustache = require("mustache");
const deepEqual = require("deep-equal");
const npm = require("npm");
const async = require("async");
const jsonStringifySafe = require("json-stringify-safe");
const { format, promisify } = require("util");

module.exports = async function({ validators, schemaVersion, folder }) {
  console.log(
    `Running benchmark for ${schemaVersion}${
      folder ? ", into the folder: " + folder : ""
    }.`
  );
  await promisify(npm.load)(npm.config);
  var tasks = validators.map(function(validator) {
    return function(callback) {
      npm.commands.view([validator.name, "homepage"], true, function(
        err,
        result
      ) {
        if (err) {
          return callback(err);
        }
        var version = Object.keys(result)
          .sort()
          .pop();
        if (version) {
          validator.version = version;
          validator.homepage = result[version].homepage;
        }
        return callback(null);
      });
    };
  });
  await promisify(async.parallel)(tasks);
  validators.forEach(function(v) {
    v.link = link(v.name);
    v.versionLink = link(v.version ? v.name + " (" + v.version + ")" : v.name);

    function link(name) {
      return v.homepage ? "[`" + name + "`](" + v.homepage + ")" : name;
    }
  });
  var testSuites = readTests(
    path.join(__dirname + `/JSON-Schema-Test-Suite/tests/${schemaVersion}/`)
  );
  validators.forEach((validator) => {
    validator.failingTests = [];
    validator.sideEffects = [];
    validator.timesFastest = 0;
    testSuites.forEach((testSuite) => verifyValidator(validator, testSuite));
  });
  var goodValidators = validators
    .sort((a, b) => a.failingTests.length - b.failingTests.length)
    .slice(0, 6); //top 6 validators with the least failing tests are included in benchmark
  const excludeTests = goodValidators.reduce(
    (acc, validator) =>
      acc.concat(validator.failingTests.map((t) => t.testName)),
    []
  );
  validators.forEach((validator) => {
    validator.failingTests.forEach((failingTest) => {
      if (!excludeTests.includes(failingTest.testName)) {
        failingTest.message +=
          ". **This excludes this validator from performance tests**";
      }
    });
  });
  var allTestNames = getTestNames(testSuites);
  var testsThatAllValidatorsFail = validators.reduce(function(acc, validator) {
    return _.intersection(acc, validAndInvalid(validator, allTestNames));
  }, validAndInvalid(validators[0], allTestNames));
  var results = runBenchmark(goodValidators, testSuites, excludeTests);
  await saveResults({
    results,
    validators,
    allTestNames,
    testsThatAllValidatorsFail,
    schemaVersion,
    folder,
  });
};

function getTestNames(testSuites) {
  return testSuites.reduce(function(acc, testSuite) {
    return acc.concat(
      testSuite.tests.map(function(test) {
        return [testSuite.description, test.description].join(", ");
      })
    );
  }, []);
}

function validAndInvalid(validator, allTestNames) {
  return _.map(validator.failingTests, "testName").filter(Boolean);
}

function verifyValidator(validator, testSuiteIn) {
  // verify that validator really works
  var schemaFailedToLoad = false;
  var testSuite = JSON.parse(JSON.stringify(testSuiteIn));
  try {
    var validatorInstance = validator.setup(testSuite.schema);
  } catch (ex) {
    schemaFailedToLoad = ex.message.replace(/\n/g, " ");
  }
  testSuite.tests.forEach(function(test) {
    var testName = [testSuite.description, test.description].join(", ");
    var originalData = JSON.parse(JSON.stringify(test.data));
    var givenResult;
    if (schemaFailedToLoad) {
      var message =
        "`" +
        testName +
        "`|The schema failed to load" +
        "(`" +
        schemaFailedToLoad +
        "`)";
      validator.failingTests.push({ message: message, testName: testName });
      return;
    }
    try {
      givenResult = validator.test(
        validatorInstance,
        test.data,
        testSuite.schema
      );
    } catch (e) {
      givenResult = e.message;
    }
    if (!deepEqual(originalData, test.data)) {
      var message =
        "# Side-effect on data\n" +
        validator.link +
        " had a side-effect on (altered the original) data in the test `" +
        testName +
        "`" +
        "\n## Schema" +
        "\n```js" +
        "\n" +
        JSON.stringify(testSuite.schema, null, "\t") +
        "\n```" +
        "\n## Original data" +
        "\n```js" +
        "\n" +
        JSON.stringify(originalData, null, "\t") +
        "\n```" +
        "\n## Data after validating with schema" +
        "\n```js" +
        "\n" +
        jsonStringifySafe(test.data, null, "\t") +
        "\n```";
      validator.sideEffects.push({ message: message, testName: testName });
    }
    if (!deepEqual(testSuite.schema, testSuiteIn.schema)) {
      var message =
        "# Side-effect on schema\n" +
        validator.link +
        " had a side-effect on (altered the original) schema in the test `" +
        testName +
        "`" +
        "\n## Original schema" +
        "\n```js" +
        "\n" +
        JSON.stringify(testSuiteIn.schema, null, "\t") +
        "\n```" +
        "\n## Schema after validating" +
        "\n```js" +
        "\n" +
        jsonStringifySafe(testSuite.schema, null, "\t") +
        "\n```";
      validator.sideEffects.push({ message: message, testName: testName });
    }
    if (givenResult !== test.valid) {
      var message =
        "`" +
        testName +
        "`|Expected result: `" +
        JSON.stringify(test.valid) +
        "` but validator returned: `" +
        JSON.stringify(givenResult) +
        "`";
      validator.failingTests.push({ message: message, testName: testName });
      return;
    }
  });
}

function runBenchmark(validators, testSuites, excludeTests) {
  var suite = new benchmark.Suite();
  validators.forEach(function(validator) {
    var testSuitesCopy = JSON.parse(JSON.stringify(testSuites)).filter(
      (testSuite) => {
        testSuite.tests = testSuite.tests.filter((test) => {
          var testName = [testSuite.description, test.description].join(", ");
          return excludeTests.indexOf(testName) === -1;
        });
        if (testSuite.tests.length === 0) {
          return false;
        }
        testSuite.validatorInstance = validator.setup(testSuite.schema);
        return true;
      }
    );
    suite.add(validator.name, function() {
      testSuitesCopy.forEach(function(testSuite) {
        testSuite.tests.forEach(function(test) {
          validator.test(
            testSuite.validatorInstance,
            test.data,
            testSuite.schema
          );
        });
      });
    });
  });

  suite
    .on("cycle", function(event) {
      console.log(String(event.target));
    })
    .run({
      async: false,
    });

  var fastestTestResult = suite.reduce(function(acc, testResult) {
    testResult.hz = Math.round(testResult.hz);
    var currentFastestHz = (acc && acc.hz) || 0;
    return testResult.hz > currentFastestHz ? testResult : acc;
  }, null);
  var fastestValidator = _.find(validators, function(validator) {
    return fastestTestResult && validator.name === fastestTestResult.name;
  });
  if (fastestValidator) {
    // if all fail, no-one is the fastest
    fastestValidator.timesFastest += 1;
  }
  var suiteResult = validators.map(function(validator) {
    var result = _.find(suite, function(obj) {
      return validator.name === obj.name;
    });
    return {
      hz: result.hz,
      fastest: result.hz === fastestTestResult.hz,
      percentage:
        Math.round(((result.hz || 0) / fastestTestResult.hz) * 1000) / 10,
      name: validator.name,
      plusMinusPercent: Math.round(result.stats.rme * 100) / 100,
      link: validator.link,
    };
  });
  return suiteResult;
}

function readTests(dirpath) {
  return require("fs-readdir-recursive")(dirpath).filter((value) => !value.startsWith("optional")).reduce(function(acc, value) {
    return acc.concat(require(path.join(dirpath, value)));
  }, []);
}

function comma(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    arr[i].comma = true; //for template
  }
  return arr;
}

async function saveResults({
  results,
  validators,
  allTestNames,
  testsThatAllValidatorsFail,
  schemaVersion,
  folder,
}) {
  if (folder) {
    await promisify(require("child_process").exec)(
      "rm -rf " + path.join(__dirname, folder)
    );
  } else {
    await promisify(require("child_process").exec)(
      "rm -rf " + path.join(__dirname, folder, "reports")
    );
  }
  var readmePath = path.join(__dirname, folder, "README.md");
  var readmeTemplate = fs.readFileSync(
    path.join(__dirname, "README.template"),
    "utf-8"
  );
  var testsTemplate = fs.readFileSync(
    path.join(__dirname, "TESTS.template"),
    "utf-8"
  );
  var sideEffectsTemplate = fs.readFileSync(
    path.join(__dirname, "SIDE-EFFECTS.template"),
    "utf-8"
  );

  var validatorsFailingTests = validators
    .map(function(validator) {
      return {
        name: validator.name,
        link: validator.link,
        count: validator.failingTests.length,
      };
    })
    .sort(function(a, b) {
      return a.count - b.count;
    });
  var validatorsSideEffects = validators
    .map(function(validator) {
      return {
        name: validator.name,
        link: validator.link,
        count: validator.sideEffects.length,
        sideEffects: validator.sideEffects,
      };
    })
    .filter(function(o) {
      return o.count !== 0;
    })
    .sort(function(a, b) {
      return a.count - b.count;
    });
  var maxFailingTests = validatorsFailingTests.reduce(function(acc, v) {
    return Math.max(acc, v.count);
  }, 0);
  validators.forEach(function(validator) {
    validator.failingTests = validator.failingTests.filter(function(t) {
      return testsThatAllValidatorsFail.indexOf(t.testName) === -1;
    });
  });
  results.sort(function(a, b) {
    return b.hz - a.hz;
  });
  var validatorBenchmarks = validators
    .filter(function(v) {
      return !!v.benchmarks;
    })
    .map(function(v) {
      return {
        link: format("[Benchmarks owned by %s](%s)", v.name, v.benchmarks),
      };
    });
  var graphBarSpacing = 4;
  var resultGraphBarHeight = Math.floor(400 / results.length) - graphBarSpacing;
  var resultsGraphHeight =
    (resultGraphBarHeight + graphBarSpacing) * results.length + 20;
  var validatorsFailingTestsGraphBarHeight =
    Math.floor(400 / validatorsFailingTests.length) - graphBarSpacing;
  var validatorsFailingTestsGraphHeight =
    (validatorsFailingTestsGraphBarHeight + graphBarSpacing) *
      validatorsFailingTests.length +
    20;
  var data = {
    graphBarSpacing,
    validators: comma(validators),
    fastestValidator: results[0] && results[0].link,
    testsThatAllValidatorsFail: comma(
      testsThatAllValidatorsFail.map(function(testName) {
        return { name: testName };
      })
    ),
    validatorsFailingTests: comma(validatorsFailingTests),
    validatorsFailingTestsGraphHeight,
    validatorsFailingTestsGraphBarHeight,
    maxFailingTests,
    validatorsSideEffects: comma(validatorsSideEffects),
    results: comma(results),
    resultsGraphHeight,
    resultGraphBarHeight,
    validatorBenchmarks,
    testCount: allTestNames.length,
    schemaVersion,
    folder,
  };
  var html = mustache.render(readmeTemplate, data);
  if (folder) {
    const folderPath = path.join(__dirname, folder);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
  }
  const reportsPath = path.join(__dirname, folder, "reports");
  if (!fs.existsSync(reportsPath)) {
    fs.mkdirSync(reportsPath);
  }
  fs.writeFileSync(readmePath, html);
  validators.forEach(function(validator) {
    var html = mustache.render(testsTemplate, {
      link: validator.link,
      failingTests: validator.failingTests,
      hasFailingTests: !!validator.failingTests.length,
      testsThatAllValidatorsFail: comma(
        testsThatAllValidatorsFail.map(function(testName) {
          return { name: testName };
        })
      ),
    });
    if (validator.name.startsWith("@")) {
      const scope = validator.name.substr(0, validator.name.indexOf("/"));
      const scopeDir = path.join(__dirname, folder, "/reports/", scope);
      if (!fs.existsSync(scopeDir)) {
        fs.mkdirSync(scopeDir);
      }
    }
    const testSummaryPath = path.join(
      __dirname,
      folder,
      "/reports/",
      validator.name + ".md"
    );
    fs.writeFileSync(testSummaryPath, html);
  });
  validatorsSideEffects.forEach(function(sideEffects) {
    var html = mustache.render(sideEffectsTemplate, sideEffects);
    var sideEffectsSummaryPath = path.join(
      __dirname,
      folder,
      "/reports/",
      sideEffects.name + "-side-effects.md"
    );
    fs.writeFileSync(sideEffectsSummaryPath, html);
  });
}
