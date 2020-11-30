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
`all integers are multiples of 0.5, if overflow is handled, valid if optional overflow handling is implemented`|Expected result: `true` but validator returned: `false`
`validation of e-mail addresses, dot before local part is not valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, dot after local part is not valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, two subsequent dots inside local part are not valid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, leading colons is valid`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, trailing colons is valid`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, mixed format with the ipv4 section as decimal octets`|Expected result: `true` but validator returned: `false`
`validation of IPv6 addresses, mixed format with leading double colons (ipv4-mapped ipv6 address)`|Expected result: `true` but validator returned: `false`
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