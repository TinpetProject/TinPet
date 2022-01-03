const User = require("../models/user");
const tryCatchBlock = require("../util/function").tryCatchBlockForController;
const HttpError = require("../models/http-error");
const Post = require("../models/post");
module.exports = {
  // getUserPostByOffset: tryCatchBlock(null, async (req, res, next) => {
  //   const { targetUserID, offset } = req.params;

  //   // const isValidUser = await User.validateEmail(targetUserID);
  //   // if (!isValidUser) return next(new HttpError("SIGN_UP_FAIL_USER_NOT_FOUND", 400));

  //   return res.status(200).send({ message: "SIGN_UP_SUCCESS" });
  // }),

  getCommentByPost: tryCatchBlock(null, async (req, res, next) => {
    const postIDIsExist = await Post.isPostIDExist(req.params.postID);
    if (!postIDIsExist) return next(new HttpError("GET_COMMENT_FAIL_POSTID_NOT_EXIST", 404));

    const post = new Post({ postID: req.params.postID });
    const comment = await post.getCommentByPost();

    return res.status(200).send({ message: "GET_COMMENT_SUCCESS", data: comment });
  }),

  sendCommentByPost: tryCatchBlock(null, async (req, res, next) => {
    
    // const userID = req.userData.userID;
    const userID = req.body.userID;
    const content = req.body.content;

    const postIDIsExist = await Post.isPostIDExist(req.params.postID);
    if (!postIDIsExist) return next(new HttpError("SEND_COMMENT_FAIL_POSTID_NOT_EXIST", 404));

    const post = new Post({ postID: req.params.postID });
    const commentID = await post.sendCommentByPost(userID, content);

    return res.status(200).send({ message: "SEND_COMMENT_SUCCESS", data: commentID });
  }),

  likePost: tryCatchBlock(null, async (req, res, next) => {
    const userID = req.userData.userID;

    const postIDIsExist = await Post.isPostIDExist(req.params.postID);
    if (!postIDIsExist) return next(new HttpError("LIKE_POST_FAIL_POSTID_NOT_EXIST", 404));

    const post = new Post({ postID: req.params.postID });
    await post.likePost(userID);

    return res.status(200).send({ message: "LIKE_POST_SUCCESS" });
  }),

  getPost: tryCatchBlock(null, async (req, res, next) => {
    const userID = req.params.userID;

    const post = new Post({});
    const postList = await post.getPost(userID);

    return res.status(200).send({ message: "GET_POST_SUCCESS", data: postList });
  }),
  setLikeComment: tryCatchBlock(null, async (req, res, next) => {
    const {commentID,targetUserID,command} = req.body;

    const post = new Post({});
    await post.setLikeComment(commentID, targetUserID,command);
    return res.status(200).send({message: "SET_LIKE_COMMENT_SUCCESSFULLY"});
  })
};
