# [`tv4`](https://github.com/geraintluff/tv4) - test summary

# All validators fail this test

`ECMA 262 \s matches ascii whitespace only, latin-1 non-breaking-space does not match (unlike e.g. Python)`

`Proper UTF-16 surrogate pair handling: patternProperties, doesn&#39;t match two`

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`tv4`](https://github.com/geraintluff/tv4) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`tv4`](https://github.com/geraintluff/tv4) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`invalid definition, invalid definition schema`|Expected result: `false` but validator returned: `true`
`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`
`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`
`ECMA 262 regex non-compliance, ECMA 262 has no support for \Z anchor from .NET`|Expected result: `false` but validator returned: `true`
`ECMA 262 \S matches everything but ascii whitespace, latin-1 non-breaking-space matches (unlike e.g. Python)`|Expected result: `true` but validator returned: `false`
`validation of date-time strings, a invalid day in date-time string`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, an invalid offset in date-time string`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, an invalid date-time string`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, only RFC3339 not all of ISO 8601 are valid`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid protocol-relative URI Reference`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid relative URI Reference`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid URI`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid URI though valid URI reference`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid URI with spaces`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid URI with spaces and missing scheme`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, an invalid e-mail address`|Expected result: `false` but validator returned: `true`
`validation of IP addresses, an IP address with too many components`|Expected result: `false` but validator returned: `true`
`validation of IP addresses, an IP address with out-of-range values`|Expected result: `false` but validator returned: `true`
`validation of IP addresses, an IP address without 4 components`|Expected result: `false` but validator returned: `true`
`validation of IP addresses, an IP address as an integer`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, an IPv6 address with out-of-range values`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, an IPv6 address with too many components`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, an IPv6 address containing illegal characters`|Expected result: `false` but validator returned: `true`
`validation of host names, a host name starting with an illegal character`|Expected result: `false` but validator returned: `true`
`validation of host names, a host name containing illegal characters`|Expected result: `false` but validator returned: `true`
`validation of host names, a host name with a component too long`|Expected result: `false` but validator returned: `true`
`Proper UTF-16 surrogate pair handling: pattern, matches empty`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: pattern, matches two`|Expected result: `true` but validator returned: `false`
`remote ref, containing refs itself, remote ref invalid`|Expected result: `false` but validator returned: `true`
`Recursive references between schemas, invalid tree`|Expected result: `false` but validator returned: `true`
`Location-independent identifier with absolute URI, mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`Location-independent identifier with base URI change in subschema, mismatch`|Expected result: `false` but validator returned: `true`
`remote ref, remote ref invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`fragment within remote ref, remote fragment invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ref within remote ref, ref within ref invalid`|Expected result: `false` but validator returned: `true`
`base URI change, base URI change ref invalid`|Expected result: `false` but validator returned: `true`
`base URI change - change folder, string is invalid`|Expected result: `false` but validator returned: `true`
`base URI change - change folder in subschema, string is invalid`|Expected result: `false` but validator returned: `true`
`root ref in remote ref, object is invalid`|Expected result: `false` but validator returned: `true`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)