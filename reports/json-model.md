# `json-model` - test summary

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


# `json-model` failed tests

json-model failed the test &quot;valid definition, valid definition schema&quot;. Because the schema failed to load(Requests not enabled - try JsonModel.setRequestFunction(func):
{&quot;method&quot;:&quot;GET&quot;,&quot;url&quot;:&quot;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema&quot;})

json-model failed the test &quot;invalid definition, invalid definition schema&quot;. Expected result: false but validator returned: true

json-model failed the test &quot;simple enum validation, something else is invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;heterogeneous enum validation, something else is invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;heterogeneous enum validation, objects are deep compared&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;not, disallowed&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;not multiple types, mismatch&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;not multiple types, other mismatch&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;not more complex schema, mismatch&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;forbidden property, property present&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;validation of date-time strings, an invalid date-time string&quot;. Expected result: false but validator returned: true

json-model failed the test &quot;validation of date-time strings, only RFC3339 not all of ISO 8601 are valid&quot;. Expected result: false but validator returned: true

json-model failed the test &quot;validation of URIs, an invalid URI&quot;. Expected result: false but validator returned: true

json-model failed the test &quot;validation of URIs, an invalid URI though valid URI reference&quot;. Expected result: false but validator returned: true

json-model failed the test &quot;validation of e-mail addresses, an invalid e-mail address&quot;. Expected result: false but validator returned: true

json-model failed the test &quot;validation of IP addresses, an IP address with too many components&quot;. Expected result: false but validator returned: true

json-model failed the test &quot;validation of IP addresses, an IP address with out-of-range values&quot;. Expected result: false but validator returned: true

json-model failed the test &quot;validation of IP addresses, an IP address without 4 components&quot;. Expected result: false but validator returned: true

json-model failed the test &quot;validation of IP addresses, an IP address as an integer&quot;. Expected result: false but validator returned: true

json-model failed the test &quot;validation of IPv6 addresses, an IPv6 address with out-of-range values&quot;. Expected result: false but validator returned: true

json-model failed the test &quot;validation of IPv6 addresses, an IPv6 address with too many components&quot;. Expected result: false but validator returned: true

json-model failed the test &quot;validation of IPv6 addresses, an IPv6 address containing illegal characters&quot;. Expected result: false but validator returned: true

json-model failed the test &quot;validation of host names, a host name starting with an illegal character&quot;. Expected result: false but validator returned: true

json-model failed the test &quot;validation of host names, a host name containing illegal characters&quot;. Expected result: false but validator returned: true

json-model failed the test &quot;validation of host names, a host name with a component too long&quot;. Expected result: false but validator returned: true

json-model failed the test &quot;remote ref, containing refs itself, remote ref invalid&quot;. Expected result: false but validator returned: true

json-model failed the test &quot;uniqueItems validation, non-unique array of integers is invalid&quot;. Expected result: false but validator returned: true

json-model failed the test &quot;uniqueItems validation, numbers are unique if mathematically unequal&quot;. Expected result: false but validator returned: true

json-model failed the test &quot;uniqueItems validation, non-unique array of objects is invalid&quot;. Expected result: false but validator returned: true

json-model failed the test &quot;uniqueItems validation, non-unique array of nested objects is invalid&quot;. Expected result: false but validator returned: true

json-model failed the test &quot;uniqueItems validation, non-unique array of arrays is invalid&quot;. Expected result: false but validator returned: true

json-model failed the test &quot;uniqueItems validation, non-unique heterogeneous types are invalid&quot;. Expected result: false but validator returned: true

**All other tests passed**.
