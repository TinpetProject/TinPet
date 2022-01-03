const HttpError = require("../models/http-error");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { getTokenFromRequest } = require("../util/function");

module.exports = async (req, res, next) => {
  if (req.method === "OPTIONS") return next();

  try {
    const token = getTokenFromRequest(req);
    if (!token) throw new Error();
    // console.log("1");
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECURITY_KEY);
    // console.log("2");
    const userIDIsExist = await User.isUserIDExist(decodedToken.userID);
    if (!userIDIsExist)
      return next(new HttpError("AUTHORIZATION_FAIL_USERID_NOT_EXIST", 404));
    // console.log("3");
    req.userData = { userID: decodedToken.userID };
    next();
  } catch (error) {
    console.log("AUTHORIZATION FAILED:::", error);
    return next(new HttpError("AUTHORIZATION_FAILED", 401));
  }
};
