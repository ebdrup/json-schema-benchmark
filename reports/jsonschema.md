# [`jsonschema`](https://github.com/tdegrunt/jsonschema#readme) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`jsonschema`](https://github.com/tdegrunt/jsonschema#readme) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`jsonschema`](https://github.com/tdegrunt/jsonschema#readme) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`all integers are multiples of 0.5, if overflow is handled, valid if optional overflow handling is implemented`|Expected result: `true` but validator returned: `false`
`validation of date-time strings, a invalid day in date-time string`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, an invalid offset in date-time string`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, leading whitespace is invalid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, trailing whitespace is invalid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, zone id is not a part of ipv6 address`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid URI with comma in scheme`|Expected result: `false` but validator returned: `true`
`base URI change, base URI change ref valid`|Expected result: `true` but validator returned: `"no such schema <http://localhost:1234/baseUriChange/folderInteger.json>"`
`base URI change, base URI change ref invalid`|Expected result: `false` but validator returned: `"no such schema <http://localhost:1234/baseUriChange/folderInteger.json>"`
`base URI change - change folder, number is valid`|Expected result: `true` but validator returned: `"no such schema <http://localhost:1234/folderInteger.json>"`
`base URI change - change folder, string is invalid`|Expected result: `false` but validator returned: `"no such schema <http://localhost:1234/folderInteger.json>"`
`base URI change - change folder in subschema, number is valid`|Expected result: `true` but validator returned: `"no such schema <http://localhost:1234/folderInteger.json>"`
`base URI change - change folder in subschema, string is invalid`|Expected result: `false` but validator returned: `"no such schema <http://localhost:1234/folderInteger.json>"`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)