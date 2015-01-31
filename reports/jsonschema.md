# [`jsonschema`](https://github.com/tdegrunt/jsonschema) - test summary

# All validators fail these tests

some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part


# [`jsonschema`](https://github.com/tdegrunt/jsonschema) failed tests
|test failed|reason
|-----------|------
|`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`
|`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`
|`validation of date-time strings, a valid date-time string`|Expected result: `true` but validator returned: `false`
|`validation of host names, a valid host name`|Expected result: `true` but validator returned: `false`

**All other tests passed**.
