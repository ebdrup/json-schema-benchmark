# [`skeemas`](https://github.com/Prestaul/skeemas) - test summary

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


# [`skeemas`](https://github.com/Prestaul/skeemas) failed tests

skeemas failed the test `valid definition, valid definition schema`. Expected result: `true` but validator returned: `&quot;Unable to locate JSON Ref (http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema)&quot;`

skeemas failed the test `invalid definition, invalid definition schema`. Expected result: `false` but validator returned: `&quot;Unable to locate JSON Ref (http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema)&quot;`

skeemas failed the test `remote ref, containing refs itself, remote ref valid`. Expected result: `true` but validator returned: `&quot;Unable to locate JSON Ref (http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema)&quot;`

skeemas failed the test `remote ref, containing refs itself, remote ref invalid`. Expected result: `false` but validator returned: `&quot;Unable to locate JSON Ref (http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema)&quot;`

**All other tests passed**.
