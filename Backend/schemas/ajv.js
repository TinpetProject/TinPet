const Ajv = require("ajv");
const addFormats = require("ajv-formats");

const ajv = new Ajv({ allErros: true });
addFormats(ajv, ["email"]);

module.exports = ajv;
