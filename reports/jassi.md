# `jassi` - test summary

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


# `jassi` failed tests

jassi failed the test &quot;invalid definition, invalid definition schema&quot;. Expected result: false but validator returned: true

jassi failed the test &quot;maxLength validation, two supplementary Unicode code points is long enough&quot;. Expected result: true but validator returned: false

jassi failed the test &quot;minLength validation, one supplementary Unicode code point is not long enough&quot;. Expected result: false but validator returned: true

jassi failed the test &quot;validation of date-time strings, an invalid date-time string&quot;. Expected result: false but validator returned: true

jassi failed the test &quot;validation of date-time strings, only RFC3339 not all of ISO 8601 are valid&quot;. Expected result: false but validator returned: true

jassi failed the test &quot;validation of URIs, an invalid URI&quot;. Expected result: false but validator returned: true

jassi failed the test &quot;validation of URIs, an invalid URI though valid URI reference&quot;. Expected result: false but validator returned: true

jassi failed the test &quot;validation of e-mail addresses, an invalid e-mail address&quot;. Expected result: false but validator returned: true

jassi failed the test &quot;validation of IP addresses, an IP address with too many components&quot;. Expected result: false but validator returned: true

jassi failed the test &quot;validation of IP addresses, an IP address with out-of-range values&quot;. Expected result: false but validator returned: true

jassi failed the test &quot;validation of IP addresses, an IP address without 4 components&quot;. Expected result: false but validator returned: true

jassi failed the test &quot;validation of IP addresses, an IP address as an integer&quot;. Expected result: false but validator returned: true

jassi failed the test &quot;validation of IPv6 addresses, an IPv6 address with out-of-range values&quot;. Expected result: false but validator returned: true

jassi failed the test &quot;validation of IPv6 addresses, an IPv6 address with too many components&quot;. Expected result: false but validator returned: true

jassi failed the test &quot;validation of IPv6 addresses, an IPv6 address containing illegal characters&quot;. Expected result: false but validator returned: true

jassi failed the test &quot;validation of host names, a host name starting with an illegal character&quot;. Expected result: false but validator returned: true

jassi failed the test &quot;validation of host names, a host name containing illegal characters&quot;. Expected result: false but validator returned: true

jassi failed the test &quot;validation of host names, a host name with a component too long&quot;. Expected result: false but validator returned: true

jassi failed the test &quot;root pointer ref, recursive mismatch&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;relative pointer ref to object, mismatch&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;relative pointer ref to array, mismatch array&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;escaped pointer ref, slash&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;escaped pointer ref, tilda&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;escaped pointer ref, percent&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;nested refs, nested ref invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;remote ref, containing refs itself, remote ref invalid&quot;. Expected result: false but validator returned: true

**All other tests passed**.
