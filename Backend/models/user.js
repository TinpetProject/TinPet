const database = require("../util/database");
const tryCatchBlock = require("../util/function").tryCatchBlockForModule;
const HttpError = require("../models/http-error");

module.exports = class User {
  constructor(userData) {
    this.email = userData.email;
    this.password = userData.password;
    this.name = userData.name;
    this.userID = userData.userID;
  }

  static isEmailExist = tryCatchBlock(async (email) => {
    const [resultSet] = await database.execute(`SELECT * from User WHERE email LIKE '${email}'`);
    return resultSet.length === 0 ? false : true;
  });

  static isUserIDExist = tryCatchBlock(async (userID) => {
    const [resultSet] = await database.execute(`SELECT * from User WHERE userID LIKE '${userID}'`);
    return resultSet.length === 1 ? true : false;
  });

  static getUserIDByEmail = tryCatchBlock(async (email) => {
    const [resultSet] = await database.execute(`SELECT userID from User WHERE email LIKE '${email}'`);
    return resultSet.length === 1 ? resultSet[0].userID : null;
  });

  signUp = tryCatchBlock(async () => {
    await database.execute(
      `INSERT INTO User(userID,email,password,name,status,createdAt,updatedAt) VALUES(uuid(),'${this.email}','${this.password}','${this.name}',0,'2021-11-05 04:00:58','2021-11-05 04:00:58')`
    );
  });

  signIn = tryCatchBlock(async () => {
    const [resultSet] = await database.execute(`SELECT * FROM User WHERE email LIKE '${this.email}' AND password LIKE '${this.password}'`);
    return resultSet.length === 0 ? null : { userID: resultSet[0].userID, avatar: resultSet[0].avatar };
  });

  getProfile = tryCatchBlock(async () => {
    // get user: name,nickname,avatar,background,intro,pics
    const [resultSet] = await database.execute(
      `SELECT u.name, u.nickname, u.avatar, u.backgroundImage, u.address, p.dob, p.genderID,
        (SELECT GROUP_CONCAT(f.name SEPARATOR ', ') FROM Property f, PetProperty pp WHERE f.propertyID = pp.propertyID AND pp.petID = p.petID GROUP BY p.petID) AS favourite
    FROM User u JOIN Pet p ON u.userID = p.userID
      WHERE p.userID = '${this.userID}';`
    );
    return resultSet.length === 0 ? null : resultSet[0];
  });

  getRecentImgs = tryCatchBlock(async () => {
    // get user: name,nickname,avatar,background,intro,pics
    const [resultSet] = await database.execute(
      `SELECT link
      FROM User usr
      JOIN Album al ON usr.userID = al.userID
      JOIN Photo ph ON al.albumID = ph.albumID
      WHERE usr.userID LIKE '${this.userID}'
      ORDER BY ph.createdAt LIMIT 9`
    );
    return resultSet.length === 0 ? [] : resultSet.map((result) => result.link);
  });

  sendMessage = tryCatchBlock(async (targetUserID, content) => {
    const [resultSet] = await database.query(
      `CALL Proc_SendMessage('${this.userID}','${targetUserID}','${content}',@returnValue); SELECT @returnValue;`
    );
    const messageID = resultSet[1][0]["@returnValue"];
    return messageID;
  });

  getConversationList = tryCatchBlock(async () => {
    const [resultSet] = await database.query(`CALL Proc_GetUserConversation('${this.userID}')`);
    const conversationlist = resultSet[0].map((conversation) => ({
      avatar: conversation.targetUserAvatar,
      userID: conversation.targetUserID,
      name: conversation.targetUserName,
      message: conversation.message,
      isSeen: !!conversation.status,
      sender: conversation.sender,
    }));
    return conversationlist;
  });

  getMessageByOffset = tryCatchBlock(async (targetUserID, offset) => {
    const [resultSet] = await database.query(`CALL Proc_GetConversationMessagesByOffset('${this.userID}','${targetUserID}','${offset} ')`);
    const conversation = resultSet[0].map((message) => ({
      messageID: message.messageID,
      content: message.content,
      userID: message.userID,
    }));
    return conversation;
  });

  seenMessage = tryCatchBlock(async (targetUserID) => {
    return await database.query(`CALL Proc_UpdateMessagesStatus('${this.userID}','${targetUserID}')`);
  });

  changePassword = tryCatchBlock(async () => {
    return await database.execute(`UPDATE User SET password = '${this.password}' WHERE userID LIKE '${this.userID}'`);
  });

  getBriefInfo = tryCatchBlock(async (targetUserID) => {
    const [resultSet] = await database.execute(`SELECT name,avatar FROM User WHERE userID LIKE '${targetUserID}'`);
    const user = {
      userID: targetUserID,
      name: resultSet[0].name,
      avatar: resultSet[0].avatar,
    };
    return user;
  });
};
