# [`json-gate`](https://github.com/oferei/json-gate#readme) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`json-gate`](https://github.com/oferei/json-gate#readme) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`json-gate`](https://github.com/oferei/json-gate#readme) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
|`allOf, mismatch second`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
|`allOf, mismatch first`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
|`allOf, wrong type`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
|`allOf with base schema, valid`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
|`allOf with base schema, mismatch base schema`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
|`allOf with base schema, mismatch first allOf`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
|`allOf with base schema, mismatch second allOf`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
|`allOf with base schema, mismatch both`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
|`allOf simple types, mismatch one`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
|`anyOf, neither anyOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
|`anyOf with base schema, both anyOf invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
|`invalid type for default, valid when property is specified`|The schema failed to load(`Schema property 'foo': 'default' attribute value is not valid according to the schema: JSON object is an array when it should be an integer`). **This excludes this validator from performance tests**
|`invalid type for default, still valid when the invalid default is used`|The schema failed to load(`Schema property 'foo': 'default' attribute value is not valid according to the schema: JSON object is an array when it should be an integer`). **This excludes this validator from performance tests**
|`invalid string value for default, valid when property is specified`|The schema failed to load(`Schema property 'bar': 'default' attribute value is not valid according to the schema: JSON object: length is 3 when it should be at least 4`). **This excludes this validator from performance tests**
|`invalid string value for default, still valid when the invalid default is used`|The schema failed to load(`Schema property 'bar': 'default' attribute value is not valid according to the schema: JSON object: length is 3 when it should be at least 4`). **This excludes this validator from performance tests**
|`invalid definition, invalid definition schema`|Expected result: `false` but validator returned: `true`
|`multiple dependencies subschema, no dependency`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`enums in properties, both properties are valid`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
|`enums in properties, missing optional property is valid`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
|`enums in properties, missing required property is invalid`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
|`enums in properties, missing all properties is invalid`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
|`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`
|`maxProperties validation, too long is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
|`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`
|`minProperties validation, too short is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
|`by int, int by int fail`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
|`by number, 35 is not multiple of 1.5`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
|`by small number, 0.00751 is not multiple of 0.0001`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
|`not, disallowed`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
|`not multiple types, mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
|`not multiple types, other mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
|`not more complex schema, mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
|`forbidden property, property present`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
|`oneOf, both oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
|`oneOf, neither oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
|`oneOf with base schema, both oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
|`ECMA 262 regex non-compliance, ECMA 262 has no support for \Z anchor from .NET`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'regex' format`)
|`validation of date-time strings, a valid date-time string`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`)
|`validation of date-time strings, an invalid date-time string`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`)
|`validation of date-time strings, only RFC3339 not all of ISO 8601 are valid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`)
|`validation of URIs, a valid URL with anchor tag`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
|`validation of URIs, a valid URL with anchor tag and parantheses`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
|`validation of URIs, a valid URL with URL-encoded stuff`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
|`validation of URIs, a valid puny-coded URL `|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
|`validation of URIs, a valid URL with many special characters`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
|`validation of URIs, a valid URL based on IPv4`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
|`validation of URIs, a valid URL with ftp scheme`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
|`validation of URIs, a valid URL for a simple text file`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
|`validation of URIs, a valid URL `|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
|`validation of URIs, a valid mailto URI`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
|`validation of URIs, a valid newsgroup URI`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
|`validation of URIs, a valid tel URI`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
|`validation of URIs, a valid URN`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
|`validation of URIs, an invalid protocol-relative URI Reference`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
|`validation of URIs, an invalid relative URI Reference`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
|`validation of URIs, an invalid URI`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
|`validation of URIs, an invalid URI though valid URI reference`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
|`validation of URIs, an invalid URI with spaces`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
|`validation of URIs, an invalid URI with spaces and missing scheme`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
|`validation of e-mail addresses, a valid e-mail address`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`)
|`validation of e-mail addresses, an invalid e-mail address`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`)
|`validation of IP addresses, an IP address with too many components`|Expected result: `false` but validator returned: `true`
|`validation of IP addresses, an IP address with out-of-range values`|Expected result: `false` but validator returned: `true`
|`validation of IP addresses, an IP address without 4 components`|Expected result: `false` but validator returned: `true`
|`validation of IP addresses, an IP address as an integer`|Expected result: `false` but validator returned: `true`
|`validation of IPv6 addresses, a valid IPv6 address`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`)
|`validation of IPv6 addresses, an IPv6 address with out-of-range values`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`)
|`validation of IPv6 addresses, an IPv6 address with too many components`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`)
|`validation of IPv6 addresses, an IPv6 address containing illegal characters`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`)
|`validation of host names, a host name starting with an illegal character`|Expected result: `false` but validator returned: `true`
|`validation of host names, a host name containing illegal characters`|Expected result: `false` but validator returned: `true`
|`validation of host names, a host name with a component too long`|Expected result: `false` but validator returned: `true`
|`root pointer ref, recursive mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
|`relative pointer ref to object, mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
|`relative pointer ref to array, mismatch array`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
|`escaped pointer ref, slash invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
|`escaped pointer ref, tilda invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
|`escaped pointer ref, percent invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
|`nested refs, nested ref invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
|`ref overrides any sibling keywords, ref valid, maxItems ignored`|Expected result: `true` but validator returned: `false`
|`ref overrides any sibling keywords, ref invalid`|Expected result: `false` but validator returned: `true`
|`remote ref, containing refs itself, remote ref invalid`|Expected result: `false` but validator returned: `true`
|`Recursive references between schemas, valid tree`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`)
|`Recursive references between schemas, invalid tree`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`)
|`remote ref, remote ref invalid`|Expected result: `false` but validator returned: `true`
|`fragment within remote ref, remote fragment invalid`|Expected result: `false` but validator returned: `true`
|`ref within remote ref, ref within ref invalid`|Expected result: `false` but validator returned: `true`
|`base URI change, base URI change ref invalid`|Expected result: `false` but validator returned: `true`
|`base URI change - change folder, string is invalid`|Expected result: `false` but validator returned: `true`
|`base URI change - change folder in subschema, string is invalid`|Expected result: `false` but validator returned: `true`
|`root ref in remote ref, object is invalid`|Expected result: `false` but validator returned: `true`
|`required validation, present required property is valid`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
|`required validation, non-present required property is invalid`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
|`required validation, ignores arrays`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
|`required validation, ignores strings`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
|`required validation, ignores other non-objects`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)