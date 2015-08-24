# tv4 side-effects in testrun

When running tests tv4 mutated either the original schema or the data being validated with the schema or both.


# Side-effect on schema
tv4 had a side-effect on (altered the original) schema in the test `change resolution scope, changed scope ref valid`
## Original schema
```js
{
	"id": "http://localhost:1234/",
	"items": {
		"id": "folder/",
		"items": {
			"$ref": "folderInteger.json"
		}
	}
}
```
## Schema after validating
```js
{
	"id": "http://localhost:1234/",
	"items": {
		"id": "http://localhost:1234/folder/",
		"items": {
			"$ref": "http://localhost:1234/folder/folderInteger.json"
		}
	}
}
```

# Side-effect on schema
tv4 had a side-effect on (altered the original) schema in the test `change resolution scope, changed scope ref invalid`
## Original schema
```js
{
	"id": "http://localhost:1234/",
	"items": {
		"id": "folder/",
		"items": {
			"$ref": "folderInteger.json"
		}
	}
}
```
## Schema after validating
```js
{
	"id": "http://localhost:1234/",
	"items": {
		"id": "http://localhost:1234/folder/",
		"items": {
			"$ref": "http://localhost:1234/folder/folderInteger.json"
		}
	}
}
```

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)