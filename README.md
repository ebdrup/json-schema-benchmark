# json-schema-benchmark
Benchmarks for Node.js JSON-schema validators

# Results

|is-my-json-valid|themis|z-schema 3|jjv|jayschema|
|-----|-----|-----|-----|-----|
|fastest >100% (5998)|>29% (1715)|>9% (569)|>9% (563)|>0% (6)|

Generated on Wednesday, January 28, 2015 in 0.5 minutes

`is-my-json-valid` is currently by far the fastest JSON-schema validator out there.

The fastest validator has 100%, the rest a lower score relative to the fastest.

The number in parenthesis is the number of validations of the entire test suite per second.
# What is this for?

I just wanted to find the fastest JSON-schema validator. Because I've had a slow validator affect my REST API performance.

Feel free to add more validators to the test suite in a pull request.

This test suite uses the official JSON-schema test suite, but it uses it to test the speed of validators.

This also means, that if a validator does not pass the official test suite, it will show up in these results.
A few of the tests have been disabled, because almost none of the validators implement these more obscure parts of the spec.

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

## jsck

jsck could not instantiate with schema for &quot;valid definition&quot;. This is multiple tests failing. This excludes this validator from performance tests (Unresolvable $ref values: [&quot;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&quot;])

All other tests passed.

## json-model

json-model could not instantiate with schema for &quot;valid definition&quot;. This is multiple tests failing. This excludes this validator from performance tests (Requests not enabled - try JsonModel.setRequestFunction(func):
{&quot;method&quot;:&quot;GET&quot;,&quot;url&quot;:&quot;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema&quot;})

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

## tv4

tv4 failed the test &quot;invalid definition, invalid definition schema&quot;. Expected result: false but validator returned: true

tv4 failed the test &quot;heterogeneous enum validation, something else is invalid&quot;. Expected result: false but validator returned: &quot;Cannot read property &#39;foo&#39; of null&quot;. This excludes this validator from performance tests

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

## jsonschema

jsonschema failed the test &quot;valid definition, valid definition schema&quot;. Expected result: true but validator returned: &quot;no such schema &lt;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&gt;&quot;

jsonschema failed the test &quot;invalid definition, invalid definition schema&quot;. Expected result: false but validator returned: &quot;no such schema &lt;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&gt;&quot;

jsonschema failed the test &quot;maxLength validation, two supplementary Unicode code points is long enough&quot;. Expected result: true but validator returned: false

jsonschema failed the test &quot;minLength validation, one supplementary Unicode code point is not long enough&quot;. Expected result: false but validator returned: true

jsonschema failed the test &quot;validation of date-time strings, a valid date-time string&quot;. Expected result: true but validator returned: false. This excludes this validator from performance tests

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

# Thanks
This code was originally pulled out from the benchmarks in the `themis` json-schema validator.
Thanks goes to Johny Jose for his work.

# License
MIT
