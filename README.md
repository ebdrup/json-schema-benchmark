# json-schema-benchmark
Performance benchmark for Node.js JSON-schema validators.

Also tests against [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite) and checks
for validators that cause side-effects on schema or data.

# Performance

![performance](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=40,4,1&chs=600x416&chxl=-1:|is-my-json-valid|themis|jsck|z-schema|jjv|skeemas|request-validator|jsonschema|jayschema&chd=t:100,28,11.5,7.6,7.2,1.4,0.7,0.6,0.1)

|Validator|Relative speed|Number of test runs per second|
|---------|:------------:|:----------------------------:|
|[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid)|100%|16627 (± 1.29%)|
|themis|28%|4656 (± 2.18%)|
|[`jsck`](https://github.com/pandastrike/jsck)|11.5%|1911 (± 0.22%)|
|[`z-schema`](https://github.com/zaggino/z-schema)|7.6%|1266 (± 3.13%)|
|[`jjv`](https://github.com/acornejo/jjv)|7.2%|1194 (± 0.24%)|
|[`skeemas`](https://github.com/Prestaul/skeemas)|1.4%|233 (± 0.27%)|
|[`request-validator`](https://github.com/bugventure/request-validator)|0.7%|121 (± 3.98%)|
|[`jsonschema`](https://github.com/tdegrunt/jsonschema)|0.6%|101 (± 2.08%)|
|[`jayschema`](https://github.com/natesilva/jayschema)|0.1%|14 (± 3.44%)|

Validators tested: [`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid), themis, [`z-schema`](https://github.com/zaggino/z-schema), [`jjv`](https://github.com/acornejo/jjv), [`skeemas`](https://github.com/Prestaul/skeemas), [`jayschema`](https://github.com/natesilva/jayschema), [`jsck`](https://github.com/pandastrike/jsck), [`jassi`](https://github.com/iclanzan/jassi), [`JSV`](http://github.com/garycourt/JSV), [`request-validator`](https://github.com/bugventure/request-validator), [`json-model`](https://github.com/geraintluff/json-model), [`tv4`](https://github.com/geraintluff/tv4), [`jsonschema`](https://github.com/tdegrunt/jsonschema), 

(validators not in the results above where excluded because of failing tests - see below for details)

[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid) is currently the fastest JSON-schema validator out there.

The fastest validator has 100%, the rest a lower score relative to the fastest.
If a validator has a score of 5% that means that it's speed is 5% of the fastest,
meaning that it's 20 times slower than the fastest.

# Test failure summary

This test suite uses the [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite).

If a validator does not pass a test in the official test suite, it will show up in these results.

![failing tests](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=26,4,1&chs=600x410&chxl=-1:|skeemas|jjv|jsonschema|z-schema|is-my-json-valid|jayschema|themis|jsck|request-validator|tv4|jassi|json-model|JSV&chd=t:1,4,5,5,9,10,13,21,26,26,31,40,54&chxr=0,0,54&chds=0,54)

|Validator|Number of failing tests (click for details)|
|---------|-----------------------|
|[`skeemas`](https://github.com/Prestaul/skeemas)|[1](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/skeemas.md)|
|[`jjv`](https://github.com/acornejo/jjv)|[4](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jjv.md)|
|[`jsonschema`](https://github.com/tdegrunt/jsonschema)|[5](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jsonschema.md)|
|[`z-schema`](https://github.com/zaggino/z-schema)|[5](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/z-schema.md)|
|[`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid)|[9](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/is-my-json-valid.md)|
|[`jayschema`](https://github.com/natesilva/jayschema)|[10](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jayschema.md)|
|themis|[13](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/themis.md)|
|[`jsck`](https://github.com/pandastrike/jsck)|[21](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jsck.md)|
|[`request-validator`](https://github.com/bugventure/request-validator)|[26](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/request-validator.md)|
|[`tv4`](https://github.com/geraintluff/tv4)|[26](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/tv4.md)|
|[`jassi`](https://github.com/iclanzan/jassi)|[31](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jassi.md)|
|[`json-model`](https://github.com/geraintluff/json-model)|[40](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/json-model.md)|
|[`JSV`](http://github.com/garycourt/JSV)|[54](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/JSV.md)|

Some validators have deliberately chosen not to support parts of the spec. Go to the homepage of the validator to learn if
that is the case for these tests.

# Side-effects summary

Number of tests that caused side-effects. The schema or data was altered by the validator.

|Validator|Number of side-effects (BAD)|
|---------|----------------------------|
|[`tv4`](https://github.com/geraintluff/tv4)|[2](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/tv4-side-effects.md)|
|[`jsonschema`](https://github.com/tdegrunt/jsonschema)|[4](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jsonschema-side-effects.md)|
|[`json-model`](https://github.com/geraintluff/json-model)|[283](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/json-model-side-effects.md)|
|[`z-schema`](https://github.com/zaggino/z-schema)|[290](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/z-schema-side-effects.md)|

Validators not in the list have no side-effects on data or schemas.

# License
MIT
