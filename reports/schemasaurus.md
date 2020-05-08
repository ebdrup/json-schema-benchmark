# [`schemasaurus`](https://github.com/AlexeyGrishin/schemasaurus) - test summary

# All validators fail this test

`ECMA 262 \s matches ascii whitespace only, latin-1 non-breaking-space does not match (unlike e.g. Python)`

`Proper UTF-16 surrogate pair handling: patternProperties, doesn&#39;t match two`

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`schemasaurus`](https://github.com/AlexeyGrishin/schemasaurus) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`schemasaurus`](https://github.com/AlexeyGrishin/schemasaurus) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`valid definition, valid definition schema`|The schema failed to load(`Remote refs are not supported for now :(`). **This excludes this validator from performance tests**
`invalid definition, invalid definition schema`|The schema failed to load(`Remote refs are not supported for now :(`)
`dependencies with escaped characters, valid object 1`|The schema failed to load(`Unexpected identifier`). **This excludes this validator from performance tests**
`dependencies with escaped characters, valid object 2`|The schema failed to load(`Unexpected identifier`). **This excludes this validator from performance tests**
`dependencies with escaped characters, valid object 3`|The schema failed to load(`Unexpected identifier`). **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 1`|The schema failed to load(`Unexpected identifier`). **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 2`|The schema failed to load(`Unexpected identifier`). **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 3`|The schema failed to load(`Unexpected identifier`). **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 4`|The schema failed to load(`Unexpected identifier`). **This excludes this validator from performance tests**
`a schema given for items, JavaScript pseudo-array is valid`|Expected result: `true` but validator returned: `false`
`an array of schemas for items, JavaScript pseudo-array is valid`|Expected result: `true` but validator returned: `false`
`items and subitems, valid items`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`items and subitems, fewer items is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`
`maxProperties validation, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`
`minProperties validation, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`ECMA 262 regex non-compliance, ECMA 262 has no support for \Z anchor from .NET`|The schema failed to load(`Unknown format 'regex'. Did you forget to register it?`)
`ECMA 262 \S matches everything but ascii whitespace, latin-1 non-breaking-space matches (unlike e.g. Python)`|Expected result: `true` but validator returned: `false`
`validation of date-time strings, a invalid day in date-time string`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, an invalid offset in date-time string`|Expected result: `false` but validator returned: `true`
`Proper UTF-16 surrogate pair handling: pattern, matches empty`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: pattern, matches two`|Expected result: `true` but validator returned: `false`
`properties with escaped characters, object with all numbers is valid`|The schema failed to load(`Unexpected identifier`). **This excludes this validator from performance tests**
`properties with escaped characters, object with strings is invalid`|The schema failed to load(`Unexpected identifier`). **This excludes this validator from performance tests**
`remote ref, containing refs itself, remote ref valid`|The schema failed to load(`Remote refs are not supported for now :(`). **This excludes this validator from performance tests**
`remote ref, containing refs itself, remote ref invalid`|The schema failed to load(`Remote refs are not supported for now :(`)
`Recursive references between schemas, valid tree`|The schema failed to load(`Cannot read property 'split' of undefined`). **This excludes this validator from performance tests**
`Recursive references between schemas, invalid tree`|The schema failed to load(`Cannot read property 'split' of undefined`)
`refs with quote, object with numbers is valid`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`refs with quote, object with strings is invalid`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`Location-independent identifier, match`|The schema failed to load(`Cannot find ref '#foo' in schema`)
`Location-independent identifier, mismatch`|The schema failed to load(`Cannot find ref '#foo' in schema`)
`Location-independent identifier with absolute URI, match`|The schema failed to load(`Remote refs are not supported for now :(`). **This excludes this validator from performance tests**
`Location-independent identifier with absolute URI, mismatch`|The schema failed to load(`Remote refs are not supported for now :(`). **This excludes this validator from performance tests**
`Location-independent identifier with base URI change in subschema, match`|The schema failed to load(`Remote refs are not supported for now :(`)
`Location-independent identifier with base URI change in subschema, mismatch`|The schema failed to load(`Remote refs are not supported for now :(`)
`remote ref, remote ref valid`|The schema failed to load(`Cannot read property 'split' of undefined`). **This excludes this validator from performance tests**
`remote ref, remote ref invalid`|The schema failed to load(`Cannot read property 'split' of undefined`). **This excludes this validator from performance tests**
`fragment within remote ref, remote fragment valid`|The schema failed to load(`Remote refs are not supported for now :(`). **This excludes this validator from performance tests**
`fragment within remote ref, remote fragment invalid`|The schema failed to load(`Remote refs are not supported for now :(`). **This excludes this validator from performance tests**
`ref within remote ref, ref within ref valid`|The schema failed to load(`Remote refs are not supported for now :(`). **This excludes this validator from performance tests**
`ref within remote ref, ref within ref invalid`|The schema failed to load(`Remote refs are not supported for now :(`)
`base URI change, base URI change ref valid`|The schema failed to load(`Cannot read property 'split' of undefined`)
`base URI change, base URI change ref invalid`|The schema failed to load(`Cannot read property 'split' of undefined`)
`base URI change - change folder, number is valid`|The schema failed to load(`Cannot read property 'split' of undefined`)
`base URI change - change folder, string is invalid`|The schema failed to load(`Cannot read property 'split' of undefined`)
`base URI change - change folder in subschema, number is valid`|The schema failed to load(`Cannot read property 'split' of undefined`)
`base URI change - change folder in subschema, string is invalid`|The schema failed to load(`Cannot read property 'split' of undefined`)
`root ref in remote ref, string is valid`|The schema failed to load(`Remote refs are not supported for now :(`). **This excludes this validator from performance tests**
`root ref in remote ref, null is valid`|The schema failed to load(`Remote refs are not supported for now :(`). **This excludes this validator from performance tests**
`root ref in remote ref, object is invalid`|The schema failed to load(`Remote refs are not supported for now :(`)
`uniqueItems=false validation, non-unique array of integers is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, numbers are unique if mathematically unequal`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, non-unique array of objects is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, non-unique array of nested objects is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, non-unique array of arrays is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, non-unique heterogeneous types are valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items, [false, false] from items array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items, [true, true] from items array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items, non-unique array extended from [false, true] is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items, non-unique array extended from [true, false] is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items and additionalItems=false, [false, false] from items array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items and additionalItems=false, [true, true] from items array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)