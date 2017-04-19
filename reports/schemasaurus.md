# [`schemasaurus`](https://github.com/AlexeyGrishin/schemasaurus) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`schemasaurus`](https://github.com/AlexeyGrishin/schemasaurus) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`schemasaurus`](https://github.com/AlexeyGrishin/schemasaurus) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
|`valid definition, valid definition schema`|The schema failed to load(`Remote refs are not supported for now :(`)
|`invalid definition, invalid definition schema`|The schema failed to load(`Remote refs are not supported for now :(`)
|`a schema given for items, JavaScript pseudo-array is valid`|Expected result: `true` but validator returned: `false`
|`an array of schemas for items, JavaScript pseudo-array is valid`|Expected result: `true` but validator returned: `false`
|`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`
|`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`
|`ECMA 262 regex non-compliance, ECMA 262 has no support for \Z anchor from .NET`|The schema failed to load(`Unknown format 'regex'. Did you forget to register it?`)
|`remote ref, containing refs itself, remote ref valid`|The schema failed to load(`Remote refs are not supported for now :(`)
|`remote ref, containing refs itself, remote ref invalid`|The schema failed to load(`Remote refs are not supported for now :(`)
|`Recursive references between schemas, valid tree`|The schema failed to load(`Cannot read property 'split' of undefined`)
|`Recursive references between schemas, invalid tree`|The schema failed to load(`Cannot read property 'split' of undefined`)
|`remote ref, remote ref valid`|The schema failed to load(`Cannot read property 'split' of undefined`)
|`remote ref, remote ref invalid`|The schema failed to load(`Cannot read property 'split' of undefined`)
|`fragment within remote ref, remote fragment valid`|The schema failed to load(`Remote refs are not supported for now :(`)
|`fragment within remote ref, remote fragment invalid`|The schema failed to load(`Remote refs are not supported for now :(`)
|`ref within remote ref, ref within ref valid`|The schema failed to load(`Remote refs are not supported for now :(`)
|`ref within remote ref, ref within ref invalid`|The schema failed to load(`Remote refs are not supported for now :(`)
|`base URI change, base URI change ref valid`|The schema failed to load(`Cannot read property 'split' of undefined`)
|`base URI change, base URI change ref invalid`|The schema failed to load(`Cannot read property 'split' of undefined`)
|`base URI change - change folder, number is valid`|The schema failed to load(`Cannot read property 'split' of undefined`)
|`base URI change - change folder, string is invalid`|The schema failed to load(`Cannot read property 'split' of undefined`)
|`base URI change - change folder in subschema, number is valid`|The schema failed to load(`Cannot read property 'split' of undefined`)
|`base URI change - change folder in subschema, string is invalid`|The schema failed to load(`Cannot read property 'split' of undefined`)
|`root ref in remote ref, string is valid`|The schema failed to load(`Remote refs are not supported for now :(`)
|`root ref in remote ref, null is valid`|The schema failed to load(`Remote refs are not supported for now :(`)
|`root ref in remote ref, object is invalid`|The schema failed to load(`Remote refs are not supported for now :(`)

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)