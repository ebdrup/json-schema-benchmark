var testRunner = require('./testRunner');

var ZSchema = require('z-schema');
var JaySchema = require('jayschema');
var jjv = require('jjv');
var JsonSchema = require('jsonschema');
var tv4 = require('tv4');
var JsonModel = require('json-model');
var Themis = require('themis');
var imjv = require('is-my-json-valid');

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
		name: "themis",
		setup: function (schema) {
			return Themis.validator(schema);
		},
		test: function (instance, json, schema) {
			return instance(json, '0').valid === true;
		}
	},
	{
		name: "json-model",
		setup: function (schema) {
			return JsonModel.validator(schema);
		},
		test: function (instance, json, schema) {
			// If we're repeatedly testing the same schema, use the existing validator
			return instance(json).valid === true;
		}
	},
	{
		name: "z-schema 3",
		setup: function () {
			return new ZSchema({
				ignoreUnresolvableReferences: true
			});
		},
		test: function (instance, json, schema) {
			return instance.validate(json, schema);
		}
	},
	{
		name: "tv4",
		setup: function () {
			return tv4;
		},
		test: function (instance, json, schema) {
			return instance.validateResult(json, schema).valid === true;
		}
	},
	{
		name: "jjv",
		setup: function () {
			return jjv();
		},
		test: function (instance, json, schema) {
			return instance.validate(schema, json) === null;
		}
	},
	{
		name: "jsonschema",
		setup: function () {
			return new JsonSchema.Validator();
		},
		test: function (instance, json, schema) {
			return instance.validate(json, schema).errors.length === 0;
		}
	},
	{
		name: "jayschema",
		setup: function () {
			return new JaySchema();
		},
		test: function (instance, json, schema) {
			return instance.validate(json, schema).length === 0;
		}
	}
]);
