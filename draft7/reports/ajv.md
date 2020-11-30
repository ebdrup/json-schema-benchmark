# [`ajv`](https://github.com/ajv-validator/ajv) - test summary


# [`ajv`](https://github.com/ajv-validator/ajv) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`ajv`](https://github.com/ajv-validator/ajv) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`validation of IDN e-mail addresses, ignores integers`|The schema failed to load(`unknown format "idn-email" is used in schema at path "#"`)
`validation of IDN e-mail addresses, ignores floats`|The schema failed to load(`unknown format "idn-email" is used in schema at path "#"`)
`validation of IDN e-mail addresses, ignores objects`|The schema failed to load(`unknown format "idn-email" is used in schema at path "#"`)
`validation of IDN e-mail addresses, ignores arrays`|The schema failed to load(`unknown format "idn-email" is used in schema at path "#"`)
`validation of IDN e-mail addresses, ignores booleans`|The schema failed to load(`unknown format "idn-email" is used in schema at path "#"`)
`validation of IDN e-mail addresses, ignores null`|The schema failed to load(`unknown format "idn-email" is used in schema at path "#"`)
`validation of IDN hostnames, ignores integers`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of IDN hostnames, ignores floats`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of IDN hostnames, ignores objects`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of IDN hostnames, ignores arrays`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of IDN hostnames, ignores booleans`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of IDN hostnames, ignores null`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of IRIs, ignores integers`|The schema failed to load(`unknown format "iri" is used in schema at path "#"`)
`validation of IRIs, ignores floats`|The schema failed to load(`unknown format "iri" is used in schema at path "#"`)
`validation of IRIs, ignores objects`|The schema failed to load(`unknown format "iri" is used in schema at path "#"`)
`validation of IRIs, ignores arrays`|The schema failed to load(`unknown format "iri" is used in schema at path "#"`)
`validation of IRIs, ignores booleans`|The schema failed to load(`unknown format "iri" is used in schema at path "#"`)
`validation of IRIs, ignores null`|The schema failed to load(`unknown format "iri" is used in schema at path "#"`)
`validation of IRI references, ignores integers`|The schema failed to load(`unknown format "iri-reference" is used in schema at path "#"`)
`validation of IRI references, ignores floats`|The schema failed to load(`unknown format "iri-reference" is used in schema at path "#"`)
`validation of IRI references, ignores objects`|The schema failed to load(`unknown format "iri-reference" is used in schema at path "#"`)
`validation of IRI references, ignores arrays`|The schema failed to load(`unknown format "iri-reference" is used in schema at path "#"`)
`validation of IRI references, ignores booleans`|The schema failed to load(`unknown format "iri-reference" is used in schema at path "#"`)
`validation of IRI references, ignores null`|The schema failed to load(`unknown format "iri-reference" is used in schema at path "#"`)
`validation of string-encoded content based on media type, an invalid JSON document`|Expected result: `false` but validator returned: `true`
`validation of binary string-encoding, an invalid base64 string (% is not a valid character)`|Expected result: `false` but validator returned: `true`
`validation of binary-encoded media type documents, a validly-encoded invalid JSON document`|Expected result: `false` but validator returned: `true`
`validation of binary-encoded media type documents, an invalid base64 string that is valid JSON`|Expected result: `false` but validator returned: `true`
`all integers are multiples of 0.5, if overflow is handled, valid if optional overflow handling is implemented`|Expected result: `true` but validator returned: `false`
`validation of e-mail addresses, dot before local part is not valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, dot after local part is not valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, two subsequent dots inside local part are not valid`|Expected result: `false` but validator returned: `true`
`validation of an internationalized e-mail addresses, a valid idn e-mail (example@example.test in Hangul)`|The schema failed to load(`unknown format "idn-email" is used in schema at path "#"`)
`validation of an internationalized e-mail addresses, an invalid idn e-mail address`|The schema failed to load(`unknown format "idn-email" is used in schema at path "#"`)
`validation of an internationalized e-mail addresses, a valid e-mail address`|The schema failed to load(`unknown format "idn-email" is used in schema at path "#"`)
`validation of an internationalized e-mail addresses, an invalid e-mail address`|The schema failed to load(`unknown format "idn-email" is used in schema at path "#"`)
`validation of internationalized host names, a valid host name (example.test in Hangul)`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, illegal first char U+302E Hangul single dot tone mark`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, contains illegal char U+302E Hangul single dot tone mark`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, a host name with a component too long`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, invalid label, correct Punycode`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, valid Chinese Punycode`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, invalid Punycode`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, U-label contains "--" in the 3rd and 4th position`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, U-label starts with a dash`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, U-label ends with a dash`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, U-label starts and ends with a dash`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, Begins with a Spacing Combining Mark`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, Begins with a Nonspacing Mark`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, Begins with an Enclosing Mark`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, Exceptions that are PVALID, left-to-right chars`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, Exceptions that are PVALID, right-to-left chars`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, Exceptions that are DISALLOWED, right-to-left chars`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, Exceptions that are DISALLOWED, left-to-right chars`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, MIDDLE DOT with no preceding 'l'`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, MIDDLE DOT with nothing preceding`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, MIDDLE DOT with no following 'l'`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, MIDDLE DOT with nothing following`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, MIDDLE DOT with surrounding 'l's`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, Greek KERAIA not followed by Greek`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, Greek KERAIA not followed by anything`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, Greek KERAIA followed by Greek`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, Hebrew GERESH not preceded by Hebrew`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, Hebrew GERESH not preceded by anything`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, Hebrew GERESH preceded by Hebrew`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, Hebrew GERSHAYIM not preceded by Hebrew`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, Hebrew GERSHAYIM not preceded by anything`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, Hebrew GERSHAYIM preceded by Hebrew`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, KATAKANA MIDDLE DOT with no Hiragana, Katakana, or Han`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, KATAKANA MIDDLE DOT with no other characters`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, KATAKANA MIDDLE DOT with Hiragana`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, KATAKANA MIDDLE DOT with Katakana`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, KATAKANA MIDDLE DOT with Han`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, Arabic-Indic digits mixed with Extended Arabic-Indic digits`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, Arabic-Indic digits not mixed with Extended Arabic-Indic digits`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, Extended Arabic-Indic digits not mixed with Arabic-Indic digits`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, ZERO WIDTH JOINER not preceded by Virama`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, ZERO WIDTH JOINER not preceded by anything`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, ZERO WIDTH JOINER preceded by Virama`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, ZERO WIDTH NON-JOINER preceded by Virama`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of internationalized host names, ZERO WIDTH NON-JOINER not preceded by Virama but matches regexp`|The schema failed to load(`unknown format "idn-hostname" is used in schema at path "#"`)
`validation of IPv6 addresses, leading whitespace is invalid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, trailing whitespace is invalid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, zone id is not a part of ipv6 address`|Expected result: `false` but validator returned: `true`
`validation of IRI References, a valid IRI`|The schema failed to load(`unknown format "iri-reference" is used in schema at path "#"`)
`validation of IRI References, a valid protocol-relative IRI Reference`|The schema failed to load(`unknown format "iri-reference" is used in schema at path "#"`)
`validation of IRI References, a valid relative IRI Reference`|The schema failed to load(`unknown format "iri-reference" is used in schema at path "#"`)
`validation of IRI References, an invalid IRI Reference`|The schema failed to load(`unknown format "iri-reference" is used in schema at path "#"`)
`validation of IRI References, a valid IRI Reference`|The schema failed to load(`unknown format "iri-reference" is used in schema at path "#"`)
`validation of IRI References, a valid IRI fragment`|The schema failed to load(`unknown format "iri-reference" is used in schema at path "#"`)
`validation of IRI References, an invalid IRI fragment`|The schema failed to load(`unknown format "iri-reference" is used in schema at path "#"`)
`validation of IRIs, a valid IRI with anchor tag`|The schema failed to load(`unknown format "iri" is used in schema at path "#"`)
`validation of IRIs, a valid IRI with anchor tag and parantheses`|The schema failed to load(`unknown format "iri" is used in schema at path "#"`)
`validation of IRIs, a valid IRI with URL-encoded stuff`|The schema failed to load(`unknown format "iri" is used in schema at path "#"`)
`validation of IRIs, a valid IRI with many special characters`|The schema failed to load(`unknown format "iri" is used in schema at path "#"`)
`validation of IRIs, a valid IRI based on IPv6`|The schema failed to load(`unknown format "iri" is used in schema at path "#"`)
`validation of IRIs, an invalid IRI based on IPv6`|The schema failed to load(`unknown format "iri" is used in schema at path "#"`)
`validation of IRIs, an invalid relative IRI Reference`|The schema failed to load(`unknown format "iri" is used in schema at path "#"`)
`validation of IRIs, an invalid IRI`|The schema failed to load(`unknown format "iri" is used in schema at path "#"`)
`validation of IRIs, an invalid IRI though valid IRI reference`|The schema failed to load(`unknown format "iri" is used in schema at path "#"`)
`Proper UTF-16 surrogate pair handling: pattern, matches empty`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: pattern, matches two`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: patternProperties, doesn't match two`|Expected result: `false` but validator returned: `true`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)