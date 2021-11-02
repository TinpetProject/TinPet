const Ajv = require("ajv");
const addFormats = require("ajv-formats");

const ajv = new Ajv({ allErros: true });
addFormats(ajv, ["email"]);

const schema = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
    password: { type: "string", minLength: 8, maxLength: 20 },
  },
  required: ["password", "email"],
  additionalProperties: false,
};

module.exports = ajv.compile(schema);
