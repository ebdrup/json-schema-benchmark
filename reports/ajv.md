# [`ajv`](https://github.com/epoberezkin/ajv) - test summary

# All validators fail this test

`ECMA 262 \s matches ascii whitespace only, latin-1 non-breaking-space does not match (unlike e.g. Python)`

`Proper UTF-16 surrogate pair handling: patternProperties, doesn&#39;t match two`

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`ajv`](https://github.com/epoberezkin/ajv) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`ajv`](https://github.com/epoberezkin/ajv) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`ECMA 262 \S matches everything but ascii whitespace, latin-1 non-breaking-space matches (unlike e.g. Python)`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: pattern, matches empty`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: pattern, matches two`|Expected result: `true` but validator returned: `false`
`Location-independent identifier, match`|The schema failed to load(`schema is invalid: data.definitions['A'].id should match format "uri"`)
`Location-independent identifier, mismatch`|The schema failed to load(`schema is invalid: data.definitions['A'].id should match format "uri"`)
`Location-independent identifier with base URI change in subschema, match`|The schema failed to load(`schema is invalid: data.definitions['A'].id should match format "uri"`)
`Location-independent identifier with base URI change in subschema, mismatch`|The schema failed to load(`schema is invalid: data.definitions['A'].id should match format "uri"`)
`base URI change, base URI change ref valid`|The schema failed to load(`schema is invalid: data.items.id should match format "uri", data.items should be array, data.items should match some schema in anyOf`)
`base URI change, base URI change ref invalid`|The schema failed to load(`schema is invalid: data.items.id should match format "uri", data.items should be array, data.items should match some schema in anyOf`)
`base URI change - change folder, number is valid`|The schema failed to load(`schema is invalid: data.definitions['baz'].id should match format "uri"`)
`base URI change - change folder, string is invalid`|The schema failed to load(`schema is invalid: data.definitions['baz'].id should match format "uri"`)
`base URI change - change folder in subschema, number is valid`|The schema failed to load(`schema is invalid: data.definitions['baz'].id should match format "uri"`)
`base URI change - change folder in subschema, string is invalid`|The schema failed to load(`schema is invalid: data.definitions['baz'].id should match format "uri"`)

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)