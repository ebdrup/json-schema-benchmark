# json-schema-benchmark
Benchmarks for Node.js JSON-schema validators.

Also test against official JSON-schema test suite and check
for validation causing side-effects on schema or data.

# Results

![alt text](https://chart.googleapis.com/chart?chxt=x,y&cht=bvs&chco=76A4FB&chls=2.0&chbh=80,4,1&chs=600x200&chxl=0:|is-my-json-valid|themis|z-schema 3|jjv|skeemas|jayschema&chd=t2:100,27.2,10.3,7,1.4,0.1)

|is-my-json-valid|themis|z-schema 3|jjv|skeemas|jayschema|
|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
|100% (5716)|27.2% (1552)|10.3% (588)|7% (400)|1.4% (82)|0.1% (6)|

Validators tested: `is-my-json-valid`, `themis`, `z-schema 3`, `jjv`, `skeemas`, `jayschema`, `jsck`, `jassi`, `JSV`, `request-validator`, `json-model`, `tv4`, `jsonschema`, 
(those not in the results above where excluded because of failing tests - see below for details)

`is-my-json-valid` is currently by far the fastest JSON-schema validator out there.

The fastest validator has 100%, the rest a lower score relative to the fastest.

The number in parenthesis is the number of validations of the entire test suite per second.

# What is this for?

This test suite uses the official JSON-schema test suite, but it uses it to test the speed of validators.

This also means, that if a validator does not pass the official test suite, it will show up in these results (below).
A few of the tests have been disabled for speed testing, because almost none of the validators implement these more
obscure parts of the spec.

This benchmark is using  the `benchmark` module to gain statistically significant results.

Feel free to add more validators to the test suite in a pull request.

# Test failure summary

Number of failed tests per validator

|is-my-json-valid|themis|z-schema 3|jjv|skeemas|jayschema|jsck|jassi|JSV|request-validator|json-model|tv4|jsonschema|
|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
|9|13|11|9|13|10|28|31|54|141|44|26|17|

# Side-effects summary

Number of tests that caused side-effects. The schema or data was altered by the validator.

|is-my-json-valid|themis|z-schema 3|jjv|skeemas|jayschema|jsck|jassi|JSV|request-validator|json-model|tv4|jsonschema|
|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
|0|0|290|0|0|0|0|0|0|149|283|2|4|


# Detailed list of failed tests and side-effects

## `is-my-json-valid` failed tests

is-my-json-valid failed the test &quot;invalid definition, invalid definition schema&quot;. Expected result: false but validator returned: true

is-my-json-valid failed the test &quot;maxLength validation, two supplementary Unicode code points is long enough&quot;. Expected result: true but validator returned: false

is-my-json-valid failed the test &quot;minLength validation, one supplementary Unicode code point is not long enough&quot;. Expected result: false but validator returned: true

is-my-json-valid failed the test &quot;some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part&quot;. Expected result: false but validator returned: true

is-my-json-valid failed the test &quot;remote ref, containing refs itself, remote ref invalid&quot;. Expected result: false but validator returned: true

is-my-json-valid failed the test &quot;remote ref, remote ref invalid&quot;. Expected result: false but validator returned: true

is-my-json-valid failed the test &quot;fragment within remote ref, remote fragment invalid&quot;. Expected result: false but validator returned: true

is-my-json-valid failed the test &quot;ref within remote ref, ref within ref invalid&quot;. Expected result: false but validator returned: true

is-my-json-valid failed the test &quot;change resolution scope, changed scope ref invalid&quot;. Expected result: false but validator returned: true

**All other tests passed**.


## `themis` failed tests

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

**All other tests passed**.


## `z-schema 3` failed tests

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

**All other tests passed**.

## `z-schema 3` side-effects

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;additionalItems as schema, additional items match schema&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;additionalItems as schema, additional items do not match schema&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;items is schema, no additionalItems, all items match schema&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;array of items with no additionalItems, no additional items present&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;array of items with no additionalItems, additional items are not permitted&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;additionalItems as false without items, items defaults to empty schema so everything is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;additionalItems as false without items, ignores non-arrays&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;additionalItems are allowed by default, only the first item is validated&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;additionalProperties being false does not allow other properties, no additional properties is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;additionalProperties being false does not allow other properties, an additional property is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;additionalProperties being false does not allow other properties, ignores non-objects&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;additionalProperties being false does not allow other properties, patternProperties are not additional properties&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;additionalProperties allows a schema which should validate, no additional properties is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;additionalProperties allows a schema which should validate, an additional valid property is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;additionalProperties allows a schema which should validate, an additional invalid property is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;additionalProperties can exist by itself, an additional valid property is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;additionalProperties can exist by itself, an additional invalid property is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;additionalProperties are allowed by default, additional properties are allowed&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;allOf, allOf&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;allOf, mismatch second&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;allOf, mismatch first&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;allOf, wrong type&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;allOf with base schema, valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;allOf with base schema, mismatch base schema&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;allOf with base schema, mismatch first allOf&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;allOf with base schema, mismatch second allOf&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;allOf with base schema, mismatch both&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;allOf simple types, valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;allOf simple types, mismatch one&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;anyOf, first anyOf valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;anyOf, second anyOf valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;anyOf, both anyOf valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;anyOf, neither anyOf valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;anyOf with base schema, mismatch base schema&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;anyOf with base schema, one anyOf valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;anyOf with base schema, both anyOf invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;invalid type for default, valid when property is specified&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;invalid type for default, still valid when the invalid default is used&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;invalid string value for default, valid when property is specified&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;invalid string value for default, still valid when the invalid default is used&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;valid definition, valid definition schema&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;invalid definition, invalid definition schema&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;dependencies, neither&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;dependencies, nondependant&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;dependencies, with dependency&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;dependencies, missing dependency&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;dependencies, ignores non-objects&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;multiple dependencies, neither&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;multiple dependencies, nondependants&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;multiple dependencies, with dependencies&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;multiple dependencies, missing dependency&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;multiple dependencies, missing other dependency&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;multiple dependencies, missing both dependencies&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;multiple dependencies subschema, valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;multiple dependencies subschema, no dependency&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;multiple dependencies subschema, wrong type&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;multiple dependencies subschema, wrong type other&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;multiple dependencies subschema, wrong type both&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;simple enum validation, one of the enum is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;simple enum validation, something else is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;heterogeneous enum validation, one of the enum is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;heterogeneous enum validation, something else is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;heterogeneous enum validation, objects are deep compared&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;enums in properties, both properties are valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;enums in properties, missing optional property is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;enums in properties, missing required property is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;enums in properties, missing all properties is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;a schema given for items, valid items&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;a schema given for items, wrong type of items&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;a schema given for items, ignores non-arrays&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;an array of schemas for items, correct types&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;an array of schemas for items, wrong types&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;maxItems validation, shorter is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;maxItems validation, exact length is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;maxItems validation, too long is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;maxItems validation, ignores non-arrays&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;maxLength validation, shorter is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;maxLength validation, exact length is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;maxLength validation, too long is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;maxLength validation, ignores non-strings&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;maxLength validation, two supplementary Unicode code points is long enough&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;maxProperties validation, shorter is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;maxProperties validation, exact length is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;maxProperties validation, too long is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;maxProperties validation, ignores non-objects&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;maximum validation, below the maximum is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;maximum validation, above the maximum is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;maximum validation, ignores non-numbers&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;exclusiveMaximum validation, below the maximum is still valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;exclusiveMaximum validation, boundary point is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;minItems validation, longer is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;minItems validation, exact length is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;minItems validation, too short is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;minItems validation, ignores non-arrays&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;minLength validation, longer is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;minLength validation, exact length is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;minLength validation, too short is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;minLength validation, ignores non-strings&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;minLength validation, one supplementary Unicode code point is not long enough&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;minProperties validation, longer is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;minProperties validation, exact length is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;minProperties validation, too short is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;minProperties validation, ignores non-objects&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;minimum validation, above the minimum is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;minimum validation, below the minimum is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;minimum validation, ignores non-numbers&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;exclusiveMinimum validation, above the minimum is still valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;exclusiveMinimum validation, boundary point is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;by int, int by int&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;by int, int by int fail&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;by int, ignores non-numbers&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;by number, zero is multiple of anything&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;by number, 4.5 is multiple of 1.5&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;by number, 35 is not multiple of 1.5&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;by small number, 0.0075 is multiple of 0.0001&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;by small number, 0.00751 is not multiple of 0.0001&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;not, allowed&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;not, disallowed&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;not multiple types, valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;not multiple types, mismatch&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;not multiple types, other mismatch&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;not more complex schema, match&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;not more complex schema, other match&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;not more complex schema, mismatch&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;forbidden property, property present&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;forbidden property, property absent&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;oneOf, first oneOf valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;oneOf, second oneOf valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;oneOf, both oneOf valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;oneOf, neither oneOf valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;oneOf with base schema, mismatch base schema&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;oneOf with base schema, one oneOf valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;oneOf with base schema, both oneOf valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;integer, a bignum is an integer&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;number, a bignum is a number&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;integer, a negative bignum is an integer&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;number, a negative bignum is a number&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;string, a bignum is not a string&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;integer comparison, comparison works for high numbers&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;float comparison with high precision, comparison works for high numbers&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;integer comparison, comparison works for very negative numbers&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;float comparison with high precision on negative numbers, comparison works for very negative numbers&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;validation of date-time strings, a valid date-time string&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;validation of date-time strings, an invalid date-time string&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;validation of date-time strings, only RFC3339 not all of ISO 8601 are valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;validation of URIs, a valid URI&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;validation of URIs, an invalid URI&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;validation of URIs, an invalid URI though valid URI reference&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;validation of e-mail addresses, a valid e-mail address&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;validation of e-mail addresses, an invalid e-mail address&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;validation of IP addresses, a valid IP address&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;validation of IP addresses, an IP address with too many components&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;validation of IP addresses, an IP address with out-of-range values&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;validation of IP addresses, an IP address without 4 components&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;validation of IP addresses, an IP address as an integer&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;validation of IPv6 addresses, a valid IPv6 address&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;validation of IPv6 addresses, an IPv6 address with out-of-range values&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;validation of IPv6 addresses, an IPv6 address with too many components&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;validation of IPv6 addresses, an IPv6 address containing illegal characters&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;validation of host names, a valid host name&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;validation of host names, a host name starting with an illegal character&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;validation of host names, a host name containing illegal characters&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;validation of host names, a host name with a component too long&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;pattern validation, a matching pattern is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;pattern validation, a non-matching pattern is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;pattern validation, ignores non-strings&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;patternProperties validates properties matching a regex, a single valid match is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;patternProperties validates properties matching a regex, multiple valid matches is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;patternProperties validates properties matching a regex, a single invalid match is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;patternProperties validates properties matching a regex, multiple invalid matches is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;patternProperties validates properties matching a regex, ignores non-objects&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;multiple simultaneous patternProperties are validated, a single valid match is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;multiple simultaneous patternProperties are validated, a simultaneous match is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;multiple simultaneous patternProperties are validated, multiple matches is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;multiple simultaneous patternProperties are validated, an invalid due to one is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;multiple simultaneous patternProperties are validated, an invalid due to the other is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;multiple simultaneous patternProperties are validated, an invalid due to both is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;regexes are not anchored by default and are case sensitive, non recognized members are ignored&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;regexes are not anchored by default and are case sensitive, recognized members are accounted for&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;regexes are not anchored by default and are case sensitive, regexes are case sensitive&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;regexes are not anchored by default and are case sensitive, regexes are case sensitive, 2&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;object properties validation, both properties present and valid is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;object properties validation, one property invalid is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;object properties validation, both properties invalid is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;object properties validation, doesn&#39;t invalidate other properties&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;object properties validation, ignores non-objects&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;properties, patternProperties, additionalProperties interaction, property validates property&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;properties, patternProperties, additionalProperties interaction, property invalidates property&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;properties, patternProperties, additionalProperties interaction, patternProperty invalidates property&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;properties, patternProperties, additionalProperties interaction, patternProperty validates nonproperty&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;properties, patternProperties, additionalProperties interaction, patternProperty invalidates nonproperty&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;properties, patternProperties, additionalProperties interaction, additionalProperty ignores property&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;properties, patternProperties, additionalProperties interaction, additionalProperty validates others&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;properties, patternProperties, additionalProperties interaction, additionalProperty invalidates others&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;root pointer ref, match&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;root pointer ref, recursive match&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;root pointer ref, mismatch&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;root pointer ref, recursive mismatch&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;relative pointer ref to object, match&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;relative pointer ref to object, mismatch&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;relative pointer ref to array, match array&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;relative pointer ref to array, mismatch array&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;escaped pointer ref, slash&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;escaped pointer ref, tilda&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;escaped pointer ref, percent&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;nested refs, nested ref valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;nested refs, nested ref invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;remote ref, containing refs itself, remote ref valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;remote ref, containing refs itself, remote ref invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;remote ref, remote ref valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;remote ref, remote ref invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;fragment within remote ref, remote fragment valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;fragment within remote ref, remote fragment invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;ref within remote ref, ref within ref valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;ref within remote ref, ref within ref invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;change resolution scope, changed scope ref valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;change resolution scope, changed scope ref invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;required validation, present required property is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;required validation, non-present required property is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;required default validation, not required by default&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;integer type matches integers, an integer is an integer&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;integer type matches integers, a float is not an integer&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;integer type matches integers, a string is not an integer&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;integer type matches integers, an object is not an integer&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;integer type matches integers, an array is not an integer&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;integer type matches integers, a boolean is not an integer&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;integer type matches integers, null is not an integer&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;number type matches numbers, an integer is a number&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;number type matches numbers, a float is a number&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;number type matches numbers, a string is not a number&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;number type matches numbers, an object is not a number&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;number type matches numbers, an array is not a number&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;number type matches numbers, a boolean is not a number&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;number type matches numbers, null is not a number&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;string type matches strings, 1 is not a string&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;string type matches strings, a float is not a string&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;string type matches strings, a string is a string&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;string type matches strings, an object is not a string&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;string type matches strings, an array is not a string&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;string type matches strings, a boolean is not a string&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;string type matches strings, null is not a string&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;object type matches objects, an integer is not an object&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;object type matches objects, a float is not an object&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;object type matches objects, a string is not an object&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;object type matches objects, an object is an object&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;object type matches objects, an array is not an object&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;object type matches objects, a boolean is not an object&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;object type matches objects, null is not an object&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;array type matches arrays, an integer is not an array&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;array type matches arrays, a float is not an array&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;array type matches arrays, a string is not an array&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;array type matches arrays, an object is not an array&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;array type matches arrays, an array is not an array&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;array type matches arrays, a boolean is not an array&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;array type matches arrays, null is not an array&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;boolean type matches booleans, an integer is not a boolean&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;boolean type matches booleans, a float is not a boolean&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;boolean type matches booleans, a string is not a boolean&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;boolean type matches booleans, an object is not a boolean&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;boolean type matches booleans, an array is not a boolean&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;boolean type matches booleans, a boolean is not a boolean&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;boolean type matches booleans, null is not a boolean&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;null type matches only the null object, an integer is not null&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;null type matches only the null object, a float is not null&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;null type matches only the null object, a string is not null&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;null type matches only the null object, an object is not null&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;null type matches only the null object, an array is not null&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;null type matches only the null object, a boolean is not null&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;null type matches only the null object, null is null&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;multiple types can be specified in an array, an integer is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;multiple types can be specified in an array, a string is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;multiple types can be specified in an array, a float is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;multiple types can be specified in an array, an object is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;multiple types can be specified in an array, an array is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;multiple types can be specified in an array, a boolean is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;multiple types can be specified in an array, null is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;uniqueItems validation, unique array of integers is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;uniqueItems validation, non-unique array of integers is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;uniqueItems validation, numbers are unique if mathematically unequal&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;uniqueItems validation, unique array of objects is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;uniqueItems validation, non-unique array of objects is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;uniqueItems validation, unique array of nested objects is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;uniqueItems validation, non-unique array of nested objects is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;uniqueItems validation, unique array of arrays is valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;uniqueItems validation, non-unique array of arrays is invalid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;uniqueItems validation, 1 and true are unique&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;uniqueItems validation, 0 and false are unique&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;uniqueItems validation, unique heterogeneous types are valid&quot;

z-schema 3 had a side-effect on (altered the original) schema in the test &quot;uniqueItems validation, non-unique heterogeneous types are invalid&quot;



## `jjv` failed tests

jjv failed the test &quot;valid definition, valid definition schema&quot;. Expected result: true but validator returned: false

jjv failed the test &quot;maxLength validation, two supplementary Unicode code points is long enough&quot;. Expected result: true but validator returned: false

jjv failed the test &quot;minLength validation, one supplementary Unicode code point is not long enough&quot;. Expected result: false but validator returned: true

jjv failed the test &quot;some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part&quot;. Expected result: false but validator returned: true

jjv failed the test &quot;remote ref, containing refs itself, remote ref valid&quot;. Expected result: true but validator returned: false

jjv failed the test &quot;remote ref, remote ref valid&quot;. Expected result: true but validator returned: false

jjv failed the test &quot;fragment within remote ref, remote fragment valid&quot;. Expected result: true but validator returned: false

jjv failed the test &quot;ref within remote ref, ref within ref valid&quot;. Expected result: true but validator returned: false

jjv failed the test &quot;change resolution scope, changed scope ref valid&quot;. Expected result: true but validator returned: false

**All other tests passed**.


## `skeemas` failed tests

skeemas failed the test &quot;valid definition, valid definition schema&quot;. Expected result: true but validator returned: &quot;Unable to locate JSON Ref (http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema)&quot;

skeemas failed the test &quot;invalid definition, invalid definition schema&quot;. Expected result: false but validator returned: &quot;Unable to locate JSON Ref (http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema)&quot;

skeemas failed the test &quot;some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part&quot;. Expected result: false but validator returned: true

skeemas failed the test &quot;remote ref, containing refs itself, remote ref valid&quot;. Expected result: true but validator returned: &quot;Unable to locate JSON Ref (http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema)&quot;

skeemas failed the test &quot;remote ref, containing refs itself, remote ref invalid&quot;. Expected result: false but validator returned: &quot;Unable to locate JSON Ref (http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema)&quot;

skeemas failed the test &quot;remote ref, remote ref valid&quot;. Expected result: true but validator returned: &quot;Unable to locate JSON Ref (http:&#x2F;&#x2F;localhost:1234&#x2F;integer.json)&quot;

skeemas failed the test &quot;remote ref, remote ref invalid&quot;. Expected result: false but validator returned: &quot;Unable to locate JSON Ref (http:&#x2F;&#x2F;localhost:1234&#x2F;integer.json)&quot;

skeemas failed the test &quot;fragment within remote ref, remote fragment valid&quot;. Expected result: true but validator returned: &quot;Unable to locate JSON Ref (http:&#x2F;&#x2F;localhost:1234&#x2F;subSchemas.json)&quot;

skeemas failed the test &quot;fragment within remote ref, remote fragment invalid&quot;. Expected result: false but validator returned: &quot;Unable to locate JSON Ref (http:&#x2F;&#x2F;localhost:1234&#x2F;subSchemas.json)&quot;

skeemas failed the test &quot;ref within remote ref, ref within ref valid&quot;. Expected result: true but validator returned: &quot;Unable to locate JSON Ref (http:&#x2F;&#x2F;localhost:1234&#x2F;subSchemas.json)&quot;

skeemas failed the test &quot;ref within remote ref, ref within ref invalid&quot;. Expected result: false but validator returned: &quot;Unable to locate JSON Ref (http:&#x2F;&#x2F;localhost:1234&#x2F;subSchemas.json)&quot;

skeemas failed the test &quot;change resolution scope, changed scope ref valid&quot;. Expected result: true but validator returned: &quot;Unable to locate JSON Ref (http:&#x2F;&#x2F;localhost:1234&#x2F;folder&#x2F;folderInteger.json)&quot;

skeemas failed the test &quot;change resolution scope, changed scope ref invalid&quot;. Expected result: false but validator returned: &quot;Unable to locate JSON Ref (http:&#x2F;&#x2F;localhost:1234&#x2F;folder&#x2F;folderInteger.json)&quot;

**All other tests passed**.


## `jayschema` failed tests

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

**All other tests passed**.


## `jsck` failed tests

jsck could not instantiate with schema for &quot;valid definition&quot;. This is multiple tests failing. **This excludes this validator from performance tests** (Unresolvable $ref values: [&quot;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&quot;])

jsck failed the test &quot;valid definition, valid definition schema&quot;. Because the schema failed to load

jsck could not instantiate with schema for &quot;invalid definition&quot;. This is multiple tests failing. **This excludes this validator from performance tests** (Unresolvable $ref values: [&quot;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&quot;])

jsck failed the test &quot;invalid definition, invalid definition schema&quot;. Because the schema failed to load

jsck failed the test &quot;maxLength validation, two supplementary Unicode code points is long enough&quot;. Expected result: true but validator returned: false

jsck failed the test &quot;minLength validation, one supplementary Unicode code point is not long enough&quot;. Expected result: false but validator returned: true

jsck failed the test &quot;some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part&quot;. Expected result: false but validator returned: true

jsck could not instantiate with schema for &quot;remote ref, containing refs itself&quot;. This is multiple tests failing. **This excludes this validator from performance tests** (Unresolvable $ref values: [&quot;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&quot;])

jsck failed the test &quot;remote ref, containing refs itself, remote ref valid&quot;. Because the schema failed to load

jsck failed the test &quot;remote ref, containing refs itself, remote ref invalid&quot;. Because the schema failed to load

jsck could not instantiate with schema for &quot;remote ref&quot;. This is multiple tests failing. **This excludes this validator from performance tests** (Unresolvable $ref values: [&quot;http:&#x2F;&#x2F;localhost:1234&#x2F;integer.json&quot;])

jsck failed the test &quot;remote ref, remote ref valid&quot;. Because the schema failed to load

jsck failed the test &quot;remote ref, remote ref invalid&quot;. Because the schema failed to load

jsck could not instantiate with schema for &quot;fragment within remote ref&quot;. This is multiple tests failing. **This excludes this validator from performance tests** (Unresolvable $ref values: [&quot;http:&#x2F;&#x2F;localhost:1234&#x2F;subSchemas.json#&#x2F;integer&quot;])

jsck failed the test &quot;fragment within remote ref, remote fragment valid&quot;. Because the schema failed to load

jsck failed the test &quot;fragment within remote ref, remote fragment invalid&quot;. Because the schema failed to load

jsck could not instantiate with schema for &quot;ref within remote ref&quot;. This is multiple tests failing. **This excludes this validator from performance tests** (Unresolvable $ref values: [&quot;http:&#x2F;&#x2F;localhost:1234&#x2F;subSchemas.json#&#x2F;refToInteger&quot;])

jsck failed the test &quot;ref within remote ref, ref within ref valid&quot;. Because the schema failed to load

jsck failed the test &quot;ref within remote ref, ref within ref invalid&quot;. Because the schema failed to load

jsck could not instantiate with schema for &quot;change resolution scope&quot;. This is multiple tests failing. **This excludes this validator from performance tests** (Unresolvable $ref values: [&quot;http:&#x2F;&#x2F;localhost:1234&#x2F;&quot;])

jsck failed the test &quot;change resolution scope, changed scope ref valid&quot;. Because the schema failed to load

jsck failed the test &quot;change resolution scope, changed scope ref invalid&quot;. Because the schema failed to load

jsck failed the test &quot;uniqueItems validation, non-unique array of integers is invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jsck failed the test &quot;uniqueItems validation, numbers are unique if mathematically unequal&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jsck failed the test &quot;uniqueItems validation, non-unique array of objects is invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jsck failed the test &quot;uniqueItems validation, non-unique array of nested objects is invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jsck failed the test &quot;uniqueItems validation, non-unique array of arrays is invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

jsck failed the test &quot;uniqueItems validation, non-unique heterogeneous types are invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

**All other tests passed**.


## `jassi` failed tests

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

**All other tests passed**.


## `JSV` failed tests

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

**All other tests passed**.


## `request-validator` failed tests

request-validator failed the test &quot;additionalItems as schema, additional items match schema&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;items is schema, no additionalItems, all items match schema&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;array of items with no additionalItems, no additional items present&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;additionalItems as false without items, items defaults to empty schema so everything is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;additionalItems as false without items, ignores non-arrays&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;additionalItems are allowed by default, only the first item is validated&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;additionalProperties being false does not allow other properties, no additional properties is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;additionalProperties being false does not allow other properties, ignores non-objects&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;additionalProperties being false does not allow other properties, patternProperties are not additional properties&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;additionalProperties allows a schema which should validate, no additional properties is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;additionalProperties allows a schema which should validate, an additional valid property is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;additionalProperties can exist by itself, an additional valid property is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;additionalProperties are allowed by default, additional properties are allowed&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;allOf, allOf&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;allOf with base schema, valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;allOf simple types, valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;anyOf, first anyOf valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;anyOf, second anyOf valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;anyOf, both anyOf valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;anyOf with base schema, one anyOf valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;invalid type for default, valid when property is specified&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;invalid type for default, still valid when the invalid default is used&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;invalid string value for default, valid when property is specified&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;invalid string value for default, still valid when the invalid default is used&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;valid definition, valid definition schema&quot;. Expected result: true but validator returned: false

request-validator failed the test &quot;dependencies, neither&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;dependencies, nondependant&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;dependencies, with dependency&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;dependencies, ignores non-objects&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;multiple dependencies, neither&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;multiple dependencies, nondependants&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;multiple dependencies, with dependencies&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;multiple dependencies subschema, valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;multiple dependencies subschema, no dependency&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;simple enum validation, one of the enum is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;heterogeneous enum validation, one of the enum is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;enums in properties, both properties are valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;enums in properties, missing optional property is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;a schema given for items, valid items&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;a schema given for items, ignores non-arrays&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;an array of schemas for items, correct types&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;maxItems validation, shorter is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;maxItems validation, exact length is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;maxItems validation, ignores non-arrays&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;maxLength validation, shorter is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;maxLength validation, exact length is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;maxLength validation, ignores non-strings&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;maxLength validation, two supplementary Unicode code points is long enough&quot;. Expected result: true but validator returned: false

request-validator failed the test &quot;maxProperties validation, shorter is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;maxProperties validation, exact length is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;maxProperties validation, ignores non-objects&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;maximum validation, below the maximum is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;maximum validation, ignores non-numbers&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;exclusiveMaximum validation, below the maximum is still valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;minItems validation, longer is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;minItems validation, exact length is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;minItems validation, ignores non-arrays&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;minLength validation, longer is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;minLength validation, exact length is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;minLength validation, ignores non-strings&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;minProperties validation, longer is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;minProperties validation, exact length is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;minProperties validation, ignores non-objects&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;minimum validation, above the minimum is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;minimum validation, ignores non-numbers&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;exclusiveMinimum validation, above the minimum is still valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;by int, int by int&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;by int, ignores non-numbers&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;by number, zero is multiple of anything&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;by number, 4.5 is multiple of 1.5&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;by small number, 0.0075 is multiple of 0.0001&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;not, allowed&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;not multiple types, valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;not more complex schema, match&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;not more complex schema, other match&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;forbidden property, property absent&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;oneOf, first oneOf valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;oneOf, second oneOf valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;oneOf with base schema, one oneOf valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;integer, a bignum is an integer&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;number, a bignum is a number&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;integer, a negative bignum is an integer&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;number, a negative bignum is a number&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;integer comparison, comparison works for high numbers&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;integer comparison, comparison works for very negative numbers&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;validation of date-time strings, a valid date-time string&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;validation of URIs, a valid URI&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;validation of e-mail addresses, a valid e-mail address&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;validation of IP addresses, a valid IP address&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;validation of IPv6 addresses, a valid IPv6 address&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;validation of host names, a valid host name&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;pattern validation, a matching pattern is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;pattern validation, ignores non-strings&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;patternProperties validates properties matching a regex, a single valid match is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;patternProperties validates properties matching a regex, multiple valid matches is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;patternProperties validates properties matching a regex, ignores non-objects&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;multiple simultaneous patternProperties are validated, a single valid match is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;multiple simultaneous patternProperties are validated, a simultaneous match is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;multiple simultaneous patternProperties are validated, multiple matches is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;regexes are not anchored by default and are case sensitive, non recognized members are ignored&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;regexes are not anchored by default and are case sensitive, regexes are case sensitive&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;object properties validation, both properties present and valid is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;object properties validation, doesn&#39;t invalidate other properties&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;object properties validation, ignores non-objects&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;properties, patternProperties, additionalProperties interaction, property validates property&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;properties, patternProperties, additionalProperties interaction, patternProperty validates nonproperty&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;properties, patternProperties, additionalProperties interaction, additionalProperty ignores property&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;properties, patternProperties, additionalProperties interaction, additionalProperty validates others&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;root pointer ref, match&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;root pointer ref, recursive match&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;relative pointer ref to object, match&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;relative pointer ref to array, match array&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;nested refs, nested ref valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;remote ref, containing refs itself, remote ref valid&quot;. Expected result: true but validator returned: false

request-validator failed the test &quot;remote ref, remote ref valid&quot;. Expected result: true but validator returned: false

request-validator could not instantiate with schema for &quot;fragment within remote ref&quot;. This is multiple tests failing. **This excludes this validator from performance tests** (request-validator: invalid schema reference &#39;http:&#x2F;&#x2F;localhost:1234&#x2F;subSchemas.json#&#x2F;integer&#39;)

request-validator failed the test &quot;fragment within remote ref, remote fragment valid&quot;. Because the schema failed to load

request-validator failed the test &quot;fragment within remote ref, remote fragment invalid&quot;. Because the schema failed to load

request-validator could not instantiate with schema for &quot;ref within remote ref&quot;. This is multiple tests failing. **This excludes this validator from performance tests** (request-validator: invalid schema reference &#39;http:&#x2F;&#x2F;localhost:1234&#x2F;subSchemas.json#&#x2F;refToInteger&#39;)

request-validator failed the test &quot;ref within remote ref, ref within ref valid&quot;. Because the schema failed to load

request-validator failed the test &quot;ref within remote ref, ref within ref invalid&quot;. Because the schema failed to load

request-validator failed the test &quot;change resolution scope, changed scope ref valid&quot;. Expected result: true but validator returned: false

request-validator failed the test &quot;required validation, present required property is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;required default validation, not required by default&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;integer type matches integers, an integer is an integer&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;number type matches numbers, an integer is a number&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;number type matches numbers, a float is a number&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;string type matches strings, a string is a string&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;object type matches objects, an object is an object&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;array type matches arrays, an array is not an array&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;boolean type matches booleans, a boolean is not a boolean&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;null type matches only the null object, null is null&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;multiple types can be specified in an array, an integer is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;multiple types can be specified in an array, a string is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;uniqueItems validation, unique array of integers is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;uniqueItems validation, unique array of objects is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;uniqueItems validation, unique array of nested objects is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;uniqueItems validation, unique array of arrays is valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;uniqueItems validation, 1 and true are unique&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;uniqueItems validation, 0 and false are unique&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

request-validator failed the test &quot;uniqueItems validation, unique heterogeneous types are valid&quot;. Expected result: true but validator returned: false. **This excludes this validator from performance tests**

**All other tests passed**.

## `request-validator` side-effects

request-validator had a side-effect on (altered the original) data in the test &quot;additionalItems as schema, additional items match schema&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;additionalItems as schema, additional items do not match schema&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;items is schema, no additionalItems, all items match schema&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;array of items with no additionalItems, no additional items present&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;array of items with no additionalItems, additional items are not permitted&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;additionalItems as false without items, items defaults to empty schema so everything is valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;additionalItems as false without items, ignores non-arrays&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;additionalItems are allowed by default, only the first item is validated&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;additionalProperties being false does not allow other properties, no additional properties is valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;additionalProperties being false does not allow other properties, an additional property is invalid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;additionalProperties being false does not allow other properties, ignores non-objects&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;additionalProperties being false does not allow other properties, patternProperties are not additional properties&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;additionalProperties allows a schema which should validate, no additional properties is valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;additionalProperties allows a schema which should validate, an additional valid property is valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;additionalProperties allows a schema which should validate, an additional invalid property is invalid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;additionalProperties can exist by itself, an additional valid property is valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;additionalProperties can exist by itself, an additional invalid property is invalid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;additionalProperties are allowed by default, additional properties are allowed&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;allOf, allOf&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;allOf, mismatch second&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;allOf, mismatch first&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;allOf, wrong type&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;allOf with base schema, valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;allOf with base schema, mismatch base schema&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;allOf with base schema, mismatch first allOf&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;allOf with base schema, mismatch second allOf&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;allOf with base schema, mismatch both&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;invalid type for default, valid when property is specified&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;invalid type for default, still valid when the invalid default is used&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;invalid string value for default, valid when property is specified&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;invalid string value for default, still valid when the invalid default is used&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;valid definition, valid definition schema&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;invalid definition, invalid definition schema&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;dependencies, neither&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;dependencies, nondependant&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;dependencies, with dependency&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;dependencies, missing dependency&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;multiple dependencies, neither&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;multiple dependencies, nondependants&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;multiple dependencies, with dependencies&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;multiple dependencies, missing dependency&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;multiple dependencies, missing other dependency&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;multiple dependencies, missing both dependencies&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;multiple dependencies subschema, valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;multiple dependencies subschema, no dependency&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;multiple dependencies subschema, wrong type&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;multiple dependencies subschema, wrong type other&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;multiple dependencies subschema, wrong type both&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;heterogeneous enum validation, one of the enum is valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;heterogeneous enum validation, objects are deep compared&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;enums in properties, both properties are valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;enums in properties, missing optional property is valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;enums in properties, missing required property is invalid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;enums in properties, missing all properties is invalid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;a schema given for items, valid items&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;a schema given for items, wrong type of items&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;a schema given for items, ignores non-arrays&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;an array of schemas for items, correct types&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;an array of schemas for items, wrong types&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;maxItems validation, shorter is valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;maxItems validation, exact length is valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;maxItems validation, too long is invalid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;maxProperties validation, shorter is valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;maxProperties validation, exact length is valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;maxProperties validation, too long is invalid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;minItems validation, longer is valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;minItems validation, exact length is valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;minItems validation, too short is invalid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;minProperties validation, longer is valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;minProperties validation, exact length is valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;minProperties validation, too short is invalid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;not more complex schema, other match&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;not more complex schema, mismatch&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;forbidden property, property present&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;forbidden property, property absent&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;patternProperties validates properties matching a regex, a single valid match is valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;patternProperties validates properties matching a regex, multiple valid matches is valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;patternProperties validates properties matching a regex, a single invalid match is invalid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;patternProperties validates properties matching a regex, multiple invalid matches is invalid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;multiple simultaneous patternProperties are validated, a single valid match is valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;multiple simultaneous patternProperties are validated, a simultaneous match is valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;multiple simultaneous patternProperties are validated, multiple matches is valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;multiple simultaneous patternProperties are validated, an invalid due to one is invalid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;multiple simultaneous patternProperties are validated, an invalid due to the other is invalid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;multiple simultaneous patternProperties are validated, an invalid due to both is invalid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;regexes are not anchored by default and are case sensitive, non recognized members are ignored&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;regexes are not anchored by default and are case sensitive, recognized members are accounted for&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;regexes are not anchored by default and are case sensitive, regexes are case sensitive&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;regexes are not anchored by default and are case sensitive, regexes are case sensitive, 2&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;object properties validation, both properties present and valid is valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;object properties validation, one property invalid is invalid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;object properties validation, both properties invalid is invalid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;object properties validation, doesn&#39;t invalidate other properties&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;object properties validation, ignores non-objects&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;properties, patternProperties, additionalProperties interaction, property validates property&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;properties, patternProperties, additionalProperties interaction, property invalidates property&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;properties, patternProperties, additionalProperties interaction, patternProperty invalidates property&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;properties, patternProperties, additionalProperties interaction, patternProperty validates nonproperty&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;properties, patternProperties, additionalProperties interaction, patternProperty invalidates nonproperty&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;properties, patternProperties, additionalProperties interaction, additionalProperty ignores property&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;properties, patternProperties, additionalProperties interaction, additionalProperty validates others&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;properties, patternProperties, additionalProperties interaction, additionalProperty invalidates others&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;root pointer ref, match&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;root pointer ref, recursive match&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;root pointer ref, mismatch&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;root pointer ref, recursive mismatch&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;relative pointer ref to object, match&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;relative pointer ref to object, mismatch&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;relative pointer ref to array, match array&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;relative pointer ref to array, mismatch array&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;escaped pointer ref, slash&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;escaped pointer ref, tilda&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;escaped pointer ref, percent&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;remote ref, containing refs itself, remote ref valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;remote ref, containing refs itself, remote ref invalid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;change resolution scope, changed scope ref valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;change resolution scope, changed scope ref invalid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;required validation, present required property is valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;required validation, non-present required property is invalid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;required default validation, not required by default&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;integer type matches integers, an object is not an integer&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;integer type matches integers, an array is not an integer&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;number type matches numbers, an object is not a number&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;number type matches numbers, an array is not a number&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;string type matches strings, an object is not a string&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;string type matches strings, an array is not a string&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;object type matches objects, an object is an object&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;object type matches objects, an array is not an object&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;array type matches arrays, an object is not an array&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;array type matches arrays, an array is not an array&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;boolean type matches booleans, an object is not a boolean&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;boolean type matches booleans, an array is not a boolean&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;null type matches only the null object, an object is not null&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;null type matches only the null object, an array is not null&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;multiple types can be specified in an array, an object is invalid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;multiple types can be specified in an array, an array is invalid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;uniqueItems validation, unique array of integers is valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;uniqueItems validation, non-unique array of integers is invalid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;uniqueItems validation, numbers are unique if mathematically unequal&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;uniqueItems validation, unique array of objects is valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;uniqueItems validation, non-unique array of objects is invalid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;uniqueItems validation, unique array of nested objects is valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;uniqueItems validation, non-unique array of nested objects is invalid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;uniqueItems validation, unique array of arrays is valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;uniqueItems validation, non-unique array of arrays is invalid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;uniqueItems validation, 1 and true are unique&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;uniqueItems validation, 0 and false are unique&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;uniqueItems validation, unique heterogeneous types are valid&quot;. **This excludes this validator from performance tests**

request-validator had a side-effect on (altered the original) data in the test &quot;uniqueItems validation, non-unique heterogeneous types are invalid&quot;. **This excludes this validator from performance tests**



## `json-model` failed tests

json-model could not instantiate with schema for &quot;valid definition&quot;. This is multiple tests failing. **This excludes this validator from performance tests** (Requests not enabled - try JsonModel.setRequestFunction(func):
{&quot;method&quot;:&quot;GET&quot;,&quot;url&quot;:&quot;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema&quot;})

json-model failed the test &quot;valid definition, valid definition schema&quot;. Because the schema failed to load

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

json-model failed the test &quot;remote ref, remote ref valid&quot;. Because the schema failed to load

json-model failed the test &quot;remote ref, remote ref invalid&quot;. Because the schema failed to load

json-model could not instantiate with schema for &quot;fragment within remote ref&quot;. This is multiple tests failing. **This excludes this validator from performance tests** (Requests not enabled - try JsonModel.setRequestFunction(func):
{&quot;method&quot;:&quot;GET&quot;,&quot;url&quot;:&quot;http:&#x2F;&#x2F;localhost:1234&#x2F;subSchemas.json&quot;})

json-model failed the test &quot;fragment within remote ref, remote fragment valid&quot;. Because the schema failed to load

json-model failed the test &quot;fragment within remote ref, remote fragment invalid&quot;. Because the schema failed to load

json-model failed the test &quot;ref within remote ref, ref within ref invalid&quot;. Expected result: false but validator returned: true

json-model could not instantiate with schema for &quot;change resolution scope&quot;. This is multiple tests failing. **This excludes this validator from performance tests** (Requests not enabled - try JsonModel.setRequestFunction(func):
{&quot;method&quot;:&quot;GET&quot;,&quot;url&quot;:&quot;http:&#x2F;&#x2F;localhost:1234&#x2F;folder&#x2F;folderInteger.json&quot;})

json-model failed the test &quot;change resolution scope, changed scope ref valid&quot;. Because the schema failed to load

json-model failed the test &quot;change resolution scope, changed scope ref invalid&quot;. Because the schema failed to load

json-model failed the test &quot;uniqueItems validation, non-unique array of integers is invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;uniqueItems validation, numbers are unique if mathematically unequal&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;uniqueItems validation, non-unique array of objects is invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;uniqueItems validation, non-unique array of nested objects is invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;uniqueItems validation, non-unique array of arrays is invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

json-model failed the test &quot;uniqueItems validation, non-unique heterogeneous types are invalid&quot;. Expected result: false but validator returned: true. **This excludes this validator from performance tests**

**All other tests passed**.

## `json-model` side-effects

json-model had a side-effect on (altered the original) schema in the test &quot;additionalItems as schema, additional items match schema&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;additionalItems as schema, additional items do not match schema&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;items is schema, no additionalItems, all items match schema&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;array of items with no additionalItems, no additional items present&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;array of items with no additionalItems, additional items are not permitted&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;additionalItems as false without items, items defaults to empty schema so everything is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;additionalItems as false without items, ignores non-arrays&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;additionalItems are allowed by default, only the first item is validated&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;additionalProperties being false does not allow other properties, no additional properties is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;additionalProperties being false does not allow other properties, an additional property is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;additionalProperties being false does not allow other properties, ignores non-objects&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;additionalProperties being false does not allow other properties, patternProperties are not additional properties&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;additionalProperties allows a schema which should validate, no additional properties is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;additionalProperties allows a schema which should validate, an additional valid property is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;additionalProperties allows a schema which should validate, an additional invalid property is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;additionalProperties can exist by itself, an additional valid property is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;additionalProperties can exist by itself, an additional invalid property is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;additionalProperties are allowed by default, additional properties are allowed&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;allOf, allOf&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;allOf, mismatch second&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;allOf, mismatch first&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;allOf, wrong type&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;allOf with base schema, valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;allOf with base schema, mismatch base schema&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;allOf with base schema, mismatch first allOf&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;allOf with base schema, mismatch second allOf&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;allOf with base schema, mismatch both&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;allOf simple types, valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;allOf simple types, mismatch one&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;anyOf, first anyOf valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;anyOf, second anyOf valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;anyOf, both anyOf valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;anyOf, neither anyOf valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;anyOf with base schema, mismatch base schema&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;anyOf with base schema, one anyOf valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;anyOf with base schema, both anyOf invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;invalid type for default, valid when property is specified&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;invalid type for default, still valid when the invalid default is used&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;invalid string value for default, valid when property is specified&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;invalid string value for default, still valid when the invalid default is used&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;invalid definition, invalid definition schema&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;dependencies, neither&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;dependencies, nondependant&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;dependencies, with dependency&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;dependencies, missing dependency&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;dependencies, ignores non-objects&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;multiple dependencies, neither&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;multiple dependencies, nondependants&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;multiple dependencies, with dependencies&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;multiple dependencies, missing dependency&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;multiple dependencies, missing other dependency&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;multiple dependencies, missing both dependencies&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;multiple dependencies subschema, valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;multiple dependencies subschema, no dependency&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;multiple dependencies subschema, wrong type&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;multiple dependencies subschema, wrong type other&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;multiple dependencies subschema, wrong type both&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;simple enum validation, one of the enum is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;simple enum validation, something else is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;heterogeneous enum validation, one of the enum is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;heterogeneous enum validation, something else is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;heterogeneous enum validation, objects are deep compared&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;enums in properties, both properties are valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;enums in properties, missing optional property is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;enums in properties, missing required property is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;enums in properties, missing all properties is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;a schema given for items, valid items&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;a schema given for items, wrong type of items&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;a schema given for items, ignores non-arrays&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;an array of schemas for items, correct types&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;an array of schemas for items, wrong types&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;maxItems validation, shorter is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;maxItems validation, exact length is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;maxItems validation, too long is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;maxItems validation, ignores non-arrays&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;maxLength validation, shorter is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;maxLength validation, exact length is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;maxLength validation, too long is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;maxLength validation, ignores non-strings&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;maxLength validation, two supplementary Unicode code points is long enough&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;maxProperties validation, shorter is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;maxProperties validation, exact length is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;maxProperties validation, too long is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;maxProperties validation, ignores non-objects&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;maximum validation, below the maximum is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;maximum validation, above the maximum is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;maximum validation, ignores non-numbers&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;exclusiveMaximum validation, below the maximum is still valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;exclusiveMaximum validation, boundary point is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;minItems validation, longer is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;minItems validation, exact length is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;minItems validation, too short is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;minItems validation, ignores non-arrays&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;minLength validation, longer is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;minLength validation, exact length is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;minLength validation, too short is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;minLength validation, ignores non-strings&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;minLength validation, one supplementary Unicode code point is not long enough&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;minProperties validation, longer is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;minProperties validation, exact length is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;minProperties validation, too short is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;minProperties validation, ignores non-objects&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;minimum validation, above the minimum is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;minimum validation, below the minimum is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;minimum validation, ignores non-numbers&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;exclusiveMinimum validation, above the minimum is still valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;exclusiveMinimum validation, boundary point is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;by int, int by int&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;by int, int by int fail&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;by int, ignores non-numbers&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;by number, zero is multiple of anything&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;by number, 4.5 is multiple of 1.5&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;by number, 35 is not multiple of 1.5&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;by small number, 0.0075 is multiple of 0.0001&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;by small number, 0.00751 is not multiple of 0.0001&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;not, allowed&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;not, disallowed&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;not multiple types, valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;not multiple types, mismatch&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;not multiple types, other mismatch&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;not more complex schema, match&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;not more complex schema, other match&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;not more complex schema, mismatch&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;forbidden property, property present&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;forbidden property, property absent&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;oneOf, first oneOf valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;oneOf, second oneOf valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;oneOf, both oneOf valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;oneOf, neither oneOf valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;oneOf with base schema, mismatch base schema&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;oneOf with base schema, one oneOf valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;oneOf with base schema, both oneOf valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;integer, a bignum is an integer&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;number, a bignum is a number&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;integer, a negative bignum is an integer&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;number, a negative bignum is a number&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;string, a bignum is not a string&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;integer comparison, comparison works for high numbers&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;float comparison with high precision, comparison works for high numbers&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;integer comparison, comparison works for very negative numbers&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;float comparison with high precision on negative numbers, comparison works for very negative numbers&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;validation of date-time strings, a valid date-time string&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;validation of date-time strings, an invalid date-time string&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;validation of date-time strings, only RFC3339 not all of ISO 8601 are valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;validation of URIs, a valid URI&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;validation of URIs, an invalid URI&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;validation of URIs, an invalid URI though valid URI reference&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;validation of e-mail addresses, a valid e-mail address&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;validation of e-mail addresses, an invalid e-mail address&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;validation of IP addresses, a valid IP address&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;validation of IP addresses, an IP address with too many components&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;validation of IP addresses, an IP address with out-of-range values&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;validation of IP addresses, an IP address without 4 components&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;validation of IP addresses, an IP address as an integer&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;validation of IPv6 addresses, a valid IPv6 address&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;validation of IPv6 addresses, an IPv6 address with out-of-range values&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;validation of IPv6 addresses, an IPv6 address with too many components&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;validation of IPv6 addresses, an IPv6 address containing illegal characters&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;validation of host names, a valid host name&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;validation of host names, a host name starting with an illegal character&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;validation of host names, a host name containing illegal characters&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;validation of host names, a host name with a component too long&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;pattern validation, a matching pattern is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;pattern validation, a non-matching pattern is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;pattern validation, ignores non-strings&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;patternProperties validates properties matching a regex, a single valid match is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;patternProperties validates properties matching a regex, multiple valid matches is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;patternProperties validates properties matching a regex, a single invalid match is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;patternProperties validates properties matching a regex, multiple invalid matches is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;patternProperties validates properties matching a regex, ignores non-objects&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;multiple simultaneous patternProperties are validated, a single valid match is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;multiple simultaneous patternProperties are validated, a simultaneous match is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;multiple simultaneous patternProperties are validated, multiple matches is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;multiple simultaneous patternProperties are validated, an invalid due to one is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;multiple simultaneous patternProperties are validated, an invalid due to the other is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;multiple simultaneous patternProperties are validated, an invalid due to both is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;regexes are not anchored by default and are case sensitive, non recognized members are ignored&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;regexes are not anchored by default and are case sensitive, recognized members are accounted for&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;regexes are not anchored by default and are case sensitive, regexes are case sensitive&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;regexes are not anchored by default and are case sensitive, regexes are case sensitive, 2&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;object properties validation, both properties present and valid is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;object properties validation, one property invalid is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;object properties validation, both properties invalid is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;object properties validation, doesn&#39;t invalidate other properties&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;object properties validation, ignores non-objects&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;properties, patternProperties, additionalProperties interaction, property validates property&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;properties, patternProperties, additionalProperties interaction, property invalidates property&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;properties, patternProperties, additionalProperties interaction, patternProperty invalidates property&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;properties, patternProperties, additionalProperties interaction, patternProperty validates nonproperty&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;properties, patternProperties, additionalProperties interaction, patternProperty invalidates nonproperty&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;properties, patternProperties, additionalProperties interaction, additionalProperty ignores property&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;properties, patternProperties, additionalProperties interaction, additionalProperty validates others&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;properties, patternProperties, additionalProperties interaction, additionalProperty invalidates others&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;root pointer ref, match&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;root pointer ref, recursive match&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;root pointer ref, mismatch&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;root pointer ref, recursive mismatch&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;relative pointer ref to object, match&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;relative pointer ref to object, mismatch&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;relative pointer ref to array, match array&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;relative pointer ref to array, mismatch array&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;escaped pointer ref, slash&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;escaped pointer ref, tilda&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;escaped pointer ref, percent&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;nested refs, nested ref valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;nested refs, nested ref invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;remote ref, containing refs itself, remote ref valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;remote ref, containing refs itself, remote ref invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;ref within remote ref, ref within ref valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;ref within remote ref, ref within ref invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;required validation, present required property is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;required validation, non-present required property is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;required default validation, not required by default&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;integer type matches integers, an integer is an integer&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;integer type matches integers, a float is not an integer&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;integer type matches integers, a string is not an integer&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;integer type matches integers, an object is not an integer&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;integer type matches integers, an array is not an integer&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;integer type matches integers, a boolean is not an integer&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;integer type matches integers, null is not an integer&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;number type matches numbers, an integer is a number&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;number type matches numbers, a float is a number&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;number type matches numbers, a string is not a number&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;number type matches numbers, an object is not a number&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;number type matches numbers, an array is not a number&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;number type matches numbers, a boolean is not a number&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;number type matches numbers, null is not a number&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;string type matches strings, 1 is not a string&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;string type matches strings, a float is not a string&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;string type matches strings, a string is a string&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;string type matches strings, an object is not a string&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;string type matches strings, an array is not a string&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;string type matches strings, a boolean is not a string&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;string type matches strings, null is not a string&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;object type matches objects, an integer is not an object&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;object type matches objects, a float is not an object&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;object type matches objects, a string is not an object&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;object type matches objects, an object is an object&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;object type matches objects, an array is not an object&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;object type matches objects, a boolean is not an object&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;object type matches objects, null is not an object&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;array type matches arrays, an integer is not an array&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;array type matches arrays, a float is not an array&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;array type matches arrays, a string is not an array&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;array type matches arrays, an object is not an array&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;array type matches arrays, an array is not an array&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;array type matches arrays, a boolean is not an array&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;array type matches arrays, null is not an array&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;boolean type matches booleans, an integer is not a boolean&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;boolean type matches booleans, a float is not a boolean&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;boolean type matches booleans, a string is not a boolean&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;boolean type matches booleans, an object is not a boolean&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;boolean type matches booleans, an array is not a boolean&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;boolean type matches booleans, a boolean is not a boolean&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;boolean type matches booleans, null is not a boolean&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;null type matches only the null object, an integer is not null&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;null type matches only the null object, a float is not null&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;null type matches only the null object, a string is not null&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;null type matches only the null object, an object is not null&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;null type matches only the null object, an array is not null&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;null type matches only the null object, a boolean is not null&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;null type matches only the null object, null is null&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;multiple types can be specified in an array, an integer is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;multiple types can be specified in an array, a string is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;multiple types can be specified in an array, a float is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;multiple types can be specified in an array, an object is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;multiple types can be specified in an array, an array is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;multiple types can be specified in an array, a boolean is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;multiple types can be specified in an array, null is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;uniqueItems validation, unique array of integers is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;uniqueItems validation, non-unique array of integers is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;uniqueItems validation, numbers are unique if mathematically unequal&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;uniqueItems validation, unique array of objects is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;uniqueItems validation, non-unique array of objects is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;uniqueItems validation, unique array of nested objects is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;uniqueItems validation, non-unique array of nested objects is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;uniqueItems validation, unique array of arrays is valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;uniqueItems validation, non-unique array of arrays is invalid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;uniqueItems validation, 1 and true are unique&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;uniqueItems validation, 0 and false are unique&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;uniqueItems validation, unique heterogeneous types are valid&quot;

json-model had a side-effect on (altered the original) schema in the test &quot;uniqueItems validation, non-unique heterogeneous types are invalid&quot;



## `tv4` failed tests

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

**All other tests passed**.

## `tv4` side-effects

tv4 had a side-effect on (altered the original) schema in the test &quot;change resolution scope, changed scope ref valid&quot;

tv4 had a side-effect on (altered the original) schema in the test &quot;change resolution scope, changed scope ref invalid&quot;



## `jsonschema` failed tests

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

**All other tests passed**.

## `jsonschema` side-effects

jsonschema had a side-effect on (altered the original) data in the test &quot;multiple dependencies subschema, valid&quot;. **This excludes this validator from performance tests**

jsonschema had a side-effect on (altered the original) data in the test &quot;multiple dependencies subschema, wrong type&quot;. **This excludes this validator from performance tests**

jsonschema had a side-effect on (altered the original) data in the test &quot;multiple dependencies subschema, wrong type other&quot;. **This excludes this validator from performance tests**

jsonschema had a side-effect on (altered the original) data in the test &quot;multiple dependencies subschema, wrong type both&quot;. **This excludes this validator from performance tests**



# Thanks
This code was originally pulled out from the benchmarks in the `themis` json-schema validator.
Thanks goes to Johny Jose for his work.

# License
MIT
