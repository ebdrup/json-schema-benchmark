# [`jsck`](https://github.com/pandastrike/jsck#readme) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`jsck`](https://github.com/pandastrike/jsck#readme) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`jsck`](https://github.com/pandastrike/jsck#readme) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`dependencies with escaped characters, invalid object 1`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 2`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 3`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`a schema given for items, JavaScript pseudo-array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`
`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`
`all integers are multiples of 0.5, if overflow is handled, valid if optional overflow handling is implemented`|Expected result: `true` but validator returned: `false`
`validation of date-time strings, a invalid day in date-time string`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, an invalid offset in date-time string`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, case-insensitive T and Z`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, leading whitespace is invalid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, trailing whitespace is invalid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, zone id is not a part of ipv6 address`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid URI with comma in scheme`|Expected result: `false` but validator returned: `true`
`Proper UTF-16 surrogate pair handling: pattern, matches empty`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: pattern, matches two`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: patternProperties, doesn't match two`|Expected result: `false` but validator returned: `true`
`ref overrides any sibling keywords, ref valid, maxItems ignored`|Expected result: `true` but validator returned: `false`
`Recursive references between schemas, valid tree`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/node","http://localhost:1234/tree"]`)
`Recursive references between schemas, invalid tree`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/node","http://localhost:1234/tree"]`)
`refs with quote, object with numbers is valid`|The schema failed to load(`Unresolvable $ref values: ["#/definitions/foo%22bar"]`). **This excludes this validator from performance tests**
`refs with quote, object with strings is invalid`|The schema failed to load(`Unresolvable $ref values: ["#/definitions/foo%22bar"]`). **This excludes this validator from performance tests**
`Location-independent identifier with absolute URI, match`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/bar#foo"]`)
`Location-independent identifier with absolute URI, mismatch`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/bar#foo"]`). **This excludes this validator from performance tests**
`Location-independent identifier with base URI change in subschema, match`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/nested.json#foo"]`)
`Location-independent identifier with base URI change in subschema, mismatch`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/nested.json#foo"]`)
`remote ref, remote ref valid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/integer.json"]`). **This excludes this validator from performance tests**
`remote ref, remote ref invalid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/integer.json"]`). **This excludes this validator from performance tests**
`fragment within remote ref, remote fragment valid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/subSchemas.json#/integer"]`). **This excludes this validator from performance tests**
`fragment within remote ref, remote fragment invalid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/subSchemas.json#/integer"]`). **This excludes this validator from performance tests**
`ref within remote ref, ref within ref valid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/subSchemas.json#/refToInteger"]`)
`ref within remote ref, ref within ref invalid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/subSchemas.json#/refToInteger"]`)
`base URI change, base URI change ref valid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/"]`). **This excludes this validator from performance tests**
`base URI change, base URI change ref invalid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/"]`)
`base URI change - change folder, number is valid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/folderInteger.json"]`)
`base URI change - change folder, string is invalid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/folderInteger.json"]`)
`base URI change - change folder in subschema, number is valid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/folderInteger.json"]`)
`base URI change - change folder in subschema, string is invalid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/folderInteger.json"]`)
`root ref in remote ref, string is valid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/name.json#/definitions/orNull"]`)
`root ref in remote ref, null is valid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/name.json#/definitions/orNull"]`). **This excludes this validator from performance tests**
`root ref in remote ref, object is invalid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/name.json#/definitions/orNull"]`)
`uniqueItems validation, non-unique array of integers is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems validation, numbers are unique if mathematically unequal`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems validation, non-unique array of objects is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems validation, non-unique array of nested objects is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems validation, non-unique array of arrays is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems validation, non-unique heterogeneous types are invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems validation, objects are non-unique despite key order`|Expected result: `false` but validator returned: `true`
`uniqueItems with an array of items, [false, false] from items array is not valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems with an array of items, [true, true] from items array is not valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems with an array of items, non-unique array extended from [false, true] is not valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems with an array of items, non-unique array extended from [true, false] is not valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems with an array of items and additionalItems=false, [false, false] from items array is not valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems with an array of items and additionalItems=false, [true, true] from items array is not valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)