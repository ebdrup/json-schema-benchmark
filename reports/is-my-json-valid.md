# [`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
|`invalid definition, invalid definition schema`|Expected result: `false` but validator returned: `true`
|`an array of schemas for items, JavaScript pseudo-array is valid`|Expected result: `true` but validator returned: `false`
|`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`
|`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`
|`ECMA 262 regex non-compliance, ECMA 262 has no support for \Z anchor from .NET`|Expected result: `false` but validator returned: `true`
|`ref overrides any sibling keywords, ref valid, maxItems ignored`|Expected result: `true` but validator returned: `false`
|`remote ref, containing refs itself, remote ref invalid`|Expected result: `false` but validator returned: `true`
|`Recursive references between schemas, invalid tree`|Expected result: `false` but validator returned: `true`
|`ref within remote ref, ref within ref invalid`|Expected result: `false` but validator returned: `true`
|`base URI change, base URI change ref invalid`|Expected result: `false` but validator returned: `true`
|`base URI change - change folder, string is invalid`|Expected result: `false` but validator returned: `true`
|`base URI change - change folder in subschema, string is invalid`|Expected result: `false` but validator returned: `true`
|`root ref in remote ref, object is invalid`|Expected result: `false` but validator returned: `true`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)