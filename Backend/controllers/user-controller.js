const User = require("../models/user");
const HttpError = require("../models/http-error");
const tryCatchBlock = require("../util/function").tryCatchBlockForController;

module.exports = {
  getBriefInfo: tryCatchBlock(null, async (req, res, next) => {
    const targetUserID = req.params.targetUserID;

    const userIDIsExist = await User.isUserIDExist(targetUserID);
    if (!userIDIsExist) return next(new HttpError("GET_INFO_FAIL_USER_NOT_EXIST", 404));

    const user = new User({});
    const userInfo = await user.getBriefInfo(targetUserID);

    return res.status(200).send({ message: "GET_INFO_SUCCESS", data: userInfo });
  }),
};
