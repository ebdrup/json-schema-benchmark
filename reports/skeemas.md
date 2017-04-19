# [`skeemas`](https://github.com/Prestaul/skeemas#readme) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`skeemas`](https://github.com/Prestaul/skeemas#readme) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`skeemas`](https://github.com/Prestaul/skeemas#readme) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
|`array of items with no additionalItems, fewer number of items present`|Expected result: `true` but validator returned: `"validators.types[type] is not a function"`. **This excludes this validator from performance tests**
|`an array of schemas for items, incomplete array of items`|Expected result: `true` but validator returned: `"validators.types[type] is not a function"`
|`an array of schemas for items, empty array`|Expected result: `true` but validator returned: `"validators.types[type] is not a function"`
|`ECMA 262 regex non-compliance, ECMA 262 has no support for \Z anchor from .NET`|Expected result: `false` but validator returned: `true`
|`Recursive references between schemas, valid tree`|Expected result: `true` but validator returned: `"Unable to locate JSON Ref (http://localhost:1234/treenode)"`
|`Recursive references between schemas, invalid tree`|Expected result: `false` but validator returned: `"Unable to locate JSON Ref (http://localhost:1234/treenode)"`
|`base URI change - change folder, number is valid`|Expected result: `true` but validator returned: `"Unable to locate JSON Ref (http://localhost:1234/scope_change_defs1.jsonfolder/folderInteger.json)"`
|`base URI change - change folder, string is invalid`|Expected result: `false` but validator returned: `"Unable to locate JSON Ref (http://localhost:1234/scope_change_defs1.jsonfolder/folderInteger.json)"`
|`base URI change - change folder in subschema, number is valid`|Expected result: `true` but validator returned: `"Unable to locate JSON Ref (http://localhost:1234/scope_change_defs2.jsonfolderInteger.json)"`
|`base URI change - change folder in subschema, string is invalid`|Expected result: `false` but validator returned: `"Unable to locate JSON Ref (http://localhost:1234/scope_change_defs2.jsonfolderInteger.json)"`
|`root ref in remote ref, string is valid`|Expected result: `true` but validator returned: `"Unable to locate JSON Ref (name.json)"`
|`root ref in remote ref, null is valid`|Expected result: `true` but validator returned: `"Unable to locate JSON Ref (name.json)"`
|`root ref in remote ref, object is invalid`|Expected result: `false` but validator returned: `"Unable to locate JSON Ref (name.json)"`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)