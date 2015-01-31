# [`jsck`](https://github.com/pandastrike/jsck) - test summary

# All validators fail these tests

some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part


# [`jsck`](https://github.com/pandastrike/jsck) failed tests

[`jsck`](https://github.com/pandastrike/jsck) failed the test `valid definition, valid definition schema`. Because the schema failed to load(`Unresolvable $ref values: ["http://json-schema.org/draft-04/schema#"]`)

[`jsck`](https://github.com/pandastrike/jsck) failed the test `invalid definition, invalid definition schema`. Because the schema failed to load(`Unresolvable $ref values: ["http://json-schema.org/draft-04/schema#"]`)

[`jsck`](https://github.com/pandastrike/jsck) failed the test `maxLength validation, two supplementary Unicode code points is long enough`. Expected result: `true` but validator returned: `false`

[`jsck`](https://github.com/pandastrike/jsck) failed the test `minLength validation, one supplementary Unicode code point is not long enough`. Expected result: `false` but validator returned: `true`

[`jsck`](https://github.com/pandastrike/jsck) failed the test `remote ref, containing refs itself, remote ref valid`. Because the schema failed to load(`Unresolvable $ref values: ["http://json-schema.org/draft-04/schema#"]`)

[`jsck`](https://github.com/pandastrike/jsck) failed the test `remote ref, containing refs itself, remote ref invalid`. Because the schema failed to load(`Unresolvable $ref values: ["http://json-schema.org/draft-04/schema#"]`)

[`jsck`](https://github.com/pandastrike/jsck) failed the test `remote ref, remote ref valid`. Because the schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/integer.json"]`)

[`jsck`](https://github.com/pandastrike/jsck) failed the test `remote ref, remote ref invalid`. Because the schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/integer.json"]`)

[`jsck`](https://github.com/pandastrike/jsck) failed the test `fragment within remote ref, remote fragment valid`. Because the schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/subSchemas.json#/integer"]`)

[`jsck`](https://github.com/pandastrike/jsck) failed the test `fragment within remote ref, remote fragment invalid`. Because the schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/subSchemas.json#/integer"]`)

[`jsck`](https://github.com/pandastrike/jsck) failed the test `ref within remote ref, ref within ref valid`. Because the schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/subSchemas.json#/refToInteger"]`)

[`jsck`](https://github.com/pandastrike/jsck) failed the test `ref within remote ref, ref within ref invalid`. Because the schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/subSchemas.json#/refToInteger"]`)

[`jsck`](https://github.com/pandastrike/jsck) failed the test `change resolution scope, changed scope ref valid`. Because the schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/"]`)

[`jsck`](https://github.com/pandastrike/jsck) failed the test `change resolution scope, changed scope ref invalid`. Because the schema failed to load(`Unresolvable $ref values: ["http://localhost:1234/"]`)

[`jsck`](https://github.com/pandastrike/jsck) failed the test `uniqueItems validation, non-unique array of integers is invalid`. Expected result: `false` but validator returned: `true`

[`jsck`](https://github.com/pandastrike/jsck) failed the test `uniqueItems validation, numbers are unique if mathematically unequal`. Expected result: `false` but validator returned: `true`

[`jsck`](https://github.com/pandastrike/jsck) failed the test `uniqueItems validation, non-unique array of objects is invalid`. Expected result: `false` but validator returned: `true`

[`jsck`](https://github.com/pandastrike/jsck) failed the test `uniqueItems validation, non-unique array of nested objects is invalid`. Expected result: `false` but validator returned: `true`

[`jsck`](https://github.com/pandastrike/jsck) failed the test `uniqueItems validation, non-unique array of arrays is invalid`. Expected result: `false` but validator returned: `true`

[`jsck`](https://github.com/pandastrike/jsck) failed the test `uniqueItems validation, non-unique heterogeneous types are invalid`. Expected result: `false` but validator returned: `true`

**All other tests passed**.
