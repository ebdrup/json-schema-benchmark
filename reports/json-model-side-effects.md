# [`json-model`](https://github.com/geraintluff/json-model) side-effects in testrun

When running tests [`json-model`](https://github.com/geraintluff/json-model) mutated either the original schema or the data being validated with the schema or both.


# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalItems as schema, additional items match schema`
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
		{}
	],
	"additionalItems": {
		"type": "integer"
	},
	"id": "7947647976689041anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalItems as schema, additional items do not match schema`
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
		{}
	],
	"additionalItems": {
		"type": "integer"
	},
	"id": "7947647976689041anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `items is schema, no additionalItems, all items match schema`
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
	"items": {},
	"additionalItems": false,
	"id": "24163666181266308anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `array of items with no additionalItems, no additional items present`
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
		{},
		{},
		{}
	],
	"additionalItems": false,
	"id": "3973453724756837anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `array of items with no additionalItems, additional items are not permitted`
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
		{},
		{},
		{}
	],
	"additionalItems": false,
	"id": "3973453724756837anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalItems as false without items, items defaults to empty schema so everything is valid`
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
	"id": "4843650737311691anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalItems as false without items, ignores non-arrays`
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
	"id": "4843650737311691anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalItems are allowed by default, only the first item is validated`
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
			"type": "integer"
		}
	],
	"id": "660145013127476anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties being false does not allow other properties, no additional properties is valid`
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
		"foo": {},
		"bar": {}
	},
	"patternProperties": {
		"^v": {}
	},
	"additionalProperties": false,
	"id": "3914031689055264anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties being false does not allow other properties, an additional property is invalid`
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
		"foo": {},
		"bar": {}
	},
	"patternProperties": {
		"^v": {}
	},
	"additionalProperties": false,
	"id": "3914031689055264anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties being false does not allow other properties, ignores non-objects`
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
		"foo": {},
		"bar": {}
	},
	"patternProperties": {
		"^v": {}
	},
	"additionalProperties": false,
	"id": "3914031689055264anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties being false does not allow other properties, patternProperties are not additional properties`
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
		"foo": {},
		"bar": {}
	},
	"patternProperties": {
		"^v": {}
	},
	"additionalProperties": false,
	"id": "3914031689055264anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties allows a schema which should validate, no additional properties is valid`
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
		"foo": {},
		"bar": {}
	},
	"additionalProperties": {
		"type": "boolean"
	},
	"id": "277987377718091anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties allows a schema which should validate, an additional valid property is valid`
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
		"foo": {},
		"bar": {}
	},
	"additionalProperties": {
		"type": "boolean"
	},
	"id": "277987377718091anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties allows a schema which should validate, an additional invalid property is invalid`
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
		"foo": {},
		"bar": {}
	},
	"additionalProperties": {
		"type": "boolean"
	},
	"id": "277987377718091anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties can exist by itself, an additional valid property is valid`
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
		"type": "boolean"
	},
	"id": "565946540562436anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties can exist by itself, an additional invalid property is invalid`
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
		"type": "boolean"
	},
	"id": "565946540562436anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties are allowed by default, additional properties are allowed`
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
		"foo": {},
		"bar": {}
	},
	"id": "03890075860545039anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf, allOf`
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
	],
	"id": "6707037095911801anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf, mismatch second`
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
	],
	"id": "6707037095911801anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf, mismatch first`
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
	],
	"id": "6707037095911801anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf, wrong type`
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
	],
	"id": "6707037095911801anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf with base schema, valid`
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
	],
	"id": "5859377207234502anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf with base schema, mismatch base schema`
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
	],
	"id": "5859377207234502anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf with base schema, mismatch first allOf`
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
	],
	"id": "5859377207234502anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf with base schema, mismatch second allOf`
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
	],
	"id": "5859377207234502anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf with base schema, mismatch both`
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
	],
	"id": "5859377207234502anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf simple types, valid`
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
			"maximum": 30
		},
		{
			"minimum": 20
		}
	],
	"id": "17443152330815792anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf simple types, mismatch one`
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
			"maximum": 30
		},
		{
			"minimum": 20
		}
	],
	"id": "17443152330815792anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf, first anyOf valid`
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
			"type": "integer"
		},
		{
			"minimum": 2
		}
	],
	"id": "9109052114654332anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf, second anyOf valid`
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
			"type": "integer"
		},
		{
			"minimum": 2
		}
	],
	"id": "9109052114654332anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf, both anyOf valid`
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
			"type": "integer"
		},
		{
			"minimum": 2
		}
	],
	"id": "9109052114654332anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf, neither anyOf valid`
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
			"type": "integer"
		},
		{
			"minimum": 2
		}
	],
	"id": "9109052114654332anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf with base schema, mismatch base schema`
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
			"maxLength": 2
		},
		{
			"minLength": 4
		}
	],
	"id": "8976489887572825anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf with base schema, one anyOf valid`
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
			"maxLength": 2
		},
		{
			"minLength": 4
		}
	],
	"id": "8976489887572825anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf with base schema, both anyOf invalid`
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
			"maxLength": 2
		},
		{
			"minLength": 4
		}
	],
	"id": "8976489887572825anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `invalid type for default, valid when property is specified`
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
			"default": []
		}
	},
	"id": "5262694812845439anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `invalid type for default, still valid when the invalid default is used`
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
			"default": []
		}
	},
	"id": "5262694812845439anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `invalid string value for default, valid when property is specified`
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
			"default": "bad"
		}
	},
	"id": "13028424931690097anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `invalid string value for default, still valid when the invalid default is used`
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
			"default": "bad"
		}
	},
	"id": "13028424931690097anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `invalid definition, invalid definition schema`
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
	"id": "43149393261410296anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies, neither`
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
	"id": "4185987412929535anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies, nondependant`
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
	"id": "4185987412929535anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies, with dependency`
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
	"id": "4185987412929535anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies, missing dependency`
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
	"id": "4185987412929535anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies, ignores non-objects`
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
	"id": "4185987412929535anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple dependencies, neither`
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
	"id": "705641120672226anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple dependencies, nondependants`
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
	"id": "705641120672226anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple dependencies, with dependencies`
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
	"id": "705641120672226anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple dependencies, missing dependency`
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
	"id": "705641120672226anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple dependencies, missing other dependency`
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
	"id": "705641120672226anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple dependencies, missing both dependencies`
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
	"id": "705641120672226anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple dependencies subschema, valid`
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
					"type": "integer"
				},
				"bar": {
					"type": "integer"
				}
			}
		}
	},
	"id": "4772786535322666anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple dependencies subschema, no dependency`
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
					"type": "integer"
				},
				"bar": {
					"type": "integer"
				}
			}
		}
	},
	"id": "4772786535322666anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple dependencies subschema, wrong type`
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
					"type": "integer"
				},
				"bar": {
					"type": "integer"
				}
			}
		}
	},
	"id": "4772786535322666anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple dependencies subschema, wrong type other`
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
					"type": "integer"
				},
				"bar": {
					"type": "integer"
				}
			}
		}
	},
	"id": "4772786535322666anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple dependencies subschema, wrong type both`
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
					"type": "integer"
				},
				"bar": {
					"type": "integer"
				}
			}
		}
	},
	"id": "4772786535322666anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `simple enum validation, one of the enum is valid`
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
	"id": "44160169502720237anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `simple enum validation, something else is invalid`
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
	"id": "44160169502720237anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `heterogeneous enum validation, one of the enum is valid`
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
	"id": "34832430561073124anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `heterogeneous enum validation, something else is invalid`
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
	"id": "34832430561073124anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `heterogeneous enum validation, objects are deep compared`
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
	"id": "34832430561073124anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enums in properties, both properties are valid`
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
	],
	"id": "23670460982248187anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enums in properties, missing optional property is valid`
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
	],
	"id": "23670460982248187anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enums in properties, missing required property is invalid`
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
	],
	"id": "23670460982248187anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enums in properties, missing all properties is invalid`
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
	],
	"id": "23670460982248187anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `a schema given for items, valid items`
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
		"type": "integer"
	},
	"id": "6550905369222164anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `a schema given for items, wrong type of items`
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
		"type": "integer"
	},
	"id": "6550905369222164anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `a schema given for items, ignores non-arrays`
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
		"type": "integer"
	},
	"id": "6550905369222164anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `an array of schemas for items, correct types`
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
			"type": "integer"
		},
		{
			"type": "string"
		}
	],
	"id": "5437339583877474anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `an array of schemas for items, wrong types`
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
			"type": "integer"
		},
		{
			"type": "string"
		}
	],
	"id": "5437339583877474anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxItems validation, shorter is valid`
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
	"id": "24627847783267498anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxItems validation, exact length is valid`
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
	"id": "24627847783267498anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxItems validation, too long is invalid`
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
	"id": "24627847783267498anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxItems validation, ignores non-arrays`
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
	"id": "24627847783267498anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxLength validation, shorter is valid`
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
	"id": "18359205382876098anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxLength validation, exact length is valid`
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
	"id": "18359205382876098anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxLength validation, too long is invalid`
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
	"id": "18359205382876098anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxLength validation, ignores non-strings`
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
	"id": "18359205382876098anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxLength validation, two supplementary Unicode code points is long enough`
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
	"id": "18359205382876098anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxProperties validation, shorter is valid`
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
	"id": "38932798337191343anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxProperties validation, exact length is valid`
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
	"id": "38932798337191343anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxProperties validation, too long is invalid`
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
	"id": "38932798337191343anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxProperties validation, ignores non-objects`
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
	"id": "38932798337191343anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maximum validation, below the maximum is valid`
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
	"id": "5038944364059716anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maximum validation, above the maximum is invalid`
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
	"id": "5038944364059716anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maximum validation, ignores non-numbers`
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
	"id": "5038944364059716anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `exclusiveMaximum validation, below the maximum is still valid`
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
	"id": "16310031432658434anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `exclusiveMaximum validation, boundary point is invalid`
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
	"id": "16310031432658434anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minItems validation, longer is valid`
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
	"id": "2339415035676211anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minItems validation, exact length is valid`
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
	"id": "2339415035676211anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minItems validation, too short is invalid`
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
	"id": "2339415035676211anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minItems validation, ignores non-arrays`
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
	"id": "2339415035676211anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minLength validation, longer is valid`
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
	"id": "693972910521552anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minLength validation, exact length is valid`
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
	"id": "693972910521552anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minLength validation, too short is invalid`
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
	"id": "693972910521552anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minLength validation, ignores non-strings`
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
	"id": "693972910521552anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minLength validation, one supplementary Unicode code point is not long enough`
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
	"id": "693972910521552anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minProperties validation, longer is valid`
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
	"id": "9164265480358154anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minProperties validation, exact length is valid`
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
	"id": "9164265480358154anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minProperties validation, too short is invalid`
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
	"id": "9164265480358154anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minProperties validation, ignores non-objects`
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
	"id": "9164265480358154anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minimum validation, above the minimum is valid`
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
	"id": "4888054912444204anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minimum validation, below the minimum is invalid`
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
	"id": "4888054912444204anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minimum validation, ignores non-numbers`
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
	"id": "4888054912444204anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `exclusiveMinimum validation, above the minimum is still valid`
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
	"id": "1518002471420914anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `exclusiveMinimum validation, boundary point is invalid`
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
	"id": "1518002471420914anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `by int, int by int`
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
	"id": "8304005023092031anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `by int, int by int fail`
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
	"id": "8304005023092031anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `by int, ignores non-numbers`
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
	"id": "8304005023092031anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `by number, zero is multiple of anything`
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
	"id": "7470110396388918anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `by number, 4.5 is multiple of 1.5`
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
	"id": "7470110396388918anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `by number, 35 is not multiple of 1.5`
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
	"id": "7470110396388918anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `by small number, 0.0075 is multiple of 0.0001`
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
	"id": "5773550905287266anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `by small number, 0.00751 is not multiple of 0.0001`
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
	"id": "5773550905287266anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `not, allowed`
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
		"type": "integer"
	},
	"id": "35726967733353376anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `not, disallowed`
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
		"type": "integer"
	},
	"id": "35726967733353376anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `not multiple types, valid`
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
		]
	},
	"id": "9441395979374647anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `not multiple types, mismatch`
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
		]
	},
	"id": "9441395979374647anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `not multiple types, other mismatch`
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
		]
	},
	"id": "9441395979374647anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `not more complex schema, match`
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
				"type": "string"
			}
		}
	},
	"id": "36640350334346294anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `not more complex schema, other match`
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
				"type": "string"
			}
		}
	},
	"id": "36640350334346294anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `not more complex schema, mismatch`
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
				"type": "string"
			}
		}
	},
	"id": "36640350334346294anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `forbidden property, property present`
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
			"not": {}
		}
	},
	"id": "43457346176728606anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `forbidden property, property absent`
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
			"not": {}
		}
	},
	"id": "43457346176728606anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf, first oneOf valid`
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
			"type": "integer"
		},
		{
			"minimum": 2
		}
	],
	"id": "9887467147782445anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf, second oneOf valid`
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
			"type": "integer"
		},
		{
			"minimum": 2
		}
	],
	"id": "9887467147782445anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf, both oneOf valid`
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
			"type": "integer"
		},
		{
			"minimum": 2
		}
	],
	"id": "9887467147782445anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf, neither oneOf valid`
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
			"type": "integer"
		},
		{
			"minimum": 2
		}
	],
	"id": "9887467147782445anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf with base schema, mismatch base schema`
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
			"minLength": 2
		},
		{
			"maxLength": 4
		}
	],
	"id": "9021055898629129anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf with base schema, one oneOf valid`
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
			"minLength": 2
		},
		{
			"maxLength": 4
		}
	],
	"id": "9021055898629129anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf with base schema, both oneOf valid`
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
			"minLength": 2
		},
		{
			"maxLength": 4
		}
	],
	"id": "9021055898629129anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `integer, a bignum is an integer`
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
	"id": "24334265338256955anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `number, a bignum is a number`
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
	"id": "9584588930010796anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `integer, a negative bignum is an integer`
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
	"id": "8714144502300769anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `number, a negative bignum is a number`
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
	"id": "8230982450768352anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `string, a bignum is not a string`
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
	"id": "693923976039514anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `integer comparison, comparison works for high numbers`
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
	"id": "453347411705181anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `float comparison with high precision, comparison works for high numbers`
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
	"id": "8242751727811992anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `integer comparison, comparison works for very negative numbers`
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
	"id": "8832582223694772anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `float comparison with high precision on negative numbers, comparison works for very negative numbers`
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
	"id": "9894612196367234anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, a valid date-time string`
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
	"id": "7136956467293203anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, an invalid date-time string`
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
	"id": "7136956467293203anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, only RFC3339 not all of ISO 8601 are valid`
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
	"id": "7136956467293203anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid URI`
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
	"id": "8554349117912352anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, an invalid URI`
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
	"id": "8554349117912352anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, an invalid URI though valid URI reference`
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
	"id": "8554349117912352anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, a valid e-mail address`
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
	"id": "8959910627454519anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, an invalid e-mail address`
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
	"id": "8959910627454519anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IP addresses, a valid IP address`
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
	"id": "6310435726772994anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IP addresses, an IP address with too many components`
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
	"id": "6310435726772994anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IP addresses, an IP address with out-of-range values`
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
	"id": "6310435726772994anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IP addresses, an IP address without 4 components`
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
	"id": "6310435726772994anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IP addresses, an IP address as an integer`
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
	"id": "6310435726772994anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, a valid IPv6 address`
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
	"id": "88292270549573anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, an IPv6 address with out-of-range values`
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
	"id": "88292270549573anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, an IPv6 address with too many components`
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
	"id": "88292270549573anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, an IPv6 address containing illegal characters`
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
	"id": "88292270549573anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of host names, a valid host name`
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
	"id": "03468307200819254anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of host names, a host name starting with an illegal character`
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
	"id": "03468307200819254anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of host names, a host name containing illegal characters`
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
	"id": "03468307200819254anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of host names, a host name with a component too long`
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
	"id": "03468307200819254anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `some languages do not distinguish between different types of numeric value, a float is not an integer even without fractional part`
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
	"id": "8975113711785525anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `pattern validation, a matching pattern is valid`
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
	"id": "05134004261344671anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `pattern validation, a non-matching pattern is invalid`
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
	"id": "05134004261344671anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `pattern validation, ignores non-strings`
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
	"id": "05134004261344671anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `patternProperties validates properties matching a regex, a single valid match is valid`
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
			"type": "integer"
		}
	},
	"id": "5863688909448683anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `patternProperties validates properties matching a regex, multiple valid matches is valid`
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
			"type": "integer"
		}
	},
	"id": "5863688909448683anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `patternProperties validates properties matching a regex, a single invalid match is invalid`
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
			"type": "integer"
		}
	},
	"id": "5863688909448683anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `patternProperties validates properties matching a regex, multiple invalid matches is invalid`
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
			"type": "integer"
		}
	},
	"id": "5863688909448683anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `patternProperties validates properties matching a regex, ignores non-objects`
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
			"type": "integer"
		}
	},
	"id": "5863688909448683anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple simultaneous patternProperties are validated, a single valid match is valid`
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
			"type": "integer"
		},
		"aaa*": {
			"maximum": 20
		}
	},
	"id": "46029228437691927anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple simultaneous patternProperties are validated, a simultaneous match is valid`
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
			"type": "integer"
		},
		"aaa*": {
			"maximum": 20
		}
	},
	"id": "46029228437691927anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple simultaneous patternProperties are validated, multiple matches is valid`
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
			"type": "integer"
		},
		"aaa*": {
			"maximum": 20
		}
	},
	"id": "46029228437691927anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple simultaneous patternProperties are validated, an invalid due to one is invalid`
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
			"type": "integer"
		},
		"aaa*": {
			"maximum": 20
		}
	},
	"id": "46029228437691927anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple simultaneous patternProperties are validated, an invalid due to the other is invalid`
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
			"type": "integer"
		},
		"aaa*": {
			"maximum": 20
		}
	},
	"id": "46029228437691927anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple simultaneous patternProperties are validated, an invalid due to both is invalid`
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
			"type": "integer"
		},
		"aaa*": {
			"maximum": 20
		}
	},
	"id": "46029228437691927anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `regexes are not anchored by default and are case sensitive, non recognized members are ignored`
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
			"type": "boolean"
		},
		"X_": {
			"type": "string"
		}
	},
	"id": "9379734178073704anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `regexes are not anchored by default and are case sensitive, recognized members are accounted for`
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
			"type": "boolean"
		},
		"X_": {
			"type": "string"
		}
	},
	"id": "9379734178073704anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `regexes are not anchored by default and are case sensitive, regexes are case sensitive`
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
			"type": "boolean"
		},
		"X_": {
			"type": "string"
		}
	},
	"id": "9379734178073704anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `regexes are not anchored by default and are case sensitive, regexes are case sensitive, 2`
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
			"type": "boolean"
		},
		"X_": {
			"type": "string"
		}
	},
	"id": "9379734178073704anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object properties validation, both properties present and valid is valid`
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
			"type": "integer"
		},
		"bar": {
			"type": "string"
		}
	},
	"id": "12290952913463116anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object properties validation, one property invalid is invalid`
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
			"type": "integer"
		},
		"bar": {
			"type": "string"
		}
	},
	"id": "12290952913463116anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object properties validation, both properties invalid is invalid`
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
			"type": "integer"
		},
		"bar": {
			"type": "string"
		}
	},
	"id": "12290952913463116anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object properties validation, doesn't invalidate other properties`
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
			"type": "integer"
		},
		"bar": {
			"type": "string"
		}
	},
	"id": "12290952913463116anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object properties validation, ignores non-objects`
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
			"type": "integer"
		},
		"bar": {
			"type": "string"
		}
	},
	"id": "12290952913463116anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, property validates property`
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
	},
	"id": "6997195789590478anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, property invalidates property`
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
	},
	"id": "6997195789590478anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, patternProperty invalidates property`
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
	},
	"id": "6997195789590478anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, patternProperty validates nonproperty`
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
	},
	"id": "6997195789590478anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, patternProperty invalidates nonproperty`
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
	},
	"id": "6997195789590478anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, additionalProperty ignores property`
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
	},
	"id": "6997195789590478anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, additionalProperty validates others`
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
	},
	"id": "6997195789590478anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `properties, patternProperties, additionalProperties interaction, additionalProperty invalidates others`
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
	},
	"id": "6997195789590478anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `root pointer ref, match`
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
			"$ref": "28086330834776163anonymous#"
		}
	},
	"additionalProperties": false,
	"id": "28086330834776163anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `root pointer ref, recursive match`
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
			"$ref": "28086330834776163anonymous#"
		}
	},
	"additionalProperties": false,
	"id": "28086330834776163anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `root pointer ref, mismatch`
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
			"$ref": "28086330834776163anonymous#"
		}
	},
	"additionalProperties": false,
	"id": "28086330834776163anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `root pointer ref, recursive mismatch`
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
			"$ref": "28086330834776163anonymous#"
		}
	},
	"additionalProperties": false,
	"id": "28086330834776163anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `relative pointer ref to object, match`
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
			"id": "6981205802876502anonymous#/properties/foo"
		},
		"bar": {
			"$ref": "6981205802876502anonymous#/properties/foo"
		}
	},
	"id": "6981205802876502anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `relative pointer ref to object, mismatch`
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
			"id": "6981205802876502anonymous#/properties/foo"
		},
		"bar": {
			"$ref": "6981205802876502anonymous#/properties/foo"
		}
	},
	"id": "6981205802876502anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `relative pointer ref to array, match array`
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
			"id": "9089750400744379anonymous#/items/0"
		},
		{
			"$ref": "9089750400744379anonymous#/items/0"
		}
	],
	"id": "9089750400744379anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `relative pointer ref to array, mismatch array`
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
			"id": "9089750400744379anonymous#/items/0"
		},
		{
			"$ref": "9089750400744379anonymous#/items/0"
		}
	],
	"id": "9089750400744379anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `escaped pointer ref, slash`
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
		"type": "integer",
		"id": "9118354325182736anonymous#/tilda~0field"
	},
	"slash/field": {
		"type": "integer",
		"id": "9118354325182736anonymous#/slash~1field"
	},
	"percent%field": {
		"type": "integer",
		"id": "9118354325182736anonymous#/percent%25field"
	},
	"properties": {
		"tilda": {
			"$ref": "9118354325182736anonymous#/tilda~0field"
		},
		"slash": {
			"$ref": "9118354325182736anonymous#/slash~1field"
		},
		"percent": {
			"$ref": "9118354325182736anonymous#/percent%25field"
		}
	},
	"id": "9118354325182736anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `escaped pointer ref, tilda`
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
		"type": "integer",
		"id": "9118354325182736anonymous#/tilda~0field"
	},
	"slash/field": {
		"type": "integer",
		"id": "9118354325182736anonymous#/slash~1field"
	},
	"percent%field": {
		"type": "integer",
		"id": "9118354325182736anonymous#/percent%25field"
	},
	"properties": {
		"tilda": {
			"$ref": "9118354325182736anonymous#/tilda~0field"
		},
		"slash": {
			"$ref": "9118354325182736anonymous#/slash~1field"
		},
		"percent": {
			"$ref": "9118354325182736anonymous#/percent%25field"
		}
	},
	"id": "9118354325182736anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `escaped pointer ref, percent`
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
		"type": "integer",
		"id": "9118354325182736anonymous#/tilda~0field"
	},
	"slash/field": {
		"type": "integer",
		"id": "9118354325182736anonymous#/slash~1field"
	},
	"percent%field": {
		"type": "integer",
		"id": "9118354325182736anonymous#/percent%25field"
	},
	"properties": {
		"tilda": {
			"$ref": "9118354325182736anonymous#/tilda~0field"
		},
		"slash": {
			"$ref": "9118354325182736anonymous#/slash~1field"
		},
		"percent": {
			"$ref": "9118354325182736anonymous#/percent%25field"
		}
	},
	"id": "9118354325182736anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nested refs, nested ref valid`
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
			"type": "integer"
		},
		"b": {
			"$ref": "2501371898688376anonymous#/definitions/a"
		},
		"c": {
			"$ref": "2501371898688376anonymous#/definitions/b"
		}
	},
	"$ref": "2501371898688376anonymous#/definitions/c",
	"id": "2501371898688376anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nested refs, nested ref invalid`
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
			"type": "integer"
		},
		"b": {
			"$ref": "2501371898688376anonymous#/definitions/a"
		},
		"c": {
			"$ref": "2501371898688376anonymous#/definitions/b"
		}
	},
	"$ref": "2501371898688376anonymous#/definitions/c",
	"id": "2501371898688376anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `remote ref, containing refs itself, remote ref valid`
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
	"id": "9271994531154633anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `remote ref, containing refs itself, remote ref invalid`
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
	"id": "9271994531154633anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ref within remote ref, ref within ref valid`
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
	"id": "9740405210759491anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ref within remote ref, ref within ref invalid`
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
	"id": "9740405210759491anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `required validation, present required property is valid`
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
		"foo": {},
		"bar": {}
	},
	"required": [
		"foo"
	],
	"id": "5392412627115846anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `required validation, non-present required property is invalid`
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
		"foo": {},
		"bar": {}
	},
	"required": [
		"foo"
	],
	"id": "5392412627115846anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `required default validation, not required by default`
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
		"foo": {}
	},
	"id": "9186421381309628anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `integer type matches integers, an integer is an integer`
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
	"id": "5963009006809443anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `integer type matches integers, a float is not an integer`
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
	"id": "5963009006809443anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `integer type matches integers, a string is not an integer`
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
	"id": "5963009006809443anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `integer type matches integers, an object is not an integer`
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
	"id": "5963009006809443anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `integer type matches integers, an array is not an integer`
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
	"id": "5963009006809443anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `integer type matches integers, a boolean is not an integer`
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
	"id": "5963009006809443anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `integer type matches integers, null is not an integer`
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
	"id": "5963009006809443anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `number type matches numbers, an integer is a number`
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
	"id": "21644600480794907anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `number type matches numbers, a float is a number`
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
	"id": "21644600480794907anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `number type matches numbers, a string is not a number`
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
	"id": "21644600480794907anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `number type matches numbers, an object is not a number`
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
	"id": "21644600480794907anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `number type matches numbers, an array is not a number`
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
	"id": "21644600480794907anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `number type matches numbers, a boolean is not a number`
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
	"id": "21644600480794907anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `number type matches numbers, null is not a number`
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
	"id": "21644600480794907anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `string type matches strings, 1 is not a string`
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
	"id": "2370313450228423anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `string type matches strings, a float is not a string`
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
	"id": "2370313450228423anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `string type matches strings, a string is a string`
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
	"id": "2370313450228423anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `string type matches strings, an object is not a string`
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
	"id": "2370313450228423anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `string type matches strings, an array is not a string`
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
	"id": "2370313450228423anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `string type matches strings, a boolean is not a string`
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
	"id": "2370313450228423anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `string type matches strings, null is not a string`
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
	"id": "2370313450228423anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object type matches objects, an integer is not an object`
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
	"id": "96156136225909anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object type matches objects, a float is not an object`
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
	"id": "96156136225909anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object type matches objects, a string is not an object`
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
	"id": "96156136225909anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object type matches objects, an object is an object`
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
	"id": "96156136225909anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object type matches objects, an array is not an object`
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
	"id": "96156136225909anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object type matches objects, a boolean is not an object`
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
	"id": "96156136225909anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object type matches objects, null is not an object`
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
	"id": "96156136225909anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `array type matches arrays, an integer is not an array`
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
	"id": "3314920128323138anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `array type matches arrays, a float is not an array`
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
	"id": "3314920128323138anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `array type matches arrays, a string is not an array`
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
	"id": "3314920128323138anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `array type matches arrays, an object is not an array`
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
	"id": "3314920128323138anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `array type matches arrays, an array is not an array`
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
	"id": "3314920128323138anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `array type matches arrays, a boolean is not an array`
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
	"id": "3314920128323138anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `array type matches arrays, null is not an array`
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
	"id": "3314920128323138anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, an integer is not a boolean`
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
	"id": "28134627477265894anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, a float is not a boolean`
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
	"id": "28134627477265894anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, a string is not a boolean`
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
	"id": "28134627477265894anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, an object is not a boolean`
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
	"id": "28134627477265894anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, an array is not a boolean`
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
	"id": "28134627477265894anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, a boolean is not a boolean`
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
	"id": "28134627477265894anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, null is not a boolean`
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
	"id": "28134627477265894anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `null type matches only the null object, an integer is not null`
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
	"id": "8207686878740788anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `null type matches only the null object, a float is not null`
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
	"id": "8207686878740788anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `null type matches only the null object, a string is not null`
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
	"id": "8207686878740788anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `null type matches only the null object, an object is not null`
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
	"id": "8207686878740788anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `null type matches only the null object, an array is not null`
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
	"id": "8207686878740788anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `null type matches only the null object, a boolean is not null`
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
	"id": "8207686878740788anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `null type matches only the null object, null is null`
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
	"id": "8207686878740788anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, an integer is valid`
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
	"id": "35733371088281274anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, a string is valid`
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
	"id": "35733371088281274anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, a float is invalid`
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
	"id": "35733371088281274anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, an object is invalid`
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
	"id": "35733371088281274anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, an array is invalid`
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
	"id": "35733371088281274anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, a boolean is invalid`
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
	"id": "35733371088281274anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `multiple types can be specified in an array, null is invalid`
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
	"id": "35733371088281274anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, unique array of integers is valid`
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
	"id": "3605300730559975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, non-unique array of integers is invalid`
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
	"id": "3605300730559975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, numbers are unique if mathematically unequal`
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
	"id": "3605300730559975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, unique array of objects is valid`
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
	"id": "3605300730559975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, non-unique array of objects is invalid`
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
	"id": "3605300730559975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, unique array of nested objects is valid`
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
	"id": "3605300730559975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, non-unique array of nested objects is invalid`
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
	"id": "3605300730559975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, unique array of arrays is valid`
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
	"id": "3605300730559975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, non-unique array of arrays is invalid`
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
	"id": "3605300730559975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, 1 and true are unique`
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
	"id": "3605300730559975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, 0 and false are unique`
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
	"id": "3605300730559975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, unique heterogeneous types are valid`
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
	"id": "3605300730559975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, non-unique heterogeneous types are invalid`
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
	"id": "3605300730559975anonymous"
}
```

[back to benchmarks](https://github.com/Muscula/json-schema-benchmark)