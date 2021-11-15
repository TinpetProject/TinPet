const HttpError = require("../models/http-error");
const crypto = require("crypto");
const ajv = require("../schemas/ajv");
module.exports = {
  tryCatchBlockForModule: (passInFunc) => {
    return async (...args) => {
      try {
        return await passInFunc(...args);
      } catch (error) {
        console.log("Error in tryCatchBlockForModule:::", error);
        throw error;
      }
    };
  },
  tryCatchBlockForController: (schema, passInFunc) => {
    return async (req, res, next) => {
      if (schema) {
        const validate = ajv.compile(schema);
        const validRequest = validate(req.body);
        if (!validRequest) return next(new HttpError("REQUEST_FAIL_INVALID_SCHEMA", 400));
      }
      try {
        return await passInFunc(req, res, next);
      } catch (error) {
        console.log("Error in tryCatchBlockForController:::", error);
        return next(new HttpError("SERVER_INTERNAL_ERROR", 500));
      }
    };
  },
  getTokenFromRequest: (req) => {
    return req.headers.authorization.split(" ")[1];
  },
  getRandomString: () => {
    return crypto.randomBytes(32).toString("hex");
  },
};
