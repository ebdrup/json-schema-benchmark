# json-schema-benchmark
Performance benchmark for Node.js JSON-schema validators.

Also tests against [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite) and checks
for validators that cause side-effects on schema or data.

[Contribute to these benchmarks](https://github.com/ebdrup/json-schema-benchmark/blob/master/CONTRIBUTING.md)

# Performance

![performance](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=129,4,1&chs=600x419&chxl=-1:|@exodus&#x2F;schemasafe|ajv|@cfworker&#x2F;json-schema&chd=t:100,74.1,3.5)

|Validator|Relative speed|Number of test runs per second|
|---------|:------------:|:----------------------------:|
|[`@exodus/schemasafe`](https://github.com/ExodusMovement/schemasafe)|100%|33277 (± 0.88%)|
|[`ajv`](https://github.com/ajv-validator/ajv)|74.1%|24658 (± 1.24%)|
|[`@cfworker/json-schema`](https://github.com/cfworker/cfworker/tree/master/packages/json-schema/README.md)|3.5%|1157 (± 0.92%)|

235 tests are run in each test run.

Validators tested: [`json-schema-validator-generator (1.1.11)`](https://github.com/danwang/json-schema-validator-generator), [`is-my-json-valid (2.20.4)`](https://github.com/mafintosh/is-my-json-valid#readme), [`jsen (0.6.6)`](https://github.com/bugventure/jsen), [`ajv (6.12.3)`](https://github.com/ajv-validator/ajv), [`themis (1.1.6)`](https://github.com/playlyfe/themis), [`z-schema (4.2.3)`](https://github.com/zaggino/z-schema), [`jjv (1.0.2)`](https://github.com/acornejo/jjv), [`djv (2.1.3-alpha.0)`](https://github.com/korzio/djv#readme), [`skeemas (1.2.5)`](https://github.com/Prestaul/skeemas#readme), [`schemasaurus (0.7.8)`](https://github.com/AlexeyGrishin/schemasaurus), [`jsck (0.3.2)`](https://github.com/pandastrike/jsck#readme), [`jassi (0.1.2)`](https://github.com/iclanzan/jassi), [`JSV (4.0.2)`](http://github.com/garycourt/JSV), [`request-validator (0.3.3)`](https://github.com/bugventure/request-validator), [`json-gate (0.8.23)`](https://github.com/oferei/json-gate#readme), [`json-model (0.2.24)`](https://github.com/geraintluff/json-model), [`tv4 (1.3.0)`](https://github.com/geraintluff/tv4), [`jsonschema (1.2.6)`](https://github.com/tdegrunt/jsonschema#readme), [`revalidator (0.3.1)`](https://github.com/flatiron/revalidator), [`json-schema-library (4.1.2)`](https://github.com/sagold/json-schema-library), [`@exodus/schemasafe (1.0.0-alpha.4)`](https://github.com/ExodusMovement/schemasafe), [`@cfworker/json-schema (1.2.17)`](https://github.com/cfworker/cfworker/tree/master/packages/json-schema/README.md), 

(validators not in the results above where excluded because of failing tests - see below for details)

[`@exodus/schemasafe`](https://github.com/ExodusMovement/schemasafe) is currently the fastest JSON-schema validator out there.

The fastest validator has 100%, the rest a lower score relative to the fastest.
If a validator has a score of 5% that means that it's speed is 5% of the fastest,
meaning that it's 20 times slower than the fastest.

# Test failure summary

This test suite uses the [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite).

If a validator does not pass a test in the official test suite, it will show up in these results.

![failing tests](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=14,4,1&chs=600x416&chxl=-1:|@exodus&#x2F;schemasafe|ajv|@cfworker&#x2F;json-schema|jsonschema|is-my-json-valid|djv|json-schema-library|tv4|jsen|jassi|z-schema|jjv|themis|request-validator|json-schema-validator-generator|JSV|json-model|jsck|skeemas|schemasaurus|json-gate|revalidator&chd=t:0,6,7,76,100,100,126,129,130,146,157,160,177,181,190,206,206,214,221,222,312,355&chxr=0,0,355&chds=0,355)

|Validator|Number of failing tests (click for details)|
|---------|-----------------------|
|[`@exodus/schemasafe`](https://github.com/ExodusMovement/schemasafe)|[0](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/@exodus&#x2F;schemasafe.md)|
|[`ajv`](https://github.com/ajv-validator/ajv)|[6](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/ajv.md)|
|[`@cfworker/json-schema`](https://github.com/cfworker/cfworker/tree/master/packages/json-schema/README.md)|[7](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/@cfworker&#x2F;json-schema.md)|
|[`jsonschema`](https://github.com/tdegrunt/jsonschema#readme)|[76](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jsonschema.md)|
|[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid#readme)|[100](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/is-my-json-valid.md)|
|[`djv`](https://github.com/korzio/djv#readme)|[100](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/djv.md)|
|[`json-schema-library`](https://github.com/sagold/json-schema-library)|[126](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-schema-library.md)|
|[`tv4`](https://github.com/geraintluff/tv4)|[129](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/tv4.md)|
|[`jsen`](https://github.com/bugventure/jsen)|[130](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jsen.md)|
|[`jassi`](https://github.com/iclanzan/jassi)|[146](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jassi.md)|
|[`z-schema`](https://github.com/zaggino/z-schema)|[157](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/z-schema.md)|
|[`jjv`](https://github.com/acornejo/jjv)|[160](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jjv.md)|
|[`themis`](https://github.com/playlyfe/themis)|[177](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/themis.md)|
|[`request-validator`](https://github.com/bugventure/request-validator)|[181](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/request-validator.md)|
|[`json-schema-validator-generator`](https://github.com/danwang/json-schema-validator-generator)|[190](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-schema-validator-generator.md)|
|[`JSV`](http://github.com/garycourt/JSV)|[206](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/JSV.md)|
|[`json-model`](https://github.com/geraintluff/json-model)|[206](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-model.md)|
|[`jsck`](https://github.com/pandastrike/jsck#readme)|[214](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/jsck.md)|
|[`skeemas`](https://github.com/Prestaul/skeemas#readme)|[221](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/skeemas.md)|
|[`schemasaurus`](https://github.com/AlexeyGrishin/schemasaurus)|[222](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/schemasaurus.md)|
|[`json-gate`](https://github.com/oferei/json-gate#readme)|[312](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-gate.md)|
|[`revalidator`](https://github.com/flatiron/revalidator)|[355](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/revalidator.md)|

Some validators have deliberately chosen not to support parts of the spec. Go to the homepage of the validator to learn if
that is the case for these tests.

# Side-effects summary

Number of tests that caused side-effects. The schema or data was altered by the validator.

|Validator|Number of side-effects (BAD)|
|---------|----------------------------|
|[`json-model`](https://github.com/geraintluff/json-model)|[775](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/json-model-side-effects.md)|
|[`revalidator`](https://github.com/flatiron/revalidator)|[776](https://github.com/ebdrup/json-schema-benchmark/blob/master/reports/revalidator-side-effects.md)|

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
