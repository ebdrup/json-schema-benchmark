const testRunner = require("./testRunner");
const validators = require("./validators");

(async () => {
  const draft04Validators = await validators(
    "http://json-schema.org/draft-04/schema",
    "4"
  );
  const draft06Validators = await validators(
    "http://json-schema.org/draft-06/schema",
    "6"
  );

  testRunner(draft06Validators);
})();
