# [`djv`](https://github.com/korzio/djv#readme) - test summary


# [`djv`](https://github.com/korzio/djv#readme) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`djv`](https://github.com/korzio/djv#readme) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
|`a schema given for items, JavaScript pseudo-array is valid`|Expected result: `true` but validator returned: `false`
|`an array of schemas for items, incomplete array of items`|Expected result: `true` but validator returned: `false`
|`an array of schemas for items, empty array`|Expected result: `true` but validator returned: `false`
|`an array of schemas for items, JavaScript pseudo-array is valid`|Expected result: `true` but validator returned: `false`
|`ECMA 262 regex non-compliance, ECMA 262 has no support for \Z anchor from .NET`|Expected result: `false` but validator returned: `true`
|`validation of URIs, an invalid protocol-relative URI Reference`|Expected result: `false` but validator returned: `true`
|`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`|Expected result: `false` but validator returned: `true`
|`ref overrides any sibling keywords, ref valid, maxItems ignored`|Expected result: `true` but validator returned: `false`
|`Recursive references between schemas, valid tree`|The schema failed to load(`Cannot read property 'schema' of undefined`)
|`Recursive references between schemas, invalid tree`|The schema failed to load(`Cannot read property 'schema' of undefined`)
|`base URI change - change folder, number is valid`|The schema failed to load(`Cannot read property 'schema' of undefined`)
|`base URI change - change folder, string is invalid`|The schema failed to load(`Cannot read property 'schema' of undefined`)
|`base URI change - change folder in subschema, number is valid`|The schema failed to load(`Cannot read property 'schema' of undefined`)
|`base URI change - change folder in subschema, string is invalid`|The schema failed to load(`Cannot read property 'schema' of undefined`)
|`root ref in remote ref, string is valid`|The schema failed to load(`Cannot read property 'schema' of undefined`)
|`root ref in remote ref, null is valid`|The schema failed to load(`Cannot read property 'schema' of undefined`)
|`root ref in remote ref, object is invalid`|The schema failed to load(`Cannot read property 'schema' of undefined`)
|`required validation, ignores non-objects`|Expected result: `true` but validator returned: `false`

**All other tests passed**.

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)