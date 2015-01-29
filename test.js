var schema = {
	"properties": {
		"foo": {
			"type": "integer",
			"default": []
		}
	}
};
var data = {};
require('is-my-json-valid')(schema)(data);
console.log(data);
// { foo: [] }
