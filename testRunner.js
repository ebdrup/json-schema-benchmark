var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var benchmark = require('benchmark');
var mustache = require('mustache');
var deepEqual = require('deep-equal');

module.exports = function (validators) {
	var start = process.hrtime();
	var excludeTests = [
		'valid definition, valid definition schema',
		'invalid definition, invalid definition schema',
		'remote ref, containing refs itself, remote ref valid',
		'remote ref, containing refs itself, remote ref invalid',
		'remote ref, remote ref valid',
		'remote ref, remote ref invalid',
		'fragment within remote ref, remote fragment valid',
		'fragment within remote ref, remote fragment invalid',
		'ref within remote ref, ref within ref valid',
		'ref within remote ref, ref within ref invalid',
		'change resolution scope, changed scope ref valid',
		'change resolution scope, changed scope ref invalid',
		'maxLength validation, two supplementary Unicode code points is long enough',
		'minLength validation, one supplementary Unicode code point is not long enough',
		'some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part',
		'validation of URIs, an invalid URI',
		'validation of URIs, an invalid URI though valid URI reference'
	];
	var testSuites = readTests(path.join(__dirname + '/JSON-Schema-Test-Suite/tests/draft4/'));
	validators.forEach(function (validator) {
		validator.testsFailed = [];
		validator.sideEffects = [];
		validator.timesFastest = 0;
	});

	var goodValidators = validators
		.filter(function (validator) {
			return testSuites.reduce(function (acc, testSuite) {
				return verifyValidator(validator, testSuite, excludeTests) && acc;
			}, true);
		});
	var results = runBenchmark(goodValidators, testSuites, excludeTests);
	var end = process.hrtime();
	saveResults(start, end, results, validators, goodValidators)
};

function verifyValidator(validator, testSuiteIn, excludeTests) {
	// verify that validator really works
	var testsThatShouldSetDefaultProperty = [
		'invalid type for default, still valid when the invalid default is used',
		'invalid string value for default, still valid when the invalid default is used'
	];
	var passedAllTests = true;
	var schemaFailedToLoad = false;
	var testSuite = JSON.parse(JSON.stringify(testSuiteIn));
	try {
		var validatorInstance = validator.setup(testSuite.schema);
	} catch (ex) {
		var message = validator.name + ' could not instantiate with schema for "' + testSuite.description +
			'". This is multiple tests failing. **This excludes this validator from performance tests** (' + ex.message + ')';
		//console.warn(message + ex.stack);
		validator.testsFailed.push({message: message});
		schemaFailedToLoad = true;
	}
	testSuite.tests.forEach(function (test) {
		var testName = [testSuite.description, test.description].join(', ');
		var originalData = JSON.parse(JSON.stringify(test.data));
		var givenResult;
		if (schemaFailedToLoad) {
			var message = validator.name + ' failed the test "' + testName + '". Because the schema failed to load';
			if (excludeTests.indexOf(testName) === -1) {
				passedAllTests = false;
				message += '. **This excludes this validator from performance tests**'
			}
			//console.warn(message);
			validator.testsFailed.push({message: message, test: test});
			return;
		}
		try {
			givenResult = validator.test(validatorInstance, test.data, testSuite.schema);
		} catch (e) {
			givenResult = e.message;
		}
		if (testsThatShouldSetDefaultProperty.indexOf(testName) === -1) {
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
		}
		if (givenResult !== test.valid) {
			var message = validator.name + ' failed the test "' + testName + '". Expected result: ' +
				JSON.stringify(test.valid) + ' but validator returned: ' +
				JSON.stringify(givenResult);
			if (excludeTests.indexOf(testName) === -1) {
				passedAllTests = false;
				message += '. **This excludes this validator from performance tests**';
			}
			//console.warn(message);
			validator.testsFailed.push({message: message, testName: testName});
			return;
		}
		if (deepEqual(originalData, test.data) && testsThatShouldSetDefaultProperty.indexOf(testName) !== -1) {
			var message = validator.name + ' did not set default property in test "' + testName + '"';
			validator.testsFailed.push({message: message, testName: testName});
		}
	});
	return passedAllTests;
}

function runBenchmark(validators, testSuites, excludeTests) {
	var suite = new benchmark.Suite();
	validators.forEach(function (validator) {
		var testSuitesCopy = JSON.parse(JSON.stringify(testSuites));
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
	var suiteResult = validators.map(function (validatorObject) {
		var result = _.find(suite, function (obj) {
			return validatorObject.name === obj.name;
		});
		if (result) {
			return {
				hz: result.hz,
				fastest: result.hz === fastestTestResult.hz,
				percentage: Math.round((result.hz || 0) / fastestTestResult.hz * 1000) / 10
			};
		} else {
			return {
				hz: -1,
				failed: true
			};
		}
	});
	for (var i = 0; i < suiteResult.length - 1; i++) {
		suiteResult[i].comma = true; //for template
	}
	return suiteResult;
}

function readTests(dirpath) {
	return require('fs-readdir-recursive')(dirpath).reduce(function (acc, value) {
		return acc.concat(require(path.join(dirpath, value)));
	}, []);
}


function saveResults(start, end, results, validators, goodValidators) {
	var readmePath = path.join(__dirname, 'README.md');
	var template = fs.readFileSync(path.join(__dirname, 'README.template'), 'utf-8');
	var totalTimeInMinutes = ((end[0] - start[0]) / 60);
	totalTimeInMinutes = parseInt(totalTimeInMinutes * 100, 10) / 100;
	var currentDate = new Date().toLocaleDateString();
	var html = mustache.render(
		template,
		{
			validators: validators,
			goodValidators: goodValidators,
			results: results,
			currentDate: currentDate,
			totalTime: totalTimeInMinutes
		}
	);
	fs.writeFileSync(readmePath, html);
	console.log(readmePath + ' created on ' + currentDate + ' in ' + totalTimeInMinutes + ' minutes');
}
