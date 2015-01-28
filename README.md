# json-schema-benchmark
Benchmarks for Node.js JSON-schema validators

I just wanted to find the fastest one. Because I've had a slow validator affect my REST API performance.

Feel free to add more validators to the test suite in a pull request.

This test suite uses the official JSON-schema test suite, but it uses it to test the speed of validators.

This also means, that if a validator does not pass the official test suite, it will show up in these results.
A few of the tests have been disabled, because almost none of the validators implement these more obscure parts of the spec.

This benchmark is using  the `benchmark` module to gain statistically significant results.

# Results

`is-my-json-valid` is currently by far the fastest JSON-schema validator out there.

Generated on Wednesday, January 28, 2015 in 0.51 minutes

# Results

The fastest validator has 100%, the rest a lower score relative to the fastest.

The number in parenthesis is the number of validations of the entire test suite per second.

|is-my-json-valid|themis|z-schema 3|jjv|jayschema|
|-----|-----|-----|-----|-----|
|fastest >100% (5819)|>27% (1568)|>8% (485)|>7% (405)|>0% (5)|

# Compliance with official JSON-schema test suite

## is-my-json-valid

is-my-json-valid failed the test invalid definition, invalid definition schema. Expected result: false but validator returned: true

is-my-json-valid failed the test maxLength validation, two supplementary Unicode code points is long enough. Expected result: true but validator returned: false

is-my-json-valid failed the test minLength validation, one supplementary Unicode code point is not long enough. Expected result: false but validator returned: true

is-my-json-valid failed the test some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part. Expected result: false but validator returned: true

is-my-json-valid failed the test remote ref, containing refs itself, remote ref invalid. Expected result: false but validator returned: true

is-my-json-valid failed the test remote ref, remote ref invalid. Expected result: false but validator returned: true

is-my-json-valid failed the test fragment within remote ref, remote fragment invalid. Expected result: false but validator returned: true

is-my-json-valid failed the test ref within remote ref, ref within ref invalid. Expected result: false but validator returned: true

is-my-json-valid failed the test change resolution scope, changed scope ref invalid. Expected result: false but validator returned: true

All other tests passed.

## themis

themis failed the test valid definition, valid definition schema. Expected result: true but validator returned: &quot;Object #&lt;Object&gt; has no method &#39;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&#39;&quot;

themis failed the test invalid definition, invalid definition schema. Expected result: false but validator returned: &quot;Object #&lt;Object&gt; has no method &#39;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&#39;&quot;

themis failed the test some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part. Expected result: false but validator returned: true

themis failed the test remote ref, containing refs itself, remote ref valid. Expected result: true but validator returned: &quot;Object #&lt;Object&gt; has no method &#39;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&#39;&quot;

themis failed the test remote ref, containing refs itself, remote ref invalid. Expected result: false but validator returned: &quot;Object #&lt;Object&gt; has no method &#39;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&#39;&quot;

themis failed the test remote ref, remote ref valid. Expected result: true but validator returned: &quot;Object #&lt;Object&gt; has no method &#39;http:&#x2F;&#x2F;localhost:1234&#x2F;integer.json&#39;&quot;

themis failed the test remote ref, remote ref invalid. Expected result: false but validator returned: &quot;Object #&lt;Object&gt; has no method &#39;http:&#x2F;&#x2F;localhost:1234&#x2F;integer.json&#39;&quot;

themis failed the test fragment within remote ref, remote fragment valid. Expected result: true but validator returned: &quot;Object #&lt;Object&gt; has no method &#39;http:&#x2F;&#x2F;localhost:1234&#x2F;subSchemas.json#&#x2F;integer&#39;&quot;

themis failed the test fragment within remote ref, remote fragment invalid. Expected result: false but validator returned: &quot;Object #&lt;Object&gt; has no method &#39;http:&#x2F;&#x2F;localhost:1234&#x2F;subSchemas.json#&#x2F;integer&#39;&quot;

themis failed the test ref within remote ref, ref within ref valid. Expected result: true but validator returned: &quot;Object #&lt;Object&gt; has no method &#39;http:&#x2F;&#x2F;localhost:1234&#x2F;subSchemas.json#&#x2F;refToInteger&#39;&quot;

themis failed the test ref within remote ref, ref within ref invalid. Expected result: false but validator returned: &quot;Object #&lt;Object&gt; has no method &#39;http:&#x2F;&#x2F;localhost:1234&#x2F;subSchemas.json#&#x2F;refToInteger&#39;&quot;

themis failed the test change resolution scope, changed scope ref valid. Expected result: true but validator returned: &quot;Object #&lt;Object&gt; has no method &#39;0&#39;&quot;

themis failed the test change resolution scope, changed scope ref invalid. Expected result: false but validator returned: &quot;Object #&lt;Object&gt; has no method &#39;0&#39;&quot;

All other tests passed.

## json-model

json-model could not instantiate with schema for valid definition. This is multiple tests failing.

All other tests passed.

## z-schema 3

z-schema 3 failed the test valid definition, valid definition schema. Expected result: true but validator returned: false

z-schema 3 failed the test maxLength validation, two supplementary Unicode code points is long enough. Expected result: true but validator returned: false

z-schema 3 failed the test minLength validation, one supplementary Unicode code point is not long enough. Expected result: false but validator returned: true

z-schema 3 failed the test validation of URIs, an invalid URI. Expected result: false but validator returned: true

z-schema 3 failed the test validation of URIs, an invalid URI though valid URI reference. Expected result: false but validator returned: true

z-schema 3 failed the test some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part. Expected result: false but validator returned: true

z-schema 3 failed the test remote ref, containing refs itself, remote ref valid. Expected result: true but validator returned: false

z-schema 3 failed the test remote ref, remote ref valid. Expected result: true but validator returned: false

z-schema 3 failed the test fragment within remote ref, remote fragment valid. Expected result: true but validator returned: false

z-schema 3 failed the test ref within remote ref, ref within ref valid. Expected result: true but validator returned: false

z-schema 3 failed the test change resolution scope, changed scope ref valid. Expected result: true but validator returned: false

All other tests passed.

## tv4

tv4 failed the test invalid definition, invalid definition schema. Expected result: false but validator returned: true

tv4 failed the test heterogeneous enum validation, something else is invalid. Expected result: false but validator returned: &quot;Cannot read property &#39;foo&#39; of null&quot;. This excludes this validator from performance tests

All other tests passed.

## jjv

jjv failed the test valid definition, valid definition schema. Expected result: true but validator returned: false

jjv failed the test maxLength validation, two supplementary Unicode code points is long enough. Expected result: true but validator returned: false

jjv failed the test minLength validation, one supplementary Unicode code point is not long enough. Expected result: false but validator returned: true

jjv failed the test some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part. Expected result: false but validator returned: true

jjv failed the test remote ref, containing refs itself, remote ref valid. Expected result: true but validator returned: false

jjv failed the test remote ref, remote ref valid. Expected result: true but validator returned: false

jjv failed the test fragment within remote ref, remote fragment valid. Expected result: true but validator returned: false

jjv failed the test ref within remote ref, ref within ref valid. Expected result: true but validator returned: false

jjv failed the test change resolution scope, changed scope ref valid. Expected result: true but validator returned: false

All other tests passed.

## jsonschema

jsonschema failed the test valid definition, valid definition schema. Expected result: true but validator returned: &quot;no such schema &lt;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&gt;&quot;

jsonschema failed the test invalid definition, invalid definition schema. Expected result: false but validator returned: &quot;no such schema &lt;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&gt;&quot;

jsonschema failed the test maxLength validation, two supplementary Unicode code points is long enough. Expected result: true but validator returned: false

jsonschema failed the test minLength validation, one supplementary Unicode code point is not long enough. Expected result: false but validator returned: true

jsonschema failed the test validation of date-time strings, a valid date-time string. Expected result: true but validator returned: false. This excludes this validator from performance tests

All other tests passed.

## jayschema

jayschema failed the test maxLength validation, two supplementary Unicode code points is long enough. Expected result: true but validator returned: false

jayschema failed the test minLength validation, one supplementary Unicode code point is not long enough. Expected result: false but validator returned: true

jayschema failed the test validation of URIs, an invalid URI though valid URI reference. Expected result: false but validator returned: true

jayschema failed the test some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part. Expected result: false but validator returned: true

jayschema failed the test remote ref, remote ref valid. Expected result: true but validator returned: false

jayschema failed the test fragment within remote ref, remote fragment valid. Expected result: true but validator returned: &quot;Cannot convert null to object&quot;

jayschema failed the test fragment within remote ref, remote fragment invalid. Expected result: false but validator returned: &quot;Cannot convert null to object&quot;

jayschema failed the test ref within remote ref, ref within ref valid. Expected result: true but validator returned: &quot;Cannot convert null to object&quot;

jayschema failed the test ref within remote ref, ref within ref invalid. Expected result: false but validator returned: &quot;Cannot convert null to object&quot;

jayschema failed the test change resolution scope, changed scope ref valid. Expected result: true but validator returned: false

All other tests passed.

# Thanks
This code was originally pulled out from the benchmarks in the `themis` json-schema validator.
Thanks goes to Johny Jose for his work.

# License
MIT
