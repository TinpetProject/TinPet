const User = require("../models/user");
const tryCatchBlock = require("../util/function").tryCatchBlockForController;
const HttpError = require("../models/http-error");
const sendMessageSchema = require("../schemas/schemas").sendMessage;
const socket = require("../models/SocketIO");

module.exports = {
  sendMessage: tryCatchBlock(sendMessageSchema, async (req, res, next) => {
    const { content, targetUserID } = req.body;
    const userID = req.userData.userID;

    const userIDIsExist = await User.isUserIDExist(targetUserID);
    if (!userIDIsExist) return next(new HttpError("SEND_MESSAGE_FAIL_RECEIVER_NOT_EXIST", 404));

    const user = new User({ userID });
    const messageID = await user.sendMessage(targetUserID, content);

    socket.triggerEmit(targetUserID, "message", { content, userID, messageID, sender: userID });

    return res.status(200).send({ message: "SEND_MESSAGE_SUCCESS", data: { messageID } });
  }),

  getMessageList: tryCatchBlock(null, async (req, res, next) => {
    const userID = req.userData.userID;
    const user = new User({ userID });

    const conversationList = await user.getConversationList();

    return res.status(200).send({
      message: "SEND_MESSAGE_SUCCESS",
      data: conversationList,
    });
  }),

  getMessageByOffset: tryCatchBlock(null, async (req, res, next) => {
    const userID = req.userData.userID;
    const targetUserID = req.params.targetUserID;
    const offset = req.params.offset;
    const user = new User({ userID });

    const conversationList = await user.getMessageByOffset(targetUserID, offset);

    await user.seenMessage(targetUserID);

    return res.status(200).send({ message: "SEND_MESSAGE_SUCCESS", data: conversationList });
  }),
};
