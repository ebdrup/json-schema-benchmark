# [`schemasaurus`](https://github.com/AlexeyGrishin/schemasaurus) - test summary

# All validators fail this test

`some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`

# [`schemasaurus`](https://github.com/AlexeyGrishin/schemasaurus) failed tests

Some validators have deliberately chosen not to support parts of the spec. Go to the [`schemasaurus`](https://github.com/AlexeyGrishin/schemasaurus) homepage to learn if
that is the case for these tests.

|test failed|reason
|-----------|------
|`valid definition, valid definition schema`|The schema failed to load(`Remote refs are not supported for now :(`)
|`invalid definition, invalid definition schema`|The schema failed to load(`Remote refs are not supported for now :(`)
|`maxLength validation, two supplementary Unicode code points is long enough`|Expected result: `true` but validator returned: `false`
|`minLength validation, one supplementary Unicode code point is not long enough`|Expected result: `false` but validator returned: `true`
|`remote ref, containing refs itself, remote ref valid`|The schema failed to load(`Remote refs are not supported for now :(`)
|`remote ref, containing refs itself, remote ref invalid`|The schema failed to load(`Remote refs are not supported for now :(`)
|`remote ref, remote ref valid`|The schema failed to load(`Cannot call method 'split' of undefined`)
|`remote ref, remote ref invalid`|The schema failed to load(`Cannot call method 'split' of undefined`)
|`fragment within remote ref, remote fragment valid`|The schema failed to load(`Remote refs are not supported for now :(`)
|`fragment within remote ref, remote fragment invalid`|The schema failed to load(`Remote refs are not supported for now :(`)
|`ref within remote ref, ref within ref valid`|The schema failed to load(`Remote refs are not supported for now :(`)
|`ref within remote ref, ref within ref invalid`|The schema failed to load(`Remote refs are not supported for now :(`)
|`change resolution scope, changed scope ref valid`|The schema failed to load(`Cannot call method 'split' of undefined`)
|`change resolution scope, changed scope ref invalid`|The schema failed to load(`Cannot call method 'split' of undefined`)

**All other tests passed**.

[back to benchmarks](https://github.com/Muscula/json-schema-benchmark)