# [`themis`](https://github.com/playlyfe/themis) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`themis`](https://github.com/playlyfe/themis) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`themis`](https://github.com/playlyfe/themis) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
|`valid definition, valid definition schema`|Expected result: `true` but validator returned: `"validators.http://json-schema.org/draft-04/schema# is not a function"`
|`invalid definition, invalid definition schema`|Expected result: `false` but validator returned: `"validators.http://json-schema.org/draft-04/schema# is not a function"`
|`ECMA 262 regex non-compliance, ECMA 262 has no support for \Z anchor from .NET`|Expected result: `false` but validator returned: `true`
|`validation of URIs, a valid puny-coded URL `|Expected result: `true` but validator returned: `false`
|`validation of URIs, a valid URL `|Expected result: `true` but validator returned: `false`
|`validation of URIs, a valid mailto URI`|Expected result: `true` but validator returned: `false`
|`validation of URIs, a valid newsgroup URI`|Expected result: `true` but validator returned: `false`
|`validation of URIs, a valid tel URI`|Expected result: `true` but validator returned: `false`
|`validation of URIs, a valid URN`|Expected result: `true` but validator returned: `false`
|`ref overrides any sibling keywords, ref valid, maxItems ignored`|Expected result: `true` but validator returned: `false`
|`remote ref, containing refs itself, remote ref valid`|Expected result: `true` but validator returned: `"validators.http://json-schema.org/draft-04/schema# is not a function"`
|`remote ref, containing refs itself, remote ref invalid`|Expected result: `false` but validator returned: `"validators.http://json-schema.org/draft-04/schema# is not a function"`
|`Recursive references between schemas, valid tree`|The schema failed to load(`Cannot read property '0' of undefined`)
|`Recursive references between schemas, invalid tree`|The schema failed to load(`Cannot read property '0' of undefined`)
|`remote ref, remote ref valid`|Expected result: `true` but validator returned: `"validators.http://localhost:1234/integer.json is not a function"`
|`remote ref, remote ref invalid`|Expected result: `false` but validator returned: `"validators.http://localhost:1234/integer.json is not a function"`
|`fragment within remote ref, remote fragment valid`|Expected result: `true` but validator returned: `"validators.http://localhost:1234/subSchemas.json#/integer is not a function"`
|`fragment within remote ref, remote fragment invalid`|Expected result: `false` but validator returned: `"validators.http://localhost:1234/subSchemas.json#/integer is not a function"`
|`ref within remote ref, ref within ref valid`|Expected result: `true` but validator returned: `"validators.http://localhost:1234/subSchemas.json#/refToInteger is not a function"`
|`ref within remote ref, ref within ref invalid`|Expected result: `false` but validator returned: `"validators.http://localhost:1234/subSchemas.json#/refToInteger is not a function"`
|`base URI change, base URI change ref valid`|The schema failed to load(`invalid ref: folderInteger.json in folder/`)
|`base URI change, base URI change ref invalid`|The schema failed to load(`invalid ref: folderInteger.json in folder/`)
|`base URI change - change folder, number is valid`|The schema failed to load(`invalid ref: folderInteger.json in folder/`)
|`base URI change - change folder, string is invalid`|The schema failed to load(`invalid ref: folderInteger.json in folder/`)
|`base URI change - change folder in subschema, number is valid`|The schema failed to load(`invalid ref: folderInteger.json in folder/`)
|`base URI change - change folder in subschema, string is invalid`|The schema failed to load(`invalid ref: folderInteger.json in folder/`)
|`root ref in remote ref, string is valid`|The schema failed to load(`Cannot read property 'definitions' of undefined`)
|`root ref in remote ref, null is valid`|The schema failed to load(`Cannot read property 'definitions' of undefined`)
|`root ref in remote ref, object is invalid`|The schema failed to load(`Cannot read property 'definitions' of undefined`)

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)