const User = require("../models/user");
const HttpError = require("../models/http-error");
const tryCatchBlock = require("../util/function").tryCatchBlockForController;

module.exports = {
  getBriefInfo: tryCatchBlock(null, async (req, res, next) => {
    const targetUserID = req.params.targetUserID;

    const userIDIsExist = await User.isUserIDExist(targetUserID);
    if (!userIDIsExist)
      return next(new HttpError("GET_INFO_FAIL_USER_NOT_EXIST", 404));

    const user = new User({});
    const userInfo = await user.getBriefInfo(targetUserID);

    return res
      .status(200)
      .send({ message: "GET_INFO_SUCCESS", data: userInfo });
  }),
  getProfile: tryCatchBlock(null, async (req, res, next) => {
    const userIDIsExist = await User.isUserIDExist(req.params.userID);
    if (!userIDIsExist)
      return next(new HttpError("GET_PROFILE_FAIL_USERID_NOT_EXIST", 404));

    const user = new User({ userID: req.params.userID });
    const userProfile = await user.getProfile();

    return res
      .status(200)
      .send({ message: "GET_PROFILE_SUCCESS", data: userProfile });
  }),
  getRecentImgs: tryCatchBlock(null, async (req, res, next) => {
    const userIDIsExist = await User.isUserIDExist(req.params.userID);
    if (!userIDIsExist)
      return next(new HttpError("GET_RECENT_IMGS_FAIL_USERID_NOT_EXIST", 404));

    const user = new User({ userID: req.params.userID });
    const imgs = await user.getRecentImgs();

    return res
      .status(200)
      .send({ message: "GET_RECENT_IMGS_SUCCESS", data: imgs });
  }),

  getUserID: tryCatchBlock(null, async (req, res, next) => {
    const userID = await User.getUserIDByEmail(req.userData.email);
    if (!userID)
      return next(new HttpError("GET_USER_ID_FAIL_EMAIL_NOT_EXIST", 404));

    return res
      .status(200)
      .send({ message: "GET_USER_ID_SUCCESS", data: userID });
  }),
  getMatches: tryCatchBlock(null, async (req, res, next) => {
    const userIDIsExist = await User.isUserIDExist(req.params.userID);
    if (!userIDIsExist)
      return next(new HttpError("GET_MATCHES_FAIL_USERID_NOT_EXIST", 404));

    const user = new User({ userID: req.params.userID });
    const data = await user.getMatches();
    return res.status(200).send({message: "GET_MATCHES_SUCCESSFULLY", data : data })
  }),
  handleRequestMatches: tryCatchBlock(null, async (req, res, next) => {
    const { userID, targetUserID, command } = req.body;
    await User.handleRequestMatches(userID, targetUserID, command);
    return res.status(200).send({message: "HANDLE_REQUEST_MATCHES_SUCCESSFULLY"});
  }),
  getFollowerList : tryCatchBlock(null, async (req, res, next) => {
    const userIDIsExist = await User.isUserIDExist(req.params.userID);
    if (!userIDIsExist)
      return next(new HttpError("GET_FOLLOWER_LIST_FAIL_USERID_NOT_EXIST", 404));

    const user = new User({ userID: req.params.userID });
    const data = await user.getFollowerList();
    return res.status(200).send({message: "GET_FOLLOWERS_LIST_SUCCESSFULLY", data : data })
  }),
  removeFollower: tryCatchBlock(null, async (req, res, next) => {
    const {userID, targetUserID} = req.body;
    await User.removeFollower(userID, targetUserID);
    return res.status(200).send({message: "HANDLE_REMOVE_FOLLOWER_SUCCESSFULLY"});
  }),
  getFriendList : tryCatchBlock(null, async (req, res, next) => {
    const userIDIsExist = await User.isUserIDExist(req.params.userID);
    if (!userIDIsExist)
      return next(new HttpError("GET_FRIEND_LIST_FAIL_USERID_NOT_EXIST", 404));

    const user = new User({ userID: req.params.userID });
    const data = await user.getFriendList();
    return res.status(200).send({message: "GET_FRIEND_LIST_SUCCESSFULLY", data : data })
  }),
  removeFriend: tryCatchBlock(null, async (req, res, next) => {
    const {userID, targetUserID} = req.body;
    await User.removeFriend(userID, targetUserID);
    return res.status(200).send({message: "HANDLE_REMOVE_FRIEND_SUCCESSFULLY"});
  }),
  uploadPost: tryCatchBlock(null, async (req, res, next) => {
    const { title, content, links } = req.body;
    console.log(typeof links);
    const userID = req.userData.userID;


    const user = new User({ userID});
    const postID = await user.uploadPost(title, content, links);

    return res.status(200).send({ message: "UPLOAD_POST_SUCCESS", data: { postID } });
  }),

  getAllImages: tryCatchBlock(null, async (req, res, next) => {
    const userID = req.params.userID;

    const user = new User({ userID});
    const imgs = await user.getAllImages();

    return res.status(200).send({ message: "GET_IMGS_SUCCESS", data: imgs});
  }),
  // searchByName: tryCatchBlock(null, async (req, res, next) => {
  //   const name = req.params.name;

  //   const postID = await User.searchByName(name);

  //   return res.status(200).send({ message: "UPLOAD_POST_SUCCESS", data: { postID } });
  // }),

  // getUserName: tryCatchBlock(null, async (req, res, next) => {
  //   const userName = await User.getUserName(req.userData.user);
  //   if (!userName)
  //     return next(new HttpError("GET_USER_NAME_FAIL_ID_NOT_EXIST", 404));

  //   return res
  //     .status(200)
  //     .send({ message: "GET_USER_ID_SUCCESS", data: userName });
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
