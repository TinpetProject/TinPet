const User = require("../models/user");
const tryCatchBlock = require("../util/function").tryCatchBlockForController;
const HttpError = require("../models/http-error");
const socket = require("../models/SocketIO");
const sendNotificationSchema = require("../schemas/schemas").sendNotification;
const getNotificationSchema = require("../schemas/schemas").getNotification;

module.exports = {
  getNotification: tryCatchBlock(null, async (req, res, next) => {
    const userID = req.userData.userID;
    const user = new User({ userID });

  })
}