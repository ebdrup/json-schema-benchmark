# [`z-schema`](https://github.com/zaggino/z-schema) - test summary

# All validators fail these tests

some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part


# [`z-schema`](https://github.com/zaggino/z-schema) failed tests

[`z-schema`](https://github.com/zaggino/z-schema) failed the test `maxLength validation, two supplementary Unicode code points is long enough`. Expected result: `true` but validator returned: `false`

[`z-schema`](https://github.com/zaggino/z-schema) failed the test `minLength validation, one supplementary Unicode code point is not long enough`. Expected result: `false` but validator returned: `true`

[`z-schema`](https://github.com/zaggino/z-schema) failed the test `validation of URIs, an invalid URI`. Expected result: `false` but validator returned: `true`

[`z-schema`](https://github.com/zaggino/z-schema) failed the test `validation of URIs, an invalid URI though valid URI reference`. Expected result: `false` but validator returned: `true`

**All other tests passed**.
