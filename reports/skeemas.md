# [`skeemas`](https://github.com/Prestaul/skeemas#readme) - test summary


# [`skeemas`](https://github.com/Prestaul/skeemas#readme) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`skeemas`](https://github.com/Prestaul/skeemas#readme) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`allOf with boolean schemas, all true, any value is valid`|Expected result: `true` but validator returned: `"Cannot use 'in' operator to search for 'type' in true"`. **This excludes this validator from performance tests**
`allOf with boolean schemas, some false, any value is invalid`|Expected result: `false` but validator returned: `"Cannot use 'in' operator to search for 'type' in false"`
`allOf with boolean schemas, all false, any value is invalid`|Expected result: `false` but validator returned: `"Cannot use 'in' operator to search for 'type' in false"`
`anyOf with boolean schemas, all true, any value is valid`|Expected result: `true` but validator returned: `"Cannot use 'in' operator to search for 'type' in true"`
`anyOf with boolean schemas, some true, any value is valid`|Expected result: `true` but validator returned: `"Cannot use 'in' operator to search for 'type' in false"`
`anyOf with boolean schemas, all false, any value is invalid`|Expected result: `false` but validator returned: `"Cannot use 'in' operator to search for 'type' in false"`
`boolean schema 'true', number is valid`|Expected result: `true` but validator returned: `"Cannot use 'in' operator to search for 'type' in true"`. **This excludes this validator from performance tests**
`boolean schema 'true', string is valid`|Expected result: `true` but validator returned: `"Cannot use 'in' operator to search for 'type' in true"`. **This excludes this validator from performance tests**
`boolean schema 'true', boolean true is valid`|Expected result: `true` but validator returned: `"Cannot use 'in' operator to search for 'type' in true"`. **This excludes this validator from performance tests**
`boolean schema 'true', boolean false is valid`|Expected result: `true` but validator returned: `"Cannot use 'in' operator to search for 'type' in true"`. **This excludes this validator from performance tests**
`boolean schema 'true', null is valid`|Expected result: `true` but validator returned: `"Cannot use 'in' operator to search for 'type' in true"`. **This excludes this validator from performance tests**
`boolean schema 'true', object is valid`|Expected result: `true` but validator returned: `"Cannot use 'in' operator to search for 'type' in true"`. **This excludes this validator from performance tests**
`boolean schema 'true', empty object is valid`|Expected result: `true` but validator returned: `"Cannot use 'in' operator to search for 'type' in true"`. **This excludes this validator from performance tests**
`boolean schema 'true', array is valid`|Expected result: `true` but validator returned: `"Cannot use 'in' operator to search for 'type' in true"`. **This excludes this validator from performance tests**
`boolean schema 'true', empty array is valid`|Expected result: `true` but validator returned: `"Cannot use 'in' operator to search for 'type' in true"`. **This excludes this validator from performance tests**
`boolean schema 'false', number is invalid`|Expected result: `false` but validator returned: `"No schema specified in call to validate."`
`boolean schema 'false', string is invalid`|Expected result: `false` but validator returned: `"No schema specified in call to validate."`
`boolean schema 'false', boolean true is invalid`|Expected result: `false` but validator returned: `"No schema specified in call to validate."`
`boolean schema 'false', boolean false is invalid`|Expected result: `false` but validator returned: `"No schema specified in call to validate."`
`boolean schema 'false', null is invalid`|Expected result: `false` but validator returned: `"No schema specified in call to validate."`
`boolean schema 'false', object is invalid`|Expected result: `false` but validator returned: `"No schema specified in call to validate."`
`boolean schema 'false', empty object is invalid`|Expected result: `false` but validator returned: `"No schema specified in call to validate."`
`boolean schema 'false', array is invalid`|Expected result: `false` but validator returned: `"No schema specified in call to validate."`
`boolean schema 'false', empty array is invalid`|Expected result: `false` but validator returned: `"No schema specified in call to validate."`
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
`dependencies with boolean subschemas, object with property having schema true is valid`|Expected result: `true` but validator returned: `"Invalid schema: dependencies must be string, array, or object"`. **This excludes this validator from performance tests**
`dependencies with boolean subschemas, object with property having schema false is invalid`|Expected result: `false` but validator returned: `"Invalid schema: dependencies must be string, array, or object"`
`dependencies with boolean subschemas, object with both properties is invalid`|Expected result: `false` but validator returned: `"Invalid schema: dependencies must be string, array, or object"`
`exclusiveMaximum validation, boundary point is invalid`|Expected result: `false` but validator returned: `true`
`exclusiveMaximum validation, above the exclusiveMaximum is invalid`|Expected result: `false` but validator returned: `true`
`exclusiveMinimum validation, boundary point is invalid`|Expected result: `false` but validator returned: `true`
`exclusiveMinimum validation, below the exclusiveMinimum is invalid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, ignores integers`|Expected result: `true` but validator returned: `false`
`validation of e-mail addresses, ignores floats`|Expected result: `true` but validator returned: `false`
`validation of e-mail addresses, ignores objects`|Expected result: `true` but validator returned: `false`
`validation of e-mail addresses, ignores arrays`|Expected result: `true` but validator returned: `false`
`validation of e-mail addresses, ignores booleans`|Expected result: `true` but validator returned: `false`
`validation of e-mail addresses, ignores null`|Expected result: `true` but validator returned: `false`
`validation of IP addresses, ignores integers`|Expected result: `true` but validator returned: `false`
`validation of IP addresses, ignores floats`|Expected result: `true` but validator returned: `false`
`validation of IP addresses, ignores objects`|Expected result: `true` but validator returned: `false`
`validation of IP addresses, ignores arrays`|Expected result: `true` but validator returned: `false`
`validation of IP addresses, ignores booleans`|Expected result: `true` but validator returned: `false`
`validation of IP addresses, ignores null`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, ignores integers`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, ignores floats`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, ignores objects`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, ignores arrays`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, ignores booleans`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, ignores null`|Expected result: `true` but validator returned: `false`
`validation of hostnames, ignores objects`|Expected result: `true` but validator returned: `false`
`validation of hostnames, ignores arrays`|Expected result: `true` but validator returned: `false`
`validation of date-time strings, ignores integers`|Expected result: `true` but validator returned: `false`
`validation of date-time strings, ignores floats`|Expected result: `true` but validator returned: `false`
`validation of date-time strings, ignores objects`|Expected result: `true` but validator returned: `false`
`validation of date-time strings, ignores arrays`|Expected result: `true` but validator returned: `false`
`validation of date-time strings, ignores booleans`|Expected result: `true` but validator returned: `false`
`validation of date-time strings, ignores null`|Expected result: `true` but validator returned: `false`
`validation of JSON pointers, ignores integers`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (json-pointer)"`
`validation of JSON pointers, ignores floats`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (json-pointer)"`
`validation of JSON pointers, ignores objects`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (json-pointer)"`
`validation of JSON pointers, ignores arrays`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (json-pointer)"`. **This excludes this validator from performance tests**
`validation of JSON pointers, ignores booleans`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (json-pointer)"`
`validation of JSON pointers, ignores null`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (json-pointer)"`
`validation of URIs, ignores integers`|Expected result: `true` but validator returned: `false`
`validation of URIs, ignores floats`|Expected result: `true` but validator returned: `false`
`validation of URIs, ignores objects`|Expected result: `true` but validator returned: `false`
`validation of URIs, ignores arrays`|Expected result: `true` but validator returned: `false`
`validation of URIs, ignores booleans`|Expected result: `true` but validator returned: `false`
`validation of URIs, ignores null`|Expected result: `true` but validator returned: `false`
`validation of URI references, ignores integers`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (uri-reference)"`. **This excludes this validator from performance tests**
`validation of URI references, ignores floats`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (uri-reference)"`. **This excludes this validator from performance tests**
`validation of URI references, ignores objects`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (uri-reference)"`
`validation of URI references, ignores arrays`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (uri-reference)"`. **This excludes this validator from performance tests**
`validation of URI references, ignores booleans`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (uri-reference)"`. **This excludes this validator from performance tests**
`validation of URI references, ignores null`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (uri-reference)"`. **This excludes this validator from performance tests**
`validation of URI templates, ignores integers`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (uri-template)"`. **This excludes this validator from performance tests**
`validation of URI templates, ignores floats`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (uri-template)"`. **This excludes this validator from performance tests**
`validation of URI templates, ignores objects`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (uri-template)"`
`validation of URI templates, ignores arrays`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (uri-template)"`. **This excludes this validator from performance tests**
`validation of URI templates, ignores booleans`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (uri-template)"`. **This excludes this validator from performance tests**
`validation of URI templates, ignores null`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (uri-template)"`. **This excludes this validator from performance tests**
`evaluating the same schema location against the same data location twice is not a sign of an infinite loop, passing case`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`items with boolean schema (true), any array is valid`|Expected result: `true` but validator returned: `"Invalid schema: invalid \"items\""`. **This excludes this validator from performance tests**
`items with boolean schema (true), empty array is valid`|Expected result: `true` but validator returned: `"Invalid schema: invalid \"items\""`. **This excludes this validator from performance tests**
`items with boolean schema (false), any non-empty array is invalid`|Expected result: `false` but validator returned: `true`
`items with boolean schemas, array with one item is valid`|Expected result: `true` but validator returned: `"Cannot use 'in' operator to search for 'type' in true"`. **This excludes this validator from performance tests**
`items with boolean schemas, array with two items is invalid`|Expected result: `false` but validator returned: `"Cannot use 'in' operator to search for 'type' in true"`
`not with boolean schema true, any value is invalid`|Expected result: `false` but validator returned: `"Cannot use 'in' operator to search for 'type' in true"`. **This excludes this validator from performance tests**
`not with boolean schema false, any value is valid`|Expected result: `true` but validator returned: `"Cannot use 'in' operator to search for 'type' in false"`
`oneOf with boolean schemas, all true, any value is invalid`|Expected result: `false` but validator returned: `"Cannot use 'in' operator to search for 'type' in true"`. **This excludes this validator from performance tests**
`oneOf with boolean schemas, one true, any value is valid`|Expected result: `true` but validator returned: `"Cannot use 'in' operator to search for 'type' in false"`
`oneOf with boolean schemas, more than one true, any value is invalid`|Expected result: `false` but validator returned: `"Cannot use 'in' operator to search for 'type' in false"`
`oneOf with boolean schemas, all false, any value is invalid`|Expected result: `false` but validator returned: `"Cannot use 'in' operator to search for 'type' in false"`
`oneOf with missing optional property, first oneOf valid`|Expected result: `true` but validator returned: `"Cannot use 'in' operator to search for 'type' in true"`. **This excludes this validator from performance tests**
`oneOf with missing optional property, second oneOf valid`|Expected result: `true` but validator returned: `"Cannot use 'in' operator to search for 'type' in true"`. **This excludes this validator from performance tests**
`oneOf with missing optional property, both oneOf valid`|Expected result: `false` but validator returned: `"Cannot use 'in' operator to search for 'type' in true"`. **This excludes this validator from performance tests**
`oneOf with missing optional property, neither oneOf valid`|Expected result: `false` but validator returned: `"Cannot use 'in' operator to search for 'type' in true"`. **This excludes this validator from performance tests**
`float comparison with high precision, comparison works for high numbers`|Expected result: `false` but validator returned: `true`
`float comparison with high precision on negative numbers, comparison works for very negative numbers`|Expected result: `false` but validator returned: `true`
`all integers are multiples of 0.5, if overflow is handled, valid if optional overflow handling is implemented`|Expected result: `true` but validator returned: `false`
`validation of date-time strings, a invalid day in date-time string`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, an invalid offset in date-time string`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, tilde in local part is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of e-mail addresses, tilde before local part is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of e-mail addresses, tilde after local part is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of e-mail addresses, dot before local part is not valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, dot after local part is not valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, two subsequent dots inside local part are not valid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, leading whitespace is invalid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, trailing whitespace is invalid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, zone id is not a part of ipv6 address`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), a valid JSON-pointer`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (json-pointer)"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (~ not escaped)`|Expected result: `false` but validator returned: `"Invalid schema: unknown format (json-pointer)"`
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer with empty segment`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (json-pointer)"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer with the last empty segment`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (json-pointer)"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #1`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (json-pointer)"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #2`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (json-pointer)"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #3`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (json-pointer)"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #4`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (json-pointer)"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #5`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (json-pointer)"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #6`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (json-pointer)"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #7`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (json-pointer)"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #8`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (json-pointer)"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #9`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (json-pointer)"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #10`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (json-pointer)"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #11`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (json-pointer)"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer as stated in RFC 6901 #12`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (json-pointer)"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer used adding to the last array position`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (json-pointer)"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer (- used as object member name)`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (json-pointer)"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer (multiple escaped characters)`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (json-pointer)"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer (escaped with fraction part) #1`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (json-pointer)"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), valid JSON-pointer (escaped with fraction part) #2`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (json-pointer)"`. **This excludes this validator from performance tests**
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #1`|Expected result: `false` but validator returned: `"Invalid schema: unknown format (json-pointer)"`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #2`|Expected result: `false` but validator returned: `"Invalid schema: unknown format (json-pointer)"`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #3`|Expected result: `false` but validator returned: `"Invalid schema: unknown format (json-pointer)"`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (some escaped, but not all) #1`|Expected result: `false` but validator returned: `"Invalid schema: unknown format (json-pointer)"`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (some escaped, but not all) #2`|Expected result: `false` but validator returned: `"Invalid schema: unknown format (json-pointer)"`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (wrong escape character) #1`|Expected result: `false` but validator returned: `"Invalid schema: unknown format (json-pointer)"`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (wrong escape character) #2`|Expected result: `false` but validator returned: `"Invalid schema: unknown format (json-pointer)"`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (multiple characters not escaped)`|Expected result: `false` but validator returned: `"Invalid schema: unknown format (json-pointer)"`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #1`|Expected result: `false` but validator returned: `"Invalid schema: unknown format (json-pointer)"`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #2`|Expected result: `false` but validator returned: `"Invalid schema: unknown format (json-pointer)"`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #3`|Expected result: `false` but validator returned: `"Invalid schema: unknown format (json-pointer)"`
`validation of URI References, a valid URI`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (uri-reference)"`. **This excludes this validator from performance tests**
`validation of URI References, a valid protocol-relative URI Reference`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (uri-reference)"`. **This excludes this validator from performance tests**
`validation of URI References, a valid relative URI Reference`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (uri-reference)"`. **This excludes this validator from performance tests**
`validation of URI References, an invalid URI Reference`|Expected result: `false` but validator returned: `"Invalid schema: unknown format (uri-reference)"`
`validation of URI References, a valid URI Reference`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (uri-reference)"`. **This excludes this validator from performance tests**
`validation of URI References, a valid URI fragment`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (uri-reference)"`. **This excludes this validator from performance tests**
`validation of URI References, an invalid URI fragment`|Expected result: `false` but validator returned: `"Invalid schema: unknown format (uri-reference)"`
`format: uri-template, a valid uri-template`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (uri-template)"`. **This excludes this validator from performance tests**
`format: uri-template, an invalid uri-template`|Expected result: `false` but validator returned: `"Invalid schema: unknown format (uri-template)"`
`format: uri-template, a valid uri-template without variables`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (uri-template)"`. **This excludes this validator from performance tests**
`format: uri-template, a valid relative uri-template`|Expected result: `true` but validator returned: `"Invalid schema: unknown format (uri-template)"`. **This excludes this validator from performance tests**
`validation of URIs, a valid URL `|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`Proper UTF-16 surrogate pair handling: pattern, matches empty`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: pattern, matches two`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: patternProperties, doesn't match two`|Expected result: `false` but validator returned: `true`
`patternProperties with boolean schemas, object with property matching schema true is valid`|Expected result: `true` but validator returned: `"Cannot use 'in' operator to search for 'type' in true"`. **This excludes this validator from performance tests**
`patternProperties with boolean schemas, object with property matching schema false is invalid`|Expected result: `false` but validator returned: `"Cannot use 'in' operator to search for 'type' in false"`
`patternProperties with boolean schemas, object with both properties is invalid`|Expected result: `false` but validator returned: `"Cannot use 'in' operator to search for 'type' in false"`
`patternProperties with boolean schemas, object with a property matching both true and false is invalid`|Expected result: `false` but validator returned: `"Cannot use 'in' operator to search for 'type' in false"`
`properties with boolean schema, only 'true' property present is valid`|Expected result: `true` but validator returned: `"Cannot use 'in' operator to search for 'type' in true"`. **This excludes this validator from performance tests**
`properties with boolean schema, only 'false' property present is invalid`|Expected result: `false` but validator returned: `"Cannot use 'in' operator to search for 'type' in false"`
`properties with boolean schema, both properties present is invalid`|Expected result: `false` but validator returned: `"Cannot use 'in' operator to search for 'type' in true"`
`propertyNames validation, some property names invalid`|Expected result: `false` but validator returned: `true`
`propertyNames with boolean schema false, object with any properties is invalid`|Expected result: `false` but validator returned: `true`
`$ref to boolean schema true, any value is valid`|Expected result: `true` but validator returned: `"Cannot use 'in' operator to search for 'type' in true"`. **This excludes this validator from performance tests**
`$ref to boolean schema false, any value is invalid`|Expected result: `false` but validator returned: `"Cannot use 'in' operator to search for 'type' in false"`
`Recursive references between schemas, valid tree`|Expected result: `true` but validator returned: `"Unable to locate JSON Ref (node)"`. **This excludes this validator from performance tests**
`Recursive references between schemas, invalid tree`|Expected result: `false` but validator returned: `"Unable to locate JSON Ref (node)"`
`Location-independent identifier, match`|Expected result: `true` but validator returned: `"Invalid JSON Pointer (\"foo\"): non-empty pointers must begin with \"/\" or \"#/\""`
`Location-independent identifier, mismatch`|Expected result: `false` but validator returned: `"Invalid JSON Pointer (\"foo\"): non-empty pointers must begin with \"/\" or \"#/\""`
`Location-independent identifier with absolute URI, match`|Expected result: `true` but validator returned: `"Unable to locate JSON Ref (http://localhost:1234/bar)"`
`Location-independent identifier with absolute URI, mismatch`|Expected result: `false` but validator returned: `"Unable to locate JSON Ref (http://localhost:1234/bar)"`
`Location-independent identifier with base URI change in subschema, match`|Expected result: `true` but validator returned: `"Unable to locate JSON Ref (http://localhost:1234/nested.json)"`
`Location-independent identifier with base URI change in subschema, mismatch`|Expected result: `false` but validator returned: `"Unable to locate JSON Ref (http://localhost:1234/nested.json)"`
`base URI change, base URI change ref valid`|Expected result: `true` but validator returned: `"Unable to locate JSON Ref (folderInteger.json)"`. **This excludes this validator from performance tests**
`base URI change, base URI change ref invalid`|Expected result: `false` but validator returned: `"Unable to locate JSON Ref (folderInteger.json)"`
`base URI change - change folder, number is valid`|Expected result: `true` but validator returned: `"Unable to locate JSON Ref (folderInteger.json)"`
`base URI change - change folder, string is invalid`|Expected result: `false` but validator returned: `"Unable to locate JSON Ref (folderInteger.json)"`
`base URI change - change folder in subschema, number is valid`|Expected result: `true` but validator returned: `"Unable to locate JSON Ref (folderInteger.json)"`
`base URI change - change folder in subschema, string is invalid`|Expected result: `false` but validator returned: `"Unable to locate JSON Ref (folderInteger.json)"`
`root ref in remote ref, string is valid`|Expected result: `true` but validator returned: `"Unable to locate JSON Ref (name.json)"`. **This excludes this validator from performance tests**
`root ref in remote ref, null is valid`|Expected result: `true` but validator returned: `"Unable to locate JSON Ref (name.json)"`. **This excludes this validator from performance tests**
`root ref in remote ref, object is invalid`|Expected result: `false` but validator returned: `"Unable to locate JSON Ref (name.json)"`
`uniqueItems=false validation, non-unique array of integers is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, numbers are unique if mathematically unequal`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, non-unique array of objects is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, non-unique array of nested objects is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, non-unique array of arrays is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, non-unique heterogeneous types are valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items, [false, false] from items array is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items, [true, true] from items array is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items, non-unique array extended from [false, true] is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items, non-unique array extended from [true, false] is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items and additionalItems=false, [false, false] from items array is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items and additionalItems=false, [true, true] from items array is valid`|Expected result: `true` but validator returned: `false`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)