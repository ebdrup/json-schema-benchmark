# json-schema-benchmark
Performance benchmark for Node.js JSON-schema validators.

Also tests against [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite) and checks
for validators that cause side-effects on schema or data.

[Contribute to these benchmarks](https://github.com/ebdrup/json-schema-benchmark/blob/master/CONTRIBUTING.md)

# Performance

![performance](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=40,4,1&chs=600x416&chxl=-1:|djv|json-schema-validator-generator|ajv|is-my-json-valid|schemasaurus|jsck|z-schema|jsonschema|tv4&chd=t:100,91.1,83,59.6,23.1,6.6,6.4,0.8,0.4)

|Validator|Relative speed|Number of test runs per second|
|---------|:------------:|:----------------------------:|
|[`djv`](https://github.com/korzio/djv#readme)|100%|21374 (± 2.27%)|
|json-schema-validator-generator|91.1%|19475 (± 1.88%)|
|[`ajv`](https://github.com/epoberezkin/ajv)|83%|17744 (± 4.04%)|
|[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid)|59.6%|12745 (± 2.81%)|
|[`schemasaurus`](https://github.com/AlexeyGrishin/schemasaurus)|23.1%|4929 (± 3.95%)|
|[`jsck`](https://github.com/pandastrike/jsck#readme)|6.6%|1414 (± 2.83%)|
|[`z-schema`](https://github.com/zaggino/z-schema)|6.4%|1371 (± 2.58%)|
|[`jsonschema`](https://github.com/tdegrunt/jsonschema#readme)|0.8%|165 (± 2.9%)|
|[`tv4`](https://github.com/geraintluff/tv4)|0.4%|87 (± 2.03%)|

235 tests are run in each test run.

Validators tested: json-schema-validator-generator, [`is-my-json-valid (2.16.0)`](https://github.com/mafintosh/is-my-json-valid), [`ajv (5.0.0)`](https://github.com/epoberezkin/ajv), [`z-schema (3.18.2)`](https://github.com/zaggino/z-schema), [`jjv (1.0.2)`](https://github.com/acornejo/jjv), [`djv (1.0.0-beta.0)`](https://github.com/korzio/djv#readme), [`skeemas (1.2.2)`](https://github.com/Prestaul/skeemas#readme), [`jayschema (0.3.1)`](https://github.com/natesilva/jayschema), [`schemasaurus (0.7.8)`](https://github.com/AlexeyGrishin/schemasaurus), [`jsck (0.3.0)`](https://github.com/pandastrike/jsck#readme), [`jassi (0.1.2)`](https://github.com/iclanzan/jassi), [`JSV (4.0.2)`](http://github.com/garycourt/JSV), [`request-validator (0.3.3)`](https://github.com/bugventure/request-validator), [`json-gate (0.8.23)`](https://github.com/oferei/json-gate#readme), [`json-model (0.2.24)`](https://github.com/geraintluff/json-model), [`tv4 (1.3.0)`](https://github.com/geraintluff/tv4), [`jsonschema (1.1.1)`](https://github.com/tdegrunt/jsonschema#readme), [`revalidator (0.3.1)`](https://github.com/flatiron/revalidator), 

(validators not in the results above where excluded because of failing tests - see below for details)

[`djv`](https://github.com/korzio/djv#readme) is currently the fastest JSON-schema validator out there.

The fastest validator has 100%, the rest a lower score relative to the fastest.
If a validator has a score of 5% that means that it's speed is 5% of the fastest,
meaning that it's 20 times slower than the fastest.

# Test failure summary

This test suite uses the [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite).

If a validator does not pass a test in the official test suite, it will show up in these results.

![failing tests](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=18,4,1&chs=600x416&chxl=-1:|z-schema|jsonschema|skeemas|is-my-json-valid|jjv|ajv|jayschema|djv|schemasaurus|jsck|tv4|json-schema-validator-generator|request-validator|jassi|json-model|JSV|json-gate|revalidator&chd=t:8,10,14,14,17,17,19,20,27,29,30,31,36,39,51,67,80,148&chxr=0,0,148&chds=0,148)

|Validator|Number of failing tests (click for details)|
|---------|-----------------------|
|[`z-schema`](https://github.com/zaggino/z-schema)|[8](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/z-schema.md)|
|[`jsonschema`](https://github.com/tdegrunt/jsonschema#readme)|[10](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jsonschema.md)|
|[`skeemas`](https://github.com/Prestaul/skeemas#readme)|[14](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/skeemas.md)|
|[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid)|[14](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/is-my-json-valid.md)|
|[`jjv`](https://github.com/acornejo/jjv)|[17](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jjv.md)|
|[`ajv`](https://github.com/epoberezkin/ajv)|[17](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/ajv.md)|
|[`jayschema`](https://github.com/natesilva/jayschema)|[19](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jayschema.md)|
|[`djv`](https://github.com/korzio/djv#readme)|[20](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/djv.md)|
|[`schemasaurus`](https://github.com/AlexeyGrishin/schemasaurus)|[27](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/schemasaurus.md)|
|[`jsck`](https://github.com/pandastrike/jsck#readme)|[29](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jsck.md)|
|[`tv4`](https://github.com/geraintluff/tv4)|[30](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/tv4.md)|
|json-schema-validator-generator|[31](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-schema-validator-generator.md)|
|[`request-validator`](https://github.com/bugventure/request-validator)|[36](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/request-validator.md)|
|[`jassi`](https://github.com/iclanzan/jassi)|[39](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jassi.md)|
|[`json-model`](https://github.com/geraintluff/json-model)|[51](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-model.md)|
|[`JSV`](http://github.com/garycourt/JSV)|[67](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/JSV.md)|
|[`json-gate`](https://github.com/oferei/json-gate#readme)|[80](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-gate.md)|
|[`revalidator`](https://github.com/flatiron/revalidator)|[148](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/revalidator.md)|

Some validators have deliberately chosen not to support parts of the spec. Go to the homepage of the validator to learn if
that is the case for these tests.

# Side-effects summary

Number of tests that caused side-effects. The schema or data was altered by the validator.

|Validator|Number of side-effects (BAD)|
|---------|----------------------------|
|[`tv4`](https://github.com/geraintluff/tv4)|[11](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/tv4-side-effects.md)|
|[`revalidator`](https://github.com/flatiron/revalidator)|[294](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/revalidator-side-effects.md)|
|[`json-model`](https://github.com/geraintluff/json-model)|[310](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-model-side-effects.md)|

Validators not in the list have no side-effects on data or schemas.

# Features of validators

Note that these benchmarks and tests do not take into account other more advanced features of the validators. I encourage
you to take a look at each validator if you are looking for special features.

# Benchmarks by validator authors and others

Several of the validators have build benchmarks themselves. They are
more detailed then the benchmarks provided above.

[Benchmarks owned by z-schema](https://rawgit.com/zaggino/z-schema/master/benchmark/results.html)

[Benchmarks owned by jsck](https://github.com/pandastrike/jsck/blob/master/doc/benchmarks.md)

There is also a [benchmark suite](https://github.com/Sembiance/cosmicrealms.com/tree/master/sandbox/benchmark-of-node-dot-js-json-validation-modules-part-3)
by cosmicrealms.

# License
MIT
