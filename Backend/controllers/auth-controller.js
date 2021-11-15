const signUpSchema = require("../schemas/schemas").signUp;
const signInSchema = require("../schemas/schemas").signIn;
const getResetPwLinkSchema = require("../schemas/schemas").getResetPwLink;
const resetPasswordSchema = require("../schemas/schemas").resetPassword;
const User = require("../models/user");
const Authentication = require("../models/authentication");
const nodemailer = require("nodemailer");
const tryCatchBlock = require("../util/function").tryCatchBlockForController;
const HttpError = require("../models/http-error");
const { validateResetPwToken } = require("../models/authentication");
const { getTokenFromRequest } = require("../util/function");

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
  renewToken: async (req, res, next) => {
    try {
      const token = getTokenFromRequest(req);
      if (!token) throw new Error();

      const data = jwt.verify(token, process.env.TOKEN_SECURITY_KEY);
      const newToken = Authentication.createToken(data);

      return res.status(200).send({ message: "RENEW_TOKEN_SUCCESS", data: newToken });
    } catch (error) {
      next(new HttpError("RENEW_TOKEN_FAIL_TOKEN_INVALID", 401));
    }
  },
  getResetPasswordLink: tryCatchBlock(getResetPwLinkSchema, async (req, res, next) => {
    const userID = await User.getUserIDByEmail(req.body.email);
    if (!userID) return next(new HttpError("GET_RESET_PASSWORD_LINK_FAIL_EMAIL_NOT_EXIST", 404));

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
      text: await Authentication.createResetPwLink(userID),
    });

    return res.status(200).send({ message: "RESET_PASSWORD_LINK_SENT" });
  }),

  resetPassword: tryCatchBlock(resetPasswordSchema, async (req, res, next) => {
    const userID = await Authentication.validateResetPwToken(req.params.resetPwToken);
    if (!userID) return next(new HttpError("RESET_PASSWORD_FAIL_INVALID_RESET_TOKEN", 404));

    await User.changePassword(userID, req.body.password);
    await Authentication.deleteResetPwToken(req.params.resetPwToken);
    return res.status(200).send({ message: "RESET_PASSWORD_SUCCESS" });
  }),
};
