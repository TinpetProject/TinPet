const User = require("../models/user");
const tryCatchBlock = require("../util/function").tryCatchBlockForController;
const HttpError = require("../models/http-error");

module.exports = {
  getUserPostByOffset: tryCatchBlock(null, async (req, res, next) => {
    const { targetUserID, offset } = req.params;

    const isValidUser = await User.validateEmail(targetUserID);
    if (!isValidUser) return next(new HttpError("SIGN_UP_FAIL_USER_NOT_FOUND", 400));

    return res.status(200).send({ message: "SIGN_UP_SUCCESS" });
  }),
};
