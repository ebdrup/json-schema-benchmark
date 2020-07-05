# [`skeemas`](https://github.com/Prestaul/skeemas#readme) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`skeemas`](https://github.com/Prestaul/skeemas#readme) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`skeemas`](https://github.com/Prestaul/skeemas#readme) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`validation of e-mail addresses, ignores integers`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores floats`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores booleans`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores null`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IP addresses, ignores integers`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IP addresses, ignores floats`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IP addresses, ignores objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IP addresses, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IP addresses, ignores booleans`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IP addresses, ignores null`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, ignores integers`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, ignores floats`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, ignores objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, ignores booleans`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, ignores null`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of hostnames, ignores objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of hostnames, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of date-time strings, ignores integers`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of date-time strings, ignores floats`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of date-time strings, ignores objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of date-time strings, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of date-time strings, ignores booleans`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of date-time strings, ignores null`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, ignores integers`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, ignores floats`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, ignores objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, ignores booleans`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, ignores null`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of date-time strings, a invalid day in date-time string`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, an invalid offset in date-time string`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, tilde in local part is valid`|Expected result: `true` but validator returned: `false`
`validation of e-mail addresses, tilde before local part is valid`|Expected result: `true` but validator returned: `false`
`validation of e-mail addresses, tilde after local part is valid`|Expected result: `true` but validator returned: `false`
`validation of e-mail addresses, dot before local part is not valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, dot after local part is not valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, two subsequent dots inside local part are not valid`|Expected result: `false` but validator returned: `true`
`validation of URIs, a valid URL `|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: pattern, matches empty`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: pattern, matches two`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: patternProperties, doesn't match two`|Expected result: `false` but validator returned: `true`
`Recursive references between schemas, valid tree`|Expected result: `true` but validator returned: `"Unable to locate JSON Ref (http://localhost:1234/node)"`
`Recursive references between schemas, invalid tree`|Expected result: `false` but validator returned: `"Unable to locate JSON Ref (http://localhost:1234/node)"`
`Location-independent identifier, match`|Expected result: `true` but validator returned: `"Invalid JSON Pointer (\"foo\"): non-empty pointers must begin with \"/\" or \"#/\""`
`Location-independent identifier, mismatch`|Expected result: `false` but validator returned: `"Invalid JSON Pointer (\"foo\"): non-empty pointers must begin with \"/\" or \"#/\""`
`Location-independent identifier with absolute URI, match`|Expected result: `true` but validator returned: `"Unable to locate JSON Ref (http://localhost:1234/bar)"`
`Location-independent identifier with absolute URI, mismatch`|Expected result: `false` but validator returned: `"Unable to locate JSON Ref (http://localhost:1234/bar)"`. **This excludes this validator from performance tests**
`Location-independent identifier with base URI change in subschema, match`|Expected result: `true` but validator returned: `"Unable to locate JSON Ref (http://localhost:1234/http://localhost:1234/nested.json)"`
`Location-independent identifier with base URI change in subschema, mismatch`|Expected result: `false` but validator returned: `"Unable to locate JSON Ref (http://localhost:1234/http://localhost:1234/nested.json)"`
`base URI change - change folder in subschema, number is valid`|Expected result: `true` but validator returned: `"Unable to locate JSON Ref (http://localhost:1234/folderInteger.json)"`
`base URI change - change folder in subschema, string is invalid`|Expected result: `false` but validator returned: `"Unable to locate JSON Ref (http://localhost:1234/folderInteger.json)"`
`uniqueItems=false validation, non-unique array of integers is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, numbers are unique if mathematically unequal`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, non-unique array of objects is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, non-unique array of nested objects is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, non-unique array of arrays is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, non-unique heterogeneous types are valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items, [false, false] from items array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items, [true, true] from items array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items, non-unique array extended from [false, true] is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items, non-unique array extended from [true, false] is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items and additionalItems=false, [false, false] from items array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items and additionalItems=false, [true, true] from items array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)