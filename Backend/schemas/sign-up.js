const Ajv = require("ajv");
const addFormats = require("ajv-formats");

const ajv = new Ajv({ allErros: true });
addFormats(ajv, ["email"]);

const schema = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
    password: { type: "string", minLength: 8, maxLength: 10 },
    name: { type: "string", minLength: 5, maxLength: 25 },
  },
  required: ["name", "password", "email"],
  additionalProperties: false,
};

module.exports = ajv.compile(schema);
