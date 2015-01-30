# [`jjv`](https://github.com/acornejo/jjv) - test summary

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


# `` failed tests

jjv failed the test `valid definition, valid definition schema`. Expected result: `true` but validator returned: `false`

jjv failed the test `maxLength validation, two supplementary Unicode code points is long enough`. Expected result: `true` but validator returned: `false`

jjv failed the test `minLength validation, one supplementary Unicode code point is not long enough`. Expected result: `false` but validator returned: `true`

jjv failed the test `remote ref, containing refs itself, remote ref valid`. Expected result: `true` but validator returned: `false`

**All other tests passed**.
