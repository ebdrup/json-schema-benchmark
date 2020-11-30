# [`@exodus/schemasafe`](https://github.com/ExodusMovement/schemasafe) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`@exodus/schemasafe`](https://github.com/ExodusMovement/schemasafe) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`@exodus/schemasafe`](https://github.com/ExodusMovement/schemasafe) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`anyOf with one empty schema, string is valid`|The schema failed to load(`some checks are never reachable at #`)
`anyOf with one empty schema, number is valid`|The schema failed to load(`some checks are never reachable at #`)

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)