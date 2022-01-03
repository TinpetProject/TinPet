const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller.js");
const checkAuth = require("../middleware/check-auth");

router.use(checkAuth);

router.get("/brief/:targetUserID", userController.getBriefInfo);

router.get("/:userID/profile", userController.getProfile);

router.get("/:userID/recent-imgs", userController.getRecentImgs);

router.get("/userID", userController.getUserID);

router.get("/matches/:userID",userController.getMatches)


router.post("/matches",userController.handleRequestMatches);

router.get("/follow/:userID",userController.getFollowerList);

router.post("/follow",userController.removeFollower);

router.get("/friend/:userID",userController.getFriendList);

router.post("/friend",userController.removeFriend)

router.post("/post", userController.uploadPost);

// router.get("/post/:offset", userController.getPostByOffset);

module.exports = router;
