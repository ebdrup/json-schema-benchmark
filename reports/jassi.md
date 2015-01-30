# [`jassi`](https://github.com/iclanzan/jassi) - test summary

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

jassi failed the test `invalid definition, invalid definition schema`. Expected result: `false` but validator returned: `true`

jassi failed the test `maxLength validation, two supplementary Unicode code points is long enough`. Expected result: `true` but validator returned: `false`

jassi failed the test `minLength validation, one supplementary Unicode code point is not long enough`. Expected result: `false` but validator returned: `true`

jassi failed the test `validation of date-time strings, an invalid date-time string`. Expected result: `false` but validator returned: `true`

jassi failed the test `validation of date-time strings, only RFC3339 not all of ISO 8601 are valid`. Expected result: `false` but validator returned: `true`

jassi failed the test `validation of URIs, an invalid URI`. Expected result: `false` but validator returned: `true`

jassi failed the test `validation of URIs, an invalid URI though valid URI reference`. Expected result: `false` but validator returned: `true`

jassi failed the test `validation of e-mail addresses, an invalid e-mail address`. Expected result: `false` but validator returned: `true`

jassi failed the test `validation of IP addresses, an IP address with too many components`. Expected result: `false` but validator returned: `true`

jassi failed the test `validation of IP addresses, an IP address with out-of-range values`. Expected result: `false` but validator returned: `true`

jassi failed the test `validation of IP addresses, an IP address without 4 components`. Expected result: `false` but validator returned: `true`

jassi failed the test `validation of IP addresses, an IP address as an integer`. Expected result: `false` but validator returned: `true`

jassi failed the test `validation of IPv6 addresses, an IPv6 address with out-of-range values`. Expected result: `false` but validator returned: `true`

jassi failed the test `validation of IPv6 addresses, an IPv6 address with too many components`. Expected result: `false` but validator returned: `true`

jassi failed the test `validation of IPv6 addresses, an IPv6 address containing illegal characters`. Expected result: `false` but validator returned: `true`

jassi failed the test `validation of host names, a host name starting with an illegal character`. Expected result: `false` but validator returned: `true`

jassi failed the test `validation of host names, a host name containing illegal characters`. Expected result: `false` but validator returned: `true`

jassi failed the test `validation of host names, a host name with a component too long`. Expected result: `false` but validator returned: `true`

jassi failed the test `root pointer ref, recursive mismatch`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

jassi failed the test `relative pointer ref to object, mismatch`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

jassi failed the test `relative pointer ref to array, mismatch array`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

jassi failed the test `escaped pointer ref, slash`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

jassi failed the test `escaped pointer ref, tilda`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

jassi failed the test `escaped pointer ref, percent`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

jassi failed the test `nested refs, nested ref invalid`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

jassi failed the test `remote ref, containing refs itself, remote ref invalid`. Expected result: `false` but validator returned: `true`

**All other tests passed**.
