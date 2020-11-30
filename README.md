# json-schema-benchmark (draft6)
Performance benchmark for Node.js JSON-schema validators. 

Also tests against [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite), version draft6. and checks
for validators that cause side-effects on schema or data. The top 6 validators that fail the least tests are included in the benchmark.

[Contribute to these benchmarks](https://github.com/ebdrup/json-schema-benchmark/blob/master/CONTRIBUTING.md)

# Tests for other JSON-schema versions

[draft6](https://github.com/ebdrup/json-schema-benchmark/)
[draft4](https://github.com/ebdrup/json-schema-benchmark/draft4/README.md)


# Performance

![performance](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=62,4,1&chs=600x416&chxl=-1:|ajv|@exodus&#x2F;schemasafe|is-my-json-valid|djv|@cfworker&#x2F;json-schema|jsonschema&chd=t:100,72,49.8,13.2,4.4,1.2)

|Validator|Relative speed|Number of test runs per second|
|---------|:------------:|:----------------------------:|
|[`ajv`](https://github.com/ajv-validator/ajv)|100%|17117 (± 0.44%)|
|[`@exodus/schemasafe`](https://github.com/ExodusMovement/schemasafe)|72%|12323 (± 0.96%)|
|[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid#readme)|49.8%|8516 (± 0.56%)|
|[`djv`](https://github.com/korzio/djv#readme)|13.2%|2253 (± 1.19%)|
|[`@cfworker/json-schema`](https://github.com/cfworker/cfworker/tree/master/packages/json-schema/README.md)|4.4%|752 (± 1.28%)|
|[`jsonschema`](https://github.com/tdegrunt/jsonschema#readme)|1.2%|201 (± 1.08%)|

884 tests are run in each test run.

Validators tested: [`@exodus/schemasafe (1.0.0-rc.3)`](https://github.com/ExodusMovement/schemasafe), [`@cfworker/json-schema (1.6.3)`](https://github.com/cfworker/cfworker/tree/master/packages/json-schema/README.md), [`ajv (6.12.6)`](https://github.com/ajv-validator/ajv), [`jsonschema (1.4.0)`](https://github.com/tdegrunt/jsonschema#readme), [`djv (2.1.3-alpha.0)`](https://github.com/korzio/djv#readme), [`is-my-json-valid (2.20.5)`](https://github.com/mafintosh/is-my-json-valid#readme), [`json-schema-library (4.1.4)`](https://github.com/sagold/json-schema-library), [`jsen (0.6.6)`](https://github.com/bugventure/jsen), [`tv4 (1.3.0)`](https://github.com/geraintluff/tv4), [`z-schema (5.0.0)`](https://github.com/zaggino/z-schema), [`jjv (1.0.2)`](https://github.com/acornejo/jjv), [`jassi (0.1.2)`](https://github.com/iclanzan/jassi), [`themis (1.1.6)`](https://github.com/playlyfe/themis), [`request-validator (0.3.3)`](https://github.com/bugventure/request-validator), [`json-schema-validator-generator (1.1.11)`](https://github.com/danwang/json-schema-validator-generator), [`jsck (0.3.2)`](https://github.com/pandastrike/jsck#readme), [`JSV (4.0.2)`](http://github.com/garycourt/JSV), [`json-model (0.2.24)`](https://github.com/geraintluff/json-model), [`skeemas (1.2.5)`](https://github.com/Prestaul/skeemas#readme), [`schemasaurus (0.7.8)`](https://github.com/AlexeyGrishin/schemasaurus), [`json-gate (0.8.23)`](https://github.com/oferei/json-gate#readme), [`revalidator (0.3.1)`](https://github.com/flatiron/revalidator), 

(validators not in the results above where excluded because of failing tests - see below for details)

[`ajv`](https://github.com/ajv-validator/ajv) is currently the fastest JSON-schema validator out there.

# Test failure summary

This test suite uses the [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite), version draft6.

If a validator does not pass a test in the official test suite, it will show up in these results.

![failing tests](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=14,4,1&chs=600x416&chxl=-1:|@exodus&#x2F;schemasafe|@cfworker&#x2F;json-schema|ajv|jsonschema|djv|is-my-json-valid|json-schema-library|jsen|tv4|z-schema|jjv|jassi|themis|request-validator|json-schema-validator-generator|jsck|JSV|json-model|skeemas|schemasaurus|json-gate|revalidator&chd=t:8,9,10,33,99,111,140,141,155,169,171,172,189,207,216,227,234,234,235,237,342,384&chxr=0,0,384&chds=0,384)

|Validator|Number of failing tests (click for details)|
|---------|-----------------------|
|[`@exodus/schemasafe`](https://github.com/ExodusMovement/schemasafe)|[8](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/@exodus&#x2F;schemasafe.md)|
|[`@cfworker/json-schema`](https://github.com/cfworker/cfworker/tree/master/packages/json-schema/README.md)|[9](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/@cfworker&#x2F;json-schema.md)|
|[`ajv`](https://github.com/ajv-validator/ajv)|[10](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/ajv.md)|
|[`jsonschema`](https://github.com/tdegrunt/jsonschema#readme)|[33](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jsonschema.md)|
|[`djv`](https://github.com/korzio/djv#readme)|[99](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/djv.md)|
|[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid#readme)|[111](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/is-my-json-valid.md)|
|[`json-schema-library`](https://github.com/sagold/json-schema-library)|[140](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-schema-library.md)|
|[`jsen`](https://github.com/bugventure/jsen)|[141](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jsen.md)|
|[`tv4`](https://github.com/geraintluff/tv4)|[155](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/tv4.md)|
|[`z-schema`](https://github.com/zaggino/z-schema)|[169](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/z-schema.md)|
|[`jjv`](https://github.com/acornejo/jjv)|[171](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jjv.md)|
|[`jassi`](https://github.com/iclanzan/jassi)|[172](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jassi.md)|
|[`themis`](https://github.com/playlyfe/themis)|[189](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/themis.md)|
|[`request-validator`](https://github.com/bugventure/request-validator)|[207](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/request-validator.md)|
|[`json-schema-validator-generator`](https://github.com/danwang/json-schema-validator-generator)|[216](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-schema-validator-generator.md)|
|[`jsck`](https://github.com/pandastrike/jsck#readme)|[227](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jsck.md)|
|[`JSV`](http://github.com/garycourt/JSV)|[234](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/JSV.md)|
|[`json-model`](https://github.com/geraintluff/json-model)|[234](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-model.md)|
|[`skeemas`](https://github.com/Prestaul/skeemas#readme)|[235](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/skeemas.md)|
|[`schemasaurus`](https://github.com/AlexeyGrishin/schemasaurus)|[237](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/schemasaurus.md)|
|[`json-gate`](https://github.com/oferei/json-gate#readme)|[342](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-gate.md)|
|[`revalidator`](https://github.com/flatiron/revalidator)|[384](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/revalidator.md)|

Some validators have deliberately chosen not to support parts of the spec. Go to the homepage of the validator to learn if
that is the case for these tests.

# Side-effects summary

Number of tests that caused side-effects. The schema or data was altered by the validator.

|Validator|Number of side-effects (BAD)|
|---------|----------------------------|
|[`json-model`](https://github.com/geraintluff/json-model)|[816](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-model-side-effects.md)|
|[`revalidator`](https://github.com/flatiron/revalidator)|[818](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/revalidator-side-effects.md)|

Validators not in the list have no side-effects on data or schemas.

# Features of validators

Note that these benchmarks and tests do not take into account other more advanced features of the validators. I encourage
you to take a look at each validator if you are looking for special features.

# Benchmarks by validator authors and others

Several of the validators have build benchmarks themselves. They are
more detailed then the benchmarks provided above.

[Benchmarks owned by z-schema](https://rawgit.com/zaggino/z-schema/master/benchmark/results.html)

[Benchmarks owned by themis](https://cdn.rawgit.com/playlyfe/themis/master/benchmark/results.html)

[Benchmarks owned by jsck](https://github.com/pandastrike/jsck/blob/master/doc/benchmarks.md)

There is also a [benchmark suite](https://github.com/Sembiance/cosmicrealms.com/tree/master/sandbox/benchmark-of-node-dot-js-json-validation-modules-part-3)
by cosmicrealms.

# License
MIT
