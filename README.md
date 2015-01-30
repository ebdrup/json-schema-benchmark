# json-schema-benchmark
Benchmarks for Node.js JSON-schema validators.

Also test against official JSON-schema test suite and check
for validation causing side-effects on schema or data.

# Results

![performance](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=53,4,1&chs=600x419&chxl=-1:|is-my-json-valid|themis|jsck|z-schema|jjv|skeemas|jayschema&chd=t2:100,25.7,12.1,8.5,7.2,1.5,0.1)

|Validator|Relative speed|Number of test runs per second|
|---------|:------------:|:----------------------------:|
|`is-my-json-valid`|100%|12372 ± 1.57%|
|`themis`|25.7%|3174 ± 3.61%|
|`jsck`|12.1%|1501 ± 0.93%|
|`z-schema`|8.5%|1046 ± 3.71%|
|`jjv`|7.2%|886 ± 1.36%|
|`skeemas`|1.5%|180 ± 1.39%|
|`jayschema`|0.1%|12 ± 2.87%|

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

![failing tests](https://chart.googleapis.com/chart?chxt=x,y&cht=bhs&chco=76A4FB&chls=2.0&chbh=26,4,1&chs=600x410&chxl=-1:|is-my-json-valid|jjv|jayschema|z-schema|skeemas|themis|jsonschema|jsck|tv4|jassi|json-model|JSV|request-validator&chd=t2:9,9,10,11,13,13,17,21,26,31,40,54,139&chxr=0,0,139)

|Validator|Number of failing tests|
|---------|-----------------------|
|`is-my-json-valid`|[9](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/is-my-json-valid.md)|
|`jjv`|[9](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jjv.md)|
|`jayschema`|[10](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jayschema.md)|
|`z-schema`|[11](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/z-schema.md)|
|`skeemas`|[13](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/skeemas.md)|
|`themis`|[13](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/themis.md)|
|`jsonschema`|[17](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jsonschema.md)|
|`jsck`|[21](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jsck.md)|
|`tv4`|[26](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/tv4.md)|
|`jassi`|[31](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jassi.md)|
|`json-model`|[40](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/json-model.md)|
|`JSV`|[54](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/JSV.md)|
|`request-validator`|[139](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/request-validator.md)|

# Side-effects summary

Number of tests that caused side-effects. The schema or data was altered by the validator.

|Validator|Number of side-effects (BAD)|
|---------|----------------------------|
|`tv4`|2|
|`jsonschema`|4|
|`request-validator`|149|
|`json-model`|283|
|`z-schema`|290|

Validators not in the list have no side-effects on data or schemas.

# Detaild test reports

[`is-my-json-valid`](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/is-my-json-valid.md)

[`themis`](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/themis.md)

[`z-schema`](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/z-schema.md)

[`jjv`](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jjv.md)

[`skeemas`](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/skeemas.md)

[`jayschema`](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jayschema.md)

[`jsck`](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jsck.md)

[`jassi`](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jassi.md)

[`JSV`](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/JSV.md)

[`request-validator`](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/request-validator.md)

[`json-model`](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/json-model.md)

[`tv4`](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/tv4.md)

[`jsonschema`](https://github.com/Muscula/json-schema-benchmark/blob/master/reports/jsonschema.md)

# Thanks
This code was originally pulled out from the benchmarks in the `themis` json-schema validator.
Thanks goes to Johny Jose for his work there.

# License
MIT
