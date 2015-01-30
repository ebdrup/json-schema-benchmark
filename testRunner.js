var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var benchmark = require('benchmark');
var mustache = require('mustache');
var deepEqual = require('deep-equal');
var npm = require('npm');
var async = require('async');

module.exports = function (validators) {
	npm.load(npm.config, function (err) {
		if (err) {
			console.error(err.stack);
			process.exit(1);
		}
		var tasks = validators.map(function (validator) {
			return function (callback) {
				npm.commands.view([validator.name + '@latest', 'homepage'], true, function (err, result) {
					if (err) {
						return callback(err);
					}
					var version = Object.keys(result)[0];
					if (version) {
						validator.homepage = result[version].homepage;
					}
					return callback(null);
				});
			};
		});
		async.parallel(tasks, function (err) {
			if (err) {
				console.error(err.stack);
				process.exit(1);
			}
			validators.forEach(function (v) {
				v.link = v.homepage ? '[`' + v.name + '`](' + v.homepage + ')' : v.name;
			});
			var excludeTests = [
				//lots of validators fail these
				'invalid definition, invalid definition schema',
				'maxLength validation, two supplementary Unicode code points is long enough',
				'minLength validation, one supplementary Unicode code point is not long enough'
			];
			var excludeTestSuites = [
				//lost failing these tests
				'remote ref',
				'remote ref, containing refs itself',
				'fragment within remote ref',
				'ref within remote ref',
				'change resolution scope',
				// these below were added to get jsck in the benchmarks)
				'uniqueItems validation',
				'valid definition',
				'invalid definition'
			];
			var testSuites = readTests(path.join(__dirname + '/JSON-Schema-Test-Suite/tests/draft4/'));
			var optionalTests = getTestNames(readTests(path.join(__dirname + '/JSON-Schema-Test-Suite/tests/draft4/optional')));
			excludeTests = excludeTests.concat(optionalTests);
			validators.forEach(function (validator) {
				validator.failingTests = [];
				validator.sideEffects = [];
				validator.timesFastest = 0;
			});
			var goodValidators = validators
				.filter(function (validator) {
					return testSuites.reduce(function (acc, testSuite) {
						return verifyValidator(validator, testSuite, excludeTestSuites, excludeTests) && acc;
					}, true);
				});
			var allTestNames = getTestNames(testSuites);
			var testsThatAllValidatorsFail = validators.reduce(function (acc, validator) {
				return _.intersection(acc, validAndInvalid(validator, allTestNames));
			}, validAndInvalid(validators[0], allTestNames));
			var results = runBenchmark(goodValidators, testSuites, excludeTestSuites, excludeTests);
			saveResults(results, validators, allTestNames, testsThatAllValidatorsFail)
		});
	});
};

function getTestNames(testSuites) {
	return testSuites.reduce(function (acc, testSuite) {
		return acc.concat(testSuite.tests.map(function (test) {
			return [testSuite.description, test.description].join(', ')
		}));
	}, []);
}

function validAndInvalid(validator, allTestNames) {
	var testNames = _.pluck(validator.failingTests, 'testName').filter(Boolean);
	return _.intersection(testNames.concat(testNames.map(function (testName) {
		return testName.indexOf('invalid') === -1 ?
			testName.replace(/valid/g, 'invalid') :
			testName.replace(/invalid/g, 'valid');
	})), allTestNames);
}

function verifyValidator(validator, testSuiteIn, excludeTestSuites, excludeTests) {
	// verify that validator really works
	var passedAllTests = true;
	var schemaFailedToLoad = false;
	var testSuite = JSON.parse(JSON.stringify(testSuiteIn));
	try {
		var validatorInstance = validator.setup(testSuite.schema);
	} catch (ex) {
		schemaFailedToLoad = ex.message;
	}
	testSuite.tests.forEach(function (test) {
		var testName = [testSuite.description, test.description].join(', ');
		var originalData = JSON.parse(JSON.stringify(test.data));
		var givenResult;
		if (schemaFailedToLoad) {
			var message = validator.name + ' failed the test `' + testName + '`. Because the schema failed to load' +
				'(`' + schemaFailedToLoad + '`)';
			if (excludeTests.indexOf(testName) === -1 && excludeTestSuites.indexOf(testSuite.description) === -1) {
				passedAllTests = false;
				message += '. **This excludes this validator from performance tests**'
			}
			//console.warn(message);
			validator.failingTests.push({message: message, testName: testName});
			return;
		}
		try {
			givenResult = validator.test(validatorInstance, test.data, testSuite.schema);
		} catch (e) {
			givenResult = e.message;
		}
		if (!deepEqual(originalData, test.data)) {
			var message = validator.name + ' had a side-effect on (altered the original) data in the test `' + testName + '`';
			message += '. **This excludes this validator from performance tests**';
			passedAllTests = false;
			validator.sideEffects.push({message: message, testName: testName});
		}
		if (!deepEqual(testSuite.schema, testSuiteIn.schema)) {
			var message = validator.name + ' had a side-effect on (altered the original) schema in the test `' + testName + '`';
			validator.sideEffects.push({message: message, testName: testName});
		}
		if (givenResult !== test.valid) {
			var message = validator.name + ' failed the test `' + testName + '`. Expected result: `' +
				JSON.stringify(test.valid) + '` but validator returned: `' +
				JSON.stringify(givenResult) + '`';
			if (excludeTests.indexOf(testName) === -1 && excludeTestSuites.indexOf(testSuite.description) === -1) {
				passedAllTests = false;
				message += '. **This excludes this validator from performance tests**';
			}
			//console.warn(message);
			validator.failingTests.push({message: message, testName: testName});
			return;
		}
	});
	return passedAllTests;
}

function runBenchmark(validators, testSuites, excludeTestSuites, excludeTests) {
	var suite = new benchmark.Suite();
	validators.forEach(function (validator) {
		var testSuitesCopy = JSON.parse(JSON.stringify(testSuites))
			.filter(function (testSuite) {
				return excludeTestSuites.indexOf(testSuite.description) === -1;
			});
		testSuitesCopy.forEach(function (testSuite) {
			testSuite.validatorInstance = validator.setup(testSuite.schema);
			testSuite.tests = testSuite.tests.filter(function (test) {
				var testName = [testSuite.description, test.description].join(', ');
				return excludeTests.indexOf(testName) === -1;
			});
		});
		suite.add(validator.name, function () {
			testSuitesCopy.forEach(function (testSuite) {
				testSuite.tests.forEach(function (test) {
					validator.test(testSuite.validatorInstance, test.data, testSuite.schema);
				});
			});
		});

	});

	suite
		.on('cycle', function (event) {
			console.log(String(event.target));
		})
		.on('complete', function () {
			console.log('Fastest is ' + this.filter('fastest').pluck('name'));
		})
		.run({
			async: false
		});

	var fastestTestResult = suite.reduce(function (acc, testResult) {
		testResult.hz = Math.round(testResult.hz);
		var currentFastestHz = (acc && acc.hz) || 0;
		return (testResult.hz > currentFastestHz) ? testResult : acc
	}, null);
	var fastestValidator = _.find(validators, function (validator) {
		return fastestTestResult &&
			validator.name === fastestTestResult.name;
	});
	if (fastestValidator) { // if all fail, no-one is the fastest
		fastestValidator.timesFastest += 1;
	}
	var suiteResult = validators.map(function (validator) {
		var result = _.find(suite, function (obj) {
			return validator.name === obj.name;
		});
		return {
			hz: result.hz,
			fastest: result.hz === fastestTestResult.hz,
			percentage: Math.round((result.hz || 0) / fastestTestResult.hz * 1000) / 10,
			name: validator.name,
			plusMinusPercent: Math.round(result.stats.rme * 100) / 100,
			link: validator.link
		};
	});
	return suiteResult;
}

function readTests(dirpath) {
	return require('fs-readdir-recursive')(dirpath).reduce(function (acc, value) {
		return acc.concat(require(path.join(dirpath, value)));
	}, []);
}

function comma(arr) {
	for (var i = 0; i < arr.length - 1; i++) {
		arr[i].comma = true; //for template
	}
	return arr;
}


function saveResults(results, validators, allTestNames, testsThatAllValidatorsFail) {
	var readmePath = path.join(__dirname, 'README.md');
	var readmeTemplate = fs.readFileSync(path.join(__dirname, 'README.template'), 'utf-8');
	var testsTemplate = fs.readFileSync(path.join(__dirname, 'reports/TESTS.template'), 'utf-8');
	var sideEffectsTemplate = fs.readFileSync(path.join(__dirname, 'reports/SIDE-EFFECTS.template'), 'utf-8');

	var validatorsFailingTests = validators
		.map(function (validator) {
			return {
				name: validator.name,
				link: validator.link,
				count: validator.failingTests.length
			};
		})
		.sort(function (a, b) {
			return a.count - b.count;
		});
	var validatorsSideEffects = validators
		.map(function (validator) {
			return {
				name: validator.name,
				link: validator.link,
				count: validator.sideEffects.length,
				sideEffects: validator.sideEffects
			};
		})
		.filter(function (o) {
			return o.count !== 0;
		})
		.sort(function (a, b) {
			return a.count - b.count;
		});
	var maxFailingTests = validatorsFailingTests.reduce(function (acc, v) {
		return Math.max(acc, v.count);
	}, 0);
	validators.forEach(function (validator) {
		validator.failingTests = validator.failingTests.filter(function (t) {
			return testsThatAllValidatorsFail.indexOf(t.testName) === -1;
		})
	});
	results.sort(function (a, b) {
		return b.hz - a.hz
	});
	var graphBarSpacing = 4;
	var resultGraphBarHeight = Math.floor(400 / results.length) - graphBarSpacing;
	var resultsGraphHeight = (resultGraphBarHeight + graphBarSpacing) * results.length + 20;
	var validatorsFailingTestsGraphBarHeight = Math.floor(400 / validatorsFailingTests.length) - graphBarSpacing;
	var validatorsFailingTestsGraphHeight = (validatorsFailingTestsGraphBarHeight + graphBarSpacing) * validatorsFailingTests.length + 20;
	var data = {
		graphBarSpacing: graphBarSpacing,
		validators: comma(validators),
		fastestValidator: results[0].link,
		testsThatAllValidatorsFail: comma(testsThatAllValidatorsFail.map(function (testName) {
			return {name: testName};
		})),
		validatorsFailingTests: comma(validatorsFailingTests),
		validatorsFailingTestsGraphHeight: validatorsFailingTestsGraphHeight,
		validatorsFailingTestsGraphBarHeight: validatorsFailingTestsGraphBarHeight,
		maxFailingTests: maxFailingTests,
		validatorsSideEffects: comma(validatorsSideEffects),
		results: comma(results),
		resultsGraphHeight: resultsGraphHeight,
		resultGraphBarHeight: resultGraphBarHeight
	};
	var html = mustache.render(readmeTemplate, data);
	fs.writeFileSync(readmePath, html);
	validators.forEach(function (validator) {
		var html = mustache.render(testsTemplate, {
			link: validator.link,
			failingTests: validator.failingTests,
			testsThatAllValidatorsFail: comma(testsThatAllValidatorsFail.map(function (testName) {
				return {name: testName};
			}))
		});
		var testSummaryPath = path.join(__dirname, '/reports/', validator.name + '.md');
		fs.writeFileSync(testSummaryPath, html);
	});
	validatorsSideEffects.forEach(function (sideEffects) {
		var html = mustache.render(sideEffectsTemplate, sideEffects);
		var sideEffectsSummaryPath = path.join(__dirname, '/reports/', sideEffects.name + '-side-effects.md');
		fs.writeFileSync(sideEffectsSummaryPath, html);
	});
}
