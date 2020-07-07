# [`jsonschema`](https://github.com/tdegrunt/jsonschema#readme) - test summary


# [`jsonschema`](https://github.com/tdegrunt/jsonschema#readme) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`jsonschema`](https://github.com/tdegrunt/jsonschema#readme) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`boolean schema 'false', number is invalid`|Expected result: `false` but validator returned: `"no schema specified"`. **This excludes this validator from performance tests**
`boolean schema 'false', string is invalid`|Expected result: `false` but validator returned: `"no schema specified"`. **This excludes this validator from performance tests**
`boolean schema 'false', boolean true is invalid`|Expected result: `false` but validator returned: `"no schema specified"`. **This excludes this validator from performance tests**
`boolean schema 'false', boolean false is invalid`|Expected result: `false` but validator returned: `"no schema specified"`. **This excludes this validator from performance tests**
`boolean schema 'false', null is invalid`|Expected result: `false` but validator returned: `"no schema specified"`. **This excludes this validator from performance tests**
`boolean schema 'false', object is invalid`|Expected result: `false` but validator returned: `"no schema specified"`. **This excludes this validator from performance tests**
`boolean schema 'false', empty object is invalid`|Expected result: `false` but validator returned: `"no schema specified"`. **This excludes this validator from performance tests**
`boolean schema 'false', array is invalid`|Expected result: `false` but validator returned: `"no schema specified"`. **This excludes this validator from performance tests**
`boolean schema 'false', empty array is invalid`|Expected result: `false` but validator returned: `"no schema specified"`. **This excludes this validator from performance tests**
`contains keyword validation, array without items matching schema is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`contains keyword validation, empty array is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`contains keyword with const keyword, array without item 5 is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`contains keyword with boolean schema true, empty array is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`contains keyword with boolean schema false, any non-empty array is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`contains keyword with boolean schema false, empty array is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`items + contains, matches items, does not match contains`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`exclusiveMaximum validation, boundary point is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`exclusiveMaximum validation, above the exclusiveMaximum is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`exclusiveMinimum validation, boundary point is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`exclusiveMinimum validation, below the exclusiveMinimum is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`items with boolean schema (false), any non-empty array is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`items with boolean schemas, array with two items is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`float comparison with high precision, comparison works for high numbers`|Expected result: `false` but validator returned: `true`
`float comparison with high precision on negative numbers, comparison works for very negative numbers`|Expected result: `false` but validator returned: `true`
`ECMA 262 regex non-compliance, ECMA 262 has no support for \Z anchor from .NET`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, a invalid day in date-time string`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, an invalid offset in date-time string`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (~ not escaped)`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #1`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #2`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #3`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (some escaped, but not all) #1`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (some escaped, but not all) #2`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (wrong escape character) #1`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (wrong escape character) #2`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (multiple characters not escaped)`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #1`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #2`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #3`|Expected result: `false` but validator returned: `true`
`validation of URI References, an invalid URI Reference`|Expected result: `false` but validator returned: `true`
`validation of URI References, an invalid URI fragment`|Expected result: `false` but validator returned: `true`
`format: uri-template, an invalid uri-template`|Expected result: `false` but validator returned: `true`
`Proper UTF-16 surrogate pair handling: pattern, matches empty`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: pattern, matches two`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: patternProperties, doesn't match two`|Expected result: `false` but validator returned: `true`
`propertyNames validation, some property names invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`propertyNames with boolean schema false, object with any properties is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`Recursive references between schemas, valid tree`|Expected result: `true` but validator returned: `"no such schema </node>"`
`Recursive references between schemas, invalid tree`|Expected result: `false` but validator returned: `"no such schema </node>"`
`Location-independent identifier, match`|Expected result: `true` but validator returned: `"Maximum call stack size exceeded"`
`Location-independent identifier, mismatch`|Expected result: `false` but validator returned: `"Maximum call stack size exceeded"`
`Location-independent identifier with absolute URI, match`|Expected result: `true` but validator returned: `"no such schema <http://localhost:1234/bar#foo>"`
`Location-independent identifier with absolute URI, mismatch`|Expected result: `false` but validator returned: `"no such schema <http://localhost:1234/bar#foo>"`. **This excludes this validator from performance tests**
`Location-independent identifier with base URI change in subschema, match`|Expected result: `true` but validator returned: `"no such schema <http://localhost:1234/nested.json#foo>"`
`Location-independent identifier with base URI change in subschema, mismatch`|Expected result: `false` but validator returned: `"no such schema <http://localhost:1234/nested.json#foo>"`
`base URI change, base URI change ref valid`|Expected result: `true` but validator returned: `"no such schema </folderInteger.json>"`
`base URI change, base URI change ref invalid`|Expected result: `false` but validator returned: `"no such schema </folderInteger.json>"`
`base URI change - change folder, number is valid`|Expected result: `true` but validator returned: `"no such schema </folderInteger.json>"`
`base URI change - change folder, string is invalid`|Expected result: `false` but validator returned: `"no such schema </folderInteger.json>"`
`base URI change - change folder in subschema, number is valid`|Expected result: `true` but validator returned: `"no such schema </folderInteger.json>"`
`base URI change - change folder in subschema, string is invalid`|Expected result: `false` but validator returned: `"no such schema </folderInteger.json>"`
`root ref in remote ref, string is valid`|Expected result: `true` but validator returned: `"no such schema </name.json#/definitions/orNull>"`
`root ref in remote ref, null is valid`|Expected result: `true` but validator returned: `"no such schema </name.json#/definitions/orNull>"`. **This excludes this validator from performance tests**
`root ref in remote ref, object is invalid`|Expected result: `false` but validator returned: `"no such schema </name.json#/definitions/orNull>"`
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