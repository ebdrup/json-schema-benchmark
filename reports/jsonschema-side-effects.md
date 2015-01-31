# [`jsonschema`](https://github.com/tdegrunt/jsonschema) side-effects in testrun

When running tests [`jsonschema`](https://github.com/tdegrunt/jsonschema) mutated either the original schema or the data being validated with the schema or both.


# Side-effect on data
[`jsonschema`](https://github.com/tdegrunt/jsonschema) had a side-effect on (altered the original) data in the test `multiple dependencies subschema, valid`
## Schema
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
## Original data
```js
{
	"foo": 1,
	"bar": 2
}
```
## Data after validating with schema
```js
{
	"foo": 1,
	"bar": "[Circular ~]"
}
```

# Side-effect on data
[`jsonschema`](https://github.com/tdegrunt/jsonschema) had a side-effect on (altered the original) data in the test `multiple dependencies subschema, wrong type`
## Schema
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
## Original data
```js
{
	"foo": "quux",
	"bar": 2
}
```
## Data after validating with schema
```js
{
	"foo": "quux",
	"bar": "[Circular ~]"
}
```

# Side-effect on data
[`jsonschema`](https://github.com/tdegrunt/jsonschema) had a side-effect on (altered the original) data in the test `multiple dependencies subschema, wrong type other`
## Schema
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
## Original data
```js
{
	"foo": 2,
	"bar": "quux"
}
```
## Data after validating with schema
```js
{
	"foo": 2,
	"bar": "[Circular ~]"
}
```

# Side-effect on data
[`jsonschema`](https://github.com/tdegrunt/jsonschema) had a side-effect on (altered the original) data in the test `multiple dependencies subschema, wrong type both`
## Schema
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
## Original data
```js
{
	"foo": "quux",
	"bar": "quux"
}
```
## Data after validating with schema
```js
{
	"foo": "quux",
	"bar": "[Circular ~]"
}
```

[back to benchmarks](https://github.com/Muscula/json-schema-benchmark)