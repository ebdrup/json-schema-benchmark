# json-schema-validator-generator - test summary


# json-schema-validator-generator failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the json-schema-validator-generator homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
|`additionalItems as schema, additional items match schema`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`items is schema, no additionalItems, all items match schema`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`array of items with no additionalItems, fewer number of items present`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`array of items with no additionalItems, equal number of items present`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`additionalItems as false without items, items defaults to empty schema so everything is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`additionalItems as false without items, ignores non-arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`additionalItems are allowed by default, only the first item is validated`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`additionalProperties being false does not allow other properties, no additional properties is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`additionalProperties being false does not allow other properties, ignores non-objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`additionalProperties being false does not allow other properties, patternProperties are not additional properties`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`additionalProperties allows a schema which should validate, no additional properties is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`additionalProperties allows a schema which should validate, an additional valid property is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`additionalProperties can exist by itself, an additional valid property is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`additionalProperties are allowed by default, additional properties are allowed`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`allOf, allOf`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`allOf with base schema, valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`allOf simple types, valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`anyOf, first anyOf valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`anyOf, second anyOf valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`anyOf, both anyOf valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`anyOf with base schema, one anyOf valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`invalid type for default, valid when property is specified`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`invalid type for default, still valid when the invalid default is used`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`invalid string value for default, valid when property is specified`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`invalid string value for default, still valid when the invalid default is used`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`valid definition, valid definition schema`|Expected result: `true` but validator returned: `false`
|`dependencies, neither`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`dependencies, nondependant`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`dependencies, with dependency`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`dependencies, ignores non-objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`multiple dependencies, neither`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`multiple dependencies, nondependants`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`multiple dependencies, with dependencies`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`multiple dependencies subschema, valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`multiple dependencies subschema, no dependency`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`simple enum validation, one of the enum is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`heterogeneous enum validation, one of the enum is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`enums in properties, both properties are valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`enums in properties, missing optional property is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`a schema given for items, valid items`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`a schema given for items, ignores non-arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`a schema given for items, JavaScript pseudo-array is valid`|Expected result: `true` but validator returned: `false`
|`an array of schemas for items, correct types`|Expected result: `true` but validator returned: `false`
|`an array of schemas for items, incomplete array of items`|Expected result: `true` but validator returned: `false`
|`an array of schemas for items, array with additional items`|Expected result: `true` but validator returned: `false`
|`an array of schemas for items, empty array`|Expected result: `true` but validator returned: `false`
|`an array of schemas for items, JavaScript pseudo-array is valid`|Expected result: `true` but validator returned: `false`
|`maxItems validation, shorter is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`maxItems validation, exact length is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`maxItems validation, ignores non-arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`maxLength validation, shorter is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`maxLength validation, exact length is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`maxLength validation, ignores non-strings`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`
|`maxProperties validation, shorter is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`maxProperties validation, exact length is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`maxProperties validation, ignores non-objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`maximum validation, below the maximum is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`maximum validation, boundary point is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`maximum validation, ignores non-numbers`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`exclusiveMaximum validation, below the maximum is still valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`minItems validation, longer is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`minItems validation, exact length is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`minItems validation, ignores non-arrays`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`minLength validation, longer is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`minLength validation, exact length is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`minLength validation, ignores non-strings`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`minProperties validation, longer is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`minProperties validation, exact length is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`minProperties validation, ignores non-objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`minimum validation, above the minimum is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`minimum validation, boundary point is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`minimum validation, ignores non-numbers`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`exclusiveMinimum validation, above the minimum is still valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`by int, int by int`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`by int, ignores non-numbers`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`by number, zero is multiple of anything`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`by number, 4.5 is multiple of 1.5`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`by small number, 0.0075 is multiple of 0.0001`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`not, allowed`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`not multiple types, valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`not more complex schema, match`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`not more complex schema, other match`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`forbidden property, property absent`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`oneOf, first oneOf valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`oneOf, second oneOf valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`oneOf with base schema, one oneOf valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`integer, a bignum is an integer`|Expected result: `true` but validator returned: `false`
|`number, a bignum is a number`|Expected result: `true` but validator returned: `false`
|`integer, a negative bignum is an integer`|Expected result: `true` but validator returned: `false`
|`number, a negative bignum is a number`|Expected result: `true` but validator returned: `false`
|`integer comparison, comparison works for high numbers`|Expected result: `true` but validator returned: `false`
|`integer comparison, comparison works for very negative numbers`|Expected result: `true` but validator returned: `false`
|`validation of date-time strings, a valid date-time string`|Expected result: `true` but validator returned: `false`
|`validation of URIs, a valid URI`|Expected result: `true` but validator returned: `false`
|`validation of e-mail addresses, a valid e-mail address`|Expected result: `true` but validator returned: `false`
|`validation of IP addresses, a valid IP address`|Expected result: `true` but validator returned: `false`
|`validation of IPv6 addresses, a valid IPv6 address`|Expected result: `true` but validator returned: `false`
|`validation of host names, a valid host name`|Expected result: `true` but validator returned: `false`
|`pattern validation, a matching pattern is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`pattern validation, ignores non-strings`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`pattern is not anchored, matches a substring`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`patternProperties validates properties matching a regex, a single valid match is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`patternProperties validates properties matching a regex, multiple valid matches is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`patternProperties validates properties matching a regex, ignores non-objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`multiple simultaneous patternProperties are validated, a single valid match is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`multiple simultaneous patternProperties are validated, a simultaneous match is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`multiple simultaneous patternProperties are validated, multiple matches is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`regexes are not anchored by default and are case sensitive, non recognized members are ignored`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`regexes are not anchored by default and are case sensitive, regexes are case sensitive`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`object properties validation, both properties present and valid is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`object properties validation, doesn't invalidate other properties`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`object properties validation, ignores non-objects`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`properties, patternProperties, additionalProperties interaction, property validates property`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`properties, patternProperties, additionalProperties interaction, patternProperty validates nonproperty`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`properties, patternProperties, additionalProperties interaction, additionalProperty ignores property`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`properties, patternProperties, additionalProperties interaction, additionalProperty validates others`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`root pointer ref, match`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`root pointer ref, recursive match`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`relative pointer ref to object, match`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`relative pointer ref to array, match array`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`escaped pointer ref, slash valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`escaped pointer ref, tilda valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`escaped pointer ref, percent valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`nested refs, nested ref valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`ref overrides any sibling keywords, ref valid`|Expected result: `true` but validator returned: `false`
|`ref overrides any sibling keywords, ref valid, maxItems ignored`|Expected result: `true` but validator returned: `false`
|`remote ref, containing refs itself, remote ref valid`|Expected result: `true` but validator returned: `false`
|`property named $ref that is not a reference, property named $ref valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`Recursive references between schemas, valid tree`|Expected result: `true` but validator returned: `false`
|`remote ref, remote ref valid`|Expected result: `true` but validator returned: `false`
|`fragment within remote ref, remote fragment valid`|Expected result: `true` but validator returned: `false`
|`ref within remote ref, ref within ref valid`|Expected result: `true` but validator returned: `false`
|`base URI change, base URI change ref valid`|Expected result: `true` but validator returned: `false`
|`base URI change - change folder, number is valid`|Expected result: `true` but validator returned: `false`
|`base URI change - change folder in subschema, number is valid`|Expected result: `true` but validator returned: `false`
|`root ref in remote ref, string is valid`|Expected result: `true` but validator returned: `false`
|`root ref in remote ref, null is valid`|Expected result: `true` but validator returned: `false`
|`required validation, present required property is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`required validation, ignores non-objects`|Expected result: `true` but validator returned: `false`
|`required default validation, not required by default`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`integer type matches integers, an integer is an integer`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`number type matches numbers, an integer is a number`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`number type matches numbers, a float is a number`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`string type matches strings, a string is a string`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`string type matches strings, a string is still a string, even if it looks like a number`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`object type matches objects, an object is an object`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`array type matches arrays, an array is an array`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`boolean type matches booleans, a boolean is a boolean`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`null type matches only the null object, null is null`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`multiple types can be specified in an array, an integer is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`multiple types can be specified in an array, a string is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
|`uniqueItems validation, unique array of integers is valid`|Expected result: `true` but validator returned: `false`
|`uniqueItems validation, unique array of objects is valid`|Expected result: `true` but validator returned: `false`
|`uniqueItems validation, unique array of nested objects is valid`|Expected result: `true` but validator returned: `false`
|`uniqueItems validation, unique array of arrays is valid`|Expected result: `true` but validator returned: `false`
|`uniqueItems validation, 1 and true are unique`|Expected result: `true` but validator returned: `false`
|`uniqueItems validation, 0 and false are unique`|Expected result: `true` but validator returned: `false`
|`uniqueItems validation, unique heterogeneous types are valid`|Expected result: `true` but validator returned: `false`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)