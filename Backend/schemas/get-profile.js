const Ajv = require("ajv");
const addFormats = require("ajv-formats");

const ajv = new Ajv({ allErros: true });

const schema = {
  type: "object",
  properties: {
    userId: { type: "string", minLength: 36, maxLength: 36 },
  },
  required: ["userId"],
  additionalProperties: false,
};

module.exports = ajv.compile(schema);
