# [`tv4`](https://github.com/geraintluff/tv4) side-effects in testrun

[`tv4`](https://github.com/geraintluff/tv4) had a side-effect on (altered the original) schema in the test `change resolution scope, changed scope ref valid`
schema
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
schema after validating
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

[`tv4`](https://github.com/geraintluff/tv4) had a side-effect on (altered the original) schema in the test `change resolution scope, changed scope ref invalid`
schema
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
schema after validating
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
