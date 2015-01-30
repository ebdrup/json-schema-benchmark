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
			return imjv(schema);
		},
		test: function (instance, json, schema) {
			return !!instance(json);
		}
	},
	{
		name: 'themis',
		setup: function (schema) {
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
			return jjv();
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
			return new JaySchema();
		},
		test: function (instance, json, schema) {
			return instance.validate(json, schema).length === 0;
		}
	},
	{
		name: 'jsck',
		setup: function (schema) {
			return new jsck.draft4(schema);
		},
		test: function (instance, json, schema) {
			return instance.validate(json).valid;
		}
	},
	{
		name: 'jassi',
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
			return jsv;
		},
		test: function (instance, json, schema) {
			return instance.JSV.createEnvironment().validate(json, schema).errors.length === 0;
		}
	},
	{
		name: 'request-validator',
		setup: function (schema) {
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
			return JsonModel.validator(schema);
		},
		test: function (instance, json, schema) {
			return instance(json).valid;
		}
	},
	{
		name: 'tv4',
		setup: function () {
			Object.keys(refs).forEach(function(uri) {
				tv4.addSchema(uri, refs[uri]);
			});

			return tv4;
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
