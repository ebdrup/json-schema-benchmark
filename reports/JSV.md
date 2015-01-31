# [`JSV`](http://github.com/garycourt/JSV) - test summary

# All validators fail these tests

some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part


# [`JSV`](http://github.com/garycourt/JSV) failed tests

[`JSV`](http://github.com/garycourt/JSV) failed the test `additionalItems as false without items, items defaults to empty schema so everything is valid`. Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**

[`JSV`](http://github.com/garycourt/JSV) failed the test `allOf, mismatch second`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

[`JSV`](http://github.com/garycourt/JSV) failed the test `allOf, mismatch first`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

[`JSV`](http://github.com/garycourt/JSV) failed the test `allOf, wrong type`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

[`JSV`](http://github.com/garycourt/JSV) failed the test `allOf with base schema, valid`. Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**

[`JSV`](http://github.com/garycourt/JSV) failed the test `allOf simple types, mismatch one`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

[`JSV`](http://github.com/garycourt/JSV) failed the test `anyOf, neither anyOf valid`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

[`JSV`](http://github.com/garycourt/JSV) failed the test `anyOf with base schema, both anyOf invalid`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

[`JSV`](http://github.com/garycourt/JSV) failed the test `valid definition, valid definition schema`. Expected result: `true` but validator returned: `false`

[`JSV`](http://github.com/garycourt/JSV) failed the test `heterogeneous enum validation, one of the enum is valid`. Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**

[`JSV`](http://github.com/garycourt/JSV) failed the test `enums in properties, both properties are valid`. Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**

[`JSV`](http://github.com/garycourt/JSV) failed the test `enums in properties, missing optional property is valid`. Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**

[`JSV`](http://github.com/garycourt/JSV) failed the test `maxLength validation, two supplementary Unicode code points is long enough`. Expected result: `true` but validator returned: `false`

[`JSV`](http://github.com/garycourt/JSV) failed the test `maxProperties validation, too long is invalid`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

[`JSV`](http://github.com/garycourt/JSV) failed the test `minLength validation, one supplementary Unicode code point is not long enough`. Expected result: `false` but validator returned: `true`

[`JSV`](http://github.com/garycourt/JSV) failed the test `minProperties validation, too short is invalid`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

[`JSV`](http://github.com/garycourt/JSV) failed the test `by int, int by int fail`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

[`JSV`](http://github.com/garycourt/JSV) failed the test `by number, 35 is not multiple of 1.5`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

[`JSV`](http://github.com/garycourt/JSV) failed the test `by small number, 0.00751 is not multiple of 0.0001`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

[`JSV`](http://github.com/garycourt/JSV) failed the test `not, disallowed`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

[`JSV`](http://github.com/garycourt/JSV) failed the test `not multiple types, mismatch`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

[`JSV`](http://github.com/garycourt/JSV) failed the test `not multiple types, other mismatch`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

[`JSV`](http://github.com/garycourt/JSV) failed the test `not more complex schema, mismatch`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

[`JSV`](http://github.com/garycourt/JSV) failed the test `forbidden property, property present`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

[`JSV`](http://github.com/garycourt/JSV) failed the test `oneOf, both oneOf valid`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

[`JSV`](http://github.com/garycourt/JSV) failed the test `oneOf, neither oneOf valid`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

[`JSV`](http://github.com/garycourt/JSV) failed the test `oneOf with base schema, both oneOf valid`. Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

[`JSV`](http://github.com/garycourt/JSV) failed the test `validation of date-time strings, an invalid date-time string`. Expected result: `false` but validator returned: `true`

[`JSV`](http://github.com/garycourt/JSV) failed the test `validation of date-time strings, only RFC3339 not all of ISO 8601 are valid`. Expected result: `false` but validator returned: `true`

[`JSV`](http://github.com/garycourt/JSV) failed the test `validation of URIs, an invalid URI`. Expected result: `false` but validator returned: `true`

[`JSV`](http://github.com/garycourt/JSV) failed the test `validation of URIs, an invalid URI though valid URI reference`. Expected result: `false` but validator returned: `true`

[`JSV`](http://github.com/garycourt/JSV) failed the test `validation of e-mail addresses, an invalid e-mail address`. Expected result: `false` but validator returned: `true`

[`JSV`](http://github.com/garycourt/JSV) failed the test `validation of IP addresses, an IP address with too many components`. Expected result: `false` but validator returned: `true`

[`JSV`](http://github.com/garycourt/JSV) failed the test `validation of IP addresses, an IP address with out-of-range values`. Expected result: `false` but validator returned: `true`

[`JSV`](http://github.com/garycourt/JSV) failed the test `validation of IP addresses, an IP address without 4 components`. Expected result: `false` but validator returned: `true`

[`JSV`](http://github.com/garycourt/JSV) failed the test `validation of IP addresses, an IP address as an integer`. Expected result: `false` but validator returned: `true`

[`JSV`](http://github.com/garycourt/JSV) failed the test `validation of IPv6 addresses, an IPv6 address with out-of-range values`. Expected result: `false` but validator returned: `true`

[`JSV`](http://github.com/garycourt/JSV) failed the test `validation of IPv6 addresses, an IPv6 address with too many components`. Expected result: `false` but validator returned: `true`

[`JSV`](http://github.com/garycourt/JSV) failed the test `validation of IPv6 addresses, an IPv6 address containing illegal characters`. Expected result: `false` but validator returned: `true`

[`JSV`](http://github.com/garycourt/JSV) failed the test `validation of host names, a host name starting with an illegal character`. Expected result: `false` but validator returned: `true`

[`JSV`](http://github.com/garycourt/JSV) failed the test `validation of host names, a host name containing illegal characters`. Expected result: `false` but validator returned: `true`

[`JSV`](http://github.com/garycourt/JSV) failed the test `validation of host names, a host name with a component too long`. Expected result: `false` but validator returned: `true`

[`JSV`](http://github.com/garycourt/JSV) failed the test `nested refs, nested ref valid`. Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**

[`JSV`](http://github.com/garycourt/JSV) failed the test `remote ref, containing refs itself, remote ref valid`. Expected result: `true` but validator returned: `false`

[`JSV`](http://github.com/garycourt/JSV) failed the test `remote ref, remote ref valid`. Expected result: `true` but validator returned: `false`

[`JSV`](http://github.com/garycourt/JSV) failed the test `fragment within remote ref, remote fragment valid`. Expected result: `true` but validator returned: `false`

[`JSV`](http://github.com/garycourt/JSV) failed the test `ref within remote ref, ref within ref valid`. Expected result: `true` but validator returned: `false`

[`JSV`](http://github.com/garycourt/JSV) failed the test `change resolution scope, changed scope ref valid`. Expected result: `true` but validator returned: `false`

[`JSV`](http://github.com/garycourt/JSV) failed the test `required validation, present required property is valid`. Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**

[`JSV`](http://github.com/garycourt/JSV) failed the test `uniqueItems validation, non-unique array of objects is invalid`. Expected result: `false` but validator returned: `true`

[`JSV`](http://github.com/garycourt/JSV) failed the test `uniqueItems validation, non-unique array of nested objects is invalid`. Expected result: `false` but validator returned: `true`

[`JSV`](http://github.com/garycourt/JSV) failed the test `uniqueItems validation, non-unique array of arrays is invalid`. Expected result: `false` but validator returned: `true`

[`JSV`](http://github.com/garycourt/JSV) failed the test `uniqueItems validation, non-unique heterogeneous types are invalid`. Expected result: `false` but validator returned: `true`

**All other tests passed**.
