const Ajv = require("ajv");
const addFormats = require("ajv-formats");

const ajv = new Ajv({ allErros: true });

const schema = {
  type: "object",
  properties: {
    password: { type: "string", minLength: 8, maxLength: 20 },
  },
  required: ["password"],
  additionalProperties: false,
};

module.exports = ajv.compile(schema);
