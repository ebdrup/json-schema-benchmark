# [`z-schema`](https://github.com/zaggino/z-schema) side-effects in testrun

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalItems as schema, additional items match schema`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalItems as schema, additional items do not match schema`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `items is schema, no additionalItems, all items match schema`
schema
```js
{
	"items": {},
	"additionalItems": false
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `array of items with no additionalItems, no additional items present`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `array of items with no additionalItems, additional items are not permitted`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalItems as false without items, items defaults to empty schema so everything is valid`
schema
```js
{
	"additionalItems": false
}
```
schema after validating
```js
{
	"additionalItems": false,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalItems as false without items, ignores non-arrays`
schema
```js
{
	"additionalItems": false
}
```
schema after validating
```js
{
	"additionalItems": false,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalItems are allowed by default, only the first item is validated`
schema
```js
{
	"items": [
		{
			"type": "integer"
		}
	]
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalProperties being false does not allow other properties, no additional properties is valid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalProperties being false does not allow other properties, an additional property is invalid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalProperties being false does not allow other properties, ignores non-objects`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalProperties being false does not allow other properties, patternProperties are not additional properties`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalProperties allows a schema which should validate, no additional properties is valid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalProperties allows a schema which should validate, an additional valid property is valid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalProperties allows a schema which should validate, an additional invalid property is invalid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalProperties can exist by itself, an additional valid property is valid`
schema
```js
{
	"additionalProperties": {
		"type": "boolean"
	}
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalProperties can exist by itself, an additional invalid property is invalid`
schema
```js
{
	"additionalProperties": {
		"type": "boolean"
	}
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `additionalProperties are allowed by default, additional properties are allowed`
schema
```js
{
	"properties": {
		"foo": {},
		"bar": {}
	}
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `allOf, allOf`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `allOf, mismatch second`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `allOf, mismatch first`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `allOf, wrong type`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `allOf with base schema, valid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `allOf with base schema, mismatch base schema`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `allOf with base schema, mismatch first allOf`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `allOf with base schema, mismatch second allOf`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `allOf with base schema, mismatch both`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `allOf simple types, valid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `allOf simple types, mismatch one`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `anyOf, first anyOf valid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `anyOf, second anyOf valid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `anyOf, both anyOf valid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `anyOf, neither anyOf valid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `anyOf with base schema, mismatch base schema`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `anyOf with base schema, one anyOf valid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `anyOf with base schema, both anyOf invalid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `invalid type for default, valid when property is specified`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `invalid type for default, still valid when the invalid default is used`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `invalid string value for default, valid when property is specified`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `invalid string value for default, still valid when the invalid default is used`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `valid definition, valid definition schema`
schema
```js
{
	"$ref": "http://json-schema.org/draft-04/schema#"
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `invalid definition, invalid definition schema`
schema
```js
{
	"$ref": "http://json-schema.org/draft-04/schema#"
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `dependencies, neither`
schema
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	}
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `dependencies, nondependant`
schema
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	}
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `dependencies, with dependency`
schema
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	}
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `dependencies, missing dependency`
schema
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	}
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `dependencies, ignores non-objects`
schema
```js
{
	"dependencies": {
		"bar": [
			"foo"
		]
	}
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple dependencies, neither`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple dependencies, nondependants`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple dependencies, with dependencies`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple dependencies, missing dependency`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple dependencies, missing other dependency`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple dependencies, missing both dependencies`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple dependencies subschema, valid`
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple dependencies subschema, no dependency`
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple dependencies subschema, wrong type`
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple dependencies subschema, wrong type other`
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple dependencies subschema, wrong type both`
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `simple enum validation, one of the enum is valid`
schema
```js
{
	"enum": [
		1,
		2,
		3
	]
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `simple enum validation, something else is invalid`
schema
```js
{
	"enum": [
		1,
		2,
		3
	]
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `heterogeneous enum validation, one of the enum is valid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `heterogeneous enum validation, something else is invalid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `heterogeneous enum validation, objects are deep compared`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `enums in properties, both properties are valid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `enums in properties, missing optional property is valid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `enums in properties, missing required property is invalid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `enums in properties, missing all properties is invalid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `a schema given for items, valid items`
schema
```js
{
	"items": {
		"type": "integer"
	}
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `a schema given for items, wrong type of items`
schema
```js
{
	"items": {
		"type": "integer"
	}
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `a schema given for items, ignores non-arrays`
schema
```js
{
	"items": {
		"type": "integer"
	}
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `an array of schemas for items, correct types`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `an array of schemas for items, wrong types`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maxItems validation, shorter is valid`
schema
```js
{
	"maxItems": 2
}
```
schema after validating
```js
{
	"maxItems": 2,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maxItems validation, exact length is valid`
schema
```js
{
	"maxItems": 2
}
```
schema after validating
```js
{
	"maxItems": 2,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maxItems validation, too long is invalid`
schema
```js
{
	"maxItems": 2
}
```
schema after validating
```js
{
	"maxItems": 2,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maxItems validation, ignores non-arrays`
schema
```js
{
	"maxItems": 2
}
```
schema after validating
```js
{
	"maxItems": 2,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maxLength validation, shorter is valid`
schema
```js
{
	"maxLength": 2
}
```
schema after validating
```js
{
	"maxLength": 2,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maxLength validation, exact length is valid`
schema
```js
{
	"maxLength": 2
}
```
schema after validating
```js
{
	"maxLength": 2,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maxLength validation, too long is invalid`
schema
```js
{
	"maxLength": 2
}
```
schema after validating
```js
{
	"maxLength": 2,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maxLength validation, ignores non-strings`
schema
```js
{
	"maxLength": 2
}
```
schema after validating
```js
{
	"maxLength": 2,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maxLength validation, two supplementary Unicode code points is long enough`
schema
```js
{
	"maxLength": 2
}
```
schema after validating
```js
{
	"maxLength": 2,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maxProperties validation, shorter is valid`
schema
```js
{
	"maxProperties": 2
}
```
schema after validating
```js
{
	"maxProperties": 2,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maxProperties validation, exact length is valid`
schema
```js
{
	"maxProperties": 2
}
```
schema after validating
```js
{
	"maxProperties": 2,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maxProperties validation, too long is invalid`
schema
```js
{
	"maxProperties": 2
}
```
schema after validating
```js
{
	"maxProperties": 2,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maxProperties validation, ignores non-objects`
schema
```js
{
	"maxProperties": 2
}
```
schema after validating
```js
{
	"maxProperties": 2,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maximum validation, below the maximum is valid`
schema
```js
{
	"maximum": 3
}
```
schema after validating
```js
{
	"maximum": 3,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maximum validation, above the maximum is invalid`
schema
```js
{
	"maximum": 3
}
```
schema after validating
```js
{
	"maximum": 3,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `maximum validation, ignores non-numbers`
schema
```js
{
	"maximum": 3
}
```
schema after validating
```js
{
	"maximum": 3,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `exclusiveMaximum validation, below the maximum is still valid`
schema
```js
{
	"maximum": 3,
	"exclusiveMaximum": true
}
```
schema after validating
```js
{
	"maximum": 3,
	"exclusiveMaximum": true,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `exclusiveMaximum validation, boundary point is invalid`
schema
```js
{
	"maximum": 3,
	"exclusiveMaximum": true
}
```
schema after validating
```js
{
	"maximum": 3,
	"exclusiveMaximum": true,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minItems validation, longer is valid`
schema
```js
{
	"minItems": 1
}
```
schema after validating
```js
{
	"minItems": 1,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minItems validation, exact length is valid`
schema
```js
{
	"minItems": 1
}
```
schema after validating
```js
{
	"minItems": 1,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minItems validation, too short is invalid`
schema
```js
{
	"minItems": 1
}
```
schema after validating
```js
{
	"minItems": 1,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minItems validation, ignores non-arrays`
schema
```js
{
	"minItems": 1
}
```
schema after validating
```js
{
	"minItems": 1,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minLength validation, longer is valid`
schema
```js
{
	"minLength": 2
}
```
schema after validating
```js
{
	"minLength": 2,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minLength validation, exact length is valid`
schema
```js
{
	"minLength": 2
}
```
schema after validating
```js
{
	"minLength": 2,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minLength validation, too short is invalid`
schema
```js
{
	"minLength": 2
}
```
schema after validating
```js
{
	"minLength": 2,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minLength validation, ignores non-strings`
schema
```js
{
	"minLength": 2
}
```
schema after validating
```js
{
	"minLength": 2,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minLength validation, one supplementary Unicode code point is not long enough`
schema
```js
{
	"minLength": 2
}
```
schema after validating
```js
{
	"minLength": 2,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minProperties validation, longer is valid`
schema
```js
{
	"minProperties": 1
}
```
schema after validating
```js
{
	"minProperties": 1,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minProperties validation, exact length is valid`
schema
```js
{
	"minProperties": 1
}
```
schema after validating
```js
{
	"minProperties": 1,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minProperties validation, too short is invalid`
schema
```js
{
	"minProperties": 1
}
```
schema after validating
```js
{
	"minProperties": 1,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minProperties validation, ignores non-objects`
schema
```js
{
	"minProperties": 1
}
```
schema after validating
```js
{
	"minProperties": 1,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minimum validation, above the minimum is valid`
schema
```js
{
	"minimum": 1.1
}
```
schema after validating
```js
{
	"minimum": 1.1,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minimum validation, below the minimum is invalid`
schema
```js
{
	"minimum": 1.1
}
```
schema after validating
```js
{
	"minimum": 1.1,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `minimum validation, ignores non-numbers`
schema
```js
{
	"minimum": 1.1
}
```
schema after validating
```js
{
	"minimum": 1.1,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `exclusiveMinimum validation, above the minimum is still valid`
schema
```js
{
	"minimum": 1.1,
	"exclusiveMinimum": true
}
```
schema after validating
```js
{
	"minimum": 1.1,
	"exclusiveMinimum": true,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `exclusiveMinimum validation, boundary point is invalid`
schema
```js
{
	"minimum": 1.1,
	"exclusiveMinimum": true
}
```
schema after validating
```js
{
	"minimum": 1.1,
	"exclusiveMinimum": true,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `by int, int by int`
schema
```js
{
	"multipleOf": 2
}
```
schema after validating
```js
{
	"multipleOf": 2,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `by int, int by int fail`
schema
```js
{
	"multipleOf": 2
}
```
schema after validating
```js
{
	"multipleOf": 2,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `by int, ignores non-numbers`
schema
```js
{
	"multipleOf": 2
}
```
schema after validating
```js
{
	"multipleOf": 2,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `by number, zero is multiple of anything`
schema
```js
{
	"multipleOf": 1.5
}
```
schema after validating
```js
{
	"multipleOf": 1.5,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `by number, 4.5 is multiple of 1.5`
schema
```js
{
	"multipleOf": 1.5
}
```
schema after validating
```js
{
	"multipleOf": 1.5,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `by number, 35 is not multiple of 1.5`
schema
```js
{
	"multipleOf": 1.5
}
```
schema after validating
```js
{
	"multipleOf": 1.5,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `by small number, 0.0075 is multiple of 0.0001`
schema
```js
{
	"multipleOf": 0.0001
}
```
schema after validating
```js
{
	"multipleOf": 0.0001,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `by small number, 0.00751 is not multiple of 0.0001`
schema
```js
{
	"multipleOf": 0.0001
}
```
schema after validating
```js
{
	"multipleOf": 0.0001,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `not, allowed`
schema
```js
{
	"not": {
		"type": "integer"
	}
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `not, disallowed`
schema
```js
{
	"not": {
		"type": "integer"
	}
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `not multiple types, valid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `not multiple types, mismatch`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `not multiple types, other mismatch`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `not more complex schema, match`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `not more complex schema, other match`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `not more complex schema, mismatch`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `forbidden property, property present`
schema
```js
{
	"properties": {
		"foo": {
			"not": {}
		}
	}
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `forbidden property, property absent`
schema
```js
{
	"properties": {
		"foo": {
			"not": {}
		}
	}
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `oneOf, first oneOf valid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `oneOf, second oneOf valid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `oneOf, both oneOf valid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `oneOf, neither oneOf valid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `oneOf with base schema, mismatch base schema`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `oneOf with base schema, one oneOf valid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `oneOf with base schema, both oneOf valid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `integer, a bignum is an integer`
schema
```js
{
	"type": "integer"
}
```
schema after validating
```js
{
	"type": "integer",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `number, a bignum is a number`
schema
```js
{
	"type": "number"
}
```
schema after validating
```js
{
	"type": "number",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `integer, a negative bignum is an integer`
schema
```js
{
	"type": "integer"
}
```
schema after validating
```js
{
	"type": "integer",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `number, a negative bignum is a number`
schema
```js
{
	"type": "number"
}
```
schema after validating
```js
{
	"type": "number",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `string, a bignum is not a string`
schema
```js
{
	"type": "string"
}
```
schema after validating
```js
{
	"type": "string",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `integer comparison, comparison works for high numbers`
schema
```js
{
	"maximum": 18446744073709552000
}
```
schema after validating
```js
{
	"maximum": 18446744073709552000,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `float comparison with high precision, comparison works for high numbers`
schema
```js
{
	"maximum": 9.727837981879871e+26,
	"exclusiveMaximum": true
}
```
schema after validating
```js
{
	"maximum": 9.727837981879871e+26,
	"exclusiveMaximum": true,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `integer comparison, comparison works for very negative numbers`
schema
```js
{
	"minimum": -18446744073709552000
}
```
schema after validating
```js
{
	"minimum": -18446744073709552000,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `float comparison with high precision on negative numbers, comparison works for very negative numbers`
schema
```js
{
	"minimum": -9.727837981879871e+26,
	"exclusiveMinimum": true
}
```
schema after validating
```js
{
	"minimum": -9.727837981879871e+26,
	"exclusiveMinimum": true,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of date-time strings, a valid date-time string`
schema
```js
{
	"format": "date-time"
}
```
schema after validating
```js
{
	"format": "date-time",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of date-time strings, an invalid date-time string`
schema
```js
{
	"format": "date-time"
}
```
schema after validating
```js
{
	"format": "date-time",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of date-time strings, only RFC3339 not all of ISO 8601 are valid`
schema
```js
{
	"format": "date-time"
}
```
schema after validating
```js
{
	"format": "date-time",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid URI`
schema
```js
{
	"format": "uri"
}
```
schema after validating
```js
{
	"format": "uri",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of URIs, an invalid URI`
schema
```js
{
	"format": "uri"
}
```
schema after validating
```js
{
	"format": "uri",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of URIs, an invalid URI though valid URI reference`
schema
```js
{
	"format": "uri"
}
```
schema after validating
```js
{
	"format": "uri",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, a valid e-mail address`
schema
```js
{
	"format": "email"
}
```
schema after validating
```js
{
	"format": "email",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, an invalid e-mail address`
schema
```js
{
	"format": "email"
}
```
schema after validating
```js
{
	"format": "email",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of IP addresses, a valid IP address`
schema
```js
{
	"format": "ipv4"
}
```
schema after validating
```js
{
	"format": "ipv4",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of IP addresses, an IP address with too many components`
schema
```js
{
	"format": "ipv4"
}
```
schema after validating
```js
{
	"format": "ipv4",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of IP addresses, an IP address with out-of-range values`
schema
```js
{
	"format": "ipv4"
}
```
schema after validating
```js
{
	"format": "ipv4",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of IP addresses, an IP address without 4 components`
schema
```js
{
	"format": "ipv4"
}
```
schema after validating
```js
{
	"format": "ipv4",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of IP addresses, an IP address as an integer`
schema
```js
{
	"format": "ipv4"
}
```
schema after validating
```js
{
	"format": "ipv4",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, a valid IPv6 address`
schema
```js
{
	"format": "ipv6"
}
```
schema after validating
```js
{
	"format": "ipv6",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, an IPv6 address with out-of-range values`
schema
```js
{
	"format": "ipv6"
}
```
schema after validating
```js
{
	"format": "ipv6",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, an IPv6 address with too many components`
schema
```js
{
	"format": "ipv6"
}
```
schema after validating
```js
{
	"format": "ipv6",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, an IPv6 address containing illegal characters`
schema
```js
{
	"format": "ipv6"
}
```
schema after validating
```js
{
	"format": "ipv6",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of host names, a valid host name`
schema
```js
{
	"format": "hostname"
}
```
schema after validating
```js
{
	"format": "hostname",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of host names, a host name starting with an illegal character`
schema
```js
{
	"format": "hostname"
}
```
schema after validating
```js
{
	"format": "hostname",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of host names, a host name containing illegal characters`
schema
```js
{
	"format": "hostname"
}
```
schema after validating
```js
{
	"format": "hostname",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `validation of host names, a host name with a component too long`
schema
```js
{
	"format": "hostname"
}
```
schema after validating
```js
{
	"format": "hostname",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`
schema
```js
{
	"type": "integer"
}
```
schema after validating
```js
{
	"type": "integer",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `pattern validation, a matching pattern is valid`
schema
```js
{
	"pattern": "^a*$"
}
```
schema after validating
```js
{
	"pattern": "^a*$",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `pattern validation, a non-matching pattern is invalid`
schema
```js
{
	"pattern": "^a*$"
}
```
schema after validating
```js
{
	"pattern": "^a*$",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `pattern validation, ignores non-strings`
schema
```js
{
	"pattern": "^a*$"
}
```
schema after validating
```js
{
	"pattern": "^a*$",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `patternProperties validates properties matching a regex, a single valid match is valid`
schema
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer"
		}
	}
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `patternProperties validates properties matching a regex, multiple valid matches is valid`
schema
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer"
		}
	}
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `patternProperties validates properties matching a regex, a single invalid match is invalid`
schema
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer"
		}
	}
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `patternProperties validates properties matching a regex, multiple invalid matches is invalid`
schema
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer"
		}
	}
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `patternProperties validates properties matching a regex, ignores non-objects`
schema
```js
{
	"patternProperties": {
		"f.*o": {
			"type": "integer"
		}
	}
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple simultaneous patternProperties are validated, a single valid match is valid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple simultaneous patternProperties are validated, a simultaneous match is valid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple simultaneous patternProperties are validated, multiple matches is valid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple simultaneous patternProperties are validated, an invalid due to one is invalid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple simultaneous patternProperties are validated, an invalid due to the other is invalid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple simultaneous patternProperties are validated, an invalid due to both is invalid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `regexes are not anchored by default and are case sensitive, non recognized members are ignored`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `regexes are not anchored by default and are case sensitive, recognized members are accounted for`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `regexes are not anchored by default and are case sensitive, regexes are case sensitive`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `regexes are not anchored by default and are case sensitive, regexes are case sensitive, 2`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `object properties validation, both properties present and valid is valid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `object properties validation, one property invalid is invalid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `object properties validation, both properties invalid is invalid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `object properties validation, doesn't invalidate other properties`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `object properties validation, ignores non-objects`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, property validates property`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, property invalidates property`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, patternProperty invalidates property`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, patternProperty validates nonproperty`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, patternProperty invalidates nonproperty`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, additionalProperty ignores property`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, additionalProperty validates others`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, additionalProperty invalidates others`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `root pointer ref, match`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `root pointer ref, recursive match`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `root pointer ref, mismatch`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `root pointer ref, recursive mismatch`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `relative pointer ref to object, match`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `relative pointer ref to object, mismatch`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `relative pointer ref to array, match array`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `relative pointer ref to array, mismatch array`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `escaped pointer ref, slash`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `escaped pointer ref, tilda`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `escaped pointer ref, percent`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `nested refs, nested ref valid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `nested refs, nested ref invalid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `remote ref, containing refs itself, remote ref valid`
schema
```js
{
	"$ref": "http://json-schema.org/draft-04/schema#"
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `remote ref, containing refs itself, remote ref invalid`
schema
```js
{
	"$ref": "http://json-schema.org/draft-04/schema#"
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `remote ref, remote ref valid`
schema
```js
{
	"$ref": "http://localhost:1234/integer.json"
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `remote ref, remote ref invalid`
schema
```js
{
	"$ref": "http://localhost:1234/integer.json"
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `fragment within remote ref, remote fragment valid`
schema
```js
{
	"$ref": "http://localhost:1234/subSchemas.json#/integer"
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `fragment within remote ref, remote fragment invalid`
schema
```js
{
	"$ref": "http://localhost:1234/subSchemas.json#/integer"
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `ref within remote ref, ref within ref valid`
schema
```js
{
	"$ref": "http://localhost:1234/subSchemas.json#/refToInteger"
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `ref within remote ref, ref within ref invalid`
schema
```js
{
	"$ref": "http://localhost:1234/subSchemas.json#/refToInteger"
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `change resolution scope, changed scope ref valid`
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `change resolution scope, changed scope ref invalid`
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `required validation, present required property is valid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `required validation, non-present required property is invalid`
schema
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
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `required default validation, not required by default`
schema
```js
{
	"properties": {
		"foo": {}
	}
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `integer type matches integers, an integer is an integer`
schema
```js
{
	"type": "integer"
}
```
schema after validating
```js
{
	"type": "integer",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `integer type matches integers, a float is not an integer`
schema
```js
{
	"type": "integer"
}
```
schema after validating
```js
{
	"type": "integer",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `integer type matches integers, a string is not an integer`
schema
```js
{
	"type": "integer"
}
```
schema after validating
```js
{
	"type": "integer",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `integer type matches integers, an object is not an integer`
schema
```js
{
	"type": "integer"
}
```
schema after validating
```js
{
	"type": "integer",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `integer type matches integers, an array is not an integer`
schema
```js
{
	"type": "integer"
}
```
schema after validating
```js
{
	"type": "integer",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `integer type matches integers, a boolean is not an integer`
schema
```js
{
	"type": "integer"
}
```
schema after validating
```js
{
	"type": "integer",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `integer type matches integers, null is not an integer`
schema
```js
{
	"type": "integer"
}
```
schema after validating
```js
{
	"type": "integer",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `number type matches numbers, an integer is a number`
schema
```js
{
	"type": "number"
}
```
schema after validating
```js
{
	"type": "number",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `number type matches numbers, a float is a number`
schema
```js
{
	"type": "number"
}
```
schema after validating
```js
{
	"type": "number",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `number type matches numbers, a string is not a number`
schema
```js
{
	"type": "number"
}
```
schema after validating
```js
{
	"type": "number",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `number type matches numbers, an object is not a number`
schema
```js
{
	"type": "number"
}
```
schema after validating
```js
{
	"type": "number",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `number type matches numbers, an array is not a number`
schema
```js
{
	"type": "number"
}
```
schema after validating
```js
{
	"type": "number",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `number type matches numbers, a boolean is not a number`
schema
```js
{
	"type": "number"
}
```
schema after validating
```js
{
	"type": "number",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `number type matches numbers, null is not a number`
schema
```js
{
	"type": "number"
}
```
schema after validating
```js
{
	"type": "number",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `string type matches strings, 1 is not a string`
schema
```js
{
	"type": "string"
}
```
schema after validating
```js
{
	"type": "string",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `string type matches strings, a float is not a string`
schema
```js
{
	"type": "string"
}
```
schema after validating
```js
{
	"type": "string",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `string type matches strings, a string is a string`
schema
```js
{
	"type": "string"
}
```
schema after validating
```js
{
	"type": "string",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `string type matches strings, an object is not a string`
schema
```js
{
	"type": "string"
}
```
schema after validating
```js
{
	"type": "string",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `string type matches strings, an array is not a string`
schema
```js
{
	"type": "string"
}
```
schema after validating
```js
{
	"type": "string",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `string type matches strings, a boolean is not a string`
schema
```js
{
	"type": "string"
}
```
schema after validating
```js
{
	"type": "string",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `string type matches strings, null is not a string`
schema
```js
{
	"type": "string"
}
```
schema after validating
```js
{
	"type": "string",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `object type matches objects, an integer is not an object`
schema
```js
{
	"type": "object"
}
```
schema after validating
```js
{
	"type": "object",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `object type matches objects, a float is not an object`
schema
```js
{
	"type": "object"
}
```
schema after validating
```js
{
	"type": "object",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `object type matches objects, a string is not an object`
schema
```js
{
	"type": "object"
}
```
schema after validating
```js
{
	"type": "object",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `object type matches objects, an object is an object`
schema
```js
{
	"type": "object"
}
```
schema after validating
```js
{
	"type": "object",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `object type matches objects, an array is not an object`
schema
```js
{
	"type": "object"
}
```
schema after validating
```js
{
	"type": "object",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `object type matches objects, a boolean is not an object`
schema
```js
{
	"type": "object"
}
```
schema after validating
```js
{
	"type": "object",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `object type matches objects, null is not an object`
schema
```js
{
	"type": "object"
}
```
schema after validating
```js
{
	"type": "object",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `array type matches arrays, an integer is not an array`
schema
```js
{
	"type": "array"
}
```
schema after validating
```js
{
	"type": "array",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `array type matches arrays, a float is not an array`
schema
```js
{
	"type": "array"
}
```
schema after validating
```js
{
	"type": "array",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `array type matches arrays, a string is not an array`
schema
```js
{
	"type": "array"
}
```
schema after validating
```js
{
	"type": "array",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `array type matches arrays, an object is not an array`
schema
```js
{
	"type": "array"
}
```
schema after validating
```js
{
	"type": "array",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `array type matches arrays, an array is not an array`
schema
```js
{
	"type": "array"
}
```
schema after validating
```js
{
	"type": "array",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `array type matches arrays, a boolean is not an array`
schema
```js
{
	"type": "array"
}
```
schema after validating
```js
{
	"type": "array",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `array type matches arrays, null is not an array`
schema
```js
{
	"type": "array"
}
```
schema after validating
```js
{
	"type": "array",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, an integer is not a boolean`
schema
```js
{
	"type": "boolean"
}
```
schema after validating
```js
{
	"type": "boolean",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, a float is not a boolean`
schema
```js
{
	"type": "boolean"
}
```
schema after validating
```js
{
	"type": "boolean",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, a string is not a boolean`
schema
```js
{
	"type": "boolean"
}
```
schema after validating
```js
{
	"type": "boolean",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, an object is not a boolean`
schema
```js
{
	"type": "boolean"
}
```
schema after validating
```js
{
	"type": "boolean",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, an array is not a boolean`
schema
```js
{
	"type": "boolean"
}
```
schema after validating
```js
{
	"type": "boolean",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, a boolean is not a boolean`
schema
```js
{
	"type": "boolean"
}
```
schema after validating
```js
{
	"type": "boolean",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, null is not a boolean`
schema
```js
{
	"type": "boolean"
}
```
schema after validating
```js
{
	"type": "boolean",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `null type matches only the null object, an integer is not null`
schema
```js
{
	"type": "null"
}
```
schema after validating
```js
{
	"type": "null",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `null type matches only the null object, a float is not null`
schema
```js
{
	"type": "null"
}
```
schema after validating
```js
{
	"type": "null",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `null type matches only the null object, a string is not null`
schema
```js
{
	"type": "null"
}
```
schema after validating
```js
{
	"type": "null",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `null type matches only the null object, an object is not null`
schema
```js
{
	"type": "null"
}
```
schema after validating
```js
{
	"type": "null",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `null type matches only the null object, an array is not null`
schema
```js
{
	"type": "null"
}
```
schema after validating
```js
{
	"type": "null",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `null type matches only the null object, a boolean is not null`
schema
```js
{
	"type": "null"
}
```
schema after validating
```js
{
	"type": "null",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `null type matches only the null object, null is null`
schema
```js
{
	"type": "null"
}
```
schema after validating
```js
{
	"type": "null",
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, an integer is valid`
schema
```js
{
	"type": [
		"integer",
		"string"
	]
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, a string is valid`
schema
```js
{
	"type": [
		"integer",
		"string"
	]
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, a float is invalid`
schema
```js
{
	"type": [
		"integer",
		"string"
	]
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, an object is invalid`
schema
```js
{
	"type": [
		"integer",
		"string"
	]
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, an array is invalid`
schema
```js
{
	"type": [
		"integer",
		"string"
	]
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, a boolean is invalid`
schema
```js
{
	"type": [
		"integer",
		"string"
	]
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, null is invalid`
schema
```js
{
	"type": [
		"integer",
		"string"
	]
}
```
schema after validating
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

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `uniqueItems validation, unique array of integers is valid`
schema
```js
{
	"uniqueItems": true
}
```
schema after validating
```js
{
	"uniqueItems": true,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `uniqueItems validation, non-unique array of integers is invalid`
schema
```js
{
	"uniqueItems": true
}
```
schema after validating
```js
{
	"uniqueItems": true,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `uniqueItems validation, numbers are unique if mathematically unequal`
schema
```js
{
	"uniqueItems": true
}
```
schema after validating
```js
{
	"uniqueItems": true,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `uniqueItems validation, unique array of objects is valid`
schema
```js
{
	"uniqueItems": true
}
```
schema after validating
```js
{
	"uniqueItems": true,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `uniqueItems validation, non-unique array of objects is invalid`
schema
```js
{
	"uniqueItems": true
}
```
schema after validating
```js
{
	"uniqueItems": true,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `uniqueItems validation, unique array of nested objects is valid`
schema
```js
{
	"uniqueItems": true
}
```
schema after validating
```js
{
	"uniqueItems": true,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `uniqueItems validation, non-unique array of nested objects is invalid`
schema
```js
{
	"uniqueItems": true
}
```
schema after validating
```js
{
	"uniqueItems": true,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `uniqueItems validation, unique array of arrays is valid`
schema
```js
{
	"uniqueItems": true
}
```
schema after validating
```js
{
	"uniqueItems": true,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `uniqueItems validation, non-unique array of arrays is invalid`
schema
```js
{
	"uniqueItems": true
}
```
schema after validating
```js
{
	"uniqueItems": true,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `uniqueItems validation, 1 and true are unique`
schema
```js
{
	"uniqueItems": true
}
```
schema after validating
```js
{
	"uniqueItems": true,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `uniqueItems validation, 0 and false are unique`
schema
```js
{
	"uniqueItems": true
}
```
schema after validating
```js
{
	"uniqueItems": true,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `uniqueItems validation, unique heterogeneous types are valid`
schema
```js
{
	"uniqueItems": true
}
```
schema after validating
```js
{
	"uniqueItems": true,
	"__$compiled": true,
	"__$validated": true
}
```

[`z-schema`](https://github.com/zaggino/z-schema) had a side-effect on (altered the original) schema in the test `uniqueItems validation, non-unique heterogeneous types are invalid`
schema
```js
{
	"uniqueItems": true
}
```
schema after validating
```js
{
	"uniqueItems": true,
	"__$compiled": true,
	"__$validated": true
}
```
