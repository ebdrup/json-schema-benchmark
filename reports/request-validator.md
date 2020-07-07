# [`request-validator`](https://github.com/bugventure/request-validator) - test summary


# [`request-validator`](https://github.com/bugventure/request-validator) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`request-validator`](https://github.com/bugventure/request-validator) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`allOf with boolean schemas, all true, any value is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`allOf with boolean schemas, some false, any value is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`allOf with boolean schemas, all false, any value is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: true, anyOf: false, oneOf: false`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: true, anyOf: false, oneOf: true`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: true, anyOf: true, oneOf: false`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`anyOf with boolean schemas, all true, any value is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`anyOf with boolean schemas, some true, any value is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`anyOf with boolean schemas, all false, any value is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`boolean schema 'true', number is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`boolean schema 'true', string is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`boolean schema 'true', boolean true is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`boolean schema 'true', boolean false is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`boolean schema 'true', null is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`boolean schema 'true', object is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`boolean schema 'true', empty object is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`boolean schema 'true', array is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`boolean schema 'true', empty array is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`boolean schema 'false', number is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`boolean schema 'false', string is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`boolean schema 'false', boolean true is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`boolean schema 'false', boolean false is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`boolean schema 'false', null is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`boolean schema 'false', object is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`boolean schema 'false', empty object is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`boolean schema 'false', array is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`boolean schema 'false', empty array is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
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
`dependencies with empty array, empty object`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`dependencies with empty array, object with one property`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`dependencies with empty array, non-object is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`dependencies with boolean subschemas, object with property having schema true is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`dependencies with boolean subschemas, object with property having schema false is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`dependencies with boolean subschemas, object with both properties is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`dependencies with boolean subschemas, empty object is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`exclusiveMaximum validation, below the exclusiveMaximum is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`exclusiveMaximum validation, boundary point is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`exclusiveMaximum validation, above the exclusiveMaximum is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`exclusiveMaximum validation, ignores non-numbers`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`exclusiveMinimum validation, above the exclusiveMinimum is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`exclusiveMinimum validation, boundary point is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`exclusiveMinimum validation, below the exclusiveMinimum is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`exclusiveMinimum validation, ignores non-numbers`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`items with boolean schema (true), any array is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`items with boolean schema (true), empty array is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`items with boolean schema (false), any non-empty array is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`items with boolean schema (false), empty array is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`items with boolean schemas, array with one item is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`items with boolean schemas, array with two items is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`items with boolean schemas, empty array is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`
`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`
`not with boolean schema true, any value is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`not with boolean schema false, any value is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`oneOf with boolean schemas, all true, any value is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`oneOf with boolean schemas, one true, any value is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`oneOf with boolean schemas, more than one true, any value is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`oneOf with boolean schemas, all false, any value is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`oneOf with missing optional property, first oneOf valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`oneOf with missing optional property, second oneOf valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`oneOf with missing optional property, both oneOf valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`oneOf with missing optional property, neither oneOf valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`integer, a bignum is an integer`|Expected result: `true` but validator returned: `false`
`integer, a negative bignum is an integer`|Expected result: `true` but validator returned: `false`
`float comparison with high precision, comparison works for high numbers`|The schema failed to load(`invalid`)
`float comparison with high precision on negative numbers, comparison works for very negative numbers`|The schema failed to load(`invalid`)
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
`patternProperties with boolean schemas, object with property matching schema true is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`patternProperties with boolean schemas, object with property matching schema false is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`patternProperties with boolean schemas, object with both properties is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`patternProperties with boolean schemas, empty object is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`properties with boolean schema, no property present is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`properties with boolean schema, only 'true' property present is valid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`properties with boolean schema, only 'false' property present is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`properties with boolean schema, both properties present is invalid`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**
`propertyNames validation, some property names invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`propertyNames with boolean schema false, object with any properties is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`escaped pointer ref, slash valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`escaped pointer ref, tilde valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`escaped pointer ref, percent valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`remote ref, containing refs itself, remote ref invalid`|Expected result: `false` but validator returned: `true`
`$ref to boolean schema true, any value is valid`|The schema failed to load(`request-validator: invalid schema reference '#/definitions/bool'`). **This excludes this validator from performance tests**
`$ref to boolean schema false, any value is invalid`|The schema failed to load(`request-validator: invalid schema reference '#/definitions/bool'`). **This excludes this validator from performance tests**
`Recursive references between schemas, valid tree`|Expected result: `true` but validator returned: `false`
`refs with quote, object with numbers is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`Location-independent identifier, match`|Expected result: `true` but validator returned: `false`
`Location-independent identifier with absolute URI, match`|Expected result: `true` but validator returned: `false`
`Location-independent identifier with base URI change in subschema, match`|Expected result: `true` but validator returned: `false`
`remote ref, remote ref invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`fragment within remote ref, remote fragment valid`|The schema failed to load(`request-validator: invalid schema reference 'http://localhost:1234/subSchemas.json#/integer'`). **This excludes this validator from performance tests**
`fragment within remote ref, remote fragment invalid`|The schema failed to load(`request-validator: invalid schema reference 'http://localhost:1234/subSchemas.json#/integer'`). **This excludes this validator from performance tests**
`ref within remote ref, ref within ref valid`|The schema failed to load(`request-validator: invalid schema reference 'http://localhost:1234/subSchemas.json#/refToInteger'`)
`ref within remote ref, ref within ref invalid`|The schema failed to load(`request-validator: invalid schema reference 'http://localhost:1234/subSchemas.json#/refToInteger'`)
`base URI change, base URI change ref invalid`|Expected result: `false` but validator returned: `true`
`base URI change - change folder, number is valid`|Expected result: `true` but validator returned: `false`
`base URI change - change folder in subschema, number is valid`|Expected result: `true` but validator returned: `false`
`root ref in remote ref, string is valid`|Expected result: `true` but validator returned: `false`
`root ref in remote ref, null is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`required with empty array, property not required`|The schema failed to load(`invalid`). **This excludes this validator from performance tests**

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)