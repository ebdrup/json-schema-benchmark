"use strict";

var Tester = require('./tester');

var ZSchema = require('z-schema');
var JaySchema = require('jayschema');
var jjv = require('jjv');
var JsonSchema = require('jsonschema');
var tv4 = require('tv4');
var JsonModel = require('json-model');
var Themis = require('themis');
var imjv = require('is-my-json-valid');


Tester.registerValidator({
	name: 'is-my-json-valid',
	setup: function (schema) {
		return imjv(schema);
	},
	test: function (instance, json, schema) {
		return !!instance(json);
	}
});

Tester.registerValidator({
	name: "themis(minimal)",
	setup: function (schema) {
		return Themis.validator(schema, {
			enable_defaults: false,
			errors: {messages: false, validator_value: false, schema: false}
		});
	},
	test: function (instance, json, schema) {
		return instance(json, '0').valid === true;
	}
});

Tester.registerValidator({
	name: "themis(default)",
	setup: function (schema) {
		return Themis.validator(schema, {enable_defaults: true});
	},
	test: function (instance, json, schema) {
		return instance(json, '0').valid === true;
	}
});

Tester.registerValidator({
	name: "json-model",
	setup: function (schema) {
		return JsonModel.validator(schema);
	},
	test: function (instance, json, schema) {
		// If we're repeatedly testing the same schema, use the existing validator
		return instance(json).valid === true;
	}
});

Tester.registerValidator({
	name: "z-schema 3",
	setup: function () {
		return new ZSchema({
			ignoreUnresolvableReferences: true
		});
	},
	test: function (instance, json, schema) {
		return instance.validate(json, schema);
	}
});

Tester.registerValidator({
	name: "tv4",
	setup: function () {
		return tv4;
	},
	test: function (instance, json, schema) {
		return instance.validateResult(json, schema).valid === true;
	}
});

Tester.registerValidator({
	name: "jjv",
	setup: function () {
		return jjv();
	},
	test: function (instance, json, schema) {
		return instance.validate(schema, json) === null;
	}
});

Tester.registerValidator({
	name: "jsonschema",
	setup: function () {
		return new JsonSchema.Validator();
	},
	test: function (instance, json, schema) {
		return instance.validate(json, schema).errors.length === 0;
	}
});

Tester.registerValidator({
	name: "jayschema",
	setup: function () {
		return new JaySchema();
	},
	test: function (instance, json, schema) {
		return instance.validate(json, schema).length === 0;
	}
});

var path = require('path');
var basicObject = require('./schemas/basic_object.json');
var basicSchema = require('./schemas/basic_schema_v4.json');
Tester.runOne('basicObject', basicObject, basicSchema, true);
var advancedObject = require('./schemas/advanced_object.json');
var advancedSchema = require('./schemas/advanced_schema_v4.json');
false && Tester.runOne('advancedObject', advancedObject, advancedSchema, true);

false && Tester.runDirectory(path.join(__dirname + '/JSON-Schema-Test-Suite/tests/draft4/'), {
	excludeFiles: [],
	excludeTests: [
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
		'change resolution scope, changed scope ref invalid'
	]
});

Tester.saveResults('README.md', 'README.template');

