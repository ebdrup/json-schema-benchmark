# [`z-schema`](https://github.com/zaggino/z-schema) side-effects in testrun

When running tests [`z-schema`](https://github.com/zaggino/z-schema) mutated either the original schema or the data being validated with the schema or both.


# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalItems as schema, additional items match schema`
## Original schema
```js
{
	"items": [
		{}
	],
	"additionalItems": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"items": [
		{
			"__$validated": true
		}
	],
	"additionalItems": {
		"type": "integer",
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalItems as schema, additional items do not match schema`
## Original schema
```js
{
	"items": [
		{}
	],
	"additionalItems": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"items": [
		{
			"__$validated": true
		}
	],
	"additionalItems": {
		"type": "integer",
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `items is schema, no additionalItems, all items match schema`
## Original schema
```js
{
	"items": {},
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": {
		"__$validated": true
	},
	"additionalItems": false,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `array of items with no additionalItems, no additional items present`
## Original schema
```js
{
	"items": [
		{},
		{},
		{}
	],
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"__$validated": true
		},
		{
			"__$validated": true
		},
		{
			"__$validated": true
		}
	],
	"additionalItems": false,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `array of items with no additionalItems, additional items are not permitted`
## Original schema
```js
{
	"items": [
		{},
		{},
		{}
	],
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"__$validated": true
		},
		{
			"__$validated": true
		},
		{
			"__$validated": true
		}
	],
	"additionalItems": false,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalItems as false without items, items defaults to empty schema so everything is valid`
## Original schema
```js
{
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"additionalItems": false,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalItems as false without items, ignores non-arrays`
## Original schema
```js
{
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"additionalItems": false,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalItems are allowed by default, only the first item is validated`
## Original schema
```js
{
	"items": [
		{
			"type": "integer"
		}
	]
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "integer",
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalProperties being false does not allow other properties, no additional properties is valid`
## Original schema
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"patternProperties": {
		"^v": {}
	},
	"additionalProperties": false
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"__$validated": true
		},
		"bar": {
			"__$validated": true
		}
	},
	"patternProperties": {
		"^v": {
			"__$validated": true
		}
	},
	"additionalProperties": false,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalProperties being false does not allow other properties, an additional property is invalid`
## Original schema
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"patternProperties": {
		"^v": {}
	},
	"additionalProperties": false
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"__$validated": true
		},
		"bar": {
			"__$validated": true
		}
	},
	"patternProperties": {
		"^v": {
			"__$validated": true
		}
	},
	"additionalProperties": false,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalProperties being false does not allow other properties, ignores non-objects`
## Original schema
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"patternProperties": {
		"^v": {}
	},
	"additionalProperties": false
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"__$validated": true
		},
		"bar": {
			"__$validated": true
		}
	},
	"patternProperties": {
		"^v": {
			"__$validated": true
		}
	},
	"additionalProperties": false,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalProperties being false does not allow other properties, patternProperties are not additional properties`
## Original schema
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"patternProperties": {
		"^v": {}
	},
	"additionalProperties": false
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"__$validated": true
		},
		"bar": {
			"__$validated": true
		}
	},
	"patternProperties": {
		"^v": {
			"__$validated": true
		}
	},
	"additionalProperties": false,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalProperties allows a schema which should validate, no additional properties is valid`
## Original schema
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"additionalProperties": {
		"type": "boolean"
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"__$validated": true
		},
		"bar": {
			"__$validated": true
		}
	},
	"additionalProperties": {
		"type": "boolean",
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalProperties allows a schema which should validate, an additional valid property is valid`
## Original schema
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"additionalProperties": {
		"type": "boolean"
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"__$validated": true
		},
		"bar": {
			"__$validated": true
		}
	},
	"additionalProperties": {
		"type": "boolean",
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalProperties allows a schema which should validate, an additional invalid property is invalid`
## Original schema
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"additionalProperties": {
		"type": "boolean"
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"__$validated": true
		},
		"bar": {
			"__$validated": true
		}
	},
	"additionalProperties": {
		"type": "boolean",
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalProperties can exist by itself, an additional valid property is valid`
## Original schema
```js
{
	"additionalProperties": {
		"type": "boolean"
	}
}
```
## Schema after validating
```js
{
	"additionalProperties": {
		"type": "boolean",
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalProperties can exist by itself, an additional invalid property is invalid`
## Original schema
```js
{
	"additionalProperties": {
		"type": "boolean"
	}
}
```
## Schema after validating
```js
{
	"additionalProperties": {
		"type": "boolean",
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalProperties are allowed by default, additional properties are allowed`
## Original schema
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"__$validated": true
		},
		"bar": {
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `allOf, allOf`
## Original schema
```js
{
	"allOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"properties": {
				"bar": {
					"type": "integer",
					"__$validated": true
				}
			},
			"required": [
				"bar"
			],
			"__$validated": true
		},
		{
			"properties": {
				"foo": {
					"type": "string",
					"__$validated": true
				}
			},
			"required": [
				"foo"
			],
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `allOf, mismatch second`
## Original schema
```js
{
	"allOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"properties": {
				"bar": {
					"type": "integer",
					"__$validated": true
				}
			},
			"required": [
				"bar"
			],
			"__$validated": true
		},
		{
			"properties": {
				"foo": {
					"type": "string",
					"__$validated": true
				}
			},
			"required": [
				"foo"
			],
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `allOf, mismatch first`
## Original schema
```js
{
	"allOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"properties": {
				"bar": {
					"type": "integer",
					"__$validated": true
				}
			},
			"required": [
				"bar"
			],
			"__$validated": true
		},
		{
			"properties": {
				"foo": {
					"type": "string",
					"__$validated": true
				}
			},
			"required": [
				"foo"
			],
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `allOf, wrong type`
## Original schema
```js
{
	"allOf": [
		{
			"properties": {
				"bar": {
					"type": "integer"
				}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"properties": {
				"bar": {
					"type": "integer",
					"__$validated": true
				}
			},
			"required": [
				"bar"
			],
			"__$validated": true
		},
		{
			"properties": {
				"foo": {
					"type": "string",
					"__$validated": true
				}
			},
			"required": [
				"foo"
			],
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `allOf with base schema, valid`
## Original schema
```js
{
	"properties": {
		"bar": {
			"type": "integer"
		}
	},
	"required": [
		"bar"
	],
	"allOf": [
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		},
		{
			"properties": {
				"baz": {
					"type": "null"
				}
			},
			"required": [
				"baz"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"properties": {
		"bar": {
			"type": "integer",
			"__$validated": true
		}
	},
	"required": [
		"bar"
	],
	"allOf": [
		{
			"properties": {
				"foo": {
					"type": "string",
					"__$validated": true
				}
			},
			"required": [
				"foo"
			],
			"__$validated": true
		},
		{
			"properties": {
				"baz": {
					"type": "null",
					"__$validated": true
				}
			},
			"required": [
				"baz"
			],
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `allOf with base schema, mismatch base schema`
## Original schema
```js
{
	"properties": {
		"bar": {
			"type": "integer"
		}
	},
	"required": [
		"bar"
	],
	"allOf": [
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		},
		{
			"properties": {
				"baz": {
					"type": "null"
				}
			},
			"required": [
				"baz"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"properties": {
		"bar": {
			"type": "integer",
			"__$validated": true
		}
	},
	"required": [
		"bar"
	],
	"allOf": [
		{
			"properties": {
				"foo": {
					"type": "string",
					"__$validated": true
				}
			},
			"required": [
				"foo"
			],
			"__$validated": true
		},
		{
			"properties": {
				"baz": {
					"type": "null",
					"__$validated": true
				}
			},
			"required": [
				"baz"
			],
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `allOf with base schema, mismatch first allOf`
## Original schema
```js
{
	"properties": {
		"bar": {
			"type": "integer"
		}
	},
	"required": [
		"bar"
	],
	"allOf": [
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		},
		{
			"properties": {
				"baz": {
					"type": "null"
				}
			},
			"required": [
				"baz"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"properties": {
		"bar": {
			"type": "integer",
			"__$validated": true
		}
	},
	"required": [
		"bar"
	],
	"allOf": [
		{
			"properties": {
				"foo": {
					"type": "string",
					"__$validated": true
				}
			},
			"required": [
				"foo"
			],
			"__$validated": true
		},
		{
			"properties": {
				"baz": {
					"type": "null",
					"__$validated": true
				}
			},
			"required": [
				"baz"
			],
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `allOf with base schema, mismatch second allOf`
## Original schema
```js
{
	"properties": {
		"bar": {
			"type": "integer"
		}
	},
	"required": [
		"bar"
	],
	"allOf": [
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		},
		{
			"properties": {
				"baz": {
					"type": "null"
				}
			},
			"required": [
				"baz"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"properties": {
		"bar": {
			"type": "integer",
			"__$validated": true
		}
	},
	"required": [
		"bar"
	],
	"allOf": [
		{
			"properties": {
				"foo": {
					"type": "string",
					"__$validated": true
				}
			},
			"required": [
				"foo"
			],
			"__$validated": true
		},
		{
			"properties": {
				"baz": {
					"type": "null",
					"__$validated": true
				}
			},
			"required": [
				"baz"
			],
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `allOf with base schema, mismatch both`
## Original schema
```js
{
	"properties": {
		"bar": {
			"type": "integer"
		}
	},
	"required": [
		"bar"
	],
	"allOf": [
		{
			"properties": {
				"foo": {
					"type": "string"
				}
			},
			"required": [
				"foo"
			]
		},
		{
			"properties": {
				"baz": {
					"type": "null"
				}
			},
			"required": [
				"baz"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"properties": {
		"bar": {
			"type": "integer",
			"__$validated": true
		}
	},
	"required": [
		"bar"
	],
	"allOf": [
		{
			"properties": {
				"foo": {
					"type": "string",
					"__$validated": true
				}
			},
			"required": [
				"foo"
			],
			"__$validated": true
		},
		{
			"properties": {
				"baz": {
					"type": "null",
					"__$validated": true
				}
			},
			"required": [
				"baz"
			],
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `allOf simple types, valid`
## Original schema
```js
{
	"allOf": [
		{
			"maximum": 30
		},
		{
			"minimum": 20
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"maximum": 30,
			"__$validated": true
		},
		{
			"minimum": 20,
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `allOf simple types, mismatch one`
## Original schema
```js
{
	"allOf": [
		{
			"maximum": 30
		},
		{
			"minimum": 20
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"maximum": 30,
			"__$validated": true
		},
		{
			"minimum": 20,
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `anyOf, first anyOf valid`
## Original schema
```js
{
	"anyOf": [
		{
			"type": "integer"
		},
		{
			"minimum": 2
		}
	]
}
```
## Schema after validating
```js
{
	"anyOf": [
		{
			"type": "integer",
			"__$validated": true
		},
		{
			"minimum": 2,
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `anyOf, second anyOf valid`
## Original schema
```js
{
	"anyOf": [
		{
			"type": "integer"
		},
		{
			"minimum": 2
		}
	]
}
```
## Schema after validating
```js
{
	"anyOf": [
		{
			"type": "integer",
			"__$validated": true
		},
		{
			"minimum": 2,
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `anyOf, both anyOf valid`
## Original schema
```js
{
	"anyOf": [
		{
			"type": "integer"
		},
		{
			"minimum": 2
		}
	]
}
```
## Schema after validating
```js
{
	"anyOf": [
		{
			"type": "integer",
			"__$validated": true
		},
		{
			"minimum": 2,
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `anyOf, neither anyOf valid`
## Original schema
```js
{
	"anyOf": [
		{
			"type": "integer"
		},
		{
			"minimum": 2
		}
	]
}
```
## Schema after validating
```js
{
	"anyOf": [
		{
			"type": "integer",
			"__$validated": true
		},
		{
			"minimum": 2,
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `anyOf with base schema, mismatch base schema`
## Original schema
```js
{
	"type": "string",
	"anyOf": [
		{
			"maxLength": 2
		},
		{
			"minLength": 4
		}
	]
}
```
## Schema after validating
```js
{
	"type": "string",
	"anyOf": [
		{
			"maxLength": 2,
			"__$validated": true
		},
		{
			"minLength": 4,
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `anyOf with base schema, one anyOf valid`
## Original schema
```js
{
	"type": "string",
	"anyOf": [
		{
			"maxLength": 2
		},
		{
			"minLength": 4
		}
	]
}
```
## Schema after validating
```js
{
	"type": "string",
	"anyOf": [
		{
			"maxLength": 2,
			"__$validated": true
		},
		{
			"minLength": 4,
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `anyOf with base schema, both anyOf invalid`
## Original schema
```js
{
	"type": "string",
	"anyOf": [
		{
			"maxLength": 2
		},
		{
			"minLength": 4
		}
	]
}
```
## Schema after validating
```js
{
	"type": "string",
	"anyOf": [
		{
			"maxLength": 2,
			"__$validated": true
		},
		{
			"minLength": 4,
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `invalid type for default, valid when property is specified`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "integer",
			"default": []
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "integer",
			"default": [],
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `invalid type for default, still valid when the invalid default is used`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "integer",
			"default": []
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "integer",
			"default": [],
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `invalid string value for default, valid when property is specified`
## Original schema
```js
{
	"properties": {
		"bar": {
			"type": "string",
			"minLength": 4,
			"default": "bad"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"bar": {
			"type": "string",
			"minLength": 4,
			"default": "bad",
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `invalid string value for default, still valid when the invalid default is used`
## Original schema
```js
{
	"properties": {
		"bar": {
			"type": "string",
			"minLength": 4,
			"default": "bad"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"bar": {
			"type": "string",
			"minLength": 4,
			"default": "bad",
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `valid definition, valid definition schema`
## Original schema
```js
{
	"$ref": "http://json-schema.org/draft-04/schema#"
}
```
## Schema after validating
```js
{
	"$ref": "http://json-schema.org/draft-04/schema#",
	"__$refResolved": {
		"id": "http://json-schema.org/draft-04/schema#",
		"$schema": "http://json-schema.org/draft-04/schema#",
		"description": "Core schema meta-schema",
		"definitions": {
			"schemaArray": {
				"type": "array",
				"minItems": 1,
				"items": {
					"$ref": "#",
					"__$refResolved": "[Circular ~.__$refResolved]",
					"__$validated": true
				},
				"__$validated": true
			},
			"positiveInteger": {
				"type": "integer",
				"minimum": 0,
				"__$validated": true
			},
			"positiveIntegerDefault0": {
				"allOf": [
					{
						"$ref": "#/definitions/positiveInteger",
						"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveInteger]",
						"__$validated": true
					},
					{
						"default": 0,
						"__$validated": true
					}
				],
				"__$validated": true
			},
			"simpleTypes": {
				"enum": [
					"array",
					"boolean",
					"integer",
					"null",
					"number",
					"object",
					"string"
				],
				"__$validated": true
			},
			"stringArray": {
				"type": "array",
				"items": {
					"type": "string",
					"__$validated": true
				},
				"minItems": 1,
				"uniqueItems": true,
				"__$validated": true
			}
		},
		"type": "object",
		"properties": {
			"id": {
				"type": "string",
				"format": "uri",
				"__$validated": true
			},
			"$schema": {
				"type": "string",
				"format": "uri",
				"__$validated": true
			},
			"title": {
				"type": "string",
				"__$validated": true
			},
			"description": {
				"type": "string",
				"__$validated": true
			},
			"default": {
				"__$validated": true
			},
			"multipleOf": {
				"type": "number",
				"minimum": 0,
				"exclusiveMinimum": true,
				"__$validated": true
			},
			"maximum": {
				"type": "number",
				"__$validated": true
			},
			"exclusiveMaximum": {
				"type": "boolean",
				"default": false,
				"__$validated": true
			},
			"minimum": {
				"type": "number",
				"__$validated": true
			},
			"exclusiveMinimum": {
				"type": "boolean",
				"default": false,
				"__$validated": true
			},
			"maxLength": {
				"$ref": "#/definitions/positiveInteger",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveInteger]",
				"__$validated": true
			},
			"minLength": {
				"$ref": "#/definitions/positiveIntegerDefault0",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveIntegerDefault0]",
				"__$validated": true
			},
			"pattern": {
				"type": "string",
				"format": "regex",
				"__$validated": true
			},
			"additionalItems": {
				"anyOf": [
					{
						"type": "boolean",
						"__$validated": true
					},
					{
						"$ref": "#",
						"__$refResolved": "[Circular ~.__$refResolved]",
						"__$validated": true
					}
				],
				"default": {},
				"__$validated": true
			},
			"items": {
				"anyOf": [
					{
						"$ref": "#",
						"__$refResolved": "[Circular ~.__$refResolved]",
						"__$validated": true
					},
					{
						"$ref": "#/definitions/schemaArray",
						"__$refResolved": "[Circular ~.__$refResolved.definitions.schemaArray]",
						"__$validated": true
					}
				],
				"default": {},
				"__$validated": true
			},
			"maxItems": {
				"$ref": "#/definitions/positiveInteger",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveInteger]",
				"__$validated": true
			},
			"minItems": {
				"$ref": "#/definitions/positiveIntegerDefault0",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveIntegerDefault0]",
				"__$validated": true
			},
			"uniqueItems": {
				"type": "boolean",
				"default": false,
				"__$validated": true
			},
			"maxProperties": {
				"$ref": "#/definitions/positiveInteger",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveInteger]",
				"__$validated": true
			},
			"minProperties": {
				"$ref": "#/definitions/positiveIntegerDefault0",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveIntegerDefault0]",
				"__$validated": true
			},
			"required": {
				"$ref": "#/definitions/stringArray",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.stringArray]",
				"__$validated": true
			},
			"additionalProperties": {
				"anyOf": [
					{
						"type": "boolean",
						"__$validated": true
					},
					{
						"$ref": "#",
						"__$refResolved": "[Circular ~.__$refResolved]",
						"__$validated": true
					}
				],
				"default": {},
				"__$validated": true
			},
			"definitions": {
				"type": "object",
				"additionalProperties": {
					"$ref": "#",
					"__$refResolved": "[Circular ~.__$refResolved]",
					"__$validated": true
				},
				"default": {},
				"__$validated": true
			},
			"properties": {
				"type": "object",
				"additionalProperties": {
					"$ref": "#",
					"__$refResolved": "[Circular ~.__$refResolved]",
					"__$validated": true
				},
				"default": {},
				"__$validated": true
			},
			"patternProperties": {
				"type": "object",
				"additionalProperties": {
					"$ref": "#",
					"__$refResolved": "[Circular ~.__$refResolved]",
					"__$validated": true
				},
				"default": {},
				"__$validated": true
			},
			"dependencies": {
				"type": "object",
				"additionalProperties": {
					"anyOf": [
						{
							"$ref": "#",
							"__$refResolved": "[Circular ~.__$refResolved]",
							"__$validated": true
						},
						{
							"$ref": "#/definitions/stringArray",
							"__$refResolved": "[Circular ~.__$refResolved.definitions.stringArray]",
							"__$validated": true
						}
					],
					"__$validated": true
				},
				"__$validated": true
			},
			"enum": {
				"type": "array",
				"minItems": 1,
				"uniqueItems": true,
				"__$validated": true
			},
			"type": {
				"anyOf": [
					{
						"$ref": "#/definitions/simpleTypes",
						"__$refResolved": "[Circular ~.__$refResolved.definitions.simpleTypes]",
						"__$validated": true
					},
					{
						"type": "array",
						"items": {
							"$ref": "#/definitions/simpleTypes",
							"__$refResolved": "[Circular ~.__$refResolved.definitions.simpleTypes]",
							"__$validated": true
						},
						"minItems": 1,
						"uniqueItems": true,
						"__$validated": true
					}
				],
				"__$validated": true
			},
			"allOf": {
				"$ref": "#/definitions/schemaArray",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.schemaArray]",
				"__$validated": true
			},
			"anyOf": {
				"$ref": "#/definitions/schemaArray",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.schemaArray]",
				"__$validated": true
			},
			"oneOf": {
				"$ref": "#/definitions/schemaArray",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.schemaArray]",
				"__$validated": true
			},
			"not": {
				"$ref": "#",
				"__$refResolved": "[Circular ~.__$refResolved]",
				"__$validated": true
			}
		},
		"dependencies": {
			"exclusiveMaximum": [
				"maximum"
			],
			"exclusiveMinimum": [
				"minimum"
			]
		},
		"default": {},
		"__$schemaResolved": "[Circular ~.__$refResolved]",
		"__$compiled": true,
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `invalid definition, invalid definition schema`
## Original schema
```js
{
	"$ref": "http://json-schema.org/draft-04/schema#"
}
```
## Schema after validating
```js
{
	"$ref": "http://json-schema.org/draft-04/schema#",
	"__$refResolved": {
		"id": "http://json-schema.org/draft-04/schema#",
		"$schema": "http://json-schema.org/draft-04/schema#",
		"description": "Core schema meta-schema",
		"definitions": {
			"schemaArray": {
				"type": "array",
				"minItems": 1,
				"items": {
					"$ref": "#",
					"__$refResolved": "[Circular ~.__$refResolved]",
					"__$validated": true
				},
				"__$validated": true
			},
			"positiveInteger": {
				"type": "integer",
				"minimum": 0,
				"__$validated": true
			},
			"positiveIntegerDefault0": {
				"allOf": [
					{
						"$ref": "#/definitions/positiveInteger",
						"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveInteger]",
						"__$validated": true
					},
					{
						"default": 0,
						"__$validated": true
					}
				],
				"__$validated": true
			},
			"simpleTypes": {
				"enum": [
					"array",
					"boolean",
					"integer",
					"null",
					"number",
					"object",
					"string"
				],
				"__$validated": true
			},
			"stringArray": {
				"type": "array",
				"items": {
					"type": "string",
					"__$validated": true
				},
				"minItems": 1,
				"uniqueItems": true,
				"__$validated": true
			}
		},
		"type": "object",
		"properties": {
			"id": {
				"type": "string",
				"format": "uri",
				"__$validated": true
			},
			"$schema": {
				"type": "string",
				"format": "uri",
				"__$validated": true
			},
			"title": {
				"type": "string",
				"__$validated": true
			},
			"description": {
				"type": "string",
				"__$validated": true
			},
			"default": {
				"__$validated": true
			},
			"multipleOf": {
				"type": "number",
				"minimum": 0,
				"exclusiveMinimum": true,
				"__$validated": true
			},
			"maximum": {
				"type": "number",
				"__$validated": true
			},
			"exclusiveMaximum": {
				"type": "boolean",
				"default": false,
				"__$validated": true
			},
			"minimum": {
				"type": "number",
				"__$validated": true
			},
			"exclusiveMinimum": {
				"type": "boolean",
				"default": false,
				"__$validated": true
			},
			"maxLength": {
				"$ref": "#/definitions/positiveInteger",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveInteger]",
				"__$validated": true
			},
			"minLength": {
				"$ref": "#/definitions/positiveIntegerDefault0",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveIntegerDefault0]",
				"__$validated": true
			},
			"pattern": {
				"type": "string",
				"format": "regex",
				"__$validated": true
			},
			"additionalItems": {
				"anyOf": [
					{
						"type": "boolean",
						"__$validated": true
					},
					{
						"$ref": "#",
						"__$refResolved": "[Circular ~.__$refResolved]",
						"__$validated": true
					}
				],
				"default": {},
				"__$validated": true
			},
			"items": {
				"anyOf": [
					{
						"$ref": "#",
						"__$refResolved": "[Circular ~.__$refResolved]",
						"__$validated": true
					},
					{
						"$ref": "#/definitions/schemaArray",
						"__$refResolved": "[Circular ~.__$refResolved.definitions.schemaArray]",
						"__$validated": true
					}
				],
				"default": {},
				"__$validated": true
			},
			"maxItems": {
				"$ref": "#/definitions/positiveInteger",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveInteger]",
				"__$validated": true
			},
			"minItems": {
				"$ref": "#/definitions/positiveIntegerDefault0",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveIntegerDefault0]",
				"__$validated": true
			},
			"uniqueItems": {
				"type": "boolean",
				"default": false,
				"__$validated": true
			},
			"maxProperties": {
				"$ref": "#/definitions/positiveInteger",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveInteger]",
				"__$validated": true
			},
			"minProperties": {
				"$ref": "#/definitions/positiveIntegerDefault0",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveIntegerDefault0]",
				"__$validated": true
			},
			"required": {
				"$ref": "#/definitions/stringArray",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.stringArray]",
				"__$validated": true
			},
			"additionalProperties": {
				"anyOf": [
					{
						"type": "boolean",
						"__$validated": true
					},
					{
						"$ref": "#",
						"__$refResolved": "[Circular ~.__$refResolved]",
						"__$validated": true
					}
				],
				"default": {},
				"__$validated": true
			},
			"definitions": {
				"type": "object",
				"additionalProperties": {
					"$ref": "#",
					"__$refResolved": "[Circular ~.__$refResolved]",
					"__$validated": true
				},
				"default": {},
				"__$validated": true
			},
			"properties": {
				"type": "object",
				"additionalProperties": {
					"$ref": "#",
					"__$refResolved": "[Circular ~.__$refResolved]",
					"__$validated": true
				},
				"default": {},
				"__$validated": true
			},
			"patternProperties": {
				"type": "object",
				"additionalProperties": {
					"$ref": "#",
					"__$refResolved": "[Circular ~.__$refResolved]",
					"__$validated": true
				},
				"default": {},
				"__$validated": true
			},
			"dependencies": {
				"type": "object",
				"additionalProperties": {
					"anyOf": [
						{
							"$ref": "#",
							"__$refResolved": "[Circular ~.__$refResolved]",
							"__$validated": true
						},
						{
							"$ref": "#/definitions/stringArray",
							"__$refResolved": "[Circular ~.__$refResolved.definitions.stringArray]",
							"__$validated": true
						}
					],
					"__$validated": true
				},
				"__$validated": true
			},
			"enum": {
				"type": "array",
				"minItems": 1,
				"uniqueItems": true,
				"__$validated": true
			},
			"type": {
				"anyOf": [
					{
						"$ref": "#/definitions/simpleTypes",
						"__$refResolved": "[Circular ~.__$refResolved.definitions.simpleTypes]",
						"__$validated": true
					},
					{
						"type": "array",
						"items": {
							"$ref": "#/definitions/simpleTypes",
							"__$refResolved": "[Circular ~.__$refResolved.definitions.simpleTypes]",
							"__$validated": true
						},
						"minItems": 1,
						"uniqueItems": true,
						"__$validated": true
					}
				],
				"__$validated": true
			},
			"allOf": {
				"$ref": "#/definitions/schemaArray",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.schemaArray]",
				"__$validated": true
			},
			"anyOf": {
				"$ref": "#/definitions/schemaArray",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.schemaArray]",
				"__$validated": true
			},
			"oneOf": {
				"$ref": "#/definitions/schemaArray",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.schemaArray]",
				"__$validated": true
			},
			"not": {
				"$ref": "#",
				"__$refResolved": "[Circular ~.__$refResolved]",
				"__$validated": true
			}
		},
		"dependencies": {
			"exclusiveMaximum": [
				"maximum"
			],
			"exclusiveMinimum": [
				"minimum"
			]
		},
		"default": {},
		"__$schemaResolved": "[Circular ~.__$refResolved]",
		"__$compiled": true,
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `dependencies, neither`
## Original schema
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `dependencies, nondependant`
## Original schema
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `dependencies, with dependency`
## Original schema
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `dependencies, missing dependency`
## Original schema
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `dependencies, ignores non-objects`
## Original schema
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple dependencies, neither`
## Original schema
```js
{
	"dependencies": {
		"quux": [
			"foo",
			"bar"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"quux": [
			"foo",
			"bar"
		]
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple dependencies, nondependants`
## Original schema
```js
{
	"dependencies": {
		"quux": [
			"foo",
			"bar"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"quux": [
			"foo",
			"bar"
		]
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple dependencies, with dependencies`
## Original schema
```js
{
	"dependencies": {
		"quux": [
			"foo",
			"bar"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"quux": [
			"foo",
			"bar"
		]
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple dependencies, missing dependency`
## Original schema
```js
{
	"dependencies": {
		"quux": [
			"foo",
			"bar"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"quux": [
			"foo",
			"bar"
		]
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple dependencies, missing other dependency`
## Original schema
```js
{
	"dependencies": {
		"quux": [
			"foo",
			"bar"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"quux": [
			"foo",
			"bar"
		]
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple dependencies, missing both dependencies`
## Original schema
```js
{
	"dependencies": {
		"quux": [
			"foo",
			"bar"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"quux": [
			"foo",
			"bar"
		]
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple dependencies subschema, valid`
## Original schema
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
## Schema after validating
```js
{
	"dependencies": {
		"bar": {
			"properties": {
				"foo": {
					"type": "integer",
					"__$validated": true
				},
				"bar": {
					"type": "integer",
					"__$validated": true
				}
			},
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple dependencies subschema, no dependency`
## Original schema
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
## Schema after validating
```js
{
	"dependencies": {
		"bar": {
			"properties": {
				"foo": {
					"type": "integer",
					"__$validated": true
				},
				"bar": {
					"type": "integer",
					"__$validated": true
				}
			},
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple dependencies subschema, wrong type`
## Original schema
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
## Schema after validating
```js
{
	"dependencies": {
		"bar": {
			"properties": {
				"foo": {
					"type": "integer",
					"__$validated": true
				},
				"bar": {
					"type": "integer",
					"__$validated": true
				}
			},
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple dependencies subschema, wrong type other`
## Original schema
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
## Schema after validating
```js
{
	"dependencies": {
		"bar": {
			"properties": {
				"foo": {
					"type": "integer",
					"__$validated": true
				},
				"bar": {
					"type": "integer",
					"__$validated": true
				}
			},
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple dependencies subschema, wrong type both`
## Original schema
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
## Schema after validating
```js
{
	"dependencies": {
		"bar": {
			"properties": {
				"foo": {
					"type": "integer",
					"__$validated": true
				},
				"bar": {
					"type": "integer",
					"__$validated": true
				}
			},
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `simple enum validation, one of the enum is valid`
## Original schema
```js
{
	"enum": [
		1,
		2,
		3
	]
}
```
## Schema after validating
```js
{
	"enum": [
		1,
		2,
		3
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `simple enum validation, something else is invalid`
## Original schema
```js
{
	"enum": [
		1,
		2,
		3
	]
}
```
## Schema after validating
```js
{
	"enum": [
		1,
		2,
		3
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `heterogeneous enum validation, one of the enum is valid`
## Original schema
```js
{
	"enum": [
		6,
		"foo",
		[],
		true,
		{
			"foo": 12
		}
	]
}
```
## Schema after validating
```js
{
	"enum": [
		6,
		"foo",
		[],
		true,
		{
			"foo": 12
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `heterogeneous enum validation, something else is invalid`
## Original schema
```js
{
	"enum": [
		6,
		"foo",
		[],
		true,
		{
			"foo": 12
		}
	]
}
```
## Schema after validating
```js
{
	"enum": [
		6,
		"foo",
		[],
		true,
		{
			"foo": 12
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `heterogeneous enum validation, objects are deep compared`
## Original schema
```js
{
	"enum": [
		6,
		"foo",
		[],
		true,
		{
			"foo": 12
		}
	]
}
```
## Schema after validating
```js
{
	"enum": [
		6,
		"foo",
		[],
		true,
		{
			"foo": 12
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `enums in properties, both properties are valid`
## Original schema
```js
{
	"type": "object",
	"properties": {
		"foo": {
			"enum": [
				"foo"
			]
		},
		"bar": {
			"enum": [
				"bar"
			]
		}
	},
	"required": [
		"bar"
	]
}
```
## Schema after validating
```js
{
	"type": "object",
	"properties": {
		"foo": {
			"enum": [
				"foo"
			],
			"__$validated": true
		},
		"bar": {
			"enum": [
				"bar"
			],
			"__$validated": true
		}
	},
	"required": [
		"bar"
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `enums in properties, missing optional property is valid`
## Original schema
```js
{
	"type": "object",
	"properties": {
		"foo": {
			"enum": [
				"foo"
			]
		},
		"bar": {
			"enum": [
				"bar"
			]
		}
	},
	"required": [
		"bar"
	]
}
```
## Schema after validating
```js
{
	"type": "object",
	"properties": {
		"foo": {
			"enum": [
				"foo"
			],
			"__$validated": true
		},
		"bar": {
			"enum": [
				"bar"
			],
			"__$validated": true
		}
	},
	"required": [
		"bar"
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `enums in properties, missing required property is invalid`
## Original schema
```js
{
	"type": "object",
	"properties": {
		"foo": {
			"enum": [
				"foo"
			]
		},
		"bar": {
			"enum": [
				"bar"
			]
		}
	},
	"required": [
		"bar"
	]
}
```
## Schema after validating
```js
{
	"type": "object",
	"properties": {
		"foo": {
			"enum": [
				"foo"
			],
			"__$validated": true
		},
		"bar": {
			"enum": [
				"bar"
			],
			"__$validated": true
		}
	},
	"required": [
		"bar"
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `enums in properties, missing all properties is invalid`
## Original schema
```js
{
	"type": "object",
	"properties": {
		"foo": {
			"enum": [
				"foo"
			]
		},
		"bar": {
			"enum": [
				"bar"
			]
		}
	},
	"required": [
		"bar"
	]
}
```
## Schema after validating
```js
{
	"type": "object",
	"properties": {
		"foo": {
			"enum": [
				"foo"
			],
			"__$validated": true
		},
		"bar": {
			"enum": [
				"bar"
			],
			"__$validated": true
		}
	},
	"required": [
		"bar"
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `a schema given for items, valid items`
## Original schema
```js
{
	"items": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"items": {
		"type": "integer",
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `a schema given for items, wrong type of items`
## Original schema
```js
{
	"items": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"items": {
		"type": "integer",
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `a schema given for items, ignores non-arrays`
## Original schema
```js
{
	"items": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"items": {
		"type": "integer",
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `an array of schemas for items, correct types`
## Original schema
```js
{
	"items": [
		{
			"type": "integer"
		},
		{
			"type": "string"
		}
	]
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "integer",
			"__$validated": true
		},
		{
			"type": "string",
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `an array of schemas for items, wrong types`
## Original schema
```js
{
	"items": [
		{
			"type": "integer"
		},
		{
			"type": "string"
		}
	]
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "integer",
			"__$validated": true
		},
		{
			"type": "string",
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maxItems validation, shorter is valid`
## Original schema
```js
{
	"maxItems": 2
}
```
## Schema after validating
```js
{
	"maxItems": 2,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maxItems validation, exact length is valid`
## Original schema
```js
{
	"maxItems": 2
}
```
## Schema after validating
```js
{
	"maxItems": 2,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maxItems validation, too long is invalid`
## Original schema
```js
{
	"maxItems": 2
}
```
## Schema after validating
```js
{
	"maxItems": 2,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maxItems validation, ignores non-arrays`
## Original schema
```js
{
	"maxItems": 2
}
```
## Schema after validating
```js
{
	"maxItems": 2,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maxLength validation, shorter is valid`
## Original schema
```js
{
	"maxLength": 2
}
```
## Schema after validating
```js
{
	"maxLength": 2,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maxLength validation, exact length is valid`
## Original schema
```js
{
	"maxLength": 2
}
```
## Schema after validating
```js
{
	"maxLength": 2,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maxLength validation, too long is invalid`
## Original schema
```js
{
	"maxLength": 2
}
```
## Schema after validating
```js
{
	"maxLength": 2,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maxLength validation, ignores non-strings`
## Original schema
```js
{
	"maxLength": 2
}
```
## Schema after validating
```js
{
	"maxLength": 2,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maxLength validation, two supplementary Unicode code points is long enough`
## Original schema
```js
{
	"maxLength": 2
}
```
## Schema after validating
```js
{
	"maxLength": 2,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maxProperties validation, shorter is valid`
## Original schema
```js
{
	"maxProperties": 2
}
```
## Schema after validating
```js
{
	"maxProperties": 2,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maxProperties validation, exact length is valid`
## Original schema
```js
{
	"maxProperties": 2
}
```
## Schema after validating
```js
{
	"maxProperties": 2,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maxProperties validation, too long is invalid`
## Original schema
```js
{
	"maxProperties": 2
}
```
## Schema after validating
```js
{
	"maxProperties": 2,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maxProperties validation, ignores non-objects`
## Original schema
```js
{
	"maxProperties": 2
}
```
## Schema after validating
```js
{
	"maxProperties": 2,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maximum validation, below the maximum is valid`
## Original schema
```js
{
	"maximum": 3
}
```
## Schema after validating
```js
{
	"maximum": 3,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maximum validation, above the maximum is invalid`
## Original schema
```js
{
	"maximum": 3
}
```
## Schema after validating
```js
{
	"maximum": 3,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maximum validation, ignores non-numbers`
## Original schema
```js
{
	"maximum": 3
}
```
## Schema after validating
```js
{
	"maximum": 3,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `exclusiveMaximum validation, below the maximum is still valid`
## Original schema
```js
{
	"maximum": 3,
	"exclusiveMaximum": true
}
```
## Schema after validating
```js
{
	"maximum": 3,
	"exclusiveMaximum": true,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `exclusiveMaximum validation, boundary point is invalid`
## Original schema
```js
{
	"maximum": 3,
	"exclusiveMaximum": true
}
```
## Schema after validating
```js
{
	"maximum": 3,
	"exclusiveMaximum": true,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minItems validation, longer is valid`
## Original schema
```js
{
	"minItems": 1
}
```
## Schema after validating
```js
{
	"minItems": 1,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minItems validation, exact length is valid`
## Original schema
```js
{
	"minItems": 1
}
```
## Schema after validating
```js
{
	"minItems": 1,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minItems validation, too short is invalid`
## Original schema
```js
{
	"minItems": 1
}
```
## Schema after validating
```js
{
	"minItems": 1,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minItems validation, ignores non-arrays`
## Original schema
```js
{
	"minItems": 1
}
```
## Schema after validating
```js
{
	"minItems": 1,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minLength validation, longer is valid`
## Original schema
```js
{
	"minLength": 2
}
```
## Schema after validating
```js
{
	"minLength": 2,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minLength validation, exact length is valid`
## Original schema
```js
{
	"minLength": 2
}
```
## Schema after validating
```js
{
	"minLength": 2,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minLength validation, too short is invalid`
## Original schema
```js
{
	"minLength": 2
}
```
## Schema after validating
```js
{
	"minLength": 2,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minLength validation, ignores non-strings`
## Original schema
```js
{
	"minLength": 2
}
```
## Schema after validating
```js
{
	"minLength": 2,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minLength validation, one supplementary Unicode code point is not long enough`
## Original schema
```js
{
	"minLength": 2
}
```
## Schema after validating
```js
{
	"minLength": 2,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minProperties validation, longer is valid`
## Original schema
```js
{
	"minProperties": 1
}
```
## Schema after validating
```js
{
	"minProperties": 1,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minProperties validation, exact length is valid`
## Original schema
```js
{
	"minProperties": 1
}
```
## Schema after validating
```js
{
	"minProperties": 1,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minProperties validation, too short is invalid`
## Original schema
```js
{
	"minProperties": 1
}
```
## Schema after validating
```js
{
	"minProperties": 1,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minProperties validation, ignores non-objects`
## Original schema
```js
{
	"minProperties": 1
}
```
## Schema after validating
```js
{
	"minProperties": 1,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minimum validation, above the minimum is valid`
## Original schema
```js
{
	"minimum": 1.1
}
```
## Schema after validating
```js
{
	"minimum": 1.1,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minimum validation, below the minimum is invalid`
## Original schema
```js
{
	"minimum": 1.1
}
```
## Schema after validating
```js
{
	"minimum": 1.1,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minimum validation, ignores non-numbers`
## Original schema
```js
{
	"minimum": 1.1
}
```
## Schema after validating
```js
{
	"minimum": 1.1,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `exclusiveMinimum validation, above the minimum is still valid`
## Original schema
```js
{
	"minimum": 1.1,
	"exclusiveMinimum": true
}
```
## Schema after validating
```js
{
	"minimum": 1.1,
	"exclusiveMinimum": true,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `exclusiveMinimum validation, boundary point is invalid`
## Original schema
```js
{
	"minimum": 1.1,
	"exclusiveMinimum": true
}
```
## Schema after validating
```js
{
	"minimum": 1.1,
	"exclusiveMinimum": true,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `by int, int by int`
## Original schema
```js
{
	"multipleOf": 2
}
```
## Schema after validating
```js
{
	"multipleOf": 2,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `by int, int by int fail`
## Original schema
```js
{
	"multipleOf": 2
}
```
## Schema after validating
```js
{
	"multipleOf": 2,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `by int, ignores non-numbers`
## Original schema
```js
{
	"multipleOf": 2
}
```
## Schema after validating
```js
{
	"multipleOf": 2,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `by number, zero is multiple of anything`
## Original schema
```js
{
	"multipleOf": 1.5
}
```
## Schema after validating
```js
{
	"multipleOf": 1.5,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `by number, 4.5 is multiple of 1.5`
## Original schema
```js
{
	"multipleOf": 1.5
}
```
## Schema after validating
```js
{
	"multipleOf": 1.5,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `by number, 35 is not multiple of 1.5`
## Original schema
```js
{
	"multipleOf": 1.5
}
```
## Schema after validating
```js
{
	"multipleOf": 1.5,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `by small number, 0.0075 is multiple of 0.0001`
## Original schema
```js
{
	"multipleOf": 0.0001
}
```
## Schema after validating
```js
{
	"multipleOf": 0.0001,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `by small number, 0.00751 is not multiple of 0.0001`
## Original schema
```js
{
	"multipleOf": 0.0001
}
```
## Schema after validating
```js
{
	"multipleOf": 0.0001,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `not, allowed`
## Original schema
```js
{
	"not": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"not": {
		"type": "integer",
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `not, disallowed`
## Original schema
```js
{
	"not": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"not": {
		"type": "integer",
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `not multiple types, valid`
## Original schema
```js
{
	"not": {
		"type": [
			"integer",
			"boolean"
		]
	}
}
```
## Schema after validating
```js
{
	"not": {
		"type": [
			"integer",
			"boolean"
		],
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `not multiple types, mismatch`
## Original schema
```js
{
	"not": {
		"type": [
			"integer",
			"boolean"
		]
	}
}
```
## Schema after validating
```js
{
	"not": {
		"type": [
			"integer",
			"boolean"
		],
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `not multiple types, other mismatch`
## Original schema
```js
{
	"not": {
		"type": [
			"integer",
			"boolean"
		]
	}
}
```
## Schema after validating
```js
{
	"not": {
		"type": [
			"integer",
			"boolean"
		],
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `not more complex schema, match`
## Original schema
```js
{
	"not": {
		"type": "object",
		"properties": {
			"foo": {
				"type": "string"
			}
		}
	}
}
```
## Schema after validating
```js
{
	"not": {
		"type": "object",
		"properties": {
			"foo": {
				"type": "string",
				"__$validated": true
			}
		},
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `not more complex schema, other match`
## Original schema
```js
{
	"not": {
		"type": "object",
		"properties": {
			"foo": {
				"type": "string"
			}
		}
	}
}
```
## Schema after validating
```js
{
	"not": {
		"type": "object",
		"properties": {
			"foo": {
				"type": "string",
				"__$validated": true
			}
		},
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `not more complex schema, mismatch`
## Original schema
```js
{
	"not": {
		"type": "object",
		"properties": {
			"foo": {
				"type": "string"
			}
		}
	}
}
```
## Schema after validating
```js
{
	"not": {
		"type": "object",
		"properties": {
			"foo": {
				"type": "string",
				"__$validated": true
			}
		},
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `forbidden property, property present`
## Original schema
```js
{
	"properties": {
		"foo": {
			"not": {}
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"not": {
				"__$validated": true
			},
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `forbidden property, property absent`
## Original schema
```js
{
	"properties": {
		"foo": {
			"not": {}
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"not": {
				"__$validated": true
			},
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `oneOf, first oneOf valid`
## Original schema
```js
{
	"oneOf": [
		{
			"type": "integer"
		},
		{
			"minimum": 2
		}
	]
}
```
## Schema after validating
```js
{
	"oneOf": [
		{
			"type": "integer",
			"__$validated": true
		},
		{
			"minimum": 2,
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `oneOf, second oneOf valid`
## Original schema
```js
{
	"oneOf": [
		{
			"type": "integer"
		},
		{
			"minimum": 2
		}
	]
}
```
## Schema after validating
```js
{
	"oneOf": [
		{
			"type": "integer",
			"__$validated": true
		},
		{
			"minimum": 2,
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `oneOf, both oneOf valid`
## Original schema
```js
{
	"oneOf": [
		{
			"type": "integer"
		},
		{
			"minimum": 2
		}
	]
}
```
## Schema after validating
```js
{
	"oneOf": [
		{
			"type": "integer",
			"__$validated": true
		},
		{
			"minimum": 2,
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `oneOf, neither oneOf valid`
## Original schema
```js
{
	"oneOf": [
		{
			"type": "integer"
		},
		{
			"minimum": 2
		}
	]
}
```
## Schema after validating
```js
{
	"oneOf": [
		{
			"type": "integer",
			"__$validated": true
		},
		{
			"minimum": 2,
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `oneOf with base schema, mismatch base schema`
## Original schema
```js
{
	"type": "string",
	"oneOf": [
		{
			"minLength": 2
		},
		{
			"maxLength": 4
		}
	]
}
```
## Schema after validating
```js
{
	"type": "string",
	"oneOf": [
		{
			"minLength": 2,
			"__$validated": true
		},
		{
			"maxLength": 4,
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `oneOf with base schema, one oneOf valid`
## Original schema
```js
{
	"type": "string",
	"oneOf": [
		{
			"minLength": 2
		},
		{
			"maxLength": 4
		}
	]
}
```
## Schema after validating
```js
{
	"type": "string",
	"oneOf": [
		{
			"minLength": 2,
			"__$validated": true
		},
		{
			"maxLength": 4,
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `oneOf with base schema, both oneOf valid`
## Original schema
```js
{
	"type": "string",
	"oneOf": [
		{
			"minLength": 2
		},
		{
			"maxLength": 4
		}
	]
}
```
## Schema after validating
```js
{
	"type": "string",
	"oneOf": [
		{
			"minLength": 2,
			"__$validated": true
		},
		{
			"maxLength": 4,
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `integer, a bignum is an integer`
## Original schema
```js
{
	"type": "integer"
}
```
## Schema after validating
```js
{
	"type": "integer",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `number, a bignum is a number`
## Original schema
```js
{
	"type": "number"
}
```
## Schema after validating
```js
{
	"type": "number",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `integer, a negative bignum is an integer`
## Original schema
```js
{
	"type": "integer"
}
```
## Schema after validating
```js
{
	"type": "integer",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `number, a negative bignum is a number`
## Original schema
```js
{
	"type": "number"
}
```
## Schema after validating
```js
{
	"type": "number",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `string, a bignum is not a string`
## Original schema
```js
{
	"type": "string"
}
```
## Schema after validating
```js
{
	"type": "string",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `integer comparison, comparison works for high numbers`
## Original schema
```js
{
	"maximum": 18446744073709552000
}
```
## Schema after validating
```js
{
	"maximum": 18446744073709552000,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `float comparison with high precision, comparison works for high numbers`
## Original schema
```js
{
	"maximum": 9.727837981879871e+26,
	"exclusiveMaximum": true
}
```
## Schema after validating
```js
{
	"maximum": 9.727837981879871e+26,
	"exclusiveMaximum": true,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `integer comparison, comparison works for very negative numbers`
## Original schema
```js
{
	"minimum": -18446744073709552000
}
```
## Schema after validating
```js
{
	"minimum": -18446744073709552000,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `float comparison with high precision on negative numbers, comparison works for very negative numbers`
## Original schema
```js
{
	"minimum": -9.727837981879871e+26,
	"exclusiveMinimum": true
}
```
## Schema after validating
```js
{
	"minimum": -9.727837981879871e+26,
	"exclusiveMinimum": true,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of date-time strings, a valid date-time string`
## Original schema
```js
{
	"format": "date-time"
}
```
## Schema after validating
```js
{
	"format": "date-time",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of date-time strings, an invalid date-time string`
## Original schema
```js
{
	"format": "date-time"
}
```
## Schema after validating
```js
{
	"format": "date-time",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of date-time strings, only RFC3339 not all of ISO 8601 are valid`
## Original schema
```js
{
	"format": "date-time"
}
```
## Schema after validating
```js
{
	"format": "date-time",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid URI`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of URIs, an invalid URI`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of URIs, an invalid URI though valid URI reference`
## Original schema
```js
{
	"format": "uri"
}
```
## Schema after validating
```js
{
	"format": "uri",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, a valid e-mail address`
## Original schema
```js
{
	"format": "email"
}
```
## Schema after validating
```js
{
	"format": "email",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, an invalid e-mail address`
## Original schema
```js
{
	"format": "email"
}
```
## Schema after validating
```js
{
	"format": "email",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of IP addresses, a valid IP address`
## Original schema
```js
{
	"format": "ipv4"
}
```
## Schema after validating
```js
{
	"format": "ipv4",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of IP addresses, an IP address with too many components`
## Original schema
```js
{
	"format": "ipv4"
}
```
## Schema after validating
```js
{
	"format": "ipv4",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of IP addresses, an IP address with out-of-range values`
## Original schema
```js
{
	"format": "ipv4"
}
```
## Schema after validating
```js
{
	"format": "ipv4",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of IP addresses, an IP address without 4 components`
## Original schema
```js
{
	"format": "ipv4"
}
```
## Schema after validating
```js
{
	"format": "ipv4",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of IP addresses, an IP address as an integer`
## Original schema
```js
{
	"format": "ipv4"
}
```
## Schema after validating
```js
{
	"format": "ipv4",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, a valid IPv6 address`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, an IPv6 address with out-of-range values`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, an IPv6 address with too many components`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, an IPv6 address containing illegal characters`
## Original schema
```js
{
	"format": "ipv6"
}
```
## Schema after validating
```js
{
	"format": "ipv6",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of host names, a valid host name`
## Original schema
```js
{
	"format": "hostname"
}
```
## Schema after validating
```js
{
	"format": "hostname",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of host names, a host name starting with an illegal character`
## Original schema
```js
{
	"format": "hostname"
}
```
## Schema after validating
```js
{
	"format": "hostname",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of host names, a host name containing illegal characters`
## Original schema
```js
{
	"format": "hostname"
}
```
## Schema after validating
```js
{
	"format": "hostname",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of host names, a host name with a component too long`
## Original schema
```js
{
	"format": "hostname"
}
```
## Schema after validating
```js
{
	"format": "hostname",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`
## Original schema
```js
{
	"type": "integer"
}
```
## Schema after validating
```js
{
	"type": "integer",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `pattern validation, a matching pattern is valid`
## Original schema
```js
{
	"pattern": "^a*$"
}
```
## Schema after validating
```js
{
	"pattern": "^a*$",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `pattern validation, a non-matching pattern is invalid`
## Original schema
```js
{
	"pattern": "^a*$"
}
```
## Schema after validating
```js
{
	"pattern": "^a*$",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `pattern validation, ignores non-strings`
## Original schema
```js
{
	"pattern": "^a*$"
}
```
## Schema after validating
```js
{
	"pattern": "^a*$",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `patternProperties validates properties matching a regex, a single valid match is valid`
## Original schema
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer",
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `patternProperties validates properties matching a regex, multiple valid matches is valid`
## Original schema
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer",
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `patternProperties validates properties matching a regex, a single invalid match is invalid`
## Original schema
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer",
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `patternProperties validates properties matching a regex, multiple invalid matches is invalid`
## Original schema
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer",
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `patternProperties validates properties matching a regex, ignores non-objects`
## Original schema
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer",
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple simultaneous patternProperties are validated, a single valid match is valid`
## Original schema
```js
{
	"patternProperties": {
		"a*": {
			"type": "integer"
		},
		"aaa*": {
			"maximum": 20
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"a*": {
			"type": "integer",
			"__$validated": true
		},
		"aaa*": {
			"maximum": 20,
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple simultaneous patternProperties are validated, a simultaneous match is valid`
## Original schema
```js
{
	"patternProperties": {
		"a*": {
			"type": "integer"
		},
		"aaa*": {
			"maximum": 20
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"a*": {
			"type": "integer",
			"__$validated": true
		},
		"aaa*": {
			"maximum": 20,
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple simultaneous patternProperties are validated, multiple matches is valid`
## Original schema
```js
{
	"patternProperties": {
		"a*": {
			"type": "integer"
		},
		"aaa*": {
			"maximum": 20
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"a*": {
			"type": "integer",
			"__$validated": true
		},
		"aaa*": {
			"maximum": 20,
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple simultaneous patternProperties are validated, an invalid due to one is invalid`
## Original schema
```js
{
	"patternProperties": {
		"a*": {
			"type": "integer"
		},
		"aaa*": {
			"maximum": 20
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"a*": {
			"type": "integer",
			"__$validated": true
		},
		"aaa*": {
			"maximum": 20,
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple simultaneous patternProperties are validated, an invalid due to the other is invalid`
## Original schema
```js
{
	"patternProperties": {
		"a*": {
			"type": "integer"
		},
		"aaa*": {
			"maximum": 20
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"a*": {
			"type": "integer",
			"__$validated": true
		},
		"aaa*": {
			"maximum": 20,
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple simultaneous patternProperties are validated, an invalid due to both is invalid`
## Original schema
```js
{
	"patternProperties": {
		"a*": {
			"type": "integer"
		},
		"aaa*": {
			"maximum": 20
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"a*": {
			"type": "integer",
			"__$validated": true
		},
		"aaa*": {
			"maximum": 20,
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `regexes are not anchored by default and are case sensitive, non recognized members are ignored`
## Original schema
```js
{
	"patternProperties": {
		"[0-9]{2,}": {
			"type": "boolean"
		},
		"X_": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"[0-9]{2,}": {
			"type": "boolean",
			"__$validated": true
		},
		"X_": {
			"type": "string",
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `regexes are not anchored by default and are case sensitive, recognized members are accounted for`
## Original schema
```js
{
	"patternProperties": {
		"[0-9]{2,}": {
			"type": "boolean"
		},
		"X_": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"[0-9]{2,}": {
			"type": "boolean",
			"__$validated": true
		},
		"X_": {
			"type": "string",
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `regexes are not anchored by default and are case sensitive, regexes are case sensitive`
## Original schema
```js
{
	"patternProperties": {
		"[0-9]{2,}": {
			"type": "boolean"
		},
		"X_": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"[0-9]{2,}": {
			"type": "boolean",
			"__$validated": true
		},
		"X_": {
			"type": "string",
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `regexes are not anchored by default and are case sensitive, regexes are case sensitive, 2`
## Original schema
```js
{
	"patternProperties": {
		"[0-9]{2,}": {
			"type": "boolean"
		},
		"X_": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"[0-9]{2,}": {
			"type": "boolean",
			"__$validated": true
		},
		"X_": {
			"type": "string",
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `object properties validation, both properties present and valid is valid`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "integer"
		},
		"bar": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "integer",
			"__$validated": true
		},
		"bar": {
			"type": "string",
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `object properties validation, one property invalid is invalid`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "integer"
		},
		"bar": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "integer",
			"__$validated": true
		},
		"bar": {
			"type": "string",
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `object properties validation, both properties invalid is invalid`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "integer"
		},
		"bar": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "integer",
			"__$validated": true
		},
		"bar": {
			"type": "string",
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `object properties validation, doesn't invalidate other properties`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "integer"
		},
		"bar": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "integer",
			"__$validated": true
		},
		"bar": {
			"type": "string",
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `object properties validation, ignores non-objects`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "integer"
		},
		"bar": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "integer",
			"__$validated": true
		},
		"bar": {
			"type": "string",
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, property validates property`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3
		},
		"bar": {
			"type": "array"
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2
		}
	},
	"additionalProperties": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3,
			"__$validated": true
		},
		"bar": {
			"type": "array",
			"__$validated": true
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2,
			"__$validated": true
		}
	},
	"additionalProperties": {
		"type": "integer",
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, property invalidates property`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3
		},
		"bar": {
			"type": "array"
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2
		}
	},
	"additionalProperties": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3,
			"__$validated": true
		},
		"bar": {
			"type": "array",
			"__$validated": true
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2,
			"__$validated": true
		}
	},
	"additionalProperties": {
		"type": "integer",
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, patternProperty invalidates property`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3
		},
		"bar": {
			"type": "array"
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2
		}
	},
	"additionalProperties": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3,
			"__$validated": true
		},
		"bar": {
			"type": "array",
			"__$validated": true
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2,
			"__$validated": true
		}
	},
	"additionalProperties": {
		"type": "integer",
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, patternProperty validates nonproperty`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3
		},
		"bar": {
			"type": "array"
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2
		}
	},
	"additionalProperties": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3,
			"__$validated": true
		},
		"bar": {
			"type": "array",
			"__$validated": true
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2,
			"__$validated": true
		}
	},
	"additionalProperties": {
		"type": "integer",
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, patternProperty invalidates nonproperty`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3
		},
		"bar": {
			"type": "array"
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2
		}
	},
	"additionalProperties": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3,
			"__$validated": true
		},
		"bar": {
			"type": "array",
			"__$validated": true
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2,
			"__$validated": true
		}
	},
	"additionalProperties": {
		"type": "integer",
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, additionalProperty ignores property`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3
		},
		"bar": {
			"type": "array"
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2
		}
	},
	"additionalProperties": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3,
			"__$validated": true
		},
		"bar": {
			"type": "array",
			"__$validated": true
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2,
			"__$validated": true
		}
	},
	"additionalProperties": {
		"type": "integer",
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, additionalProperty validates others`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3
		},
		"bar": {
			"type": "array"
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2
		}
	},
	"additionalProperties": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3,
			"__$validated": true
		},
		"bar": {
			"type": "array",
			"__$validated": true
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2,
			"__$validated": true
		}
	},
	"additionalProperties": {
		"type": "integer",
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, additionalProperty invalidates others`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3
		},
		"bar": {
			"type": "array"
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2
		}
	},
	"additionalProperties": {
		"type": "integer"
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "array",
			"maxItems": 3,
			"__$validated": true
		},
		"bar": {
			"type": "array",
			"__$validated": true
		}
	},
	"patternProperties": {
		"f.o": {
			"minItems": 2,
			"__$validated": true
		}
	},
	"additionalProperties": {
		"type": "integer",
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `root pointer ref, match`
## Original schema
```js
{
	"properties": {
		"foo": {
			"$ref": "#"
		}
	},
	"additionalProperties": false
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"$ref": "#",
			"__$refResolved": "[Circular ~]",
			"__$validated": true
		}
	},
	"additionalProperties": false,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `root pointer ref, recursive match`
## Original schema
```js
{
	"properties": {
		"foo": {
			"$ref": "#"
		}
	},
	"additionalProperties": false
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"$ref": "#",
			"__$refResolved": "[Circular ~]",
			"__$validated": true
		}
	},
	"additionalProperties": false,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `root pointer ref, mismatch`
## Original schema
```js
{
	"properties": {
		"foo": {
			"$ref": "#"
		}
	},
	"additionalProperties": false
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"$ref": "#",
			"__$refResolved": "[Circular ~]",
			"__$validated": true
		}
	},
	"additionalProperties": false,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `root pointer ref, recursive mismatch`
## Original schema
```js
{
	"properties": {
		"foo": {
			"$ref": "#"
		}
	},
	"additionalProperties": false
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"$ref": "#",
			"__$refResolved": "[Circular ~]",
			"__$validated": true
		}
	},
	"additionalProperties": false,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `relative pointer ref to object, match`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "integer"
		},
		"bar": {
			"$ref": "#/properties/foo"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "integer",
			"__$validated": true
		},
		"bar": {
			"$ref": "#/properties/foo",
			"__$refResolved": "[Circular ~.properties.foo]",
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `relative pointer ref to object, mismatch`
## Original schema
```js
{
	"properties": {
		"foo": {
			"type": "integer"
		},
		"bar": {
			"$ref": "#/properties/foo"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"type": "integer",
			"__$validated": true
		},
		"bar": {
			"$ref": "#/properties/foo",
			"__$refResolved": "[Circular ~.properties.foo]",
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `relative pointer ref to array, match array`
## Original schema
```js
{
	"items": [
		{
			"type": "integer"
		},
		{
			"$ref": "#/items/0"
		}
	]
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "integer",
			"__$validated": true
		},
		{
			"$ref": "#/items/0",
			"__$refResolved": "[Circular ~.items.0]",
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `relative pointer ref to array, mismatch array`
## Original schema
```js
{
	"items": [
		{
			"type": "integer"
		},
		{
			"$ref": "#/items/0"
		}
	]
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "integer",
			"__$validated": true
		},
		{
			"$ref": "#/items/0",
			"__$refResolved": "[Circular ~.items.0]",
			"__$validated": true
		}
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `escaped pointer ref, slash`
## Original schema
```js
{
	"tilda~field": {
		"type": "integer"
	},
	"slash/field": {
		"type": "integer"
	},
	"percent%field": {
		"type": "integer"
	},
	"properties": {
		"tilda": {
			"$ref": "#/tilda~0field"
		},
		"slash": {
			"$ref": "#/slash~1field"
		},
		"percent": {
			"$ref": "#/percent%25field"
		}
	}
}
```
## Schema after validating
```js
{
	"tilda~field": {
		"type": "integer"
	},
	"slash/field": {
		"type": "integer"
	},
	"percent%field": {
		"type": "integer"
	},
	"properties": {
		"tilda": {
			"$ref": "#/tilda~0field",
			"__$refResolved": "[Circular ~.tilda~field]",
			"__$validated": true
		},
		"slash": {
			"$ref": "#/slash~1field",
			"__$refResolved": "[Circular ~.slash/field]",
			"__$validated": true
		},
		"percent": {
			"$ref": "#/percent%25field",
			"__$refResolved": "[Circular ~.percent%field]",
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `escaped pointer ref, tilda`
## Original schema
```js
{
	"tilda~field": {
		"type": "integer"
	},
	"slash/field": {
		"type": "integer"
	},
	"percent%field": {
		"type": "integer"
	},
	"properties": {
		"tilda": {
			"$ref": "#/tilda~0field"
		},
		"slash": {
			"$ref": "#/slash~1field"
		},
		"percent": {
			"$ref": "#/percent%25field"
		}
	}
}
```
## Schema after validating
```js
{
	"tilda~field": {
		"type": "integer"
	},
	"slash/field": {
		"type": "integer"
	},
	"percent%field": {
		"type": "integer"
	},
	"properties": {
		"tilda": {
			"$ref": "#/tilda~0field",
			"__$refResolved": "[Circular ~.tilda~field]",
			"__$validated": true
		},
		"slash": {
			"$ref": "#/slash~1field",
			"__$refResolved": "[Circular ~.slash/field]",
			"__$validated": true
		},
		"percent": {
			"$ref": "#/percent%25field",
			"__$refResolved": "[Circular ~.percent%field]",
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `escaped pointer ref, percent`
## Original schema
```js
{
	"tilda~field": {
		"type": "integer"
	},
	"slash/field": {
		"type": "integer"
	},
	"percent%field": {
		"type": "integer"
	},
	"properties": {
		"tilda": {
			"$ref": "#/tilda~0field"
		},
		"slash": {
			"$ref": "#/slash~1field"
		},
		"percent": {
			"$ref": "#/percent%25field"
		}
	}
}
```
## Schema after validating
```js
{
	"tilda~field": {
		"type": "integer"
	},
	"slash/field": {
		"type": "integer"
	},
	"percent%field": {
		"type": "integer"
	},
	"properties": {
		"tilda": {
			"$ref": "#/tilda~0field",
			"__$refResolved": "[Circular ~.tilda~field]",
			"__$validated": true
		},
		"slash": {
			"$ref": "#/slash~1field",
			"__$refResolved": "[Circular ~.slash/field]",
			"__$validated": true
		},
		"percent": {
			"$ref": "#/percent%25field",
			"__$refResolved": "[Circular ~.percent%field]",
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `nested refs, nested ref valid`
## Original schema
```js
{
	"definitions": {
		"a": {
			"type": "integer"
		},
		"b": {
			"$ref": "#/definitions/a"
		},
		"c": {
			"$ref": "#/definitions/b"
		}
	},
	"$ref": "#/definitions/c"
}
```
## Schema after validating
```js
{
	"definitions": {
		"a": {
			"type": "integer",
			"__$validated": true
		},
		"b": {
			"$ref": "#/definitions/a",
			"__$refResolved": "[Circular ~.definitions.a]",
			"__$validated": true
		},
		"c": {
			"$ref": "#/definitions/b",
			"__$refResolved": "[Circular ~.definitions.b]",
			"__$validated": true
		}
	},
	"$ref": "#/definitions/c",
	"__$refResolved": "[Circular ~.definitions.c]",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `nested refs, nested ref invalid`
## Original schema
```js
{
	"definitions": {
		"a": {
			"type": "integer"
		},
		"b": {
			"$ref": "#/definitions/a"
		},
		"c": {
			"$ref": "#/definitions/b"
		}
	},
	"$ref": "#/definitions/c"
}
```
## Schema after validating
```js
{
	"definitions": {
		"a": {
			"type": "integer",
			"__$validated": true
		},
		"b": {
			"$ref": "#/definitions/a",
			"__$refResolved": "[Circular ~.definitions.a]",
			"__$validated": true
		},
		"c": {
			"$ref": "#/definitions/b",
			"__$refResolved": "[Circular ~.definitions.b]",
			"__$validated": true
		}
	},
	"$ref": "#/definitions/c",
	"__$refResolved": "[Circular ~.definitions.c]",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `remote ref, containing refs itself, remote ref valid`
## Original schema
```js
{
	"$ref": "http://json-schema.org/draft-04/schema#"
}
```
## Schema after validating
```js
{
	"$ref": "http://json-schema.org/draft-04/schema#",
	"__$refResolved": {
		"id": "http://json-schema.org/draft-04/schema#",
		"$schema": "http://json-schema.org/draft-04/schema#",
		"description": "Core schema meta-schema",
		"definitions": {
			"schemaArray": {
				"type": "array",
				"minItems": 1,
				"items": {
					"$ref": "#",
					"__$refResolved": "[Circular ~.__$refResolved]",
					"__$validated": true
				},
				"__$validated": true
			},
			"positiveInteger": {
				"type": "integer",
				"minimum": 0,
				"__$validated": true
			},
			"positiveIntegerDefault0": {
				"allOf": [
					{
						"$ref": "#/definitions/positiveInteger",
						"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveInteger]",
						"__$validated": true
					},
					{
						"default": 0,
						"__$validated": true
					}
				],
				"__$validated": true
			},
			"simpleTypes": {
				"enum": [
					"array",
					"boolean",
					"integer",
					"null",
					"number",
					"object",
					"string"
				],
				"__$validated": true
			},
			"stringArray": {
				"type": "array",
				"items": {
					"type": "string",
					"__$validated": true
				},
				"minItems": 1,
				"uniqueItems": true,
				"__$validated": true
			}
		},
		"type": "object",
		"properties": {
			"id": {
				"type": "string",
				"format": "uri",
				"__$validated": true
			},
			"$schema": {
				"type": "string",
				"format": "uri",
				"__$validated": true
			},
			"title": {
				"type": "string",
				"__$validated": true
			},
			"description": {
				"type": "string",
				"__$validated": true
			},
			"default": {
				"__$validated": true
			},
			"multipleOf": {
				"type": "number",
				"minimum": 0,
				"exclusiveMinimum": true,
				"__$validated": true
			},
			"maximum": {
				"type": "number",
				"__$validated": true
			},
			"exclusiveMaximum": {
				"type": "boolean",
				"default": false,
				"__$validated": true
			},
			"minimum": {
				"type": "number",
				"__$validated": true
			},
			"exclusiveMinimum": {
				"type": "boolean",
				"default": false,
				"__$validated": true
			},
			"maxLength": {
				"$ref": "#/definitions/positiveInteger",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveInteger]",
				"__$validated": true
			},
			"minLength": {
				"$ref": "#/definitions/positiveIntegerDefault0",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveIntegerDefault0]",
				"__$validated": true
			},
			"pattern": {
				"type": "string",
				"format": "regex",
				"__$validated": true
			},
			"additionalItems": {
				"anyOf": [
					{
						"type": "boolean",
						"__$validated": true
					},
					{
						"$ref": "#",
						"__$refResolved": "[Circular ~.__$refResolved]",
						"__$validated": true
					}
				],
				"default": {},
				"__$validated": true
			},
			"items": {
				"anyOf": [
					{
						"$ref": "#",
						"__$refResolved": "[Circular ~.__$refResolved]",
						"__$validated": true
					},
					{
						"$ref": "#/definitions/schemaArray",
						"__$refResolved": "[Circular ~.__$refResolved.definitions.schemaArray]",
						"__$validated": true
					}
				],
				"default": {},
				"__$validated": true
			},
			"maxItems": {
				"$ref": "#/definitions/positiveInteger",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveInteger]",
				"__$validated": true
			},
			"minItems": {
				"$ref": "#/definitions/positiveIntegerDefault0",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveIntegerDefault0]",
				"__$validated": true
			},
			"uniqueItems": {
				"type": "boolean",
				"default": false,
				"__$validated": true
			},
			"maxProperties": {
				"$ref": "#/definitions/positiveInteger",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveInteger]",
				"__$validated": true
			},
			"minProperties": {
				"$ref": "#/definitions/positiveIntegerDefault0",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveIntegerDefault0]",
				"__$validated": true
			},
			"required": {
				"$ref": "#/definitions/stringArray",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.stringArray]",
				"__$validated": true
			},
			"additionalProperties": {
				"anyOf": [
					{
						"type": "boolean",
						"__$validated": true
					},
					{
						"$ref": "#",
						"__$refResolved": "[Circular ~.__$refResolved]",
						"__$validated": true
					}
				],
				"default": {},
				"__$validated": true
			},
			"definitions": {
				"type": "object",
				"additionalProperties": {
					"$ref": "#",
					"__$refResolved": "[Circular ~.__$refResolved]",
					"__$validated": true
				},
				"default": {},
				"__$validated": true
			},
			"properties": {
				"type": "object",
				"additionalProperties": {
					"$ref": "#",
					"__$refResolved": "[Circular ~.__$refResolved]",
					"__$validated": true
				},
				"default": {},
				"__$validated": true
			},
			"patternProperties": {
				"type": "object",
				"additionalProperties": {
					"$ref": "#",
					"__$refResolved": "[Circular ~.__$refResolved]",
					"__$validated": true
				},
				"default": {},
				"__$validated": true
			},
			"dependencies": {
				"type": "object",
				"additionalProperties": {
					"anyOf": [
						{
							"$ref": "#",
							"__$refResolved": "[Circular ~.__$refResolved]",
							"__$validated": true
						},
						{
							"$ref": "#/definitions/stringArray",
							"__$refResolved": "[Circular ~.__$refResolved.definitions.stringArray]",
							"__$validated": true
						}
					],
					"__$validated": true
				},
				"__$validated": true
			},
			"enum": {
				"type": "array",
				"minItems": 1,
				"uniqueItems": true,
				"__$validated": true
			},
			"type": {
				"anyOf": [
					{
						"$ref": "#/definitions/simpleTypes",
						"__$refResolved": "[Circular ~.__$refResolved.definitions.simpleTypes]",
						"__$validated": true
					},
					{
						"type": "array",
						"items": {
							"$ref": "#/definitions/simpleTypes",
							"__$refResolved": "[Circular ~.__$refResolved.definitions.simpleTypes]",
							"__$validated": true
						},
						"minItems": 1,
						"uniqueItems": true,
						"__$validated": true
					}
				],
				"__$validated": true
			},
			"allOf": {
				"$ref": "#/definitions/schemaArray",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.schemaArray]",
				"__$validated": true
			},
			"anyOf": {
				"$ref": "#/definitions/schemaArray",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.schemaArray]",
				"__$validated": true
			},
			"oneOf": {
				"$ref": "#/definitions/schemaArray",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.schemaArray]",
				"__$validated": true
			},
			"not": {
				"$ref": "#",
				"__$refResolved": "[Circular ~.__$refResolved]",
				"__$validated": true
			}
		},
		"dependencies": {
			"exclusiveMaximum": [
				"maximum"
			],
			"exclusiveMinimum": [
				"minimum"
			]
		},
		"default": {},
		"__$schemaResolved": "[Circular ~.__$refResolved]",
		"__$compiled": true,
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `remote ref, containing refs itself, remote ref invalid`
## Original schema
```js
{
	"$ref": "http://json-schema.org/draft-04/schema#"
}
```
## Schema after validating
```js
{
	"$ref": "http://json-schema.org/draft-04/schema#",
	"__$refResolved": {
		"id": "http://json-schema.org/draft-04/schema#",
		"$schema": "http://json-schema.org/draft-04/schema#",
		"description": "Core schema meta-schema",
		"definitions": {
			"schemaArray": {
				"type": "array",
				"minItems": 1,
				"items": {
					"$ref": "#",
					"__$refResolved": "[Circular ~.__$refResolved]",
					"__$validated": true
				},
				"__$validated": true
			},
			"positiveInteger": {
				"type": "integer",
				"minimum": 0,
				"__$validated": true
			},
			"positiveIntegerDefault0": {
				"allOf": [
					{
						"$ref": "#/definitions/positiveInteger",
						"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveInteger]",
						"__$validated": true
					},
					{
						"default": 0,
						"__$validated": true
					}
				],
				"__$validated": true
			},
			"simpleTypes": {
				"enum": [
					"array",
					"boolean",
					"integer",
					"null",
					"number",
					"object",
					"string"
				],
				"__$validated": true
			},
			"stringArray": {
				"type": "array",
				"items": {
					"type": "string",
					"__$validated": true
				},
				"minItems": 1,
				"uniqueItems": true,
				"__$validated": true
			}
		},
		"type": "object",
		"properties": {
			"id": {
				"type": "string",
				"format": "uri",
				"__$validated": true
			},
			"$schema": {
				"type": "string",
				"format": "uri",
				"__$validated": true
			},
			"title": {
				"type": "string",
				"__$validated": true
			},
			"description": {
				"type": "string",
				"__$validated": true
			},
			"default": {
				"__$validated": true
			},
			"multipleOf": {
				"type": "number",
				"minimum": 0,
				"exclusiveMinimum": true,
				"__$validated": true
			},
			"maximum": {
				"type": "number",
				"__$validated": true
			},
			"exclusiveMaximum": {
				"type": "boolean",
				"default": false,
				"__$validated": true
			},
			"minimum": {
				"type": "number",
				"__$validated": true
			},
			"exclusiveMinimum": {
				"type": "boolean",
				"default": false,
				"__$validated": true
			},
			"maxLength": {
				"$ref": "#/definitions/positiveInteger",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveInteger]",
				"__$validated": true
			},
			"minLength": {
				"$ref": "#/definitions/positiveIntegerDefault0",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveIntegerDefault0]",
				"__$validated": true
			},
			"pattern": {
				"type": "string",
				"format": "regex",
				"__$validated": true
			},
			"additionalItems": {
				"anyOf": [
					{
						"type": "boolean",
						"__$validated": true
					},
					{
						"$ref": "#",
						"__$refResolved": "[Circular ~.__$refResolved]",
						"__$validated": true
					}
				],
				"default": {},
				"__$validated": true
			},
			"items": {
				"anyOf": [
					{
						"$ref": "#",
						"__$refResolved": "[Circular ~.__$refResolved]",
						"__$validated": true
					},
					{
						"$ref": "#/definitions/schemaArray",
						"__$refResolved": "[Circular ~.__$refResolved.definitions.schemaArray]",
						"__$validated": true
					}
				],
				"default": {},
				"__$validated": true
			},
			"maxItems": {
				"$ref": "#/definitions/positiveInteger",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveInteger]",
				"__$validated": true
			},
			"minItems": {
				"$ref": "#/definitions/positiveIntegerDefault0",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveIntegerDefault0]",
				"__$validated": true
			},
			"uniqueItems": {
				"type": "boolean",
				"default": false,
				"__$validated": true
			},
			"maxProperties": {
				"$ref": "#/definitions/positiveInteger",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveInteger]",
				"__$validated": true
			},
			"minProperties": {
				"$ref": "#/definitions/positiveIntegerDefault0",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.positiveIntegerDefault0]",
				"__$validated": true
			},
			"required": {
				"$ref": "#/definitions/stringArray",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.stringArray]",
				"__$validated": true
			},
			"additionalProperties": {
				"anyOf": [
					{
						"type": "boolean",
						"__$validated": true
					},
					{
						"$ref": "#",
						"__$refResolved": "[Circular ~.__$refResolved]",
						"__$validated": true
					}
				],
				"default": {},
				"__$validated": true
			},
			"definitions": {
				"type": "object",
				"additionalProperties": {
					"$ref": "#",
					"__$refResolved": "[Circular ~.__$refResolved]",
					"__$validated": true
				},
				"default": {},
				"__$validated": true
			},
			"properties": {
				"type": "object",
				"additionalProperties": {
					"$ref": "#",
					"__$refResolved": "[Circular ~.__$refResolved]",
					"__$validated": true
				},
				"default": {},
				"__$validated": true
			},
			"patternProperties": {
				"type": "object",
				"additionalProperties": {
					"$ref": "#",
					"__$refResolved": "[Circular ~.__$refResolved]",
					"__$validated": true
				},
				"default": {},
				"__$validated": true
			},
			"dependencies": {
				"type": "object",
				"additionalProperties": {
					"anyOf": [
						{
							"$ref": "#",
							"__$refResolved": "[Circular ~.__$refResolved]",
							"__$validated": true
						},
						{
							"$ref": "#/definitions/stringArray",
							"__$refResolved": "[Circular ~.__$refResolved.definitions.stringArray]",
							"__$validated": true
						}
					],
					"__$validated": true
				},
				"__$validated": true
			},
			"enum": {
				"type": "array",
				"minItems": 1,
				"uniqueItems": true,
				"__$validated": true
			},
			"type": {
				"anyOf": [
					{
						"$ref": "#/definitions/simpleTypes",
						"__$refResolved": "[Circular ~.__$refResolved.definitions.simpleTypes]",
						"__$validated": true
					},
					{
						"type": "array",
						"items": {
							"$ref": "#/definitions/simpleTypes",
							"__$refResolved": "[Circular ~.__$refResolved.definitions.simpleTypes]",
							"__$validated": true
						},
						"minItems": 1,
						"uniqueItems": true,
						"__$validated": true
					}
				],
				"__$validated": true
			},
			"allOf": {
				"$ref": "#/definitions/schemaArray",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.schemaArray]",
				"__$validated": true
			},
			"anyOf": {
				"$ref": "#/definitions/schemaArray",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.schemaArray]",
				"__$validated": true
			},
			"oneOf": {
				"$ref": "#/definitions/schemaArray",
				"__$refResolved": "[Circular ~.__$refResolved.definitions.schemaArray]",
				"__$validated": true
			},
			"not": {
				"$ref": "#",
				"__$refResolved": "[Circular ~.__$refResolved]",
				"__$validated": true
			}
		},
		"dependencies": {
			"exclusiveMaximum": [
				"maximum"
			],
			"exclusiveMinimum": [
				"minimum"
			]
		},
		"default": {},
		"__$schemaResolved": "[Circular ~.__$refResolved]",
		"__$compiled": true,
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `remote ref, remote ref valid`
## Original schema
```js
{
	"$ref": "http://localhost:1234/integer.json"
}
```
## Schema after validating
```js
{
	"$ref": "http://localhost:1234/integer.json",
	"__$refResolved": {
		"type": "integer",
		"__$compiled": true,
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `remote ref, remote ref invalid`
## Original schema
```js
{
	"$ref": "http://localhost:1234/integer.json"
}
```
## Schema after validating
```js
{
	"$ref": "http://localhost:1234/integer.json",
	"__$refResolved": {
		"type": "integer",
		"__$compiled": true,
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `fragment within remote ref, remote fragment valid`
## Original schema
```js
{
	"$ref": "http://localhost:1234/subSchemas.json#/integer"
}
```
## Schema after validating
```js
{
	"$ref": "http://localhost:1234/subSchemas.json#/integer",
	"__$refResolved": {
		"type": "integer"
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `fragment within remote ref, remote fragment invalid`
## Original schema
```js
{
	"$ref": "http://localhost:1234/subSchemas.json#/integer"
}
```
## Schema after validating
```js
{
	"$ref": "http://localhost:1234/subSchemas.json#/integer",
	"__$refResolved": {
		"type": "integer"
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `ref within remote ref, ref within ref valid`
## Original schema
```js
{
	"$ref": "http://localhost:1234/subSchemas.json#/refToInteger"
}
```
## Schema after validating
```js
{
	"$ref": "http://localhost:1234/subSchemas.json#/refToInteger",
	"__$refResolved": {
		"$ref": "#/integer",
		"__$refResolved": {
			"type": "integer"
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `ref within remote ref, ref within ref invalid`
## Original schema
```js
{
	"$ref": "http://localhost:1234/subSchemas.json#/refToInteger"
}
```
## Schema after validating
```js
{
	"$ref": "http://localhost:1234/subSchemas.json#/refToInteger",
	"__$refResolved": {
		"$ref": "#/integer",
		"__$refResolved": {
			"type": "integer"
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `change resolution scope, changed scope ref valid`
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
		"id": "folder/",
		"items": {
			"$ref": "folderInteger.json",
			"__$refResolved": {
				"type": "integer",
				"__$compiled": true,
				"__$validated": true
			},
			"__$validated": true
		},
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `change resolution scope, changed scope ref invalid`
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
		"id": "folder/",
		"items": {
			"$ref": "folderInteger.json",
			"__$refResolved": {
				"type": "integer",
				"__$compiled": true,
				"__$validated": true
			},
			"__$validated": true
		},
		"__$validated": true
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `required validation, present required property is valid`
## Original schema
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"required": [
		"foo"
	]
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"__$validated": true
		},
		"bar": {
			"__$validated": true
		}
	},
	"required": [
		"foo"
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `required validation, non-present required property is invalid`
## Original schema
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	},
	"required": [
		"foo"
	]
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"__$validated": true
		},
		"bar": {
			"__$validated": true
		}
	},
	"required": [
		"foo"
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `required default validation, not required by default`
## Original schema
```js
{
	"properties": {
		"foo": {}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"foo": {
			"__$validated": true
		}
	},
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `integer type matches integers, an integer is an integer`
## Original schema
```js
{
	"type": "integer"
}
```
## Schema after validating
```js
{
	"type": "integer",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `integer type matches integers, a float is not an integer`
## Original schema
```js
{
	"type": "integer"
}
```
## Schema after validating
```js
{
	"type": "integer",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `integer type matches integers, a string is not an integer`
## Original schema
```js
{
	"type": "integer"
}
```
## Schema after validating
```js
{
	"type": "integer",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `integer type matches integers, an object is not an integer`
## Original schema
```js
{
	"type": "integer"
}
```
## Schema after validating
```js
{
	"type": "integer",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `integer type matches integers, an array is not an integer`
## Original schema
```js
{
	"type": "integer"
}
```
## Schema after validating
```js
{
	"type": "integer",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `integer type matches integers, a boolean is not an integer`
## Original schema
```js
{
	"type": "integer"
}
```
## Schema after validating
```js
{
	"type": "integer",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `integer type matches integers, null is not an integer`
## Original schema
```js
{
	"type": "integer"
}
```
## Schema after validating
```js
{
	"type": "integer",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `number type matches numbers, an integer is a number`
## Original schema
```js
{
	"type": "number"
}
```
## Schema after validating
```js
{
	"type": "number",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `number type matches numbers, a float is a number`
## Original schema
```js
{
	"type": "number"
}
```
## Schema after validating
```js
{
	"type": "number",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `number type matches numbers, a string is not a number`
## Original schema
```js
{
	"type": "number"
}
```
## Schema after validating
```js
{
	"type": "number",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `number type matches numbers, an object is not a number`
## Original schema
```js
{
	"type": "number"
}
```
## Schema after validating
```js
{
	"type": "number",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `number type matches numbers, an array is not a number`
## Original schema
```js
{
	"type": "number"
}
```
## Schema after validating
```js
{
	"type": "number",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `number type matches numbers, a boolean is not a number`
## Original schema
```js
{
	"type": "number"
}
```
## Schema after validating
```js
{
	"type": "number",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `number type matches numbers, null is not a number`
## Original schema
```js
{
	"type": "number"
}
```
## Schema after validating
```js
{
	"type": "number",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `string type matches strings, 1 is not a string`
## Original schema
```js
{
	"type": "string"
}
```
## Schema after validating
```js
{
	"type": "string",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `string type matches strings, a float is not a string`
## Original schema
```js
{
	"type": "string"
}
```
## Schema after validating
```js
{
	"type": "string",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `string type matches strings, a string is a string`
## Original schema
```js
{
	"type": "string"
}
```
## Schema after validating
```js
{
	"type": "string",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `string type matches strings, an object is not a string`
## Original schema
```js
{
	"type": "string"
}
```
## Schema after validating
```js
{
	"type": "string",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `string type matches strings, an array is not a string`
## Original schema
```js
{
	"type": "string"
}
```
## Schema after validating
```js
{
	"type": "string",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `string type matches strings, a boolean is not a string`
## Original schema
```js
{
	"type": "string"
}
```
## Schema after validating
```js
{
	"type": "string",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `string type matches strings, null is not a string`
## Original schema
```js
{
	"type": "string"
}
```
## Schema after validating
```js
{
	"type": "string",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `object type matches objects, an integer is not an object`
## Original schema
```js
{
	"type": "object"
}
```
## Schema after validating
```js
{
	"type": "object",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `object type matches objects, a float is not an object`
## Original schema
```js
{
	"type": "object"
}
```
## Schema after validating
```js
{
	"type": "object",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `object type matches objects, a string is not an object`
## Original schema
```js
{
	"type": "object"
}
```
## Schema after validating
```js
{
	"type": "object",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `object type matches objects, an object is an object`
## Original schema
```js
{
	"type": "object"
}
```
## Schema after validating
```js
{
	"type": "object",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `object type matches objects, an array is not an object`
## Original schema
```js
{
	"type": "object"
}
```
## Schema after validating
```js
{
	"type": "object",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `object type matches objects, a boolean is not an object`
## Original schema
```js
{
	"type": "object"
}
```
## Schema after validating
```js
{
	"type": "object",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `object type matches objects, null is not an object`
## Original schema
```js
{
	"type": "object"
}
```
## Schema after validating
```js
{
	"type": "object",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `array type matches arrays, an integer is not an array`
## Original schema
```js
{
	"type": "array"
}
```
## Schema after validating
```js
{
	"type": "array",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `array type matches arrays, a float is not an array`
## Original schema
```js
{
	"type": "array"
}
```
## Schema after validating
```js
{
	"type": "array",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `array type matches arrays, a string is not an array`
## Original schema
```js
{
	"type": "array"
}
```
## Schema after validating
```js
{
	"type": "array",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `array type matches arrays, an object is not an array`
## Original schema
```js
{
	"type": "array"
}
```
## Schema after validating
```js
{
	"type": "array",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `array type matches arrays, an array is not an array`
## Original schema
```js
{
	"type": "array"
}
```
## Schema after validating
```js
{
	"type": "array",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `array type matches arrays, a boolean is not an array`
## Original schema
```js
{
	"type": "array"
}
```
## Schema after validating
```js
{
	"type": "array",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `array type matches arrays, null is not an array`
## Original schema
```js
{
	"type": "array"
}
```
## Schema after validating
```js
{
	"type": "array",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, an integer is not a boolean`
## Original schema
```js
{
	"type": "boolean"
}
```
## Schema after validating
```js
{
	"type": "boolean",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, a float is not a boolean`
## Original schema
```js
{
	"type": "boolean"
}
```
## Schema after validating
```js
{
	"type": "boolean",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, a string is not a boolean`
## Original schema
```js
{
	"type": "boolean"
}
```
## Schema after validating
```js
{
	"type": "boolean",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, an object is not a boolean`
## Original schema
```js
{
	"type": "boolean"
}
```
## Schema after validating
```js
{
	"type": "boolean",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, an array is not a boolean`
## Original schema
```js
{
	"type": "boolean"
}
```
## Schema after validating
```js
{
	"type": "boolean",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, a boolean is not a boolean`
## Original schema
```js
{
	"type": "boolean"
}
```
## Schema after validating
```js
{
	"type": "boolean",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, null is not a boolean`
## Original schema
```js
{
	"type": "boolean"
}
```
## Schema after validating
```js
{
	"type": "boolean",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `null type matches only the null object, an integer is not null`
## Original schema
```js
{
	"type": "null"
}
```
## Schema after validating
```js
{
	"type": "null",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `null type matches only the null object, a float is not null`
## Original schema
```js
{
	"type": "null"
}
```
## Schema after validating
```js
{
	"type": "null",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `null type matches only the null object, a string is not null`
## Original schema
```js
{
	"type": "null"
}
```
## Schema after validating
```js
{
	"type": "null",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `null type matches only the null object, an object is not null`
## Original schema
```js
{
	"type": "null"
}
```
## Schema after validating
```js
{
	"type": "null",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `null type matches only the null object, an array is not null`
## Original schema
```js
{
	"type": "null"
}
```
## Schema after validating
```js
{
	"type": "null",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `null type matches only the null object, a boolean is not null`
## Original schema
```js
{
	"type": "null"
}
```
## Schema after validating
```js
{
	"type": "null",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `null type matches only the null object, null is null`
## Original schema
```js
{
	"type": "null"
}
```
## Schema after validating
```js
{
	"type": "null",
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, an integer is valid`
## Original schema
```js
{
	"type": [
		"integer",
		"string"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"integer",
		"string"
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, a string is valid`
## Original schema
```js
{
	"type": [
		"integer",
		"string"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"integer",
		"string"
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, a float is invalid`
## Original schema
```js
{
	"type": [
		"integer",
		"string"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"integer",
		"string"
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, an object is invalid`
## Original schema
```js
{
	"type": [
		"integer",
		"string"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"integer",
		"string"
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, an array is invalid`
## Original schema
```js
{
	"type": [
		"integer",
		"string"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"integer",
		"string"
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, a boolean is invalid`
## Original schema
```js
{
	"type": [
		"integer",
		"string"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"integer",
		"string"
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, null is invalid`
## Original schema
```js
{
	"type": [
		"integer",
		"string"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"integer",
		"string"
	],
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `uniqueItems validation, unique array of integers is valid`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `uniqueItems validation, non-unique array of integers is invalid`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `uniqueItems validation, numbers are unique if mathematically unequal`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `uniqueItems validation, unique array of objects is valid`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `uniqueItems validation, non-unique array of objects is invalid`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `uniqueItems validation, unique array of nested objects is valid`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `uniqueItems validation, non-unique array of nested objects is invalid`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `uniqueItems validation, unique array of arrays is valid`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `uniqueItems validation, non-unique array of arrays is invalid`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `uniqueItems validation, 1 and true are unique`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `uniqueItems validation, 0 and false are unique`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `uniqueItems validation, unique heterogeneous types are valid`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"__$compiled": true,
	"__$validated": true
}
```

# Side-effect on schema
[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `uniqueItems validation, non-unique heterogeneous types are invalid`
## Original schema
```js
{
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"uniqueItems": true,
	"__$compiled": true,
	"__$validated": true
}
```

[back to benchmarks](https://github.com/Muscula/json-schema-benchmark)