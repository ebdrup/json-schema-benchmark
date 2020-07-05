# [`djv`](https://github.com/korzio/djv#readme) - test summary

# All validators fail this test

`Proper UTF-16 surrogate pair handling: patternProperties, doesn&#39;t match two`

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`djv`](https://github.com/korzio/djv#readme) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`djv`](https://github.com/korzio/djv#readme) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`dependencies with escaped characters, valid object 1`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`dependencies with escaped characters, valid object 2`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`dependencies with escaped characters, valid object 3`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 1`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 2`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 3`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 4`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`enum with escaped characters, member 1 is valid`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`enum with escaped characters, member 2 is valid`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`enum with escaped characters, another string is invalid`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores integers`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores floats`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores booleans`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores null`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IP addresses, ignores integers`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IP addresses, ignores floats`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IP addresses, ignores objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IP addresses, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IP addresses, ignores booleans`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IP addresses, ignores null`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, ignores integers`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, ignores floats`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, ignores objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, ignores booleans`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, ignores null`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of hostnames, ignores objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of hostnames, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of hostnames, ignores null`|Expected result: `true` but validator returned: `"Cannot read property 'length' of null"`. **This excludes this validator from performance tests**
`validation of date-time strings, ignores integers`|Expected result: `true` but validator returned: `"data.indexOf is not a function"`. **This excludes this validator from performance tests**
`validation of date-time strings, ignores floats`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of date-time strings, ignores objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of date-time strings, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of date-time strings, ignores booleans`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of date-time strings, ignores null`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, ignores integers`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, ignores floats`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, ignores objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, ignores arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, ignores booleans`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of URIs, ignores null`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`validation of e-mail addresses, dot before local part is not valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, dot after local part is not valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, two subsequent dots inside local part are not valid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, trailing colons is valid`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, mixed format with the ipv4 section as decimal octets`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: pattern, matches empty`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: pattern, matches two`|Expected result: `true` but validator returned: `false`
`properties with escaped characters, object with all numbers is valid`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`properties with escaped characters, object with strings is invalid`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`refs with quote, object with numbers is valid`|The schema failed to load(`missing ) after argument list`). **This excludes this validator from performance tests**
`refs with quote, object with strings is invalid`|The schema failed to load(`missing ) after argument list`). **This excludes this validator from performance tests**
`Location-independent identifier, match`|Expected result: `true` but validator returned: `"Maximum call stack size exceeded"`
`Location-independent identifier, mismatch`|Expected result: `false` but validator returned: `"Maximum call stack size exceeded"`
`Location-independent identifier with absolute URI, match`|Expected result: `true` but validator returned: `"Maximum call stack size exceeded"`
`Location-independent identifier with absolute URI, mismatch`|Expected result: `false` but validator returned: `"Maximum call stack size exceeded"`. **This excludes this validator from performance tests**
`Location-independent identifier with base URI change in subschema, match`|Expected result: `true` but validator returned: `"Maximum call stack size exceeded"`
`Location-independent identifier with base URI change in subschema, mismatch`|Expected result: `false` but validator returned: `"Maximum call stack size exceeded"`
`required with escaped characters, object with all properties present is valid`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`required with escaped characters, object with some properties missing is invalid`|The schema failed to load(`Invalid or unexpected token`). **This excludes this validator from performance tests**
`uniqueItems validation, unique heterogeneous types are valid`|Expected result: `true` but validator returned: `false`
`uniqueItems validation, objects are non-unique despite key order`|Expected result: `false` but validator returned: `true`
`uniqueItems=false validation, unique array of integers is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, non-unique array of integers is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, numbers are unique if mathematically unequal`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, false is not equal to zero`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, true is not equal to one`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, unique array of objects is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, non-unique array of objects is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, unique array of nested objects is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, non-unique array of nested objects is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, unique array of arrays is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, non-unique array of arrays is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, 1 and true are unique`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, 0 and false are unique`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, unique heterogeneous types are valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false validation, non-unique heterogeneous types are valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items, [false, true] from items array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items, [true, false] from items array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items, [false, false] from items array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items, [true, true] from items array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items, unique array extended from [false, true] is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items, unique array extended from [true, false] is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items, non-unique array extended from [false, true] is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items, non-unique array extended from [true, false] is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items and additionalItems=false, [false, true] from items array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items and additionalItems=false, [true, false] from items array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items and additionalItems=false, [false, false] from items array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`uniqueItems=false with an array of items and additionalItems=false, [true, true] from items array is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)