# [`ajv`](https://github.com/ajv-validator/ajv) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`ajv`](https://github.com/ajv-validator/ajv) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`ajv`](https://github.com/ajv-validator/ajv) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`maximum validation (explicit false exclusivity), below the maximum is valid`|The schema failed to load(`schema is invalid: data.exclusiveMaximum should be number`)
`maximum validation (explicit false exclusivity), boundary point is valid`|The schema failed to load(`schema is invalid: data.exclusiveMaximum should be number`)
`maximum validation (explicit false exclusivity), above the maximum is invalid`|The schema failed to load(`schema is invalid: data.exclusiveMaximum should be number`)
`maximum validation (explicit false exclusivity), ignores non-numbers`|The schema failed to load(`schema is invalid: data.exclusiveMaximum should be number`)
`exclusiveMaximum validation, below the maximum is still valid`|The schema failed to load(`schema is invalid: data.exclusiveMaximum should be number`)
`exclusiveMaximum validation, boundary point is invalid`|The schema failed to load(`schema is invalid: data.exclusiveMaximum should be number`)
`minimum validation (explicit false exclusivity), above the minimum is valid`|The schema failed to load(`schema is invalid: data.exclusiveMinimum should be number`)
`minimum validation (explicit false exclusivity), boundary point is valid`|The schema failed to load(`schema is invalid: data.exclusiveMinimum should be number`)
`minimum validation (explicit false exclusivity), below the minimum is invalid`|The schema failed to load(`schema is invalid: data.exclusiveMinimum should be number`)
`minimum validation (explicit false exclusivity), ignores non-numbers`|The schema failed to load(`schema is invalid: data.exclusiveMinimum should be number`)
`exclusiveMinimum validation, above the minimum is still valid`|The schema failed to load(`schema is invalid: data.exclusiveMinimum should be number`)
`exclusiveMinimum validation, boundary point is invalid`|The schema failed to load(`schema is invalid: data.exclusiveMinimum should be number`)
`float comparison with high precision, comparison works for high numbers`|The schema failed to load(`schema is invalid: data.exclusiveMaximum should be number`)
`float comparison with high precision on negative numbers, comparison works for very negative numbers`|The schema failed to load(`schema is invalid: data.exclusiveMinimum should be number`)
`all integers are multiples of 0.5, if overflow is handled, valid if optional overflow handling is implemented`|Expected result: `true` but validator returned: `false`
`validation of e-mail addresses, dot before local part is not valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, dot after local part is not valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, two subsequent dots inside local part are not valid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, leading whitespace is invalid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, trailing whitespace is invalid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, zone id is not a part of ipv6 address`|Expected result: `false` but validator returned: `true`
`Proper UTF-16 surrogate pair handling: pattern, matches empty`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: pattern, matches two`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: patternProperties, doesn't match two`|Expected result: `false` but validator returned: `true`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)