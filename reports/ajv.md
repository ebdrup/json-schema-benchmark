# [`ajv`](https://github.com/epoberezkin/ajv) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`ajv`](https://github.com/epoberezkin/ajv) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`ajv`](https://github.com/epoberezkin/ajv) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
|`valid definition, valid definition schema`|The schema failed to load(`can't resolve reference http://json-schema.org/draft-04/schema# from id #`)
|`invalid definition, invalid definition schema`|The schema failed to load(`can't resolve reference http://json-schema.org/draft-04/schema# from id #`)
|`exclusiveMaximum validation, below the maximum is still valid`|The schema failed to load(`schema is invalid: data.exclusiveMaximum should be number`)
|`exclusiveMaximum validation, boundary point is invalid`|The schema failed to load(`schema is invalid: data.exclusiveMaximum should be number`)
|`exclusiveMinimum validation, above the minimum is still valid`|The schema failed to load(`schema is invalid: data.exclusiveMinimum should be number`)
|`exclusiveMinimum validation, boundary point is invalid`|The schema failed to load(`schema is invalid: data.exclusiveMinimum should be number`)
|`float comparison with high precision, comparison works for high numbers`|The schema failed to load(`schema is invalid: data.exclusiveMaximum should be number`)
|`float comparison with high precision on negative numbers, comparison works for very negative numbers`|The schema failed to load(`schema is invalid: data.exclusiveMinimum should be number`)
|`remote ref, containing refs itself, remote ref valid`|The schema failed to load(`can't resolve reference http://json-schema.org/draft-04/schema# from id #`)
|`remote ref, containing refs itself, remote ref invalid`|The schema failed to load(`can't resolve reference http://json-schema.org/draft-04/schema# from id #`)
|`base URI change, base URI change ref valid`|The schema failed to load(`can't resolve reference folderInteger.json from id http://localhost:1234/folder/`)
|`base URI change, base URI change ref invalid`|The schema failed to load(`can't resolve reference folderInteger.json from id http://localhost:1234/folder/`)
|`base URI change - change folder, number is valid`|The schema failed to load(`can't resolve reference folderInteger.json from id http://localhost:1234/folder/`)
|`base URI change - change folder, string is invalid`|The schema failed to load(`can't resolve reference folderInteger.json from id http://localhost:1234/folder/`)
|`base URI change - change folder in subschema, number is valid`|The schema failed to load(`can't resolve reference folderInteger.json from id http://localhost:1234/folder/`)
|`base URI change - change folder in subschema, string is invalid`|The schema failed to load(`can't resolve reference folderInteger.json from id http://localhost:1234/folder/`)

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)