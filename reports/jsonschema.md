# [`jsonschema`](https://github.com/tdegrunt/jsonschema) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`jsonschema`](https://github.com/tdegrunt/jsonschema) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`jsonschema`](https://github.com/tdegrunt/jsonschema) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
|`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`
|`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`

**All other tests passed**.

[back to benchmarks](https://github.com/Muscula/json-schema-benchmark)