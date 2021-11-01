const signUpSchema = require("../schemas/sign-up");
const signInSchema = require("../schemas/sign-in");
const getResetPasswordLinkSchema = require("../schemas/get-reset-password-link");
const resetPasswordSchema = require("../schemas/reset-password");
const User = require("../models/user");
const Authentication = require("../models/authentication");
const nodemailer = require("nodemailer");
// const emailSender = require("../util/email-sender");
const HttpError = require("../models/http-error");
const { validateResetPwToken } = require("../models/authentication");

module.exports = {
  signUp: async (req, res, next) => {
    const validRequest = signUpSchema(req.body);
    if (!validRequest) return next(new HttpError("SIGN_UP_FAIL_INVALID_SCHEMA", 400));

    try {
      const { email, password, name } = req.body;

      const validEmail = await User.validateEmail(email);
      if (!validEmail) return next(new HttpError("SIGN_UP_FAIL_DUPPLICATE_EMAIL", 400));

      await User.signUp(email, password, name);
      return res.status(200).send({ message: "SIGN_UP_SUCCESS" });
    } catch (error) {
      next(error);
    }
  },
  signIn: async (req, res, next) => {
    const validRequest = signInSchema(req.body);
    if (!validRequest) return next(new HttpError("SIGN_IN_FAIL_INVALID_SCHEMA", 400));

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
  getResetPasswordLink: async (req, res, next) => {
    const validRequest = getResetPasswordLinkSchema(req.body);
    if (!validRequest) return next(new HttpError("GET_RESET_PASSWORD_LINK_FAIL_INVALID_SCHEMA", 400));

    try {
      const userId = await User.getUserIdByEmail(req.body.email);
      if (!userId) return next(new HttpError("GET_RESET_PASSWORD_LINK_FAIL_EMAIL_NOT_EXIST", 404));

      const emailSender = nodemailer.createTransport({
        host: process.env.NODEMAILER_HOST,
        service: process.env.NODEMAILER_SERVICE,
        port: process.env.NODEMAILER_PORT,
        secure: true,
        auth: {
          user: process.env.NODEMAILER_USER,
          pass: process.env.NODEMAILER_PASS,
        },
      });

      await emailSender.sendMail({
        subject: process.env.NODEMAILER_SUBJECT,
        from: process.env.NODEMAILER_USER,
        to: req.body.email,
        text: await Authentication.createResetPwLink(userId),
      });
      res.status(200).send("RESET_PASSWORD_LINK_SENT");
    } catch (error) {
      console.log(error);
      next(new HttpError("SEVER_INTERNAL_ERROR", 500));
    }
  },
  resetPassword: async (req, res, next) => {
    const validRequest = resetPasswordSchema(req.body);
    if (!validRequest) return next(new HttpError("RESET_PASSWORD_FAIL_INVALID_SCHEMA", 400));

    try {
      const userId = await Authentication.validateResetPwToken(req.params.resetPwToken);
      if (!userId) return next(new HttpError("RESET_PASSWORD_FAIL_INVALID_RESET_TOKEN", 404));

      await User.changePassword(userId, req.body.password);
      res.status(200).send("RESET_PASSWORD_SUCCESS");
    } catch (error) {
      console.log(error);
      next(new HttpError("SEVER_INTERNAL_ERROR", 500));
    }
  },
};
