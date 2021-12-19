const database = require("../util/database");
const tryCatchBlock = require("../util/function").tryCatchBlockForModule;
const HttpError = require("../models/http-error");

module.exports = class Pet {
  constructor(petData) {
    this.userID = petData.userID;
    // this.petID = petData.petID;
  }

  static isUserIDExist = tryCatchBlock(async (userID) => {
    const [resultSet] = await database.execute(`SELECT * from User WHERE userID LIKE '${userID}'`);
    return resultSet.length === 1 ? true : false;
  });

  getPetProfile = tryCatchBlock(async () => {
    
    const [resultSet] = await database.execute(
      `SELECT p.petID, p.name, p.dob, p.genderID
       FROM Pet p
       WHERE p.userID = '${this.userID}';`
    );

    if (resultSet.length === 0) return null;
    else
    {
        this.petID = resultSet[0].petID;
        return resultSet[0];
    }

  });

  getPetSuggestion = tryCatchBlock(async () => {
    const [resultSet] = await database.execute(
        `SELECT p.userID, p.petID, p.name, p.dob, p.genderID, r.isLiked, r.isMatched, r.isFriend
        FROM  Pet p LEFT JOIN (SELECT * FROM Relationship WHERE targetUserID = '${this.userID}') r
        ON p.userId = r.userID 
        WHERE p.userId != '${this.userID}';`
      );

    return resultSet.length === 0 ? null : resultSet;
  });

  like = tryCatchBlock(async (targetUserID) => {
    const result = await database.execute(
      `INSERT INTO tinpet.Relationship 
      (userID, targetUserID, isLiked)
      VALUES 
      ('${this.userID}', '${targetUserID}', 1)
      ON DUPLICATE KEY UPDATE
      isLiked = VALUES(isLiked);`
    );

    return result[0].affectedRows === 1 ? true : false;
  });

  follow = tryCatchBlock(async (targetUserID) => {
    // const result = await database.execute(
    //     `INSERT INTO tinpet.Relationship 
    //     (userID, targetUserID, isFollowed)
    //     VALUES 
    //     ('${this.userID}', '${targetUserID}', 1)
    //     ON DUPLICATE KEY UPDATE
    //     isFollowed = VALUES(isFollowed);`
    //   );
  
    // return result[0].affectedRows === 1 ? true : false;
    return null;
  });

//   getConversationList = tryCatchBlock(async () => {
//     const [resultSet] = await database.query(`CALL Proc_GetUserConversation('${this.userID}')`);
//     const conversationlist = resultSet[0].map((conversation) => ({
//       avatar: conversation.targetUserAvatar,
//       userID: conversation.targetUserID,
//       name: conversation.targetUserName,
//       message: conversation.message,
//       isSeen: !!conversation.status,
//     }));
//     console.log(conversationlist);
//     return conversationlist;
//   });

//   getMessageByOffset = tryCatchBlock(async (targetUserID, offset) => {
//     const [resultSet] = await database.query(`CALL Proc_GetConversationMessagesByOffset('${this.userID}','${targetUserID}','${offset} ')`);
//     const conversation = resultSet[0].map((message) => ({
//       messageID: message.messageID,
//       content: message.content,
//       userID: message.userID,
//     }));
//     return conversation;
//   });

  // getPostByOffset: tryCatchBlock(async (userID, offset) => {
  //   const expect = {
  //     postID: "ádjskfflajkl jklsad",
  //     title: "dung ml",
  //     content: "dung ml oi viet stored nao",
  //     photos: [
  //       {
  //         photoID: 1,
  //         link: "bcv.com",
  //       },
  //       {
  //         photoID: 2,
  //         link: "bcv2.com",
  //       },
  //     ],
  //     tag: ["userID1", "userID2"],
  //     video: [],
  //     createdAt: "25-10-2021",
  //     totalComment: 25,
  //     totalReaction: 40,
  //   };

  //   return resultSet.length === 0 ? [] : resultSet.map((result) => result.link);
  // }),

  // like: tryCatchBlock(async (userID, targeUserID) => {
  //   await database.execute(`INSERT INTO Relationship(userID,targetUserID,isLiked) VALUES ('${userID}','${targetUserID}',1)`);
  // }),

  // match: tryCatchBlock(async (userID, targeUserID) => {
  //   await database.execute(`INSERT INTO Relationship(userID,targetUserID,isMatched) VALUES ('${userID}','${targetUserID}',1)`);
  // }),
};
