# [`jsen`](https://github.com/bugventure/jsen) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`jsen`](https://github.com/bugventure/jsen) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`jsen`](https://github.com/bugventure/jsen) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
|`ECMA 262 regex non-compliance, ECMA 262 has no support for \Z anchor from .NET`|Expected result: `false` but validator returned: `true`
|`validation of URIs, an invalid protocol-relative URI Reference`|Expected result: `false` but validator returned: `true`
|`root ref in remote ref, string is valid`|Expected result: `true` but validator returned: `false`
|`root ref in remote ref, object is invalid`|Expected result: `false` but validator returned: `true`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)