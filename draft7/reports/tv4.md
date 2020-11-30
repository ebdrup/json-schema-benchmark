# [`tv4`](https://github.com/geraintluff/tv4) - test summary


# [`tv4`](https://github.com/geraintluff/tv4) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`tv4`](https://github.com/geraintluff/tv4) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`allOf with boolean schemas, some false, any value is invalid`|Expected result: `false` but validator returned: `true`
`allOf with boolean schemas, all false, any value is invalid`|Expected result: `false` but validator returned: `true`
`anyOf with boolean schemas, all false, any value is invalid`|Expected result: `false` but validator returned: `true`
`boolean schema 'false', number is invalid`|Expected result: `false` but validator returned: `true`
`boolean schema 'false', string is invalid`|Expected result: `false` but validator returned: `true`
`boolean schema 'false', boolean true is invalid`|Expected result: `false` but validator returned: `true`
`boolean schema 'false', boolean false is invalid`|Expected result: `false` but validator returned: `true`
`boolean schema 'false', null is invalid`|Expected result: `false` but validator returned: `true`
`boolean schema 'false', object is invalid`|Expected result: `false` but validator returned: `true`
`boolean schema 'false', empty object is invalid`|Expected result: `false` but validator returned: `true`
`boolean schema 'false', array is invalid`|Expected result: `false` but validator returned: `true`
`boolean schema 'false', empty array is invalid`|Expected result: `false` but validator returned: `true`
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
`dependencies with boolean subschemas, object with property having schema false is invalid`|Expected result: `false` but validator returned: `true`
`dependencies with boolean subschemas, object with both properties is invalid`|Expected result: `false` but validator returned: `true`
`exclusiveMaximum validation, boundary point is invalid`|Expected result: `false` but validator returned: `true`
`exclusiveMaximum validation, above the exclusiveMaximum is invalid`|Expected result: `false` but validator returned: `true`
`exclusiveMinimum validation, boundary point is invalid`|Expected result: `false` but validator returned: `true`
`exclusiveMinimum validation, below the exclusiveMinimum is invalid`|Expected result: `false` but validator returned: `true`
`if and then without else, invalid through then`|Expected result: `false` but validator returned: `true`
`if and else without then, invalid through else`|Expected result: `false` but validator returned: `true`
`validate against correct branch, then vs else, invalid through then`|Expected result: `false` but validator returned: `true`
`validate against correct branch, then vs else, invalid through else`|Expected result: `false` but validator returned: `true`
`if with boolean schema true, boolean schema true in if always chooses the then path (invalid)`|Expected result: `false` but validator returned: `true`
`if with boolean schema false, boolean schema false in if always chooses the else path (invalid)`|Expected result: `false` but validator returned: `true`
`if appears at the end when serialized (keyword processing sequence), no redirects to then and fails`|Expected result: `false` but validator returned: `true`
`if appears at the end when serialized (keyword processing sequence), invalid redirects to else and fails`|Expected result: `false` but validator returned: `true`
`items with boolean schema (false), any non-empty array is invalid`|Expected result: `false` but validator returned: `true`
`items with boolean schemas, array with two items is invalid`|Expected result: `false` but validator returned: `true`
`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`
`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`
`invalid instance should not raise error when float division = inf, always invalid, but naive implementations may raise an overflow error`|Expected result: `false` but validator returned: `true`
`not with boolean schema false, any value is valid`|Expected result: `true` but validator returned: `false`
`oneOf with boolean schemas, one true, any value is valid`|Expected result: `true` but validator returned: `false`
`float comparison with high precision, comparison works for high numbers`|Expected result: `false` but validator returned: `true`
`float comparison with high precision on negative numbers, comparison works for very negative numbers`|Expected result: `false` but validator returned: `true`
`validation of string-encoded content based on media type, an invalid JSON document`|Expected result: `false` but validator returned: `true`
`validation of binary string-encoding, an invalid base64 string (% is not a valid character)`|Expected result: `false` but validator returned: `true`
`validation of binary-encoded media type documents, a validly-encoded invalid JSON document`|Expected result: `false` but validator returned: `true`
`validation of binary-encoded media type documents, an invalid base64 string that is valid JSON`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, a invalid day in date-time string`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, an invalid offset in date-time string`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, an invalid date-time string`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of date-time strings, only RFC3339 not all of ISO 8601 are valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of date-time strings, invalid non-padded month dates`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of date-time strings, invalid non-padded day dates`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of date strings, an invalid date-time string`|Expected result: `false` but validator returned: `true`
`validation of date strings, only RFC3339 not all of ISO 8601 are valid`|Expected result: `false` but validator returned: `true`
`validation of date strings, invalidates non-padded month dates`|Expected result: `false` but validator returned: `true`
`validation of date strings, invalidates non-padded day dates`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, an invalid e-mail address`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of e-mail addresses, dot before local part is not valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, dot after local part is not valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, two subsequent dots inside local part are not valid`|Expected result: `false` but validator returned: `true`
`validation of host names, a host name starting with an illegal character`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, a host name containing illegal characters`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, a host name with a component too long`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, starts with hyphen`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, ends with hyphen`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, starts with underscore`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, ends with underscore`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, contains underscore`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, exceeds maximum label length`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of an internationalized e-mail addresses, an invalid idn e-mail address`|Expected result: `false` but validator returned: `true`
`validation of an internationalized e-mail addresses, an invalid e-mail address`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, illegal first char U+302E Hangul single dot tone mark`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, contains illegal char U+302E Hangul single dot tone mark`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, a host name with a component too long`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, invalid label, correct Punycode`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, invalid Punycode`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, U-label contains "--" in the 3rd and 4th position`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, U-label starts with a dash`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, U-label ends with a dash`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, U-label starts and ends with a dash`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Begins with a Spacing Combining Mark`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Begins with a Nonspacing Mark`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Begins with an Enclosing Mark`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Exceptions that are DISALLOWED, right-to-left chars`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Exceptions that are DISALLOWED, left-to-right chars`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, MIDDLE DOT with no preceding 'l'`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, MIDDLE DOT with nothing preceding`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, MIDDLE DOT with no following 'l'`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, MIDDLE DOT with nothing following`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Greek KERAIA not followed by Greek`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Greek KERAIA not followed by anything`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Hebrew GERESH not preceded by Hebrew`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Hebrew GERESH not preceded by anything`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Hebrew GERSHAYIM not preceded by Hebrew`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Hebrew GERSHAYIM not preceded by anything`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, KATAKANA MIDDLE DOT with no Hiragana, Katakana, or Han`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, KATAKANA MIDDLE DOT with no other characters`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Arabic-Indic digits mixed with Extended Arabic-Indic digits`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, ZERO WIDTH JOINER not preceded by Virama`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, ZERO WIDTH JOINER not preceded by anything`|Expected result: `false` but validator returned: `true`
`validation of IP addresses, an IP address with too many components`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IP addresses, an IP address with out-of-range values`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IP addresses, an IP address without 4 components`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IP addresses, an IP address as an integer`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IP addresses, an IP address as an integer (decimal)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, an IPv6 address with out-of-range values`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, an IPv6 address with too many components`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, an IPv6 address containing illegal characters`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, missing leading octet is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, missing trailing octet is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, missing leading octet with omitted octets later`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, two sets of double colons is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, mixed format with ipv4 section with octet out of range`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, mixed format with ipv4 section with a hex octet`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, triple colons is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, insufficient octets without double colons`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, no colons is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, ipv4 is not ipv6`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, ipv4 segment must have 4 octets`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, leading whitespace is invalid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, trailing whitespace is invalid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, netmask is not a part of ipv6 address`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, zone id is not a part of ipv6 address`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, a long invalid ipv6, below length limit, first`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, a long invalid ipv6, below length limit, second`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IRI References, an invalid IRI Reference`|Expected result: `false` but validator returned: `true`
`validation of IRI References, an invalid IRI fragment`|Expected result: `false` but validator returned: `true`
`validation of IRIs, an invalid IRI based on IPv6`|Expected result: `false` but validator returned: `true`
`validation of IRIs, an invalid relative IRI Reference`|Expected result: `false` but validator returned: `true`
`validation of IRIs, an invalid IRI`|Expected result: `false` but validator returned: `true`
`validation of IRIs, an invalid IRI though valid IRI reference`|Expected result: `false` but validator returned: `true`
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
`validation of regular expressions, a regular expression with unclosed parens is invalid`|Expected result: `false` but validator returned: `true`
`validation of Relative JSON Pointers (RJP), an invalid RJP that is a valid JSON Pointer`|Expected result: `false` but validator returned: `true`
`validation of Relative JSON Pointers (RJP), negative prefix`|Expected result: `false` but validator returned: `true`
`validation of time strings, an invalid time string`|Expected result: `false` but validator returned: `true`
`validation of time strings, only RFC3339 not all of ISO 8601 are valid`|Expected result: `false` but validator returned: `true`
`validation of URI References, an invalid URI Reference`|Expected result: `false` but validator returned: `true`
`validation of URI References, an invalid URI fragment`|Expected result: `false` but validator returned: `true`
`format: uri-template, an invalid uri-template`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid protocol-relative URI Reference`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of URIs, an invalid relative URI Reference`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of URIs, an invalid URI`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of URIs, an invalid URI though valid URI reference`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of URIs, an invalid URI with spaces`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of URIs, an invalid URI with spaces and missing scheme`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of URIs, an invalid URI with comma in scheme`|Expected result: `false` but validator returned: `true`
`Proper UTF-16 surrogate pair handling: pattern, matches empty`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: pattern, matches two`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: patternProperties, doesn't match two`|Expected result: `false` but validator returned: `true`
`patternProperties with boolean schemas, object with property matching schema false is invalid`|Expected result: `false` but validator returned: `true`
`patternProperties with boolean schemas, object with both properties is invalid`|Expected result: `false` but validator returned: `true`
`patternProperties with boolean schemas, object with a property matching both true and false is invalid`|Expected result: `false` but validator returned: `true`
`properties with boolean schema, only 'false' property present is invalid`|Expected result: `false` but validator returned: `true`
`properties with boolean schema, both properties present is invalid`|Expected result: `false` but validator returned: `true`
`propertyNames validation, some property names invalid`|Expected result: `false` but validator returned: `true`
`propertyNames with boolean schema false, object with any properties is invalid`|Expected result: `false` but validator returned: `true`
`remote ref, containing refs itself, remote ref invalid`|Expected result: `false` but validator returned: `true`
`$ref to boolean schema false, any value is invalid`|Expected result: `false` but validator returned: `true`
`Recursive references between schemas, invalid tree`|Expected result: `false` but validator returned: `true`
`Location-independent identifier, mismatch`|Expected result: `false` but validator returned: `true`
`Location-independent identifier with absolute URI, mismatch`|Expected result: `false` but validator returned: `true`
`Location-independent identifier with base URI change in subschema, mismatch`|Expected result: `false` but validator returned: `true`
`remote ref, remote ref invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`fragment within remote ref, remote fragment invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ref within remote ref, ref within ref invalid`|Expected result: `false` but validator returned: `true`
`base URI change, base URI change ref invalid`|Expected result: `false` but validator returned: `true`
`base URI change - change folder, string is invalid`|Expected result: `false` but validator returned: `true`
`base URI change - change folder in subschema, string is invalid`|Expected result: `false` but validator returned: `true`
`root ref in remote ref, object is invalid`|Expected result: `false` but validator returned: `true`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)