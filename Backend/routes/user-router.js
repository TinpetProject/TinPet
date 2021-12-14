const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller.js");
const checkAuth = require("../middleware/check-auth");

router.use(checkAuth);

router.get("/profile", userController.getProfile);

router.get("/recent-imgs", userController.getRecentImgs);

// router.get("/post/:offset", userController.getPostByOffset);

module.exports = router;
