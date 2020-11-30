# [`jsck`](https://github.com/pandastrike/jsck#readme) - test summary


# [`jsck`](https://github.com/pandastrike/jsck#readme) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`jsck`](https://github.com/pandastrike/jsck#readme) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`allOf with boolean schemas, all true, any value is valid`|The schema failed to load(`Schema must be an object - #/allOf/0`). **This excludes this validator from performance tests**
`allOf with boolean schemas, some false, any value is invalid`|The schema failed to load(`Schema must be an object - #/allOf/0`)
`allOf with boolean schemas, all false, any value is invalid`|The schema failed to load(`Schema must be an object - #/allOf/0`)
`anyOf with boolean schemas, all true, any value is valid`|The schema failed to load(`Schema must be an object - #/anyOf/0`)
`anyOf with boolean schemas, some true, any value is valid`|The schema failed to load(`Schema must be an object - #/anyOf/0`)
`anyOf with boolean schemas, all false, any value is invalid`|The schema failed to load(`Schema must be an object - #/anyOf/0`)
`boolean schema 'true', number is valid`|The schema failed to load(`Schema must be an object - #`). **This excludes this validator from performance tests**
`boolean schema 'true', string is valid`|The schema failed to load(`Schema must be an object - #`). **This excludes this validator from performance tests**
`boolean schema 'true', boolean true is valid`|The schema failed to load(`Schema must be an object - #`). **This excludes this validator from performance tests**
`boolean schema 'true', boolean false is valid`|The schema failed to load(`Schema must be an object - #`). **This excludes this validator from performance tests**
`boolean schema 'true', null is valid`|The schema failed to load(`Schema must be an object - #`). **This excludes this validator from performance tests**
`boolean schema 'true', object is valid`|The schema failed to load(`Schema must be an object - #`). **This excludes this validator from performance tests**
`boolean schema 'true', empty object is valid`|The schema failed to load(`Schema must be an object - #`). **This excludes this validator from performance tests**
`boolean schema 'true', array is valid`|The schema failed to load(`Schema must be an object - #`). **This excludes this validator from performance tests**
`boolean schema 'true', empty array is valid`|The schema failed to load(`Schema must be an object - #`). **This excludes this validator from performance tests**
`boolean schema 'false', number is invalid`|The schema failed to load(`Schema must be an object - #`)
`boolean schema 'false', string is invalid`|The schema failed to load(`Schema must be an object - #`)
`boolean schema 'false', boolean true is invalid`|The schema failed to load(`Schema must be an object - #`)
`boolean schema 'false', boolean false is invalid`|The schema failed to load(`Schema must be an object - #`)
`boolean schema 'false', null is invalid`|The schema failed to load(`Schema must be an object - #`)
`boolean schema 'false', object is invalid`|The schema failed to load(`Schema must be an object - #`)
`boolean schema 'false', empty object is invalid`|The schema failed to load(`Schema must be an object - #`)
`boolean schema 'false', array is invalid`|The schema failed to load(`Schema must be an object - #`)
`boolean schema 'false', empty array is invalid`|The schema failed to load(`Schema must be an object - #`)
`const validation, another value is invalid`|Expected result: `false` but validator returned: `true`
`const validation, another type is invalid`|Expected result: `false` but validator returned: `true`
`const with object, another object is invalid`|Expected result: `false` but validator returned: `true`
`const with object, another type is invalid`|Expected result: `false` but validator returned: `true`
`const with array, another array item is invalid`|Expected result: `false` but validator returned: `true`
`const with array, array with additional items is invalid`|Expected result: `false` but validator returned: `true`
`const with null, null is valid`|The schema failed to load(`Cannot read property 'type' of null`). **This excludes this validator from performance tests**
`const with null, not null is invalid`|The schema failed to load(`Cannot read property 'type' of null`)
`const with false does not match 0, integer zero is invalid`|Expected result: `false` but validator returned: `true`
`const with false does not match 0, float zero is invalid`|Expected result: `false` but validator returned: `true`
`const with true does not match 1, integer one is invalid`|Expected result: `false` but validator returned: `true`
`const with true does not match 1, float one is invalid`|Expected result: `false` but validator returned: `true`
`const with [false] does not match [0], [0] is invalid`|Expected result: `false` but validator returned: `true`
`const with [false] does not match [0], [0.0] is invalid`|Expected result: `false` but validator returned: `true`
`const with [true] does not match [1], [1] is invalid`|Expected result: `false` but validator returned: `true`
`const with [true] does not match [1], [1.0] is invalid`|Expected result: `false` but validator returned: `true`
`const with {"a": false} does not match {"a": 0}, {"a": 0} is invalid`|Expected result: `false` but validator returned: `true`
`const with {"a": false} does not match {"a": 0}, {"a": 0.0} is invalid`|Expected result: `false` but validator returned: `true`
`const with {"a": true} does not match {"a": 1}, {"a": 1} is invalid`|Expected result: `false` but validator returned: `true`
`const with {"a": true} does not match {"a": 1}, {"a": 1.0} is invalid`|Expected result: `false` but validator returned: `true`
`const with 0 does not match other zero-like types, false is invalid`|Expected result: `false` but validator returned: `true`
`const with 0 does not match other zero-like types, empty object is invalid`|Expected result: `false` but validator returned: `true`
`const with 0 does not match other zero-like types, empty array is invalid`|Expected result: `false` but validator returned: `true`
`const with 0 does not match other zero-like types, empty string is invalid`|Expected result: `false` but validator returned: `true`
`const with 1 does not match true, true is invalid`|Expected result: `false` but validator returned: `true`
`const with -2.0 matches integer and float types, integer 2 is invalid`|Expected result: `false` but validator returned: `true`
`const with -2.0 matches integer and float types, float 2.0 is invalid`|Expected result: `false` but validator returned: `true`
`const with -2.0 matches integer and float types, float -2.00001 is invalid`|Expected result: `false` but validator returned: `true`
`float and integers are equal up to 64-bit representation limits, integer minus one is invalid`|Expected result: `false` but validator returned: `true`
`float and integers are equal up to 64-bit representation limits, float minus one is invalid`|Expected result: `false` but validator returned: `true`
`nul characters in strings, do not match string lacking nul`|Expected result: `false` but validator returned: `true`
`contains keyword validation, array without items matching schema is invalid`|Expected result: `false` but validator returned: `true`
`contains keyword validation, empty array is invalid`|Expected result: `false` but validator returned: `true`
`contains keyword with const keyword, array without item 5 is invalid`|Expected result: `false` but validator returned: `true`
`contains keyword with boolean schema true, empty array is invalid`|Expected result: `false` but validator returned: `true`
`contains keyword with boolean schema false, any non-empty array is invalid`|Expected result: `false` but validator returned: `true`
`contains keyword with boolean schema false, empty array is invalid`|Expected result: `false` but validator returned: `true`
`items + contains, matches items, does not match contains`|Expected result: `false` but validator returned: `true`
`valid definition, valid definition schema`|The schema failed to load(`Unresolvable $ref values: ["http://json-schema.org/draft-06/schema#"]`). **This excludes this validator from performance tests**
`invalid definition, invalid definition schema`|The schema failed to load(`Unresolvable $ref values: ["http://json-schema.org/draft-06/schema#"]`)
`dependencies with empty array, empty object`|The schema failed to load(`Arrays in 'dependencies' may not be empty`). **This excludes this validator from performance tests**
`dependencies with empty array, object with one property`|The schema failed to load(`Arrays in 'dependencies' may not be empty`). **This excludes this validator from performance tests**
`dependencies with empty array, non-object is valid`|The schema failed to load(`Arrays in 'dependencies' may not be empty`). **This excludes this validator from performance tests**
`dependencies with boolean subschemas, object with property having schema true is valid`|The schema failed to load(`Invalid dependency`). **This excludes this validator from performance tests**
`dependencies with boolean subschemas, object with property having schema false is invalid`|The schema failed to load(`Invalid dependency`)
`dependencies with boolean subschemas, object with both properties is invalid`|The schema failed to load(`Invalid dependency`)
`dependencies with boolean subschemas, empty object is valid`|The schema failed to load(`Invalid dependency`). **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 1`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 2`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 3`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`exclusiveMaximum validation, boundary point is invalid`|Expected result: `false` but validator returned: `true`
`exclusiveMaximum validation, above the exclusiveMaximum is invalid`|Expected result: `false` but validator returned: `true`
`exclusiveMinimum validation, boundary point is invalid`|Expected result: `false` but validator returned: `true`
`exclusiveMinimum validation, below the exclusiveMinimum is invalid`|Expected result: `false` but validator returned: `true`
`validation of JSON pointers, ignores integers`|The schema failed to load(`Invalid format_name for 'format'`)
`validation of JSON pointers, ignores floats`|The schema failed to load(`Invalid format_name for 'format'`)
`validation of JSON pointers, ignores objects`|The schema failed to load(`Invalid format_name for 'format'`)
`validation of JSON pointers, ignores arrays`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of JSON pointers, ignores booleans`|The schema failed to load(`Invalid format_name for 'format'`)
`validation of JSON pointers, ignores null`|The schema failed to load(`Invalid format_name for 'format'`)
`validation of URI references, ignores integers`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of URI references, ignores floats`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of URI references, ignores objects`|The schema failed to load(`Invalid format_name for 'format'`)
`validation of URI references, ignores arrays`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of URI references, ignores booleans`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of URI references, ignores null`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of URI templates, ignores integers`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of URI templates, ignores floats`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of URI templates, ignores objects`|The schema failed to load(`Invalid format_name for 'format'`)
`validation of URI templates, ignores arrays`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of URI templates, ignores booleans`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of URI templates, ignores null`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`a schema given for items, JavaScript pseudo-array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`items with boolean schema (true), any array is valid`|The schema failed to load(`Schema must be an object - #/items`). **This excludes this validator from performance tests**
`items with boolean schema (true), empty array is valid`|The schema failed to load(`Schema must be an object - #/items`). **This excludes this validator from performance tests**
`items with boolean schema (false), any non-empty array is invalid`|The schema failed to load(`Schema must be an object - #/items`)
`items with boolean schema (false), empty array is valid`|The schema failed to load(`Schema must be an object - #/items`). **This excludes this validator from performance tests**
`items with boolean schemas, array with one item is valid`|The schema failed to load(`Schema must be an object - #/items/0`). **This excludes this validator from performance tests**
`items with boolean schemas, array with two items is invalid`|The schema failed to load(`Schema must be an object - #/items/0`)
`items with boolean schemas, empty array is valid`|The schema failed to load(`Schema must be an object - #/items/0`). **This excludes this validator from performance tests**
`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`
`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`
`not with boolean schema true, any value is invalid`|The schema failed to load(`The 'not' attribute must be an object`). **This excludes this validator from performance tests**
`not with boolean schema false, any value is valid`|The schema failed to load(`The 'not' attribute must be an object`)
`oneOf with boolean schemas, all true, any value is invalid`|The schema failed to load(`The 'oneOf' array values must be objects`). **This excludes this validator from performance tests**
`oneOf with boolean schemas, one true, any value is valid`|The schema failed to load(`The 'oneOf' array values must be objects`)
`oneOf with boolean schemas, more than one true, any value is invalid`|The schema failed to load(`The 'oneOf' array values must be objects`)
`oneOf with boolean schemas, all false, any value is invalid`|The schema failed to load(`The 'oneOf' array values must be objects`)
`oneOf with missing optional property, first oneOf valid`|The schema failed to load(`The 'properties' attribute must be an object`). **This excludes this validator from performance tests**
`oneOf with missing optional property, second oneOf valid`|The schema failed to load(`The 'properties' attribute must be an object`). **This excludes this validator from performance tests**
`oneOf with missing optional property, both oneOf valid`|The schema failed to load(`The 'properties' attribute must be an object`). **This excludes this validator from performance tests**
`oneOf with missing optional property, neither oneOf valid`|The schema failed to load(`The 'properties' attribute must be an object`). **This excludes this validator from performance tests**
`float comparison with high precision, comparison works for high numbers`|Expected result: `false` but validator returned: `true`
`float comparison with high precision on negative numbers, comparison works for very negative numbers`|Expected result: `false` but validator returned: `true`
`all integers are multiples of 0.5, if overflow is handled, valid if optional overflow handling is implemented`|Expected result: `true` but validator returned: `false`
`validation of date-time strings, a invalid day in date-time string`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, an invalid offset in date-time string`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, case-insensitive T and Z`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, leading whitespace is invalid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, trailing whitespace is invalid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, zone id is not a part of ipv6 address`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), a valid JSON-pointer`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (~ not escaped)`|The schema failed to load(`Invalid format_name for 'format'`)
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer with empty segment`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer with the last empty segment`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #1`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #2`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #3`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #4`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #5`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #6`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #7`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #8`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #9`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #10`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #11`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #12`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer used adding to the last array position`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer (- used as object member name)`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer (multiple escaped characters)`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer (escaped with fraction part) #1`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer (escaped with fraction part) #2`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #1`|The schema failed to load(`Invalid format_name for 'format'`)
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #2`|The schema failed to load(`Invalid format_name for 'format'`)
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #3`|The schema failed to load(`Invalid format_name for 'format'`)
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (some escaped, but not all) #1`|The schema failed to load(`Invalid format_name for 'format'`)
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (some escaped, but not all) #2`|The schema failed to load(`Invalid format_name for 'format'`)
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (wrong escape character) #1`|The schema failed to load(`Invalid format_name for 'format'`)
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (wrong escape character) #2`|The schema failed to load(`Invalid format_name for 'format'`)
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (multiple characters not escaped)`|The schema failed to load(`Invalid format_name for 'format'`)
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #1`|The schema failed to load(`Invalid format_name for 'format'`)
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #2`|The schema failed to load(`Invalid format_name for 'format'`)
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #3`|The schema failed to load(`Invalid format_name for 'format'`)
`validation of URI References, a valid URI`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of URI References, a valid protocol-relative URI Reference`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of URI References, a valid relative URI Reference`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of URI References, an invalid URI Reference`|The schema failed to load(`Invalid format_name for 'format'`)
`validation of URI References, a valid URI Reference`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of URI References, a valid URI fragment`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of URI References, an invalid URI fragment`|The schema failed to load(`Invalid format_name for 'format'`)
`format: uri-template, a valid uri-template`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`format: uri-template, an invalid uri-template`|The schema failed to load(`Invalid format_name for 'format'`)
`format: uri-template, a valid uri-template without variables`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`format: uri-template, a valid relative uri-template`|The schema failed to load(`Invalid format_name for 'format'`). **This excludes this validator from performance tests**
`validation of URIs, an invalid URI with comma in scheme`|Expected result: `false` but validator returned: `true`
`Proper UTF-16 surrogate pair handling: pattern, matches empty`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: pattern, matches two`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: patternProperties, doesn't match two`|Expected result: `false` but validator returned: `true`
`patternProperties with boolean schemas, object with property matching schema true is valid`|The schema failed to load(`Values of 'patternProperties' must be an objects`). **This excludes this validator from performance tests**
`patternProperties with boolean schemas, object with property matching schema false is invalid`|The schema failed to load(`Values of 'patternProperties' must be an objects`)
`patternProperties with boolean schemas, object with both properties is invalid`|The schema failed to load(`Values of 'patternProperties' must be an objects`)
`patternProperties with boolean schemas, object with a property matching both true and false is invalid`|The schema failed to load(`Values of 'patternProperties' must be an objects`)
`patternProperties with boolean schemas, empty object is valid`|The schema failed to load(`Values of 'patternProperties' must be an objects`). **This excludes this validator from performance tests**
`properties with boolean schema, no property present is valid`|The schema failed to load(`Schema must be an object - #/properties/foo`). **This excludes this validator from performance tests**
`properties with boolean schema, only 'true' property present is valid`|The schema failed to load(`Schema must be an object - #/properties/foo`). **This excludes this validator from performance tests**
`properties with boolean schema, only 'false' property present is invalid`|The schema failed to load(`Schema must be an object - #/properties/foo`)
`properties with boolean schema, both properties present is invalid`|The schema failed to load(`Schema must be an object - #/properties/foo`)
`propertyNames validation, some property names invalid`|Expected result: `false` but validator returned: `true`
`propertyNames with boolean schema false, object with any properties is invalid`|Expected result: `false` but validator returned: `true`
`ref overrides any sibling keywords, ref valid, maxItems ignored`|Expected result: `true` but validator returned: `false`
`remote ref, containing refs itself, remote ref valid`|The schema failed to load(`Unresolvable $ref values: ["http://json-schema.org/draft-06/schema#"]`). **This excludes this validator from performance tests**
`remote ref, containing refs itself, remote ref invalid`|The schema failed to load(`Unresolvable $ref values: ["http://json-schema.org/draft-06/schema#"]`)
`$ref to boolean schema true, any value is valid`|The schema failed to load(`Schema must be an object - #/definitions/bool`). **This excludes this validator from performance tests**
`$ref to boolean schema false, any value is invalid`|The schema failed to load(`Schema must be an object - #/definitions/bool`)
`Recursive references between schemas, valid tree`|The schema failed to load(`Unresolvable $ref values: ["/node","/tree"]`). **This excludes this validator from performance tests**
`Recursive references between schemas, invalid tree`|The schema failed to load(`Unresolvable $ref values: ["/node","/tree"]`)
`refs with quote, object with numbers is valid`|The schema failed to load(`Unresolvable $ref values: ["#/definitions/foo%22bar"]`). **This excludes this validator from performance tests**
`refs with quote, object with strings is invalid`|The schema failed to load(`Unresolvable $ref values: ["#/definitions/foo%22bar"]`). **This excludes this validator from performance tests**
`Location-independent identifier, match`|The schema failed to load(`Unresolvable $ref values: ["#foo"]`)
`Location-independent identifier, mismatch`|The schema failed to load(`Unresolvable $ref values: ["#foo"]`)
`Location-independent identifier with absolute URI, match`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/bar#foo"]`)
`Location-independent identifier with absolute URI, mismatch`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/bar#foo"]`)
`Location-independent identifier with base URI change in subschema, match`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/nested.json#foo"]`)
`Location-independent identifier with base URI change in subschema, mismatch`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/nested.json#foo"]`)
`remote ref, remote ref valid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/integer.json"]`). **This excludes this validator from performance tests**
`remote ref, remote ref invalid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/integer.json"]`). **This excludes this validator from performance tests**
`fragment within remote ref, remote fragment valid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/subSchemas.json#/integer"]`). **This excludes this validator from performance tests**
`fragment within remote ref, remote fragment invalid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/subSchemas.json#/integer"]`). **This excludes this validator from performance tests**
`ref within remote ref, ref within ref valid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/subSchemas.json#/refToInteger"]`). **This excludes this validator from performance tests**
`ref within remote ref, ref within ref invalid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/subSchemas.json#/refToInteger"]`)
`base URI change, base URI change ref valid`|The schema failed to load(`Unresolvable $ref values: ["/folderInteger.json"]`). **This excludes this validator from performance tests**
`base URI change, base URI change ref invalid`|The schema failed to load(`Unresolvable $ref values: ["/folderInteger.json"]`)
`base URI change - change folder, number is valid`|The schema failed to load(`Unresolvable $ref values: ["/folderInteger.json"]`)
`base URI change - change folder, string is invalid`|The schema failed to load(`Unresolvable $ref values: ["/folderInteger.json"]`)
`base URI change - change folder in subschema, number is valid`|The schema failed to load(`Unresolvable $ref values: ["/folderInteger.json"]`)
`base URI change - change folder in subschema, string is invalid`|The schema failed to load(`Unresolvable $ref values: ["/folderInteger.json"]`)
`root ref in remote ref, string is valid`|The schema failed to load(`Unresolvable $ref values: ["/name.json#/definitions/orNull"]`). **This excludes this validator from performance tests**
`root ref in remote ref, null is valid`|The schema failed to load(`Unresolvable $ref values: ["/name.json#/definitions/orNull"]`). **This excludes this validator from performance tests**
`root ref in remote ref, object is invalid`|The schema failed to load(`Unresolvable $ref values: ["/name.json#/definitions/orNull"]`)
`required with empty array, property not required`|The schema failed to load(`The 'required' array must have at least one element`). **This excludes this validator from performance tests**
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