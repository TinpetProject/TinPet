const database = require("../util/database");
const r_database = require("../util/redis_database");
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

  getPetSuggestion = tryCatchBlock(async (start, end) => {
    try {
      await r_database.connect();
    }
    catch(err)
    {
      console.log('Already open connection to Redis!');
    }

    const r1 = await database.execute(`SELECT petID FROM Pet WHERE userID = '${this.userID}'`);
    const petID = r1[0][0].petID;
    // const id_list = JSON.parse(await r_database.get(petID));
    const id_list = JSON.parse(await r_database.get('testadsds'));
    if (id_list)
    {
      const petID_str = id_list.slice(start, end).map(a => "'" + a + "'").join(' , ');
      const [resultSet] = await database.execute(
          `SELECT p.*, r.isLiked, r.isMatched, r.isFriend 
          FROM View_PetInformation p, (Pet pe
          LEFT JOIN (SELECT * FROM Relationship WHERE targetUserID = '${this.userID}') r
          ON pe.userId = r.userID) 
          WHERE p.petID IN (${petID_str}) AND p.petID=pe.petID;`
        );
  
      return resultSet.length === 0 ? null : resultSet;
    }
    else
    {
      // create a publisher to push petID to Redis
      console.log('Publish to Redis!');
      const publisher = r_database.duplicate();
      await publisher.connect();
      await publisher.publish('new_pet_data', `${petID}`);
      return -1;
    } 
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

  testRedis = tryCatchBlock(async () => {
    await r_database.connect();
    const result = await r_database.get('7de791e4-19fd-1f90-f5e4-cbefc3792353')

    return result;
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
