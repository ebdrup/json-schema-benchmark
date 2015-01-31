# [`tv4`](https://github.com/geraintluff/tv4) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`


# [`tv4`](https://github.com/geraintluff/tv4) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`tv4`](https://github.com/geraintluff/tv4) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
|`invalid definition, invalid definition schema`|Expected result: `false` but validator returned: `true`
|`heterogeneous enum validation, something else is invalid`|Expected result: `false` but validator returned: `"Cannot read property 'foo' of null"`
|`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`
|`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`
|`validation of date-time strings, an invalid date-time string`|Expected result: `false` but validator returned: `true`
|`validation of date-time strings, only RFC3339 not all of ISO 8601 are valid`|Expected result: `false` but validator returned: `true`
|`validation of URIs, an invalid URI`|Expected result: `false` but validator returned: `true`
|`validation of URIs, an invalid URI though valid URI reference`|Expected result: `false` but validator returned: `true`
|`validation of e-mail addresses, an invalid e-mail address`|Expected result: `false` but validator returned: `true`
|`validation of IP addresses, an IP address with too many components`|Expected result: `false` but validator returned: `true`
|`validation of IP addresses, an IP address with out-of-range values`|Expected result: `false` but validator returned: `true`
|`validation of IP addresses, an IP address without 4 components`|Expected result: `false` but validator returned: `true`
|`validation of IP addresses, an IP address as an integer`|Expected result: `false` but validator returned: `true`
|`validation of IPv6 addresses, an IPv6 address with out-of-range values`|Expected result: `false` but validator returned: `true`
|`validation of IPv6 addresses, an IPv6 address with too many components`|Expected result: `false` but validator returned: `true`
|`validation of IPv6 addresses, an IPv6 address containing illegal characters`|Expected result: `false` but validator returned: `true`
|`validation of host names, a host name starting with an illegal character`|Expected result: `false` but validator returned: `true`
|`validation of host names, a host name containing illegal characters`|Expected result: `false` but validator returned: `true`
|`validation of host names, a host name with a component too long`|Expected result: `false` but validator returned: `true`
|`remote ref, containing refs itself, remote ref invalid`|Expected result: `false` but validator returned: `true`
|`remote ref, remote ref invalid`|Expected result: `false` but validator returned: `true`
|`fragment within remote ref, remote fragment invalid`|Expected result: `false` but validator returned: `true`
|`ref within remote ref, ref within ref invalid`|Expected result: `false` but validator returned: `true`
|`change resolution scope, changed scope ref invalid`|Expected result: `false` but validator returned: `true`
|`uniqueItems validation, unique heterogeneous types are valid`|Expected result: `true` but validator returned: `false`

**All other tests passed**.

[back to benchmarks](https://github.com/Muscula/json-schema-benchmark)