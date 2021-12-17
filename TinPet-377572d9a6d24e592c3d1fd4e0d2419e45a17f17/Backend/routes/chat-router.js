const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chat-controller");
const checkAuth = require("../middleware/check-auth");

router.use(checkAuth);

router.post("", chatController.sendMessage);

router.get("", chatController.getMessageList);

router.get("/:targetUserID/:offset", chatController.getMessageByOffset);

module.exports = router;
