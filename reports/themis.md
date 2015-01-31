# themis - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`


# themis failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the themis homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
|`valid definition, valid definition schema`|Expected result: `true` but validator returned: `"Object #<Object> has no method 'http://json-schema.org/draft-04/schema#'"`
|`invalid definition, invalid definition schema`|Expected result: `false` but validator returned: `"Object #<Object> has no method 'http://json-schema.org/draft-04/schema#'"`
|`remote ref, containing refs itself, remote ref valid`|Expected result: `true` but validator returned: `"Object #<Object> has no method 'http://json-schema.org/draft-04/schema#'"`
|`remote ref, containing refs itself, remote ref invalid`|Expected result: `false` but validator returned: `"Object #<Object> has no method 'http://json-schema.org/draft-04/schema#'"`
|`remote ref, remote ref valid`|Expected result: `true` but validator returned: `"Object #<Object> has no method 'http://localhost:1234/integer.json'"`
|`remote ref, remote ref invalid`|Expected result: `false` but validator returned: `"Object #<Object> has no method 'http://localhost:1234/integer.json'"`
|`fragment within remote ref, remote fragment valid`|Expected result: `true` but validator returned: `"Object #<Object> has no method 'http://localhost:1234/subSchemas.json#/integer'"`
|`fragment within remote ref, remote fragment invalid`|Expected result: `false` but validator returned: `"Object #<Object> has no method 'http://localhost:1234/subSchemas.json#/integer'"`
|`ref within remote ref, ref within ref valid`|Expected result: `true` but validator returned: `"Object #<Object> has no method 'http://localhost:1234/subSchemas.json#/refToInteger'"`
|`ref within remote ref, ref within ref invalid`|Expected result: `false` but validator returned: `"Object #<Object> has no method 'http://localhost:1234/subSchemas.json#/refToInteger'"`
|`change resolution scope, changed scope ref valid`|Expected result: `true` but validator returned: `"Object #<Object> has no method '0'"`
|`change resolution scope, changed scope ref invalid`|Expected result: `false` but validator returned: `"Object #<Object> has no method '0'"`

**All other tests passed**.
