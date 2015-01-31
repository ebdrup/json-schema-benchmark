# [`jayschema`](https://github.com/natesilva/jayschema) - test summary

# All validators fail these tests

some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part


# [`jayschema`](https://github.com/natesilva/jayschema) failed tests

[`jayschema`](https://github.com/natesilva/jayschema) failed the test `maxLength validation, two supplementary Unicode code points is long enough`. Expected result: `true` but validator returned: `false`

[`jayschema`](https://github.com/natesilva/jayschema) failed the test `minLength validation, one supplementary Unicode code point is not long enough`. Expected result: `false` but validator returned: `true`

[`jayschema`](https://github.com/natesilva/jayschema) failed the test `validation of URIs, an invalid URI though valid URI reference`. Expected result: `false` but validator returned: `true`

[`jayschema`](https://github.com/natesilva/jayschema) failed the test `remote ref, remote ref valid`. Expected result: `true` but validator returned: `false`

[`jayschema`](https://github.com/natesilva/jayschema) failed the test `fragment within remote ref, remote fragment valid`. Expected result: `true` but validator returned: `"Cannot convert null to object"`

[`jayschema`](https://github.com/natesilva/jayschema) failed the test `fragment within remote ref, remote fragment invalid`. Expected result: `false` but validator returned: `"Cannot convert null to object"`

[`jayschema`](https://github.com/natesilva/jayschema) failed the test `ref within remote ref, ref within ref valid`. Expected result: `true` but validator returned: `"Cannot convert null to object"`

[`jayschema`](https://github.com/natesilva/jayschema) failed the test `ref within remote ref, ref within ref invalid`. Expected result: `false` but validator returned: `"Cannot convert null to object"`

[`jayschema`](https://github.com/natesilva/jayschema) failed the test `change resolution scope, changed scope ref valid`. Expected result: `true` but validator returned: `false`

**All other tests passed**.
