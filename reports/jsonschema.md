# `[jsonschema](https://github.com/tdegrunt/jsonschema)` - test summary

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

jsonschema failed the test `valid definition, valid definition schema`. Expected result: `true` but validator returned: `&quot;no such schema &lt;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&gt;&quot;`

jsonschema failed the test `invalid definition, invalid definition schema`. Expected result: `false` but validator returned: `&quot;no such schema &lt;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&gt;&quot;`

jsonschema failed the test `maxLength validation, two supplementary Unicode code points is long enough`. Expected result: `true` but validator returned: `false`

jsonschema failed the test `minLength validation, one supplementary Unicode code point is not long enough`. Expected result: `false` but validator returned: `true`

jsonschema failed the test `validation of date-time strings, a valid date-time string`. Expected result: `true` but validator returned: `false`

jsonschema failed the test `validation of host names, a valid host name`. Expected result: `true` but validator returned: `false`

jsonschema failed the test `remote ref, containing refs itself, remote ref valid`. Expected result: `true` but validator returned: `&quot;no such schema &lt;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&gt;&quot;`

jsonschema failed the test `remote ref, containing refs itself, remote ref invalid`. Expected result: `false` but validator returned: `&quot;no such schema &lt;http:&#x2F;&#x2F;json-schema.org&#x2F;draft-04&#x2F;schema#&gt;&quot;`

**All other tests passed**.
