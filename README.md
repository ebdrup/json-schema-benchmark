# json-schema-benchmark
Benchmarks for Node.js JSON-schema validators

# Results

|is-my-json-valid|themis|z-schema 3|jjv|jayschema|
|-----|-----|-----|-----|-----|
|fastest >100% (5284)|>32% (1714)|>9% (459)|>7% (389)|>0% (5)|

Validators tested: `is-my-json-valid`, `themis`, `z-schema 3`, `jjv`, `jayschema`, `jsck`, `jassi`, `JSV`, `json-model`, `tv4`, `jsonschema`, 
(those not in the results above where excluded because of failing tests - see below for details)

`is-my-json-valid` is currently by far the fastest JSON-schema validator out there.

The fastest validator has 100%, the rest a lower score relative to the fastest.

The number in parenthesis is the number of validations of the entire test suite per second.

# What is this for?

I just wanted to find the fastest JSON-schema validator. Because I've had a slow validator affect my REST API performance.

Feel free to add more validators to the test suite in a pull request.

This test suite uses the official JSON-schema test suite, but it uses it to test the speed of validators.

This also means, that if a validator does not pass the official test suite, it will show up in these results (below).
A few of the tests have been disabled for speed testing, because almost none of the validators implement these more
obscure parts of the spec.

This benchmark is using  the `benchmark` module to gain statistically significant results.

# Compliance with official JSON-schema test suite

## is-my-json-valid

is-my-json-valid failed the test &quot;invalid definition, invalid definition schema&quot;. Expected result: false but validator returned: true

is-my-json-valid failed the test &quot;maxLength validation, two supplementary Unicode code points is long enough&quot;. Expected result: true but validator returned: false

is-my-json-valid failed the test &quot;minLength validation, one supplementary Unicode code point is not long enough&quot;. Expected result: false but validator returned: true

is-my-json-valid failed the test &quot;some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part&quot;. Expected result: false but validator returned: true

is-my-json-valid failed the test &quot;remote ref, containing refs itself, remote ref invalid&quot;. Expected result: false but validator returned: true

is-my-json-valid failed the test &quot;remote ref, remote ref invalid&quot;. Expected result: false but validator returned: true

is-my-json-valid failed the test &quot;fragment within remote ref, remote fragment invalid&quot;. Expected result: false but validator returned: true

is-my-json-valid failed the test &quot;ref within remote ref, ref within ref invalid&quot;. Expected result: false but validator returned: true

is-my-json-valid failed the test &quot;change resolution scope, changed scope ref invalid&quot;. Expected result: false but validator returned: true

All other tests passed.

## themis

themis failed the test &quot;valid definition, valid definition schema&quot;. Expected result: true but validator returned: &quot;Object #&lt;Object&gt; has no method &#39;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&#39;&quot;

themis failed the test &quot;invalid definition, invalid definition schema&quot;. Expected result: false but validator returned: &quot;Object #&lt;Object&gt; has no method &#39;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&#39;&quot;

themis failed the test &quot;some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part&quot;. Expected result: false but validator returned: true

themis failed the test &quot;remote ref, containing refs itself, remote ref valid&quot;. Expected result: true but validator returned: &quot;Object #&lt;Object&gt; has no method &#39;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&#39;&quot;

themis failed the test &quot;remote ref, containing refs itself, remote ref invalid&quot;. Expected result: false but validator returned: &quot;Object #&lt;Object&gt; has no method &#39;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&#39;&quot;

themis failed the test &quot;remote ref, remote ref valid&quot;. Expected result: true but validator returned: &quot;Object #&lt;Object&gt; has no method &#39;http:&#x2F;&#x2F;localhost:1234&#x2F;integer.json&#39;&quot;

themis failed the test &quot;remote ref, remote ref invalid&quot;. Expected result: false but validator returned: &quot;Object #&lt;Object&gt; has no method &#39;http:&#x2F;&#x2F;localhost:1234&#x2F;integer.json&#39;&quot;

themis failed the test &quot;fragment within remote ref, remote fragment valid&quot;. Expected result: true but validator returned: &quot;Object #&lt;Object&gt; has no method &#39;http:&#x2F;&#x2F;localhost:1234&#x2F;subSchemas.json#&#x2F;integer&#39;&quot;

themis failed the test &quot;fragment within remote ref, remote fragment invalid&quot;. Expected result: false but validator returned: &quot;Object #&lt;Object&gt; has no method &#39;http:&#x2F;&#x2F;localhost:1234&#x2F;subSchemas.json#&#x2F;integer&#39;&quot;

themis failed the test &quot;ref within remote ref, ref within ref valid&quot;. Expected result: true but validator returned: &quot;Object #&lt;Object&gt; has no method &#39;http:&#x2F;&#x2F;localhost:1234&#x2F;subSchemas.json#&#x2F;refToInteger&#39;&quot;

themis failed the test &quot;ref within remote ref, ref within ref invalid&quot;. Expected result: false but validator returned: &quot;Object #&lt;Object&gt; has no method &#39;http:&#x2F;&#x2F;localhost:1234&#x2F;subSchemas.json#&#x2F;refToInteger&#39;&quot;

themis failed the test &quot;change resolution scope, changed scope ref valid&quot;. Expected result: true but validator returned: &quot;Object #&lt;Object&gt; has no method &#39;0&#39;&quot;

themis failed the test &quot;change resolution scope, changed scope ref invalid&quot;. Expected result: false but validator returned: &quot;Object #&lt;Object&gt; has no method &#39;0&#39;&quot;

All other tests passed.

## z-schema 3

z-schema 3 failed the test &quot;valid definition, valid definition schema&quot;. Expected result: true but validator returned: false

z-schema 3 failed the test &quot;maxLength validation, two supplementary Unicode code points is long enough&quot;. Expected result: true but validator returned: false

z-schema 3 failed the test &quot;minLength validation, one supplementary Unicode code point is not long enough&quot;. Expected result: false but validator returned: true

z-schema 3 failed the test &quot;validation of URIs, an invalid URI&quot;. Expected result: false but validator returned: true

z-schema 3 failed the test &quot;validation of URIs, an invalid URI though valid URI reference&quot;. Expected result: false but validator returned: true

z-schema 3 failed the test &quot;some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part&quot;. Expected result: false but validator returned: true

z-schema 3 failed the test &quot;remote ref, containing refs itself, remote ref valid&quot;. Expected result: true but validator returned: false

z-schema 3 failed the test &quot;remote ref, remote ref valid&quot;. Expected result: true but validator returned: false

z-schema 3 failed the test &quot;fragment within remote ref, remote fragment valid&quot;. Expected result: true but validator returned: false

z-schema 3 failed the test &quot;ref within remote ref, ref within ref valid&quot;. Expected result: true but validator returned: false

z-schema 3 failed the test &quot;change resolution scope, changed scope ref valid&quot;. Expected result: true but validator returned: false

All other tests passed.

## jjv

jjv failed the test &quot;valid definition, valid definition schema&quot;. Expected result: true but validator returned: false

jjv failed the test &quot;maxLength validation, two supplementary Unicode code points is long enough&quot;. Expected result: true but validator returned: false

jjv failed the test &quot;minLength validation, one supplementary Unicode code point is not long enough&quot;. Expected result: false but validator returned: true

jjv failed the test &quot;some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part&quot;. Expected result: false but validator returned: true

jjv failed the test &quot;remote ref, containing refs itself, remote ref valid&quot;. Expected result: true but validator returned: false

jjv failed the test &quot;remote ref, remote ref valid&quot;. Expected result: true but validator returned: false

jjv failed the test &quot;fragment within remote ref, remote fragment valid&quot;. Expected result: true but validator returned: false

jjv failed the test &quot;ref within remote ref, ref within ref valid&quot;. Expected result: true but validator returned: false

jjv failed the test &quot;change resolution scope, changed scope ref valid&quot;. Expected result: true but validator returned: false

All other tests passed.

## jayschema

jayschema failed the test &quot;maxLength validation, two supplementary Unicode code points is long enough&quot;. Expected result: true but validator returned: false

jayschema failed the test &quot;minLength validation, one supplementary Unicode code point is not long enough&quot;. Expected result: false but validator returned: true

jayschema failed the test &quot;validation of URIs, an invalid URI though valid URI reference&quot;. Expected result: false but validator returned: true

jayschema failed the test &quot;some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part&quot;. Expected result: false but validator returned: true

jayschema failed the test &quot;remote ref, remote ref valid&quot;. Expected result: true but validator returned: false

jayschema failed the test &quot;fragment within remote ref, remote fragment valid&quot;. Expected result: true but validator returned: &quot;Cannot convert null to object&quot;

jayschema failed the test &quot;fragment within remote ref, remote fragment invalid&quot;. Expected result: false but validator returned: &quot;Cannot convert null to object&quot;

jayschema failed the test &quot;ref within remote ref, ref within ref valid&quot;. Expected result: true but validator returned: &quot;Cannot convert null to object&quot;

jayschema failed the test &quot;ref within remote ref, ref within ref invalid&quot;. Expected result: false but validator returned: &quot;Cannot convert null to object&quot;

jayschema failed the test &quot;change resolution scope, changed scope ref valid&quot;. Expected result: true but validator returned: false

All other tests passed.

## jsck

jsck could not instantiate with schema for &quot;valid definition&quot;. This is multiple tests failing. **This excludes this validator from performance tests** (Unresolvable $ref values: [&quot;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&quot;])

jsck could not instantiate with schema for &quot;invalid definition&quot;. This is multiple tests failing. **This excludes this validator from performance tests** (Unresolvable $ref values: [&quot;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&quot;])

jsck failed the test &quot;maxLength validation, two supplementary Unicode code points is long enough&quot;. Expected result: true but validator returned: false

jsck failed the test &quot;minLength validation, one supplementary Unicode code point is not long enough&quot;. Expected result: false but validator returned: true

jsck failed the test &quot;some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part&quot;. Expected result: false but validator returned: true

jsck could not instantiate with schema for &quot;remote ref, containing refs itself&quot;. This is multiple tests failing. **This excludes this validator from performance tests** (Unresolvable $ref values: [&quot;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&quot;])

jsck could not instantiate with schema for &quot;remote ref&quot;. This is multiple tests failing. **This excludes this validator from performance tests** (Unresolvable $ref values: [&quot;http:&#x2F;&#x2F;localhost:1234&#x2F;integer.json&quot;])

jsck could not instantiate with schema for &quot;fragment within remote ref&quot;. This is multiple tests failing. **This excludes this validator from performance tests** (Unresolvable $ref values: [&quot;http:&#x2F;&#x2F;localhost:1234&#x2F;subSchemas.json#&#x2F;integer&quot;])

jsck could not instantiate with schema for &quot;ref within remote ref&quot;. This is multiple tests failing. **This excludes this validator from performance tests** (Unresolvable $ref values: [&quot;http:&#x2F;&#x2F;localhost:1234&#x2F;subSchemas.json#&#x2F;refToInteger&quot;])

jsck could not instantiate with schema for &quot;change resolution scope&quot;. This is multiple tests failing. **This excludes this validator from performance tests** (Unresolvable $ref values: [&quot;http:&#x2F;&#x2F;localhost:1234&#x2F;&quot;])

jsck failed the test &quot;uniqueItems validation, non-unique array of integers is invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jsck failed the test &quot;uniqueItems validation, numbers are unique if mathematically unequal&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jsck failed the test &quot;uniqueItems validation, non-unique array of objects is invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jsck failed the test &quot;uniqueItems validation, non-unique array of nested objects is invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jsck failed the test &quot;uniqueItems validation, non-unique array of arrays is invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jsck failed the test &quot;uniqueItems validation, non-unique heterogeneous types are invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

All other tests passed.

## jassi

jassi failed the test &quot;invalid definition, invalid definition schema&quot;. Expected result: false but validator returned: true

jassi failed the test &quot;maxLength validation, two supplementary Unicode code points is long enough&quot;. Expected result: true but validator returned: false

jassi failed the test &quot;minLength validation, one supplementary Unicode code point is not long enough&quot;. Expected result: false but validator returned: true

jassi failed the test &quot;validation of date-time strings, an invalid date-time string&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;validation of date-time strings, only RFC3339 not all of ISO 8601 are valid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;validation of URIs, an invalid URI&quot;. Expected result: false but validator returned: true

jassi failed the test &quot;validation of URIs, an invalid URI though valid URI reference&quot;. Expected result: false but validator returned: true

jassi failed the test &quot;validation of e-mail addresses, an invalid e-mail address&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;validation of IP addresses, an IP address with too many components&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;validation of IP addresses, an IP address with out-of-range values&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;validation of IP addresses, an IP address without 4 components&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;validation of IP addresses, an IP address as an integer&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;validation of IPv6 addresses, an IPv6 address with out-of-range values&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;validation of IPv6 addresses, an IPv6 address with too many components&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;validation of IPv6 addresses, an IPv6 address containing illegal characters&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;validation of host names, a host name starting with an illegal character&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;validation of host names, a host name containing illegal characters&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;validation of host names, a host name with a component too long&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part&quot;. Expected result: false but validator returned: true

jassi failed the test &quot;root pointer ref, recursive mismatch&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;relative pointer ref to object, mismatch&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;relative pointer ref to array, mismatch array&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;escaped pointer ref, slash&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;escaped pointer ref, tilda&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;escaped pointer ref, percent&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;nested refs, nested ref invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jassi failed the test &quot;remote ref, containing refs itself, remote ref invalid&quot;. Expected result: false but validator returned: true

jassi failed the test &quot;remote ref, remote ref invalid&quot;. Expected result: false but validator returned: true

jassi failed the test &quot;fragment within remote ref, remote fragment invalid&quot;. Expected result: false but validator returned: true

jassi failed the test &quot;ref within remote ref, ref within ref invalid&quot;. Expected result: false but validator returned: true

jassi failed the test &quot;change resolution scope, changed scope ref invalid&quot;. Expected result: false but validator returned: true

All other tests passed.

## JSV

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

JSV failed the test &quot;validation of date-time strings, an invalid date-time string&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;validation of date-time strings, only RFC3339 not all of ISO 8601 are valid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;validation of URIs, an invalid URI&quot;. Expected result: false but validator returned: true

JSV failed the test &quot;validation of URIs, an invalid URI though valid URI reference&quot;. Expected result: false but validator returned: true

JSV failed the test &quot;validation of e-mail addresses, an invalid e-mail address&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;validation of IP addresses, an IP address with too many components&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;validation of IP addresses, an IP address with out-of-range values&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;validation of IP addresses, an IP address without 4 components&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;validation of IP addresses, an IP address as an integer&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;validation of IPv6 addresses, an IPv6 address with out-of-range values&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;validation of IPv6 addresses, an IPv6 address with too many components&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;validation of IPv6 addresses, an IPv6 address containing illegal characters&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;validation of host names, a host name starting with an illegal character&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;validation of host names, a host name containing illegal characters&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;validation of host names, a host name with a component too long&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part&quot;. Expected result: false but validator returned: true

JSV failed the test &quot;nested refs, nested ref valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

JSV failed the test &quot;remote ref, containing refs itself, remote ref valid&quot;. Expected result: true but validator returned: false

JSV failed the test &quot;remote ref, remote ref valid&quot;. Expected result: true but validator returned: false

JSV failed the test &quot;fragment within remote ref, remote fragment valid&quot;. Expected result: true but validator returned: false

JSV failed the test &quot;ref within remote ref, ref within ref valid&quot;. Expected result: true but validator returned: false

JSV failed the test &quot;change resolution scope, changed scope ref valid&quot;. Expected result: true but validator returned: false

JSV failed the test &quot;required validation, present required property is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

JSV failed the test &quot;uniqueItems validation, non-unique array of objects is invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;uniqueItems validation, non-unique array of nested objects is invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;uniqueItems validation, non-unique array of arrays is invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

JSV failed the test &quot;uniqueItems validation, non-unique heterogeneous types are invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

All other tests passed.

## json-model

json-model could not instantiate with schema for &quot;valid definition&quot;. This is multiple tests failing. **This excludes this validator from performance tests** (Requests not enabled - try JsonModel.setRequestFunction(func):
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

json-model failed the test &quot;validation of date-time strings, an invalid date-time string&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;validation of date-time strings, only RFC3339 not all of ISO 8601 are valid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;validation of URIs, an invalid URI&quot;. Expected result: false but validator returned: true

json-model failed the test &quot;validation of URIs, an invalid URI though valid URI reference&quot;. Expected result: false but validator returned: true

json-model failed the test &quot;validation of e-mail addresses, an invalid e-mail address&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;validation of IP addresses, an IP address with too many components&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;validation of IP addresses, an IP address with out-of-range values&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;validation of IP addresses, an IP address without 4 components&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;validation of IP addresses, an IP address as an integer&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;validation of IPv6 addresses, an IPv6 address with out-of-range values&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;validation of IPv6 addresses, an IPv6 address with too many components&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;validation of IPv6 addresses, an IPv6 address containing illegal characters&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;validation of host names, a host name starting with an illegal character&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;validation of host names, a host name containing illegal characters&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;validation of host names, a host name with a component too long&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part&quot;. Expected result: false but validator returned: true

json-model failed the test &quot;remote ref, containing refs itself, remote ref invalid&quot;. Expected result: false but validator returned: true

json-model could not instantiate with schema for &quot;remote ref&quot;. This is multiple tests failing. **This excludes this validator from performance tests** (Requests not enabled - try JsonModel.setRequestFunction(func):
{&quot;method&quot;:&quot;GET&quot;,&quot;url&quot;:&quot;http:&#x2F;&#x2F;localhost:1234&#x2F;integer.json&quot;})

json-model could not instantiate with schema for &quot;fragment within remote ref&quot;. This is multiple tests failing. **This excludes this validator from performance tests** (Requests not enabled - try JsonModel.setRequestFunction(func):
{&quot;method&quot;:&quot;GET&quot;,&quot;url&quot;:&quot;http:&#x2F;&#x2F;localhost:1234&#x2F;subSchemas.json&quot;})

json-model failed the test &quot;ref within remote ref, ref within ref invalid&quot;. Expected result: false but validator returned: true

json-model could not instantiate with schema for &quot;change resolution scope&quot;. This is multiple tests failing. **This excludes this validator from performance tests** (Requests not enabled - try JsonModel.setRequestFunction(func):
{&quot;method&quot;:&quot;GET&quot;,&quot;url&quot;:&quot;http:&#x2F;&#x2F;localhost:1234&#x2F;folder&#x2F;folderInteger.json&quot;})

json-model failed the test &quot;uniqueItems validation, non-unique array of integers is invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;uniqueItems validation, numbers are unique if mathematically unequal&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;uniqueItems validation, non-unique array of objects is invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;uniqueItems validation, non-unique array of nested objects is invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;uniqueItems validation, non-unique array of arrays is invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;uniqueItems validation, non-unique heterogeneous types are invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

All other tests passed.

## tv4

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

tv4 failed the test &quot;remote ref, remote ref invalid&quot;. Expected result: false but validator returned: true

tv4 failed the test &quot;fragment within remote ref, remote fragment invalid&quot;. Expected result: false but validator returned: true

tv4 failed the test &quot;ref within remote ref, ref within ref invalid&quot;. Expected result: false but validator returned: true

tv4 failed the test &quot;change resolution scope, changed scope ref invalid&quot;. Expected result: false but validator returned: true

tv4 failed the test &quot;uniqueItems validation, unique heterogeneous types are valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

All other tests passed.

## jsonschema

jsonschema failed the test &quot;valid definition, valid definition schema&quot;. Expected result: true but validator returned: &quot;no such schema &lt;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&gt;&quot;

jsonschema failed the test &quot;invalid definition, invalid definition schema&quot;. Expected result: false but validator returned: &quot;no such schema &lt;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&gt;&quot;

jsonschema failed the test &quot;maxLength validation, two supplementary Unicode code points is long enough&quot;. Expected result: true but validator returned: false

jsonschema failed the test &quot;minLength validation, one supplementary Unicode code point is not long enough&quot;. Expected result: false but validator returned: true

jsonschema failed the test &quot;validation of date-time strings, a valid date-time string&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

jsonschema failed the test &quot;validation of host names, a valid host name&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

jsonschema failed the test &quot;some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part&quot;. Expected result: false but validator returned: true

jsonschema failed the test &quot;remote ref, containing refs itself, remote ref valid&quot;. Expected result: true but validator returned: &quot;no such schema &lt;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&gt;&quot;

jsonschema failed the test &quot;remote ref, containing refs itself, remote ref invalid&quot;. Expected result: false but validator returned: &quot;no such schema &lt;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&gt;&quot;

jsonschema failed the test &quot;remote ref, remote ref valid&quot;. Expected result: true but validator returned: &quot;no such schema &lt;http:&#x2F;&#x2F;localhost:1234&#x2F;integer.json&gt;&quot;

jsonschema failed the test &quot;remote ref, remote ref invalid&quot;. Expected result: false but validator returned: &quot;no such schema &lt;http:&#x2F;&#x2F;localhost:1234&#x2F;integer.json&gt;&quot;

jsonschema failed the test &quot;fragment within remote ref, remote fragment valid&quot;. Expected result: true but validator returned: &quot;no such schema &lt;http:&#x2F;&#x2F;localhost:1234&#x2F;subSchemas.json#&#x2F;integer&gt;&quot;

jsonschema failed the test &quot;fragment within remote ref, remote fragment invalid&quot;. Expected result: false but validator returned: &quot;no such schema &lt;http:&#x2F;&#x2F;localhost:1234&#x2F;subSchemas.json#&#x2F;integer&gt;&quot;

jsonschema failed the test &quot;ref within remote ref, ref within ref valid&quot;. Expected result: true but validator returned: &quot;no such schema &lt;http:&#x2F;&#x2F;localhost:1234&#x2F;subSchemas.json#&#x2F;refToInteger&gt;&quot;

jsonschema failed the test &quot;ref within remote ref, ref within ref invalid&quot;. Expected result: false but validator returned: &quot;no such schema &lt;http:&#x2F;&#x2F;localhost:1234&#x2F;subSchemas.json#&#x2F;refToInteger&gt;&quot;

jsonschema failed the test &quot;change resolution scope, changed scope ref valid&quot;. Expected result: true but validator returned: &quot;no such schema &lt;http:&#x2F;&#x2F;localhost:1234&#x2F;folder&#x2F;folderInteger.json&gt;&quot;

jsonschema failed the test &quot;change resolution scope, changed scope ref invalid&quot;. Expected result: false but validator returned: &quot;no such schema &lt;http:&#x2F;&#x2F;localhost:1234&#x2F;folder&#x2F;folderInteger.json&gt;&quot;

All other tests passed.

# Thanks
This code was originally pulled out from the benchmarks in the `themis` json-schema validator.
Thanks goes to Johny Jose for his work.

# License
MIT
