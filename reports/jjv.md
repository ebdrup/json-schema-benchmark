# [`jjv`](https://github.com/acornejo/jjv) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`jjv`](https://github.com/acornejo/jjv) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`jjv`](https://github.com/acornejo/jjv) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
|`additionalProperties being false does not allow other properties, ignores strings`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`an array of schemas for items, incomplete array of items`|Expected result: `true` but validator returned: `false`
|`an array of schemas for items, empty array`|Expected result: `true` but validator returned: `false`
|`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`
|`maxProperties validation, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`
|`minProperties validation, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`ECMA 262 regex non-compliance, ECMA 262 has no support for \Z anchor from .NET`|Expected result: `false` but validator returned: `true`
|`validation of URIs, a valid URL based on IPv4`|Expected result: `true` but validator returned: `false`
|`validation of URIs, a valid URL `|Expected result: `true` but validator returned: `false`
|`validation of URIs, a valid tel URI`|Expected result: `true` but validator returned: `false`
|`validation of URIs, a valid URN`|Expected result: `true` but validator returned: `false`
|`validation of URIs, an invalid protocol-relative URI Reference`|Expected result: `false` but validator returned: `true`
|`validation of URIs, an invalid URI with spaces`|Expected result: `false` but validator returned: `true`
|`escaped pointer ref, slash valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`escaped pointer ref, tilda valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`escaped pointer ref, percent valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`Recursive references between schemas, valid tree`|Expected result: `true` but validator returned: `false`
|`base URI change, base URI change ref valid`|Expected result: `true` but validator returned: `false`
|`base URI change - change folder, number is valid`|Expected result: `true` but validator returned: `false`
|`base URI change - change folder in subschema, number is valid`|Expected result: `true` but validator returned: `false`
|`root ref in remote ref, string is valid`|Expected result: `true` but validator returned: `false`
|`root ref in remote ref, null is valid`|Expected result: `true` but validator returned: `false`
|`required validation, ignores strings`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`required validation, ignores other non-objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)