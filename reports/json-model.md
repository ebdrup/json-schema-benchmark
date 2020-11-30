# [`json-model`](https://github.com/geraintluff/json-model) - test summary


# [`json-model`](https://github.com/geraintluff/json-model) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`json-model`](https://github.com/geraintluff/json-model) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
`allOf with boolean schemas, all true, any value is valid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`). **This excludes this validator from performance tests**
`allOf with boolean schemas, some false, any value is invalid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`)
`allOf with boolean schemas, all false, any value is invalid`|Expected result: `false` but validator returned: `true`
`anyOf with boolean schemas, all true, any value is valid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`)
`anyOf with boolean schemas, some true, any value is valid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`)
`anyOf with boolean schemas, all false, any value is invalid`|Expected result: `false` but validator returned: `true`
`boolean schema 'true', number is valid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"5642406038221874anonymous"}`). **This excludes this validator from performance tests**
`boolean schema 'true', string is valid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"5642406038221874anonymous"}`). **This excludes this validator from performance tests**
`boolean schema 'true', boolean true is valid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"5642406038221874anonymous"}`). **This excludes this validator from performance tests**
`boolean schema 'true', boolean false is valid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"5642406038221874anonymous"}`). **This excludes this validator from performance tests**
`boolean schema 'true', null is valid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"5642406038221874anonymous"}`). **This excludes this validator from performance tests**
`boolean schema 'true', object is valid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"5642406038221874anonymous"}`). **This excludes this validator from performance tests**
`boolean schema 'true', empty object is valid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"5642406038221874anonymous"}`). **This excludes this validator from performance tests**
`boolean schema 'true', array is valid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"5642406038221874anonymous"}`). **This excludes this validator from performance tests**
`boolean schema 'true', empty array is valid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"5642406038221874anonymous"}`). **This excludes this validator from performance tests**
`boolean schema 'false', number is invalid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"11228201115855074anonymous"}`)
`boolean schema 'false', string is invalid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"11228201115855074anonymous"}`)
`boolean schema 'false', boolean true is invalid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"11228201115855074anonymous"}`)
`boolean schema 'false', boolean false is invalid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"11228201115855074anonymous"}`)
`boolean schema 'false', null is invalid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"11228201115855074anonymous"}`)
`boolean schema 'false', object is invalid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"11228201115855074anonymous"}`)
`boolean schema 'false', empty object is invalid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"11228201115855074anonymous"}`)
`boolean schema 'false', array is invalid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"11228201115855074anonymous"}`)
`boolean schema 'false', empty array is invalid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"11228201115855074anonymous"}`)
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
`valid definition, valid definition schema`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"http://json-schema.org/draft-06/schema"}`). **This excludes this validator from performance tests**
`invalid definition, invalid definition schema`|Expected result: `false` but validator returned: `true`
`dependencies with boolean subschemas, object with property having schema true is valid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`). **This excludes this validator from performance tests**
`dependencies with boolean subschemas, object with property having schema false is invalid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`)
`dependencies with boolean subschemas, object with both properties is invalid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`)
`dependencies with boolean subschemas, empty object is valid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`). **This excludes this validator from performance tests**
`simple enum validation, something else is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`heterogeneous enum validation, something else is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`heterogeneous enum validation, objects are deep compared`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`heterogeneous enum validation, extra properties in object is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`heterogeneous enum-with-null validation, something else is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`enums in properties, wrong foo value`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`enums in properties, wrong bar value`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`enum with escaped characters, another string is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`enum with false does not match 0, integer zero is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`enum with false does not match 0, float zero is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`enum with true does not match 1, integer one is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`enum with true does not match 1, float one is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`enum with 0 does not match false, false is invalid`|Expected result: `false` but validator returned: `true`
`enum with 1 does not match true, true is invalid`|Expected result: `false` but validator returned: `true`
`nul characters in strings, do not match string lacking nul`|Expected result: `false` but validator returned: `true`
`exclusiveMaximum validation, boundary point is invalid`|Expected result: `false` but validator returned: `true`
`exclusiveMaximum validation, above the exclusiveMaximum is invalid`|Expected result: `false` but validator returned: `true`
`exclusiveMinimum validation, boundary point is invalid`|Expected result: `false` but validator returned: `true`
`exclusiveMinimum validation, below the exclusiveMinimum is invalid`|Expected result: `false` but validator returned: `true`
`an array of schemas for items, incomplete array of items`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`an array of schemas for items, empty array`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`items with boolean schema (false), any non-empty array is invalid`|Expected result: `false` but validator returned: `true`
`items with boolean schemas, array with one item is valid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`). **This excludes this validator from performance tests**
`items with boolean schemas, array with two items is invalid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`)
`items with boolean schemas, empty array is valid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`). **This excludes this validator from performance tests**
`items and subitems, fewer items is valid`|Expected result: `true` but validator returned: `false`. **This excludes this validator from performance tests**
`nested items, valid nested array`|Expected result: `true` but validator returned: `"Cannot read property '1' of undefined"`. **This excludes this validator from performance tests**
`nested items, nested array with invalid type`|Expected result: `false` but validator returned: `"Cannot read property '1' of undefined"`. **This excludes this validator from performance tests**
`nested items, not deep enough`|Expected result: `false` but validator returned: `"Cannot read property 'length' of undefined"`. **This excludes this validator from performance tests**
`not, disallowed`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`not multiple types, mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`not multiple types, other mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`not more complex schema, mismatch`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`forbidden property, property present`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`not with boolean schema true, any value is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`oneOf with boolean schemas, all true, any value is invalid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`). **This excludes this validator from performance tests**
`oneOf with boolean schemas, one true, any value is valid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`)
`oneOf with boolean schemas, more than one true, any value is invalid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`)
`oneOf with missing optional property, first oneOf valid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`). **This excludes this validator from performance tests**
`oneOf with missing optional property, second oneOf valid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`). **This excludes this validator from performance tests**
`oneOf with missing optional property, both oneOf valid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`). **This excludes this validator from performance tests**
`oneOf with missing optional property, neither oneOf valid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`). **This excludes this validator from performance tests**
`float comparison with high precision, comparison works for high numbers`|Expected result: `false` but validator returned: `true`
`float comparison with high precision on negative numbers, comparison works for very negative numbers`|Expected result: `false` but validator returned: `true`
`all integers are multiples of 0.5, if overflow is handled, valid if optional overflow handling is implemented`|Expected result: `true` but validator returned: `false`
`validation of date-time strings, a invalid day in date-time string`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, an invalid offset in date-time string`|Expected result: `false` but validator returned: `true`
`validation of date-time strings, an invalid closing Z after time-zone offset`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of date-time strings, an invalid date-time string`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of date-time strings, only RFC3339 not all of ISO 8601 are valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of date-time strings, invalid non-padded month dates`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of date-time strings, invalid non-padded day dates`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of e-mail addresses, an invalid e-mail address`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of e-mail addresses, dot before local part is not valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, dot after local part is not valid`|Expected result: `false` but validator returned: `true`
`validation of e-mail addresses, two subsequent dots inside local part are not valid`|Expected result: `false` but validator returned: `true`
`validation of host names, a host name starting with an illegal character`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, a host name containing illegal characters`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, a host name with a component too long`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, starts with hyphen`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, ends with hyphen`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, starts with underscore`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, ends with underscore`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, contains underscore`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of host names, exceeds maximum label length`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IP addresses, an IP address with too many components`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IP addresses, an IP address with out-of-range values`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IP addresses, an IP address without 4 components`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IP addresses, an IP address as an integer`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IP addresses, an IP address as an integer (decimal)`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, an IPv6 address with out-of-range values`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, an IPv6 address with too many components`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, an IPv6 address containing illegal characters`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, missing leading octet is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, missing trailing octet is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, missing leading octet with omitted octets later`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, two sets of double colons is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, mixed format with ipv4 section with octet out of range`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, mixed format with ipv4 section with a hex octet`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, triple colons is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, insufficient octets without double colons`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, no colons is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, ipv4 is not ipv6`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, ipv4 segment must have 4 octets`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, leading whitespace is invalid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, trailing whitespace is invalid`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, netmask is not a part of ipv6 address`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, zone id is not a part of ipv6 address`|Expected result: `false` but validator returned: `true`
`validation of IPv6 addresses, a long invalid ipv6, below length limit, first`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of IPv6 addresses, a long invalid ipv6, below length limit, second`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
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
`validation of URI References, an invalid URI Reference`|Expected result: `false` but validator returned: `true`
`validation of URI References, an invalid URI fragment`|Expected result: `false` but validator returned: `true`
`format: uri-template, an invalid uri-template`|Expected result: `false` but validator returned: `true`
`validation of URIs, an invalid protocol-relative URI Reference`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of URIs, an invalid relative URI Reference`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of URIs, an invalid URI`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of URIs, an invalid URI though valid URI reference`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of URIs, an invalid URI with spaces`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of URIs, an invalid URI with spaces and missing scheme`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`validation of URIs, an invalid URI with comma in scheme`|Expected result: `false` but validator returned: `true`
`Proper UTF-16 surrogate pair handling: pattern, matches empty`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: pattern, matches two`|Expected result: `true` but validator returned: `false`
`Proper UTF-16 surrogate pair handling: patternProperties, doesn't match two`|Expected result: `false` but validator returned: `true`
`patternProperties with boolean schemas, object with property matching schema true is valid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`). **This excludes this validator from performance tests**
`patternProperties with boolean schemas, object with property matching schema false is invalid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`)
`patternProperties with boolean schemas, object with both properties is invalid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`)
`patternProperties with boolean schemas, object with a property matching both true and false is invalid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`)
`patternProperties with boolean schemas, empty object is valid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`). **This excludes this validator from performance tests**
`properties with boolean schema, no property present is valid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`). **This excludes this validator from performance tests**
`properties with boolean schema, only 'true' property present is valid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`). **This excludes this validator from performance tests**
`properties with boolean schema, only 'false' property present is invalid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`)
`properties with boolean schema, both properties present is invalid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`)
`properties with escaped characters, object with all numbers is valid`|The schema failed to load(`missing ) after argument list`). **This excludes this validator from performance tests**
`properties with escaped characters, object with strings is invalid`|The schema failed to load(`missing ) after argument list`). **This excludes this validator from performance tests**
`propertyNames validation, some property names invalid`|Expected result: `false` but validator returned: `true`
`propertyNames with boolean schema false, object with any properties is invalid`|Expected result: `false` but validator returned: `true`
`remote ref, containing refs itself, remote ref invalid`|Expected result: `false` but validator returned: `true`
`$ref to boolean schema true, any value is valid`|The schema failed to load(`Cannot use 'in' operator to search for 'maxItems' in true`). **This excludes this validator from performance tests**
`$ref to boolean schema false, any value is invalid`|Expected result: `false` but validator returned: `true`
`Recursive references between schemas, valid tree`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"node"}`). **This excludes this validator from performance tests**
`Recursive references between schemas, invalid tree`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"node"}`)
`refs with quote, object with numbers is valid`|The schema failed to load(`missing ) after argument list`). **This excludes this validator from performance tests**
`refs with quote, object with strings is invalid`|The schema failed to load(`missing ) after argument list`). **This excludes this validator from performance tests**
`Location-independent identifier, match`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"tree"}`)
`Location-independent identifier, mismatch`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"tree"}`)
`Location-independent identifier with absolute URI, match`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"http://localhost:1234/bar"}`)
`Location-independent identifier with absolute URI, mismatch`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"http://localhost:1234/bar"}`)
`Location-independent identifier with base URI change in subschema, match`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"http://localhost:1234/nested.json"}`)
`Location-independent identifier with base URI change in subschema, mismatch`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"http://localhost:1234/nested.json"}`)
`naive replacement of $ref with its destination is not correct, do not evaluate the $ref inside the enum`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`remote ref, remote ref valid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"http://localhost:1234/integer.json"}`). **This excludes this validator from performance tests**
`remote ref, remote ref invalid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"http://localhost:1234/integer.json"}`). **This excludes this validator from performance tests**
`fragment within remote ref, remote fragment valid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"http://localhost:1234/subSchemas.json"}`). **This excludes this validator from performance tests**
`fragment within remote ref, remote fragment invalid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"http://localhost:1234/subSchemas.json"}`). **This excludes this validator from performance tests**
`ref within remote ref, ref within ref invalid`|Expected result: `false` but validator returned: `true`
`base URI change, base URI change ref valid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"folderInteger.json"}`). **This excludes this validator from performance tests**
`base URI change, base URI change ref invalid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"folderInteger.json"}`)
`base URI change - change folder, string is invalid`|Expected result: `false` but validator returned: `true`
`base URI change - change folder in subschema, string is invalid`|Expected result: `false` but validator returned: `true`
`root ref in remote ref, string is valid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"name.json"}`). **This excludes this validator from performance tests**
`root ref in remote ref, null is valid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"name.json"}`). **This excludes this validator from performance tests**
`root ref in remote ref, object is invalid`|The schema failed to load(`Requests not enabled - try JsonModel.setRequestFunction(func): {"method":"GET","url":"name.json"}`)
`uniqueItems validation, non-unique array of integers is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems validation, numbers are unique if mathematically unequal`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems validation, non-unique array of objects is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems validation, non-unique array of nested objects is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems validation, non-unique array of arrays is invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems validation, non-unique heterogeneous types are invalid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems validation, objects are non-unique despite key order`|Expected result: `false` but validator returned: `true`
`uniqueItems with an array of items, [false, false] from items array is not valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems with an array of items, [true, true] from items array is not valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems with an array of items, non-unique array extended from [false, true] is not valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems with an array of items, non-unique array extended from [true, false] is not valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems with an array of items and additionalItems=false, [false, false] from items array is not valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**
`uniqueItems with an array of items and additionalItems=false, [true, true] from items array is not valid`|Expected result: `false` but validator returned: `true`. **This excludes this validator from performance tests**

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)