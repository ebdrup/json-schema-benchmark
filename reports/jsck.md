# [`jsck`](https://github.com/pandastrike/jsck#readme) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`jsck`](https://github.com/pandastrike/jsck#readme) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`jsck`](https://github.com/pandastrike/jsck#readme) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
|`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`
|`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`
|`validation of URIs, a valid protocol-relative URI`|Expected result: `true` but validator returned: `false`
|`remote ref, remote ref valid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/integer.json"]`)
|`remote ref, remote ref invalid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/integer.json"]`)
|`fragment within remote ref, remote fragment valid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/subSchemas.json#/integer"]`)
|`fragment within remote ref, remote fragment invalid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/subSchemas.json#/integer"]`)
|`ref within remote ref, ref within ref valid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/subSchemas.json#/refToInteger"]`)
|`ref within remote ref, ref within ref invalid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/subSchemas.json#/refToInteger"]`)
|`change resolution scope, changed scope ref valid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/"]`)
|`change resolution scope, changed scope ref invalid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/"]`)
|`uniqueItems validation, non-unique array of integers is invalid`|Expected result: `false` but validator returned: `true`
|`uniqueItems validation, numbers are unique if mathematically unequal`|Expected result: `false` but validator returned: `true`
|`uniqueItems validation, non-unique array of objects is invalid`|Expected result: `false` but validator returned: `true`
|`uniqueItems validation, non-unique array of nested objects is invalid`|Expected result: `false` but validator returned: `true`
|`uniqueItems validation, non-unique array of arrays is invalid`|Expected result: `false` but validator returned: `true`
|`uniqueItems validation, non-unique heterogeneous types are invalid`|Expected result: `false` but validator returned: `true`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)