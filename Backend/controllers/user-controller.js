const User = require("../models/user");
const HttpError = require("../models/http-error");
const tryCatchBlock = require("../util/function").tryCatchBlockForController;

module.exports = {
  getProfile: tryCatchBlock(null, async (req, res, next) => {
    const validUserID = await User.validateUserID(req.userData.userID);
    if (!validUserID) return next(new HttpError("GET_PROFILE_FAIL_USERID_NOT_EXIST", 404));

    const userProfile = await User.getProfile(req.userData.userID);
    return res.status(200).send({ message: "GET_PROFILE_SUCCESS", data: userProfile });
  }),
  getRecentImgs: tryCatchBlock(null, async (req, res, next) => {
    const validUserID = await User.validateUserID(req.userData.userID);
    if (!validUserID) return next(new HttpError("GET_RECENT_IMGS_FAIL_USERID_NOT_EXIST", 404));

    const imgs = await User.getRecentImgs(req.body.userID);
    return res.status(200).send({ message: "GET_RECENT_IMGS_SUCCESS", data: imgs });
  }),

  //waiting for sql query
  
  // getPostByOffset: tryCatchBlock(null, async (req, res, next) => {
  //   const validUserID = await User.validateUserID(req.userData.userID);
  //   if (!validUserID) return next(new HttpError("GET_POST_FAIL_USERID_NOT_EXIST", 404));

  //   const posts = await User.getPostByOffset(req.userData.userID, req.params.offset);
  //   return res.status(200).send({ message: "GET_POST_SUCCESS", data: imgs });
  // }),

  // likeProcessing: tryCatchBlock(null, async (req, res, next) => {
  //   const { targetUserID } = req.body;
  //   const validUserID = await User.validateUserID(req.userData.userID);
  //   const validTargetUserID = await User.validateUserID(targetUserID);
  //   if (!validUserID || !validTargetUserID) return next(new HttpError("LIKE_PROCESSING_FAIL_USERID_NOT_EXIST", 404));

  //   await User.like(userID, targetUserID);
  //   return res.status(200).send({ message: "LIKE_PROCESSING_SUCCESS", data: imgs });
  // }),

  // macthProcessing: tryCatchBlock(null, async (req, res, next) => {
  //   const { targetUserID } = req.body;
  //   const validUserID = await User.validateUserID(req.userData.userID);
  //   const validTargetUserID = await User.validateUserID(targetUserID);
  //   if (!validUserID || !validTargetUserID) return next(new HttpError("MATCH_PROCESSING_FAIL_USERID_NOT_EXIST", 404));

  //   await User.match(userID, targetUserID);
  //   return res.status(200).send({ message: "MATCH_PROCESSING_SUCCESS", data: imgs });
  // }),
};
