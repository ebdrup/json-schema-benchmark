# json-schema-benchmark
Benchmarks for Node.js JSON-schema validators.

Plus tests against official JSON-schema test suite and checking
for validators that cause side-effects on schema or data.

# Results

![performance](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=46,4,1&chs=600x420&chxl=-1:|is-my-json-valid|themis|jsck|z-schema|jjv|skeemas|request-validator|jayschema&chd=t:100,26.5,11.1,8.5,7.3,1.3,0.7,0.1)

|Validator|Relative speed|Number of test runs per second|
|---------|:------------:|:----------------------------:|
|`is-my-json-valid`|100%|14825 (± 1%)|
|`themis`|26.5%|3924 (± 3.82%)|
|`jsck`|11.1%|1647 (± 0.83%)|
|`z-schema`|8.5%|1255 (± 4.28%)|
|`jjv`|7.3%|1086 (± 0.94%)|
|`skeemas`|1.3%|198 (± 2.09%)|
|`request-validator`|0.7%|102 (± 4.67%)|
|`jayschema`|0.1%|13 (± 3.36%)|

Validators tested: `is-my-json-valid`, `themis`, `z-schema`, `jjv`, `skeemas`, `jayschema`, `jsck`, `jassi`, `JSV`, `request-validator`, `json-model`, `tv4`, `jsonschema`, 
(those not in the results above where excluded because of failing tests - see below for details)

`is-my-json-valid` is currently by far the fastest JSON-schema validator out there.

The fastest validator has 100%, the rest a lower score relative to the fastest.
If a validator has a score of 5% that means that it's speed is 5% of the fastest,
meaning that it's 20 times slower than the fastest

The number in parenthesis is the number of validations of the entire test suite per second.

# What is this for?

This test suite uses the official JSON-schema test suite, but it uses it to test the speed of validators.

This also means, that if a validator does not pass a chosen subset of the official test suite, it will show up in these results (below).

This benchmark is using  the `benchmark` module to gain statistically significant results.

Feel free to add more validators to the test suite in a pull request.

# Test failure summary

Number of failed tests per validator (lower is better)

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
|`tv4`|2|
|`jsonschema`|4|
|`json-model`|283|
|`z-schema`|290|

Validators not in the list have no side-effects on data or schemas.

# Thanks
This code was originally pulled out from the benchmarks in the `themis` json-schema validator.
Thanks goes to Johny Jose for his work there.

# License
MIT
