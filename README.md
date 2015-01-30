# json-schema-benchmark
Performance benchmark for Node.js JSON-schema validators.

Also tests against [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite) and checks
for validators that cause side-effects on schema or data.

# Performance

![performance](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=46,4,1&chs=600x420&chxl=-1:|is-my-json-valid|themis|jsck|z-schema|jjv|skeemas|request-validator|jayschema&chd=t:100,27.5,12.4,9.3,7.9,1.4,0.7,0.1)

|Validator|Relative speed|Number of test runs per second|
|---------|:------------:|:----------------------------:|
|`is-my-json-valid`|100%|6170 (± 3.9%)|
|`themis`|27.5%|1696 (± 4.44%)|
|`jsck`|12.4%|762 (± 1.03%)|
|`z-schema`|9.3%|574 (± 4.34%)|
|`jjv`|7.9%|490 (± 1.66%)|
|`skeemas`|1.4%|88 (± 1.01%)|
|`request-validator`|0.7%|44 (± 5.68%)|
|`jayschema`|0.1%|5 (± 2.87%)|

Validators tested: `is-my-json-valid`, `themis`, `z-schema`, `jjv`, `skeemas`, `jayschema`, `jsck`, `jassi`, `JSV`, `request-validator`, `json-model`, `tv4`, `jsonschema`, 

(validators not in the results above where excluded because of failing tests - see below for details)

`is-my-json-valid` is currently the fastest JSON-schema validator out there.

The fastest validator has 100%, the rest a lower score relative to the fastest.
If a validator has a score of 5% that means that it's speed is 5% of the fastest,
meaning that it's 20 times slower than the fastest.

# Test failure summary

This test suite uses the [official JSON-schema test suite](https://github.com/json-schema/JSON-Schema-Test-Suite).

If a validator does not pass a test in the official test suite, it will show up in these results.

![failing tests](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=26,4,1&chs=600x410&chxl=-1:|is-my-json-valid|jjv|jayschema|z-schema|skeemas|themis|jsonschema|jsck|request-validator|tv4|jassi|json-model|JSV&chd=t:9,9,10,11,13,13,17,21,26,26,31,40,54&chxr=0,0,54&chds=0,54)

|Validator|Number of failing tests (click for details)|
|---------|-----------------------|
|`is-my-json-valid`|[9](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/is-my-json-valid.md)|
|`jjv`|[9](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jjv.md)|
|`jayschema`|[10](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jayschema.md)|
|`z-schema`|[11](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/z-schema.md)|
|`skeemas`|[13](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/skeemas.md)|
|`themis`|[13](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/themis.md)|
|`jsonschema`|[17](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jsonschema.md)|
|`jsck`|[21](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jsck.md)|
|`request-validator`|[26](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/request-validator.md)|
|`tv4`|[26](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/tv4.md)|
|`jassi`|[31](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jassi.md)|
|`json-model`|[40](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/json-model.md)|
|`JSV`|[54](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/JSV.md)|

# Side-effects summary

Number of tests that caused side-effects. The schema or data was altered by the validator.

|Validator|Number of side-effects (BAD)|
|---------|----------------------------|
|`tv4`|[2](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/tv4-side-effects.md)|
|`jsonschema`|[4](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jsonschema-side-effects.md)|
|`json-model`|[283](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/json-model-side-effects.md)|
|`z-schema`|[290](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/z-schema-side-effects.md)|

Validators not in the list have no side-effects on data or schemas.

# Thanks
This code was originally pulled out from the benchmarks in the `themis` json-schema validator.
Thanks goes to Johny Jose for his work there.

# License
MIT
