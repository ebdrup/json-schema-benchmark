const util = require("util");
const glob = require("glob");

const ZSchema = require("z-schema");
const jjv = require("jjv");
const jassi = require("jassi");
const jsv = require("JSV");
const JsonSchema = require("jsonschema");
const tv4 = require("tv4");
const JsonModel = require("json-model");
const Themis = require("themis");
const imjv = require("is-my-json-valid");
const jsck = require("jsck");
const requestValidator = require("request-validator");
const skeemas = require("skeemas");
const revalidator = require("revalidator");
const jsonGate = require("json-gate");
const jsen = require("jsen");
const schemasaurus = require("schemasaurus");
const ajv = require("ajv")({ schemaId: "auto" });
const djv = require("djv")();
const jsvg = require("json-schema-validator-generator").default;
const jlib = require("json-schema-library");
const schemasafe = require("@exodus/schemasafe");
let cfworker;

module.exports = async function valivators(draftUri, draftVersion) {
  const files = await util.promisify(glob)(
    "JSON-Schema-Test-Suite/remotes/**/*.json"
  );

  const refs = files.reduce(
    (acc, file) => {
      acc[
        `http://localhost:1234/${file.replace(
          "JSON-Schema-Test-Suite/remotes/",
          ""
        )}`
      ] = require(`./${file}`);
      return acc;
    },
    {
      "http://json-schema.org/draft-04/schema": require("./refs/json-schema-draft-04.json"),
      "http://json-schema.org/draft-06/schema": require("./refs/json-schema-draft-06.json"),
      "http://json-schema.org/draft-07/schema": require("./refs/json-schema-draft-07.json"),
    }
  );

  Object.keys(refs).forEach(function(uri) {
    try {
      ajv.addSchema(refs[uri], uri);
    } catch (ex) {} //ignore draft-04 already loaded
    djv.addSchema(uri, refs[uri]);
    jlib.addSchema(uri, refs[uri]);
  });

  const validators = [
    {
      name: "json-schema-validator-generator",
      setup: function(schema) {
        return eval(jsvg(schema).js);
      },
      test: function(instance, json, schema) {
        return instance.root(json) === 0;
      },
    },
    {
      name: "is-my-json-valid",
      setup: function(schema) {
        // no $refs supported
        return imjv(schema, { schemas: refs });
      },
      test: function(instance, json, schema) {
        return instance(json);
      },
    },
    {
      name: "jsen",
      setup: function(schema) {
        return jsen(schema, { schemas: refs });
      },
      test: function(instance, json, schema) {
        return instance(json);
      },
    },
    {
      name: "ajv",
      setup: function(schema) {
        ajv._opts.defaultMeta = draftUri;
        return ajv.compile(schema);
      },
      test: function(instance, json, schema) {
        return instance(json);
      },
    },
    {
      name: "themis",
      setup: function(schema) {
        // $refs only supported if they have id attributes and the test suite refs do not
        return Themis.validator(schema);
      },
      test: function(instance, json, schema) {
        return instance(json, "0").valid;
      },
      benchmarks:
        "https://cdn.rawgit.com/playlyfe/themis/master/benchmark/results.html",
    },
    {
      name: "z-schema",
      setup: function() {
        const validator = new ZSchema({
          ignoreUnresolvableReferences: true,
        });
        Object.keys(refs).forEach(function(uri) {
          validator.setRemoteReference(uri, refs[uri]);
        });
        return validator;
      },
      test: function(instance, json, schema) {
        return instance.validate(json, schema);
      },
      benchmarks:
        "https://rawgit.com/zaggino/z-schema/master/benchmark/results.html",
    },
    {
      name: "jjv",
      setup: function() {
        const validator = jjv();
        Object.keys(refs).forEach(function(uri) {
          validator.addSchema(uri, refs[uri]);
        });

        return validator;
      },
      test: function(instance, json, schema) {
        return instance.validate(schema, json) === null;
      },
    },
    {
      name: "djv",
      setup: function(schema) {
        const version = {
          "4": "draft-04",
          "6": "draft-06",
          "7": "draft-07",
        }[draftVersion];
        djv.useVersion(version);
        return djv.addSchema("test", schema).fn;
      },
      test: function(instance, json, schema) {
        return instance(json) === undefined;
      },
    },
    {
      name: "skeemas",
      setup: function(schema) {
        const validator = skeemas();
        Object.keys(refs).forEach(function(uri) {
          validator.addRef(uri, refs[uri]);
        });
        return validator;
      },
      test: function(instance, json, schema) {
        return instance.validate(json, schema).valid;
      },
    },
    {
      name: "schemasaurus",
      setup: function(schema) {
        return schemasaurus.newValidator(schema);
      },
      test: function(instance, json) {
        return instance(json).valid;
      },
    },
    {
      name: "jsck",
      setup: function(schema) {
        // no $refs supported
        return new jsck.draft4(schema); // draft-04 is max supported version
      },
      test: function(instance, json, schema) {
        return instance.validate(json).valid;
      },
      benchmarks:
        "https://github.com/pandastrike/jsck/blob/master/doc/benchmarks.md",
    },
    {
      name: "jassi",
      // no $refs supported
      setup: function(schema) {
        return jassi;
      },
      test: function(instance, json, schema) {
        return instance(json, schema).length === 0;
      },
    },

    {
      name: "JSV",
      setup: function(schema) {
        // no documented $refs supported
        return jsv;
      },
      test: function(instance, json, schema) {
        return (
          instance.JSV.createEnvironment().validate(json, schema).errors
            .length === 0
        );
      },
    },
    {
      name: "request-validator",
      setup: function(schema) {
        // no documented $refs supported
        return requestValidator(schema);
      },
      test: function(instance, json, schema) {
        try {
          instance.validate(json);
          return true;
        } catch (e) {
          return false;
        }
      },
    },
    {
      name: "json-gate",
      setup: function(schema) {
        // no documented $refs supported
        return jsonGate.createSchema(schema);
      },
      test: function(instance, json, schema) {
        try {
          instance.validate(json);
          return true;
        } catch (e) {
          return false;
        }
      },
    },
    {
      name: "json-model",
      setup: function(schema) {
        // no comprehensible documented $refs supported
        return JsonModel.validator(schema);
      },
      test: function(instance, json, schema) {
        return instance(json).valid;
      },
    },
    {
      name: "tv4",
      setup: function() {
        //adding this actually makes tv4 fail all tests with "Maximum call stack size exceeded" on loading schemas
        //Object.keys(refs).forEach(function (uri) {
        //	tv4.addSchema(uri, refs[uri]);
        //});
        return tv4;
      },
      test: function(instance, json, schema) {
        return instance.validateResult(json, schema).valid;
      },
    },
    {
      name: "jsonschema",
      setup: function() {
        const validator = new JsonSchema.Validator();
        Object.keys(refs).forEach(function(uri) {
          validator.addSchema(refs[uri], uri);
        });
        return validator;
      },
      test: function(instance, json, schema) {
        return instance.validate(json, schema).errors.length === 0;
      },
    },
    {
      name: "revalidator",
      setup: function() {
        return revalidator;
      },
      test: function(instance, json, schema) {
        return instance.validate(json, schema).valid;
      },
    },
    {
      name: "json-schema-library",
      setup: function(schema) {
        if (draftVersion === "4") {
          return new jlib.Draft04(schema);
        } else if (draftVersion === "6") {
          return new jlib.Draft06(schema);
        } else {
          return new jlib.Draft07(schema);
        }
      },
      test: function(instance, json, schema) {
        return instance.isValid(json);
      },
    },
    {
      name: "@exodus/schemasafe",
      setup: function(schema) {
        return schemasafe.validator(schema, {
          allowUnusedKeywords: true,
          includeErrors: true,
          schemas: refs,
          $schemaDefault: "https://json-schema.org/draft-06/schema",
        });
      },
      test: function(instance, json, schema) {
        return instance(json);
      },
    },
    {
      name: "@cfworker/json-schema",
      setup: (schema) => {
        const validator = new cfworker.Validator(schema, draftVersion);
        Object.keys(refs).forEach((id) => validator.addSchema(refs[id], id));
        return validator;
      },
      test: (validator, json) => validator.validate(json).valid,
    },
  ];

  cfworker = await import("@cfworker/json-schema");
  return validators;
};
