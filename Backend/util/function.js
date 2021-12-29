const HttpError = require("../models/http-error");
const crypto = require("crypto");
const ajv = require("../schemas/ajv");
require("dotenv").config();

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
        const validateRequest = ajv.compile(schema);
        const validRequest = validateRequest(req.body);
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
  getNodeMailerTransporterConfig: () => ({
    host: process.env.NODEMAILER_HOST,
    service: process.env.NODEMAILER_SERVICE,
    port: process.env.NODEMAILER_PORT,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  }),
};
