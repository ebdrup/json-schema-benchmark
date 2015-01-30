# `tv4` - test summary

# All validators fail these tests

remote ref, remote ref invalid

fragment within remote ref, remote fragment invalid

ref within remote ref, ref within ref invalid

change resolution scope, changed scope ref invalid

remote ref, remote ref valid

fragment within remote ref, remote fragment valid

ref within remote ref, ref within ref valid

change resolution scope, changed scope ref valid


# `tv4` failed tests

tv4 failed the test &quot;invalid definition, invalid definition schema&quot;. Expected result: false but validator returned: true

tv4 failed the test &quot;heterogeneous enum validation, something else is invalid&quot;. Expected result: false but validator returned: &quot;Cannot read property &#39;foo&#39; of null&quot;. **This excludes this validator from performance tests**

tv4 failed the test &quot;maxLength validation, two supplementary Unicode code points is long enough&quot;. Expected result: true but validator returned: false

tv4 failed the test &quot;minLength validation, one supplementary Unicode code point is not long enough&quot;. Expected result: false but validator returned: true

tv4 failed the test &quot;validation of date-time strings, an invalid date-time string&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

tv4 failed the test &quot;validation of date-time strings, only RFC3339 not all of ISO 8601 are valid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

tv4 failed the test &quot;validation of URIs, an invalid URI&quot;. Expected result: false but validator returned: true

tv4 failed the test &quot;validation of URIs, an invalid URI though valid URI reference&quot;. Expected result: false but validator returned: true

tv4 failed the test &quot;validation of e-mail addresses, an invalid e-mail address&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

tv4 failed the test &quot;validation of IP addresses, an IP address with too many components&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

tv4 failed the test &quot;validation of IP addresses, an IP address with out-of-range values&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

tv4 failed the test &quot;validation of IP addresses, an IP address without 4 components&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

tv4 failed the test &quot;validation of IP addresses, an IP address as an integer&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

tv4 failed the test &quot;validation of IPv6 addresses, an IPv6 address with out-of-range values&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

tv4 failed the test &quot;validation of IPv6 addresses, an IPv6 address with too many components&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

tv4 failed the test &quot;validation of IPv6 addresses, an IPv6 address containing illegal characters&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

tv4 failed the test &quot;validation of host names, a host name starting with an illegal character&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

tv4 failed the test &quot;validation of host names, a host name containing illegal characters&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

tv4 failed the test &quot;validation of host names, a host name with a component too long&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

tv4 failed the test &quot;some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part&quot;. Expected result: false but validator returned: true

tv4 failed the test &quot;remote ref, containing refs itself, remote ref invalid&quot;. Expected result: false but validator returned: true

tv4 failed the test &quot;uniqueItems validation, unique heterogeneous types are valid&quot;. Expected result: true but validator returned: false

**All other tests passed**.
