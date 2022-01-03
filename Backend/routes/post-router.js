const express = require("express");
const router = express.Router();
const postController = require("../controllers/post-controller.js");
const checkAuth = require("../middleware/check-auth");
router.post("/:postID/comment", postController.sendCommentByPost);
router.get("/:postID/comment", postController.getCommentByPost);
router.use(checkAuth);

// router.get("/:targetUserID/:offset", postController.getUserPostByOffset);




router.post("/:postID/like", postController.likePost);

router.get("/:userID", postController.getPost);

router.post("/comment",postController.setLikeComment)
module.exports = router;
