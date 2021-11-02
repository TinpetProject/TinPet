const HttpError = require("../models/http-error");

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
  tryCatchBlockForController: (validator, passInFunc) => {
    return async (req, res, next) => {
      const validRequest = validator(req.body);
      if (!validRequest) return next(new HttpError("REQUEST_FAIL_INVALID_SCHEMA", 400));
      try {
        return await passInFunc(req, res, next);
      } catch (error) {
        console.log("Error in tryCatchBlockForController:::", error);
        return next(new HttpError("SERVER_INTERNAL_ERROR", 500));
      }
    };
  },
};
