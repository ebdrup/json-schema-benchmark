# [`jsen`](https://github.com/bugventure/jsen) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`jsen`](https://github.com/bugventure/jsen) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`jsen`](https://github.com/bugventure/jsen) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
|`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`
|`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`
|`remote ref, remote ref valid`|The schema failed to load(`jsen: invalid schema reference http://localhost:1234/integer.json`)
|`remote ref, remote ref invalid`|The schema failed to load(`jsen: invalid schema reference http://localhost:1234/integer.json`)
|`fragment within remote ref, remote fragment valid`|The schema failed to load(`jsen: invalid schema reference http://localhost:1234/subSchemas.json#/integer`)
|`fragment within remote ref, remote fragment invalid`|The schema failed to load(`jsen: invalid schema reference http://localhost:1234/subSchemas.json#/integer`)
|`ref within remote ref, ref within ref valid`|The schema failed to load(`jsen: invalid schema reference http://localhost:1234/subSchemas.json#/refToInteger`)
|`ref within remote ref, ref within ref invalid`|The schema failed to load(`jsen: invalid schema reference http://localhost:1234/subSchemas.json#/refToInteger`)
|`change resolution scope, changed scope ref valid`|The schema failed to load(`jsen: invalid schema reference folderInteger.json`)
|`change resolution scope, changed scope ref invalid`|The schema failed to load(`jsen: invalid schema reference folderInteger.json`)

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)