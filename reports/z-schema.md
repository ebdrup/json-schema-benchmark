# [`z-schema`](https://github.com/zaggino/z-schema) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`z-schema`](https://github.com/zaggino/z-schema) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`z-schema`](https://github.com/zaggino/z-schema) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
|`ECMA 262 regex non-compliance, ECMA 262 has no support for \Z anchor from .NET`|Expected result: `false` but validator returned: `true`
|`validation of URIs, an invalid protocol-relative URI Reference`|Expected result: `false` but validator returned: `true`
|`validation of URIs, an invalid URI`|Expected result: `false` but validator returned: `true`
|`validation of URIs, an invalid URI though valid URI reference`|Expected result: `false` but validator returned: `true`
|`Recursive references between schemas, valid tree`|Expected result: `true` but validator returned: `false`
|`base URI change - change folder, number is valid`|Expected result: `true` but validator returned: `false`
|`base URI change - change folder in subschema, number is valid`|Expected result: `true` but validator returned: `false`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)