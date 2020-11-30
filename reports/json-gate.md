# [`json-gate`](https://github.com/oferei/json-gate#readme) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`json-gate`](https://github.com/oferei/json-gate#readme) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`json-gate`](https://github.com/oferei/json-gate#readme) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`allOf, mismatch second`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf, mismatch first`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf, wrong type`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf with base schema, valid`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`allOf with base schema, mismatch base schema`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`allOf with base schema, mismatch first allOf`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`allOf with base schema, mismatch second allOf`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`allOf with base schema, mismatch both`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`allOf simple types, mismatch one`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
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
`anyOf complex types, neither anyOf valid (complex)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`nested anyOf, to check validation semantics, anything non-null is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`nested anyOf, to check validation semantics, anything non-null is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`invalid type for default, valid when property is specified`|The schema failed to load(`Schema property 'foo': 'default' attribute value is not valid according to the schema: JSON object is an array when it should be an integer`). **This excludes this validator from performance tests**
`invalid type for default, still valid when the invalid default is used`|The schema failed to load(`Schema property 'foo': 'default' attribute value is not valid according to the schema: JSON object is an array when it should be an integer`). **This excludes this validator from performance tests**
`invalid string value for default, valid when property is specified`|The schema failed to load(`Schema property 'bar': 'default' attribute value is not valid according to the schema: JSON object: length is 3 when it should be at least 4`). **This excludes this validator from performance tests**
`invalid string value for default, still valid when the invalid default is used`|The schema failed to load(`Schema property 'bar': 'default' attribute value is not valid according to the schema: JSON object: length is 3 when it should be at least 4`). **This excludes this validator from performance tests**
`invalid definition, invalid definition schema`|Expected result: `false` but validator returned: `true`
`multiple dependencies subschema, no dependency`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`dependencies with escaped characters, valid object 1`|The schema failed to load(`Schema: 'dependencies' attribute: value of property 'foo'bar' is not a valid schema: Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`dependencies with escaped characters, valid object 2`|The schema failed to load(`Schema: 'dependencies' attribute: value of property 'foo'bar' is not a valid schema: Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`dependencies with escaped characters, valid object 3`|The schema failed to load(`Schema: 'dependencies' attribute: value of property 'foo'bar' is not a valid schema: Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 1`|The schema failed to load(`Schema: 'dependencies' attribute: value of property 'foo'bar' is not a valid schema: Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 2`|The schema failed to load(`Schema: 'dependencies' attribute: value of property 'foo'bar' is not a valid schema: Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 3`|The schema failed to load(`Schema: 'dependencies' attribute: value of property 'foo'bar' is not a valid schema: Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 4`|The schema failed to load(`Schema: 'dependencies' attribute: value of property 'foo'bar' is not a valid schema: Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`heterogeneous enum-with-null validation, null is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`enums in properties, both properties are valid`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`enums in properties, wrong foo value`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`enums in properties, wrong bar value`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`enums in properties, missing optional property is valid`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`enums in properties, missing required property is invalid`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`enums in properties, missing all properties is invalid`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores integers`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`). **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores floats`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`). **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores objects`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`). **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores arrays`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`). **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores booleans`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`). **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores null`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, ignores integers`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, ignores floats`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, ignores objects`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, ignores arrays`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, ignores booleans`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, ignores null`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of date-time strings, ignores integers`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`). **This excludes this validator from performance tests**
`validation of date-time strings, ignores floats`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`). **This excludes this validator from performance tests**
`validation of date-time strings, ignores objects`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`). **This excludes this validator from performance tests**
`validation of date-time strings, ignores arrays`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`). **This excludes this validator from performance tests**
`validation of date-time strings, ignores booleans`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`). **This excludes this validator from performance tests**
`validation of date-time strings, ignores null`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`). **This excludes this validator from performance tests**
`validation of URIs, ignores integers`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, ignores floats`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, ignores objects`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, ignores arrays`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, ignores booleans`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, ignores null`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`evaluating the same schema location against the same data location twice is not a sign of an infinite loop, failing case`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`items and subitems, too many sub-items`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`items and subitems, wrong item`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`items and subitems, wrong sub-item`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`
`maxProperties validation, too long is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`maxProperties = 0 means the object is empty, one property is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`
`minProperties validation, too short is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`by int, int by int fail`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`by number, 35 is not multiple of 1.5`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`by small number, 0.00751 is not multiple of 0.0001`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`invalid instance should not raise error when float division = inf, always invalid, but naive implementations may raise an overflow error`|Expected result: `false` but validator returned: `true`
`not, disallowed`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`not multiple types, mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`not multiple types, other mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`not more complex schema, mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`forbidden property, property present`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf, both oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf, neither oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with base schema, both oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf complex types, both oneOf valid (complex)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf complex types, neither oneOf valid (complex)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with empty schema, both valid - invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with required, both invalid - invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with required, both valid - invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with missing optional property, both oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with missing optional property, neither oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`nested oneOf, to check validation semantics, anything non-null is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of date-time strings, a valid date-time string`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`). **This excludes this validator from performance tests**
`validation of date-time strings, a valid date-time string without second fraction`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`). **This excludes this validator from performance tests**
`validation of date-time strings, a valid date-time string with plus offset`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`). **This excludes this validator from performance tests**
`validation of date-time strings, a valid date-time string with minus offset`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`). **This excludes this validator from performance tests**
`validation of date-time strings, a invalid day in date-time string`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`)
`validation of date-time strings, an invalid offset in date-time string`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`)
`validation of date-time strings, an invalid date-time string`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`). **This excludes this validator from performance tests**
`validation of date-time strings, case-insensitive T and Z`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`). **This excludes this validator from performance tests**
`validation of date-time strings, only RFC3339 not all of ISO 8601 are valid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`). **This excludes this validator from performance tests**
`validation of date-time strings, invalid non-padded month dates`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`). **This excludes this validator from performance tests**
`validation of date-time strings, invalid non-padded day dates`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`). **This excludes this validator from performance tests**
`validation of e-mail addresses, a valid e-mail address`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`). **This excludes this validator from performance tests**
`validation of e-mail addresses, an invalid e-mail address`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`). **This excludes this validator from performance tests**
`validation of e-mail addresses, tilde in local part is valid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`). **This excludes this validator from performance tests**
`validation of e-mail addresses, tilde before local part is valid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`). **This excludes this validator from performance tests**
`validation of e-mail addresses, tilde after local part is valid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`). **This excludes this validator from performance tests**
`validation of e-mail addresses, dot before local part is not valid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`)
`validation of e-mail addresses, dot after local part is not valid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`)
`validation of e-mail addresses, two separated dots inside local part are valid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`). **This excludes this validator from performance tests**
`validation of e-mail addresses, two subsequent dots inside local part are not valid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`)
`validation of host names, a host name starting with an illegal character`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, a host name containing illegal characters`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, a host name with a component too long`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, starts with hyphen`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, ends with hyphen`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, starts with underscore`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, ends with underscore`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, contains underscore`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, exceeds maximum label length`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IP addresses, an IP address with too many components`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IP addresses, an IP address with out-of-range values`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IP addresses, an IP address without 4 components`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IP addresses, an IP address as an integer`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IP addresses, an IP address as an integer (decimal)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, a valid IPv6 address`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, an IPv6 address with out-of-range values`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, an IPv6 address with too many components`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, an IPv6 address containing illegal characters`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, no digits is valid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, leading colons is valid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, trailing colons is valid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, missing leading octet is invalid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, missing trailing octet is invalid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, missing leading octet with omitted octets later`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, two sets of double colons is invalid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, mixed format with the ipv4 section as decimal octets`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, mixed format with double colons between the sections`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, mixed format with ipv4 section with octet out of range`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, mixed format with ipv4 section with a hex octet`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, mixed format with leading double colons (ipv4-mapped ipv6 address)`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, triple colons is invalid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, 8 octets`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, insufficient octets without double colons`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, no colons is invalid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, ipv4 is not ipv6`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, ipv4 segment must have 4 octets`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, leading whitespace is invalid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`)
`validation of IPv6 addresses, trailing whitespace is invalid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`)
`validation of IPv6 addresses, netmask is not a part of ipv6 address`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, zone id is not a part of ipv6 address`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`)
`validation of IPv6 addresses, a long valid ipv6`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, a long invalid ipv6, below length limit, first`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, a long invalid ipv6, below length limit, second`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of URIs, a valid URL with anchor tag`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, a valid URL with anchor tag and parantheses`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, a valid URL with URL-encoded stuff`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, a valid puny-coded URL `|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, a valid URL with many special characters`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, a valid URL based on IPv4`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, a valid URL with ftp scheme`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, a valid URL for a simple text file`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, a valid URL `|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, a valid mailto URI`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, a valid newsgroup URI`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, a valid tel URI`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, a valid URN`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, an invalid protocol-relative URI Reference`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
`validation of URIs, an invalid relative URI Reference`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
`validation of URIs, an invalid URI`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
`validation of URIs, an invalid URI though valid URI reference`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
`validation of URIs, an invalid URI with spaces`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
`validation of URIs, an invalid URI with spaces and missing scheme`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
`validation of URIs, an invalid URI with comma in scheme`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
`Proper UTF-16 surrogate pair handling: pattern, matches empty`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: pattern, matches two`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: patternProperties, doesn't match two`|Expected result: `false` but validator returned: `true`
`root pointer ref, recursive mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`relative pointer ref to object, mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`relative pointer ref to array, mismatch array`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`escaped pointer ref, slash invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`escaped pointer ref, tilde invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`escaped pointer ref, percent invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`nested refs, nested ref invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ref overrides any sibling keywords, ref valid, maxItems ignored`|Expected result: `true` but validator returned: `false`
`ref overrides any sibling keywords, ref invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`remote ref, containing refs itself, remote ref invalid`|Expected result: `false` but validator returned: `true`
`property named $ref, containing an actual $ref, property named $ref invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`Recursive references between schemas, valid tree`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`)
`Recursive references between schemas, invalid tree`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`)
`refs with quote, object with strings is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`Location-independent identifier, mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`Location-independent identifier with absolute URI, mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`Location-independent identifier with base URI change in subschema, mismatch`|Expected result: `false` but validator returned: `true`
`remote ref, remote ref invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`fragment within remote ref, remote fragment invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ref within remote ref, ref within ref invalid`|Expected result: `false` but validator returned: `true`
`base URI change, base URI change ref invalid`|Expected result: `false` but validator returned: `true`
`base URI change - change folder, string is invalid`|Expected result: `false` but validator returned: `true`
`base URI change - change folder in subschema, string is invalid`|Expected result: `false` but validator returned: `true`
`root ref in remote ref, object is invalid`|Expected result: `false` but validator returned: `true`
`required validation, present required property is valid`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`required validation, non-present required property is invalid`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`required validation, ignores arrays`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`required validation, ignores strings`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`required validation, ignores other non-objects`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`required with escaped characters, object with all properties present is valid`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`required with escaped characters, object with some properties missing is invalid`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`type as array with one item, string is valid`|The schema failed to load(`Schema: 'type' attribute union length is 1 when it should be at least 2`). **This excludes this validator from performance tests**
`type as array with one item, number is invalid`|The schema failed to load(`Schema: 'type' attribute union length is 1 when it should be at least 2`). **This excludes this validator from performance tests**
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