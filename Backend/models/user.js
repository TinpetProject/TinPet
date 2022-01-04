const database = require("../util/database");
const tryCatchBlock = require("../util/function").tryCatchBlockForModule;
const HttpError = require("../models/http-error");
const md5 = require("md5");
module.exports = class User {
  constructor(userData) {
    this.email = userData.email;
    this.password = md5(userData.password);
    this.name = userData.name;
    this.userID = userData.userID;
    // this.address = userData.address;
    // this.avatar = userData.avatar;
  }

  static isEmailExist = tryCatchBlock(async (email) => {
    const [resultSet] = await database.execute(`SELECT * from User WHERE email LIKE '${email}'`);
    return resultSet.length === 0 ? false : true;
  });

  static getUserName = tryCatchBlock(async (userID) => {
    const [resultSet] = await database.execute(`SELECT * from User WHERE userID LIKE '${userID}'`);
    return resultSet;
  });

  static handleRequestMatches = tryCatchBlock(async (userID, targetUserID, command) => {
    const [resultSet] = await database.execute(
      ` CALL Proc_HandleRequestMatches('${userID}','${targetUserID}','${command}'); `
    );
  });
  static removeFollower = tryCatchBlock(async (userID, targetUserID) => {
    const [resultSet] = await database.execute(
      `call Proc_RemoveFollower('${userID}','${targetUserID}');`
    );
  });

  static removeFriend = tryCatchBlock(async (userID, targetUserID) => {
    const [resultSet] = await database.execute(
      `call Proc_RemoveFriend('${userID}','${targetUserID}');`
    );
  });

  static isUserIDExist = tryCatchBlock(async (userID) => {
    const [resultSet] = await database.execute(`SELECT * from User WHERE userID LIKE '${userID}'`);
    return resultSet.length === 1 ? true : false;
  });

  static getUserIDByEmail = tryCatchBlock(async (email) => {
    const [resultSet] = await database.execute(
      `SELECT userID from User WHERE email LIKE '${email}'`
    );
    return resultSet.length === 1 ? resultSet[0].userID : null;
  });

  signUp = tryCatchBlock(async () => {
    await database.execute(
      `INSERT INTO User(userID,email,password,name,status,createdAt,updatedAt,avatar,address) VALUES(uuid(),'${this.email}','${this.password}','${this.name}',0,CURRENT_TIMESTAMP(),CURRENT_TIMESTAMP(),'${this.avatar}','${this.address}')`
    );
  });

  signIn = tryCatchBlock(async () => {
    const [resultSet] = await database.execute(
      `SELECT * FROM User WHERE email LIKE '${this.email}' AND password LIKE '${this.password}'`
    );
    return resultSet.length === 0
      ? null
      : { userID: resultSet[0].userID, avatar: resultSet[0].avatar };
  });

  getProfile = tryCatchBlock(async () => {
    // get user: name,nickname,avatar,background,intro,pics
    const [resultSet] = await database.query(`CALL Proc_GetUserProfile('${this.userID}');`);
    if (resultSet[0][0]) resultSet[0][0].gender = resultSet[0][0].gender == 1 ? "Male" : "Female";
    return resultSet.length === 0 ? null : resultSet[0][0];
  });

  getRecentImgs = tryCatchBlock(async () => {
    // get user: name,nickname,avatar,background,intro,pics
    const [resultSet] = await database.execute(`CALL Proc_GetUserRecentImage('${this.userID}')`);
    return resultSet.length === 0 ? [] : resultSet[0];
  });

  getPostByOffset = tryCatchBlock(async (offset) => {
    // get user: name,nickname,avatar,background,intro,pics
    const [resultSet] = await database.execute(
      `CALL Proc_GetPostByUserIDOffset10('${this.userID}',${offset})`
    );
    return resultSet.length === 0 ? [] : resultSet[0];
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
    const [resultSet] = await database.query(
      `CALL Proc_GetConversationMessagesByOffset('${this.userID}','${targetUserID}','${offset} ')`
    );
    const conversation = resultSet[0].map((message) => ({
      messageID: message.messageID,
      content: message.content,
      userID: message.userID,
    }));
    return conversation;
  });

  seenMessage = tryCatchBlock(async (targetUserID) => {
    console.log("is seen");
    return await database.query(
      `CALL Proc_UpdateMessagesStatus('${this.userID}','${targetUserID}')`
    );
  });

  changePassword = tryCatchBlock(async () => {
    return await database.execute(
      `UPDATE User SET password = '${this.password}' WHERE userID LIKE '${this.userID}'`
    );
  });

  uploadPost = tryCatchBlock(async (title, content) => {
    const [resultSet] = await database.query(
      `CALL Proc_UploadPost('${this.userID}','${title}','${content}', @returnValue); SELECT @returnValue;`
    );
    return resultSet.length === 0 ? null : resultSet[1][0]["@returnValue"];
  });

  getBriefInfo = tryCatchBlock(async (targetUserID) => {
    const [resultSet] = await database.execute(
      `SELECT name,avatar FROM User WHERE userID LIKE '${targetUserID}'`
    );
    const user = {
      userID: targetUserID,
      name: resultSet[0].name,
      avatar: resultSet[0].avatar,
    };
    return user;
  });

  getMatches = tryCatchBlock(async () => {
    const [resultSet] = await database.execute(`Call Proc_GetMatches('${this.userID}')`);
    return resultSet[0];
  });

  getFollowerList = tryCatchBlock(async () => {
    const [resultSet] = await database.execute(`Call Proc_GetFollowerList('${this.userID}')`);
    return resultSet[0];
  });

  getFriendList = tryCatchBlock(async () => {
    const [resultSet] = await database.execute(`Call Proc_GetFriendList('${this.userID}')`);
    return resultSet[0];
  })
  uploadPost = tryCatchBlock(async (title, content, links) => {

    const [resultSet] = await database.query(`CALL Proc_UploadPost('${this.userID}','${title}','${content}', @returnValue); SELECT @returnValue;`);
    const postID = resultSet[1][0]["@returnValue"]

    for (var link in links){
      database.query(`CALL Proc_UploadPhotoToPost('${postID}','${this.userID}','${links[link]}', @returnValue)`);
    }

    return resultSet.length === 0 ? null : resultSet[1][0]["@returnValue"];
  });
};
