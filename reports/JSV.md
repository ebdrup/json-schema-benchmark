# [`JSV`](http://github.com/garycourt/JSV) - test summary


# [`JSV`](http://github.com/garycourt/JSV) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`JSV`](http://github.com/garycourt/JSV) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`additionalItems as false without items, items defaults to empty schema so everything is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`additionalItems should not look in applicators, valid case, items defined in allOf are not examined`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`allOf, mismatch second`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf, mismatch first`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf, wrong type`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf with base schema, valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`allOf simple types, mismatch one`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf with boolean schemas, some false, any value is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf with boolean schemas, all false, any value is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf with the first empty schema, string is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf with the last empty schema, string is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`nested allOf, to check validation semantics, anything non-null is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: false, anyOf: false, oneOf: false`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: false, anyOf: false, oneOf: true`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: false, anyOf: true, oneOf: false`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: false, anyOf: true, oneOf: true`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: true, anyOf: false, oneOf: false`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: true, anyOf: false, oneOf: true`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: true, anyOf: true, oneOf: false`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`anyOf, neither anyOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`anyOf with base schema, both anyOf invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`anyOf with boolean schemas, all false, any value is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`anyOf complex types, neither anyOf valid (complex)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`nested anyOf, to check validation semantics, anything non-null is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`nested anyOf, to check validation semantics, anything non-null is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean schema 'true', number is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`boolean schema 'true', string is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`boolean schema 'true', boolean true is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`boolean schema 'true', boolean false is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`boolean schema 'true', null is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`boolean schema 'true', object is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`boolean schema 'true', empty object is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`boolean schema 'true', array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`boolean schema 'true', empty array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
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
`items + contains, does not match items, matches contains`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`items + contains, matches neither items nor contains`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`valid definition, valid definition schema`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`dependencies with boolean subschemas, object with property having schema true is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`dependencies with boolean subschemas, empty object is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`dependencies with escaped characters, valid object 1`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`dependencies with escaped characters, valid object 2`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`dependencies with escaped characters, valid object 3`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`heterogeneous enum validation, one of the enum is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`enums in properties, both properties are valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`enums in properties, missing optional property is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`exclusiveMaximum validation, below the exclusiveMaximum is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`exclusiveMaximum validation, ignores non-numbers`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`exclusiveMinimum validation, above the exclusiveMinimum is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`exclusiveMinimum validation, ignores non-numbers`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`items with boolean schema (true), any array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`items with boolean schema (true), empty array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`items with boolean schema (false), empty array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`items with boolean schemas, array with one item is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`items with boolean schemas, empty array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`items and subitems, valid items`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`items and subitems, fewer items is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`
`maxProperties validation, too long is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`maxProperties = 0 means the object is empty, one property is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`
`minProperties validation, too short is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`by int, int by int fail`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`by number, 35 is not multiple of 1.5`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`by small number, 0.00751 is not multiple of 0.0001`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`not, disallowed`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`not multiple types, mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`not multiple types, other mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`not more complex schema, mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`forbidden property, property present`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`not with boolean schema true, any value is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf, both oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf, neither oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with base schema, both oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with boolean schemas, all true, any value is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with boolean schemas, more than one true, any value is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with boolean schemas, all false, any value is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf complex types, both oneOf valid (complex)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf complex types, neither oneOf valid (complex)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with empty schema, both valid - invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with required, both invalid - invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with required, both valid - invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with missing optional property, both oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with missing optional property, neither oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`nested oneOf, to check validation semantics, anything non-null is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ECMA 262 regex non-compliance, ECMA 262 has no support for \Z anchor from .NET`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, a invalid day in date-time string`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, an invalid offset in date-time string`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, an invalid closing Z after time-zone offset`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, an invalid date-time string`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, only RFC3339 not all of ISO 8601 are valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, an invalid e-mail address`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, dot before local part is not valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, dot after local part is not valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, two subsequent dots inside local part are not valid`|Expected result: `false` but validator returned: `true`
`validation of host names, a host name starting with an illegal character`|Expected result: `false` but validator returned: `true`
`validation of host names, a host name containing illegal characters`|Expected result: `false` but validator returned: `true`
`validation of host names, a host name with a component too long`|Expected result: `false` but validator returned: `true`
`validation of host names, starts with hyphen`|Expected result: `false` but validator returned: `true`
`validation of host names, ends with hyphen`|Expected result: `false` but validator returned: `true`
`validation of host names, starts with underscore`|Expected result: `false` but validator returned: `true`
`validation of host names, ends with underscore`|Expected result: `false` but validator returned: `true`
`validation of host names, contains underscore`|Expected result: `false` but validator returned: `true`
`validation of host names, exceeds maximum label length`|Expected result: `false` but validator returned: `true`
`validation of IP addresses, an IP address with too many components`|Expected result: `false` but validator returned: `true`
`validation of IP addresses, an IP address with out-of-range values`|Expected result: `false` but validator returned: `true`
`validation of IP addresses, an IP address without 4 components`|Expected result: `false` but validator returned: `true`
`validation of IP addresses, an IP address as an integer`|Expected result: `false` but validator returned: `true`
`validation of IP addresses, an IP address as an integer (decimal)`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, an IPv6 address with out-of-range values`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, an IPv6 address with too many components`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, an IPv6 address containing illegal characters`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, two sets of double colons is invalid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, mixed format with ipv4 section with octet out of range`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, mixed format with ipv4 section with a hex octet`|Expected result: `false` but validator returned: `true`
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
`validation of URIs, an invalid protocol-relative URI Reference`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid relative URI Reference`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid URI`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid URI though valid URI reference`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid URI with spaces`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid URI with spaces and missing scheme`|Expected result: `false` but validator returned: `true`
`Proper UTF-16 surrogate pair handling: pattern, matches empty`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: pattern, matches two`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: patternProperties, doesn't match two`|Expected result: `false` but validator returned: `true`
`patternProperties with boolean schemas, object with property matching schema true is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`patternProperties with boolean schemas, empty object is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`properties with boolean schema, no property present is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`properties with boolean schema, only 'true' property present is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`propertyNames validation, some property names invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`propertyNames with boolean schema false, object with any properties is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`escaped pointer ref, slash valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`escaped pointer ref, tilde valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`escaped pointer ref, percent valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`nested refs, nested ref valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`ref overrides any sibling keywords, ref valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`ref overrides any sibling keywords, ref valid, maxItems ignored`|Expected result: `true` but validator returned: `false`
`remote ref, containing refs itself, remote ref valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`property named $ref, containing an actual $ref, property named $ref valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`$ref to boolean schema true, any value is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`Recursive references between schemas, valid tree`|Expected result: `true` but validator returned: `false`
`refs with quote, object with numbers is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`Location-independent identifier, mismatch`|Expected result: `false` but validator returned: `true`
`Location-independent identifier with absolute URI, mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`Location-independent identifier with base URI change in subschema, mismatch`|Expected result: `false` but validator returned: `true`
`remote ref, remote ref valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`fragment within remote ref, remote fragment valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`ref within remote ref, ref within ref valid`|Expected result: `true` but validator returned: `false`
`base URI change, base URI change ref valid`|Expected result: `true` but validator returned: `false`
`base URI change - change folder, number is valid`|Expected result: `true` but validator returned: `false`
`base URI change - change folder in subschema, number is valid`|Expected result: `true` but validator returned: `false`
`root ref in remote ref, string is valid`|Expected result: `true` but validator returned: `false`
`root ref in remote ref, null is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`required validation, present required property is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`required validation, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`required validation, ignores strings`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`required validation, ignores other non-objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`required with empty array, property not required`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`required with escaped characters, object with all properties present is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems validation, non-unique array of objects is invalid`|Expected result: `false` but validator returned: `true`
`uniqueItems validation, non-unique array of nested objects is invalid`|Expected result: `false` but validator returned: `true`
`uniqueItems validation, non-unique array of arrays is invalid`|Expected result: `false` but validator returned: `true`
`uniqueItems validation, non-unique heterogeneous types are invalid`|Expected result: `false` but validator returned: `true`
`uniqueItems validation, objects are non-unique despite key order`|Expected result: `false` but validator returned: `true`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)