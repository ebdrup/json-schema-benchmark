# json-schema-benchmark
Performance benchmark for Node.js JSON-schema validators.

Also tests against [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite) and checks
for validators that cause side-effects on schema or data.

[Contribute to these benchmarks](https://github.com/ebdrup/json-schema-benchmark/blob/master/CONTRIBUTING.md)

# Performance

![performance](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=76,4,1&chs=600x420&chxl=-1:|@exodus&#x2F;schemasafe|ajv|is-my-json-valid|z-schema|@cfworker&#x2F;json-schema&chd=t:100,68.9,50.6,5.4,2.7)

|Validator|Relative speed|Number of test runs per second|
|---------|:------------:|:----------------------------:|
|@exodus/schemasafe|100%|8869 (± 22.86%)|
|[`ajv`](https://github.com/epoberezkin/ajv)|68.9%|6111 (± 26.03%)|
|[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid)|50.6%|4492 (± 7.28%)|
|[`z-schema`](https://github.com/zaggino/z-schema)|5.4%|479 (± 9.39%)|
|[`@cfworker/json-schema`](https://github.com/cfworker/cfworker/tree/master/packages/json-schema/README.md)|2.7%|240 (± 14.57%)|

235 tests are run in each test run.

Validators tested: [`json-schema-validator-generator (1.1.9)`](https://github.com/danwang/json-schema-validator-generator), [`is-my-json-valid (2.9.4)`](https://github.com/mafintosh/is-my-json-valid), [`jsen (0.6.6)`](https://github.com/bugventure/jsen), [`ajv (6.9.2)`](https://github.com/epoberezkin/ajv), [`themis (1.1.6)`](https://github.com/playlyfe/themis), [`z-schema (4.2.3)`](https://github.com/zaggino/z-schema), [`jjv (1.0.2)`](https://github.com/acornejo/jjv), [`djv (2.1.2)`](https://github.com/korzio/djv#readme), [`skeemas (1.2.5)`](https://github.com/Prestaul/skeemas#readme), [`schemasaurus (0.7.8)`](https://github.com/AlexeyGrishin/schemasaurus), [`jsck (0.3.2)`](https://github.com/pandastrike/jsck#readme), [`jassi (0.1.2)`](https://github.com/iclanzan/jassi), [`JSV (4.0.2)`](http://github.com/garycourt/JSV), [`request-validator (0.3.3)`](https://github.com/bugventure/request-validator), [`json-gate (0.8.9)`](https://github.com/oferei/json-gate#readme), [`json-model (0.2.9)`](https://github.com/geraintluff/json-model), [`tv4 (1.3.0)`](https://github.com/geraintluff/tv4), [`jsonschema (1.2.6)`](https://github.com/tdegrunt/jsonschema#readme), [`revalidator (0.3.1)`](https://github.com/flatiron/revalidator), [`json-schema-library (4.1.2)`](https://github.com/sagold/json-schema-library), @exodus/schemasafe, [`@cfworker/json-schema (1.2.9)`](https://github.com/cfworker/cfworker/tree/master/packages/json-schema/README.md), 

(validators not in the results above where excluded because of failing tests - see below for details)

@exodus/schemasafe is currently the fastest JSON-schema validator out there.

The fastest validator has 100%, the rest a lower score relative to the fastest.
If a validator has a score of 5% that means that it's speed is 5% of the fastest,
meaning that it's 20 times slower than the fastest.

# Test failure summary

This test suite uses the [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite).

If a validator does not pass a test in the official test suite, it will show up in these results.

![failing tests](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=14,4,1&chs=600x416&chxl=-1:|@exodus&#x2F;schemasafe|@cfworker&#x2F;json-schema|ajv|z-schema|jsonschema|is-my-json-valid|jsen|json-schema-library|jsck|tv4|themis|request-validator|skeemas|jassi|schemasaurus|json-schema-validator-generator|jjv|djv|json-model|JSV|json-gate|revalidator&chd=t:1,7,17,18,23,25,30,30,51,53,56,64,67,69,71,75,86,93,103,125,208,277&chxr=0,0,277&chds=0,277)

|Validator|Number of failing tests (click for details)|
|---------|-----------------------|
|@exodus/schemasafe|[1](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/@exodus&#x2F;schemasafe.md)|
|[`@cfworker/json-schema`](https://github.com/cfworker/cfworker/tree/master/packages/json-schema/README.md)|[7](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/@cfworker&#x2F;json-schema.md)|
|[`ajv`](https://github.com/epoberezkin/ajv)|[17](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/ajv.md)|
|[`z-schema`](https://github.com/zaggino/z-schema)|[18](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/z-schema.md)|
|[`jsonschema`](https://github.com/tdegrunt/jsonschema#readme)|[23](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jsonschema.md)|
|[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid)|[25](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/is-my-json-valid.md)|
|[`jsen`](https://github.com/bugventure/jsen)|[30](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jsen.md)|
|[`json-schema-library`](https://github.com/sagold/json-schema-library)|[30](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-schema-library.md)|
|[`jsck`](https://github.com/pandastrike/jsck#readme)|[51](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jsck.md)|
|[`tv4`](https://github.com/geraintluff/tv4)|[53](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/tv4.md)|
|[`themis`](https://github.com/playlyfe/themis)|[56](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/themis.md)|
|[`request-validator`](https://github.com/bugventure/request-validator)|[64](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/request-validator.md)|
|[`skeemas`](https://github.com/Prestaul/skeemas#readme)|[67](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/skeemas.md)|
|[`jassi`](https://github.com/iclanzan/jassi)|[69](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jassi.md)|
|[`schemasaurus`](https://github.com/AlexeyGrishin/schemasaurus)|[71](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/schemasaurus.md)|
|[`json-schema-validator-generator`](https://github.com/danwang/json-schema-validator-generator)|[75](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-schema-validator-generator.md)|
|[`jjv`](https://github.com/acornejo/jjv)|[86](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jjv.md)|
|[`djv`](https://github.com/korzio/djv#readme)|[93](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/djv.md)|
|[`json-model`](https://github.com/geraintluff/json-model)|[103](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-model.md)|
|[`JSV`](http://github.com/garycourt/JSV)|[125](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/JSV.md)|
|[`json-gate`](https://github.com/oferei/json-gate#readme)|[208](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-gate.md)|
|[`revalidator`](https://github.com/flatiron/revalidator)|[277](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/revalidator.md)|

Some validators have deliberately chosen not to support parts of the spec. Go to the homepage of the validator to learn if
that is the case for these tests.

# Side-effects summary

Number of tests that caused side-effects. The schema or data was altered by the validator.

|Validator|Number of side-effects (BAD)|
|---------|----------------------------|
|[`tv4`](https://github.com/geraintluff/tv4)|[13](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/tv4-side-effects.md)|
|[`revalidator`](https://github.com/flatiron/revalidator)|[616](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/revalidator-side-effects.md)|
|[`json-model`](https://github.com/geraintluff/json-model)|[643](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-model-side-effects.md)|

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
