const User = require("../models/user");
const Authentication = require("../models/authentication");
const nodemailer = require("nodemailer");
const tryCatchBlock = require("../util/function").tryCatchBlockForController;
const HttpError = require("../models/http-error");
const sendMessageSchema = require("../schemas/schemas").sendMessage;
const ioUtil = require("../util/socket");

module.exports = {
  sendMessage: tryCatchBlock(sendMessageSchema, async (req, res, next) => {
    console.log("send message");
    const { content, targetUserID } = req.body;
    const userID = req.userData.userID;
    const validTargetUserID = await User.validateUserID(targetUserID);
    if (!validTargetUserID) return next(new HttpError("SEND_MESSAGE_FAIL_RECEIVER_NOT_EXIST", 404));

    const messageID = await User.sendMessage(userID, targetUserID, content);

    ioUtil.triggerEmit(targetUserID, "message", { content, userID, messageID });

    return res.status(200).send({ message: "SEND_MESSAGE_SUCCESS", data: { messageID } });
  }),
  getMessageList: tryCatchBlock(null, async (req, res, next) => {
    return res.status(200).send({
      message: "SEND_MESSAGE_SUCCESS",
      data: [
        {
          avatar: "https://media.travelmag.vn/files/quyensok/2021/02/19/151744159_1858284524329401_8015280447006743040_n-1629.jpg",
          message: "tin nhắn với đinh khánh khang",
          isSeen: true,
          name: "Đinh Khánh Khang",
          receiveTime: "Testing Time",
          userID: "1139701f-7fb1-2b73-cce5-7797b077698d",
        },
        {
          avatar: "https://media.travelmag.vn/files/quyensok/2021/02/19/151744159_1858284524329401_8015280447006743040_n-1629.jpg",
          message: "tin nhắn với chung khánh toàn",
          isSeen: true,
          name: "Chung Khánh Toàn",
          receiveTime: "Testing Time",
          userID: "11272983-4328-1c6e-8b08-768121fccb40",
        },
      ],
    });
  }),
  getMessage: tryCatchBlock(null, async (req, res, next) => {
    let data;
    console.log(req.params.targetUserID);
    switch (req.params.targetUserID) {
      case "1139701f-7fb1-2b73-cce5-7797b077698d":
        data = [{ content: "tin nhắn với đinh khánh khang", userID: req.params.targetUserID, messageID: 123 }];
        break;
      default:
        data = [{ content: "tin nhắn với chung khánh toàn", userID: req.params.targetUserID, messageID: 123 }];
        break;
    }

    return res.status(200).send({ message: "SEND_MESSAGE_SUCCESS", data });
  }),
};
