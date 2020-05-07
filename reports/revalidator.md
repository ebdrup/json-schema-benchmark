# [`revalidator`](https://github.com/flatiron/revalidator) - test summary

# All validators fail this test

`ECMA 262 \s matches ascii whitespace only, latin-1 non-breaking-space does not match (unlike e.g. Python)`

`Proper UTF-16 surrogate pair handling: patternProperties, doesn&#39;t match two`

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`revalidator`](https://github.com/flatiron/revalidator) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`revalidator`](https://github.com/flatiron/revalidator) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`additionalItems as schema, additional items do not match schema`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`array of items with no additionalItems, additional items are not permitted`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`additionalProperties being false does not allow other properties, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`additionalProperties being false does not allow other properties, ignores strings`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`additionalProperties allows a schema which should validate, an additional valid property is valid`|Expected result: `true` but validator returned: `"Cannot read property 'format' of undefined"`. **This excludes this validator from performance tests**
`additionalProperties allows a schema which should validate, an additional invalid property is invalid`|Expected result: `false` but validator returned: `"Cannot read property 'format' of undefined"`. **This excludes this validator from performance tests**
`additionalProperties can exist by itself, an additional valid property is valid`|Expected result: `true` but validator returned: `"Cannot read property 'format' of undefined"`. **This excludes this validator from performance tests**
`additionalProperties can exist by itself, an additional invalid property is invalid`|Expected result: `false` but validator returned: `"Cannot read property 'format' of undefined"`. **This excludes this validator from performance tests**
`additionalProperties should not look in applicators, properties defined in allOf are not allowed`|Expected result: `false` but validator returned: `"Cannot read property 'format' of undefined"`. **This excludes this validator from performance tests**
`allOf, mismatch second`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf, mismatch first`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf, wrong type`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf with base schema, mismatch base schema`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf with base schema, mismatch first allOf`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf with base schema, mismatch second allOf`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf with base schema, mismatch both`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf simple types, mismatch one`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf with the first empty schema, string is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf with the last empty schema, string is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`nested allOf, to check validation semantics, null is valid`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`nested allOf, to check validation semantics, anything non-null is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`anyOf, neither anyOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`anyOf with base schema, mismatch base schema`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`anyOf with base schema, both anyOf invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`anyOf complex types, neither anyOf valid (complex)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`nested anyOf, to check validation semantics, null is valid`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`nested anyOf, to check validation semantics, anything non-null is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`nested anyOf, to check validation semantics, null is valid`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`nested anyOf, to check validation semantics, anything non-null is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`invalid definition, invalid definition schema`|Expected result: `false` but validator returned: `true`
`dependencies, missing dependency`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`multiple dependencies, missing dependency`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`multiple dependencies, missing other dependency`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`multiple dependencies, missing both dependencies`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`multiple dependencies subschema, wrong type`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`multiple dependencies subschema, wrong type other`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`multiple dependencies subschema, wrong type both`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 1`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 2`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 3`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 4`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`simple enum validation, something else is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`heterogeneous enum validation, something else is invalid`|Expected result: `false` but validator returned: `"Cannot convert undefined or null to object"`
`heterogeneous enum validation, objects are deep compared`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`heterogeneous enum-with-null validation, null is valid`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`heterogeneous enum-with-null validation, something else is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`enums in properties, missing required property is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`enums in properties, missing all properties is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`enum with escaped characters, another string is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`enum with false does not match 0, integer zero is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`enum with false does not match 0, float zero is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`enum with true does not match 1, integer one is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`enum with true does not match 1, float one is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`enum with 0 does not match false, false is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`enum with 1 does not match true, true is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`validation of IP addresses, ignores null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, ignores null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`validation of hostnames, ignores null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`validation of date-time strings, ignores null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`validation of URIs, ignores null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`a schema given for items, wrong type of items`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`an array of schemas for items, wrong types`|Expected result: `false` but validator returned: `true`
`items and subitems, too many items`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`items and subitems, too many sub-items`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`items and subitems, wrong item`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`items and subitems, wrong sub-item`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`maxItems validation, too long is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`maxLength validation, too long is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`maxProperties validation, too long is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`maximum validation, above the maximum is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`maximum validation with unsigned integer, above the maximum is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`maximum validation (explicit false exclusivity), above the maximum is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`exclusiveMaximum validation, boundary point is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`minItems validation, too short is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`minLength validation, too short is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`
`minProperties validation, too short is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`minimum validation, below the minimum is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`minimum validation (explicit false exclusivity), below the minimum is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`exclusiveMinimum validation, boundary point is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`minimum validation with signed integer, float below the minimum is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`minimum validation with signed integer, int below the minimum is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`by int, int by int fail`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`by number, 35 is not multiple of 1.5`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`by small number, 0.00751 is not multiple of 0.0001`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`not, disallowed`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`not multiple types, mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`not multiple types, other mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`not more complex schema, mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`forbidden property, property present`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf, both oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf, neither oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with base schema, mismatch base schema`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with base schema, both oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf complex types, both oneOf valid (complex)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf complex types, neither oneOf valid (complex)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with empty schema, both valid - invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with required, both invalid - invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with required, both valid - invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with missing optional property, both oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with missing optional property, neither oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`nested oneOf, to check validation semantics, null is valid`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`nested oneOf, to check validation semantics, anything non-null is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`string, a bignum is not a string`|Expected result: `false` but validator returned: `true`
`float comparison with high precision, comparison works for high numbers`|Expected result: `false` but validator returned: `true`
`float comparison with high precision on negative numbers, comparison works for very negative numbers`|Expected result: `false` but validator returned: `true`
`ECMA 262 regex non-compliance, ECMA 262 has no support for \Z anchor from .NET`|Expected result: `false` but validator returned: `true`
`ECMA 262 regex $ does not match trailing newline, matches in Python, but should not in jsonschema`|Expected result: `false` but validator returned: `true`
`ECMA 262 regex converts \t to horizontal tab, does not match`|Expected result: `false` but validator returned: `true`
`ECMA 262 regex escapes control codes with \c and upper letter, does not match`|Expected result: `false` but validator returned: `true`
`ECMA 262 regex escapes control codes with \c and lower letter, does not match`|Expected result: `false` but validator returned: `true`
`ECMA 262 \d matches ascii digits only, NKO DIGIT ZERO does not match (unlike e.g. Python)`|Expected result: `false` but validator returned: `true`
`ECMA 262 \d matches ascii digits only, NKO DIGIT ZERO (as \u escape) does not match`|Expected result: `false` but validator returned: `true`
`ECMA 262 \D matches everything but ascii digits, ASCII zero does not match`|Expected result: `false` but validator returned: `true`
`ECMA 262 \w matches ascii letters only, latin-1 e-acute does not match (unlike e.g. Python)`|Expected result: `false` but validator returned: `true`
`ECMA 262 \w matches everything but ascii letters, ASCII 'a' does not match`|Expected result: `false` but validator returned: `true`
`ECMA 262 \S matches everything but ascii whitespace, ASCII space does not match`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, a invalid day in date-time string`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, an invalid offset in date-time string`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, an invalid date-time string`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, only RFC3339 not all of ISO 8601 are valid`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid protocol-relative URI Reference`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid relative URI Reference`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid URI`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid URI though valid URI reference`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid URI with spaces`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid URI with spaces and missing scheme`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, an invalid e-mail address`|Expected result: `false` but validator returned: `true`
`validation of IP addresses, an IP address with too many components`|Expected result: `false` but validator returned: `true`
`validation of IP addresses, an IP address with out-of-range values`|Expected result: `false` but validator returned: `true`
`validation of IP addresses, an IP address without 4 components`|Expected result: `false` but validator returned: `true`
`validation of IP addresses, an IP address as an integer`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, an IPv6 address with out-of-range values`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, an IPv6 address with too many components`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, an IPv6 address containing illegal characters`|Expected result: `false` but validator returned: `true`
`validation of host names, a host name starting with an illegal character`|Expected result: `false` but validator returned: `true`
`validation of host names, a host name containing illegal characters`|Expected result: `false` but validator returned: `true`
`validation of host names, a host name with a component too long`|Expected result: `false` but validator returned: `true`
`Proper UTF-16 surrogate pair handling: pattern, doesn't match one`|Expected result: `false` but validator returned: `true`
`Proper UTF-16 surrogate pair handling: pattern, doesn't match two`|Expected result: `false` but validator returned: `true`
`Proper UTF-16 surrogate pair handling: pattern, doesn't match one ASCII`|Expected result: `false` but validator returned: `true`
`Proper UTF-16 surrogate pair handling: pattern, doesn't match two ASCII`|Expected result: `false` but validator returned: `true`
`pattern validation, a non-matching pattern is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`pattern validation, ignores null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`properties, patternProperties, additionalProperties interaction, additionalProperty validates others`|Expected result: `true` but validator returned: `"Cannot read property 'format' of undefined"`. **This excludes this validator from performance tests**
`properties, patternProperties, additionalProperties interaction, additionalProperty invalidates others`|Expected result: `false` but validator returned: `"Cannot read property 'format' of undefined"`. **This excludes this validator from performance tests**
`root pointer ref, recursive mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`relative pointer ref to object, mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`relative pointer ref to array, mismatch array`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`escaped pointer ref, slash invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`escaped pointer ref, tilda invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`escaped pointer ref, percent invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`nested refs, nested ref invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ref overrides any sibling keywords, ref valid, maxItems ignored`|Expected result: `true` but validator returned: `false`
`ref overrides any sibling keywords, ref invalid`|Expected result: `false` but validator returned: `true`
`remote ref, containing refs itself, remote ref invalid`|Expected result: `false` but validator returned: `true`
`Recursive references between schemas, invalid tree`|Expected result: `false` but validator returned: `true`
`refs with quote, object with strings is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`Location-independent identifier, mismatch`|Expected result: `false` but validator returned: `true`
`Location-independent identifier with absolute URI, mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`Location-independent identifier with base URI change in subschema, mismatch`|Expected result: `false` but validator returned: `true`
`remote ref, remote ref invalid`|Expected result: `false` but validator returned: `true`
`fragment within remote ref, remote fragment invalid`|Expected result: `false` but validator returned: `true`
`ref within remote ref, ref within ref invalid`|Expected result: `false` but validator returned: `true`
`base URI change, base URI change ref invalid`|Expected result: `false` but validator returned: `true`
`base URI change - change folder, string is invalid`|Expected result: `false` but validator returned: `true`
`base URI change - change folder in subschema, string is invalid`|Expected result: `false` but validator returned: `true`
`root ref in remote ref, object is invalid`|Expected result: `false` but validator returned: `true`
`required validation, non-present required property is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`required with escaped characters, object with some properties missing is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`integer type matches integers, a float is not an integer`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`integer type matches integers, a string is not an integer`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`integer type matches integers, a string is still not an integer, even if it looks like one`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`integer type matches integers, an object is not an integer`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`integer type matches integers, an array is not an integer`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`integer type matches integers, a boolean is not an integer`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`integer type matches integers, null is not an integer`|Expected result: `false` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`number type matches numbers, a string is not a number`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`number type matches numbers, a string is still not a number, even if it looks like one`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`number type matches numbers, an object is not a number`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`number type matches numbers, an array is not a number`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`number type matches numbers, a boolean is not a number`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`number type matches numbers, null is not a number`|Expected result: `false` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`string type matches strings, 1 is not a string`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`string type matches strings, a float is not a string`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`string type matches strings, an object is not a string`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`string type matches strings, an array is not a string`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`string type matches strings, a boolean is not a string`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`string type matches strings, null is not a string`|Expected result: `false` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`object type matches objects, an integer is not an object`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`object type matches objects, a float is not an object`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`object type matches objects, a string is not an object`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`object type matches objects, an array is not an object`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`object type matches objects, a boolean is not an object`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`object type matches objects, null is not an object`|Expected result: `false` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`boolean type matches booleans, an integer is not a boolean`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean type matches booleans, zero is not a boolean`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean type matches booleans, a float is not a boolean`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean type matches booleans, a string is not a boolean`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean type matches booleans, an empty string is not a boolean`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean type matches booleans, an object is not a boolean`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean type matches booleans, an array is not a boolean`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean type matches booleans, null is not a boolean`|Expected result: `false` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`null type matches only the null object, an integer is not null`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`null type matches only the null object, a float is not null`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`null type matches only the null object, zero is not null`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`null type matches only the null object, a string is not null`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`null type matches only the null object, an empty string is not null`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`null type matches only the null object, an object is not null`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`null type matches only the null object, an array is not null`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`null type matches only the null object, true is not null`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`null type matches only the null object, false is not null`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`null type matches only the null object, null is null`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`multiple types can be specified in an array, a float is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`multiple types can be specified in an array, an object is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`multiple types can be specified in an array, an array is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`multiple types can be specified in an array, a boolean is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`multiple types can be specified in an array, null is invalid`|Expected result: `false` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`type as array with one item, number is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`type: array or object, number is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`type: array or object, string is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`type: array or object, null is invalid`|Expected result: `false` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`type: array, object or null, null is valid`|Expected result: `true` but validator returned: `"Cannot convert undefined or null to object"`. **This excludes this validator from performance tests**
`type: array, object or null, number is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`type: array, object or null, string is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems validation, non-unique array of integers is invalid`|Expected result: `false` but validator returned: `true`
`uniqueItems validation, numbers are unique if mathematically unequal`|Expected result: `false` but validator returned: `true`
`uniqueItems validation, non-unique array of objects is invalid`|Expected result: `false` but validator returned: `true`
`uniqueItems validation, non-unique array of nested objects is invalid`|Expected result: `false` but validator returned: `true`
`uniqueItems validation, non-unique array of arrays is invalid`|Expected result: `false` but validator returned: `true`
`uniqueItems validation, non-unique heterogeneous types are invalid`|Expected result: `false` but validator returned: `true`
`uniqueItems with an array of items, [false, false] from items array is not valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems with an array of items, [true, true] from items array is not valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems with an array of items, non-unique array extended from [false, true] is not valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems with an array of items, non-unique array extended from [true, false] is not valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems with an array of items and additionalItems=false, [false, false] from items array is not valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems with an array of items and additionalItems=false, [true, true] from items array is not valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems with an array of items and additionalItems=false, extra items are invalid even if unique`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items and additionalItems=false, extra items are invalid even if unique`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)