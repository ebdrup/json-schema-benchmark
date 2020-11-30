# [`json-schema-library`](https://github.com/sagold/json-schema-library) - test summary


# [`json-schema-library`](https://github.com/sagold/json-schema-library) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`json-schema-library`](https://github.com/sagold/json-schema-library) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`allOf with boolean schemas, some false, any value is invalid`|Expected result: `false` but validator returned: `true`
`allOf with boolean schemas, all false, any value is invalid`|Expected result: `false` but validator returned: `true`
`anyOf with boolean schemas, all false, any value is invalid`|Expected result: `false` but validator returned: `true`
`boolean schema 'true', number is valid`|The schema failed to load(`Object.defineProperty called on non-object`). **This excludes this validator from performance tests**
`boolean schema 'true', string is valid`|The schema failed to load(`Object.defineProperty called on non-object`). **This excludes this validator from performance tests**
`boolean schema 'true', boolean true is valid`|The schema failed to load(`Object.defineProperty called on non-object`). **This excludes this validator from performance tests**
`boolean schema 'true', boolean false is valid`|The schema failed to load(`Object.defineProperty called on non-object`). **This excludes this validator from performance tests**
`boolean schema 'true', null is valid`|The schema failed to load(`Object.defineProperty called on non-object`). **This excludes this validator from performance tests**
`boolean schema 'true', object is valid`|The schema failed to load(`Object.defineProperty called on non-object`). **This excludes this validator from performance tests**
`boolean schema 'true', empty object is valid`|The schema failed to load(`Object.defineProperty called on non-object`). **This excludes this validator from performance tests**
`boolean schema 'true', array is valid`|The schema failed to load(`Object.defineProperty called on non-object`). **This excludes this validator from performance tests**
`boolean schema 'true', empty array is valid`|The schema failed to load(`Object.defineProperty called on non-object`). **This excludes this validator from performance tests**
`boolean schema 'false', number is invalid`|The schema failed to load(`Object.defineProperty called on non-object`)
`boolean schema 'false', string is invalid`|The schema failed to load(`Object.defineProperty called on non-object`)
`boolean schema 'false', boolean true is invalid`|The schema failed to load(`Object.defineProperty called on non-object`)
`boolean schema 'false', boolean false is invalid`|The schema failed to load(`Object.defineProperty called on non-object`)
`boolean schema 'false', null is invalid`|The schema failed to load(`Object.defineProperty called on non-object`)
`boolean schema 'false', object is invalid`|The schema failed to load(`Object.defineProperty called on non-object`)
`boolean schema 'false', empty object is invalid`|The schema failed to load(`Object.defineProperty called on non-object`)
`boolean schema 'false', array is invalid`|The schema failed to load(`Object.defineProperty called on non-object`)
`boolean schema 'false', empty array is invalid`|The schema failed to load(`Object.defineProperty called on non-object`)
`const validation, another value is invalid`|Expected result: `false` but validator returned: `true`
`const validation, another type is invalid`|Expected result: `false` but validator returned: `true`
`const with object, another object is invalid`|Expected result: `false` but validator returned: `true`
`const with object, another type is invalid`|Expected result: `false` but validator returned: `true`
`const with array, another array item is invalid`|Expected result: `false` but validator returned: `true`
`const with array, array with additional items is invalid`|Expected result: `false` but validator returned: `true`
`const with null, not null is invalid`|Expected result: `false` but validator returned: `true`
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
`invalid definition, invalid definition schema`|Expected result: `false` but validator returned: `true`
`dependencies with boolean subschemas, object with property having schema true is valid`|Expected result: `true` but validator returned: `"Invalid dependency definition for #/foo. Must be list or schema"`. **This excludes this validator from performance tests**
`dependencies with boolean subschemas, object with property having schema false is invalid`|Expected result: `false` but validator returned: `"Invalid dependency definition for #/bar. Must be list or schema"`
`dependencies with boolean subschemas, object with both properties is invalid`|Expected result: `false` but validator returned: `"Invalid dependency definition for #/foo. Must be list or schema"`
`exclusiveMaximum validation, boundary point is invalid`|Expected result: `false` but validator returned: `true`
`exclusiveMaximum validation, above the exclusiveMaximum is invalid`|Expected result: `false` but validator returned: `true`
`exclusiveMinimum validation, boundary point is invalid`|Expected result: `false` but validator returned: `true`
`exclusiveMinimum validation, below the exclusiveMinimum is invalid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, ignores integers`|Expected result: `true` but validator returned: `"value.includes is not a function"`
`validation of e-mail addresses, ignores floats`|Expected result: `true` but validator returned: `"value.includes is not a function"`
`validation of e-mail addresses, ignores objects`|Expected result: `true` but validator returned: `"value.includes is not a function"`
`validation of e-mail addresses, ignores null`|Expected result: `true` but validator returned: `"Cannot read property 'includes' of null"`
`validation of IP addresses, ignores integers`|Expected result: `true` but validator returned: `false`
`validation of IP addresses, ignores floats`|Expected result: `true` but validator returned: `false`
`validation of IP addresses, ignores objects`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, ignores integers`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, ignores floats`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, ignores objects`|Expected result: `true` but validator returned: `false`
`validation of hostnames, ignores integers`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of hostnames, ignores objects`|Expected result: `true` but validator returned: `false`
`validation of hostnames, ignores null`|Expected result: `true` but validator returned: `false`
`validation of date-time strings, ignores integers`|Expected result: `true` but validator returned: `false`
`validation of date-time strings, ignores floats`|Expected result: `true` but validator returned: `false`
`validation of date-time strings, ignores objects`|Expected result: `true` but validator returned: `false`
`validation of date-time strings, ignores null`|Expected result: `true` but validator returned: `false`
`validation of URIs, ignores integers`|Expected result: `true` but validator returned: `"uri.match is not a function"`
`validation of URIs, ignores floats`|Expected result: `true` but validator returned: `"uri.match is not a function"`
`validation of URIs, ignores objects`|Expected result: `true` but validator returned: `false`
`validation of URIs, ignores null`|Expected result: `true` but validator returned: `false`
`items with boolean schema (false), any non-empty array is invalid`|Expected result: `false` but validator returned: `true`
`items with boolean schemas, array with two items is invalid`|Expected result: `false` but validator returned: `true`
`not with boolean schema false, any value is valid`|Expected result: `true` but validator returned: `false`
`oneOf with boolean schemas, one true, any value is valid`|Expected result: `true` but validator returned: `false`
`float comparison with high precision, comparison works for high numbers`|Expected result: `false` but validator returned: `true`
`float comparison with high precision on negative numbers, comparison works for very negative numbers`|Expected result: `false` but validator returned: `true`
`all integers are multiples of 0.5, if overflow is handled, valid if optional overflow handling is implemented`|Expected result: `true` but validator returned: `false`
`validation of e-mail addresses, dot before local part is not valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, dot after local part is not valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, two subsequent dots inside local part are not valid`|Expected result: `false` but validator returned: `true`
`validation of host names, exceeds maximum label length`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, ipv4 is not ipv6`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, leading whitespace is invalid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, trailing whitespace is invalid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, zone id is not a part of ipv6 address`|Expected result: `false` but validator returned: `true`
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
`patternProperties with boolean schemas, object with property matching schema false is invalid`|Expected result: `false` but validator returned: `true`
`patternProperties with boolean schemas, object with both properties is invalid`|Expected result: `false` but validator returned: `true`
`patternProperties with boolean schemas, object with a property matching both true and false is invalid`|Expected result: `false` but validator returned: `true`
`propertyNames validation, some property names invalid`|Expected result: `false` but validator returned: `true`
`propertyNames with boolean schema false, object with any properties is invalid`|Expected result: `false` but validator returned: `true`
`remote ref, containing refs itself, remote ref invalid`|Expected result: `false` but validator returned: `true`
`$ref to boolean schema false, any value is invalid`|Expected result: `false` but validator returned: `true`
`Recursive references between schemas, valid tree`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`Location-independent identifier, match`|Expected result: `true` but validator returned: `"Cannot read property 'type' of undefined"`
`Location-independent identifier, mismatch`|Expected result: `false` but validator returned: `"Cannot read property 'type' of undefined"`
`Location-independent identifier with absolute URI, match`|Expected result: `true` but validator returned: `"Cannot read property 'type' of undefined"`
`Location-independent identifier with absolute URI, mismatch`|Expected result: `false` but validator returned: `"Cannot read property 'type' of undefined"`
`Location-independent identifier with base URI change in subschema, match`|Expected result: `true` but validator returned: `"Cannot read property 'type' of undefined"`
`Location-independent identifier with base URI change in subschema, mismatch`|Expected result: `false` but validator returned: `"Cannot read property 'type' of undefined"`
`base URI change, base URI change ref invalid`|Expected result: `false` but validator returned: `true`
`base URI change - change folder, number is valid`|Expected result: `true` but validator returned: `false`
`base URI change - change folder in subschema, number is valid`|Expected result: `true` but validator returned: `false`
`root ref in remote ref, string is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`root ref in remote ref, null is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems validation, objects are non-unique despite key order`|Expected result: `false` but validator returned: `true`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)