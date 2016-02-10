# json-schema-benchmark
Performance benchmark for Node.js JSON-schema validators.

Also tests against [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite) and checks
for validators that cause side-effects on schema or data.

[Contribute to these benchmarks](https://github.com/ebdrup/json-schema-benchmark/blob/master/CONTRIBUTING.md)

# Performance

![performance](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=32,4,1&chs=600x416&chxl=-1:|ajv|is-my-json-valid|jsen|schemasaurus|themis|z-schema|jsck|jsonschema|skeemas|tv4|jayschema&chd=t:100,68,61,22.8,17.6,6.6,2.7,0.9,0.7,0.4,0.1)

|Validator|Relative speed|Number of test runs per second|
|---------|:------------:|:----------------------------:|
|[`ajv`](https://github.com/epoberezkin/ajv)|100%|18992 (± 0.63%)|
|[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid)|68%|12913 (± 2.72%)|
|[`jsen`](https://github.com/bugventure/jsen)|61%|11586 (± 0.99%)|
|[`schemasaurus`](https://github.com/AlexeyGrishin/schemasaurus)|22.8%|4337 (± 1.28%)|
|[`themis`](https://github.com/playlyfe/themis)|17.6%|3348 (± 3.92%)|
|[`z-schema`](https://github.com/zaggino/z-schema)|6.6%|1256 (± 0.7%)|
|[`jsck`](https://github.com/pandastrike/jsck#readme)|2.7%|522 (± 2.82%)|
|[`jsonschema`](https://github.com/tdegrunt/jsonschema#readme)|0.9%|168 (± 1.01%)|
|[`skeemas`](https://github.com/Prestaul/skeemas#readme)|0.7%|137 (± 1.24%)|
|tv4|0.4%|80 (± 1.87%)|
|[`jayschema`](https://github.com/natesilva/jayschema)|0.1%|19 (± 0.87%)|

235 tests are run in each test run.

Validators tested: [`is-my-json-valid (2.12.4)`](https://github.com/mafintosh/is-my-json-valid), [`jsen (0.6.0)`](https://github.com/bugventure/jsen), [`ajv (3.5.3)`](https://github.com/epoberezkin/ajv), [`themis (1.1.6)`](https://github.com/playlyfe/themis), [`z-schema (3.16.1)`](https://github.com/zaggino/z-schema), [`jjv (1.0.2)`](https://github.com/acornejo/jjv), [`skeemas (1.2.2)`](https://github.com/Prestaul/skeemas#readme), [`jayschema (0.3.1)`](https://github.com/natesilva/jayschema), [`schemasaurus (0.7.8)`](https://github.com/AlexeyGrishin/schemasaurus), [`jsck (0.3.0)`](https://github.com/pandastrike/jsck#readme), [`jassi (0.1.2)`](https://github.com/iclanzan/jassi), [`JSV (4.0.2)`](http://github.com/garycourt/JSV), [`request-validator (0.3.3)`](https://github.com/bugventure/request-validator), [`json-gate (0.8.22)`](https://github.com/oferei/json-gate), [`json-model (0.2.24)`](https://github.com/geraintluff/json-model), tv4, [`jsonschema (1.0.3)`](https://github.com/tdegrunt/jsonschema#readme), [`revalidator (0.3.1)`](https://github.com/flatiron/revalidator), 

(validators not in the results above where excluded because of failing tests - see below for details)

[`ajv`](https://github.com/epoberezkin/ajv) is currently the fastest JSON-schema validator out there.

The fastest validator has 100%, the rest a lower score relative to the fastest.
If a validator has a score of 5% that means that it's speed is 5% of the fastest,
meaning that it's 20 times slower than the fastest.

# Test failure summary

This test suite uses the [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite).

If a validator does not pass a test in the official test suite, it will show up in these results.

![failing tests](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=18,4,1&chs=600x416&chxl=-1:|ajv|skeemas|z-schema|jsonschema|jjv|is-my-json-valid|jayschema|jsen|themis|schemasaurus|jsck|tv4|request-validator|jassi|json-model|JSV|json-gate|revalidator&chd=t:1,2,3,4,7,10,10,11,14,16,18,24,29,31,40,57,71,138&chxr=0,0,138&chds=0,138)

|Validator|Number of failing tests (click for details)|
|---------|-----------------------|
|[`ajv`](https://github.com/epoberezkin/ajv)|[1](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/ajv.md)|
|[`skeemas`](https://github.com/Prestaul/skeemas#readme)|[2](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/skeemas.md)|
|[`z-schema`](https://github.com/zaggino/z-schema)|[3](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/z-schema.md)|
|[`jsonschema`](https://github.com/tdegrunt/jsonschema#readme)|[4](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jsonschema.md)|
|[`jjv`](https://github.com/acornejo/jjv)|[7](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jjv.md)|
|[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid)|[10](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/is-my-json-valid.md)|
|[`jayschema`](https://github.com/natesilva/jayschema)|[10](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jayschema.md)|
|[`jsen`](https://github.com/bugventure/jsen)|[11](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jsen.md)|
|[`themis`](https://github.com/playlyfe/themis)|[14](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/themis.md)|
|[`schemasaurus`](https://github.com/AlexeyGrishin/schemasaurus)|[16](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/schemasaurus.md)|
|[`jsck`](https://github.com/pandastrike/jsck#readme)|[18](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jsck.md)|
|tv4|[24](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/tv4.md)|
|[`request-validator`](https://github.com/bugventure/request-validator)|[29](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/request-validator.md)|
|[`jassi`](https://github.com/iclanzan/jassi)|[31](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jassi.md)|
|[`json-model`](https://github.com/geraintluff/json-model)|[40](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-model.md)|
|[`JSV`](http://github.com/garycourt/JSV)|[57](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/JSV.md)|
|[`json-gate`](https://github.com/oferei/json-gate)|[71](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-gate.md)|
|[`revalidator`](https://github.com/flatiron/revalidator)|[138](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/revalidator.md)|

Some validators have deliberately chosen not to support parts of the spec. Go to the homepage of the validator to learn if
that is the case for these tests.

# Side-effects summary

Number of tests that caused side-effects. The schema or data was altered by the validator.

|Validator|Number of side-effects (BAD)|
|---------|----------------------------|
|tv4|[2](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/tv4-side-effects.md)|
|[`revalidator`](https://github.com/flatiron/revalidator)|[267](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/revalidator-side-effects.md)|
|[`json-model`](https://github.com/geraintluff/json-model)|[288](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-model-side-effects.md)|

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
