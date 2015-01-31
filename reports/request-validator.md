# [`request-validator`](https://github.com/bugventure/request-validator) - test summary

# All validators fail these tests

some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part


# [`request-validator`](https://github.com/bugventure/request-validator) failed tests

[`request-validator`](https://github.com/bugventure/request-validator) failed the test `maxLength validation, two supplementary Unicode code points is long enough`. Expected result: `true` but validator returned: `false`

[`request-validator`](https://github.com/bugventure/request-validator) failed the test `minLength validation, one supplementary Unicode code point is not long enough`. Expected result: `false` but validator returned: `true`

[`request-validator`](https://github.com/bugventure/request-validator) failed the test `integer, a bignum is an integer`. Expected result: `true` but validator returned: `false`

[`request-validator`](https://github.com/bugventure/request-validator) failed the test `integer, a negative bignum is an integer`. Expected result: `true` but validator returned: `false`

[`request-validator`](https://github.com/bugventure/request-validator) failed the test `validation of date-time strings, an invalid date-time string`. Expected result: `false` but validator returned: `true`

[`request-validator`](https://github.com/bugventure/request-validator) failed the test `validation of date-time strings, only RFC3339 not all of ISO 8601 are valid`. Expected result: `false` but validator returned: `true`

[`request-validator`](https://github.com/bugventure/request-validator) failed the test `validation of URIs, an invalid URI`. Expected result: `false` but validator returned: `true`

[`request-validator`](https://github.com/bugventure/request-validator) failed the test `validation of URIs, an invalid URI though valid URI reference`. Expected result: `false` but validator returned: `true`

[`request-validator`](https://github.com/bugventure/request-validator) failed the test `validation of e-mail addresses, an invalid e-mail address`. Expected result: `false` but validator returned: `true`

[`request-validator`](https://github.com/bugventure/request-validator) failed the test `validation of IP addresses, an IP address with too many components`. Expected result: `false` but validator returned: `true`

[`request-validator`](https://github.com/bugventure/request-validator) failed the test `validation of IP addresses, an IP address with out-of-range values`. Expected result: `false` but validator returned: `true`

[`request-validator`](https://github.com/bugventure/request-validator) failed the test `validation of IP addresses, an IP address without 4 components`. Expected result: `false` but validator returned: `true`

[`request-validator`](https://github.com/bugventure/request-validator) failed the test `validation of IP addresses, an IP address as an integer`. Expected result: `false` but validator returned: `true`

[`request-validator`](https://github.com/bugventure/request-validator) failed the test `validation of IPv6 addresses, an IPv6 address with out-of-range values`. Expected result: `false` but validator returned: `true`

[`request-validator`](https://github.com/bugventure/request-validator) failed the test `validation of IPv6 addresses, an IPv6 address with too many components`. Expected result: `false` but validator returned: `true`

[`request-validator`](https://github.com/bugventure/request-validator) failed the test `validation of IPv6 addresses, an IPv6 address containing illegal characters`. Expected result: `false` but validator returned: `true`

[`request-validator`](https://github.com/bugventure/request-validator) failed the test `validation of host names, a host name starting with an illegal character`. Expected result: `false` but validator returned: `true`

[`request-validator`](https://github.com/bugventure/request-validator) failed the test `validation of host names, a host name containing illegal characters`. Expected result: `false` but validator returned: `true`

[`request-validator`](https://github.com/bugventure/request-validator) failed the test `validation of host names, a host name with a component too long`. Expected result: `false` but validator returned: `true`

[`request-validator`](https://github.com/bugventure/request-validator) failed the test `remote ref, remote ref invalid`. Expected result: `false` but validator returned: `true`

[`request-validator`](https://github.com/bugventure/request-validator) failed the test `fragment within remote ref, remote fragment valid`. Because the schema failed to load(`request-validator: invalid schema reference 'http://localhost:1234/subSchemas.json#/integer'`)

[`request-validator`](https://github.com/bugventure/request-validator) failed the test `fragment within remote ref, remote fragment invalid`. Because the schema failed to load(`request-validator: invalid schema reference 'http://localhost:1234/subSchemas.json#/integer'`)

[`request-validator`](https://github.com/bugventure/request-validator) failed the test `ref within remote ref, ref within ref valid`. Because the schema failed to load(`request-validator: invalid schema reference 'http://localhost:1234/subSchemas.json#/refToInteger'`)

[`request-validator`](https://github.com/bugventure/request-validator) failed the test `ref within remote ref, ref within ref invalid`. Because the schema failed to load(`request-validator: invalid schema reference 'http://localhost:1234/subSchemas.json#/refToInteger'`)

[`request-validator`](https://github.com/bugventure/request-validator) failed the test `change resolution scope, changed scope ref invalid`. Expected result: `false` but validator returned: `true`

**All other tests passed**.
