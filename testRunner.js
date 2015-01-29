var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var benchmark = require('benchmark');
var mustache = require('mustache');
var deepEqual = require('deep-equal');

module.exports = function (validators) {
	var start = process.hrtime();
	var excludeTests = [
		'invalid definition, invalid definition schema',
		'maxLength validation, two supplementary Unicode code points is long enough',
		'minLength validation, one supplementary Unicode code point is not long enough',
		'some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part',
		'validation of URIs, an invalid URI',
		'validation of URIs, an invalid URI though valid URI reference'
	];
	var excludeTestSuites = [
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
	var testsThatAllValidatorsFail = validators.reduce(function (acc, validator) {
		return _.intersection(acc, validAndInvalid(validator));
	}, validAndInvalid(validators[0]));
	var results = runBenchmark(goodValidators, testSuites, excludeTestSuites, excludeTests);
	var end = process.hrtime();
	saveResults(start, end, results, validators, testsThatAllValidatorsFail)
};

function validAndInvalid(validator) {
	var testNames = _.pluck(validator.failingTests, 'testName').filter(Boolean);
	return testNames.concat(testNames.map(function (testName) {
		return testName.indexOf('invalid') === -1 ?
			testName.replace(/valid/g, 'invalid') :
			testName.replace(/invalid/g, 'valid');
	}))
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
			var message = validator.name + ' failed the test "' + testName + '". Because the schema failed to load' +
				'(' + schemaFailedToLoad + ')';
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
			var message = validator.name + ' had a side-effect on (altered the original) data in the test "' + testName + '"';
			message += '. **This excludes this validator from performance tests**';
			passedAllTests = false;
			validator.sideEffects.push({message: message, testName: testName});
		}
		if (!deepEqual(testSuite.schema, testSuiteIn.schema)) {
			var message = validator.name + ' had a side-effect on (altered the original) schema in the test "' + testName + '"';
			validator.sideEffects.push({message: message, testName: testName});
		}
		if (givenResult !== test.valid) {
			var message = validator.name + ' failed the test "' + testName + '". Expected result: ' +
				JSON.stringify(test.valid) + ' but validator returned: ' +
				JSON.stringify(givenResult);
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
			name: validator.name
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


function saveResults(start, end, results, validators, testsThatAllValidatorsFail) {
	var readmePath = path.join(__dirname, 'README.md');
	var template = fs.readFileSync(path.join(__dirname, 'README.template'), 'utf-8');
	var totalTimeInMinutes = ((end[0] - start[0]) / 60);
	totalTimeInMinutes = parseInt(totalTimeInMinutes * 100, 10) / 100;
	var currentDate = new Date().toLocaleDateString();
	var validatorsFailingTests = validators
		.map(function (validator) {
			return {
				name: validator.name,
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
				count: validator.sideEffects.length
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
	var html = mustache.render(
		template,
		{
			graphBarSpacing: graphBarSpacing,
			validators: comma(validators),
			fastestValidator: results[0].name,
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
			resultGraphBarHeight: resultGraphBarHeight,
			currentDate: currentDate,
			totalTime: totalTimeInMinutes
		}
	);
	fs.writeFileSync(readmePath, html);
	console.log(readmePath + ' created on ' + currentDate + ' in ' + totalTimeInMinutes + ' minutes');
}
