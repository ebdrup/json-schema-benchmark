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
	"id": "7286019971331157anonymous"
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
	"id": "7286019971331157anonymous"
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
	"id": "3341994272847839anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `array of items with no additionalItems, empty array`
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
	"id": "279699046429543anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `array of items with no additionalItems, fewer number of items present (1)`
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
	"id": "279699046429543anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `array of items with no additionalItems, fewer number of items present (2)`
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
	"id": "279699046429543anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `array of items with no additionalItems, equal number of items present`
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
	"id": "279699046429543anonymous"
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
	"id": "279699046429543anonymous"
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
	"id": "6865068365199021anonymous"
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
	"id": "6865068365199021anonymous"
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
	"id": "4824276657976099anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalItems should not look in applicators, valid case, items defined in allOf are not examined`
## Original schema
```js
{
	"allOf": [
		{
			"items": [
				{
					"type": "integer"
				}
			]
		}
	],
	"additionalItems": {
		"type": "boolean"
	}
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"items": [
				{
					"type": "integer"
				}
			]
		}
	],
	"additionalItems": {
		"type": "boolean"
	},
	"id": "6520377932266734anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalItems should not look in applicators, invalid case, items defined in allOf are not examined`
## Original schema
```js
{
	"allOf": [
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
	],
	"items": [
		{
			"type": "integer"
		}
	],
	"additionalItems": {
		"type": "boolean"
	}
}
```
## Schema after validating
```js
{
	"allOf": [
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
	],
	"items": [
		{
			"type": "integer"
		}
	],
	"additionalItems": {
		"type": "boolean"
	},
	"id": "3078481646459641anonymous"
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
	"id": "23198316398994034anonymous"
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
	"id": "23198316398994034anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties being false does not allow other properties, ignores arrays`
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
	"id": "23198316398994034anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties being false does not allow other properties, ignores strings`
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
	"id": "23198316398994034anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties being false does not allow other properties, ignores other non-objects`
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
	"id": "23198316398994034anonymous"
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
	"id": "23198316398994034anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `non-ASCII pattern with additionalProperties, matching the pattern is valid`
## Original schema
```js
{
	"patternProperties": {
		"^á": {}
	},
	"additionalProperties": false
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"^á": {}
	},
	"additionalProperties": false,
	"id": "5502712696083283anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `non-ASCII pattern with additionalProperties, not matching the pattern is invalid`
## Original schema
```js
{
	"patternProperties": {
		"^á": {}
	},
	"additionalProperties": false
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"^á": {}
	},
	"additionalProperties": false,
	"id": "5502712696083283anonymous"
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
	"id": "5613956712374477anonymous"
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
	"id": "5613956712374477anonymous"
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
	"id": "5613956712374477anonymous"
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
	"id": "5278835912655715anonymous"
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
	"id": "5278835912655715anonymous"
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
	"id": "5881677409759913anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `additionalProperties should not look in applicators, properties defined in allOf are not examined`
## Original schema
```js
{
	"allOf": [
		{
			"properties": {
				"foo": {}
			}
		}
	],
	"additionalProperties": {
		"type": "boolean"
	}
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"properties": {
				"foo": {}
			}
		}
	],
	"additionalProperties": {
		"type": "boolean"
	},
	"id": "3164436880921264anonymous"
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
	"id": "6831488687624521anonymous"
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
	"id": "6831488687624521anonymous"
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
	"id": "6831488687624521anonymous"
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
	"id": "6831488687624521anonymous"
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
	"id": "48395663686874646anonymous"
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
	"id": "48395663686874646anonymous"
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
	"id": "48395663686874646anonymous"
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
	"id": "48395663686874646anonymous"
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
	"id": "48395663686874646anonymous"
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
	"id": "18334519672784388anonymous"
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
	"id": "18334519672784388anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf with one empty schema, any data is valid`
## Original schema
```js
{
	"allOf": [
		{}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{}
	],
	"id": "35717321112450695anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf with two empty schemas, any data is valid`
## Original schema
```js
{
	"allOf": [
		{},
		{}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{},
		{}
	],
	"id": "025275165201192662anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf with the first empty schema, number is valid`
## Original schema
```js
{
	"allOf": [
		{},
		{
			"type": "number"
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{},
		{
			"type": "number"
		}
	],
	"id": "4842652263746048anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf with the first empty schema, string is invalid`
## Original schema
```js
{
	"allOf": [
		{},
		{
			"type": "number"
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{},
		{
			"type": "number"
		}
	],
	"id": "4842652263746048anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf with the last empty schema, number is valid`
## Original schema
```js
{
	"allOf": [
		{
			"type": "number"
		},
		{}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"type": "number"
		},
		{}
	],
	"id": "7646478108352641anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf with the last empty schema, string is invalid`
## Original schema
```js
{
	"allOf": [
		{
			"type": "number"
		},
		{}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"type": "number"
		},
		{}
	],
	"id": "7646478108352641anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nested allOf, to check validation semantics, null is valid`
## Original schema
```js
{
	"allOf": [
		{
			"allOf": [
				{
					"type": "null"
				}
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
			"allOf": [
				{
					"type": "null"
				}
			]
		}
	],
	"id": "7317848219848253anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nested allOf, to check validation semantics, anything non-null is invalid`
## Original schema
```js
{
	"allOf": [
		{
			"allOf": [
				{
					"type": "null"
				}
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
			"allOf": [
				{
					"type": "null"
				}
			]
		}
	],
	"id": "7317848219848253anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf combined with anyOf, oneOf, allOf: false, anyOf: false, oneOf: false`
## Original schema
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	],
	"id": "9648669436138293anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf combined with anyOf, oneOf, allOf: false, anyOf: false, oneOf: true`
## Original schema
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	],
	"id": "9648669436138293anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf combined with anyOf, oneOf, allOf: false, anyOf: true, oneOf: false`
## Original schema
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	],
	"id": "9648669436138293anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf combined with anyOf, oneOf, allOf: false, anyOf: true, oneOf: true`
## Original schema
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	],
	"id": "9648669436138293anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf combined with anyOf, oneOf, allOf: true, anyOf: false, oneOf: false`
## Original schema
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	],
	"id": "9648669436138293anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf combined with anyOf, oneOf, allOf: true, anyOf: false, oneOf: true`
## Original schema
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	],
	"id": "9648669436138293anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf combined with anyOf, oneOf, allOf: true, anyOf: true, oneOf: false`
## Original schema
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	],
	"id": "9648669436138293anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `allOf combined with anyOf, oneOf, allOf: true, anyOf: true, oneOf: true`
## Original schema
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	]
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"multipleOf": 2
		}
	],
	"anyOf": [
		{
			"multipleOf": 3
		}
	],
	"oneOf": [
		{
			"multipleOf": 5
		}
	],
	"id": "9648669436138293anonymous"
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
	"id": "9359852838303502anonymous"
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
	"id": "9359852838303502anonymous"
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
	"id": "9359852838303502anonymous"
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
	"id": "9359852838303502anonymous"
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
	"id": "15061154871961202anonymous"
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
	"id": "15061154871961202anonymous"
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
	"id": "15061154871961202anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf complex types, first anyOf valid (complex)`
## Original schema
```js
{
	"anyOf": [
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
	"anyOf": [
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
	"id": "8436520243616421anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf complex types, second anyOf valid (complex)`
## Original schema
```js
{
	"anyOf": [
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
	"anyOf": [
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
	"id": "8436520243616421anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf complex types, both anyOf valid (complex)`
## Original schema
```js
{
	"anyOf": [
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
	"anyOf": [
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
	"id": "8436520243616421anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf complex types, neither anyOf valid (complex)`
## Original schema
```js
{
	"anyOf": [
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
	"anyOf": [
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
	"id": "8436520243616421anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf with one empty schema, string is valid`
## Original schema
```js
{
	"anyOf": [
		{
			"type": "number"
		},
		{}
	]
}
```
## Schema after validating
```js
{
	"anyOf": [
		{
			"type": "number"
		},
		{}
	],
	"id": "7742108363985993anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `anyOf with one empty schema, number is valid`
## Original schema
```js
{
	"anyOf": [
		{
			"type": "number"
		},
		{}
	]
}
```
## Schema after validating
```js
{
	"anyOf": [
		{
			"type": "number"
		},
		{}
	],
	"id": "7742108363985993anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nested anyOf, to check validation semantics, null is valid`
## Original schema
```js
{
	"anyOf": [
		{
			"anyOf": [
				{
					"type": "null"
				}
			]
		}
	]
}
```
## Schema after validating
```js
{
	"anyOf": [
		{
			"anyOf": [
				{
					"type": "null"
				}
			]
		}
	],
	"id": "8059739915761186anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nested anyOf, to check validation semantics, anything non-null is invalid`
## Original schema
```js
{
	"anyOf": [
		{
			"anyOf": [
				{
					"type": "null"
				}
			]
		}
	]
}
```
## Schema after validating
```js
{
	"anyOf": [
		{
			"anyOf": [
				{
					"type": "null"
				}
			]
		}
	],
	"id": "8059739915761186anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nested anyOf, to check validation semantics, null is valid`
## Original schema
```js
{
	"anyOf": [
		{
			"anyOf": [
				{
					"type": "null"
				}
			]
		}
	]
}
```
## Schema after validating
```js
{
	"anyOf": [
		{
			"anyOf": [
				{
					"type": "null"
				}
			]
		}
	],
	"id": "9914377879617307anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nested anyOf, to check validation semantics, anything non-null is invalid`
## Original schema
```js
{
	"anyOf": [
		{
			"anyOf": [
				{
					"type": "null"
				}
			]
		}
	]
}
```
## Schema after validating
```js
{
	"anyOf": [
		{
			"anyOf": [
				{
					"type": "null"
				}
			]
		}
	],
	"id": "9914377879617307anonymous"
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
	"id": "4536779260937973anonymous"
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
	"id": "4536779260937973anonymous"
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
	"id": "5017021938786825anonymous"
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
	"id": "5017021938786825anonymous"
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
	"id": "10390504145301227anonymous"
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
	"id": "6894634485224698anonymous"
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
	"id": "6894634485224698anonymous"
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
	"id": "6894634485224698anonymous"
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
	"id": "6894634485224698anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies, ignores arrays`
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
	"id": "6894634485224698anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies, ignores strings`
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
	"id": "6894634485224698anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies, ignores other non-objects`
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
	"id": "6894634485224698anonymous"
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
	"id": "8483785927349716anonymous"
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
	"id": "8483785927349716anonymous"
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
	"id": "8483785927349716anonymous"
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
	"id": "8483785927349716anonymous"
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
	"id": "8483785927349716anonymous"
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
	"id": "8483785927349716anonymous"
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
	"id": "38467383935894706anonymous"
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
	"id": "38467383935894706anonymous"
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
	"id": "38467383935894706anonymous"
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
	"id": "38467383935894706anonymous"
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
	"id": "38467383935894706anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies with escaped characters, valid object 1`
## Original schema
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	},
	"id": "866138506181809anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies with escaped characters, valid object 2`
## Original schema
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	},
	"id": "866138506181809anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies with escaped characters, valid object 3`
## Original schema
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	},
	"id": "866138506181809anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies with escaped characters, invalid object 1`
## Original schema
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	},
	"id": "866138506181809anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies with escaped characters, invalid object 2`
## Original schema
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	},
	"id": "866138506181809anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies with escaped characters, invalid object 3`
## Original schema
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	},
	"id": "866138506181809anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `dependencies with escaped characters, invalid object 4`
## Original schema
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	}
}
```
## Schema after validating
```js
{
	"dependencies": {
		"foo\nbar": [
			"foo\rbar"
		],
		"foo\tbar": {
			"minProperties": 4
		},
		"foo'bar": {
			"required": [
				"foo\"bar"
			]
		},
		"foo\"bar": [
			"foo'bar"
		]
	},
	"id": "866138506181809anonymous"
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
	"id": "9314201258592878anonymous"
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
	"id": "9314201258592878anonymous"
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
	"id": "22168446101299555anonymous"
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
	"id": "22168446101299555anonymous"
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
	"id": "22168446101299555anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `heterogeneous enum validation, valid object matches`
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
	"id": "22168446101299555anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `heterogeneous enum validation, extra properties in object is invalid`
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
	"id": "22168446101299555anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `heterogeneous enum-with-null validation, null is valid`
## Original schema
```js
{
	"enum": [
		6,
		null
	]
}
```
## Schema after validating
```js
{
	"enum": [
		6,
		null
	],
	"id": "31913274853122364anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `heterogeneous enum-with-null validation, number is valid`
## Original schema
```js
{
	"enum": [
		6,
		null
	]
}
```
## Schema after validating
```js
{
	"enum": [
		6,
		null
	],
	"id": "31913274853122364anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `heterogeneous enum-with-null validation, something else is invalid`
## Original schema
```js
{
	"enum": [
		6,
		null
	]
}
```
## Schema after validating
```js
{
	"enum": [
		6,
		null
	],
	"id": "31913274853122364anonymous"
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
	"id": "27232255636071945anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enums in properties, wrong foo value`
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
	"id": "27232255636071945anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enums in properties, wrong bar value`
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
	"id": "27232255636071945anonymous"
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
	"id": "27232255636071945anonymous"
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
	"id": "27232255636071945anonymous"
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
	"id": "27232255636071945anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with escaped characters, member 1 is valid`
## Original schema
```js
{
	"enum": [
		"foo\nbar",
		"foo\rbar"
	]
}
```
## Schema after validating
```js
{
	"enum": [
		"foo\nbar",
		"foo\rbar"
	],
	"id": "29574172184574343anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with escaped characters, member 2 is valid`
## Original schema
```js
{
	"enum": [
		"foo\nbar",
		"foo\rbar"
	]
}
```
## Schema after validating
```js
{
	"enum": [
		"foo\nbar",
		"foo\rbar"
	],
	"id": "29574172184574343anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with escaped characters, another string is invalid`
## Original schema
```js
{
	"enum": [
		"foo\nbar",
		"foo\rbar"
	]
}
```
## Schema after validating
```js
{
	"enum": [
		"foo\nbar",
		"foo\rbar"
	],
	"id": "29574172184574343anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with false does not match 0, false is valid`
## Original schema
```js
{
	"enum": [
		false
	]
}
```
## Schema after validating
```js
{
	"enum": [
		false
	],
	"id": "8803490322859358anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with false does not match 0, integer zero is invalid`
## Original schema
```js
{
	"enum": [
		false
	]
}
```
## Schema after validating
```js
{
	"enum": [
		false
	],
	"id": "8803490322859358anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with false does not match 0, float zero is invalid`
## Original schema
```js
{
	"enum": [
		false
	]
}
```
## Schema after validating
```js
{
	"enum": [
		false
	],
	"id": "8803490322859358anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with true does not match 1, true is valid`
## Original schema
```js
{
	"enum": [
		true
	]
}
```
## Schema after validating
```js
{
	"enum": [
		true
	],
	"id": "05704255608945186anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with true does not match 1, integer one is invalid`
## Original schema
```js
{
	"enum": [
		true
	]
}
```
## Schema after validating
```js
{
	"enum": [
		true
	],
	"id": "05704255608945186anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with true does not match 1, float one is invalid`
## Original schema
```js
{
	"enum": [
		true
	]
}
```
## Schema after validating
```js
{
	"enum": [
		true
	],
	"id": "05704255608945186anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with 0 does not match false, false is invalid`
## Original schema
```js
{
	"enum": [
		0
	]
}
```
## Schema after validating
```js
{
	"enum": [
		0
	],
	"id": "44637019816215884anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with 0 does not match false, integer zero is valid`
## Original schema
```js
{
	"enum": [
		0
	]
}
```
## Schema after validating
```js
{
	"enum": [
		0
	],
	"id": "44637019816215884anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with 0 does not match false, float zero is valid`
## Original schema
```js
{
	"enum": [
		0
	]
}
```
## Schema after validating
```js
{
	"enum": [
		0
	],
	"id": "44637019816215884anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with 1 does not match true, true is invalid`
## Original schema
```js
{
	"enum": [
		1
	]
}
```
## Schema after validating
```js
{
	"enum": [
		1
	],
	"id": "9012887004753565anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with 1 does not match true, integer one is valid`
## Original schema
```js
{
	"enum": [
		1
	]
}
```
## Schema after validating
```js
{
	"enum": [
		1
	],
	"id": "9012887004753565anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `enum with 1 does not match true, float one is valid`
## Original schema
```js
{
	"enum": [
		1
	]
}
```
## Schema after validating
```js
{
	"enum": [
		1
	],
	"id": "9012887004753565anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nul characters in strings, match string with nul`
## Original schema
```js
{
	"enum": [
		"hello\u0000there"
	]
}
```
## Schema after validating
```js
{
	"enum": [
		"hello\u0000there"
	],
	"id": "5620588190446829anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nul characters in strings, do not match string lacking nul`
## Original schema
```js
{
	"enum": [
		"hello\u0000there"
	]
}
```
## Schema after validating
```js
{
	"enum": [
		"hello\u0000there"
	],
	"id": "5620588190446829anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, ignores integers`
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
	"id": "8427780562082385anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, ignores floats`
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
	"id": "8427780562082385anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, ignores objects`
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
	"id": "8427780562082385anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, ignores arrays`
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
	"id": "8427780562082385anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, ignores booleans`
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
	"id": "8427780562082385anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, ignores null`
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
	"id": "8427780562082385anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IP addresses, ignores integers`
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
	"id": "5928005948129633anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IP addresses, ignores floats`
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
	"id": "5928005948129633anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IP addresses, ignores objects`
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
	"id": "5928005948129633anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IP addresses, ignores arrays`
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
	"id": "5928005948129633anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IP addresses, ignores booleans`
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
	"id": "5928005948129633anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IP addresses, ignores null`
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
	"id": "5928005948129633anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, ignores integers`
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
	"id": "626337513484124anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, ignores floats`
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
	"id": "626337513484124anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, ignores objects`
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
	"id": "626337513484124anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, ignores arrays`
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
	"id": "626337513484124anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, ignores booleans`
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
	"id": "626337513484124anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, ignores null`
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
	"id": "626337513484124anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of hostnames, ignores integers`
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
	"id": "9000261807785115anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of hostnames, ignores floats`
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
	"id": "9000261807785115anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of hostnames, ignores objects`
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
	"id": "9000261807785115anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of hostnames, ignores arrays`
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
	"id": "9000261807785115anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of hostnames, ignores booleans`
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
	"id": "9000261807785115anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of hostnames, ignores null`
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
	"id": "9000261807785115anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, ignores integers`
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
	"id": "07098964791653306anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, ignores floats`
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
	"id": "07098964791653306anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, ignores objects`
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
	"id": "07098964791653306anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, ignores arrays`
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
	"id": "07098964791653306anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, ignores booleans`
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
	"id": "07098964791653306anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, ignores null`
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
	"id": "07098964791653306anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, ignores integers`
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
	"id": "2318057786098442anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, ignores floats`
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
	"id": "2318057786098442anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, ignores objects`
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
	"id": "2318057786098442anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, ignores arrays`
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
	"id": "2318057786098442anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, ignores booleans`
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
	"id": "2318057786098442anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, ignores null`
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
	"id": "2318057786098442anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `evaluating the same schema location against the same data location twice is not a sign of an infinite loop, passing case`
## Original schema
```js
{
	"definitions": {
		"int": {
			"type": "integer"
		}
	},
	"allOf": [
		{
			"properties": {
				"foo": {
					"$ref": "#/definitions/int"
				}
			}
		},
		{
			"additionalProperties": {
				"$ref": "#/definitions/int"
			}
		}
	]
}
```
## Schema after validating
```js
{
	"definitions": {
		"int": {
			"type": "integer",
			"id": "09862663609319977anonymous#/definitions/int"
		}
	},
	"allOf": [
		{
			"properties": {
				"foo": {
					"$ref": "09862663609319977anonymous#/definitions/int"
				}
			}
		},
		{
			"additionalProperties": {
				"$ref": "09862663609319977anonymous#/definitions/int"
			}
		}
	],
	"id": "09862663609319977anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `evaluating the same schema location against the same data location twice is not a sign of an infinite loop, failing case`
## Original schema
```js
{
	"definitions": {
		"int": {
			"type": "integer"
		}
	},
	"allOf": [
		{
			"properties": {
				"foo": {
					"$ref": "#/definitions/int"
				}
			}
		},
		{
			"additionalProperties": {
				"$ref": "#/definitions/int"
			}
		}
	]
}
```
## Schema after validating
```js
{
	"definitions": {
		"int": {
			"type": "integer",
			"id": "09862663609319977anonymous#/definitions/int"
		}
	},
	"allOf": [
		{
			"properties": {
				"foo": {
					"$ref": "09862663609319977anonymous#/definitions/int"
				}
			}
		},
		{
			"additionalProperties": {
				"$ref": "09862663609319977anonymous#/definitions/int"
			}
		}
	],
	"id": "09862663609319977anonymous"
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
	"id": "9533957049601112anonymous"
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
	"id": "9533957049601112anonymous"
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
	"id": "9533957049601112anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `a schema given for items, JavaScript pseudo-array is valid`
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
	"id": "9533957049601112anonymous"
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
	"id": "05029140503341001anonymous"
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
	"id": "05029140503341001anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `an array of schemas for items, incomplete array of items`
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
	"id": "05029140503341001anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `an array of schemas for items, array with additional items`
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
	"id": "05029140503341001anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `an array of schemas for items, empty array`
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
	"id": "05029140503341001anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `an array of schemas for items, JavaScript pseudo-array is valid`
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
	"id": "05029140503341001anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `items and subitems, valid items`
## Original schema
```js
{
	"definitions": {
		"item": {
			"type": "array",
			"additionalItems": false,
			"items": [
				{
					"$ref": "#/definitions/sub-item"
				},
				{
					"$ref": "#/definitions/sub-item"
				}
			]
		},
		"sub-item": {
			"type": "object",
			"required": [
				"foo"
			]
		}
	},
	"type": "array",
	"additionalItems": false,
	"items": [
		{
			"$ref": "#/definitions/item"
		},
		{
			"$ref": "#/definitions/item"
		},
		{
			"$ref": "#/definitions/item"
		}
	]
}
```
## Schema after validating
```js
{
	"definitions": {
		"item": {
			"type": "array",
			"additionalItems": false,
			"items": [
				{
					"$ref": "14460037545839333anonymous#/definitions/sub-item"
				},
				{
					"$ref": "14460037545839333anonymous#/definitions/sub-item"
				}
			],
			"id": "14460037545839333anonymous#/definitions/item"
		},
		"sub-item": {
			"type": "object",
			"required": [
				"foo"
			],
			"id": "14460037545839333anonymous#/definitions/sub-item"
		}
	},
	"type": "array",
	"additionalItems": false,
	"items": [
		{
			"$ref": "14460037545839333anonymous#/definitions/item"
		},
		{
			"$ref": "14460037545839333anonymous#/definitions/item"
		},
		{
			"$ref": "14460037545839333anonymous#/definitions/item"
		}
	],
	"id": "14460037545839333anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `items and subitems, too many items`
## Original schema
```js
{
	"definitions": {
		"item": {
			"type": "array",
			"additionalItems": false,
			"items": [
				{
					"$ref": "#/definitions/sub-item"
				},
				{
					"$ref": "#/definitions/sub-item"
				}
			]
		},
		"sub-item": {
			"type": "object",
			"required": [
				"foo"
			]
		}
	},
	"type": "array",
	"additionalItems": false,
	"items": [
		{
			"$ref": "#/definitions/item"
		},
		{
			"$ref": "#/definitions/item"
		},
		{
			"$ref": "#/definitions/item"
		}
	]
}
```
## Schema after validating
```js
{
	"definitions": {
		"item": {
			"type": "array",
			"additionalItems": false,
			"items": [
				{
					"$ref": "14460037545839333anonymous#/definitions/sub-item"
				},
				{
					"$ref": "14460037545839333anonymous#/definitions/sub-item"
				}
			],
			"id": "14460037545839333anonymous#/definitions/item"
		},
		"sub-item": {
			"type": "object",
			"required": [
				"foo"
			],
			"id": "14460037545839333anonymous#/definitions/sub-item"
		}
	},
	"type": "array",
	"additionalItems": false,
	"items": [
		{
			"$ref": "14460037545839333anonymous#/definitions/item"
		},
		{
			"$ref": "14460037545839333anonymous#/definitions/item"
		},
		{
			"$ref": "14460037545839333anonymous#/definitions/item"
		}
	],
	"id": "14460037545839333anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `items and subitems, too many sub-items`
## Original schema
```js
{
	"definitions": {
		"item": {
			"type": "array",
			"additionalItems": false,
			"items": [
				{
					"$ref": "#/definitions/sub-item"
				},
				{
					"$ref": "#/definitions/sub-item"
				}
			]
		},
		"sub-item": {
			"type": "object",
			"required": [
				"foo"
			]
		}
	},
	"type": "array",
	"additionalItems": false,
	"items": [
		{
			"$ref": "#/definitions/item"
		},
		{
			"$ref": "#/definitions/item"
		},
		{
			"$ref": "#/definitions/item"
		}
	]
}
```
## Schema after validating
```js
{
	"definitions": {
		"item": {
			"type": "array",
			"additionalItems": false,
			"items": [
				{
					"$ref": "14460037545839333anonymous#/definitions/sub-item"
				},
				{
					"$ref": "14460037545839333anonymous#/definitions/sub-item"
				}
			],
			"id": "14460037545839333anonymous#/definitions/item"
		},
		"sub-item": {
			"type": "object",
			"required": [
				"foo"
			],
			"id": "14460037545839333anonymous#/definitions/sub-item"
		}
	},
	"type": "array",
	"additionalItems": false,
	"items": [
		{
			"$ref": "14460037545839333anonymous#/definitions/item"
		},
		{
			"$ref": "14460037545839333anonymous#/definitions/item"
		},
		{
			"$ref": "14460037545839333anonymous#/definitions/item"
		}
	],
	"id": "14460037545839333anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `items and subitems, wrong item`
## Original schema
```js
{
	"definitions": {
		"item": {
			"type": "array",
			"additionalItems": false,
			"items": [
				{
					"$ref": "#/definitions/sub-item"
				},
				{
					"$ref": "#/definitions/sub-item"
				}
			]
		},
		"sub-item": {
			"type": "object",
			"required": [
				"foo"
			]
		}
	},
	"type": "array",
	"additionalItems": false,
	"items": [
		{
			"$ref": "#/definitions/item"
		},
		{
			"$ref": "#/definitions/item"
		},
		{
			"$ref": "#/definitions/item"
		}
	]
}
```
## Schema after validating
```js
{
	"definitions": {
		"item": {
			"type": "array",
			"additionalItems": false,
			"items": [
				{
					"$ref": "14460037545839333anonymous#/definitions/sub-item"
				},
				{
					"$ref": "14460037545839333anonymous#/definitions/sub-item"
				}
			],
			"id": "14460037545839333anonymous#/definitions/item"
		},
		"sub-item": {
			"type": "object",
			"required": [
				"foo"
			],
			"id": "14460037545839333anonymous#/definitions/sub-item"
		}
	},
	"type": "array",
	"additionalItems": false,
	"items": [
		{
			"$ref": "14460037545839333anonymous#/definitions/item"
		},
		{
			"$ref": "14460037545839333anonymous#/definitions/item"
		},
		{
			"$ref": "14460037545839333anonymous#/definitions/item"
		}
	],
	"id": "14460037545839333anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `items and subitems, wrong sub-item`
## Original schema
```js
{
	"definitions": {
		"item": {
			"type": "array",
			"additionalItems": false,
			"items": [
				{
					"$ref": "#/definitions/sub-item"
				},
				{
					"$ref": "#/definitions/sub-item"
				}
			]
		},
		"sub-item": {
			"type": "object",
			"required": [
				"foo"
			]
		}
	},
	"type": "array",
	"additionalItems": false,
	"items": [
		{
			"$ref": "#/definitions/item"
		},
		{
			"$ref": "#/definitions/item"
		},
		{
			"$ref": "#/definitions/item"
		}
	]
}
```
## Schema after validating
```js
{
	"definitions": {
		"item": {
			"type": "array",
			"additionalItems": false,
			"items": [
				{
					"$ref": "14460037545839333anonymous#/definitions/sub-item"
				},
				{
					"$ref": "14460037545839333anonymous#/definitions/sub-item"
				}
			],
			"id": "14460037545839333anonymous#/definitions/item"
		},
		"sub-item": {
			"type": "object",
			"required": [
				"foo"
			],
			"id": "14460037545839333anonymous#/definitions/sub-item"
		}
	},
	"type": "array",
	"additionalItems": false,
	"items": [
		{
			"$ref": "14460037545839333anonymous#/definitions/item"
		},
		{
			"$ref": "14460037545839333anonymous#/definitions/item"
		},
		{
			"$ref": "14460037545839333anonymous#/definitions/item"
		}
	],
	"id": "14460037545839333anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `items and subitems, fewer items is valid`
## Original schema
```js
{
	"definitions": {
		"item": {
			"type": "array",
			"additionalItems": false,
			"items": [
				{
					"$ref": "#/definitions/sub-item"
				},
				{
					"$ref": "#/definitions/sub-item"
				}
			]
		},
		"sub-item": {
			"type": "object",
			"required": [
				"foo"
			]
		}
	},
	"type": "array",
	"additionalItems": false,
	"items": [
		{
			"$ref": "#/definitions/item"
		},
		{
			"$ref": "#/definitions/item"
		},
		{
			"$ref": "#/definitions/item"
		}
	]
}
```
## Schema after validating
```js
{
	"definitions": {
		"item": {
			"type": "array",
			"additionalItems": false,
			"items": [
				{
					"$ref": "14460037545839333anonymous#/definitions/sub-item"
				},
				{
					"$ref": "14460037545839333anonymous#/definitions/sub-item"
				}
			],
			"id": "14460037545839333anonymous#/definitions/item"
		},
		"sub-item": {
			"type": "object",
			"required": [
				"foo"
			],
			"id": "14460037545839333anonymous#/definitions/sub-item"
		}
	},
	"type": "array",
	"additionalItems": false,
	"items": [
		{
			"$ref": "14460037545839333anonymous#/definitions/item"
		},
		{
			"$ref": "14460037545839333anonymous#/definitions/item"
		},
		{
			"$ref": "14460037545839333anonymous#/definitions/item"
		}
	],
	"id": "14460037545839333anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nested items, valid nested array`
## Original schema
```js
{
	"type": "array",
	"items": {
		"type": "array",
		"items": {
			"type": "array",
			"items": {
				"type": "array",
				"items": {
					"type": "number"
				}
			}
		}
	}
}
```
## Schema after validating
```js
{
	"type": "array",
	"items": {
		"type": "array",
		"items": {
			"type": "array",
			"items": {
				"type": "array",
				"items": {
					"type": "number"
				}
			}
		}
	},
	"id": "02792861265540658anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nested items, nested array with invalid type`
## Original schema
```js
{
	"type": "array",
	"items": {
		"type": "array",
		"items": {
			"type": "array",
			"items": {
				"type": "array",
				"items": {
					"type": "number"
				}
			}
		}
	}
}
```
## Schema after validating
```js
{
	"type": "array",
	"items": {
		"type": "array",
		"items": {
			"type": "array",
			"items": {
				"type": "array",
				"items": {
					"type": "number"
				}
			}
		}
	},
	"id": "02792861265540658anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nested items, not deep enough`
## Original schema
```js
{
	"type": "array",
	"items": {
		"type": "array",
		"items": {
			"type": "array",
			"items": {
				"type": "array",
				"items": {
					"type": "number"
				}
			}
		}
	}
}
```
## Schema after validating
```js
{
	"type": "array",
	"items": {
		"type": "array",
		"items": {
			"type": "array",
			"items": {
				"type": "array",
				"items": {
					"type": "number"
				}
			}
		}
	},
	"id": "02792861265540658anonymous"
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
	"id": "48645715353397834anonymous"
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
	"id": "48645715353397834anonymous"
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
	"id": "48645715353397834anonymous"
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
	"id": "48645715353397834anonymous"
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
	"id": "9423340012195938anonymous"
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
	"id": "9423340012195938anonymous"
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
	"id": "9423340012195938anonymous"
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
	"id": "9423340012195938anonymous"
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
	"id": "9423340012195938anonymous"
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
	"id": "03454321873718591anonymous"
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
	"id": "03454321873718591anonymous"
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
	"id": "03454321873718591anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxProperties validation, ignores arrays`
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
	"id": "03454321873718591anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxProperties validation, ignores strings`
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
	"id": "03454321873718591anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxProperties validation, ignores other non-objects`
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
	"id": "03454321873718591anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxProperties = 0 means the object is empty, no properties is valid`
## Original schema
```js
{
	"maxProperties": 0
}
```
## Schema after validating
```js
{
	"maxProperties": 0,
	"id": "5509585686395155anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maxProperties = 0 means the object is empty, one property is invalid`
## Original schema
```js
{
	"maxProperties": 0
}
```
## Schema after validating
```js
{
	"maxProperties": 0,
	"id": "5509585686395155anonymous"
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
	"id": "08854908657514238anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maximum validation, boundary point is valid`
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
	"id": "08854908657514238anonymous"
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
	"id": "08854908657514238anonymous"
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
	"id": "08854908657514238anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maximum validation with unsigned integer, below the maximum is invalid`
## Original schema
```js
{
	"maximum": 300
}
```
## Schema after validating
```js
{
	"maximum": 300,
	"id": "7494050434215063anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maximum validation with unsigned integer, boundary point integer is valid`
## Original schema
```js
{
	"maximum": 300
}
```
## Schema after validating
```js
{
	"maximum": 300,
	"id": "7494050434215063anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maximum validation with unsigned integer, boundary point float is valid`
## Original schema
```js
{
	"maximum": 300
}
```
## Schema after validating
```js
{
	"maximum": 300,
	"id": "7494050434215063anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maximum validation with unsigned integer, above the maximum is invalid`
## Original schema
```js
{
	"maximum": 300
}
```
## Schema after validating
```js
{
	"maximum": 300,
	"id": "7494050434215063anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maximum validation (explicit false exclusivity), below the maximum is valid`
## Original schema
```js
{
	"maximum": 3,
	"exclusiveMaximum": false
}
```
## Schema after validating
```js
{
	"maximum": 3,
	"exclusiveMaximum": false,
	"id": "2759543582042179anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maximum validation (explicit false exclusivity), boundary point is valid`
## Original schema
```js
{
	"maximum": 3,
	"exclusiveMaximum": false
}
```
## Schema after validating
```js
{
	"maximum": 3,
	"exclusiveMaximum": false,
	"id": "2759543582042179anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maximum validation (explicit false exclusivity), above the maximum is invalid`
## Original schema
```js
{
	"maximum": 3,
	"exclusiveMaximum": false
}
```
## Schema after validating
```js
{
	"maximum": 3,
	"exclusiveMaximum": false,
	"id": "2759543582042179anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `maximum validation (explicit false exclusivity), ignores non-numbers`
## Original schema
```js
{
	"maximum": 3,
	"exclusiveMaximum": false
}
```
## Schema after validating
```js
{
	"maximum": 3,
	"exclusiveMaximum": false,
	"id": "2759543582042179anonymous"
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
	"id": "266352264825672anonymous"
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
	"id": "266352264825672anonymous"
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
	"id": "41712896910700525anonymous"
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
	"id": "41712896910700525anonymous"
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
	"id": "41712896910700525anonymous"
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
	"id": "41712896910700525anonymous"
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
	"id": "9570760558811418anonymous"
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
	"id": "9570760558811418anonymous"
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
	"id": "9570760558811418anonymous"
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
	"id": "9570760558811418anonymous"
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
	"id": "9570760558811418anonymous"
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
	"id": "9577663442950837anonymous"
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
	"id": "9577663442950837anonymous"
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
	"id": "9577663442950837anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minProperties validation, ignores arrays`
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
	"id": "9577663442950837anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minProperties validation, ignores strings`
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
	"id": "9577663442950837anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minProperties validation, ignores other non-objects`
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
	"id": "9577663442950837anonymous"
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
	"id": "13745559892146986anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minimum validation, boundary point is valid`
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
	"id": "13745559892146986anonymous"
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
	"id": "13745559892146986anonymous"
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
	"id": "13745559892146986anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minimum validation (explicit false exclusivity), above the minimum is valid`
## Original schema
```js
{
	"minimum": 1.1,
	"exclusiveMinimum": false
}
```
## Schema after validating
```js
{
	"minimum": 1.1,
	"exclusiveMinimum": false,
	"id": "429577914984953anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minimum validation (explicit false exclusivity), boundary point is valid`
## Original schema
```js
{
	"minimum": 1.1,
	"exclusiveMinimum": false
}
```
## Schema after validating
```js
{
	"minimum": 1.1,
	"exclusiveMinimum": false,
	"id": "429577914984953anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minimum validation (explicit false exclusivity), below the minimum is invalid`
## Original schema
```js
{
	"minimum": 1.1,
	"exclusiveMinimum": false
}
```
## Schema after validating
```js
{
	"minimum": 1.1,
	"exclusiveMinimum": false,
	"id": "429577914984953anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minimum validation (explicit false exclusivity), ignores non-numbers`
## Original schema
```js
{
	"minimum": 1.1,
	"exclusiveMinimum": false
}
```
## Schema after validating
```js
{
	"minimum": 1.1,
	"exclusiveMinimum": false,
	"id": "429577914984953anonymous"
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
	"id": "3208637372237919anonymous"
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
	"id": "3208637372237919anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minimum validation with signed integer, negative above the minimum is valid`
## Original schema
```js
{
	"minimum": -2
}
```
## Schema after validating
```js
{
	"minimum": -2,
	"id": "6917080352125826anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minimum validation with signed integer, positive above the minimum is valid`
## Original schema
```js
{
	"minimum": -2
}
```
## Schema after validating
```js
{
	"minimum": -2,
	"id": "6917080352125826anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minimum validation with signed integer, boundary point is valid`
## Original schema
```js
{
	"minimum": -2
}
```
## Schema after validating
```js
{
	"minimum": -2,
	"id": "6917080352125826anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minimum validation with signed integer, boundary point with float is valid`
## Original schema
```js
{
	"minimum": -2
}
```
## Schema after validating
```js
{
	"minimum": -2,
	"id": "6917080352125826anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minimum validation with signed integer, float below the minimum is invalid`
## Original schema
```js
{
	"minimum": -2
}
```
## Schema after validating
```js
{
	"minimum": -2,
	"id": "6917080352125826anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minimum validation with signed integer, int below the minimum is invalid`
## Original schema
```js
{
	"minimum": -2
}
```
## Schema after validating
```js
{
	"minimum": -2,
	"id": "6917080352125826anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `minimum validation with signed integer, ignores non-numbers`
## Original schema
```js
{
	"minimum": -2
}
```
## Schema after validating
```js
{
	"minimum": -2,
	"id": "6917080352125826anonymous"
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
	"id": "3015594100678085anonymous"
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
	"id": "3015594100678085anonymous"
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
	"id": "3015594100678085anonymous"
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
	"id": "33195169682505155anonymous"
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
	"id": "33195169682505155anonymous"
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
	"id": "33195169682505155anonymous"
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
	"id": "05998958208375038anonymous"
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
	"id": "05998958208375038anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `invalid instance should not raise error when float division = inf, always invalid, but naive implementations may raise an overflow error`
## Original schema
```js
{
	"type": "integer",
	"multipleOf": 0.123456789
}
```
## Schema after validating
```js
{
	"type": "integer",
	"multipleOf": 0.123456789,
	"id": "744374620347652anonymous"
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
	"id": "22693066436712828anonymous"
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
	"id": "22693066436712828anonymous"
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
	"id": "37693226642214395anonymous"
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
	"id": "37693226642214395anonymous"
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
	"id": "37693226642214395anonymous"
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
	"id": "7745440733527491anonymous"
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
	"id": "7745440733527491anonymous"
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
	"id": "7745440733527491anonymous"
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
	"id": "6085245897960503anonymous"
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
	"id": "6085245897960503anonymous"
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
	"id": "20276384726590968anonymous"
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
	"id": "20276384726590968anonymous"
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
	"id": "20276384726590968anonymous"
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
	"id": "20276384726590968anonymous"
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
	"id": "28237794358880897anonymous"
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
	"id": "28237794358880897anonymous"
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
	"id": "28237794358880897anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf complex types, first oneOf valid (complex)`
## Original schema
```js
{
	"oneOf": [
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
	"oneOf": [
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
	"id": "4513375797166559anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf complex types, second oneOf valid (complex)`
## Original schema
```js
{
	"oneOf": [
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
	"oneOf": [
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
	"id": "4513375797166559anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf complex types, both oneOf valid (complex)`
## Original schema
```js
{
	"oneOf": [
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
	"oneOf": [
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
	"id": "4513375797166559anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf complex types, neither oneOf valid (complex)`
## Original schema
```js
{
	"oneOf": [
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
	"oneOf": [
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
	"id": "4513375797166559anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf with empty schema, one valid - valid`
## Original schema
```js
{
	"oneOf": [
		{
			"type": "number"
		},
		{}
	]
}
```
## Schema after validating
```js
{
	"oneOf": [
		{
			"type": "number"
		},
		{}
	],
	"id": "5338103414485522anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf with empty schema, both valid - invalid`
## Original schema
```js
{
	"oneOf": [
		{
			"type": "number"
		},
		{}
	]
}
```
## Schema after validating
```js
{
	"oneOf": [
		{
			"type": "number"
		},
		{}
	],
	"id": "5338103414485522anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf with required, both invalid - invalid`
## Original schema
```js
{
	"type": "object",
	"oneOf": [
		{
			"required": [
				"foo",
				"bar"
			]
		},
		{
			"required": [
				"foo",
				"baz"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"type": "object",
	"oneOf": [
		{
			"required": [
				"foo",
				"bar"
			]
		},
		{
			"required": [
				"foo",
				"baz"
			]
		}
	],
	"id": "6831605833994445anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf with required, first valid - valid`
## Original schema
```js
{
	"type": "object",
	"oneOf": [
		{
			"required": [
				"foo",
				"bar"
			]
		},
		{
			"required": [
				"foo",
				"baz"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"type": "object",
	"oneOf": [
		{
			"required": [
				"foo",
				"bar"
			]
		},
		{
			"required": [
				"foo",
				"baz"
			]
		}
	],
	"id": "6831605833994445anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf with required, second valid - valid`
## Original schema
```js
{
	"type": "object",
	"oneOf": [
		{
			"required": [
				"foo",
				"bar"
			]
		},
		{
			"required": [
				"foo",
				"baz"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"type": "object",
	"oneOf": [
		{
			"required": [
				"foo",
				"bar"
			]
		},
		{
			"required": [
				"foo",
				"baz"
			]
		}
	],
	"id": "6831605833994445anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf with required, both valid - invalid`
## Original schema
```js
{
	"type": "object",
	"oneOf": [
		{
			"required": [
				"foo",
				"bar"
			]
		},
		{
			"required": [
				"foo",
				"baz"
			]
		}
	]
}
```
## Schema after validating
```js
{
	"type": "object",
	"oneOf": [
		{
			"required": [
				"foo",
				"bar"
			]
		},
		{
			"required": [
				"foo",
				"baz"
			]
		}
	],
	"id": "6831605833994445anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf with missing optional property, first oneOf valid`
## Original schema
```js
{
	"oneOf": [
		{
			"properties": {
				"bar": {},
				"baz": {}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {}
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
	"oneOf": [
		{
			"properties": {
				"bar": {},
				"baz": {}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {}
			},
			"required": [
				"foo"
			]
		}
	],
	"id": "5238848479222433anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf with missing optional property, second oneOf valid`
## Original schema
```js
{
	"oneOf": [
		{
			"properties": {
				"bar": {},
				"baz": {}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {}
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
	"oneOf": [
		{
			"properties": {
				"bar": {},
				"baz": {}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {}
			},
			"required": [
				"foo"
			]
		}
	],
	"id": "5238848479222433anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf with missing optional property, both oneOf valid`
## Original schema
```js
{
	"oneOf": [
		{
			"properties": {
				"bar": {},
				"baz": {}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {}
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
	"oneOf": [
		{
			"properties": {
				"bar": {},
				"baz": {}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {}
			},
			"required": [
				"foo"
			]
		}
	],
	"id": "5238848479222433anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `oneOf with missing optional property, neither oneOf valid`
## Original schema
```js
{
	"oneOf": [
		{
			"properties": {
				"bar": {},
				"baz": {}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {}
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
	"oneOf": [
		{
			"properties": {
				"bar": {},
				"baz": {}
			},
			"required": [
				"bar"
			]
		},
		{
			"properties": {
				"foo": {}
			},
			"required": [
				"foo"
			]
		}
	],
	"id": "5238848479222433anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nested oneOf, to check validation semantics, null is valid`
## Original schema
```js
{
	"oneOf": [
		{
			"oneOf": [
				{
					"type": "null"
				}
			]
		}
	]
}
```
## Schema after validating
```js
{
	"oneOf": [
		{
			"oneOf": [
				{
					"type": "null"
				}
			]
		}
	],
	"id": "6579549911282689anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `nested oneOf, to check validation semantics, anything non-null is invalid`
## Original schema
```js
{
	"oneOf": [
		{
			"oneOf": [
				{
					"type": "null"
				}
			]
		}
	]
}
```
## Schema after validating
```js
{
	"oneOf": [
		{
			"oneOf": [
				{
					"type": "null"
				}
			]
		}
	],
	"id": "6579549911282689anonymous"
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
	"id": "5683923661432726anonymous"
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
	"id": "21946048818626207anonymous"
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
	"id": "7255685404273997anonymous"
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
	"id": "054333633031574236anonymous"
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
	"id": "9392913897230499anonymous"
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
	"id": "30817505133990153anonymous"
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
	"id": "4022291714387265anonymous"
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
	"id": "18248808694520435anonymous"
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
	"id": "9864712603279242anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 regex $ does not match trailing newline, matches in Python, but should not in jsonschema`
## Original schema
```js
{
	"type": "string",
	"pattern": "^abc$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^abc$",
	"id": "42031296792108597anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 regex $ does not match trailing newline, should match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^abc$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^abc$",
	"id": "42031296792108597anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 regex converts \t to horizontal tab, does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\t$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\t$",
	"id": "6868980195286551anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 regex converts \t to horizontal tab, matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\t$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\t$",
	"id": "6868980195286551anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 regex escapes control codes with \c and upper letter, does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\cC$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\cC$",
	"id": "8178935149339219anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 regex escapes control codes with \c and upper letter, matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\cC$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\cC$",
	"id": "8178935149339219anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 regex escapes control codes with \c and lower letter, does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\cc$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\cc$",
	"id": "39453650811915253anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 regex escapes control codes with \c and lower letter, matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\cc$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\cc$",
	"id": "39453650811915253anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \d matches ascii digits only, ASCII zero matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\d$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\d$",
	"id": "6535849660579207anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \d matches ascii digits only, NKO DIGIT ZERO does not match (unlike e.g. Python)`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\d$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\d$",
	"id": "6535849660579207anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \d matches ascii digits only, NKO DIGIT ZERO (as \u escape) does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\d$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\d$",
	"id": "6535849660579207anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \D matches everything but ascii digits, ASCII zero does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\D$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\D$",
	"id": "3032760098324021anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \D matches everything but ascii digits, NKO DIGIT ZERO matches (unlike e.g. Python)`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\D$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\D$",
	"id": "3032760098324021anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \D matches everything but ascii digits, NKO DIGIT ZERO (as \u escape) matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\D$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\D$",
	"id": "3032760098324021anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \w matches ascii letters only, ASCII 'a' matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\w$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\w$",
	"id": "2685826635925468anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \w matches ascii letters only, latin-1 e-acute does not match (unlike e.g. Python)`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\w$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\w$",
	"id": "2685826635925468anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \W matches everything but ascii letters, ASCII 'a' does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\W$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\W$",
	"id": "8194688375408199anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \W matches everything but ascii letters, latin-1 e-acute matches (unlike e.g. Python)`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\W$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\W$",
	"id": "8194688375408199anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \s matches whitespace, ASCII space matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\s$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\s$",
	"id": "4569163182484146anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \s matches whitespace, Character tabulation matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\s$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\s$",
	"id": "4569163182484146anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \s matches whitespace, Line tabulation matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\s$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\s$",
	"id": "4569163182484146anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \s matches whitespace, Form feed matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\s$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\s$",
	"id": "4569163182484146anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \s matches whitespace, latin-1 non-breaking-space matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\s$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\s$",
	"id": "4569163182484146anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \s matches whitespace, zero-width whitespace matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\s$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\s$",
	"id": "4569163182484146anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \s matches whitespace, line feed matches (line terminator)`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\s$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\s$",
	"id": "4569163182484146anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \s matches whitespace, paragraph separator matches (line terminator)`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\s$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\s$",
	"id": "4569163182484146anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \s matches whitespace, EM SPACE matches (Space_Separator)`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\s$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\s$",
	"id": "4569163182484146anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \s matches whitespace, Non-whitespace control does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\s$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\s$",
	"id": "4569163182484146anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \s matches whitespace, Non-whitespace does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\s$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\s$",
	"id": "4569163182484146anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \S matches everything but whitespace, ASCII space does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\S$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\S$",
	"id": "23707420821385305anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \S matches everything but whitespace, Character tabulation does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\S$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\S$",
	"id": "23707420821385305anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \S matches everything but whitespace, Line tabulation does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\S$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\S$",
	"id": "23707420821385305anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \S matches everything but whitespace, Form feed does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\S$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\S$",
	"id": "23707420821385305anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \S matches everything but whitespace, latin-1 non-breaking-space does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\S$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\S$",
	"id": "23707420821385305anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \S matches everything but whitespace, zero-width whitespace does not match`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\S$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\S$",
	"id": "23707420821385305anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \S matches everything but whitespace, line feed does not match (line terminator)`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\S$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\S$",
	"id": "23707420821385305anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \S matches everything but whitespace, paragraph separator does not match (line terminator)`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\S$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\S$",
	"id": "23707420821385305anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \S matches everything but whitespace, EM SPACE does not match (Space_Separator)`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\S$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\S$",
	"id": "23707420821385305anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \S matches everything but whitespace, Non-whitespace control matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\S$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\S$",
	"id": "23707420821385305anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ECMA 262 \S matches everything but whitespace, Non-whitespace matches`
## Original schema
```js
{
	"type": "string",
	"pattern": "^\\S$"
}
```
## Schema after validating
```js
{
	"type": "string",
	"pattern": "^\\S$",
	"id": "23707420821385305anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `all integers are multiples of 0.5, if overflow is handled, valid if optional overflow handling is implemented`
## Original schema
```js
{
	"type": "integer",
	"multipleOf": 0.5
}
```
## Schema after validating
```js
{
	"type": "integer",
	"multipleOf": 0.5,
	"id": "16177301161452884anonymous"
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
	"id": "8049177955072979anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, a valid date-time string without second fraction`
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
	"id": "8049177955072979anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, a valid date-time string with plus offset`
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
	"id": "8049177955072979anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, a valid date-time string with minus offset`
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
	"id": "8049177955072979anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, a invalid day in date-time string`
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
	"id": "8049177955072979anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, an invalid offset in date-time string`
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
	"id": "8049177955072979anonymous"
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
	"id": "8049177955072979anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, case-insensitive T and Z`
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
	"id": "8049177955072979anonymous"
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
	"id": "8049177955072979anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, invalid non-padded month dates`
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
	"id": "8049177955072979anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of date-time strings, invalid non-padded day dates`
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
	"id": "8049177955072979anonymous"
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
	"id": "1205674380672761anonymous"
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
	"id": "1205674380672761anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, tilde in local part is valid`
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
	"id": "1205674380672761anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, tilde before local part is valid`
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
	"id": "1205674380672761anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, tilde after local part is valid`
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
	"id": "1205674380672761anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, dot before local part is not valid`
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
	"id": "1205674380672761anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, dot after local part is not valid`
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
	"id": "1205674380672761anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, two separated dots inside local part are valid`
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
	"id": "1205674380672761anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of e-mail addresses, two subsequent dots inside local part are not valid`
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
	"id": "1205674380672761anonymous"
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
	"id": "29516751843566946anonymous"
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
	"id": "29516751843566946anonymous"
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
	"id": "29516751843566946anonymous"
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
	"id": "29516751843566946anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of host names, starts with hyphen`
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
	"id": "29516751843566946anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of host names, ends with hyphen`
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
	"id": "29516751843566946anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of host names, starts with underscore`
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
	"id": "29516751843566946anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of host names, ends with underscore`
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
	"id": "29516751843566946anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of host names, contains underscore`
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
	"id": "29516751843566946anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of host names, maximum label length`
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
	"id": "29516751843566946anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of host names, exceeds maximum label length`
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
	"id": "29516751843566946anonymous"
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
	"id": "7909333255214028anonymous"
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
	"id": "7909333255214028anonymous"
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
	"id": "7909333255214028anonymous"
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
	"id": "7909333255214028anonymous"
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
	"id": "7909333255214028anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IP addresses, an IP address as an integer (decimal)`
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
	"id": "7909333255214028anonymous"
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
	"id": "6194789556264975anonymous"
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
	"id": "6194789556264975anonymous"
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
	"id": "6194789556264975anonymous"
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
	"id": "6194789556264975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, no digits is valid`
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
	"id": "6194789556264975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, leading colons is valid`
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
	"id": "6194789556264975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, trailing colons is valid`
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
	"id": "6194789556264975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, missing leading octet is invalid`
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
	"id": "6194789556264975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, missing trailing octet is invalid`
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
	"id": "6194789556264975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, missing leading octet with omitted octets later`
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
	"id": "6194789556264975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, two sets of double colons is invalid`
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
	"id": "6194789556264975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, mixed format with the ipv4 section as decimal octets`
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
	"id": "6194789556264975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, mixed format with double colons between the sections`
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
	"id": "6194789556264975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, mixed format with ipv4 section with octet out of range`
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
	"id": "6194789556264975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, mixed format with ipv4 section with a hex octet`
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
	"id": "6194789556264975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, mixed format with leading double colons (ipv4-mapped ipv6 address)`
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
	"id": "6194789556264975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, triple colons is invalid`
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
	"id": "6194789556264975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, 8 octets`
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
	"id": "6194789556264975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, insufficient octets without double colons`
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
	"id": "6194789556264975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, no colons is invalid`
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
	"id": "6194789556264975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, ipv4 is not ipv6`
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
	"id": "6194789556264975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, ipv4 segment must have 4 octets`
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
	"id": "6194789556264975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, leading whitespace is invalid`
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
	"id": "6194789556264975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, trailing whitespace is invalid`
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
	"id": "6194789556264975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, netmask is not a part of ipv6 address`
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
	"id": "6194789556264975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, zone id is not a part of ipv6 address`
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
	"id": "6194789556264975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, a long valid ipv6`
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
	"id": "6194789556264975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, a long invalid ipv6, below length limit, first`
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
	"id": "6194789556264975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of IPv6 addresses, a long invalid ipv6, below length limit, second`
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
	"id": "6194789556264975anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid URL with anchor tag`
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
	"id": "8088118563807027anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid URL with anchor tag and parantheses`
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
	"id": "8088118563807027anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid URL with URL-encoded stuff`
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
	"id": "8088118563807027anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid puny-coded URL `
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
	"id": "8088118563807027anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid URL with many special characters`
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
	"id": "8088118563807027anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid URL based on IPv4`
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
	"id": "8088118563807027anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid URL with ftp scheme`
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
	"id": "8088118563807027anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid URL for a simple text file`
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
	"id": "8088118563807027anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid URL `
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
	"id": "8088118563807027anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid mailto URI`
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
	"id": "8088118563807027anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid newsgroup URI`
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
	"id": "8088118563807027anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid tel URI`
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
	"id": "8088118563807027anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, a valid URN`
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
	"id": "8088118563807027anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, an invalid protocol-relative URI Reference`
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
	"id": "8088118563807027anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, an invalid relative URI Reference`
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
	"id": "8088118563807027anonymous"
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
	"id": "8088118563807027anonymous"
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
	"id": "8088118563807027anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, an invalid URI with spaces`
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
	"id": "8088118563807027anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, an invalid URI with spaces and missing scheme`
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
	"id": "8088118563807027anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `validation of URIs, an invalid URI with comma in scheme`
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
	"id": "8088118563807027anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Proper UTF-16 surrogate pair handling: pattern, matches empty`
## Original schema
```js
{
	"pattern": "^🐲*$"
}
```
## Schema after validating
```js
{
	"pattern": "^🐲*$",
	"id": "5356638248650558anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Proper UTF-16 surrogate pair handling: pattern, matches single`
## Original schema
```js
{
	"pattern": "^🐲*$"
}
```
## Schema after validating
```js
{
	"pattern": "^🐲*$",
	"id": "5356638248650558anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Proper UTF-16 surrogate pair handling: pattern, matches two`
## Original schema
```js
{
	"pattern": "^🐲*$"
}
```
## Schema after validating
```js
{
	"pattern": "^🐲*$",
	"id": "5356638248650558anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Proper UTF-16 surrogate pair handling: pattern, doesn't match one`
## Original schema
```js
{
	"pattern": "^🐲*$"
}
```
## Schema after validating
```js
{
	"pattern": "^🐲*$",
	"id": "5356638248650558anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Proper UTF-16 surrogate pair handling: pattern, doesn't match two`
## Original schema
```js
{
	"pattern": "^🐲*$"
}
```
## Schema after validating
```js
{
	"pattern": "^🐲*$",
	"id": "5356638248650558anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Proper UTF-16 surrogate pair handling: pattern, doesn't match one ASCII`
## Original schema
```js
{
	"pattern": "^🐲*$"
}
```
## Schema after validating
```js
{
	"pattern": "^🐲*$",
	"id": "5356638248650558anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Proper UTF-16 surrogate pair handling: pattern, doesn't match two ASCII`
## Original schema
```js
{
	"pattern": "^🐲*$"
}
```
## Schema after validating
```js
{
	"pattern": "^🐲*$",
	"id": "5356638248650558anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Proper UTF-16 surrogate pair handling: patternProperties, matches empty`
## Original schema
```js
{
	"patternProperties": {
		"^🐲*$": {
			"type": "integer"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"^🐲*$": {
			"type": "integer"
		}
	},
	"id": "8486817625455283anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Proper UTF-16 surrogate pair handling: patternProperties, matches single`
## Original schema
```js
{
	"patternProperties": {
		"^🐲*$": {
			"type": "integer"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"^🐲*$": {
			"type": "integer"
		}
	},
	"id": "8486817625455283anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Proper UTF-16 surrogate pair handling: patternProperties, matches two`
## Original schema
```js
{
	"patternProperties": {
		"^🐲*$": {
			"type": "integer"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"^🐲*$": {
			"type": "integer"
		}
	},
	"id": "8486817625455283anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Proper UTF-16 surrogate pair handling: patternProperties, doesn't match one`
## Original schema
```js
{
	"patternProperties": {
		"^🐲*$": {
			"type": "integer"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"^🐲*$": {
			"type": "integer"
		}
	},
	"id": "8486817625455283anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Proper UTF-16 surrogate pair handling: patternProperties, doesn't match two`
## Original schema
```js
{
	"patternProperties": {
		"^🐲*$": {
			"type": "integer"
		}
	}
}
```
## Schema after validating
```js
{
	"patternProperties": {
		"^🐲*$": {
			"type": "integer"
		}
	},
	"id": "8486817625455283anonymous"
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
	"id": "22016196336851368anonymous"
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
	"id": "358391729475003anonymous"
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
	"id": "358391729475003anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `pattern validation, ignores booleans`
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
	"id": "358391729475003anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `pattern validation, ignores integers`
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
	"id": "358391729475003anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `pattern validation, ignores floats`
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
	"id": "358391729475003anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `pattern validation, ignores objects`
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
	"id": "358391729475003anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `pattern validation, ignores arrays`
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
	"id": "358391729475003anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `pattern validation, ignores null`
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
	"id": "358391729475003anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `pattern is not anchored, matches a substring`
## Original schema
```js
{
	"pattern": "a+"
}
```
## Schema after validating
```js
{
	"pattern": "a+",
	"id": "8669550111880342anonymous"
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
	"id": "6128562813012846anonymous"
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
	"id": "6128562813012846anonymous"
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
	"id": "6128562813012846anonymous"
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
	"id": "6128562813012846anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `patternProperties validates properties matching a regex, ignores arrays`
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
	"id": "6128562813012846anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `patternProperties validates properties matching a regex, ignores strings`
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
	"id": "6128562813012846anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `patternProperties validates properties matching a regex, ignores other non-objects`
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
	"id": "6128562813012846anonymous"
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
	"id": "36057497437719976anonymous"
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
	"id": "36057497437719976anonymous"
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
	"id": "36057497437719976anonymous"
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
	"id": "36057497437719976anonymous"
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
	"id": "36057497437719976anonymous"
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
	"id": "36057497437719976anonymous"
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
	"id": "425421556578947anonymous"
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
	"id": "425421556578947anonymous"
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
	"id": "425421556578947anonymous"
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
	"id": "425421556578947anonymous"
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
	"id": "3504748833918965anonymous"
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
	"id": "3504748833918965anonymous"
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
	"id": "3504748833918965anonymous"
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
	"id": "3504748833918965anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object properties validation, ignores arrays`
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
	"id": "3504748833918965anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `object properties validation, ignores other non-objects`
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
	"id": "3504748833918965anonymous"
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
	"id": "7599098644454674anonymous"
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
	"id": "7599098644454674anonymous"
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
	"id": "7599098644454674anonymous"
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
	"id": "7599098644454674anonymous"
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
	"id": "7599098644454674anonymous"
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
	"id": "7599098644454674anonymous"
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
	"id": "7599098644454674anonymous"
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
	"id": "7599098644454674anonymous"
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
			"$ref": "0890832054488131anonymous#"
		}
	},
	"additionalProperties": false,
	"id": "0890832054488131anonymous"
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
			"$ref": "0890832054488131anonymous#"
		}
	},
	"additionalProperties": false,
	"id": "0890832054488131anonymous"
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
			"$ref": "0890832054488131anonymous#"
		}
	},
	"additionalProperties": false,
	"id": "0890832054488131anonymous"
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
			"$ref": "0890832054488131anonymous#"
		}
	},
	"additionalProperties": false,
	"id": "0890832054488131anonymous"
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
			"id": "46556981031209754anonymous#/properties/foo"
		},
		"bar": {
			"$ref": "46556981031209754anonymous#/properties/foo"
		}
	},
	"id": "46556981031209754anonymous"
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
			"id": "46556981031209754anonymous#/properties/foo"
		},
		"bar": {
			"$ref": "46556981031209754anonymous#/properties/foo"
		}
	},
	"id": "46556981031209754anonymous"
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
			"id": "3772517449435746anonymous#/items/0"
		},
		{
			"$ref": "3772517449435746anonymous#/items/0"
		}
	],
	"id": "3772517449435746anonymous"
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
			"id": "3772517449435746anonymous#/items/0"
		},
		{
			"$ref": "3772517449435746anonymous#/items/0"
		}
	],
	"id": "3772517449435746anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `escaped pointer ref, slash invalid`
## Original schema
```js
{
	"definitions": {
		"tilde~field": {
			"type": "integer"
		},
		"slash/field": {
			"type": "integer"
		},
		"percent%field": {
			"type": "integer"
		}
	},
	"properties": {
		"tilde": {
			"$ref": "#/definitions/tilde~0field"
		},
		"slash": {
			"$ref": "#/definitions/slash~1field"
		},
		"percent": {
			"$ref": "#/definitions/percent%25field"
		}
	}
}
```
## Schema after validating
```js
{
	"definitions": {
		"tilde~field": {
			"type": "integer",
			"id": "03604210844425437anonymous#/definitions/tilde~0field"
		},
		"slash/field": {
			"type": "integer",
			"id": "03604210844425437anonymous#/definitions/slash~1field"
		},
		"percent%field": {
			"type": "integer",
			"id": "03604210844425437anonymous#/definitions/percent%25field"
		}
	},
	"properties": {
		"tilde": {
			"$ref": "03604210844425437anonymous#/definitions/tilde~0field"
		},
		"slash": {
			"$ref": "03604210844425437anonymous#/definitions/slash~1field"
		},
		"percent": {
			"$ref": "03604210844425437anonymous#/definitions/percent%25field"
		}
	},
	"id": "03604210844425437anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `escaped pointer ref, tilde invalid`
## Original schema
```js
{
	"definitions": {
		"tilde~field": {
			"type": "integer"
		},
		"slash/field": {
			"type": "integer"
		},
		"percent%field": {
			"type": "integer"
		}
	},
	"properties": {
		"tilde": {
			"$ref": "#/definitions/tilde~0field"
		},
		"slash": {
			"$ref": "#/definitions/slash~1field"
		},
		"percent": {
			"$ref": "#/definitions/percent%25field"
		}
	}
}
```
## Schema after validating
```js
{
	"definitions": {
		"tilde~field": {
			"type": "integer",
			"id": "03604210844425437anonymous#/definitions/tilde~0field"
		},
		"slash/field": {
			"type": "integer",
			"id": "03604210844425437anonymous#/definitions/slash~1field"
		},
		"percent%field": {
			"type": "integer",
			"id": "03604210844425437anonymous#/definitions/percent%25field"
		}
	},
	"properties": {
		"tilde": {
			"$ref": "03604210844425437anonymous#/definitions/tilde~0field"
		},
		"slash": {
			"$ref": "03604210844425437anonymous#/definitions/slash~1field"
		},
		"percent": {
			"$ref": "03604210844425437anonymous#/definitions/percent%25field"
		}
	},
	"id": "03604210844425437anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `escaped pointer ref, percent invalid`
## Original schema
```js
{
	"definitions": {
		"tilde~field": {
			"type": "integer"
		},
		"slash/field": {
			"type": "integer"
		},
		"percent%field": {
			"type": "integer"
		}
	},
	"properties": {
		"tilde": {
			"$ref": "#/definitions/tilde~0field"
		},
		"slash": {
			"$ref": "#/definitions/slash~1field"
		},
		"percent": {
			"$ref": "#/definitions/percent%25field"
		}
	}
}
```
## Schema after validating
```js
{
	"definitions": {
		"tilde~field": {
			"type": "integer",
			"id": "03604210844425437anonymous#/definitions/tilde~0field"
		},
		"slash/field": {
			"type": "integer",
			"id": "03604210844425437anonymous#/definitions/slash~1field"
		},
		"percent%field": {
			"type": "integer",
			"id": "03604210844425437anonymous#/definitions/percent%25field"
		}
	},
	"properties": {
		"tilde": {
			"$ref": "03604210844425437anonymous#/definitions/tilde~0field"
		},
		"slash": {
			"$ref": "03604210844425437anonymous#/definitions/slash~1field"
		},
		"percent": {
			"$ref": "03604210844425437anonymous#/definitions/percent%25field"
		}
	},
	"id": "03604210844425437anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `escaped pointer ref, slash valid`
## Original schema
```js
{
	"definitions": {
		"tilde~field": {
			"type": "integer"
		},
		"slash/field": {
			"type": "integer"
		},
		"percent%field": {
			"type": "integer"
		}
	},
	"properties": {
		"tilde": {
			"$ref": "#/definitions/tilde~0field"
		},
		"slash": {
			"$ref": "#/definitions/slash~1field"
		},
		"percent": {
			"$ref": "#/definitions/percent%25field"
		}
	}
}
```
## Schema after validating
```js
{
	"definitions": {
		"tilde~field": {
			"type": "integer",
			"id": "03604210844425437anonymous#/definitions/tilde~0field"
		},
		"slash/field": {
			"type": "integer",
			"id": "03604210844425437anonymous#/definitions/slash~1field"
		},
		"percent%field": {
			"type": "integer",
			"id": "03604210844425437anonymous#/definitions/percent%25field"
		}
	},
	"properties": {
		"tilde": {
			"$ref": "03604210844425437anonymous#/definitions/tilde~0field"
		},
		"slash": {
			"$ref": "03604210844425437anonymous#/definitions/slash~1field"
		},
		"percent": {
			"$ref": "03604210844425437anonymous#/definitions/percent%25field"
		}
	},
	"id": "03604210844425437anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `escaped pointer ref, tilde valid`
## Original schema
```js
{
	"definitions": {
		"tilde~field": {
			"type": "integer"
		},
		"slash/field": {
			"type": "integer"
		},
		"percent%field": {
			"type": "integer"
		}
	},
	"properties": {
		"tilde": {
			"$ref": "#/definitions/tilde~0field"
		},
		"slash": {
			"$ref": "#/definitions/slash~1field"
		},
		"percent": {
			"$ref": "#/definitions/percent%25field"
		}
	}
}
```
## Schema after validating
```js
{
	"definitions": {
		"tilde~field": {
			"type": "integer",
			"id": "03604210844425437anonymous#/definitions/tilde~0field"
		},
		"slash/field": {
			"type": "integer",
			"id": "03604210844425437anonymous#/definitions/slash~1field"
		},
		"percent%field": {
			"type": "integer",
			"id": "03604210844425437anonymous#/definitions/percent%25field"
		}
	},
	"properties": {
		"tilde": {
			"$ref": "03604210844425437anonymous#/definitions/tilde~0field"
		},
		"slash": {
			"$ref": "03604210844425437anonymous#/definitions/slash~1field"
		},
		"percent": {
			"$ref": "03604210844425437anonymous#/definitions/percent%25field"
		}
	},
	"id": "03604210844425437anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `escaped pointer ref, percent valid`
## Original schema
```js
{
	"definitions": {
		"tilde~field": {
			"type": "integer"
		},
		"slash/field": {
			"type": "integer"
		},
		"percent%field": {
			"type": "integer"
		}
	},
	"properties": {
		"tilde": {
			"$ref": "#/definitions/tilde~0field"
		},
		"slash": {
			"$ref": "#/definitions/slash~1field"
		},
		"percent": {
			"$ref": "#/definitions/percent%25field"
		}
	}
}
```
## Schema after validating
```js
{
	"definitions": {
		"tilde~field": {
			"type": "integer",
			"id": "03604210844425437anonymous#/definitions/tilde~0field"
		},
		"slash/field": {
			"type": "integer",
			"id": "03604210844425437anonymous#/definitions/slash~1field"
		},
		"percent%field": {
			"type": "integer",
			"id": "03604210844425437anonymous#/definitions/percent%25field"
		}
	},
	"properties": {
		"tilde": {
			"$ref": "03604210844425437anonymous#/definitions/tilde~0field"
		},
		"slash": {
			"$ref": "03604210844425437anonymous#/definitions/slash~1field"
		},
		"percent": {
			"$ref": "03604210844425437anonymous#/definitions/percent%25field"
		}
	},
	"id": "03604210844425437anonymous"
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
			"$ref": "29899682343721157anonymous#/definitions/a"
		},
		"c": {
			"$ref": "29899682343721157anonymous#/definitions/b"
		}
	},
	"$ref": "29899682343721157anonymous#/definitions/c",
	"id": "29899682343721157anonymous"
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
			"$ref": "29899682343721157anonymous#/definitions/a"
		},
		"c": {
			"$ref": "29899682343721157anonymous#/definitions/b"
		}
	},
	"$ref": "29899682343721157anonymous#/definitions/c",
	"id": "29899682343721157anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ref overrides any sibling keywords, ref valid`
## Original schema
```js
{
	"definitions": {
		"reffed": {
			"type": "array"
		}
	},
	"properties": {
		"foo": {
			"$ref": "#/definitions/reffed",
			"maxItems": 2
		}
	}
}
```
## Schema after validating
```js
{
	"definitions": {
		"reffed": {
			"type": "array",
			"id": "4371609885000318anonymous#/definitions/reffed"
		}
	},
	"properties": {
		"foo": {
			"$ref": "4371609885000318anonymous#/definitions/reffed",
			"maxItems": 2
		}
	},
	"id": "4371609885000318anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ref overrides any sibling keywords, ref valid, maxItems ignored`
## Original schema
```js
{
	"definitions": {
		"reffed": {
			"type": "array"
		}
	},
	"properties": {
		"foo": {
			"$ref": "#/definitions/reffed",
			"maxItems": 2
		}
	}
}
```
## Schema after validating
```js
{
	"definitions": {
		"reffed": {
			"type": "array",
			"id": "4371609885000318anonymous#/definitions/reffed"
		}
	},
	"properties": {
		"foo": {
			"$ref": "4371609885000318anonymous#/definitions/reffed",
			"maxItems": 2
		}
	},
	"id": "4371609885000318anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `ref overrides any sibling keywords, ref invalid`
## Original schema
```js
{
	"definitions": {
		"reffed": {
			"type": "array"
		}
	},
	"properties": {
		"foo": {
			"$ref": "#/definitions/reffed",
			"maxItems": 2
		}
	}
}
```
## Schema after validating
```js
{
	"definitions": {
		"reffed": {
			"type": "array",
			"id": "4371609885000318anonymous#/definitions/reffed"
		}
	},
	"properties": {
		"foo": {
			"$ref": "4371609885000318anonymous#/definitions/reffed",
			"maxItems": 2
		}
	},
	"id": "4371609885000318anonymous"
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
	"id": "8320779755628702anonymous"
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
	"id": "8320779755628702anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `property named $ref that is not a reference, property named $ref valid`
## Original schema
```js
{
	"properties": {
		"$ref": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"$ref": {
			"type": "string"
		}
	},
	"id": "4358668129396883anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `property named $ref that is not a reference, property named $ref invalid`
## Original schema
```js
{
	"properties": {
		"$ref": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"$ref": {
			"type": "string"
		}
	},
	"id": "4358668129396883anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `property named $ref, containing an actual $ref, property named $ref valid`
## Original schema
```js
{
	"properties": {
		"$ref": {
			"$ref": "#/definitions/is-string"
		}
	},
	"definitions": {
		"is-string": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"$ref": {
			"$ref": "05940696114508959anonymous#/definitions/is-string"
		}
	},
	"definitions": {
		"is-string": {
			"type": "string",
			"id": "05940696114508959anonymous#/definitions/is-string"
		}
	},
	"id": "05940696114508959anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `property named $ref, containing an actual $ref, property named $ref invalid`
## Original schema
```js
{
	"properties": {
		"$ref": {
			"$ref": "#/definitions/is-string"
		}
	},
	"definitions": {
		"is-string": {
			"type": "string"
		}
	}
}
```
## Schema after validating
```js
{
	"properties": {
		"$ref": {
			"$ref": "05940696114508959anonymous#/definitions/is-string"
		}
	},
	"definitions": {
		"is-string": {
			"type": "string",
			"id": "05940696114508959anonymous#/definitions/is-string"
		}
	},
	"id": "05940696114508959anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Location-independent identifier, match`
## Original schema
```js
{
	"allOf": [
		{
			"$ref": "#foo"
		}
	],
	"definitions": {
		"A": {
			"id": "#foo",
			"type": "integer"
		}
	}
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"$ref": "09095684000535709anonymous#foo"
		}
	],
	"definitions": {
		"A": {
			"id": "09095684000535709anonymous#foo",
			"type": "integer"
		}
	},
	"id": "09095684000535709anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Location-independent identifier, mismatch`
## Original schema
```js
{
	"allOf": [
		{
			"$ref": "#foo"
		}
	],
	"definitions": {
		"A": {
			"id": "#foo",
			"type": "integer"
		}
	}
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"$ref": "09095684000535709anonymous#foo"
		}
	],
	"definitions": {
		"A": {
			"id": "09095684000535709anonymous#foo",
			"type": "integer"
		}
	},
	"id": "09095684000535709anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Location-independent identifier with absolute URI, match`
## Original schema
```js
{
	"allOf": [
		{
			"$ref": "http://localhost:1234/bar#foo"
		}
	],
	"definitions": {
		"A": {
			"id": "http://localhost:1234/bar#foo",
			"type": "integer"
		}
	}
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"$ref": "http://localhost:1234/bar#foo"
		}
	],
	"definitions": {
		"A": {
			"id": "http://localhost:1234/bar#foo",
			"type": "integer"
		}
	},
	"id": "19378465052303406anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Location-independent identifier with absolute URI, mismatch`
## Original schema
```js
{
	"allOf": [
		{
			"$ref": "http://localhost:1234/bar#foo"
		}
	],
	"definitions": {
		"A": {
			"id": "http://localhost:1234/bar#foo",
			"type": "integer"
		}
	}
}
```
## Schema after validating
```js
{
	"allOf": [
		{
			"$ref": "http://localhost:1234/bar#foo"
		}
	],
	"definitions": {
		"A": {
			"id": "http://localhost:1234/bar#foo",
			"type": "integer"
		}
	},
	"id": "19378465052303406anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Location-independent identifier with base URI change in subschema, match`
## Original schema
```js
{
	"id": "http://localhost:1234/root",
	"allOf": [
		{
			"$ref": "http://localhost:1234/nested.json#foo"
		}
	],
	"definitions": {
		"A": {
			"id": "nested.json",
			"definitions": {
				"B": {
					"id": "#foo",
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
	"id": "http://localhost:1234/root",
	"allOf": [
		{
			"$ref": "http://localhost:1234/nested.json#foo"
		}
	],
	"definitions": {
		"A": {
			"id": "http://localhost:1234/nested.json",
			"definitions": {
				"B": {
					"id": "http://localhost:1234/nested.json#foo",
					"type": "integer"
				}
			}
		}
	}
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `Location-independent identifier with base URI change in subschema, mismatch`
## Original schema
```js
{
	"id": "http://localhost:1234/root",
	"allOf": [
		{
			"$ref": "http://localhost:1234/nested.json#foo"
		}
	],
	"definitions": {
		"A": {
			"id": "nested.json",
			"definitions": {
				"B": {
					"id": "#foo",
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
	"id": "http://localhost:1234/root",
	"allOf": [
		{
			"$ref": "http://localhost:1234/nested.json#foo"
		}
	],
	"definitions": {
		"A": {
			"id": "http://localhost:1234/nested.json",
			"definitions": {
				"B": {
					"id": "http://localhost:1234/nested.json#foo",
					"type": "integer"
				}
			}
		}
	}
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `naive replacement of $ref with its destination is not correct, do not evaluate the $ref inside the enum`
## Original schema
```js
{
	"definitions": {
		"a_string": {
			"type": "string"
		}
	},
	"enum": [
		{
			"$ref": "#/definitions/a_string"
		}
	]
}
```
## Schema after validating
```js
{
	"definitions": {
		"a_string": {
			"type": "string"
		}
	},
	"enum": [
		{
			"$ref": "#/definitions/a_string"
		}
	],
	"id": "5422303285970731anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `naive replacement of $ref with its destination is not correct, match the enum exactly`
## Original schema
```js
{
	"definitions": {
		"a_string": {
			"type": "string"
		}
	},
	"enum": [
		{
			"$ref": "#/definitions/a_string"
		}
	]
}
```
## Schema after validating
```js
{
	"definitions": {
		"a_string": {
			"type": "string"
		}
	},
	"enum": [
		{
			"$ref": "#/definitions/a_string"
		}
	],
	"id": "5422303285970731anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `remote ref, remote ref valid`
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
	"id": "29222189709814295anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `remote ref, remote ref invalid`
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
	"id": "29222189709814295anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `fragment within remote ref, remote fragment valid`
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
	"id": "7012222351108497anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `fragment within remote ref, remote fragment invalid`
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
	"id": "7012222351108497anonymous"
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
	"id": "9343543157408876anonymous"
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
	"id": "9343543157408876anonymous"
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
	"id": "1920565421768632anonymous"
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
	"id": "1920565421768632anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `required validation, ignores arrays`
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
	"id": "1920565421768632anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `required validation, ignores strings`
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
	"id": "1920565421768632anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `required validation, ignores other non-objects`
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
	"id": "1920565421768632anonymous"
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
	"id": "49271260007033146anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `required with escaped characters, object with all properties present is valid`
## Original schema
```js
{
	"required": [
		"foo\nbar",
		"foo\"bar",
		"foo\\bar",
		"foo\rbar",
		"foo\tbar",
		"foo\fbar"
	]
}
```
## Schema after validating
```js
{
	"required": [
		"foo\nbar",
		"foo\"bar",
		"foo\\bar",
		"foo\rbar",
		"foo\tbar",
		"foo\fbar"
	],
	"id": "05462923783669793anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `required with escaped characters, object with some properties missing is invalid`
## Original schema
```js
{
	"required": [
		"foo\nbar",
		"foo\"bar",
		"foo\\bar",
		"foo\rbar",
		"foo\tbar",
		"foo\fbar"
	]
}
```
## Schema after validating
```js
{
	"required": [
		"foo\nbar",
		"foo\"bar",
		"foo\\bar",
		"foo\rbar",
		"foo\tbar",
		"foo\fbar"
	],
	"id": "05462923783669793anonymous"
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
	"id": "7460782291027872anonymous"
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
	"id": "7460782291027872anonymous"
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
	"id": "7460782291027872anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `integer type matches integers, a string is still not an integer, even if it looks like one`
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
	"id": "7460782291027872anonymous"
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
	"id": "7460782291027872anonymous"
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
	"id": "7460782291027872anonymous"
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
	"id": "7460782291027872anonymous"
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
	"id": "7460782291027872anonymous"
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
	"id": "5197146190594768anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `number type matches numbers, a float with zero fractional part is a number`
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
	"id": "5197146190594768anonymous"
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
	"id": "5197146190594768anonymous"
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
	"id": "5197146190594768anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `number type matches numbers, a string is still not a number, even if it looks like one`
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
	"id": "5197146190594768anonymous"
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
	"id": "5197146190594768anonymous"
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
	"id": "5197146190594768anonymous"
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
	"id": "5197146190594768anonymous"
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
	"id": "5197146190594768anonymous"
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
	"id": "419058122071011anonymous"
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
	"id": "419058122071011anonymous"
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
	"id": "419058122071011anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `string type matches strings, a string is still a string, even if it looks like a number`
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
	"id": "419058122071011anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `string type matches strings, an empty string is still a string`
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
	"id": "419058122071011anonymous"
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
	"id": "419058122071011anonymous"
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
	"id": "419058122071011anonymous"
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
	"id": "419058122071011anonymous"
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
	"id": "419058122071011anonymous"
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
	"id": "19495449943427645anonymous"
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
	"id": "19495449943427645anonymous"
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
	"id": "19495449943427645anonymous"
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
	"id": "19495449943427645anonymous"
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
	"id": "19495449943427645anonymous"
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
	"id": "19495449943427645anonymous"
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
	"id": "19495449943427645anonymous"
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
	"id": "2048583546972551anonymous"
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
	"id": "2048583546972551anonymous"
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
	"id": "2048583546972551anonymous"
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
	"id": "2048583546972551anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `array type matches arrays, an array is an array`
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
	"id": "2048583546972551anonymous"
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
	"id": "2048583546972551anonymous"
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
	"id": "2048583546972551anonymous"
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
	"id": "3691758341653686anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, zero is not a boolean`
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
	"id": "3691758341653686anonymous"
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
	"id": "3691758341653686anonymous"
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
	"id": "3691758341653686anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, an empty string is not a boolean`
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
	"id": "3691758341653686anonymous"
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
	"id": "3691758341653686anonymous"
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
	"id": "3691758341653686anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, true is a boolean`
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
	"id": "3691758341653686anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `boolean type matches booleans, false is a boolean`
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
	"id": "3691758341653686anonymous"
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
	"id": "3691758341653686anonymous"
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
	"id": "4949864243472828anonymous"
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
	"id": "4949864243472828anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `null type matches only the null object, zero is not null`
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
	"id": "4949864243472828anonymous"
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
	"id": "4949864243472828anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `null type matches only the null object, an empty string is not null`
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
	"id": "4949864243472828anonymous"
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
	"id": "4949864243472828anonymous"
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
	"id": "4949864243472828anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `null type matches only the null object, true is not null`
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
	"id": "4949864243472828anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `null type matches only the null object, false is not null`
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
	"id": "4949864243472828anonymous"
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
	"id": "4949864243472828anonymous"
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
	"id": "8837153623137162anonymous"
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
	"id": "8837153623137162anonymous"
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
	"id": "8837153623137162anonymous"
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
	"id": "8837153623137162anonymous"
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
	"id": "8837153623137162anonymous"
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
	"id": "8837153623137162anonymous"
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
	"id": "8837153623137162anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `type as array with one item, string is valid`
## Original schema
```js
{
	"type": [
		"string"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"string"
	],
	"id": "5913245733482295anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `type as array with one item, number is invalid`
## Original schema
```js
{
	"type": [
		"string"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"string"
	],
	"id": "5913245733482295anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `type: array or object, array is valid`
## Original schema
```js
{
	"type": [
		"array",
		"object"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"array",
		"object"
	],
	"id": "2132591324666151anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `type: array or object, object is valid`
## Original schema
```js
{
	"type": [
		"array",
		"object"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"array",
		"object"
	],
	"id": "2132591324666151anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `type: array or object, number is invalid`
## Original schema
```js
{
	"type": [
		"array",
		"object"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"array",
		"object"
	],
	"id": "2132591324666151anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `type: array or object, string is invalid`
## Original schema
```js
{
	"type": [
		"array",
		"object"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"array",
		"object"
	],
	"id": "2132591324666151anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `type: array or object, null is invalid`
## Original schema
```js
{
	"type": [
		"array",
		"object"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"array",
		"object"
	],
	"id": "2132591324666151anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `type: array, object or null, array is valid`
## Original schema
```js
{
	"type": [
		"array",
		"object",
		"null"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"array",
		"object",
		"null"
	],
	"id": "9888283446682695anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `type: array, object or null, object is valid`
## Original schema
```js
{
	"type": [
		"array",
		"object",
		"null"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"array",
		"object",
		"null"
	],
	"id": "9888283446682695anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `type: array, object or null, null is valid`
## Original schema
```js
{
	"type": [
		"array",
		"object",
		"null"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"array",
		"object",
		"null"
	],
	"id": "9888283446682695anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `type: array, object or null, number is invalid`
## Original schema
```js
{
	"type": [
		"array",
		"object",
		"null"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"array",
		"object",
		"null"
	],
	"id": "9888283446682695anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `type: array, object or null, string is invalid`
## Original schema
```js
{
	"type": [
		"array",
		"object",
		"null"
	]
}
```
## Schema after validating
```js
{
	"type": [
		"array",
		"object",
		"null"
	],
	"id": "9888283446682695anonymous"
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
	"id": "7301911643414145anonymous"
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
	"id": "7301911643414145anonymous"
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
	"id": "7301911643414145anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, false is not equal to zero`
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
	"id": "7301911643414145anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, true is not equal to one`
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
	"id": "7301911643414145anonymous"
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
	"id": "7301911643414145anonymous"
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
	"id": "7301911643414145anonymous"
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
	"id": "7301911643414145anonymous"
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
	"id": "7301911643414145anonymous"
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
	"id": "7301911643414145anonymous"
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
	"id": "7301911643414145anonymous"
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
	"id": "7301911643414145anonymous"
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
	"id": "7301911643414145anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, [1] and [true] are unique`
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
	"id": "7301911643414145anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, [0] and [false] are unique`
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
	"id": "7301911643414145anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, nested [1] and [true] are unique`
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
	"id": "7301911643414145anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, nested [0] and [false] are unique`
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
	"id": "7301911643414145anonymous"
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
	"id": "7301911643414145anonymous"
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
	"id": "7301911643414145anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, different objects are unique`
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
	"id": "7301911643414145anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, objects are non-unique despite key order`
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
	"id": "7301911643414145anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, {"a": false} and {"a": 0} are unique`
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
	"id": "7301911643414145anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems validation, {"a": true} and {"a": 1} are unique`
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
	"id": "7301911643414145anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems with an array of items, [false, true] from items array is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"id": "7691362514891193anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems with an array of items, [true, false] from items array is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"id": "7691362514891193anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems with an array of items, [false, false] from items array is not valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"id": "7691362514891193anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems with an array of items, [true, true] from items array is not valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"id": "7691362514891193anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems with an array of items, unique array extended from [false, true] is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"id": "7691362514891193anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems with an array of items, unique array extended from [true, false] is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"id": "7691362514891193anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems with an array of items, non-unique array extended from [false, true] is not valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"id": "7691362514891193anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems with an array of items, non-unique array extended from [true, false] is not valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"id": "7691362514891193anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems with an array of items and additionalItems=false, [false, true] from items array is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"additionalItems": false,
	"id": "08370440239066568anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems with an array of items and additionalItems=false, [true, false] from items array is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"additionalItems": false,
	"id": "08370440239066568anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems with an array of items and additionalItems=false, [false, false] from items array is not valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"additionalItems": false,
	"id": "08370440239066568anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems with an array of items and additionalItems=false, [true, true] from items array is not valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"additionalItems": false,
	"id": "08370440239066568anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems with an array of items and additionalItems=false, extra items are invalid even if unique`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": true,
	"additionalItems": false,
	"id": "08370440239066568anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, unique array of integers is valid`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "4697153166426933anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, non-unique array of integers is valid`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "4697153166426933anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, numbers are unique if mathematically unequal`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "4697153166426933anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, false is not equal to zero`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "4697153166426933anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, true is not equal to one`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "4697153166426933anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, unique array of objects is valid`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "4697153166426933anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, non-unique array of objects is valid`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "4697153166426933anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, unique array of nested objects is valid`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "4697153166426933anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, non-unique array of nested objects is valid`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "4697153166426933anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, unique array of arrays is valid`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "4697153166426933anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, non-unique array of arrays is valid`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "4697153166426933anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, 1 and true are unique`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "4697153166426933anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, 0 and false are unique`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "4697153166426933anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, unique heterogeneous types are valid`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "4697153166426933anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false validation, non-unique heterogeneous types are valid`
## Original schema
```js
{
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"uniqueItems": false,
	"id": "4697153166426933anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false with an array of items, [false, true] from items array is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"id": "7330082463827139anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false with an array of items, [true, false] from items array is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"id": "7330082463827139anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false with an array of items, [false, false] from items array is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"id": "7330082463827139anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false with an array of items, [true, true] from items array is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"id": "7330082463827139anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false with an array of items, unique array extended from [false, true] is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"id": "7330082463827139anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false with an array of items, unique array extended from [true, false] is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"id": "7330082463827139anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false with an array of items, non-unique array extended from [false, true] is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"id": "7330082463827139anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false with an array of items, non-unique array extended from [true, false] is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"id": "7330082463827139anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false with an array of items and additionalItems=false, [false, true] from items array is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"additionalItems": false,
	"id": "37840528938685014anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false with an array of items and additionalItems=false, [true, false] from items array is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"additionalItems": false,
	"id": "37840528938685014anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false with an array of items and additionalItems=false, [false, false] from items array is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"additionalItems": false,
	"id": "37840528938685014anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false with an array of items and additionalItems=false, [true, true] from items array is valid`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"additionalItems": false,
	"id": "37840528938685014anonymous"
}
```

# Side-effect on schema
[`json-model`](https://github.com/geraintluff/json-model) had a side-effect on (altered the original) schema in the test `uniqueItems=false with an array of items and additionalItems=false, extra items are invalid even if unique`
## Original schema
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"additionalItems": false
}
```
## Schema after validating
```js
{
	"items": [
		{
			"type": "boolean"
		},
		{
			"type": "boolean"
		}
	],
	"uniqueItems": false,
	"additionalItems": false,
	"id": "37840528938685014anonymous"
}
```

[back to benchmarks](https://github.com/ebdrup/json-schema-benchmark)