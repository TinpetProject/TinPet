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

    socket.triggerEmit(targetUserID, "message", { content, userID, messageID });
    // socket.triggerEmit(targetUserID, "getNotification", {
    //   content,
    //   userID,
    //   messageID,
    //   targetUserID,
    // });
    socket.releaseNewMessage(targetUserID, {
      content,
      userID,
      messageID,
      targetUserID,
    });
    

    return res.status(200).send({ message: "SEND_MESSAGE_SUCCESS", data: { messageID } });
  }),

  getMessageList: tryCatchBlock(null, async (req, res, next) => {
    const userID = req.userData.userID;
    const user = new User({ userID });

    const conversationList = await user.getConversationList();

    return res.status(200).send({
      message: "SEND_MESSAGE_SUCCESS",
      data: conversationList,
      // data: [
      //   {
      //     avatar: "https://media.travelmag.vn/files/quyensok/2021/02/19/151744159_1858284524329401_8015280447006743040_n-1629.jpg",
      //     message: "tin nhắn với đinh khánh khang",
      //     isSeen: true,
      //     name: "Đinh Khánh Khang",
      //     receiveTime: "Testing Time",
      //     userID: "1139701f-7fb1-2b73-cce5-7797b077698d",
      //   },
      //   {
      //     avatar: "https://media.travelmag.vn/files/quyensok/2021/02/19/151744159_1858284524329401_8015280447006743040_n-1629.jpg",
      //     message: "tin nhắn với chung khánh toàn",
      //     isSeen: true,
      //     name: "Chung Khánh Toàn",
      //     receiveTime: "Testing Time",
      //     userID: "11272983-4328-1c6e-8b08-768121fccb40",
      //   },
      // ],
    });
  }),

  getMessageByOffset: tryCatchBlock(null, async (req, res, next) => {
    const userID = req.userData.userID;
    const targetUserID = req.params.targetUserID;
    const offset = req.params.offset;
    const user = new User({ userID });

    const conversationList = await user.getMessageByOffset(targetUserID, offset);

    let data;

    switch (req.params.targetUserID) {
      case "1139701f-7fb1-2b73-cce5-7797b077698d":
        data = [{ content: "tin nhắn với đinh khánh khang", userID: req.params.targetUserID, messageID: 123 }];
        break;
      default:
        data = [{ content: "tin nhắn với chung khánh toàn", userID: req.params.targetUserID, messageID: 123 }];
        break;
    }

    return res.status(200).send({ message: "SEND_MESSAGE_SUCCESS", data: conversationList });
  }),
};
