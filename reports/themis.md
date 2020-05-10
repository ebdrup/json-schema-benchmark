# [`themis`](https://github.com/playlyfe/themis) - test summary

# All validators fail this test

`ECMA 262 \s matches ascii whitespace only, latin-1 non-breaking-space does not match (unlike e.g. Python)`

`Proper UTF-16 surrogate pair handling: patternProperties, doesn&#39;t match two`

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`themis`](https://github.com/playlyfe/themis) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`themis`](https://github.com/playlyfe/themis) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`valid definition, valid definition schema`|Expected result: `true` but validator returned: `"validators.http://json-schema.org/draft-04/schema# is not a function"`. **This excludes this validator from performance tests**
`invalid definition, invalid definition schema`|Expected result: `false` but validator returned: `"validators.http://json-schema.org/draft-04/schema# is not a function"`
`dependencies with escaped characters, valid object 1`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`dependencies with escaped characters, valid object 2`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`dependencies with escaped characters, valid object 3`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 1`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 2`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 3`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 4`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`enum with escaped characters, member 1 is valid`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`enum with escaped characters, member 2 is valid`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`enum with escaped characters, another string is invalid`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`items and subitems, valid items`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`items and subitems, fewer items is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`oneOf with required, first valid - valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`oneOf with required, second valid - valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`ECMA 262 regex non-compliance, ECMA 262 has no support for \Z anchor from .NET`|Expected result: `false` but validator returned: `true`
`ECMA 262 \S matches everything but ascii whitespace, latin-1 non-breaking-space matches (unlike e.g. Python)`|Expected result: `true` but validator returned: `false`
`validation of URIs, a valid puny-coded URL `|Expected result: `true` but validator returned: `false`
`validation of URIs, a valid URL `|Expected result: `true` but validator returned: `false`
`validation of URIs, a valid mailto URI`|Expected result: `true` but validator returned: `false`
`validation of URIs, a valid newsgroup URI`|Expected result: `true` but validator returned: `false`
`validation of URIs, a valid tel URI`|Expected result: `true` but validator returned: `false`
`validation of URIs, a valid URN`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: pattern, matches empty`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: pattern, matches two`|Expected result: `true` but validator returned: `false`
`properties with escaped characters, object with all numbers is valid`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`properties with escaped characters, object with strings is invalid`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`ref overrides any sibling keywords, ref valid, maxItems ignored`|Expected result: `true` but validator returned: `false`
`remote ref, containing refs itself, remote ref valid`|Expected result: `true` but validator returned: `"validators.http://json-schema.org/draft-04/schema# is not a function"`. **This excludes this validator from performance tests**
`remote ref, containing refs itself, remote ref invalid`|Expected result: `false` but validator returned: `"validators.http://json-schema.org/draft-04/schema# is not a function"`
`Recursive references between schemas, valid tree`|The schema failed to load(`Cannot read property '0' of undefined`)
`Recursive references between schemas, invalid tree`|The schema failed to load(`Cannot read property '0' of undefined`)
`refs with quote, object with numbers is valid`|The schema failed to load(`Unexpected identifier`). **This excludes this validator from performance tests**
`refs with quote, object with strings is invalid`|The schema failed to load(`Unexpected identifier`). **This excludes this validator from performance tests**
`Location-independent identifier with base URI change in subschema, match`|The schema failed to load(`Cannot read property 'oo' of undefined`)
`Location-independent identifier with base URI change in subschema, mismatch`|The schema failed to load(`Cannot read property 'oo' of undefined`)
`remote ref, remote ref valid`|Expected result: `true` but validator returned: `"validators.http://localhost:1234/integer.json is not a function"`. **This excludes this validator from performance tests**
`remote ref, remote ref invalid`|Expected result: `false` but validator returned: `"validators.http://localhost:1234/integer.json is not a function"`. **This excludes this validator from performance tests**
`fragment within remote ref, remote fragment valid`|Expected result: `true` but validator returned: `"validators.http://localhost:1234/subSchemas.json#/integer is not a function"`. **This excludes this validator from performance tests**
`fragment within remote ref, remote fragment invalid`|Expected result: `false` but validator returned: `"validators.http://localhost:1234/subSchemas.json#/integer is not a function"`. **This excludes this validator from performance tests**
`ref within remote ref, ref within ref valid`|Expected result: `true` but validator returned: `"validators.http://localhost:1234/subSchemas.json#/refToInteger is not a function"`
`ref within remote ref, ref within ref invalid`|Expected result: `false` but validator returned: `"validators.http://localhost:1234/subSchemas.json#/refToInteger is not a function"`
`base URI change, base URI change ref valid`|The schema failed to load(`invalid ref: folderInteger.json in folder/`)
`base URI change, base URI change ref invalid`|The schema failed to load(`invalid ref: folderInteger.json in folder/`)
`base URI change - change folder, number is valid`|The schema failed to load(`invalid ref: folderInteger.json in folder/`)
`base URI change - change folder, string is invalid`|The schema failed to load(`invalid ref: folderInteger.json in folder/`)
`base URI change - change folder in subschema, number is valid`|The schema failed to load(`invalid ref: folderInteger.json in folder/`)
`base URI change - change folder in subschema, string is invalid`|The schema failed to load(`invalid ref: folderInteger.json in folder/`)
`root ref in remote ref, string is valid`|The schema failed to load(`Cannot read property 'definitions' of undefined`)
`root ref in remote ref, null is valid`|The schema failed to load(`Cannot read property 'definitions' of undefined`). **This excludes this validator from performance tests**
`root ref in remote ref, object is invalid`|The schema failed to load(`Cannot read property 'definitions' of undefined`)
`required with escaped characters, object with all properties present is valid`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`required with escaped characters, object with some properties missing is invalid`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)