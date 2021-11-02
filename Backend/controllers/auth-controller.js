const signUpSchema = require("../schemas/sign-up");
const signInSchema = require("../schemas/sign-in");
const getResetPasswordLinkSchema = require("../schemas/get-reset-password-link");
const resetPasswordSchema = require("../schemas/reset-password");
const User = require("../models/user");
const Authentication = require("../models/authentication");
const nodemailer = require("nodemailer");
const tryCatchBlock = require("../util/function").tryCatchBlockForController;
const HttpError = require("../models/http-error");
const { validateResetPwToken } = require("../models/authentication");

module.exports = {
  signUp: tryCatchBlock(signUpSchema, async (req, res, next) => {
    const { email, password, name } = req.body;

    const validEmail = await User.validateEmail(email);
    if (!validEmail) return next(new HttpError("SIGN_UP_FAIL_DUPPLICATE_EMAIL", 400));

    await User.signUp(email, password, name);
    return res.status(200).send({ message: "SIGN_UP_SUCCESS" });
  }),

  signIn: tryCatchBlock(signInSchema, async (req, res, next) => {
    const userInfo = await User.signIn(req.body.email, req.body.password);
    return userInfo
      ? res.status(200).send({ message: "SIGN_IN_SUCCESS", data: Authentication.createToken(userInfo) })
      : res.status(404).send({ message: "SIGN_IN_FAIL" });
  }),

  getResetPasswordLink: tryCatchBlock(getResetPasswordLinkSchema, async (req, res, next) => {
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
    return res.status(200).send("RESET_PASSWORD_LINK_SENT");
  }),

  resetPassword: tryCatchBlock(resetPasswordSchema, async (req, res, next) => {
    const userId = await Authentication.validateResetPwToken(req.params.resetPwToken);
    if (!userId) return next(new HttpError("RESET_PASSWORD_FAIL_INVALID_RESET_TOKEN", 404));

    await User.changePassword(userId, req.body.password);
    return res.status(200).send("RESET_PASSWORD_SUCCESS");
  }),
};
