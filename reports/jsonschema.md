# [`jsonschema`](https://github.com/tdegrunt/jsonschema#readme) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`jsonschema`](https://github.com/tdegrunt/jsonschema#readme) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`jsonschema`](https://github.com/tdegrunt/jsonschema#readme) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
|`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`
|`maxProperties validation, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`
|`minProperties validation, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`ECMA 262 regex non-compliance, ECMA 262 has no support for \Z anchor from .NET`|Expected result: `false` but validator returned: `true`
|`Recursive references between schemas, valid tree`|Expected result: `true` but validator returned: `"no such schema <http://localhost:1234/node>"`
|`Recursive references between schemas, invalid tree`|Expected result: `false` but validator returned: `"no such schema <http://localhost:1234/node>"`
|`base URI change - change folder, number is valid`|Expected result: `true` but validator returned: `"no such schema <http://localhost:1234/folderInteger.json>"`
|`base URI change - change folder, string is invalid`|Expected result: `false` but validator returned: `"no such schema <http://localhost:1234/folderInteger.json>"`
|`base URI change - change folder in subschema, number is valid`|Expected result: `true` but validator returned: `"no such schema <http://localhost:1234/folderInteger.json>"`
|`base URI change - change folder in subschema, string is invalid`|Expected result: `false` but validator returned: `"no such schema <http://localhost:1234/folderInteger.json>"`
|`required validation, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)