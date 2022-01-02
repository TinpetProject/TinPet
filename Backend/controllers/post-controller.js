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
};
