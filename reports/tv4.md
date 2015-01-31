# [`tv4`](https://github.com/geraintluff/tv4) - test summary

# All validators fail these tests

some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part


# [`tv4`](https://github.com/geraintluff/tv4) failed tests
|test failed|reason
|-----------|------
|`additionalItems as schema, additional items match schema`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`additionalItems as schema, additional items do not match schema`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`items is schema, no additionalItems, all items match schema`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`array of items with no additionalItems, no additional items present`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`array of items with no additionalItems, additional items are not permitted`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`additionalItems as false without items, items defaults to empty schema so everything is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`additionalItems as false without items, ignores non-arrays`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`additionalItems are allowed by default, only the first item is validated`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`additionalProperties being false does not allow other properties, no additional properties is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`additionalProperties being false does not allow other properties, an additional property is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`additionalProperties being false does not allow other properties, ignores non-objects`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`additionalProperties being false does not allow other properties, patternProperties are not additional properties`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`additionalProperties allows a schema which should validate, no additional properties is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`additionalProperties allows a schema which should validate, an additional valid property is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`additionalProperties allows a schema which should validate, an additional invalid property is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`additionalProperties can exist by itself, an additional valid property is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`additionalProperties can exist by itself, an additional invalid property is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`additionalProperties are allowed by default, additional properties are allowed`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`allOf, allOf`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`allOf, mismatch second`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`allOf, mismatch first`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`allOf, wrong type`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`allOf with base schema, valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`allOf with base schema, mismatch base schema`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`allOf with base schema, mismatch first allOf`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`allOf with base schema, mismatch second allOf`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`allOf with base schema, mismatch both`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`allOf simple types, valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`allOf simple types, mismatch one`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`anyOf, first anyOf valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`anyOf, second anyOf valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`anyOf, both anyOf valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`anyOf, neither anyOf valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`anyOf with base schema, mismatch base schema`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`anyOf with base schema, one anyOf valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`anyOf with base schema, both anyOf invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`invalid type for default, valid when property is specified`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`invalid type for default, still valid when the invalid default is used`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`invalid string value for default, valid when property is specified`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`invalid string value for default, still valid when the invalid default is used`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`valid definition, valid definition schema`|The schema failed to load(`Maximum call stack size exceeded`)
|`invalid definition, invalid definition schema`|The schema failed to load(`Maximum call stack size exceeded`)
|`dependencies, neither`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`dependencies, nondependant`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`dependencies, with dependency`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`dependencies, missing dependency`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`dependencies, ignores non-objects`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`multiple dependencies, neither`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`multiple dependencies, nondependants`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`multiple dependencies, with dependencies`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`multiple dependencies, missing dependency`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`multiple dependencies, missing other dependency`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`multiple dependencies, missing both dependencies`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`multiple dependencies subschema, valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`multiple dependencies subschema, no dependency`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`multiple dependencies subschema, wrong type`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`multiple dependencies subschema, wrong type other`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`multiple dependencies subschema, wrong type both`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`simple enum validation, one of the enum is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`simple enum validation, something else is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`heterogeneous enum validation, one of the enum is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`heterogeneous enum validation, something else is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`heterogeneous enum validation, objects are deep compared`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`enums in properties, both properties are valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`enums in properties, missing optional property is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`enums in properties, missing required property is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`enums in properties, missing all properties is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`a schema given for items, valid items`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`a schema given for items, wrong type of items`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`a schema given for items, ignores non-arrays`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`an array of schemas for items, correct types`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`an array of schemas for items, wrong types`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`maxItems validation, shorter is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`maxItems validation, exact length is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`maxItems validation, too long is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`maxItems validation, ignores non-arrays`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`maxLength validation, shorter is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`maxLength validation, exact length is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`maxLength validation, too long is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`maxLength validation, ignores non-strings`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`maxLength validation, two supplementary Unicode code points is long enough`|The schema failed to load(`Maximum call stack size exceeded`)
|`maxProperties validation, shorter is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`maxProperties validation, exact length is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`maxProperties validation, too long is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`maxProperties validation, ignores non-objects`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`maximum validation, below the maximum is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`maximum validation, above the maximum is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`maximum validation, ignores non-numbers`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`exclusiveMaximum validation, below the maximum is still valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`exclusiveMaximum validation, boundary point is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`minItems validation, longer is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`minItems validation, exact length is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`minItems validation, too short is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`minItems validation, ignores non-arrays`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`minLength validation, longer is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`minLength validation, exact length is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`minLength validation, too short is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`minLength validation, ignores non-strings`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`minLength validation, one supplementary Unicode code point is not long enough`|The schema failed to load(`Maximum call stack size exceeded`)
|`minProperties validation, longer is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`minProperties validation, exact length is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`minProperties validation, too short is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`minProperties validation, ignores non-objects`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`minimum validation, above the minimum is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`minimum validation, below the minimum is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`minimum validation, ignores non-numbers`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`exclusiveMinimum validation, above the minimum is still valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`exclusiveMinimum validation, boundary point is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`by int, int by int`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`by int, int by int fail`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`by int, ignores non-numbers`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`by number, zero is multiple of anything`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`by number, 4.5 is multiple of 1.5`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`by number, 35 is not multiple of 1.5`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`by small number, 0.0075 is multiple of 0.0001`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`by small number, 0.00751 is not multiple of 0.0001`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`not, allowed`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`not, disallowed`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`not multiple types, valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`not multiple types, mismatch`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`not multiple types, other mismatch`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`not more complex schema, match`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`not more complex schema, other match`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`not more complex schema, mismatch`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`forbidden property, property present`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`forbidden property, property absent`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`oneOf, first oneOf valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`oneOf, second oneOf valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`oneOf, both oneOf valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`oneOf, neither oneOf valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`oneOf with base schema, mismatch base schema`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`oneOf with base schema, one oneOf valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`oneOf with base schema, both oneOf valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`integer, a bignum is an integer`|The schema failed to load(`Maximum call stack size exceeded`)
|`number, a bignum is a number`|The schema failed to load(`Maximum call stack size exceeded`)
|`integer, a negative bignum is an integer`|The schema failed to load(`Maximum call stack size exceeded`)
|`number, a negative bignum is a number`|The schema failed to load(`Maximum call stack size exceeded`)
|`string, a bignum is not a string`|The schema failed to load(`Maximum call stack size exceeded`)
|`integer comparison, comparison works for high numbers`|The schema failed to load(`Maximum call stack size exceeded`)
|`float comparison with high precision, comparison works for high numbers`|The schema failed to load(`Maximum call stack size exceeded`)
|`integer comparison, comparison works for very negative numbers`|The schema failed to load(`Maximum call stack size exceeded`)
|`float comparison with high precision on negative numbers, comparison works for very negative numbers`|The schema failed to load(`Maximum call stack size exceeded`)
|`validation of date-time strings, a valid date-time string`|The schema failed to load(`Maximum call stack size exceeded`)
|`validation of date-time strings, an invalid date-time string`|The schema failed to load(`Maximum call stack size exceeded`)
|`validation of date-time strings, only RFC3339 not all of ISO 8601 are valid`|The schema failed to load(`Maximum call stack size exceeded`)
|`validation of URIs, a valid URI`|The schema failed to load(`Maximum call stack size exceeded`)
|`validation of URIs, an invalid URI`|The schema failed to load(`Maximum call stack size exceeded`)
|`validation of URIs, an invalid URI though valid URI reference`|The schema failed to load(`Maximum call stack size exceeded`)
|`validation of e-mail addresses, a valid e-mail address`|The schema failed to load(`Maximum call stack size exceeded`)
|`validation of e-mail addresses, an invalid e-mail address`|The schema failed to load(`Maximum call stack size exceeded`)
|`validation of IP addresses, a valid IP address`|The schema failed to load(`Maximum call stack size exceeded`)
|`validation of IP addresses, an IP address with too many components`|The schema failed to load(`Maximum call stack size exceeded`)
|`validation of IP addresses, an IP address with out-of-range values`|The schema failed to load(`Maximum call stack size exceeded`)
|`validation of IP addresses, an IP address without 4 components`|The schema failed to load(`Maximum call stack size exceeded`)
|`validation of IP addresses, an IP address as an integer`|The schema failed to load(`Maximum call stack size exceeded`)
|`validation of IPv6 addresses, a valid IPv6 address`|The schema failed to load(`Maximum call stack size exceeded`)
|`validation of IPv6 addresses, an IPv6 address with out-of-range values`|The schema failed to load(`Maximum call stack size exceeded`)
|`validation of IPv6 addresses, an IPv6 address with too many components`|The schema failed to load(`Maximum call stack size exceeded`)
|`validation of IPv6 addresses, an IPv6 address containing illegal characters`|The schema failed to load(`Maximum call stack size exceeded`)
|`validation of host names, a valid host name`|The schema failed to load(`Maximum call stack size exceeded`)
|`validation of host names, a host name starting with an illegal character`|The schema failed to load(`Maximum call stack size exceeded`)
|`validation of host names, a host name containing illegal characters`|The schema failed to load(`Maximum call stack size exceeded`)
|`validation of host names, a host name with a component too long`|The schema failed to load(`Maximum call stack size exceeded`)
|`pattern validation, a matching pattern is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`pattern validation, a non-matching pattern is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`pattern validation, ignores non-strings`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`patternProperties validates properties matching a regex, a single valid match is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`patternProperties validates properties matching a regex, multiple valid matches is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`patternProperties validates properties matching a regex, a single invalid match is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`patternProperties validates properties matching a regex, multiple invalid matches is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`patternProperties validates properties matching a regex, ignores non-objects`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`multiple simultaneous patternProperties are validated, a single valid match is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`multiple simultaneous patternProperties are validated, a simultaneous match is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`multiple simultaneous patternProperties are validated, multiple matches is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`multiple simultaneous patternProperties are validated, an invalid due to one is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`multiple simultaneous patternProperties are validated, an invalid due to the other is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`multiple simultaneous patternProperties are validated, an invalid due to both is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`regexes are not anchored by default and are case sensitive, non recognized members are ignored`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`regexes are not anchored by default and are case sensitive, recognized members are accounted for`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`regexes are not anchored by default and are case sensitive, regexes are case sensitive`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`regexes are not anchored by default and are case sensitive, regexes are case sensitive, 2`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`object properties validation, both properties present and valid is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`object properties validation, one property invalid is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`object properties validation, both properties invalid is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`object properties validation, doesn't invalidate other properties`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`object properties validation, ignores non-objects`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`properties, patternProperties, additionalProperties interaction, property validates property`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`properties, patternProperties, additionalProperties interaction, property invalidates property`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`properties, patternProperties, additionalProperties interaction, patternProperty invalidates property`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`properties, patternProperties, additionalProperties interaction, patternProperty validates nonproperty`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`properties, patternProperties, additionalProperties interaction, patternProperty invalidates nonproperty`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`properties, patternProperties, additionalProperties interaction, additionalProperty ignores property`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`properties, patternProperties, additionalProperties interaction, additionalProperty validates others`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`properties, patternProperties, additionalProperties interaction, additionalProperty invalidates others`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`root pointer ref, match`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`root pointer ref, recursive match`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`root pointer ref, mismatch`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`root pointer ref, recursive mismatch`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`relative pointer ref to object, match`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`relative pointer ref to object, mismatch`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`relative pointer ref to array, match array`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`relative pointer ref to array, mismatch array`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`escaped pointer ref, slash`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`escaped pointer ref, tilda`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`escaped pointer ref, percent`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`nested refs, nested ref valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`nested refs, nested ref invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`remote ref, containing refs itself, remote ref valid`|The schema failed to load(`Maximum call stack size exceeded`)
|`remote ref, containing refs itself, remote ref invalid`|The schema failed to load(`Maximum call stack size exceeded`)
|`remote ref, remote ref valid`|The schema failed to load(`Maximum call stack size exceeded`)
|`remote ref, remote ref invalid`|The schema failed to load(`Maximum call stack size exceeded`)
|`fragment within remote ref, remote fragment valid`|The schema failed to load(`Maximum call stack size exceeded`)
|`fragment within remote ref, remote fragment invalid`|The schema failed to load(`Maximum call stack size exceeded`)
|`ref within remote ref, ref within ref valid`|The schema failed to load(`Maximum call stack size exceeded`)
|`ref within remote ref, ref within ref invalid`|The schema failed to load(`Maximum call stack size exceeded`)
|`change resolution scope, changed scope ref valid`|The schema failed to load(`Maximum call stack size exceeded`)
|`change resolution scope, changed scope ref invalid`|The schema failed to load(`Maximum call stack size exceeded`)
|`required validation, present required property is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`required validation, non-present required property is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`required default validation, not required by default`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`integer type matches integers, an integer is an integer`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`integer type matches integers, a float is not an integer`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`integer type matches integers, a string is not an integer`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`integer type matches integers, an object is not an integer`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`integer type matches integers, an array is not an integer`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`integer type matches integers, a boolean is not an integer`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`integer type matches integers, null is not an integer`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`number type matches numbers, an integer is a number`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`number type matches numbers, a float is a number`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`number type matches numbers, a string is not a number`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`number type matches numbers, an object is not a number`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`number type matches numbers, an array is not a number`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`number type matches numbers, a boolean is not a number`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`number type matches numbers, null is not a number`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`string type matches strings, 1 is not a string`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`string type matches strings, a float is not a string`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`string type matches strings, a string is a string`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`string type matches strings, an object is not a string`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`string type matches strings, an array is not a string`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`string type matches strings, a boolean is not a string`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`string type matches strings, null is not a string`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`object type matches objects, an integer is not an object`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`object type matches objects, a float is not an object`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`object type matches objects, a string is not an object`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`object type matches objects, an object is an object`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`object type matches objects, an array is not an object`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`object type matches objects, a boolean is not an object`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`object type matches objects, null is not an object`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`array type matches arrays, an integer is not an array`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`array type matches arrays, a float is not an array`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`array type matches arrays, a string is not an array`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`array type matches arrays, an object is not an array`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`array type matches arrays, an array is not an array`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`array type matches arrays, a boolean is not an array`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`array type matches arrays, null is not an array`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`boolean type matches booleans, an integer is not a boolean`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`boolean type matches booleans, a float is not a boolean`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`boolean type matches booleans, a string is not a boolean`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`boolean type matches booleans, an object is not a boolean`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`boolean type matches booleans, an array is not a boolean`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`boolean type matches booleans, a boolean is not a boolean`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`boolean type matches booleans, null is not a boolean`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`null type matches only the null object, an integer is not null`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`null type matches only the null object, a float is not null`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`null type matches only the null object, a string is not null`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`null type matches only the null object, an object is not null`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`null type matches only the null object, an array is not null`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`null type matches only the null object, a boolean is not null`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`null type matches only the null object, null is null`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`multiple types can be specified in an array, an integer is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`multiple types can be specified in an array, a string is valid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`multiple types can be specified in an array, a float is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`multiple types can be specified in an array, an object is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`multiple types can be specified in an array, an array is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`multiple types can be specified in an array, a boolean is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`multiple types can be specified in an array, null is invalid`|The schema failed to load(`Maximum call stack size exceeded`). **This excludes this validator from performance tests**
|`uniqueItems validation, unique array of integers is valid`|The schema failed to load(`Maximum call stack size exceeded`)
|`uniqueItems validation, non-unique array of integers is invalid`|The schema failed to load(`Maximum call stack size exceeded`)
|`uniqueItems validation, numbers are unique if mathematically unequal`|The schema failed to load(`Maximum call stack size exceeded`)
|`uniqueItems validation, unique array of objects is valid`|The schema failed to load(`Maximum call stack size exceeded`)
|`uniqueItems validation, non-unique array of objects is invalid`|The schema failed to load(`Maximum call stack size exceeded`)
|`uniqueItems validation, unique array of nested objects is valid`|The schema failed to load(`Maximum call stack size exceeded`)
|`uniqueItems validation, non-unique array of nested objects is invalid`|The schema failed to load(`Maximum call stack size exceeded`)
|`uniqueItems validation, unique array of arrays is valid`|The schema failed to load(`Maximum call stack size exceeded`)
|`uniqueItems validation, non-unique array of arrays is invalid`|The schema failed to load(`Maximum call stack size exceeded`)
|`uniqueItems validation, 1 and true are unique`|The schema failed to load(`Maximum call stack size exceeded`)
|`uniqueItems validation, 0 and false are unique`|The schema failed to load(`Maximum call stack size exceeded`)
|`uniqueItems validation, unique heterogeneous types are valid`|The schema failed to load(`Maximum call stack size exceeded`)
|`uniqueItems validation, non-unique heterogeneous types are invalid`|The schema failed to load(`Maximum call stack size exceeded`)

**All other tests passed**.
