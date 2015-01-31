# [`jjv`](https://github.com/acornejo/jjv) - test summary

# All validators fail these tests

some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part


# [`jjv`](https://github.com/acornejo/jjv) failed tests
|test failed|reason
|-----------|------
|`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`
|`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`
|`change resolution scope, changed scope ref valid`|Expected result: `true` but validator returned: `false`

**All other tests passed**.
