# [`djv`](https://github.com/korzio/djv#readme) - test summary


# [`djv`](https://github.com/korzio/djv#readme) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`djv`](https://github.com/korzio/djv#readme) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`const with false does not match 0, false is valid`|Expected result: `true` but validator returned: `false`
`const with true does not match 1, true is valid`|Expected result: `true` but validator returned: `false`
`const with [false] does not match [0], [false] is valid`|Expected result: `true` but validator returned: `false`
`const with [true] does not match [1], [true] is valid`|Expected result: `true` but validator returned: `false`
`const with {"a": false} does not match {"a": 0}, {"a": false} is valid`|Expected result: `true` but validator returned: `false`
`const with {"a": true} does not match {"a": 1}, {"a": true} is valid`|Expected result: `true` but validator returned: `false`
`const with 0 does not match other zero-like types, false is invalid`|Expected result: `false` but validator returned: `true`
`const with 1 does not match true, true is invalid`|Expected result: `false` but validator returned: `true`
`items + contains, matches items, does not match contains`|Expected result: `false` but validator returned: `true`
`enum with false does not match 0, false is valid`|Expected result: `true` but validator returned: `false`
`enum with true does not match 1, true is valid`|Expected result: `true` but validator returned: `false`
`enum with 0 does not match false, false is invalid`|Expected result: `false` but validator returned: `true`
`enum with 1 does not match true, true is invalid`|Expected result: `false` but validator returned: `true`
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
`validation of hostnames, ignores null`|Expected result: `true` but validator returned: `"Cannot read property 'length' of null"`
`validation of date-time strings, ignores integers`|Expected result: `true` but validator returned: `"data.indexOf is not a function"`
`validation of date-time strings, ignores floats`|Expected result: `true` but validator returned: `false`
`validation of date-time strings, ignores objects`|Expected result: `true` but validator returned: `false`
`validation of date-time strings, ignores arrays`|Expected result: `true` but validator returned: `false`
`validation of date-time strings, ignores booleans`|Expected result: `true` but validator returned: `false`
`validation of date-time strings, ignores null`|Expected result: `true` but validator returned: `false`
`validation of JSON pointers, ignores integers`|Expected result: `true` but validator returned: `false`
`validation of JSON pointers, ignores floats`|Expected result: `true` but validator returned: `false`
`validation of JSON pointers, ignores objects`|Expected result: `true` but validator returned: `false`
`validation of JSON pointers, ignores booleans`|Expected result: `true` but validator returned: `false`
`validation of JSON pointers, ignores null`|Expected result: `true` but validator returned: `false`
`validation of URIs, ignores integers`|Expected result: `true` but validator returned: `false`
`validation of URIs, ignores floats`|Expected result: `true` but validator returned: `false`
`validation of URIs, ignores objects`|Expected result: `true` but validator returned: `false`
`validation of URIs, ignores arrays`|Expected result: `true` but validator returned: `false`
`validation of URIs, ignores booleans`|Expected result: `true` but validator returned: `false`
`validation of URIs, ignores null`|Expected result: `true` but validator returned: `false`
`validation of URI references, ignores objects`|Expected result: `true` but validator returned: `false`
`validation of URI templates, ignores objects`|Expected result: `true` but validator returned: `false`
`if and then without else, invalid through then`|Expected result: `false` but validator returned: `true`
`if and else without then, invalid through else`|Expected result: `false` but validator returned: `true`
`validate against correct branch, then vs else, invalid through then`|Expected result: `false` but validator returned: `true`
`validate against correct branch, then vs else, invalid through else`|Expected result: `false` but validator returned: `true`
`if with boolean schema true, boolean schema true in if always chooses the then path (invalid)`|Expected result: `false` but validator returned: `true`
`if with boolean schema false, boolean schema false in if always chooses the else path (invalid)`|Expected result: `false` but validator returned: `true`
`if appears at the end when serialized (keyword processing sequence), no redirects to then and fails`|Expected result: `false` but validator returned: `true`
`if appears at the end when serialized (keyword processing sequence), invalid redirects to else and fails`|Expected result: `false` but validator returned: `true`
`validation of string-encoded content based on media type, an invalid JSON document`|Expected result: `false` but validator returned: `true`
`validation of binary string-encoding, an invalid base64 string (% is not a valid character)`|Expected result: `false` but validator returned: `true`
`validation of binary-encoded media type documents, a validly-encoded invalid JSON document`|Expected result: `false` but validator returned: `true`
`validation of binary-encoded media type documents, an invalid base64 string that is valid JSON`|Expected result: `false` but validator returned: `true`
`all integers are multiples of 0.5, if overflow is handled, valid if optional overflow handling is implemented`|Expected result: `true` but validator returned: `false`
`validation of date strings, an invalid date-time string`|Expected result: `false` but validator returned: `true`
`validation of date strings, only RFC3339 not all of ISO 8601 are valid`|Expected result: `false` but validator returned: `true`
`validation of date strings, invalidates non-padded month dates`|Expected result: `false` but validator returned: `true`
`validation of date strings, invalidates non-padded day dates`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, dot before local part is not valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, dot after local part is not valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, two subsequent dots inside local part are not valid`|Expected result: `false` but validator returned: `true`
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
`validation of IPv6 addresses, leading colons is valid`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, trailing colons is valid`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, mixed format with the ipv4 section as decimal octets`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, mixed format with leading double colons (ipv4-mapped ipv6 address)`|Expected result: `true` but validator returned: `false`
`validation of IRI References, an invalid IRI Reference`|Expected result: `false` but validator returned: `true`
`validation of IRI References, an invalid IRI fragment`|Expected result: `false` but validator returned: `true`
`validation of IRIs, an invalid IRI based on IPv6`|Expected result: `false` but validator returned: `true`
`validation of IRIs, an invalid relative IRI Reference`|Expected result: `false` but validator returned: `true`
`validation of IRIs, an invalid IRI`|Expected result: `false` but validator returned: `true`
`validation of IRIs, an invalid IRI though valid IRI reference`|Expected result: `false` but validator returned: `true`
`validation of regular expressions, a regular expression with unclosed parens is invalid`|Expected result: `false` but validator returned: `true`
`validation of Relative JSON Pointers (RJP), an invalid RJP that is a valid JSON Pointer`|Expected result: `false` but validator returned: `true`
`validation of Relative JSON Pointers (RJP), negative prefix`|Expected result: `false` but validator returned: `true`
`validation of time strings, an invalid time string`|Expected result: `false` but validator returned: `true`
`validation of time strings, only RFC3339 not all of ISO 8601 are valid`|Expected result: `false` but validator returned: `true`
`Proper UTF-16 surrogate pair handling: pattern, matches empty`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: pattern, matches two`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: patternProperties, doesn't match two`|Expected result: `false` but validator returned: `true`
`Location-independent identifier, match`|Expected result: `true` but validator returned: `"Maximum call stack size exceeded"`
`Location-independent identifier, mismatch`|Expected result: `false` but validator returned: `"Maximum call stack size exceeded"`
`Location-independent identifier with absolute URI, match`|Expected result: `true` but validator returned: `"Maximum call stack size exceeded"`
`Location-independent identifier with absolute URI, mismatch`|Expected result: `false` but validator returned: `"Maximum call stack size exceeded"`
`Location-independent identifier with base URI change in subschema, match`|Expected result: `true` but validator returned: `"Maximum call stack size exceeded"`
`Location-independent identifier with base URI change in subschema, mismatch`|Expected result: `false` but validator returned: `"Maximum call stack size exceeded"`
`uniqueItems validation, unique heterogeneous types are valid`|Expected result: `true` but validator returned: `false`
`uniqueItems validation, objects are non-unique despite key order`|Expected result: `false` but validator returned: `true`
`uniqueItems=false validation, unique array of integers is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, non-unique array of integers is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, numbers are unique if mathematically unequal`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, false is not equal to zero`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, true is not equal to one`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, unique array of objects is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, non-unique array of objects is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, unique array of nested objects is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, non-unique array of nested objects is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, unique array of arrays is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, non-unique array of arrays is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, 1 and true are unique`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, 0 and false are unique`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, unique heterogeneous types are valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, non-unique heterogeneous types are valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items, [false, true] from items array is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items, [true, false] from items array is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items, [false, false] from items array is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items, [true, true] from items array is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items, unique array extended from [false, true] is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items, unique array extended from [true, false] is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items, non-unique array extended from [false, true] is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items, non-unique array extended from [true, false] is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items and additionalItems=false, [false, true] from items array is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items and additionalItems=false, [true, false] from items array is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items and additionalItems=false, [false, false] from items array is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items and additionalItems=false, [true, true] from items array is valid`|Expected result: `true` but validator returned: `false`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)