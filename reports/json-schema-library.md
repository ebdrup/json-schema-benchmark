# [`json-schema-library`](https://github.com/sagold/json-schema-library) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`json-schema-library`](https://github.com/sagold/json-schema-library) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`json-schema-library`](https://github.com/sagold/json-schema-library) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
|`additionalItems as schema, additional items match schema`|Expected result: `true` but validator returned: `"Invalid json-schema at #: [\n  null,\n  2,\n  3,\n  4\n]"`. **This excludes this validator from performance tests**
|`additionalItems as schema, additional items do not match schema`|Expected result: `false` but validator returned: `"Invalid json-schema at #: [\n  null,\n  2,\n  3,\n  \"foo\"\n]"`. **This excludes this validator from performance tests**
|`items is schema, no additionalItems, all items match schema`|Expected result: `true` but validator returned: `"Invalid json-schema at #: [\n  1,\n  2,\n  3,\n  4,\n  5\n]"`. **This excludes this validator from performance tests**
|`array of items with no additionalItems, fewer number of items present`|Expected result: `true` but validator returned: `"Invalid json-schema at #: [\n  1,\n  2\n]"`. **This excludes this validator from performance tests**
|`array of items with no additionalItems, equal number of items present`|Expected result: `true` but validator returned: `"Invalid json-schema at #: [\n  1,\n  2,\n  3\n]"`. **This excludes this validator from performance tests**
|`array of items with no additionalItems, additional items are not permitted`|Expected result: `false` but validator returned: `"Invalid json-schema at #: [\n  1,\n  2,\n  3,\n  4\n]"`. **This excludes this validator from performance tests**
|`additionalItems as false without items, items defaults to empty schema so everything is valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: [\n  1,\n  2,\n  3,\n  4,\n  5\n]"`. **This excludes this validator from performance tests**
|`additionalItems as false without items, ignores non-arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`additionalItems are allowed by default, only the first item is validated`|Expected result: `true` but validator returned: `"Invalid json-schema at #: [\n  1,\n  \"foo\",\n  false\n]"`. **This excludes this validator from performance tests**
|`additionalProperties being false does not allow other properties, no additional properties is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`additionalProperties being false does not allow other properties, ignores arrays`|Expected result: `true` but validator returned: `"Invalid json-schema at #: [\n  1,\n  2,\n  3\n]"`. **This excludes this validator from performance tests**
|`additionalProperties being false does not allow other properties, ignores strings`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"foobarbaz\""`. **This excludes this validator from performance tests**
|`additionalProperties being false does not allow other properties, ignores other non-objects`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 12"`. **This excludes this validator from performance tests**
|`additionalProperties being false does not allow other properties, patternProperties are not additional properties`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`additionalProperties allows a schema which should validate, no additional properties is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`additionalProperties allows a schema which should validate, an additional valid property is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`additionalProperties can exist by itself, an additional valid property is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`additionalProperties are allowed by default, additional properties are allowed`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`allOf, allOf`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`allOf with base schema, valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`allOf simple types, valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 25"`. **This excludes this validator from performance tests**
|`allOf simple types, mismatch one`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 35"`. **This excludes this validator from performance tests**
|`anyOf, first anyOf valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 1"`. **This excludes this validator from performance tests**
|`anyOf, second anyOf valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 2.5"`. **This excludes this validator from performance tests**
|`anyOf, both anyOf valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 3"`. **This excludes this validator from performance tests**
|`anyOf, neither anyOf valid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 1.5"`. **This excludes this validator from performance tests**
|`anyOf with base schema, mismatch base schema`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 3"`. **This excludes this validator from performance tests**
|`anyOf with base schema, one anyOf valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"foobar\""`. **This excludes this validator from performance tests**
|`anyOf with base schema, both anyOf invalid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"foo\""`. **This excludes this validator from performance tests**
|`invalid type for default, valid when property is specified`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`invalid type for default, still valid when the invalid default is used`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`invalid string value for default, valid when property is specified`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`invalid string value for default, still valid when the invalid default is used`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`valid definition, valid definition schema`|Expected result: `true` but validator returned: `false`
|`dependencies, neither`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`dependencies, nondependant`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`dependencies, with dependency`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`dependencies, ignores arrays`|Expected result: `true` but validator returned: `"Invalid json-schema at #: [\n  \"bar\"\n]"`. **This excludes this validator from performance tests**
|`dependencies, ignores strings`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"foobar\""`. **This excludes this validator from performance tests**
|`dependencies, ignores other non-objects`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 12"`. **This excludes this validator from performance tests**
|`multiple dependencies, neither`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`multiple dependencies, nondependants`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`multiple dependencies, with dependencies`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`multiple dependencies subschema, valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`multiple dependencies subschema, no dependency`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`simple enum validation, one of the enum is valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 1"`. **This excludes this validator from performance tests**
|`simple enum validation, something else is invalid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 4"`. **This excludes this validator from performance tests**
|`heterogeneous enum validation, one of the enum is valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: []"`. **This excludes this validator from performance tests**
|`heterogeneous enum validation, something else is invalid`|Expected result: `false` but validator returned: `"Cannot read property '__compiled' of null"`
|`enums in properties, both properties are valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`enums in properties, missing optional property is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`a schema given for items, valid items`|Expected result: `true` but validator returned: `"Invalid json-schema at #: [\n  1,\n  2,\n  3\n]"`. **This excludes this validator from performance tests**
|`a schema given for items, wrong type of items`|Expected result: `false` but validator returned: `"Invalid json-schema at #: [\n  1,\n  \"x\"\n]"`. **This excludes this validator from performance tests**
|`a schema given for items, ignores non-arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`a schema given for items, JavaScript pseudo-array is valid`|Expected result: `true` but validator returned: `false`
|`an array of schemas for items, correct types`|Expected result: `true` but validator returned: `"Invalid json-schema at #: [\n  1,\n  \"foo\"\n]"`
|`an array of schemas for items, wrong types`|Expected result: `false` but validator returned: `"Invalid json-schema at #: [\n  \"foo\",\n  1\n]"`
|`an array of schemas for items, incomplete array of items`|Expected result: `true` but validator returned: `"Invalid json-schema at #: [\n  1\n]"`
|`an array of schemas for items, array with additional items`|Expected result: `true` but validator returned: `"Invalid json-schema at #: [\n  1,\n  \"foo\",\n  true\n]"`
|`an array of schemas for items, empty array`|Expected result: `true` but validator returned: `"Invalid json-schema at #: []"`
|`an array of schemas for items, JavaScript pseudo-array is valid`|Expected result: `true` but validator returned: `false`
|`maxItems validation, shorter is valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: [\n  1\n]"`. **This excludes this validator from performance tests**
|`maxItems validation, exact length is valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: [\n  1,\n  2\n]"`. **This excludes this validator from performance tests**
|`maxItems validation, too long is invalid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: [\n  1,\n  2,\n  3\n]"`. **This excludes this validator from performance tests**
|`maxItems validation, ignores non-arrays`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"foobar\""`. **This excludes this validator from performance tests**
|`maxLength validation, shorter is valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"f\""`. **This excludes this validator from performance tests**
|`maxLength validation, exact length is valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"fo\""`. **This excludes this validator from performance tests**
|`maxLength validation, too long is invalid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"foo\""`. **This excludes this validator from performance tests**
|`maxLength validation, ignores non-strings`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 100"`. **This excludes this validator from performance tests**
|`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"💩💩\""`
|`maxProperties validation, shorter is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`maxProperties validation, exact length is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`maxProperties validation, ignores arrays`|Expected result: `true` but validator returned: `"Invalid json-schema at #: [\n  1,\n  2,\n  3\n]"`. **This excludes this validator from performance tests**
|`maxProperties validation, ignores strings`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"foobar\""`. **This excludes this validator from performance tests**
|`maxProperties validation, ignores other non-objects`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 12"`. **This excludes this validator from performance tests**
|`maximum validation, below the maximum is valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 2.6"`. **This excludes this validator from performance tests**
|`maximum validation, boundary point is valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 3"`. **This excludes this validator from performance tests**
|`maximum validation, above the maximum is invalid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 3.5"`. **This excludes this validator from performance tests**
|`maximum validation, ignores non-numbers`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"x\""`. **This excludes this validator from performance tests**
|`exclusiveMaximum validation, below the maximum is still valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 2.2"`. **This excludes this validator from performance tests**
|`exclusiveMaximum validation, boundary point is invalid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 3"`. **This excludes this validator from performance tests**
|`minItems validation, longer is valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: [\n  1,\n  2\n]"`. **This excludes this validator from performance tests**
|`minItems validation, exact length is valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: [\n  1\n]"`. **This excludes this validator from performance tests**
|`minItems validation, too short is invalid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: []"`. **This excludes this validator from performance tests**
|`minItems validation, ignores non-arrays`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"\""`. **This excludes this validator from performance tests**
|`minLength validation, longer is valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"foo\""`. **This excludes this validator from performance tests**
|`minLength validation, exact length is valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"fo\""`. **This excludes this validator from performance tests**
|`minLength validation, too short is invalid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"f\""`. **This excludes this validator from performance tests**
|`minLength validation, ignores non-strings`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 1"`. **This excludes this validator from performance tests**
|`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"💩\""`
|`minProperties validation, longer is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`minProperties validation, exact length is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`minProperties validation, ignores arrays`|Expected result: `true` but validator returned: `"Invalid json-schema at #: []"`. **This excludes this validator from performance tests**
|`minProperties validation, ignores strings`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"\""`. **This excludes this validator from performance tests**
|`minProperties validation, ignores other non-objects`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 12"`. **This excludes this validator from performance tests**
|`minimum validation, above the minimum is valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 2.6"`. **This excludes this validator from performance tests**
|`minimum validation, boundary point is valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 1.1"`. **This excludes this validator from performance tests**
|`minimum validation, below the minimum is invalid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 0.6"`. **This excludes this validator from performance tests**
|`minimum validation, ignores non-numbers`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"x\""`. **This excludes this validator from performance tests**
|`exclusiveMinimum validation, above the minimum is still valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 1.2"`. **This excludes this validator from performance tests**
|`exclusiveMinimum validation, boundary point is invalid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 1.1"`. **This excludes this validator from performance tests**
|`by int, int by int`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 10"`. **This excludes this validator from performance tests**
|`by int, int by int fail`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 7"`. **This excludes this validator from performance tests**
|`by int, ignores non-numbers`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"foo\""`. **This excludes this validator from performance tests**
|`by number, zero is multiple of anything`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 0"`. **This excludes this validator from performance tests**
|`by number, 4.5 is multiple of 1.5`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 4.5"`. **This excludes this validator from performance tests**
|`by number, 35 is not multiple of 1.5`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 35"`. **This excludes this validator from performance tests**
|`by small number, 0.0075 is multiple of 0.0001`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 0.0075"`. **This excludes this validator from performance tests**
|`by small number, 0.00751 is not multiple of 0.0001`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 0.00751"`. **This excludes this validator from performance tests**
|`not, allowed`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"foo\""`. **This excludes this validator from performance tests**
|`not, disallowed`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 1"`. **This excludes this validator from performance tests**
|`not multiple types, valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"foo\""`. **This excludes this validator from performance tests**
|`not multiple types, mismatch`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 1"`. **This excludes this validator from performance tests**
|`not multiple types, other mismatch`|Expected result: `false` but validator returned: `"Invalid json-schema at #: true"`. **This excludes this validator from performance tests**
|`not more complex schema, match`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 1"`. **This excludes this validator from performance tests**
|`not more complex schema, other match`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`forbidden property, property absent`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`oneOf, first oneOf valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 1"`. **This excludes this validator from performance tests**
|`oneOf, second oneOf valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 2.5"`. **This excludes this validator from performance tests**
|`oneOf, both oneOf valid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 3"`. **This excludes this validator from performance tests**
|`oneOf, neither oneOf valid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 1.5"`. **This excludes this validator from performance tests**
|`oneOf with base schema, mismatch base schema`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 3"`. **This excludes this validator from performance tests**
|`oneOf with base schema, one oneOf valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"foobar\""`. **This excludes this validator from performance tests**
|`oneOf with base schema, both oneOf valid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"foo\""`. **This excludes this validator from performance tests**
|`integer, a bignum is an integer`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 1.2345678910111214e+52"`
|`number, a bignum is a number`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 9.824928374923492e+52"`
|`integer, a negative bignum is an integer`|Expected result: `true` but validator returned: `"Invalid json-schema at #: -1.2345678910111214e+52"`
|`number, a negative bignum is a number`|Expected result: `true` but validator returned: `"Invalid json-schema at #: -9.824928374923492e+52"`
|`string, a bignum is not a string`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 9.824928374923492e+52"`
|`integer comparison, comparison works for high numbers`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 18446744073709552000"`
|`float comparison with high precision, comparison works for high numbers`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 9.727837981879871e+26"`
|`integer comparison, comparison works for very negative numbers`|Expected result: `true` but validator returned: `"Invalid json-schema at #: -18446744073709552000"`
|`float comparison with high precision on negative numbers, comparison works for very negative numbers`|Expected result: `false` but validator returned: `"Invalid json-schema at #: -9.727837981879871e+26"`
|`ECMA 262 regex non-compliance, ECMA 262 has no support for \Z anchor from .NET`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"^\\\\S(|(.|\\\\n)*\\\\S)\\\\Z\""`
|`validation of date-time strings, a valid date-time string`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"1963-06-19T08:30:06.283185Z\""`
|`validation of date-time strings, an invalid date-time string`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"06/19/1963 08:30:06 PST\""`
|`validation of date-time strings, only RFC3339 not all of ISO 8601 are valid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"2013-350T01:01:01\""`
|`validation of URIs, a valid URL with anchor tag`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"http://foo.bar/?baz=qux#quux\""`
|`validation of URIs, a valid URL with anchor tag and parantheses`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"http://foo.com/blah_(wikipedia)_blah#cite-1\""`
|`validation of URIs, a valid URL with URL-encoded stuff`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"http://foo.bar/?q=Test%20URL-encoded%20stuff\""`
|`validation of URIs, a valid puny-coded URL `|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"http://xn--nw2a.xn--j6w193g/\""`
|`validation of URIs, a valid URL with many special characters`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"http://-.~_!$&'()*+,;=:%40:80%2f::::::@example.com\""`
|`validation of URIs, a valid URL based on IPv4`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"http://223.255.255.254\""`
|`validation of URIs, a valid URL with ftp scheme`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"ftp://ftp.is.co.za/rfc/rfc1808.txt\""`
|`validation of URIs, a valid URL for a simple text file`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"http://www.ietf.org/rfc/rfc2396.txt\""`
|`validation of URIs, a valid URL `|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"ldap://[2001:db8::7]/c=GB?objectClass?one\""`
|`validation of URIs, a valid mailto URI`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"mailto:John.Doe@example.com\""`
|`validation of URIs, a valid newsgroup URI`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"news:comp.infosystems.www.servers.unix\""`
|`validation of URIs, a valid tel URI`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"tel:+1-816-555-1212\""`
|`validation of URIs, a valid URN`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"urn:oasis:names:specification:docbook:dtd:xml:4.1.2\""`
|`validation of URIs, an invalid protocol-relative URI Reference`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"//foo.bar/?baz=qux#quux\""`
|`validation of URIs, an invalid relative URI Reference`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"/abc\""`
|`validation of URIs, an invalid URI`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"\\\\\\\\WINDOWS\\\\fileshare\""`
|`validation of URIs, an invalid URI though valid URI reference`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"abc\""`
|`validation of URIs, an invalid URI with spaces`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"http:// shouldfail.com\""`
|`validation of URIs, an invalid URI with spaces and missing scheme`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \":// should fail\""`
|`validation of e-mail addresses, a valid e-mail address`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"joe.bloggs@example.com\""`
|`validation of e-mail addresses, an invalid e-mail address`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"2962\""`
|`validation of IP addresses, a valid IP address`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"192.168.0.1\""`
|`validation of IP addresses, an IP address with too many components`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"127.0.0.0.1\""`
|`validation of IP addresses, an IP address with out-of-range values`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"256.256.256.256\""`
|`validation of IP addresses, an IP address without 4 components`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"127.0\""`
|`validation of IP addresses, an IP address as an integer`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"0x7f000001\""`
|`validation of IPv6 addresses, a valid IPv6 address`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"::1\""`
|`validation of IPv6 addresses, an IPv6 address with out-of-range values`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"12345::\""`
|`validation of IPv6 addresses, an IPv6 address with too many components`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"1:1:1:1:1:1:1:1:1:1:1:1:1:1:1:1\""`
|`validation of IPv6 addresses, an IPv6 address containing illegal characters`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"::laptop\""`
|`validation of host names, a valid host name`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"www.example.com\""`
|`validation of host names, a host name starting with an illegal character`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"-a-host-name-that-starts-with--\""`
|`validation of host names, a host name containing illegal characters`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"not_a_valid_host_name\""`
|`validation of host names, a host name with a component too long`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"a-vvvvvvvvvvvvvvvveeeeeeeeeeeeeeeerrrrrrrrrrrrrrrryyyyyyyyyyyyyyyy-long-host-name-component\""`
|`pattern validation, a matching pattern is valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"aaa\""`. **This excludes this validator from performance tests**
|`pattern validation, a non-matching pattern is invalid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"abc\""`. **This excludes this validator from performance tests**
|`pattern validation, ignores non-strings`|Expected result: `true` but validator returned: `"Invalid json-schema at #: true"`. **This excludes this validator from performance tests**
|`pattern is not anchored, matches a substring`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"xxaayy\""`. **This excludes this validator from performance tests**
|`patternProperties validates properties matching a regex, a single valid match is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`patternProperties validates properties matching a regex, multiple valid matches is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`patternProperties validates properties matching a regex, ignores arrays`|Expected result: `true` but validator returned: `"Invalid json-schema at #: []"`. **This excludes this validator from performance tests**
|`patternProperties validates properties matching a regex, ignores strings`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"\""`. **This excludes this validator from performance tests**
|`patternProperties validates properties matching a regex, ignores other non-objects`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 12"`. **This excludes this validator from performance tests**
|`multiple simultaneous patternProperties are validated, a single valid match is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`multiple simultaneous patternProperties are validated, a simultaneous match is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`multiple simultaneous patternProperties are validated, multiple matches is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`regexes are not anchored by default and are case sensitive, non recognized members are ignored`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`regexes are not anchored by default and are case sensitive, regexes are case sensitive`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`object properties validation, both properties present and valid is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`object properties validation, doesn't invalidate other properties`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`object properties validation, ignores arrays`|Expected result: `true` but validator returned: `"Invalid json-schema at #: []"`. **This excludes this validator from performance tests**
|`object properties validation, ignores other non-objects`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 12"`. **This excludes this validator from performance tests**
|`properties, patternProperties, additionalProperties interaction, property validates property`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`properties, patternProperties, additionalProperties interaction, patternProperty validates nonproperty`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`properties, patternProperties, additionalProperties interaction, additionalProperty ignores property`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`properties, patternProperties, additionalProperties interaction, additionalProperty validates others`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`root pointer ref, match`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`root pointer ref, recursive match`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`relative pointer ref to object, match`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`relative pointer ref to array, match array`|Expected result: `true` but validator returned: `"Invalid json-schema at #: [\n  1,\n  2\n]"`. **This excludes this validator from performance tests**
|`relative pointer ref to array, mismatch array`|Expected result: `false` but validator returned: `"Invalid json-schema at #: [\n  1,\n  \"foo\"\n]"`. **This excludes this validator from performance tests**
|`escaped pointer ref, slash valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`escaped pointer ref, tilda valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`escaped pointer ref, percent valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`nested refs, nested ref valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 5"`. **This excludes this validator from performance tests**
|`nested refs, nested ref invalid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"a\""`. **This excludes this validator from performance tests**
|`ref overrides any sibling keywords, ref valid`|Expected result: `true` but validator returned: `false`
|`ref overrides any sibling keywords, ref valid, maxItems ignored`|Expected result: `true` but validator returned: `false`
|`remote ref, containing refs itself, remote ref valid`|Expected result: `true` but validator returned: `false`
|`property named $ref that is not a reference, property named $ref valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`property named $ref that is not a reference, property named $ref invalid`|Expected result: `false` but validator returned: `"$ref.includes is not a function"`. **This excludes this validator from performance tests**
|`Recursive references between schemas, valid tree`|Expected result: `true` but validator returned: `false`
|`remote ref, remote ref valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 1"`
|`remote ref, remote ref invalid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"a\""`
|`fragment within remote ref, remote fragment valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 1"`
|`fragment within remote ref, remote fragment invalid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"a\""`
|`ref within remote ref, ref within ref valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 1"`
|`ref within remote ref, ref within ref invalid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"a\""`
|`base URI change, base URI change ref valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: [\n  [\n    1\n  ]\n]"`
|`base URI change, base URI change ref invalid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: [\n  [\n    \"a\"\n  ]\n]"`
|`base URI change - change folder, number is valid`|Expected result: `true` but validator returned: `false`
|`base URI change - change folder in subschema, number is valid`|Expected result: `true` but validator returned: `false`
|`root ref in remote ref, string is valid`|Expected result: `true` but validator returned: `false`
|`root ref in remote ref, null is valid`|Expected result: `true` but validator returned: `false`
|`required validation, present required property is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`required validation, ignores arrays`|Expected result: `true` but validator returned: `"Invalid json-schema at #: []"`. **This excludes this validator from performance tests**
|`required validation, ignores strings`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"\""`. **This excludes this validator from performance tests**
|`required validation, ignores other non-objects`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 12"`. **This excludes this validator from performance tests**
|`required default validation, not required by default`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`integer type matches integers, an integer is an integer`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 1"`. **This excludes this validator from performance tests**
|`integer type matches integers, a float is not an integer`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 1.1"`. **This excludes this validator from performance tests**
|`integer type matches integers, a string is not an integer`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"foo\""`. **This excludes this validator from performance tests**
|`integer type matches integers, a string is still not an integer, even if it looks like one`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"1\""`. **This excludes this validator from performance tests**
|`integer type matches integers, an array is not an integer`|Expected result: `false` but validator returned: `"Invalid json-schema at #: []"`. **This excludes this validator from performance tests**
|`integer type matches integers, a boolean is not an integer`|Expected result: `false` but validator returned: `"Invalid json-schema at #: true"`. **This excludes this validator from performance tests**
|`integer type matches integers, null is not an integer`|Expected result: `false` but validator returned: `"Cannot read property '__compiled' of null"`. **This excludes this validator from performance tests**
|`number type matches numbers, an integer is a number`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 1"`. **This excludes this validator from performance tests**
|`number type matches numbers, a float is a number`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 1.1"`. **This excludes this validator from performance tests**
|`number type matches numbers, a string is not a number`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"foo\""`. **This excludes this validator from performance tests**
|`number type matches numbers, a string is still not a number, even if it looks like one`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"1\""`. **This excludes this validator from performance tests**
|`number type matches numbers, an array is not a number`|Expected result: `false` but validator returned: `"Invalid json-schema at #: []"`. **This excludes this validator from performance tests**
|`number type matches numbers, a boolean is not a number`|Expected result: `false` but validator returned: `"Invalid json-schema at #: true"`. **This excludes this validator from performance tests**
|`number type matches numbers, null is not a number`|Expected result: `false` but validator returned: `"Cannot read property '__compiled' of null"`. **This excludes this validator from performance tests**
|`string type matches strings, 1 is not a string`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 1"`. **This excludes this validator from performance tests**
|`string type matches strings, a float is not a string`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 1.1"`. **This excludes this validator from performance tests**
|`string type matches strings, a string is a string`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"foo\""`. **This excludes this validator from performance tests**
|`string type matches strings, a string is still a string, even if it looks like a number`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"1\""`. **This excludes this validator from performance tests**
|`string type matches strings, an array is not a string`|Expected result: `false` but validator returned: `"Invalid json-schema at #: []"`. **This excludes this validator from performance tests**
|`string type matches strings, a boolean is not a string`|Expected result: `false` but validator returned: `"Invalid json-schema at #: true"`. **This excludes this validator from performance tests**
|`string type matches strings, null is not a string`|Expected result: `false` but validator returned: `"Cannot read property '__compiled' of null"`. **This excludes this validator from performance tests**
|`object type matches objects, an integer is not an object`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 1"`. **This excludes this validator from performance tests**
|`object type matches objects, a float is not an object`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 1.1"`. **This excludes this validator from performance tests**
|`object type matches objects, a string is not an object`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"foo\""`. **This excludes this validator from performance tests**
|`object type matches objects, an object is an object`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`object type matches objects, an array is not an object`|Expected result: `false` but validator returned: `"Invalid json-schema at #: []"`. **This excludes this validator from performance tests**
|`object type matches objects, a boolean is not an object`|Expected result: `false` but validator returned: `"Invalid json-schema at #: true"`. **This excludes this validator from performance tests**
|`object type matches objects, null is not an object`|Expected result: `false` but validator returned: `"Cannot read property '__compiled' of null"`. **This excludes this validator from performance tests**
|`array type matches arrays, an integer is not an array`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 1"`. **This excludes this validator from performance tests**
|`array type matches arrays, a float is not an array`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 1.1"`. **This excludes this validator from performance tests**
|`array type matches arrays, a string is not an array`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"foo\""`. **This excludes this validator from performance tests**
|`array type matches arrays, an array is an array`|Expected result: `true` but validator returned: `"Invalid json-schema at #: []"`. **This excludes this validator from performance tests**
|`array type matches arrays, a boolean is not an array`|Expected result: `false` but validator returned: `"Invalid json-schema at #: true"`. **This excludes this validator from performance tests**
|`array type matches arrays, null is not an array`|Expected result: `false` but validator returned: `"Cannot read property '__compiled' of null"`. **This excludes this validator from performance tests**
|`boolean type matches booleans, an integer is not a boolean`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 1"`. **This excludes this validator from performance tests**
|`boolean type matches booleans, a float is not a boolean`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 1.1"`. **This excludes this validator from performance tests**
|`boolean type matches booleans, a string is not a boolean`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"foo\""`. **This excludes this validator from performance tests**
|`boolean type matches booleans, an array is not a boolean`|Expected result: `false` but validator returned: `"Invalid json-schema at #: []"`. **This excludes this validator from performance tests**
|`boolean type matches booleans, a boolean is a boolean`|Expected result: `true` but validator returned: `"Invalid json-schema at #: true"`. **This excludes this validator from performance tests**
|`boolean type matches booleans, null is not a boolean`|Expected result: `false` but validator returned: `"Cannot read property '__compiled' of null"`. **This excludes this validator from performance tests**
|`null type matches only the null object, an integer is not null`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 1"`. **This excludes this validator from performance tests**
|`null type matches only the null object, a float is not null`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 1.1"`. **This excludes this validator from performance tests**
|`null type matches only the null object, a string is not null`|Expected result: `false` but validator returned: `"Invalid json-schema at #: \"foo\""`. **This excludes this validator from performance tests**
|`null type matches only the null object, an array is not null`|Expected result: `false` but validator returned: `"Invalid json-schema at #: []"`. **This excludes this validator from performance tests**
|`null type matches only the null object, a boolean is not null`|Expected result: `false` but validator returned: `"Invalid json-schema at #: true"`. **This excludes this validator from performance tests**
|`null type matches only the null object, null is null`|Expected result: `true` but validator returned: `"Cannot read property '__compiled' of null"`. **This excludes this validator from performance tests**
|`multiple types can be specified in an array, an integer is valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: 1"`. **This excludes this validator from performance tests**
|`multiple types can be specified in an array, a string is valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: \"foo\""`. **This excludes this validator from performance tests**
|`multiple types can be specified in an array, a float is invalid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: 1.1"`. **This excludes this validator from performance tests**
|`multiple types can be specified in an array, an array is invalid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: []"`. **This excludes this validator from performance tests**
|`multiple types can be specified in an array, a boolean is invalid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: true"`. **This excludes this validator from performance tests**
|`multiple types can be specified in an array, null is invalid`|Expected result: `false` but validator returned: `"Cannot read property '__compiled' of null"`. **This excludes this validator from performance tests**
|`uniqueItems validation, unique array of integers is valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: [\n  1,\n  2\n]"`
|`uniqueItems validation, non-unique array of integers is invalid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: [\n  1,\n  1\n]"`
|`uniqueItems validation, numbers are unique if mathematically unequal`|Expected result: `false` but validator returned: `"Invalid json-schema at #: [\n  1,\n  1,\n  1\n]"`
|`uniqueItems validation, unique array of objects is valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: [\n  {\n    \"foo\": \"bar\"\n  },\n  {\n    \"foo\": \"baz\"\n  }\n]"`
|`uniqueItems validation, non-unique array of objects is invalid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: [\n  {\n    \"foo\": \"bar\"\n  },\n  {\n    \"foo\": \"bar\"\n  }\n]"`
|`uniqueItems validation, unique array of nested objects is valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: [\n  {\n    \"foo\": {\n      \"bar\": {\n        \"baz\": true\n      }\n    }\n  },\n  {\n    \"foo\": {\n      \"bar\": {\n        \"baz\": false\n      }\n    }\n  }\n]"`
|`uniqueItems validation, non-unique array of nested objects is invalid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: [\n  {\n    \"foo\": {\n      \"bar\": {\n        \"baz\": true\n      }\n    }\n  },\n  {\n    \"foo\": {\n      \"bar\": {\n        \"baz\": true\n      }\n    }\n  }\n]"`
|`uniqueItems validation, unique array of arrays is valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: [\n  [\n    \"foo\"\n  ],\n  [\n    \"bar\"\n  ]\n]"`
|`uniqueItems validation, non-unique array of arrays is invalid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: [\n  [\n    \"foo\"\n  ],\n  [\n    \"foo\"\n  ]\n]"`
|`uniqueItems validation, 1 and true are unique`|Expected result: `true` but validator returned: `"Invalid json-schema at #: [\n  1,\n  true\n]"`
|`uniqueItems validation, 0 and false are unique`|Expected result: `true` but validator returned: `"Invalid json-schema at #: [\n  0,\n  false\n]"`
|`uniqueItems validation, unique heterogeneous types are valid`|Expected result: `true` but validator returned: `"Invalid json-schema at #: [\n  {},\n  [\n    1\n  ],\n  true,\n  null,\n  1\n]"`
|`uniqueItems validation, non-unique heterogeneous types are invalid`|Expected result: `false` but validator returned: `"Invalid json-schema at #: [\n  {},\n  [\n    1\n  ],\n  true,\n  null,\n  {},\n  1\n]"`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)