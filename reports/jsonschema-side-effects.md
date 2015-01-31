# [`jsonschema`](https://github.com/tdegrunt/jsonschema) side-effects in testrun

[`jsonschema`](https://github.com/tdegrunt/jsonschema) had a side-effect on (altered the original) data in the test `multiple dependencies subschema, valid`
schema
```js
{
	"dependencies": {
		"bar": {
			"properties": {
				"foo": {
					"type": "integer"
				},
				"bar": {
					"type": "integer"
				}
			}
		}
	}
}
```
Original data
```js
{
	"foo": 1,
	"bar": 2
}
```
data after validating with schema
```js
{
	"foo": 1,
	"bar": "[Circular ~]"
}
```

[`jsonschema`](https://github.com/tdegrunt/jsonschema) had a side-effect on (altered the original) data in the test `multiple dependencies subschema, wrong type`
schema
```js
{
	"dependencies": {
		"bar": {
			"properties": {
				"foo": {
					"type": "integer"
				},
				"bar": {
					"type": "integer"
				}
			}
		}
	}
}
```
Original data
```js
{
	"foo": "quux",
	"bar": 2
}
```
data after validating with schema
```js
{
	"foo": "quux",
	"bar": "[Circular ~]"
}
```

[`jsonschema`](https://github.com/tdegrunt/jsonschema) had a side-effect on (altered the original) data in the test `multiple dependencies subschema, wrong type other`
schema
```js
{
	"dependencies": {
		"bar": {
			"properties": {
				"foo": {
					"type": "integer"
				},
				"bar": {
					"type": "integer"
				}
			}
		}
	}
}
```
Original data
```js
{
	"foo": 2,
	"bar": "quux"
}
```
data after validating with schema
```js
{
	"foo": 2,
	"bar": "[Circular ~]"
}
```

[`jsonschema`](https://github.com/tdegrunt/jsonschema) had a side-effect on (altered the original) data in the test `multiple dependencies subschema, wrong type both`
schema
```js
{
	"dependencies": {
		"bar": {
			"properties": {
				"foo": {
					"type": "integer"
				},
				"bar": {
					"type": "integer"
				}
			}
		}
	}
}
```
Original data
```js
{
	"foo": "quux",
	"bar": "quux"
}
```
data after validating with schema
```js
{
	"foo": "quux",
	"bar": "[Circular ~]"
}
```
