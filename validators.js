const util = require("util");
const glob = require("glob");

const ZSchema = require("z-schema");
const jjv = require("jjv");
const jassi = require("jassi");
const jsv = require("JSV");
const JsonSchema = require("jsonschema");
const tv4 = require("tv4");
const JsonModel = require("json-model");
const imjv = require("is-my-json-valid");
const jsck = require("jsck");
const requestValidator = require("request-validator");
const skeemas = require("skeemas");
const revalidator = require("revalidator");
const jsonGate = require("json-gate");
const jsen = require("jsen");
const schemasaurus = require("schemasaurus");
const Ajv = require("ajv");
const AjvDraft04 = require("ajv-draft-04");
const Ajv2019 = require("ajv/dist/2019");
const Ajv2020 = require("ajv/dist/2020");
const djv = require("djv")();
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
    {}
  );

  const allValidators = {
    "is-my-json-valid": {
      name: "is-my-json-valid",
      setup: function(schema) {
        // no $refs supported
        return imjv(schema, { schemas: refs });
      },
      test: function(instance, json, schema) {
        return instance(json);
      },
    },
    "jsen": {
      name: "jsen",
      setup: function(schema) {
        return jsen(schema, { schemas: refs });
      },
      test: function(instance, json, schema) {
        return instance(json);
      },
    },
    "ajv": {
      name: "ajv",
      setup: function(schema) {
        let ajv;
        if (draftVersion === "4") {
          ajv = new AjvDraft04({ strict: false, allErrors: true, validateFormats: false });
        } else if (draftVersion === "6") {
          ajv = new Ajv({ strict: false, allErrors: true, validateFormats: false });
          ajv.addMetaSchema(require("ajv/dist/refs/json-schema-draft-06.json"));
        } else if (draftVersion === "7") {
          ajv = new Ajv({ strict: false, allErrors: true, validateFormats: false });
        } else if (draftVersion === "2019-09") {
          ajv = new Ajv2019({ strict: false, allErrors: true, validateFormats: false });
        } else if (draftVersion === "2020-12") {
          ajv = new Ajv2020({ strict: false, allErrors: true, validateFormats: false });
        } else {
          throw Error(`ajv: Draft ${draftVersion} not supported`);
        }
        Object.keys(refs).forEach(function(uri) {
          try {
            ajv.addSchema(refs[uri], uri);
          } catch (error) {}
        });

        return ajv.compile(schema);
      },
      test: function(instance, json, schema) {
        return instance(json);
      },
    },
    "z-schema": {
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
    "jjv": {
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
    "djv": {
      name: "djv",
      setup: function(schema) {
        const version = {
          "4": "draft-04",
          "6": "draft-06",
        }[draftVersion];
        djv.useVersion(version);
        Object.keys(refs).forEach(function(uri) {
          djv.addSchema(uri, refs[uri]);
        });
        return djv.addSchema("test", schema).fn;
      },
      test: function(instance, json, schema) {
        return instance(json) === undefined;
      },
    },
    "skeemas": {
      name: "skeemas",
      setup: function(schema) {
        const validator = skeemas();
        validator.addRef("http://json-schema.org/draft-04/schema", require("./refs/json-schema-draft-04.json")),
        Object.keys(refs).forEach(function(uri) {
          validator.addRef(uri, refs[uri]);
        });
        return validator;
      },
      test: function(instance, json, schema) {
        return instance.validate(json, schema).valid;
      },
    },
    "schemasaurus": {
      name: "schemasaurus",
      setup: function(schema) {
        return schemasaurus.newValidator(schema);
      },
      test: function(instance, json) {
        return instance(json).valid;
      },
    },
    "jsck": {
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
    "jassi": {
      name: "jassi",
      // no $refs supported
      setup: function(schema) {
        return jassi;
      },
      test: function(instance, json, schema) {
        return instance(json, schema).length === 0;
      },
    },
    "JSV": {
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
    "request-validator": {
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
    "json-gate": {
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
    "json-model": {
      name: "json-model",
      setup: function(schema) {
        // no comprehensible documented $refs supported
        return JsonModel.validator(schema);
      },
      test: function(instance, json, schema) {
        return instance(json).valid;
      },
    },
    "tv4": {
      name: "tv4",
      setup: function() {
        Object.keys(refs).forEach(function (uri) {
          tv4.addSchema(uri, refs[uri]);
        });
        return tv4;
      },
      test: function(instance, json, schema) {
        return instance.validateResult(json, schema).valid;
      },
    },
    "jsonschema": {
      name: "jsonschema",
      setup: function() {
        const validator = new JsonSchema.Validator();
        validator.addSchema(require("./refs/json-schema-draft-04.json"), "http://json-schema.org/draft-04/schema");
        Object.keys(refs).forEach(function(uri) {
          validator.addSchema(refs[uri], uri);
        });
        return validator;
      },
      test: function(instance, json, schema) {
        return instance.validate(json, schema).errors.length === 0;
      },
    },
    "revalidator": {
      name: "revalidator",
      setup: function() {
        return revalidator;
      },
      test: function(instance, json, schema) {
        return instance.validate(json, schema).valid;
      },
    },
    "json-schema-library": {
      name: "json-schema-library",
      setup: function(schema) {
        Object.keys(refs).forEach(function(uri) {
          // This library modifies the original schemas, so we need to pass a copy
          jlib.addSchema(uri, JSON.parse(JSON.stringify(refs[uri])));
        });
        if (draftVersion === "4") {
          return new jlib.Draft04(schema);
        } else if (draftVersion === "6") {
          return new jlib.Draft06(schema);
        } else if (draftVersion === "7") {
          return new jlib.Draft07(schema);
        } else {
          throw Error(`json-schema-library: Draft ${draftVersion} not supported`);
        }
      },
      test: function(instance, json, schema) {
        return instance.isValid(json);
      },
    },
    "@exodus/schemasafe": {
      name: "@exodus/schemasafe",
      setup: function(schema) {
        return schemasafe.validator(schema, {
          mode: "lax",
          includeErrors: true,
          formats: {
            "idn-email": () => true,
            "idn-hostname": () => true,
            "iri": () => true,
            "iri-reference": () => true
          },
          schemas: {
            ...refs,
            "http://json-schema.org/draft-04/schema": require("./refs/json-schema-draft-04.json"),
            "http://json-schema.org/draft-06/schema": require("./refs/json-schema-draft-04.json"),
            "http://json-schema.org/draft-07/schema": require("./refs/json-schema-draft-07.json"),
            "https://json-schema.org/draft/2019-09/schema": require("./refs/json-schema-draft-2019-09.json"),
            "https://json-schema.org/draft/2019-09/meta/applicator": require("./refs/json-schema-draft-2019-09-applicator.json"),
            "https://json-schema.org/draft/2019-09/meta/content": require("./refs/json-schema-draft-2019-09-content.json"),
            "https://json-schema.org/draft/2019-09/meta/core": require("./refs/json-schema-draft-2019-09-core.json"),
            "https://json-schema.org/draft/2019-09/meta/format": require("./refs/json-schema-draft-2019-09-format.json"),
            "https://json-schema.org/draft/2019-09/meta/meta-data": require("./refs/json-schema-draft-2019-09-meta-data.json"),
            "https://json-schema.org/draft/2019-09/meta/validation": require("./refs/json-schema-draft-2019-09-validation.json"),
            "https://json-schema.org/draft/2020-12/schema": require("./refs/json-schema-draft-2020-12.json"),
            "https://json-schema.org/draft/2020-12/meta/applicator": require("./refs/json-schema-draft-2020-12-applicator.json"),
            "https://json-schema.org/draft/2020-12/meta/content": require("./refs/json-schema-draft-2020-12-content.json"),
            "https://json-schema.org/draft/2020-12/meta/core": require("./refs/json-schema-draft-2020-12-core.json"),
            "https://json-schema.org/draft/2020-12/meta/format-annotation": require("./refs/json-schema-draft-2020-12-format-annotation.json"),
            "https://json-schema.org/draft/2020-12/meta/format-assertion": require("./refs/json-schema-draft-2020-12-format-assertion.json"),
            "https://json-schema.org/draft/2020-12/meta/meta-data": require("./refs/json-schema-draft-2020-12-meta-data.json"),
            "https://json-schema.org/draft/2020-12/meta/unevaluated": require("./refs/json-schema-draft-2020-12-unevaluated.json"),
            "https://json-schema.org/draft/2020-12/meta/validation": require("./refs/json-schema-draft-2020-12-validation.json"),
          },
          $schemaDefault: draftUri,
        });
      },
      test: function(instance, json, schema) {
        return instance(json);
      },
    },
    "@cfworker/json-schema": {
      name: "@cfworker/json-schema",
      setup: (schema) => {
        const validator = new cfworker.Validator(schema, draftVersion);
        if (draftVersion === "4") {
          validator.addSchema(require("./refs/json-schema-draft-04.json"));
        } else if (draftVersion === "6") {
          validator.addSchema(require("./refs/json-schema-draft-06.json"));
        } else if (draftVersion === "7") {
          validator.addSchema(require("./refs/json-schema-draft-07.json"));
        } else if (draftVersion === "2019-09") {
          validator.addSchema(require("./refs/json-schema-draft-2019-09.json"));
          validator.addSchema(require("./refs/json-schema-draft-2019-09-applicator.json"));
          validator.addSchema(require("./refs/json-schema-draft-2019-09-content.json"));
          validator.addSchema(require("./refs/json-schema-draft-2019-09-core.json"));
          validator.addSchema(require("./refs/json-schema-draft-2019-09-format.json"));
          validator.addSchema(require("./refs/json-schema-draft-2019-09-meta-data.json"));
          validator.addSchema(require("./refs/json-schema-draft-2019-09-validation.json"));
        } else if (draftVersion === "2020-12") {
          validator.addSchema(require("./refs/json-schema-draft-2020-12.json"));
          validator.addSchema(require("./refs/json-schema-draft-2020-12-applicator.json"));
          validator.addSchema(require("./refs/json-schema-draft-2020-12-content.json"));
          validator.addSchema(require("./refs/json-schema-draft-2020-12-core.json"));
          validator.addSchema(require("./refs/json-schema-draft-2020-12-format-annotation.json"));
          validator.addSchema(require("./refs/json-schema-draft-2020-12-format-assertion.json"));
          validator.addSchema(require("./refs/json-schema-draft-2020-12-meta-data.json"));
          validator.addSchema(require("./refs/json-schema-draft-2020-12-unevaluated.json"));
          validator.addSchema(require("./refs/json-schema-draft-2020-12-validation.json"));
        }
        Object.keys(refs).forEach((id) => validator.addSchema(refs[id], id));
        return validator;
      },
      test: (validator, json) => validator.validate(json).valid,
    },
  };

  cfworker = await import("@cfworker/json-schema");

  const validators = {
    4: [
      allValidators["is-my-json-valid"],
      allValidators["jsen"],
      allValidators["ajv"],
      allValidators["z-schema"],
      allValidators["jjv"],
      allValidators["djv"],
      allValidators["skeemas"],
      allValidators["schemasaurus"],
      allValidators["jsck"],
      allValidators["jassi"],
      allValidators["JSV"],
      allValidators["request-validator"],
      allValidators["json-gate"],
      allValidators["json-model"],
      allValidators["tv4"],
      allValidators["jsonschema"],
      allValidators["revalidator"],
      allValidators["json-schema-library"],
      allValidators["@exodus/schemasafe"],
      allValidators["@cfworker/json-schema"],
    ],
    6: [
      allValidators["ajv"],
      //allValidators["djv"], // Too many failed tests can skew results
      allValidators["json-schema-library"],
      allValidators["@exodus/schemasafe"],
      allValidators["@cfworker/json-schema"],
    ],
    7: [
      allValidators["ajv"],
      allValidators["json-schema-library"],
      allValidators["@exodus/schemasafe"],
      allValidators["@cfworker/json-schema"],
    ],
    "2019-09": [
      allValidators["ajv"],
      allValidators["@exodus/schemasafe"],
      allValidators["@cfworker/json-schema"],
    ],
    "2020-12": [
      allValidators["ajv"],
      allValidators["@exodus/schemasafe"],
      allValidators["@cfworker/json-schema"],
    ],
  }

  return validators[draftVersion];
};
