# json-schema-benchmark
Performance benchmark for Node.js JSON-schema validators.

Also tests against [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite) and checks
for validators that cause side-effects on schema or data.

[Contribute to these benchmarks](https://github.com/ebdrup/json-schema-benchmark/blob/master/CONTRIBUTING.md)

# Performance

![performance](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=96,4,1&chs=600x420&chxl=-1:|ajv|is-my-json-valid|z-schema|@cfworker&#x2F;json-schema&chd=t:100,87.3,29.8,25.2)

|Validator|Relative speed|Number of test runs per second|
|---------|:------------:|:----------------------------:|
|[`ajv`](https://github.com/epoberezkin/ajv)|100%|4032 (± 1.34%)|
|[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid)|87.3%|3519 (± 0.93%)|
|[`z-schema`](https://github.com/zaggino/z-schema)|29.8%|1201 (± 0.45%)|
|[`@cfworker/json-schema`](https://github.com/cfworker/cfworker/tree/master/packages/json-schema/README.md)|25.2%|1015 (± 0.68%)|

235 tests are run in each test run.

Validators tested: [`json-schema-validator-generator (1.1.9)`](https://github.com/danwang/json-schema-validator-generator), [`is-my-json-valid (2.9.4)`](https://github.com/mafintosh/is-my-json-valid), [`jsen (0.6.6)`](https://github.com/bugventure/jsen), [`ajv (6.9.2)`](https://github.com/epoberezkin/ajv), [`themis (1.1.6)`](https://github.com/playlyfe/themis), [`z-schema (4.2.3)`](https://github.com/zaggino/z-schema), [`jjv (1.0.2)`](https://github.com/acornejo/jjv), [`djv (2.1.2)`](https://github.com/korzio/djv#readme), [`skeemas (1.2.5)`](https://github.com/Prestaul/skeemas#readme), [`schemasaurus (0.7.8)`](https://github.com/AlexeyGrishin/schemasaurus), [`jsck (0.3.2)`](https://github.com/pandastrike/jsck#readme), [`jassi (0.1.2)`](https://github.com/iclanzan/jassi), [`JSV (4.0.2)`](http://github.com/garycourt/JSV), [`request-validator (0.3.3)`](https://github.com/bugventure/request-validator), [`json-gate (0.8.9)`](https://github.com/oferei/json-gate#readme), [`json-model (0.2.9)`](https://github.com/geraintluff/json-model), [`tv4 (1.3.0)`](https://github.com/geraintluff/tv4), [`jsonschema (1.2.6)`](https://github.com/tdegrunt/jsonschema#readme), [`revalidator (0.3.1)`](https://github.com/flatiron/revalidator), [`json-schema-library (4.1.2)`](https://github.com/sagold/json-schema-library), [`@cfworker/json-schema (1.1.4)`](https://github.com/cfworker/cfworker/tree/master/packages/json-schema/README.md), [`turbo-json-parse (2.3.0)`](https://github.com/mafintosh/turbo-json-parse), 

(validators not in the results above where excluded because of failing tests - see below for details)

[`ajv`](https://github.com/epoberezkin/ajv) is currently the fastest JSON-schema validator out there.

The fastest validator has 100%, the rest a lower score relative to the fastest.
If a validator has a score of 5% that means that it's speed is 5% of the fastest,
meaning that it's 20 times slower than the fastest.

# Test failure summary

This test suite uses the [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite).

If a validator does not pass a test in the official test suite, it will show up in these results.

![failing tests](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=14,4,1&chs=600x416&chxl=-1:|@cfworker&#x2F;json-schema|ajv|z-schema|is-my-json-valid|jsonschema|json-schema-library|jsen|tv4|request-validator|jsck|jassi|themis|json-schema-validator-generator|skeemas|schemasaurus|jjv|djv|json-model|JSV|json-gate|revalidator|turbo-json-parse&chd=t:6,16,20,22,25,27,28,42,50,52,56,57,63,63,67,84,88,90,103,179,243,598&chxr=0,0,598&chds=0,598)

|Validator|Number of failing tests (click for details)|
|---------|-----------------------|
|[`@cfworker/json-schema`](https://github.com/cfworker/cfworker/tree/master/packages/json-schema/README.md)|[6](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/@cfworker&#x2F;json-schema.md)|
|[`ajv`](https://github.com/epoberezkin/ajv)|[16](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/ajv.md)|
|[`z-schema`](https://github.com/zaggino/z-schema)|[20](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/z-schema.md)|
|[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid)|[22](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/is-my-json-valid.md)|
|[`jsonschema`](https://github.com/tdegrunt/jsonschema#readme)|[25](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jsonschema.md)|
|[`json-schema-library`](https://github.com/sagold/json-schema-library)|[27](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-schema-library.md)|
|[`jsen`](https://github.com/bugventure/jsen)|[28](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jsen.md)|
|[`tv4`](https://github.com/geraintluff/tv4)|[42](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/tv4.md)|
|[`request-validator`](https://github.com/bugventure/request-validator)|[50](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/request-validator.md)|
|[`jsck`](https://github.com/pandastrike/jsck#readme)|[52](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jsck.md)|
|[`jassi`](https://github.com/iclanzan/jassi)|[56](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jassi.md)|
|[`themis`](https://github.com/playlyfe/themis)|[57](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/themis.md)|
|[`json-schema-validator-generator`](https://github.com/danwang/json-schema-validator-generator)|[63](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-schema-validator-generator.md)|
|[`skeemas`](https://github.com/Prestaul/skeemas#readme)|[63](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/skeemas.md)|
|[`schemasaurus`](https://github.com/AlexeyGrishin/schemasaurus)|[67](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/schemasaurus.md)|
|[`jjv`](https://github.com/acornejo/jjv)|[84](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jjv.md)|
|[`djv`](https://github.com/korzio/djv#readme)|[88](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/djv.md)|
|[`json-model`](https://github.com/geraintluff/json-model)|[90](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-model.md)|
|[`JSV`](http://github.com/garycourt/JSV)|[103](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/JSV.md)|
|[`json-gate`](https://github.com/oferei/json-gate#readme)|[179](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-gate.md)|
|[`revalidator`](https://github.com/flatiron/revalidator)|[243](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/revalidator.md)|
|[`turbo-json-parse`](https://github.com/mafintosh/turbo-json-parse)|[598](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/turbo-json-parse.md)|

Some validators have deliberately chosen not to support parts of the spec. Go to the homepage of the validator to learn if
that is the case for these tests.

# Side-effects summary

Number of tests that caused side-effects. The schema or data was altered by the validator.

|Validator|Number of side-effects (BAD)|
|---------|----------------------------|
|[`tv4`](https://github.com/geraintluff/tv4)|[13](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/tv4-side-effects.md)|
|[`revalidator`](https://github.com/flatiron/revalidator)|[551](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/revalidator-side-effects.md)|
|[`json-model`](https://github.com/geraintluff/json-model)|[578](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-model-side-effects.md)|

Validators not in the list have no side-effects on data or schemas.

# Features of validators

Note that these benchmarks and tests do not take into account other more advanced features of the validators. I encourage
you to take a look at each validator if you are looking for special features.

# Benchmarks by validator authors and others

Several of the validators have build benchmarks themselves. They are
more detailed then the benchmarks provided above.

[Benchmarks owned by themis](https://cdn.rawgit.com/playlyfe/themis/master/benchmark/results.html)

[Benchmarks owned by z-schema](https://rawgit.com/zaggino/z-schema/master/benchmark/results.html)

[Benchmarks owned by jsck](https://github.com/pandastrike/jsck/blob/master/doc/benchmarks.md)

There is also a [benchmark suite](https://github.com/Sembiance/cosmicrealms.com/tree/master/sandbox/benchmark-of-node-dot-js-json-validation-modules-part-3)
by cosmicrealms.

# License
MIT
