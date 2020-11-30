# [`themis`](https://github.com/playlyfe/themis) - test summary


# [`themis`](https://github.com/playlyfe/themis) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`themis`](https://github.com/playlyfe/themis) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`allOf with boolean schemas, some false, any value is invalid`|Expected result: `false` but validator returned: `true`
`allOf with boolean schemas, all false, any value is invalid`|Expected result: `false` but validator returned: `true`
`anyOf with boolean schemas, all false, any value is invalid`|Expected result: `false` but validator returned: `true`
`boolean schema 'true', number is valid`|Expected result: `true` but validator returned: `"validators[schema_id] is not a function"`. **This excludes this validator from performance tests**
`boolean schema 'true', string is valid`|Expected result: `true` but validator returned: `"validators[schema_id] is not a function"`. **This excludes this validator from performance tests**
`boolean schema 'true', boolean true is valid`|Expected result: `true` but validator returned: `"validators[schema_id] is not a function"`. **This excludes this validator from performance tests**
`boolean schema 'true', boolean false is valid`|Expected result: `true` but validator returned: `"validators[schema_id] is not a function"`. **This excludes this validator from performance tests**
`boolean schema 'true', null is valid`|Expected result: `true` but validator returned: `"validators[schema_id] is not a function"`. **This excludes this validator from performance tests**
`boolean schema 'true', object is valid`|Expected result: `true` but validator returned: `"validators[schema_id] is not a function"`. **This excludes this validator from performance tests**
`boolean schema 'true', empty object is valid`|Expected result: `true` but validator returned: `"validators[schema_id] is not a function"`. **This excludes this validator from performance tests**
`boolean schema 'true', array is valid`|Expected result: `true` but validator returned: `"validators[schema_id] is not a function"`. **This excludes this validator from performance tests**
`boolean schema 'true', empty array is valid`|Expected result: `true` but validator returned: `"validators[schema_id] is not a function"`. **This excludes this validator from performance tests**
`boolean schema 'false', number is invalid`|Expected result: `false` but validator returned: `"validators[schema_id] is not a function"`
`boolean schema 'false', string is invalid`|Expected result: `false` but validator returned: `"validators[schema_id] is not a function"`
`boolean schema 'false', boolean true is invalid`|Expected result: `false` but validator returned: `"validators[schema_id] is not a function"`
`boolean schema 'false', boolean false is invalid`|Expected result: `false` but validator returned: `"validators[schema_id] is not a function"`
`boolean schema 'false', null is invalid`|Expected result: `false` but validator returned: `"validators[schema_id] is not a function"`
`boolean schema 'false', object is invalid`|Expected result: `false` but validator returned: `"validators[schema_id] is not a function"`
`boolean schema 'false', empty object is invalid`|Expected result: `false` but validator returned: `"validators[schema_id] is not a function"`
`boolean schema 'false', array is invalid`|Expected result: `false` but validator returned: `"validators[schema_id] is not a function"`
`boolean schema 'false', empty array is invalid`|Expected result: `false` but validator returned: `"validators[schema_id] is not a function"`
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
`valid definition, valid definition schema`|Expected result: `true` but validator returned: `"validators.http://json-schema.org/draft-06/schema# is not a function"`. **This excludes this validator from performance tests**
`invalid definition, invalid definition schema`|Expected result: `false` but validator returned: `"validators.http://json-schema.org/draft-06/schema# is not a function"`
`dependencies with empty array, empty object`|The schema failed to load(`Unexpected token: punc ())`). **This excludes this validator from performance tests**
`dependencies with empty array, object with one property`|The schema failed to load(`Unexpected token: punc ())`). **This excludes this validator from performance tests**
`dependencies with empty array, non-object is valid`|The schema failed to load(`Unexpected token: punc ())`). **This excludes this validator from performance tests**
`dependencies with boolean subschemas, object with property having schema true is valid`|The schema failed to load(`Unexpected token: punc ())`). **This excludes this validator from performance tests**
`dependencies with boolean subschemas, object with property having schema false is invalid`|The schema failed to load(`Unexpected token: punc ())`)
`dependencies with boolean subschemas, object with both properties is invalid`|The schema failed to load(`Unexpected token: punc ())`)
`dependencies with boolean subschemas, empty object is valid`|The schema failed to load(`Unexpected token: punc ())`). **This excludes this validator from performance tests**
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
`exclusiveMaximum validation, boundary point is invalid`|Expected result: `false` but validator returned: `true`
`exclusiveMaximum validation, above the exclusiveMaximum is invalid`|Expected result: `false` but validator returned: `true`
`exclusiveMinimum validation, boundary point is invalid`|Expected result: `false` but validator returned: `true`
`exclusiveMinimum validation, below the exclusiveMinimum is invalid`|Expected result: `false` but validator returned: `true`
`items with boolean schema (false), any non-empty array is invalid`|Expected result: `false` but validator returned: `true`
`items with boolean schemas, array with two items is invalid`|Expected result: `false` but validator returned: `true`
`items and subitems, valid items`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`items and subitems, fewer items is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`not with boolean schema true, any value is invalid`|Expected result: `false` but validator returned: `"validators.0#/not is not a function"`. **This excludes this validator from performance tests**
`not with boolean schema false, any value is valid`|Expected result: `true` but validator returned: `"validators.0#/not is not a function"`
`oneOf with boolean schemas, one true, any value is valid`|Expected result: `true` but validator returned: `false`
`oneOf with required, first valid - valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`oneOf with required, second valid - valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`float comparison with high precision, comparison works for high numbers`|Expected result: `false` but validator returned: `true`
`float comparison with high precision on negative numbers, comparison works for very negative numbers`|Expected result: `false` but validator returned: `true`
`all integers are multiples of 0.5, if overflow is handled, valid if optional overflow handling is implemented`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, leading whitespace is invalid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, trailing whitespace is invalid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, zone id is not a part of ipv6 address`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), a valid JSON-pointer`|Expected result: `true` but validator returned: `"_format.json-pointer is not a function"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (~ not escaped)`|Expected result: `false` but validator returned: `"_format.json-pointer is not a function"`
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer with empty segment`|Expected result: `true` but validator returned: `"_format.json-pointer is not a function"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer with the last empty segment`|Expected result: `true` but validator returned: `"_format.json-pointer is not a function"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #1`|Expected result: `true` but validator returned: `"_format.json-pointer is not a function"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #2`|Expected result: `true` but validator returned: `"_format.json-pointer is not a function"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #3`|Expected result: `true` but validator returned: `"_format.json-pointer is not a function"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #4`|Expected result: `true` but validator returned: `"_format.json-pointer is not a function"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #5`|Expected result: `true` but validator returned: `"_format.json-pointer is not a function"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #6`|Expected result: `true` but validator returned: `"_format.json-pointer is not a function"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #7`|Expected result: `true` but validator returned: `"_format.json-pointer is not a function"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #8`|Expected result: `true` but validator returned: `"_format.json-pointer is not a function"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #9`|Expected result: `true` but validator returned: `"_format.json-pointer is not a function"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #10`|Expected result: `true` but validator returned: `"_format.json-pointer is not a function"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #11`|Expected result: `true` but validator returned: `"_format.json-pointer is not a function"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #12`|Expected result: `true` but validator returned: `"_format.json-pointer is not a function"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer used adding to the last array position`|Expected result: `true` but validator returned: `"_format.json-pointer is not a function"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer (- used as object member name)`|Expected result: `true` but validator returned: `"_format.json-pointer is not a function"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer (multiple escaped characters)`|Expected result: `true` but validator returned: `"_format.json-pointer is not a function"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer (escaped with fraction part) #1`|Expected result: `true` but validator returned: `"_format.json-pointer is not a function"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer (escaped with fraction part) #2`|Expected result: `true` but validator returned: `"_format.json-pointer is not a function"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #1`|Expected result: `false` but validator returned: `"_format.json-pointer is not a function"`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #2`|Expected result: `false` but validator returned: `"_format.json-pointer is not a function"`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #3`|Expected result: `false` but validator returned: `"_format.json-pointer is not a function"`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (some escaped, but not all) #1`|Expected result: `false` but validator returned: `"_format.json-pointer is not a function"`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (some escaped, but not all) #2`|Expected result: `false` but validator returned: `"_format.json-pointer is not a function"`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (wrong escape character) #1`|Expected result: `false` but validator returned: `"_format.json-pointer is not a function"`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (wrong escape character) #2`|Expected result: `false` but validator returned: `"_format.json-pointer is not a function"`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (multiple characters not escaped)`|Expected result: `false` but validator returned: `"_format.json-pointer is not a function"`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #1`|Expected result: `false` but validator returned: `"_format.json-pointer is not a function"`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #2`|Expected result: `false` but validator returned: `"_format.json-pointer is not a function"`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #3`|Expected result: `false` but validator returned: `"_format.json-pointer is not a function"`
`validation of URI References, a valid URI`|Expected result: `true` but validator returned: `"_format.uri-reference is not a function"`. **This excludes this validator from performance tests**
`validation of URI References, a valid protocol-relative URI Reference`|Expected result: `true` but validator returned: `"_format.uri-reference is not a function"`. **This excludes this validator from performance tests**
`validation of URI References, a valid relative URI Reference`|Expected result: `true` but validator returned: `"_format.uri-reference is not a function"`. **This excludes this validator from performance tests**
`validation of URI References, an invalid URI Reference`|Expected result: `false` but validator returned: `"_format.uri-reference is not a function"`
`validation of URI References, a valid URI Reference`|Expected result: `true` but validator returned: `"_format.uri-reference is not a function"`. **This excludes this validator from performance tests**
`validation of URI References, a valid URI fragment`|Expected result: `true` but validator returned: `"_format.uri-reference is not a function"`. **This excludes this validator from performance tests**
`validation of URI References, an invalid URI fragment`|Expected result: `false` but validator returned: `"_format.uri-reference is not a function"`
`format: uri-template, a valid uri-template`|Expected result: `true` but validator returned: `"_format.uri-template is not a function"`. **This excludes this validator from performance tests**
`format: uri-template, an invalid uri-template`|Expected result: `false` but validator returned: `"_format.uri-template is not a function"`
`format: uri-template, a valid uri-template without variables`|Expected result: `true` but validator returned: `"_format.uri-template is not a function"`. **This excludes this validator from performance tests**
`format: uri-template, a valid relative uri-template`|Expected result: `true` but validator returned: `"_format.uri-template is not a function"`. **This excludes this validator from performance tests**
`validation of URIs, a valid puny-coded URL `|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, a valid URL `|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, a valid mailto URI`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, a valid newsgroup URI`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, a valid tel URI`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, a valid URN`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`Proper UTF-16 surrogate pair handling: pattern, matches empty`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: pattern, matches two`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: patternProperties, doesn't match two`|Expected result: `false` but validator returned: `true`
`patternProperties with boolean schemas, object with property matching schema false is invalid`|Expected result: `false` but validator returned: `true`
`patternProperties with boolean schemas, object with both properties is invalid`|Expected result: `false` but validator returned: `true`
`patternProperties with boolean schemas, object with a property matching both true and false is invalid`|Expected result: `false` but validator returned: `true`
`properties with boolean schema, only 'false' property present is invalid`|Expected result: `false` but validator returned: `true`
`properties with boolean schema, both properties present is invalid`|Expected result: `false` but validator returned: `true`
`properties with escaped characters, object with all numbers is valid`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`properties with escaped characters, object with strings is invalid`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`propertyNames validation, some property names invalid`|Expected result: `false` but validator returned: `true`
`propertyNames with boolean schema false, object with any properties is invalid`|Expected result: `false` but validator returned: `true`
`ref overrides any sibling keywords, ref valid, maxItems ignored`|Expected result: `true` but validator returned: `false`
`remote ref, containing refs itself, remote ref valid`|Expected result: `true` but validator returned: `"validators.http://json-schema.org/draft-06/schema# is not a function"`. **This excludes this validator from performance tests**
`remote ref, containing refs itself, remote ref invalid`|Expected result: `false` but validator returned: `"validators.http://json-schema.org/draft-06/schema# is not a function"`
`$ref to boolean schema false, any value is invalid`|Expected result: `false` but validator returned: `true`
`Recursive references between schemas, valid tree`|The schema failed to load(`invalid ref: node in 0`). **This excludes this validator from performance tests**
`Recursive references between schemas, invalid tree`|The schema failed to load(`invalid ref: node in 0`)
`refs with quote, object with numbers is valid`|The schema failed to load(`Unexpected identifier`). **This excludes this validator from performance tests**
`refs with quote, object with strings is invalid`|The schema failed to load(`Unexpected identifier`). **This excludes this validator from performance tests**
`Location-independent identifier, match`|Expected result: `true` but validator returned: `"validators.#foo is not a function"`
`Location-independent identifier, mismatch`|Expected result: `false` but validator returned: `"validators.#foo is not a function"`
`Location-independent identifier with absolute URI, match`|The schema failed to load(`Cannot read property 'oo' of undefined`)
`Location-independent identifier with absolute URI, mismatch`|The schema failed to load(`Cannot read property 'oo' of undefined`)
`Location-independent identifier with base URI change in subschema, match`|The schema failed to load(`Cannot read property 'oo' of undefined`)
`Location-independent identifier with base URI change in subschema, mismatch`|The schema failed to load(`Cannot read property 'oo' of undefined`)
`remote ref, remote ref valid`|Expected result: `true` but validator returned: `"validators.http://localhost:1234/integer.json is not a function"`. **This excludes this validator from performance tests**
`remote ref, remote ref invalid`|Expected result: `false` but validator returned: `"validators.http://localhost:1234/integer.json is not a function"`. **This excludes this validator from performance tests**
`fragment within remote ref, remote fragment valid`|Expected result: `true` but validator returned: `"validators.http://localhost:1234/subSchemas.json#/integer is not a function"`. **This excludes this validator from performance tests**
`fragment within remote ref, remote fragment invalid`|Expected result: `false` but validator returned: `"validators.http://localhost:1234/subSchemas.json#/integer is not a function"`. **This excludes this validator from performance tests**
`ref within remote ref, ref within ref valid`|Expected result: `true` but validator returned: `"validators.http://localhost:1234/subSchemas.json#/refToInteger is not a function"`. **This excludes this validator from performance tests**
`ref within remote ref, ref within ref invalid`|Expected result: `false` but validator returned: `"validators.http://localhost:1234/subSchemas.json#/refToInteger is not a function"`
`base URI change, base URI change ref valid`|The schema failed to load(`invalid ref: folderInteger.json in 0`). **This excludes this validator from performance tests**
`base URI change, base URI change ref invalid`|The schema failed to load(`invalid ref: folderInteger.json in 0`)
`base URI change - change folder, number is valid`|The schema failed to load(`invalid ref: folderInteger.json in 0`)
`base URI change - change folder, string is invalid`|The schema failed to load(`invalid ref: folderInteger.json in 0`)
`base URI change - change folder in subschema, number is valid`|The schema failed to load(`invalid ref: folderInteger.json in 0`)
`base URI change - change folder in subschema, string is invalid`|The schema failed to load(`invalid ref: folderInteger.json in 0`)
`root ref in remote ref, string is valid`|The schema failed to load(`Cannot read property 'definitions' of undefined`). **This excludes this validator from performance tests**
`root ref in remote ref, null is valid`|The schema failed to load(`Cannot read property 'definitions' of undefined`). **This excludes this validator from performance tests**
`root ref in remote ref, object is invalid`|The schema failed to load(`Cannot read property 'definitions' of undefined`)
`required with escaped characters, object with all properties present is valid`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`required with escaped characters, object with some properties missing is invalid`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`uniqueItems validation, objects are non-unique despite key order`|Expected result: `false` but validator returned: `true`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)