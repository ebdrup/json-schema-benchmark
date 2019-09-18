# [`ajv`](https://github.com/epoberezkin/jv) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`ajv`](https://github.com/epoberezkin/jv) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`ajv`](https://github.com/epoberezkin/jv) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
|`base URI change, base URI change ref valid`|The schema failed to load(`schema is invalid: data.items.id should match format "uri", data.items should be array, data.items should match some schema in anyOf`)
|`base URI change, base URI change ref invalid`|The schema failed to load(`schema is invalid: data.items.id should match format "uri", data.items should be array, data.items should match some schema in anyOf`)
|`base URI change - change folder, number is valid`|The schema failed to load(`schema is invalid: data.definitions['baz'].id should match format "uri"`)
|`base URI change - change folder, string is invalid`|The schema failed to load(`schema is invalid: data.definitions['baz'].id should match format "uri"`)
|`base URI change - change folder in subschema, number is valid`|The schema failed to load(`schema is invalid: data.definitions['baz'].id should match format "uri"`)
|`base URI change - change folder in subschema, string is invalid`|The schema failed to load(`schema is invalid: data.definitions['baz'].id should match format "uri"`)

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)