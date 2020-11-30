# [`jsonschema`](https://github.com/tdegrunt/jsonschema#readme) - test summary


# [`jsonschema`](https://github.com/tdegrunt/jsonschema#readme) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`jsonschema`](https://github.com/tdegrunt/jsonschema#readme) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`contains keyword validation, array without items matching schema is invalid`|Expected result: `false` but validator returned: `true`
`contains keyword validation, empty array is invalid`|Expected result: `false` but validator returned: `true`
`contains keyword with const keyword, array without item 5 is invalid`|Expected result: `false` but validator returned: `true`
`contains keyword with boolean schema true, empty array is invalid`|Expected result: `false` but validator returned: `true`
`contains keyword with boolean schema false, any non-empty array is invalid`|Expected result: `false` but validator returned: `true`
`contains keyword with boolean schema false, empty array is invalid`|Expected result: `false` but validator returned: `true`
`items + contains, matches items, does not match contains`|Expected result: `false` but validator returned: `true`
`items with boolean schema (false), any non-empty array is invalid`|Expected result: `false` but validator returned: `true`
`items with boolean schemas, array with two items is invalid`|Expected result: `false` but validator returned: `true`
`validation of string-encoded content based on media type, an invalid JSON document`|Expected result: `false` but validator returned: `true`
`validation of binary string-encoding, an invalid base64 string (% is not a valid character)`|Expected result: `false` but validator returned: `true`
`validation of binary-encoded media type documents, a validly-encoded invalid JSON document`|Expected result: `false` but validator returned: `true`
`validation of binary-encoded media type documents, an invalid base64 string that is valid JSON`|Expected result: `false` but validator returned: `true`
`all integers are multiples of 0.5, if overflow is handled, valid if optional overflow handling is implemented`|Expected result: `true` but validator returned: `false`
`validation of date-time strings, a invalid day in date-time string`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, an invalid offset in date-time string`|Expected result: `false` but validator returned: `true`
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
`validation of IPv6 addresses, leading whitespace is invalid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, trailing whitespace is invalid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, zone id is not a part of ipv6 address`|Expected result: `false` but validator returned: `true`
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
`validation of Relative JSON Pointers (RJP), an invalid RJP that is a valid JSON Pointer`|Expected result: `false` but validator returned: `true`
`validation of Relative JSON Pointers (RJP), negative prefix`|Expected result: `false` but validator returned: `true`
`validation of time strings, a valid time string`|Expected result: `true` but validator returned: `false`
`format: uri-template, an invalid uri-template`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid URI with comma in scheme`|Expected result: `false` but validator returned: `true`
`base URI change - change folder, number is valid`|Expected result: `true` but validator returned: `"no such schema <http://localhost:1234/folderInteger.json>"`
`base URI change - change folder, string is invalid`|Expected result: `false` but validator returned: `"no such schema <http://localhost:1234/folderInteger.json>"`
`base URI change - change folder in subschema, number is valid`|Expected result: `true` but validator returned: `"no such schema <http://localhost:1234/folderInteger.json>"`
`base URI change - change folder in subschema, string is invalid`|Expected result: `false` but validator returned: `"no such schema <http://localhost:1234/folderInteger.json>"`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)