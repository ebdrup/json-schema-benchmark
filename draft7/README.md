# json-schema-benchmark (draft7)
Performance benchmark for Node.js JSON-schema validators. 

Also tests against [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite), version draft7. and checks
for validators that cause side-effects on schema or data. The top 6 validators that fail the least tests are included in the benchmark.

[Contribute to these benchmarks](https://github.com/ebdrup/json-schema-benchmark/blob/master/CONTRIBUTING.md)

# Performance

![performance](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=62,4,1&chs=600x416&chxl=-1:|ajv|@exodus&#x2F;schemasafe|is-my-json-valid|djv|@cfworker&#x2F;json-schema|jsonschema&chd=t:100,65.7,53.4,13.3,4.8,1.1)

|Validator|Relative speed|Number of test runs per second|
|---------|:------------:|:----------------------------:|
|[`ajv`](https://github.com/ajv-validator/ajv)|100%|16135 (± 0.38%)|
|[`@exodus/schemasafe`](https://github.com/ExodusMovement/schemasafe)|65.7%|10606 (± 0.53%)|
|[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid#readme)|53.4%|8610 (± 0.33%)|
|[`djv`](https://github.com/korzio/djv#readme)|13.3%|2154 (± 1.33%)|
|[`@cfworker/json-schema`](https://github.com/cfworker/cfworker/tree/master/packages/json-schema/README.md)|4.8%|779 (± 2.52%)|
|[`jsonschema`](https://github.com/tdegrunt/jsonschema#readme)|1.1%|183 (± 1.1%)|

1049 tests are run in each test run.

Validators tested: [`@cfworker/json-schema (1.6.3)`](https://github.com/cfworker/cfworker/tree/master/packages/json-schema/README.md), [`jsonschema (1.4.0)`](https://github.com/tdegrunt/jsonschema#readme), [`@exodus/schemasafe (1.0.0-rc.3)`](https://github.com/ExodusMovement/schemasafe), [`ajv (6.12.6)`](https://github.com/ajv-validator/ajv), [`djv (2.1.3-alpha.0)`](https://github.com/korzio/djv#readme), [`is-my-json-valid (2.20.5)`](https://github.com/mafintosh/is-my-json-valid#readme), [`jsen (0.6.6)`](https://github.com/bugventure/jsen), [`json-schema-library (4.1.4)`](https://github.com/sagold/json-schema-library), [`tv4 (1.3.0)`](https://github.com/geraintluff/tv4), [`jjv (1.0.2)`](https://github.com/acornejo/jjv), [`jassi (0.1.2)`](https://github.com/iclanzan/jassi), [`z-schema (5.0.0)`](https://github.com/zaggino/z-schema), [`request-validator (0.3.3)`](https://github.com/bugventure/request-validator), [`json-schema-validator-generator (1.1.11)`](https://github.com/danwang/json-schema-validator-generator), [`themis (1.1.6)`](https://github.com/playlyfe/themis), [`JSV (4.0.2)`](http://github.com/garycourt/JSV), [`json-model (0.2.24)`](https://github.com/geraintluff/json-model), [`jsck (0.3.2)`](https://github.com/pandastrike/jsck#readme), [`skeemas (1.2.5)`](https://github.com/Prestaul/skeemas#readme), [`schemasaurus (0.7.8)`](https://github.com/AlexeyGrishin/schemasaurus), [`json-gate (0.8.23)`](https://github.com/oferei/json-gate#readme), [`revalidator (0.3.1)`](https://github.com/flatiron/revalidator), 

(validators not in the results above where excluded because of failing tests - see below for details)

[`ajv`](https://github.com/ajv-validator/ajv) is currently the fastest JSON-schema validator out there.

# Test failure summary

This test suite uses the [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite), version draft7.

If a validator does not pass a test in the official test suite, it will show up in these results.

![failing tests](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=14,4,1&chs=600x416&chxl=-1:|@cfworker&#x2F;json-schema|jsonschema|@exodus&#x2F;schemasafe|ajv|djv|is-my-json-valid|jsen|json-schema-library|tv4|jjv|jassi|z-schema|request-validator|json-schema-validator-generator|themis|JSV|json-model|jsck|skeemas|schemasaurus|json-gate|revalidator&chd=t:49,77,101,103,157,164,198,202,212,229,229,250,264,273,275,291,291,341,361,378,420,449&chxr=0,0,449&chds=0,449)

|Validator|Number of failing tests (click for details)|
|---------|-----------------------|
|[`@cfworker/json-schema`](https://github.com/cfworker/cfworker/tree/master/packages/json-schema/README.md)|[49](https://github.com/ebdrup/json-schema-benchmark/blob/master/draft7&#x2F;reports/@cfworker&#x2F;json-schema.md)|
|[`jsonschema`](https://github.com/tdegrunt/jsonschema#readme)|[77](https://github.com/ebdrup/json-schema-benchmark/blob/master/draft7&#x2F;reports/jsonschema.md)|
|[`@exodus/schemasafe`](https://github.com/ExodusMovement/schemasafe)|[101](https://github.com/ebdrup/json-schema-benchmark/blob/master/draft7&#x2F;reports/@exodus&#x2F;schemasafe.md)|
|[`ajv`](https://github.com/ajv-validator/ajv)|[103](https://github.com/ebdrup/json-schema-benchmark/blob/master/draft7&#x2F;reports/ajv.md)|
|[`djv`](https://github.com/korzio/djv#readme)|[157](https://github.com/ebdrup/json-schema-benchmark/blob/master/draft7&#x2F;reports/djv.md)|
|[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid#readme)|[164](https://github.com/ebdrup/json-schema-benchmark/blob/master/draft7&#x2F;reports/is-my-json-valid.md)|
|[`jsen`](https://github.com/bugventure/jsen)|[198](https://github.com/ebdrup/json-schema-benchmark/blob/master/draft7&#x2F;reports/jsen.md)|
|[`json-schema-library`](https://github.com/sagold/json-schema-library)|[202](https://github.com/ebdrup/json-schema-benchmark/blob/master/draft7&#x2F;reports/json-schema-library.md)|
|[`tv4`](https://github.com/geraintluff/tv4)|[212](https://github.com/ebdrup/json-schema-benchmark/blob/master/draft7&#x2F;reports/tv4.md)|
|[`jjv`](https://github.com/acornejo/jjv)|[229](https://github.com/ebdrup/json-schema-benchmark/blob/master/draft7&#x2F;reports/jjv.md)|
|[`jassi`](https://github.com/iclanzan/jassi)|[229](https://github.com/ebdrup/json-schema-benchmark/blob/master/draft7&#x2F;reports/jassi.md)|
|[`z-schema`](https://github.com/zaggino/z-schema)|[250](https://github.com/ebdrup/json-schema-benchmark/blob/master/draft7&#x2F;reports/z-schema.md)|
|[`request-validator`](https://github.com/bugventure/request-validator)|[264](https://github.com/ebdrup/json-schema-benchmark/blob/master/draft7&#x2F;reports/request-validator.md)|
|[`json-schema-validator-generator`](https://github.com/danwang/json-schema-validator-generator)|[273](https://github.com/ebdrup/json-schema-benchmark/blob/master/draft7&#x2F;reports/json-schema-validator-generator.md)|
|[`themis`](https://github.com/playlyfe/themis)|[275](https://github.com/ebdrup/json-schema-benchmark/blob/master/draft7&#x2F;reports/themis.md)|
|[`JSV`](http://github.com/garycourt/JSV)|[291](https://github.com/ebdrup/json-schema-benchmark/blob/master/draft7&#x2F;reports/JSV.md)|
|[`json-model`](https://github.com/geraintluff/json-model)|[291](https://github.com/ebdrup/json-schema-benchmark/blob/master/draft7&#x2F;reports/json-model.md)|
|[`jsck`](https://github.com/pandastrike/jsck#readme)|[341](https://github.com/ebdrup/json-schema-benchmark/blob/master/draft7&#x2F;reports/jsck.md)|
|[`skeemas`](https://github.com/Prestaul/skeemas#readme)|[361](https://github.com/ebdrup/json-schema-benchmark/blob/master/draft7&#x2F;reports/skeemas.md)|
|[`schemasaurus`](https://github.com/AlexeyGrishin/schemasaurus)|[378](https://github.com/ebdrup/json-schema-benchmark/blob/master/draft7&#x2F;reports/schemasaurus.md)|
|[`json-gate`](https://github.com/oferei/json-gate#readme)|[420](https://github.com/ebdrup/json-schema-benchmark/blob/master/draft7&#x2F;reports/json-gate.md)|
|[`revalidator`](https://github.com/flatiron/revalidator)|[449](https://github.com/ebdrup/json-schema-benchmark/blob/master/draft7&#x2F;reports/revalidator.md)|

Some validators have deliberately chosen not to support parts of the spec. Go to the homepage of the validator to learn if
that is the case for these tests.

# Side-effects summary

Number of tests that caused side-effects. The schema or data was altered by the validator.

|Validator|Number of side-effects (BAD)|
|---------|----------------------------|
|[`json-model`](https://github.com/geraintluff/json-model)|[981](https://github.com/ebdrup/json-schema-benchmark/blob/master/draft7&#x2F;reports/json-model-side-effects.md)|
|[`revalidator`](https://github.com/flatiron/revalidator)|[983](https://github.com/ebdrup/json-schema-benchmark/blob/master/draft7&#x2F;reports/revalidator-side-effects.md)|

Validators not in the list have no side-effects on data or schemas.

# Tests for other JSON-schema versions

- [draft7](https://github.com/ebdrup/json-schema-benchmark/tree/master/draft7)
- [draft6](https://github.com/ebdrup/json-schema-benchmark/)
- [draft4](https://github.com/ebdrup/json-schema-benchmark/tree/master/draft4)

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
