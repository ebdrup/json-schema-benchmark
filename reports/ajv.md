# [`ajv`](https://github.com/epoberezkin/ajv) - test summary


# [`ajv`](https://github.com/epoberezkin/ajv) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`ajv`](https://github.com/epoberezkin/ajv) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
|`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`|Expected result: `false` but validator returned: `true`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)