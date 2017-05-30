# [`jsck`](https://github.com/pandastrike/jsck#readme) - test summary


# [`jsck`](https://github.com/pandastrike/jsck#readme) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`jsck`](https://github.com/pandastrike/jsck#readme) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
|`a schema given for items, JavaScript pseudo-array is valid`|Expected result: `true` but validator returned: `false`
|`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`
|`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`
|`ECMA 262 regex non-compliance, ECMA 262 has no support for \Z anchor from .NET`|Expected result: `false` but validator returned: `true`
|`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`|Expected result: `false` but validator returned: `true`
|`ref overrides any sibling keywords, ref valid, maxItems ignored`|Expected result: `true` but validator returned: `false`
|`Recursive references between schemas, valid tree`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/node","http://localhost:1234/tree"]`)
|`Recursive references between schemas, invalid tree`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/node","http://localhost:1234/tree"]`)
|`remote ref, remote ref valid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/integer.json"]`)
|`remote ref, remote ref invalid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/integer.json"]`)
|`fragment within remote ref, remote fragment valid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/subSchemas.json#/integer"]`)
|`fragment within remote ref, remote fragment invalid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/subSchemas.json#/integer"]`)
|`ref within remote ref, ref within ref valid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/subSchemas.json#/refToInteger"]`)
|`ref within remote ref, ref within ref invalid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/subSchemas.json#/refToInteger"]`)
|`base URI change, base URI change ref valid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/"]`)
|`base URI change, base URI change ref invalid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/"]`)
|`base URI change - change folder, number is valid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/folderInteger.json"]`)
|`base URI change - change folder, string is invalid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/folderInteger.json"]`)
|`base URI change - change folder in subschema, number is valid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/folderInteger.json"]`)
|`base URI change - change folder in subschema, string is invalid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/folderInteger.json"]`)
|`root ref in remote ref, string is valid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/name.json#/definitions/orNull"]`)
|`root ref in remote ref, null is valid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/name.json#/definitions/orNull"]`)
|`root ref in remote ref, object is invalid`|The schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/name.json#/definitions/orNull"]`)
|`uniqueItems validation, non-unique array of integers is invalid`|Expected result: `false` but validator returned: `true`
|`uniqueItems validation, numbers are unique if mathematically unequal`|Expected result: `false` but validator returned: `true`
|`uniqueItems validation, non-unique array of objects is invalid`|Expected result: `false` but validator returned: `true`
|`uniqueItems validation, non-unique array of nested objects is invalid`|Expected result: `false` but validator returned: `true`
|`uniqueItems validation, non-unique array of arrays is invalid`|Expected result: `false` but validator returned: `true`
|`uniqueItems validation, non-unique heterogeneous types are invalid`|Expected result: `false` but validator returned: `true`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)