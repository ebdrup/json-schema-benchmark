# json-schema-benchmark
Performance benchmark for Node.js JSON-schema validators.

Also tests against [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite) and checks
for validators that cause side-effects on schema or data.

[Contribute to these benchmarks](https://github.com/ebdrup/json-schema-benchmark/blob/master/CONTRIBUTING.md)

# Performance

![performance](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=29,4,1&chs=600x416&chxl=-1:|djv|ajv|jsen|json-schema-validator-generator|is-my-json-valid|themis|jsck|z-schema|json-schema-library|skeemas|jsonschema|tv4&chd=t:100,82.1,49.8,40.6,38.3,10.3,3.6,1.7,0.6,0.5,0.5,0.1)

|Validator|Relative speed|Number of test runs per second|
|---------|:------------:|:----------------------------:|
|[`djv`](https://github.com/korzio/djv#readme)|100%|65627 (± 0.9%)|
|[`ajv`](https://github.com/epoberezkin/ajv)|82.1%|53848 (± 1.9%)|
|[`jsen`](https://github.com/bugventure/jsen)|49.8%|32671 (± 1.12%)|
|[`json-schema-validator-generator`](https://github.com/danwang/json-schema-validator-generator)|40.6%|26622 (± 0.98%)|
|[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid#readme)|38.3%|25138 (± 1.25%)|
|[`themis`](https://github.com/playlyfe/themis)|10.3%|6736 (± 10.12%)|
|[`jsck`](https://github.com/pandastrike/jsck#readme)|3.6%|2354 (± 1.28%)|
|[`z-schema`](https://github.com/zaggino/z-schema)|1.7%|1130 (± 2.12%)|
|[`json-schema-library`](https://github.com/sagold/json-schema-library)|0.6%|410 (± 2.08%)|
|[`skeemas`](https://github.com/Prestaul/skeemas#readme)|0.5%|354 (± 2.06%)|
|[`jsonschema`](https://github.com/tdegrunt/jsonschema#readme)|0.5%|341 (± 2.78%)|
|[`tv4`](https://github.com/geraintluff/tv4)|0.1%|75 (± 3.27%)|

235 tests are run in each test run.

Validators tested: [`json-schema-validator-generator (1.1.11)`](https://github.com/danwang/json-schema-validator-generator), [`is-my-json-valid (2.20.0)`](https://github.com/mafintosh/is-my-json-valid#readme), [`jsen (0.6.6)`](https://github.com/bugventure/jsen), [`ajv (6.10.2)`](https://github.com/epoberezkin/ajv), [`themis (1.1.6)`](https://github.com/playlyfe/themis), [`z-schema (4.1.1)`](https://github.com/zaggino/z-schema), [`jjv (1.0.2)`](https://github.com/acornejo/jjv), [`djv (2.1.3-alpha.0)`](https://github.com/korzio/djv#readme), [`skeemas (1.2.5)`](https://github.com/Prestaul/skeemas#readme), [`schemasaurus (0.7.8)`](https://github.com/AlexeyGrishin/schemasaurus), [`jsck (0.3.2)`](https://github.com/pandastrike/jsck#readme), [`jassi (0.1.2)`](https://github.com/iclanzan/jassi), [`JSV (4.0.2)`](http://github.com/garycourt/JSV), [`request-validator (0.3.3)`](https://github.com/bugventure/request-validator), [`json-gate (0.8.23)`](https://github.com/oferei/json-gate#readme), [`json-model (0.2.24)`](https://github.com/geraintluff/json-model), [`tv4 (1.3.0)`](https://github.com/geraintluff/tv4), [`jsonschema (1.2.4)`](https://github.com/tdegrunt/jsonschema#readme), [`revalidator (0.3.1)`](https://github.com/flatiron/revalidator), [`json-schema-library (4.0.0)`](https://github.com/sagold/json-schema-library), 

(validators not in the results above where excluded because of failing tests - see below for details)

[`djv`](https://github.com/korzio/djv#readme) is currently the fastest JSON-schema validator out there.

The fastest validator has 100%, the rest a lower score relative to the fastest.
If a validator has a score of 5% that means that it's speed is 5% of the fastest,
meaning that it's 20 times slower than the fastest.

# Test failure summary

This test suite uses the [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite).

If a validator does not pass a test in the official test suite, it will show up in these results.

![failing tests](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=16,4,1&chs=600x420&chxl=-1:|json-schema-library|djv|jsonschema|skeemas|ajv|jsen|z-schema|is-my-json-valid|jjv|schemasaurus|jsck|themis|tv4|json-schema-validator-generator|request-validator|jassi|json-model|JSV|json-gate|revalidator&chd=t:1,1,6,6,7,9,13,14,26,29,29,30,33,34,39,42,54,72,97,152&chxr=0,0,152&chds=0,152)

|Validator|Number of failing tests (click for details)|
|---------|-----------------------|
|[`json-schema-library`](https://github.com/sagold/json-schema-library)|[1](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-schema-library.md)|
|[`djv`](https://github.com/korzio/djv#readme)|[1](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/djv.md)|
|[`jsonschema`](https://github.com/tdegrunt/jsonschema#readme)|[6](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jsonschema.md)|
|[`skeemas`](https://github.com/Prestaul/skeemas#readme)|[6](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/skeemas.md)|
|[`ajv`](https://github.com/epoberezkin/ajv)|[7](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/ajv.md)|
|[`jsen`](https://github.com/bugventure/jsen)|[9](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jsen.md)|
|[`z-schema`](https://github.com/zaggino/z-schema)|[13](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/z-schema.md)|
|[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid#readme)|[14](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/is-my-json-valid.md)|
|[`jjv`](https://github.com/acornejo/jjv)|[26](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jjv.md)|
|[`schemasaurus`](https://github.com/AlexeyGrishin/schemasaurus)|[29](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/schemasaurus.md)|
|[`jsck`](https://github.com/pandastrike/jsck#readme)|[29](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jsck.md)|
|[`themis`](https://github.com/playlyfe/themis)|[30](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/themis.md)|
|[`tv4`](https://github.com/geraintluff/tv4)|[33](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/tv4.md)|
|[`json-schema-validator-generator`](https://github.com/danwang/json-schema-validator-generator)|[34](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-schema-validator-generator.md)|
|[`request-validator`](https://github.com/bugventure/request-validator)|[39](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/request-validator.md)|
|[`jassi`](https://github.com/iclanzan/jassi)|[42](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jassi.md)|
|[`json-model`](https://github.com/geraintluff/json-model)|[54](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-model.md)|
|[`JSV`](http://github.com/garycourt/JSV)|[72](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/JSV.md)|
|[`json-gate`](https://github.com/oferei/json-gate#readme)|[97](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-gate.md)|
|[`revalidator`](https://github.com/flatiron/revalidator)|[152](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/revalidator.md)|

Some validators have deliberately chosen not to support parts of the spec. Go to the homepage of the validator to learn if
that is the case for these tests.

# Side-effects summary

Number of tests that caused side-effects. The schema or data was altered by the validator.

|Validator|Number of side-effects (BAD)|
|---------|----------------------------|
|[`tv4`](https://github.com/geraintluff/tv4)|[11](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/tv4-side-effects.md)|
|[`revalidator`](https://github.com/flatiron/revalidator)|[320](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/revalidator-side-effects.md)|
|[`json-model`](https://github.com/geraintluff/json-model)|[338](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-model-side-effects.md)|

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
