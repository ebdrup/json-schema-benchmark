var testRunner = require('./testRunner');

var ZSchema = require('z-schema');
var JaySchema = require('jayschema');
var jjv = require('jjv');
var jassi = require('jassi');
var jsv = require('JSV');
var JsonSchema = require('jsonschema');
var tv4 = require('tv4');
var JsonModel = require('json-model');
var Themis = require('themis');
var imjv = require('is-my-json-valid');
var jsck = require('jsck');
var requestValidator = require('request-validator');
var skeemas = require('skeemas');

var refs = {
	'http://localhost:1234/integer.json': require('./JSON-Schema-Test-Suite/remotes/integer.json'),
	'http://localhost:1234/subSchemas.json': require('./JSON-Schema-Test-Suite/remotes/subSchemas.json'),
	'http://localhost:1234/folder/folderInteger.json': require('./JSON-Schema-Test-Suite/remotes/folder/folderInteger.json'),
	'http://json-schema.org/draft-03/schema': require('./refs/json-schema-draft-03.json'),
	'http://json-schema.org/draft-04/schema': require('./refs/json-schema-draft-04.json')
};

testRunner([
	{
		name: 'is-my-json-valid',
		setup: function (schema) {
			// no $refs supported
			return imjv(schema);
		},
		test: function (instance, json, schema) {
			return !!instance(json);
		}
	},
	{
		name: 'themis',
		setup: function (schema) {
			// $refs only supported if they have id attributes and the test suite refs do not
			return Themis.validator(schema);
		},
		test: function (instance, json, schema) {
			return instance(json, '0').valid;
		}
	},
	{
		name: 'z-schema',
		setup: function () {
			var validator = new ZSchema({
				ignoreUnresolvableReferences: true
			});

			Object.keys(refs).forEach(function(uri) {
				validator.setRemoteReference(uri, refs[uri]);
			});

			return validator;
		},
		test: function (instance, json, schema) {
			return instance.validate(json, schema);
		}
	},
	{
		name: 'jjv',
		setup: function () {
			var validator = jjv();

			Object.keys(refs).forEach(function(uri) {
				validator.addSchema(uri, refs[uri]);
			});

			return validator;
		},
		test: function (instance, json, schema) {
			return instance.validate(schema, json) === null;
		}
	},
	{
		name: 'skeemas',
		setup: function (schema) {
			var validator = skeemas();

			Object.keys(refs).forEach(function(uri) {
				validator.addRef(uri, refs[uri]);
			});

			return validator;
		},
		test: function (instance, json, schema) {
			return instance.validate(json, schema).valid;
		}
	},
	{
		name: 'jayschema',
		setup: function () {
			// $refs not supported with synchronous validation, only asyc
			return new JaySchema();
		},
		test: function (instance, json, schema) {
			return instance.validate(json, schema).length === 0;
		}
	},
	{
		name: 'jsck',
		setup: function (schema) {
			// no $refs supported
			return new jsck.draft4(schema);
		},
		test: function (instance, json, schema) {
			return instance.validate(json).valid;
		}
	},
	{
		name: 'jassi',
			// no $refs supported
		setup: function (schema) {
			return jassi;
		},
		test: function (instance, json, schema) {
			return instance(json, schema).length === 0;
		}
	},

	{
		name: 'JSV',
		setup: function (schema) {
			// no documented $refs supported
			return jsv;
		},
		test: function (instance, json, schema) {
			return instance.JSV.createEnvironment().validate(json, schema).errors.length === 0;
		}
	},
	{
		name: 'request-validator',
		setup: function (schema) {
			// no documented $refs supported
			return requestValidator(schema);
		},
		test: function (instance, json, schema) {
			try {
				instance.validate(json);
				return true;
			}
			catch (e) {
				return false;
			}
		}
	},
	{
		name: 'json-model',
		setup: function (schema) {
			// no comprehensible documented $refs supported
			return JsonModel.validator(schema);
		},
		test: function (instance, json, schema) {
			return instance(json).valid;
		}
	},
	{
		name: 'tv4',
		setup: function () {
			var validator = tv4.freshApi();

			// Adding schemas to tv4 seems to cause many additional test failures
			// Uncommenting this takes tv4 from 26 failures to 290...
			// Object.keys(refs).forEach(function(uri) {
			// 	validator.addSchema(uri, refs[uri]);
			// });

			return validator;
		},
		test: function (instance, json, schema) {
			return instance.validateResult(json, schema).valid;
		}
	},
	{
		name: 'jsonschema',
		setup: function () {
			var validator = new JsonSchema.Validator();

			Object.keys(refs).forEach(function(uri) {
				validator.addSchema(refs[uri], uri);
			});

			return validator;
		},
		test: function (instance, json, schema) {
			return instance.validate(json, schema).errors.length === 0;
		}
	}
]);
