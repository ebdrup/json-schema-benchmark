# json-schema-benchmark
Performance benchmark for Node.js JSON-schema validators.

Also tests against [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite) and checks
for validators that cause side-effects on schema or data.

# Performance

![performance](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=36,4,1&chs=600x420&chxl=-1:|is-my-json-valid|themis|jsck|z-schema|jjv|skeemas|request-validator|jsonschema|tv4|jayschema&chd=t:100,22.1,9.5,6.9,6.3,1.3,0.6,0.5,0.2,0.1)

|Validator|Relative speed|Number of test runs per second|
|---------|:------------:|:----------------------------:|
|[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid)|100%|7937 (± 3.8%)|
|[`themis`](https://github.com/playlyfe/themis)|22.1%|1751 (± 4.45%)|
|[`jsck`](https://github.com/pandastrike/jsck)|9.5%|754 (± 1.17%)|
|[`z-schema`](https://github.com/zaggino/z-schema)|6.9%|547 (± 4.32%)|
|[`jjv`](https://github.com/acornejo/jjv)|6.3%|502 (± 2.41%)|
|[`skeemas`](https://github.com/Prestaul/skeemas)|1.3%|103 (± 3.84%)|
|[`request-validator`](https://github.com/bugventure/request-validator)|0.6%|48 (± 5.71%)|
|[`jsonschema`](https://github.com/tdegrunt/jsonschema)|0.5%|36 (± 4.55%)|
|[`tv4`](https://github.com/geraintluff/tv4)|0.2%|16 (± 7.35%)|
|[`jayschema`](https://github.com/natesilva/jayschema)|0.1%|6 (± 5.19%)|

Validators tested: [`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid), [`themis`](https://github.com/playlyfe/themis), [`z-schema`](https://github.com/zaggino/z-schema), [`jjv`](https://github.com/acornejo/jjv), [`skeemas`](https://github.com/Prestaul/skeemas), [`jayschema`](https://github.com/natesilva/jayschema), [`jsck`](https://github.com/pandastrike/jsck), [`jassi`](https://github.com/iclanzan/jassi), [`JSV`](http://github.com/garycourt/JSV), [`request-validator`](https://github.com/bugventure/request-validator), [`json-gate`](https://github.com/oferei/json-gate), [`json-model`](https://github.com/geraintluff/json-model), [`tv4`](https://github.com/geraintluff/tv4), [`jsonschema`](https://github.com/tdegrunt/jsonschema), [`revalidator`](https://github.com/flatiron/revalidator), 

(validators not in the results above where excluded because of failing tests - see below for details)

[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid) is currently the fastest JSON-schema validator out there.

The fastest validator has 100%, the rest a lower score relative to the fastest.
If a validator has a score of 5% that means that it's speed is 5% of the fastest,
meaning that it's 20 times slower than the fastest.

# Test failure summary

This test suite uses the [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite).

If a validator does not pass a test in the official test suite, it will show up in these results.

![failing tests](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=22,4,1&chs=600x410&chxl=-1:|skeemas|jjv|z-schema|jsonschema|is-my-json-valid|jayschema|themis|jsck|request-validator|tv4|jassi|json-model|JSV|json-gate|revalidator&chd=t:1,4,5,5,9,10,13,21,26,26,31,40,54,70,199&chxr=0,0,199&chds=0,199)

|Validator|Number of failing tests (click for details)|
|---------|-----------------------|
|[`skeemas`](https://github.com/Prestaul/skeemas)|[1](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/skeemas.md)|
|[`jjv`](https://github.com/acornejo/jjv)|[4](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jjv.md)|
|[`z-schema`](https://github.com/zaggino/z-schema)|[5](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/z-schema.md)|
|[`jsonschema`](https://github.com/tdegrunt/jsonschema)|[5](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jsonschema.md)|
|[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid)|[9](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/is-my-json-valid.md)|
|[`jayschema`](https://github.com/natesilva/jayschema)|[10](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jayschema.md)|
|[`themis`](https://github.com/playlyfe/themis)|[13](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/themis.md)|
|[`jsck`](https://github.com/pandastrike/jsck)|[21](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jsck.md)|
|[`request-validator`](https://github.com/bugventure/request-validator)|[26](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/request-validator.md)|
|[`tv4`](https://github.com/geraintluff/tv4)|[26](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/tv4.md)|
|[`jassi`](https://github.com/iclanzan/jassi)|[31](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jassi.md)|
|[`json-model`](https://github.com/geraintluff/json-model)|[40](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/json-model.md)|
|[`JSV`](http://github.com/garycourt/JSV)|[54](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/JSV.md)|
|[`json-gate`](https://github.com/oferei/json-gate)|[70](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/json-gate.md)|
|[`revalidator`](https://github.com/flatiron/revalidator)|[199](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/revalidator.md)|

Some validators have deliberately chosen not to support parts of the spec. Go to the homepage of the validator to learn if
that is the case for these tests.

# Side-effects summary

Number of tests that caused side-effects. The schema or data was altered by the validator.

|Validator|Number of side-effects (BAD)|
|---------|----------------------------|
|[`tv4`](https://github.com/geraintluff/tv4)|[2](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/tv4-side-effects.md)|
|[`jsonschema`](https://github.com/tdegrunt/jsonschema)|[4](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jsonschema-side-effects.md)|
|[`revalidator`](https://github.com/flatiron/revalidator)|[147](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/revalidator-side-effects.md)|
|[`json-model`](https://github.com/geraintluff/json-model)|[283](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/json-model-side-effects.md)|

Validators not in the list have no side-effects on data or schemas.

# Features of validators

Note that these benchmarks and tests do not take into account other more advanced features of the validators. I encourage
you to take a look at each validator if you are looking for special features.

# Benchmarks by validator authors and others

Several of the validators have build benchmarks themselves. Several of them are
a lot more detailed then the benchmarks provided above.

[Benchmarks owned by themis](https://cdn.rawgit.com/playlyfe/themis/master/benchmark/results.html)

[Benchmarks owned by z-schema](https://rawgit.com/zaggino/z-schema/master/benchmark/results.html)

[Benchmarks owned by jsck](https://github.com/pandastrike/jsck/blob/master/doc/benchmarks.md)

There is also a [benchmark suite](https://github.com/Sembiance/cosmicrealms.com/tree/master/sandbox/benchmark-of-node-dot-js-json-validation-modules-part-3)
by cosmicrealms.

# License
MIT
