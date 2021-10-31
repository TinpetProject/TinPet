const signUpSchema = require("../schemas/sign-up");
const signInSchema = require("../schemas/sign-in");
const User = require("../models/user");
const authentication = require("../models/authentication");
const HttpError = require("../models/http-error");

module.exports = {
  signUp: async (req, res, next) => {
    const validRequest = signUpSchema(req.body);
    if (!validRequest) return next(new HttpError("SIGN_UP_INVALID_SCHEMA", 400));

    try {
      const { email, password, name } = req.body;

      const validEmail = await User.validateEmail(email);
      if (!validEmail) return next(new HttpError("SIGN_UP_DUPPLICATE_EMAIL", 400));

      await User.signUp(email, password, name);
      return res.status(200).send({ message: "SIGN_UP_SUCCESS" });
    } catch (error) {
      next(error);
    }
  },
  signIn: async (req, res, next) => {
    const validRequest = signInSchema(req.body);
    if (!validRequest) return next(new HttpError("SIGN_IN_INVALID_SCHEMA", 400));

    try {
      const { email, password } = req.body;
      const userInfo = await User.signIn(email, password);
      return userInfo
        ? res.status(200).send({ message: "SIGN_IN_SUCCESS", data: authentication.createToken(userInfo) })
        : res.status(404).send({ message: "SIGN_IN_FAIL" });
    } catch (error) {
      next(error);
    }
  },
};
