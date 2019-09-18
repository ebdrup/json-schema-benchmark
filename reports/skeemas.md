# [`skeemas`](https://github.com/Prestaul/skeemas) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`skeemas`](https://github.com/Prestaul/skeemas) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`skeemas`](https://github.com/Prestaul/skeemas) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
|`validation of URIs, a valid URL `|Expected result: `true` but validator returned: `false`
|`Recursive references between schemas, valid tree`|Expected result: `true` but validator returned: `"Unable to locate JSON Ref (http://localhost:1234/node)"`
|`Recursive references between schemas, invalid tree`|Expected result: `false` but validator returned: `"Unable to locate JSON Ref (http://localhost:1234/node)"`
|`base URI change - change folder in subschema, number is valid`|Expected result: `true` but validator returned: `"Unable to locate JSON Ref (http://localhost:1234/folderInteger.json)"`
|`base URI change - change folder in subschema, string is invalid`|Expected result: `false` but validator returned: `"Unable to locate JSON Ref (http://localhost:1234/folderInteger.json)"`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)