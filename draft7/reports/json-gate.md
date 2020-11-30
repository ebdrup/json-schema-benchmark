# [`json-gate`](https://github.com/oferei/json-gate#readme) - test summary


# [`json-gate`](https://github.com/oferei/json-gate#readme) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`json-gate`](https://github.com/oferei/json-gate#readme) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`allOf, mismatch second`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf, mismatch first`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf, wrong type`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf with base schema, valid`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`allOf with base schema, mismatch base schema`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`allOf with base schema, mismatch first allOf`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`allOf with base schema, mismatch second allOf`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`allOf with base schema, mismatch both`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`allOf simple types, mismatch one`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf with boolean schemas, some false, any value is invalid`|Expected result: `false` but validator returned: `true`
`allOf with boolean schemas, all false, any value is invalid`|Expected result: `false` but validator returned: `true`
`allOf with the first empty schema, string is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf with the last empty schema, string is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`nested allOf, to check validation semantics, anything non-null is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: false, anyOf: false, oneOf: false`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: false, anyOf: false, oneOf: true`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: false, anyOf: true, oneOf: false`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: false, anyOf: true, oneOf: true`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: true, anyOf: false, oneOf: false`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: true, anyOf: false, oneOf: true`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`allOf combined with anyOf, oneOf, allOf: true, anyOf: true, oneOf: false`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`anyOf, neither anyOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`anyOf with base schema, both anyOf invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`anyOf with boolean schemas, all false, any value is invalid`|Expected result: `false` but validator returned: `true`
`anyOf complex types, neither anyOf valid (complex)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`nested anyOf, to check validation semantics, anything non-null is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`nested anyOf, to check validation semantics, anything non-null is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`boolean schema 'true', number is valid`|The schema failed to load(`Schema is a boolean when it should be an object`). **This excludes this validator from performance tests**
`boolean schema 'true', string is valid`|The schema failed to load(`Schema is a boolean when it should be an object`). **This excludes this validator from performance tests**
`boolean schema 'true', boolean true is valid`|The schema failed to load(`Schema is a boolean when it should be an object`). **This excludes this validator from performance tests**
`boolean schema 'true', boolean false is valid`|The schema failed to load(`Schema is a boolean when it should be an object`). **This excludes this validator from performance tests**
`boolean schema 'true', null is valid`|The schema failed to load(`Schema is a boolean when it should be an object`). **This excludes this validator from performance tests**
`boolean schema 'true', object is valid`|The schema failed to load(`Schema is a boolean when it should be an object`). **This excludes this validator from performance tests**
`boolean schema 'true', empty object is valid`|The schema failed to load(`Schema is a boolean when it should be an object`). **This excludes this validator from performance tests**
`boolean schema 'true', array is valid`|The schema failed to load(`Schema is a boolean when it should be an object`). **This excludes this validator from performance tests**
`boolean schema 'true', empty array is valid`|The schema failed to load(`Schema is a boolean when it should be an object`). **This excludes this validator from performance tests**
`boolean schema 'false', number is invalid`|The schema failed to load(`Schema is a boolean when it should be an object`)
`boolean schema 'false', string is invalid`|The schema failed to load(`Schema is a boolean when it should be an object`)
`boolean schema 'false', boolean true is invalid`|The schema failed to load(`Schema is a boolean when it should be an object`)
`boolean schema 'false', boolean false is invalid`|The schema failed to load(`Schema is a boolean when it should be an object`)
`boolean schema 'false', null is invalid`|The schema failed to load(`Schema is a boolean when it should be an object`)
`boolean schema 'false', object is invalid`|The schema failed to load(`Schema is a boolean when it should be an object`)
`boolean schema 'false', empty object is invalid`|The schema failed to load(`Schema is a boolean when it should be an object`)
`boolean schema 'false', array is invalid`|The schema failed to load(`Schema is a boolean when it should be an object`)
`boolean schema 'false', empty array is invalid`|The schema failed to load(`Schema is a boolean when it should be an object`)
`const validation, another value is invalid`|Expected result: `false` but validator returned: `true`
`const validation, another type is invalid`|Expected result: `false` but validator returned: `true`
`const with object, another object is invalid`|Expected result: `false` but validator returned: `true`
`const with object, another type is invalid`|Expected result: `false` but validator returned: `true`
`const with array, another array item is invalid`|Expected result: `false` but validator returned: `true`
`const with array, array with additional items is invalid`|Expected result: `false` but validator returned: `true`
`const with null, not null is invalid`|Expected result: `false` but validator returned: `true`
`const with false does not match 0, integer zero is invalid`|Expected result: `false` but validator returned: `true`
`const with false does not match 0, float zero is invalid`|Expected result: `false` but validator returned: `true`
`const with true does not match 1, integer one is invalid`|Expected result: `false` but validator returned: `true`
`const with true does not match 1, float one is invalid`|Expected result: `false` but validator returned: `true`
`const with [false] does not match [0], [0] is invalid`|Expected result: `false` but validator returned: `true`
`const with [false] does not match [0], [0.0] is invalid`|Expected result: `false` but validator returned: `true`
`const with [true] does not match [1], [1] is invalid`|Expected result: `false` but validator returned: `true`
`const with [true] does not match [1], [1.0] is invalid`|Expected result: `false` but validator returned: `true`
`const with {"a": false} does not match {"a": 0}, {"a": 0} is invalid`|Expected result: `false` but validator returned: `true`
`const with {"a": false} does not match {"a": 0}, {"a": 0.0} is invalid`|Expected result: `false` but validator returned: `true`
`const with {"a": true} does not match {"a": 1}, {"a": 1} is invalid`|Expected result: `false` but validator returned: `true`
`const with {"a": true} does not match {"a": 1}, {"a": 1.0} is invalid`|Expected result: `false` but validator returned: `true`
`const with 0 does not match other zero-like types, false is invalid`|Expected result: `false` but validator returned: `true`
`const with 0 does not match other zero-like types, empty object is invalid`|Expected result: `false` but validator returned: `true`
`const with 0 does not match other zero-like types, empty array is invalid`|Expected result: `false` but validator returned: `true`
`const with 0 does not match other zero-like types, empty string is invalid`|Expected result: `false` but validator returned: `true`
`const with 1 does not match true, true is invalid`|Expected result: `false` but validator returned: `true`
`const with -2.0 matches integer and float types, integer 2 is invalid`|Expected result: `false` but validator returned: `true`
`const with -2.0 matches integer and float types, float 2.0 is invalid`|Expected result: `false` but validator returned: `true`
`const with -2.0 matches integer and float types, float -2.00001 is invalid`|Expected result: `false` but validator returned: `true`
`float and integers are equal up to 64-bit representation limits, integer minus one is invalid`|Expected result: `false` but validator returned: `true`
`float and integers are equal up to 64-bit representation limits, float minus one is invalid`|Expected result: `false` but validator returned: `true`
`nul characters in strings, do not match string lacking nul`|Expected result: `false` but validator returned: `true`
`contains keyword validation, array without items matching schema is invalid`|Expected result: `false` but validator returned: `true`
`contains keyword validation, empty array is invalid`|Expected result: `false` but validator returned: `true`
`contains keyword with const keyword, array without item 5 is invalid`|Expected result: `false` but validator returned: `true`
`contains keyword with boolean schema true, empty array is invalid`|Expected result: `false` but validator returned: `true`
`contains keyword with boolean schema false, any non-empty array is invalid`|Expected result: `false` but validator returned: `true`
`contains keyword with boolean schema false, empty array is invalid`|Expected result: `false` but validator returned: `true`
`items + contains, matches items, does not match contains`|Expected result: `false` but validator returned: `true`
`items + contains, does not match items, matches contains`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`items + contains, matches neither items nor contains`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`invalid type for default, valid when property is specified`|The schema failed to load(`Schema property 'foo': 'default' attribute value is not valid according to the schema: JSON object is an array when it should be an integer`). **This excludes this validator from performance tests**
`invalid type for default, still valid when the invalid default is used`|The schema failed to load(`Schema property 'foo': 'default' attribute value is not valid according to the schema: JSON object is an array when it should be an integer`). **This excludes this validator from performance tests**
`invalid string value for default, valid when property is specified`|The schema failed to load(`Schema property 'bar': 'default' attribute value is not valid according to the schema: JSON object: length is 3 when it should be at least 4`). **This excludes this validator from performance tests**
`invalid string value for default, still valid when the invalid default is used`|The schema failed to load(`Schema property 'bar': 'default' attribute value is not valid according to the schema: JSON object: length is 3 when it should be at least 4`). **This excludes this validator from performance tests**
`invalid definition, invalid definition schema`|Expected result: `false` but validator returned: `true`
`multiple dependencies subschema, no dependency`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`dependencies with boolean subschemas, object with property having schema true is valid`|The schema failed to load(`Schema: 'dependencies' attribute: value of property 'foo' is a boolean when it should be either a string, an array or an object (schema)`). **This excludes this validator from performance tests**
`dependencies with boolean subschemas, object with property having schema false is invalid`|The schema failed to load(`Schema: 'dependencies' attribute: value of property 'foo' is a boolean when it should be either a string, an array or an object (schema)`)
`dependencies with boolean subschemas, object with both properties is invalid`|The schema failed to load(`Schema: 'dependencies' attribute: value of property 'foo' is a boolean when it should be either a string, an array or an object (schema)`)
`dependencies with boolean subschemas, empty object is valid`|The schema failed to load(`Schema: 'dependencies' attribute: value of property 'foo' is a boolean when it should be either a string, an array or an object (schema)`). **This excludes this validator from performance tests**
`dependencies with escaped characters, valid object 1`|The schema failed to load(`Schema: 'dependencies' attribute: value of property 'foo'bar' is not a valid schema: Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`dependencies with escaped characters, valid object 2`|The schema failed to load(`Schema: 'dependencies' attribute: value of property 'foo'bar' is not a valid schema: Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`dependencies with escaped characters, valid object 3`|The schema failed to load(`Schema: 'dependencies' attribute: value of property 'foo'bar' is not a valid schema: Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 1`|The schema failed to load(`Schema: 'dependencies' attribute: value of property 'foo'bar' is not a valid schema: Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 2`|The schema failed to load(`Schema: 'dependencies' attribute: value of property 'foo'bar' is not a valid schema: Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 3`|The schema failed to load(`Schema: 'dependencies' attribute: value of property 'foo'bar' is not a valid schema: Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`dependencies with escaped characters, invalid object 4`|The schema failed to load(`Schema: 'dependencies' attribute: value of property 'foo'bar' is not a valid schema: Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`heterogeneous enum-with-null validation, null is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`enums in properties, both properties are valid`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`enums in properties, wrong foo value`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`enums in properties, wrong bar value`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`enums in properties, missing optional property is valid`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`enums in properties, missing required property is invalid`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`enums in properties, missing all properties is invalid`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`exclusiveMaximum validation, below the exclusiveMaximum is valid`|The schema failed to load(`Schema: 'exclusiveMaximum' attribute is an integer when it should be a boolean`). **This excludes this validator from performance tests**
`exclusiveMaximum validation, boundary point is invalid`|The schema failed to load(`Schema: 'exclusiveMaximum' attribute is an integer when it should be a boolean`)
`exclusiveMaximum validation, above the exclusiveMaximum is invalid`|The schema failed to load(`Schema: 'exclusiveMaximum' attribute is an integer when it should be a boolean`)
`exclusiveMaximum validation, ignores non-numbers`|The schema failed to load(`Schema: 'exclusiveMaximum' attribute is an integer when it should be a boolean`). **This excludes this validator from performance tests**
`exclusiveMinimum validation, above the exclusiveMinimum is valid`|The schema failed to load(`Schema: 'exclusiveMinimum' attribute is a number when it should be a boolean`). **This excludes this validator from performance tests**
`exclusiveMinimum validation, boundary point is invalid`|The schema failed to load(`Schema: 'exclusiveMinimum' attribute is a number when it should be a boolean`)
`exclusiveMinimum validation, below the exclusiveMinimum is invalid`|The schema failed to load(`Schema: 'exclusiveMinimum' attribute is a number when it should be a boolean`)
`exclusiveMinimum validation, ignores non-numbers`|The schema failed to load(`Schema: 'exclusiveMinimum' attribute is a number when it should be a boolean`). **This excludes this validator from performance tests**
`validation of e-mail addresses, ignores integers`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`)
`validation of e-mail addresses, ignores floats`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`)
`validation of e-mail addresses, ignores objects`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`)
`validation of e-mail addresses, ignores arrays`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`)
`validation of e-mail addresses, ignores booleans`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`)
`validation of e-mail addresses, ignores null`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`)
`validation of regexes, ignores integers`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'regex' format`). **This excludes this validator from performance tests**
`validation of regexes, ignores floats`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'regex' format`). **This excludes this validator from performance tests**
`validation of regexes, ignores objects`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'regex' format`). **This excludes this validator from performance tests**
`validation of regexes, ignores arrays`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'regex' format`). **This excludes this validator from performance tests**
`validation of regexes, ignores booleans`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'regex' format`). **This excludes this validator from performance tests**
`validation of regexes, ignores null`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'regex' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, ignores integers`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`)
`validation of IPv6 addresses, ignores floats`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`)
`validation of IPv6 addresses, ignores objects`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`)
`validation of IPv6 addresses, ignores arrays`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`)
`validation of IPv6 addresses, ignores booleans`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`)
`validation of IPv6 addresses, ignores null`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`)
`validation of date strings, ignores integers`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date' format`). **This excludes this validator from performance tests**
`validation of date strings, ignores floats`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date' format`). **This excludes this validator from performance tests**
`validation of date strings, ignores objects`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date' format`). **This excludes this validator from performance tests**
`validation of date strings, ignores arrays`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date' format`). **This excludes this validator from performance tests**
`validation of date strings, ignores booleans`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date' format`). **This excludes this validator from performance tests**
`validation of date strings, ignores null`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date' format`). **This excludes this validator from performance tests**
`validation of date-time strings, ignores integers`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`)
`validation of date-time strings, ignores floats`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`)
`validation of date-time strings, ignores objects`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`)
`validation of date-time strings, ignores arrays`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`)
`validation of date-time strings, ignores booleans`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`)
`validation of date-time strings, ignores null`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`)
`validation of time strings, ignores integers`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'time' format`). **This excludes this validator from performance tests**
`validation of time strings, ignores floats`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'time' format`). **This excludes this validator from performance tests**
`validation of time strings, ignores objects`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'time' format`). **This excludes this validator from performance tests**
`validation of time strings, ignores arrays`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'time' format`). **This excludes this validator from performance tests**
`validation of time strings, ignores booleans`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'time' format`). **This excludes this validator from performance tests**
`validation of time strings, ignores null`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'time' format`). **This excludes this validator from performance tests**
`validation of URIs, ignores integers`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
`validation of URIs, ignores floats`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
`validation of URIs, ignores objects`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
`validation of URIs, ignores arrays`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
`validation of URIs, ignores booleans`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
`validation of URIs, ignores null`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
`if and then without else, invalid through then`|Expected result: `false` but validator returned: `true`
`if and else without then, invalid through else`|Expected result: `false` but validator returned: `true`
`validate against correct branch, then vs else, invalid through then`|Expected result: `false` but validator returned: `true`
`validate against correct branch, then vs else, invalid through else`|Expected result: `false` but validator returned: `true`
`if with boolean schema true, boolean schema true in if always chooses the then path (invalid)`|Expected result: `false` but validator returned: `true`
`if with boolean schema false, boolean schema false in if always chooses the else path (invalid)`|Expected result: `false` but validator returned: `true`
`if appears at the end when serialized (keyword processing sequence), no redirects to then and fails`|Expected result: `false` but validator returned: `true`
`if appears at the end when serialized (keyword processing sequence), invalid redirects to else and fails`|Expected result: `false` but validator returned: `true`
`evaluating the same schema location against the same data location twice is not a sign of an infinite loop, failing case`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`items with boolean schema (true), any array is valid`|The schema failed to load(`Schema: 'items' attribute is a boolean when it should be either an object (schema) or an array`). **This excludes this validator from performance tests**
`items with boolean schema (true), empty array is valid`|The schema failed to load(`Schema: 'items' attribute is a boolean when it should be either an object (schema) or an array`). **This excludes this validator from performance tests**
`items with boolean schema (false), any non-empty array is invalid`|The schema failed to load(`Schema: 'items' attribute is a boolean when it should be either an object (schema) or an array`)
`items with boolean schema (false), empty array is valid`|The schema failed to load(`Schema: 'items' attribute is a boolean when it should be either an object (schema) or an array`). **This excludes this validator from performance tests**
`items with boolean schemas, array with one item is valid`|The schema failed to load(`Schema: 'items' attribute element 0 is not a valid schema: Schema is a boolean when it should be an object`). **This excludes this validator from performance tests**
`items with boolean schemas, array with two items is invalid`|The schema failed to load(`Schema: 'items' attribute element 0 is not a valid schema: Schema is a boolean when it should be an object`)
`items with boolean schemas, empty array is valid`|The schema failed to load(`Schema: 'items' attribute element 0 is not a valid schema: Schema is a boolean when it should be an object`). **This excludes this validator from performance tests**
`items and subitems, too many sub-items`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`items and subitems, wrong item`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`items and subitems, wrong sub-item`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`
`maxProperties validation, too long is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`maxProperties = 0 means the object is empty, one property is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`
`minProperties validation, too short is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`by int, int by int fail`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`by number, 35 is not multiple of 1.5`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`by small number, 0.00751 is not multiple of 0.0001`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`invalid instance should not raise error when float division = inf, always invalid, but naive implementations may raise an overflow error`|Expected result: `false` but validator returned: `true`
`not, disallowed`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`not multiple types, mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`not multiple types, other mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`not more complex schema, mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`forbidden property, property present`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`not with boolean schema true, any value is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf, both oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf, neither oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with base schema, both oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with boolean schemas, all true, any value is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with boolean schemas, more than one true, any value is invalid`|Expected result: `false` but validator returned: `true`
`oneOf with boolean schemas, all false, any value is invalid`|Expected result: `false` but validator returned: `true`
`oneOf complex types, both oneOf valid (complex)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf complex types, neither oneOf valid (complex)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with empty schema, both valid - invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with required, both invalid - invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with required, both valid - invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with missing optional property, both oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with missing optional property, neither oneOf valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`nested oneOf, to check validation semantics, anything non-null is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`float comparison with high precision, comparison works for high numbers`|The schema failed to load(`Schema: 'exclusiveMaximum' attribute is an integer when it should be a boolean`)
`float comparison with high precision on negative numbers, comparison works for very negative numbers`|The schema failed to load(`Schema: 'exclusiveMinimum' attribute is an integer when it should be a boolean`)
`validation of string-encoded content based on media type, an invalid JSON document`|Expected result: `false` but validator returned: `true`
`validation of binary string-encoding, an invalid base64 string (% is not a valid character)`|Expected result: `false` but validator returned: `true`
`validation of binary-encoded media type documents, a validly-encoded invalid JSON document`|Expected result: `false` but validator returned: `true`
`validation of binary-encoded media type documents, an invalid base64 string that is valid JSON`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, a valid date-time string`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`). **This excludes this validator from performance tests**
`validation of date-time strings, a valid date-time string without second fraction`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`). **This excludes this validator from performance tests**
`validation of date-time strings, a valid date-time string with plus offset`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`). **This excludes this validator from performance tests**
`validation of date-time strings, a valid date-time string with minus offset`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`). **This excludes this validator from performance tests**
`validation of date-time strings, a invalid day in date-time string`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`)
`validation of date-time strings, an invalid offset in date-time string`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`)
`validation of date-time strings, an invalid date-time string`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`). **This excludes this validator from performance tests**
`validation of date-time strings, case-insensitive T and Z`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`). **This excludes this validator from performance tests**
`validation of date-time strings, only RFC3339 not all of ISO 8601 are valid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`). **This excludes this validator from performance tests**
`validation of date-time strings, invalid non-padded month dates`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`). **This excludes this validator from performance tests**
`validation of date-time strings, invalid non-padded day dates`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date-time' format`). **This excludes this validator from performance tests**
`validation of date strings, a valid date string`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date' format`). **This excludes this validator from performance tests**
`validation of date strings, an invalid date-time string`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date' format`)
`validation of date strings, only RFC3339 not all of ISO 8601 are valid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date' format`)
`validation of date strings, invalidates non-padded month dates`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date' format`)
`validation of date strings, invalidates non-padded day dates`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'date' format`)
`validation of e-mail addresses, a valid e-mail address`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`). **This excludes this validator from performance tests**
`validation of e-mail addresses, an invalid e-mail address`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`). **This excludes this validator from performance tests**
`validation of e-mail addresses, tilde in local part is valid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`). **This excludes this validator from performance tests**
`validation of e-mail addresses, tilde before local part is valid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`). **This excludes this validator from performance tests**
`validation of e-mail addresses, tilde after local part is valid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`). **This excludes this validator from performance tests**
`validation of e-mail addresses, dot before local part is not valid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`)
`validation of e-mail addresses, dot after local part is not valid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`)
`validation of e-mail addresses, two separated dots inside local part are valid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`). **This excludes this validator from performance tests**
`validation of e-mail addresses, two subsequent dots inside local part are not valid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'email' format`)
`validation of host names, a host name starting with an illegal character`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, a host name containing illegal characters`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, a host name with a component too long`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, starts with hyphen`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, ends with hyphen`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, starts with underscore`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, ends with underscore`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, contains underscore`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, exceeds maximum label length`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of an internationalized e-mail addresses, an invalid idn e-mail address`|Expected result: `false` but validator returned: `true`
`validation of an internationalized e-mail addresses, an invalid e-mail address`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, illegal first char U+302E Hangul single dot tone mark`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, contains illegal char U+302E Hangul single dot tone mark`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, a host name with a component too long`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, invalid label, correct Punycode`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, invalid Punycode`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, U-label contains "--" in the 3rd and 4th position`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, U-label starts with a dash`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, U-label ends with a dash`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, U-label starts and ends with a dash`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Begins with a Spacing Combining Mark`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Begins with a Nonspacing Mark`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Begins with an Enclosing Mark`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Exceptions that are DISALLOWED, right-to-left chars`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Exceptions that are DISALLOWED, left-to-right chars`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, MIDDLE DOT with no preceding 'l'`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, MIDDLE DOT with nothing preceding`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, MIDDLE DOT with no following 'l'`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, MIDDLE DOT with nothing following`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Greek KERAIA not followed by Greek`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Greek KERAIA not followed by anything`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Hebrew GERESH not preceded by Hebrew`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Hebrew GERESH not preceded by anything`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Hebrew GERSHAYIM not preceded by Hebrew`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Hebrew GERSHAYIM not preceded by anything`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, KATAKANA MIDDLE DOT with no Hiragana, Katakana, or Han`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, KATAKANA MIDDLE DOT with no other characters`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, Arabic-Indic digits mixed with Extended Arabic-Indic digits`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, ZERO WIDTH JOINER not preceded by Virama`|Expected result: `false` but validator returned: `true`
`validation of internationalized host names, ZERO WIDTH JOINER not preceded by anything`|Expected result: `false` but validator returned: `true`
`validation of IP addresses, an IP address with too many components`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IP addresses, an IP address with out-of-range values`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IP addresses, an IP address without 4 components`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IP addresses, an IP address as an integer`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IP addresses, an IP address as an integer (decimal)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, a valid IPv6 address`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, an IPv6 address with out-of-range values`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, an IPv6 address with too many components`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, an IPv6 address containing illegal characters`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, no digits is valid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, leading colons is valid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`)
`validation of IPv6 addresses, trailing colons is valid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`)
`validation of IPv6 addresses, missing leading octet is invalid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, missing trailing octet is invalid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, missing leading octet with omitted octets later`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, two sets of double colons is invalid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, mixed format with the ipv4 section as decimal octets`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`)
`validation of IPv6 addresses, mixed format with double colons between the sections`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, mixed format with ipv4 section with octet out of range`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, mixed format with ipv4 section with a hex octet`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, mixed format with leading double colons (ipv4-mapped ipv6 address)`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`)
`validation of IPv6 addresses, triple colons is invalid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, 8 octets`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, insufficient octets without double colons`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, no colons is invalid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, ipv4 is not ipv6`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, ipv4 segment must have 4 octets`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, leading whitespace is invalid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`)
`validation of IPv6 addresses, trailing whitespace is invalid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`)
`validation of IPv6 addresses, netmask is not a part of ipv6 address`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, zone id is not a part of ipv6 address`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`)
`validation of IPv6 addresses, a long valid ipv6`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, a long invalid ipv6, below length limit, first`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IPv6 addresses, a long invalid ipv6, below length limit, second`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'ipv6' format`). **This excludes this validator from performance tests**
`validation of IRI References, an invalid IRI Reference`|Expected result: `false` but validator returned: `true`
`validation of IRI References, an invalid IRI fragment`|Expected result: `false` but validator returned: `true`
`validation of IRIs, an invalid IRI based on IPv6`|Expected result: `false` but validator returned: `true`
`validation of IRIs, an invalid relative IRI Reference`|Expected result: `false` but validator returned: `true`
`validation of IRIs, an invalid IRI`|Expected result: `false` but validator returned: `true`
`validation of IRIs, an invalid IRI though valid IRI reference`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (~ not escaped)`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #1`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #2`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (URI Fragment Identifier) #3`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (some escaped, but not all) #1`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (some escaped, but not all) #2`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (wrong escape character) #1`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (wrong escape character) #2`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (multiple characters not escaped)`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #1`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #2`|Expected result: `false` but validator returned: `true`
`validation of JSON-pointers (JSON String Representation), not a valid JSON-pointer (isn't empty nor starts with /) #3`|Expected result: `false` but validator returned: `true`
`validation of regular expressions, a valid regular expression`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'regex' format`). **This excludes this validator from performance tests**
`validation of regular expressions, a regular expression with unclosed parens is invalid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'regex' format`)
`validation of Relative JSON Pointers (RJP), an invalid RJP that is a valid JSON Pointer`|Expected result: `false` but validator returned: `true`
`validation of Relative JSON Pointers (RJP), negative prefix`|Expected result: `false` but validator returned: `true`
`validation of time strings, a valid time string`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'time' format`)
`validation of time strings, an invalid time string`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'time' format`)
`validation of time strings, only RFC3339 not all of ISO 8601 are valid`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'time' format`)
`validation of URI References, an invalid URI Reference`|Expected result: `false` but validator returned: `true`
`validation of URI References, an invalid URI fragment`|Expected result: `false` but validator returned: `true`
`format: uri-template, an invalid uri-template`|Expected result: `false` but validator returned: `true`
`validation of URIs, a valid URL with anchor tag`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, a valid URL with anchor tag and parantheses`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, a valid URL with URL-encoded stuff`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, a valid puny-coded URL `|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, a valid URL with many special characters`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, a valid URL based on IPv4`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, a valid URL with ftp scheme`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, a valid URL for a simple text file`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, a valid URL `|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, a valid mailto URI`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, a valid newsgroup URI`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, a valid tel URI`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, a valid URN`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, an invalid protocol-relative URI Reference`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, an invalid relative URI Reference`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, an invalid URI`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, an invalid URI though valid URI reference`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, an invalid URI with spaces`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, an invalid URI with spaces and missing scheme`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`). **This excludes this validator from performance tests**
`validation of URIs, an invalid URI with comma in scheme`|The schema failed to load(`Schema: 'type' attribute does not conform to the 'uri' format`)
`Proper UTF-16 surrogate pair handling: pattern, matches empty`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: pattern, matches two`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: patternProperties, doesn't match two`|Expected result: `false` but validator returned: `true`
`patternProperties with boolean schemas, object with property matching schema true is valid`|The schema failed to load(`Schema property 'patternProperties./f.*/' is a boolean when it should be an object`). **This excludes this validator from performance tests**
`patternProperties with boolean schemas, object with property matching schema false is invalid`|The schema failed to load(`Schema property 'patternProperties./f.*/' is a boolean when it should be an object`)
`patternProperties with boolean schemas, object with both properties is invalid`|The schema failed to load(`Schema property 'patternProperties./f.*/' is a boolean when it should be an object`)
`patternProperties with boolean schemas, object with a property matching both true and false is invalid`|The schema failed to load(`Schema property 'patternProperties./f.*/' is a boolean when it should be an object`)
`patternProperties with boolean schemas, empty object is valid`|The schema failed to load(`Schema property 'patternProperties./f.*/' is a boolean when it should be an object`). **This excludes this validator from performance tests**
`properties with boolean schema, no property present is valid`|The schema failed to load(`Schema property 'foo' is a boolean when it should be an object`). **This excludes this validator from performance tests**
`properties with boolean schema, only 'true' property present is valid`|The schema failed to load(`Schema property 'foo' is a boolean when it should be an object`). **This excludes this validator from performance tests**
`properties with boolean schema, only 'false' property present is invalid`|The schema failed to load(`Schema property 'foo' is a boolean when it should be an object`)
`properties with boolean schema, both properties present is invalid`|The schema failed to load(`Schema property 'foo' is a boolean when it should be an object`)
`propertyNames validation, some property names invalid`|Expected result: `false` but validator returned: `true`
`propertyNames with boolean schema false, object with any properties is invalid`|Expected result: `false` but validator returned: `true`
`root pointer ref, recursive mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`relative pointer ref to object, mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`relative pointer ref to array, mismatch array`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`escaped pointer ref, slash invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`escaped pointer ref, tilde invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`escaped pointer ref, percent invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`nested refs, nested ref invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ref overrides any sibling keywords, ref valid, maxItems ignored`|Expected result: `true` but validator returned: `false`
`ref overrides any sibling keywords, ref invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`remote ref, containing refs itself, remote ref invalid`|Expected result: `false` but validator returned: `true`
`property named $ref, containing an actual $ref, property named $ref invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`$ref to boolean schema false, any value is invalid`|Expected result: `false` but validator returned: `true`
`Recursive references between schemas, valid tree`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`Recursive references between schemas, invalid tree`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`)
`refs with quote, object with strings is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`Location-independent identifier, mismatch`|Expected result: `false` but validator returned: `true`
`Location-independent identifier with absolute URI, mismatch`|Expected result: `false` but validator returned: `true`
`Location-independent identifier with base URI change in subschema, mismatch`|Expected result: `false` but validator returned: `true`
`remote ref, remote ref invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`fragment within remote ref, remote fragment invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`ref within remote ref, ref within ref invalid`|Expected result: `false` but validator returned: `true`
`base URI change, base URI change ref invalid`|Expected result: `false` but validator returned: `true`
`base URI change - change folder, string is invalid`|Expected result: `false` but validator returned: `true`
`base URI change - change folder in subschema, string is invalid`|Expected result: `false` but validator returned: `true`
`root ref in remote ref, object is invalid`|Expected result: `false` but validator returned: `true`
`required validation, present required property is valid`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`required validation, non-present required property is invalid`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`required validation, ignores arrays`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`required validation, ignores strings`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`required validation, ignores other non-objects`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`required with empty array, property not required`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`required with escaped characters, object with all properties present is valid`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`required with escaped characters, object with some properties missing is invalid`|The schema failed to load(`Schema: 'required' attribute is an array when it should be a boolean`). **This excludes this validator from performance tests**
`type as array with one item, string is valid`|The schema failed to load(`Schema: 'type' attribute union length is 1 when it should be at least 2`). **This excludes this validator from performance tests**
`type as array with one item, number is invalid`|The schema failed to load(`Schema: 'type' attribute union length is 1 when it should be at least 2`). **This excludes this validator from performance tests**
`uniqueItems=false validation, non-unique array of integers is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, numbers are unique if mathematically unequal`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, non-unique array of objects is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, non-unique array of nested objects is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, non-unique array of arrays is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false validation, non-unique heterogeneous types are valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items, [false, false] from items array is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items, [true, true] from items array is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items, non-unique array extended from [false, true] is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items, non-unique array extended from [true, false] is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items and additionalItems=false, [false, false] from items array is valid`|Expected result: `true` but validator returned: `false`
`uniqueItems=false with an array of items and additionalItems=false, [true, true] from items array is valid`|Expected result: `true` but validator returned: `false`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)