const HttpError = require("../models/http-error");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const getTokenFromReq = (req) => {
  return req.headers.authorization.split(" ")[1]; // Authorization : Bearer adsfsadfkjasdlfjsdalkf
};

module.exports = async (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = getTokenFromReq(req);
    if (!token) {
      throw new Error();
    }

    const decodedToken = jwt.verify(token, process.env.TOKEN_SECURITY_KEY);

    const validId = await User.validateUserId(decodedToken.userId);
    if (!validId) {
      return next(new HttpError("AUTHORIZATION_USERID_NOT_EXIST", 404));
    }

    req.userData = { userId: decodedToken.userId };
    next();
  } catch (error) {
    return next(new HttpError("AUTHORIZATION_FAILED", 401));
  }
};
