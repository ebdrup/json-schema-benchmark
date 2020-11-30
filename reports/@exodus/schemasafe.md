# [`@exodus/schemasafe`](https://github.com/ExodusMovement/schemasafe) - test summary


# [`@exodus/schemasafe`](https://github.com/ExodusMovement/schemasafe) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`@exodus/schemasafe`](https://github.com/ExodusMovement/schemasafe) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`anyOf with boolean schemas, all true, any value is valid`|The schema failed to load(`some checks are never reachable at #`)
`anyOf with boolean schemas, some true, any value is valid`|The schema failed to load(`some checks are never reachable at #`)
`anyOf with one empty schema, string is valid`|The schema failed to load(`some checks are never reachable at #`)
`anyOf with one empty schema, number is valid`|The schema failed to load(`some checks are never reachable at #`)
`not with boolean schema false, any value is valid`|The schema failed to load(`some checks are never reachable at #`)
`oneOf with boolean schemas, one true, any value is valid`|The schema failed to load(`some checks are never reachable at #`)
`oneOf with boolean schemas, more than one true, any value is invalid`|The schema failed to load(`some checks are never reachable at #`)
`oneOf with boolean schemas, all false, any value is invalid`|The schema failed to load(`some checks are never reachable at #`)

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)