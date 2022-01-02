const express = require("express");
const router = express.Router();
const postController = require("../controllers/post-controller.js");
const checkAuth = require("../middleware/check-auth");

router.use(checkAuth);

// router.get("/:targetUserID/:offset", postController.getUserPostByOffset);

router.get("/:postID/comment", postController.getCommentByPost);

module.exports = router;
