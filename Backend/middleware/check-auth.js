const HttpError = require("../models/http-error");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { getTokenFromRequest } = require("../util/function");

module.exports = async (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = getTokenFromRequest(req);
    if (!token) {
      throw new Error();
    }

    const decodedToken = jwt.verify(token, process.env.TOKEN_SECURITY_KEY);

    const validID = await User.validateUserID(decodedToken.userID);
    if (!validID) return next(new HttpError("AUTHORIZATION_USERID_NOT_EXIST", 404));

    req.userData = { userID: decodedToken.userID };
    next();
  } catch (error) {
    console.log("AUTHORIZATION FAILED:::", error);
    return next(new HttpError("AUTHORIZATION_FAILED", 401));
  }
};
