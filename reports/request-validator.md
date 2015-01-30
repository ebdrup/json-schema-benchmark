# `[request-validator](https://github.com/bugventure/request-validator)` - test summary

# All validators fail these tests

some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part

remote ref, remote ref invalid

fragment within remote ref, remote fragment invalid

ref within remote ref, ref within ref invalid

change resolution scope, changed scope ref invalid

remote ref, remote ref valid

fragment within remote ref, remote fragment valid

ref within remote ref, ref within ref valid

change resolution scope, changed scope ref valid


# `` failed tests

request-validator failed the test `maxLength validation, two supplementary Unicode code points is long enough`. Expected result: `true` but validator returned: `false`

request-validator failed the test `minLength validation, one supplementary Unicode code point is not long enough`. Expected result: `false` but validator returned: `true`

request-validator failed the test `integer, a bignum is an integer`. Expected result: `true` but validator returned: `false`

request-validator failed the test `integer, a negative bignum is an integer`. Expected result: `true` but validator returned: `false`

request-validator failed the test `validation of date-time strings, an invalid date-time string`. Expected result: `false` but validator returned: `true`

request-validator failed the test `validation of date-time strings, only RFC3339 not all of ISO 8601 are valid`. Expected result: `false` but validator returned: `true`

request-validator failed the test `validation of URIs, an invalid URI`. Expected result: `false` but validator returned: `true`

request-validator failed the test `validation of URIs, an invalid URI though valid URI reference`. Expected result: `false` but validator returned: `true`

request-validator failed the test `validation of e-mail addresses, an invalid e-mail address`. Expected result: `false` but validator returned: `true`

request-validator failed the test `validation of IP addresses, an IP address with too many components`. Expected result: `false` but validator returned: `true`

request-validator failed the test `validation of IP addresses, an IP address with out-of-range values`. Expected result: `false` but validator returned: `true`

request-validator failed the test `validation of IP addresses, an IP address without 4 components`. Expected result: `false` but validator returned: `true`

request-validator failed the test `validation of IP addresses, an IP address as an integer`. Expected result: `false` but validator returned: `true`

request-validator failed the test `validation of IPv6 addresses, an IPv6 address with out-of-range values`. Expected result: `false` but validator returned: `true`

request-validator failed the test `validation of IPv6 addresses, an IPv6 address with too many components`. Expected result: `false` but validator returned: `true`

request-validator failed the test `validation of IPv6 addresses, an IPv6 address containing illegal characters`. Expected result: `false` but validator returned: `true`

request-validator failed the test `validation of host names, a host name starting with an illegal character`. Expected result: `false` but validator returned: `true`

request-validator failed the test `validation of host names, a host name containing illegal characters`. Expected result: `false` but validator returned: `true`

request-validator failed the test `validation of host names, a host name with a component too long`. Expected result: `false` but validator returned: `true`

**All other tests passed**.
