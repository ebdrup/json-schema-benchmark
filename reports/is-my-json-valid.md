# [`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid) - test summary

# All validators fail these tests

some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part

remote ref, remote ref invalid

fragment within remote ref, remote fragment invalid

ref within remote ref, ref within ref invalid

change resolution scope, changed scope ref invalid

remote ref, remote ref valid

fragment within remote ref, remote fragment valid

ref within remote ref, ref within ref valid

change resolution scope, changed scope ref valid


# [`is-my-json-valid`](https://github.com/mafintosh/is-my-json-valid) failed tests

is-my-json-valid failed the test `invalid definition, invalid definition schema`. Expected result: `false` but validator returned: `true`

is-my-json-valid failed the test `maxLength validation, two supplementary Unicode code points is long enough`. Expected result: `true` but validator returned: `false`

is-my-json-valid failed the test `minLength validation, one supplementary Unicode code point is not long enough`. Expected result: `false` but validator returned: `true`

is-my-json-valid failed the test `remote ref, containing refs itself, remote ref invalid`. Expected result: `false` but validator returned: `true`

**All other tests passed**.
