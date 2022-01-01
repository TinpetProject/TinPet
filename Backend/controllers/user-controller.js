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
  getProfile: tryCatchBlock(null, async (req, res, next) => {
    const userIDIsExist = await User.isUserIDExist(req.params.userID);
    if (!userIDIsExist) return next(new HttpError("GET_PROFILE_FAIL_USERID_NOT_EXIST", 404));

    const user = new User({ userID: req.params.userID });
    const userProfile = await user.getProfile();

    return res.status(200).send({ message: "GET_PROFILE_SUCCESS", data: userProfile });
  }),
  getRecentImgs: tryCatchBlock(null, async (req, res, next) => {
    const userIDIsExist = await User.isUserIDExist(req.params.userID);
    if (!userIDIsExist) return next(new HttpError("GET_RECENT_IMGS_FAIL_USERID_NOT_EXIST", 404));

    const user = new User({ userID: req.params.userID });
    const imgs = await user.getRecentImgs();

    return res.status(200).send({ message: "GET_RECENT_IMGS_SUCCESS", data: imgs });
  }),

  getUserID: tryCatchBlock(null, async (req, res, next) => {
    const userID = await User.getUserIDByEmail(req.userData.email);
    if (!userID) return next(new HttpError("GET_USER_ID_FAIL_EMAIL_NOT_EXIST", 404));

    return res.status(200).send({ message: "GET_USER_ID_SUCCESS", data: userID });
  }),

  getPostByOffset: tryCatchBlock(null, async (req, res, next) => {
    const userIDIsExist = await User.isUserIDExist(req.params.userID);
    if (!userIDIsExist) return next(new HttpError("GET_POST_FAIL_USERID_NOT_EXIST", 404));

    const user = new User({ userID: req.params.userID });
    const posts = await user.getPostByOffset(req.params.offset);
    return res.status(200).send({ message: "GET_POST_SUCCESS", data: posts });
  }),

  // likeProcessing: tryCatchBlock(null, async (req, res, next) => {
  //   const { targetUserID } = req.body;
  //   const userIDIsExist = await User.isUserIDExist(req.userData.userID);
  //   const targetUserIDIsExist = await User.isUserIDExist(targetUserID);
  //   if (!userIDIsExist || !targetUserIDIsExist) return next(new HttpError("LIKE_PROCESSING_FAIL_USERID_NOT_EXIST", 404));

  //   await User.like(userID, targetUserID);
  //   return res.status(200).send({ message: "LIKE_PROCESSING_SUCCESS", data: imgs });
  // }),

  // macthProcessing: tryCatchBlock(null, async (req, res, next) => {
  //   const { targetUserID } = req.body;
  //   const userIDIsExist = await User.isUserIDExist(req.userData.userID);
  //   const targetUserIDIsExist = await User.isUserIDExist(targetUserID);
  //   if (!userIDIsExist || !targetUserIDIsExist) return next(new HttpError("MATCH_PROCESSING_FAIL_USERID_NOT_EXIST", 404));

  //   await User.match(userID, targetUserID);
  //   return res.status(200).send({ message: "MATCH_PROCESSING_SUCCESS", data: imgs });
  // }),
};
