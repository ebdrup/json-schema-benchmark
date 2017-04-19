# [`tv4`](https://github.com/geraintluff/tv4) side-effects in testrun

When running tests [`tv4`](https://github.com/geraintluff/tv4) mutated either the original schema or the data being validated with the schema or both.


# Side-effect on schema
[`tv4`](https://github.com/geraintluff/tv4) had a side-effect on (altered the original) schema in the test `Recursive references between schemas, valid tree`
## Original schema
```js
{
	"id": "http://localhost:1234/tree",
	"description": "tree of nodes",
	"type": "object",
	"properties": {
		"meta": {
			"type": "string"
		},
		"nodes": {
			"type": "array",
			"items": {
				"$ref": "node"
			}
		}
	},
	"required": [
		"meta",
		"nodes"
	],
	"definitions": {
		"node": {
			"id": "http://localhost:1234/node",
			"description": "node",
			"type": "object",
			"properties": {
				"value": {
					"type": "number"
				},
				"subtree": {
					"$ref": "tree"
				}
			},
			"required": [
				"value"
			]
		}
	}
}
```
## Schema after validating
```js
{
	"id": "http://localhost:1234/tree",
	"description": "tree of nodes",
	"type": "object",
	"properties": {
		"meta": {
			"type": "string"
		},
		"nodes": {
			"type": "array",
			"items": {
				"$ref": "http://localhost:1234/node"
			}
		}
	},
	"required": [
		"meta",
		"nodes"
	],
	"definitions": {
		"node": {
			"id": "http://localhost:1234/node",
			"description": "node",
			"type": "object",
			"properties": {
				"value": {
					"type": "number"
				},
				"subtree": {
					"$ref": "http://localhost:1234/tree"
				}
			},
			"required": [
				"value"
			]
		}
	}
}
```

# Side-effect on schema
[`tv4`](https://github.com/geraintluff/tv4) had a side-effect on (altered the original) schema in the test `Recursive references between schemas, invalid tree`
## Original schema
```js
{
	"id": "http://localhost:1234/tree",
	"description": "tree of nodes",
	"type": "object",
	"properties": {
		"meta": {
			"type": "string"
		},
		"nodes": {
			"type": "array",
			"items": {
				"$ref": "node"
			}
		}
	},
	"required": [
		"meta",
		"nodes"
	],
	"definitions": {
		"node": {
			"id": "http://localhost:1234/node",
			"description": "node",
			"type": "object",
			"properties": {
				"value": {
					"type": "number"
				},
				"subtree": {
					"$ref": "tree"
				}
			},
			"required": [
				"value"
			]
		}
	}
}
```
## Schema after validating
```js
{
	"id": "http://localhost:1234/tree",
	"description": "tree of nodes",
	"type": "object",
	"properties": {
		"meta": {
			"type": "string"
		},
		"nodes": {
			"type": "array",
			"items": {
				"$ref": "http://localhost:1234/node"
			}
		}
	},
	"required": [
		"meta",
		"nodes"
	],
	"definitions": {
		"node": {
			"id": "http://localhost:1234/node",
			"description": "node",
			"type": "object",
			"properties": {
				"value": {
					"type": "number"
				},
				"subtree": {
					"$ref": "http://localhost:1234/tree"
				}
			},
			"required": [
				"value"
			]
		}
	}
}
```

# Side-effect on schema
[`tv4`](https://github.com/geraintluff/tv4) had a side-effect on (altered the original) schema in the test `base URI change, base URI change ref valid`
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
[`tv4`](https://github.com/geraintluff/tv4) had a side-effect on (altered the original) schema in the test `base URI change, base URI change ref invalid`
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
[`tv4`](https://github.com/geraintluff/tv4) had a side-effect on (altered the original) schema in the test `base URI change - change folder, number is valid`
## Original schema
```js
{
	"id": "http://localhost:1234/scope_change_defs1.json",
	"type": "object",
	"properties": {
		"list": {
			"$ref": "#/definitions/baz"
		}
	},
	"definitions": {
		"baz": {
			"id": "folder/",
			"type": "array",
			"items": {
				"$ref": "folderInteger.json"
			}
		}
	}
}
```
## Schema after validating
```js
{
	"id": "http://localhost:1234/scope_change_defs1.json",
	"type": "object",
	"properties": {
		"list": {
			"$ref": "http://localhost:1234/scope_change_defs1.json#/definitions/baz"
		}
	},
	"definitions": {
		"baz": {
			"id": "http://localhost:1234/folder/",
			"type": "array",
			"items": {
				"$ref": "http://localhost:1234/folder/folderInteger.json"
			}
		}
	}
}
```

# Side-effect on schema
[`tv4`](https://github.com/geraintluff/tv4) had a side-effect on (altered the original) schema in the test `base URI change - change folder, string is invalid`
## Original schema
```js
{
	"id": "http://localhost:1234/scope_change_defs1.json",
	"type": "object",
	"properties": {
		"list": {
			"$ref": "#/definitions/baz"
		}
	},
	"definitions": {
		"baz": {
			"id": "folder/",
			"type": "array",
			"items": {
				"$ref": "folderInteger.json"
			}
		}
	}
}
```
## Schema after validating
```js
{
	"id": "http://localhost:1234/scope_change_defs1.json",
	"type": "object",
	"properties": {
		"list": {
			"$ref": "http://localhost:1234/scope_change_defs1.json#/definitions/baz"
		}
	},
	"definitions": {
		"baz": {
			"id": "http://localhost:1234/folder/",
			"type": "array",
			"items": {
				"$ref": "http://localhost:1234/folder/folderInteger.json"
			}
		}
	}
}
```

# Side-effect on schema
[`tv4`](https://github.com/geraintluff/tv4) had a side-effect on (altered the original) schema in the test `base URI change - change folder in subschema, number is valid`
## Original schema
```js
{
	"id": "http://localhost:1234/scope_change_defs2.json",
	"type": "object",
	"properties": {
		"list": {
			"$ref": "#/definitions/baz/definitions/bar"
		}
	},
	"definitions": {
		"baz": {
			"id": "folder/",
			"definitions": {
				"bar": {
					"type": "array",
					"items": {
						"$ref": "folderInteger.json"
					}
				}
			}
		}
	}
}
```
## Schema after validating
```js
{
	"id": "http://localhost:1234/scope_change_defs2.json",
	"type": "object",
	"properties": {
		"list": {
			"$ref": "http://localhost:1234/scope_change_defs2.json#/definitions/baz/definitions/bar"
		}
	},
	"definitions": {
		"baz": {
			"id": "http://localhost:1234/folder/",
			"definitions": {
				"bar": {
					"type": "array",
					"items": {
						"$ref": "http://localhost:1234/folder/folderInteger.json"
					}
				}
			}
		}
	}
}
```

# Side-effect on schema
[`tv4`](https://github.com/geraintluff/tv4) had a side-effect on (altered the original) schema in the test `base URI change - change folder in subschema, string is invalid`
## Original schema
```js
{
	"id": "http://localhost:1234/scope_change_defs2.json",
	"type": "object",
	"properties": {
		"list": {
			"$ref": "#/definitions/baz/definitions/bar"
		}
	},
	"definitions": {
		"baz": {
			"id": "folder/",
			"definitions": {
				"bar": {
					"type": "array",
					"items": {
						"$ref": "folderInteger.json"
					}
				}
			}
		}
	}
}
```
## Schema after validating
```js
{
	"id": "http://localhost:1234/scope_change_defs2.json",
	"type": "object",
	"properties": {
		"list": {
			"$ref": "http://localhost:1234/scope_change_defs2.json#/definitions/baz/definitions/bar"
		}
	},
	"definitions": {
		"baz": {
			"id": "http://localhost:1234/folder/",
			"definitions": {
				"bar": {
					"type": "array",
					"items": {
						"$ref": "http://localhost:1234/folder/folderInteger.json"
					}
				}
			}
		}
	}
}
```

# Side-effect on schema
[`tv4`](https://github.com/geraintluff/tv4) had a side-effect on (altered the original) schema in the test `root ref in remote ref, string is valid`
## Original schema
```js
{
	"id": "http://localhost:1234/object",
	"type": "object",
	"properties": {
		"name": {
			"$ref": "name.json#/definitions/orNull"
		}
	}
}
```
## Schema after validating
```js
{
	"id": "http://localhost:1234/object",
	"type": "object",
	"properties": {
		"name": {
			"$ref": "http://localhost:1234/name.json#/definitions/orNull"
		}
	}
}
```

# Side-effect on schema
[`tv4`](https://github.com/geraintluff/tv4) had a side-effect on (altered the original) schema in the test `root ref in remote ref, null is valid`
## Original schema
```js
{
	"id": "http://localhost:1234/object",
	"type": "object",
	"properties": {
		"name": {
			"$ref": "name.json#/definitions/orNull"
		}
	}
}
```
## Schema after validating
```js
{
	"id": "http://localhost:1234/object",
	"type": "object",
	"properties": {
		"name": {
			"$ref": "http://localhost:1234/name.json#/definitions/orNull"
		}
	}
}
```

# Side-effect on schema
[`tv4`](https://github.com/geraintluff/tv4) had a side-effect on (altered the original) schema in the test `root ref in remote ref, object is invalid`
## Original schema
```js
{
	"id": "http://localhost:1234/object",
	"type": "object",
	"properties": {
		"name": {
			"$ref": "name.json#/definitions/orNull"
		}
	}
}
```
## Schema after validating
```js
{
	"id": "http://localhost:1234/object",
	"type": "object",
	"properties": {
		"name": {
			"$ref": "http://localhost:1234/name.json#/definitions/orNull"
		}
	}
}
```

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)