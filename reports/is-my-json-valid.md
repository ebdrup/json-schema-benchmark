# [`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid#readme) - test summary


# [`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid#readme) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid#readme) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`allOf with boolean schemas, some false, any value is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf with boolean schemas, all false, any value is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`anyOf with boolean schemas, all false, any value is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean schema 'false', number is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean schema 'false', string is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean schema 'false', boolean true is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean schema 'false', boolean false is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean schema 'false', null is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean schema 'false', object is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean schema 'false', empty object is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean schema 'false', array is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean schema 'false', empty array is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const validation, another value is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const validation, another type is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with object, another object is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with object, another type is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with array, another array item is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with array, array with additional items is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with null, not null is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with false does not match 0, integer zero is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with false does not match 0, float zero is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with true does not match 1, integer one is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with true does not match 1, float one is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with 0 does not match other zero-like types, false is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with 0 does not match other zero-like types, empty object is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with 0 does not match other zero-like types, empty array is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with 0 does not match other zero-like types, empty string is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with 1 does not match true, true is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with -2.0 matches integer and float types, integer 2 is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with -2.0 matches integer and float types, float 2.0 is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`const with -2.0 matches integer and float types, float -2.00001 is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`float and integers are equal up to 64-bit representation limits, integer minus one is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`float and integers are equal up to 64-bit representation limits, float minus one is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`nul characters in strings, do not match string lacking nul`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`contains keyword validation, array without items matching schema is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`contains keyword validation, empty array is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`contains keyword with const keyword, array without item 5 is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`contains keyword with boolean schema true, empty array is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`contains keyword with boolean schema false, any non-empty array is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`contains keyword with boolean schema false, empty array is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`items + contains, matches items, does not match contains`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`invalid definition, invalid definition schema`|Expected result: `false` but validator returned: `true`
`dependencies with boolean subschemas, object with property having schema false is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`dependencies with boolean subschemas, object with both properties is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`exclusiveMaximum validation, boundary point is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`exclusiveMaximum validation, above the exclusiveMaximum is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`exclusiveMinimum validation, boundary point is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`exclusiveMinimum validation, below the exclusiveMinimum is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`an array of schemas for items, JavaScript pseudo-array is valid`|Expected result: `true` but validator returned: `false`
`items with boolean schema (false), any non-empty array is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`items with boolean schemas, array with two items is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`
`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`
`oneOf with boolean schemas, one true, any value is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`float comparison with high precision, comparison works for high numbers`|Expected result: `false` but validator returned: `true`
`float comparison with high precision on negative numbers, comparison works for very negative numbers`|Expected result: `false` but validator returned: `true`
`ECMA 262 regex non-compliance, ECMA 262 has no support for \Z anchor from .NET`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, a invalid day in date-time string`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, an invalid offset in date-time string`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, dot before local part is not valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, dot after local part is not valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, two subsequent dots inside local part are not valid`|Expected result: `false` but validator returned: `true`
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
`patternProperties with boolean schemas, object with property matching schema false is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`patternProperties with boolean schemas, object with both properties is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`properties with boolean schema, only 'false' property present is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`properties with boolean schema, both properties present is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`propertyNames validation, some property names invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`propertyNames with boolean schema false, object with any properties is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ref overrides any sibling keywords, ref valid, maxItems ignored`|Expected result: `true` but validator returned: `false`
`remote ref, containing refs itself, remote ref invalid`|Expected result: `false` but validator returned: `true`
`$ref to boolean schema false, any value is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`Recursive references between schemas, invalid tree`|Expected result: `false` but validator returned: `true`
`Location-independent identifier, mismatch`|Expected result: `false` but validator returned: `true`
`Location-independent identifier with absolute URI, mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`Location-independent identifier with base URI change in subschema, mismatch`|Expected result: `false` but validator returned: `true`
`ref within remote ref, ref within ref invalid`|Expected result: `false` but validator returned: `true`
`base URI change, base URI change ref invalid`|Expected result: `false` but validator returned: `true`
`base URI change - change folder, string is invalid`|Expected result: `false` but validator returned: `true`
`base URI change - change folder in subschema, string is invalid`|Expected result: `false` but validator returned: `true`
`root ref in remote ref, object is invalid`|Expected result: `false` but validator returned: `true`
`uniqueItems validation, unique heterogeneous types are valid`|Expected result: `true` but validator returned: `false`
`uniqueItems validation, objects are non-unique despite key order`|Expected result: `false` but validator returned: `true`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)