const User = require("../models/user");
const HttpError = require("../models/http-error");
const tryCatchBlock = require("../util/function").tryCatchBlockForController;

module.exports = {
  getProfile: tryCatchBlock(null, async (req, res, next) => {
    const userIDIsExist = await User.isUserIDExist(req.userData.userID);
    if (!userIDIsExist) return next(new HttpError("GET_PROFILE_FAIL_USERID_NOT_EXIST", 404));

    const user = new User({ userID: req.userData.userID });
    const userProfile = await user.getProfile();

    return res.status(200).send({ message: "GET_PROFILE_SUCCESS", data: userProfile });
  }),
  getRecentImgs: tryCatchBlock(null, async (req, res, next) => {
    const userIDIsExist = await User.isUserIDExist(req.userData.userID);
    if (!userIDIsExist) return next(new HttpError("GET_RECENT_IMGS_FAIL_USERID_NOT_EXIST", 404));

    const user = new User({ userID: req.userData.userID });
    const imgs = await user.getRecentImgs();
    
    return res.status(200).send({ message: "GET_RECENT_IMGS_SUCCESS", data: imgs });
  }),

  //waiting for sql query

  // getPostByOffset: tryCatchBlock(null, async (req, res, next) => {
  //   const userIDIsExist = await User.isUserIDExist(req.userData.userID);
  //   if (!userIDIsExist) return next(new HttpError("GET_POST_FAIL_USERID_NOT_EXIST", 404));

  //   const posts = await User.getPostByOffset(req.userData.userID, req.params.offset);
  //   return res.status(200).send({ message: "GET_POST_SUCCESS", data: imgs });
  // }),

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
