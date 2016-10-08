# [`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
|`invalid definition, invalid definition schema`|Expected result: `false` but validator returned: `true`
|`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`
|`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`
|`validation of URIs, a valid protocol-relative URI`|Expected result: `true` but validator returned: `false`
|`remote ref, containing refs itself, remote ref invalid`|Expected result: `false` but validator returned: `true`
|`ref within remote ref, ref within ref invalid`|Expected result: `false` but validator returned: `true`
|`change resolution scope, changed scope ref invalid`|Expected result: `false` but validator returned: `true`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)