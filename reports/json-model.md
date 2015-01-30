# [`json-model`](https://github.com/geraintluff/json-model) - test summary

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


# [`json-model`](https://github.com/geraintluff/json-model) failed tests

json-model failed the test `valid definition, valid definition schema`. Because the schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func):
{&quot;method&quot;:&quot;GET&quot;,&quot;url&quot;:&quot;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema&quot;}`)

json-model failed the test `invalid definition, invalid definition schema`. Expected result: `false` but validator returned: `true`

json-model failed the test `simple enum validation, something else is invalid`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

json-model failed the test `heterogeneous enum validation, something else is invalid`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

json-model failed the test `heterogeneous enum validation, objects are deep compared`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

json-model failed the test `not, disallowed`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

json-model failed the test `not multiple types, mismatch`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

json-model failed the test `not multiple types, other mismatch`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

json-model failed the test `not more complex schema, mismatch`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

json-model failed the test `forbidden property, property present`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

json-model failed the test `validation of date-time strings, an invalid date-time string`. Expected result: `false` but validator returned: `true`

json-model failed the test `validation of date-time strings, only RFC3339 not all of ISO 8601 are valid`. Expected result: `false` but validator returned: `true`

json-model failed the test `validation of URIs, an invalid URI`. Expected result: `false` but validator returned: `true`

json-model failed the test `validation of URIs, an invalid URI though valid URI reference`. Expected result: `false` but validator returned: `true`

json-model failed the test `validation of e-mail addresses, an invalid e-mail address`. Expected result: `false` but validator returned: `true`

json-model failed the test `validation of IP addresses, an IP address with too many components`. Expected result: `false` but validator returned: `true`

json-model failed the test `validation of IP addresses, an IP address with out-of-range values`. Expected result: `false` but validator returned: `true`

json-model failed the test `validation of IP addresses, an IP address without 4 components`. Expected result: `false` but validator returned: `true`

json-model failed the test `validation of IP addresses, an IP address as an integer`. Expected result: `false` but validator returned: `true`

json-model failed the test `validation of IPv6 addresses, an IPv6 address with out-of-range values`. Expected result: `false` but validator returned: `true`

json-model failed the test `validation of IPv6 addresses, an IPv6 address with too many components`. Expected result: `false` but validator returned: `true`

json-model failed the test `validation of IPv6 addresses, an IPv6 address containing illegal characters`. Expected result: `false` but validator returned: `true`

json-model failed the test `validation of host names, a host name starting with an illegal character`. Expected result: `false` but validator returned: `true`

json-model failed the test `validation of host names, a host name containing illegal characters`. Expected result: `false` but validator returned: `true`

json-model failed the test `validation of host names, a host name with a component too long`. Expected result: `false` but validator returned: `true`

json-model failed the test `remote ref, containing refs itself, remote ref invalid`. Expected result: `false` but validator returned: `true`

json-model failed the test `uniqueItems validation, non-unique array of integers is invalid`. Expected result: `false` but validator returned: `true`

json-model failed the test `uniqueItems validation, numbers are unique if mathematically unequal`. Expected result: `false` but validator returned: `true`

json-model failed the test `uniqueItems validation, non-unique array of objects is invalid`. Expected result: `false` but validator returned: `true`

json-model failed the test `uniqueItems validation, non-unique array of nested objects is invalid`. Expected result: `false` but validator returned: `true`

json-model failed the test `uniqueItems validation, non-unique array of arrays is invalid`. Expected result: `false` but validator returned: `true`

json-model failed the test `uniqueItems validation, non-unique heterogeneous types are invalid`. Expected result: `false` but validator returned: `true`

**All other tests passed**.
