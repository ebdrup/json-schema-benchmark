# [`z-schema`](https://github.com/zaggino/z-schema) - test summary

# All validators fail this test

`ECMA 262 \s matches ascii whitespace only, latin-1 non-breaking-space does not match (unlike e.g. Python)`

`Proper UTF-16 surrogate pair handling: patternProperties, doesn&#39;t match two`

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`z-schema`](https://github.com/zaggino/z-schema) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`z-schema`](https://github.com/zaggino/z-schema) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`ECMA 262 regex non-compliance, ECMA 262 has no support for \Z anchor from .NET`|Expected result: `false` but validator returned: `true`
`ECMA 262 \S matches everything but ascii whitespace, latin-1 non-breaking-space matches (unlike e.g. Python)`|Expected result: `true` but validator returned: `false`
`validation of URIs, an invalid protocol-relative URI Reference`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid relative URI Reference`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid URI`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid URI though valid URI reference`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid URI with spaces`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid URI with spaces and missing scheme`|Expected result: `false` but validator returned: `true`
`Proper UTF-16 surrogate pair handling: pattern, matches empty`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: pattern, matches two`|Expected result: `true` but validator returned: `false`
`Recursive references between schemas, valid tree`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`Location-independent identifier with absolute URI, match`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`Location-independent identifier with base URI change in subschema, match`|Expected result: `true` but validator returned: `false`
`ref within remote ref, ref within ref valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`base URI change - change folder, number is valid`|Expected result: `true` but validator returned: `false`
`base URI change - change folder in subschema, number is valid`|Expected result: `true` but validator returned: `false`
`root ref in remote ref, string is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)