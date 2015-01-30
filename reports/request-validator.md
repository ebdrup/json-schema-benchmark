# `request-validator` - test summary

# All validators fail these tests

remote ref, remote ref invalid

fragment within remote ref, remote fragment invalid

ref within remote ref, ref within ref invalid

change resolution scope, changed scope ref invalid

remote ref, remote ref valid

fragment within remote ref, remote fragment valid

ref within remote ref, ref within ref valid

change resolution scope, changed scope ref valid


# `request-validator` failed tests

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

request-validator failed the test &quot;uniqueItems validation, unique array of integers is valid&quot;. Expected result: true but validator returned: false

request-validator failed the test &quot;uniqueItems validation, unique array of objects is valid&quot;. Expected result: true but validator returned: false

request-validator failed the test &quot;uniqueItems validation, unique array of nested objects is valid&quot;. Expected result: true but validator returned: false

request-validator failed the test &quot;uniqueItems validation, unique array of arrays is valid&quot;. Expected result: true but validator returned: false

request-validator failed the test &quot;uniqueItems validation, 1 and true are unique&quot;. Expected result: true but validator returned: false

request-validator failed the test &quot;uniqueItems validation, 0 and false are unique&quot;. Expected result: true but validator returned: false

request-validator failed the test &quot;uniqueItems validation, unique heterogeneous types are valid&quot;. Expected result: true but validator returned: false

**All other tests passed**.
