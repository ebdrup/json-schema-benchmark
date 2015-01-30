# `JSV` - test summary

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


# `JSV` failed tests

JSV failed the test &quot;additionalItems as false without items, items defaults to empty schema so everything is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

JSV failed the test &quot;allOf, mismatch second&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;allOf, mismatch first&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;allOf, wrong type&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;allOf with base schema, valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

JSV failed the test &quot;allOf simple types, mismatch one&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;anyOf, neither anyOf valid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;anyOf with base schema, both anyOf invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;valid definition, valid definition schema&quot;. Expected result: true but validator returned: false

JSV failed the test &quot;heterogeneous enum validation, one of the enum is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

JSV failed the test &quot;enums in properties, both properties are valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

JSV failed the test &quot;enums in properties, missing optional property is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

JSV failed the test &quot;maxLength validation, two supplementary Unicode code points is long enough&quot;. Expected result: true but validator returned: false

JSV failed the test &quot;maxProperties validation, too long is invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;minLength validation, one supplementary Unicode code point is not long enough&quot;. Expected result: false but validator returned: true

JSV failed the test &quot;minProperties validation, too short is invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;by int, int by int fail&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;by number, 35 is not multiple of 1.5&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;by small number, 0.00751 is not multiple of 0.0001&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;not, disallowed&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;not multiple types, mismatch&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;not multiple types, other mismatch&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;not more complex schema, mismatch&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;forbidden property, property present&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;oneOf, both oneOf valid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;oneOf, neither oneOf valid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;oneOf with base schema, both oneOf valid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;validation of date-time strings, an invalid date-time string&quot;. Expected result: false but validator returned: true

JSV failed the test &quot;validation of date-time strings, only RFC3339 not all of ISO 8601 are valid&quot;. Expected result: false but validator returned: true

JSV failed the test &quot;validation of URIs, an invalid URI&quot;. Expected result: false but validator returned: true

JSV failed the test &quot;validation of URIs, an invalid URI though valid URI reference&quot;. Expected result: false but validator returned: true

JSV failed the test &quot;validation of e-mail addresses, an invalid e-mail address&quot;. Expected result: false but validator returned: true

JSV failed the test &quot;validation of IP addresses, an IP address with too many components&quot;. Expected result: false but validator returned: true

JSV failed the test &quot;validation of IP addresses, an IP address with out-of-range values&quot;. Expected result: false but validator returned: true

JSV failed the test &quot;validation of IP addresses, an IP address without 4 components&quot;. Expected result: false but validator returned: true

JSV failed the test &quot;validation of IP addresses, an IP address as an integer&quot;. Expected result: false but validator returned: true

JSV failed the test &quot;validation of IPv6 addresses, an IPv6 address with out-of-range values&quot;. Expected result: false but validator returned: true

JSV failed the test &quot;validation of IPv6 addresses, an IPv6 address with too many components&quot;. Expected result: false but validator returned: true

JSV failed the test &quot;validation of IPv6 addresses, an IPv6 address containing illegal characters&quot;. Expected result: false but validator returned: true

JSV failed the test &quot;validation of host names, a host name starting with an illegal character&quot;. Expected result: false but validator returned: true

JSV failed the test &quot;validation of host names, a host name containing illegal characters&quot;. Expected result: false but validator returned: true

JSV failed the test &quot;validation of host names, a host name with a component too long&quot;. Expected result: false but validator returned: true

JSV failed the test &quot;nested refs, nested ref valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

JSV failed the test &quot;remote ref, containing refs itself, remote ref valid&quot;. Expected result: true but validator returned: false

JSV failed the test &quot;required validation, present required property is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

JSV failed the test &quot;uniqueItems validation, non-unique array of objects is invalid&quot;. Expected result: false but validator returned: true

JSV failed the test &quot;uniqueItems validation, non-unique array of nested objects is invalid&quot;. Expected result: false but validator returned: true

JSV failed the test &quot;uniqueItems validation, non-unique array of arrays is invalid&quot;. Expected result: false but validator returned: true

JSV failed the test &quot;uniqueItems validation, non-unique heterogeneous types are invalid&quot;. Expected result: false but validator returned: true

**All other tests passed**.
