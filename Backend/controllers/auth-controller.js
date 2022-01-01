const signUpSchema = require("../schemas/schemas").signUp;
const signInSchema = require("../schemas/schemas").signIn;
const getResetPwLinkSchema = require("../schemas/schemas").getResetPwLink;
const resetPasswordSchema = require("../schemas/schemas").resetPassword;
const User = require("../models/User");
const Authentication = require("../models/Authentication");
const nodemailer = require("nodemailer");
const tryCatchBlock = require("../util/function").tryCatchBlockForController;
const HttpError = require("../models/http-error");
const { getTokenFromRequest } = require("../util/function");
const jwt = require("jsonwebtoken");
const util = require("../util/function");
const generateHTMLForResetPwLink = require("../views/generateHTMLForResetPasswordMail");
const socket = require("../models/SocketIO");
module.exports = {
  signUp: tryCatchBlock(signUpSchema, async (req, res, next) => {
    const { email, password, name } = req.body;

    const emailIsExist = await User.isEmailExist(email);
    if (emailIsExist) return next(new HttpError("SIGN_UP_FAIL_DUPPLICATE_EMAIL", 400));

    const user = new User({ email, password, name });
    await user.signUp();

    return res.status(200).send({ message: "SIGN_UP_SUCCESS" });
  }),

  signIn: tryCatchBlock(signInSchema, async (req, res, next) => {
    const { email, password } = req.body;

    const user = new User({ email, password });
    const userInfo = await user.signIn();

    if (!userInfo) return res.status(404).send({ message: "SIGN_IN_FAIL" });

    return res.status(200).send({ message: "SIGN_IN_SUCCESS", data: Authentication.createToken(userInfo) });
  }),

  renewToken: async (req, res, next) => {
    try {
      const token = getTokenFromRequest(req);
      if (!token) throw new Error();

      const data = jwt.verify(token, process.env.TOKEN_SECURITY_KEY);
      delete data.iat;
      delete data.exp;
      const newToken = Authentication.createToken(data);

      return res.status(200).send({ message: "RENEW_TOKEN_SUCCESS", data: newToken });
    } catch (error) {
      next(new HttpError("RENEW_TOKEN_FAIL_TOKEN_INVALID", 401));
    }
  },
  getResetPasswordLink: tryCatchBlock(getResetPwLinkSchema, async (req, res, next) => {
    const userID = await User.getUserIDByEmail(req.body.email);
    if (!userID) return next(new HttpError("GET_RESET_PASSWORD_LINK_FAIL_EMAIL_NOT_EXIST", 404));

    const resetPwLink = await Authentication.createResetPwLink(userID);
    const htmlForMail = generateHTMLForResetPwLink(resetPwLink);

    const transporter = nodemailer.createTransport(util.getNodeMailerTransporterConfig());
    await transporter.sendMail({
      subject: process.env.NODEMAILER_SUBJECT,
      from: process.env.NODEMAILER_USER,
      to: req.body.email,
      html: htmlForMail,
      template: "index",
      attachments: [
        {
          filename: "forget-password-illus.png",
          path: __dirname + "/../public/assets/images/forget-password-illus.png",
          cid: "forget-password-illus",
        },
        {
          filename: "logo.jpg",
          path: __dirname + "/../public/assets/images/logo.png",
          cid: "logo",
        },
        {
          filename: "copyright.jpg",
          path: __dirname + "/../public/assets/images/copyright.png",
          cid: "copyright",
        },
      ],
    });

    return res.status(200).send({ message: "RESET_PASSWORD_LINK_SENT" });
  }),

  resetPassword: tryCatchBlock(resetPasswordSchema, async (req, res, next) => {
    const userID = await Authentication.validateResetPwToken(req.params.resetPwToken);
    if (!userID) return next(new HttpError("RESET_PASSWORD_FAIL_INVALID_RESET_TOKEN", 404));

    const user = new User({ userID, password: req.body.password });
    await user.changePassword();

    await Authentication.deleteResetPwToken(req.params.resetPwToken);

    return res.status(200).send({ message: "RESET_PASSWORD_SUCCESS" });
  }),
};
