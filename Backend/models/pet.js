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
    

    //get pet: id, avatar, background, 
    const [resultSet] = await database.execute(
      `SELECT p.petID, p.name, p.dob, p.genderID, u.avatar, u.backgroundImage, u.address,
      (SELECT GROUP_CONCAT(f.name SEPARATOR ', ') FROM Property f, PetProperty pp 
      WHERE f.propertyID = pp.propertyID AND pp.petID = p.petID GROUP BY p.petID) AS favourite,
      (SELECT COUNT(*) FROM Relationship r JOIN Pet p
      ON r.userID = p.userID OR r.targetUserID = p.userID
      WHERE p.userID = '142e4cd5-771b-4bbe-01ec-2b4e69ea122c'
      AND r.isLiked='1') AS follow
      FROM Pet p JOIN User u ON u.userID = p.userID
       WHERE p.userID = '${this.userID}';`
    );

    if (resultSet.length === 0) return null;
    else
    {
        this.petID = resultSet[0].petID;
        return resultSet[0];
    }

  });

  getRecentImgs = tryCatchBlock(async () => {
      // get user: name,nickname,avatar,background,intro,pics
      const [resultSet] = await database.execute(
        `SELECT link, title
        FROM User usr
        JOIN Album al ON usr.userID = al.userID
        JOIN Photo ph ON al.albumID = ph.albumID
        WHERE usr.userID LIKE '${this.userID}'
        ORDER BY ph.createdAt LIMIT 4`
      );
      return resultSet.length === 0 ? [] : resultSet.map((result) => result.link);
    });

  getPetSuggestion = tryCatchBlock(async (start, end) => {
    // const [resultSet] = await database.execute(
    //     `SELECT p.userID, p.petID, p.name, p.dob, p.genderID, r.isLiked, r.isMatched, r.isFriend
    //     FROM  Pet p LEFT JOIN (SELECT * FROM Relationship WHERE targetUserID = '${this.userID}') r
    //     ON p.userId = r.userID 
    //     WHERE p.userId != '${this.userID}';`
    //   );
    
    try {
      await r_database.connect();
    }
    catch(err)
    {
      console.log('Already open connection to Redis!');
    }


    const r1 = await database.execute(`SELECT petID FROM Pet WHERE userID = '${this.userID}'`);
    const petID = r1[0][0].petID;
    const id_list = JSON.parse(await r_database.get(petID));
    // const id_list = JSON.parse(await r_database.get('testadsds'));
    if (id_list)
    {
      const petID_str = id_list.slice(start, end).map(a => "'" + a + "'").join(' , ');
      const [resultSet] = await database.execute(
          `SELECT p.*, pe.userID, r.isLiked, r.isMatched, r.isFriend
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
    const result = await database.execute(
        `INSERT INTO tinpet.Relationship 
        (userID, targetUserID, isMatched)
        VALUES 
        ('${this.userID}', '${targetUserID}', 1)
        ON DUPLICATE KEY UPDATE
        isMatched = VALUES(isMatched);`
      );
    
    if (result[0].affectedRows === 1)
    {
      const rela = await database.execute(`SELECT isMatched
      FROM Relationship
      WHERE userID = '${targetUserID}'
      AND targetUserID = '${this.userID}';`);
      const isMatched = rela[0][0].isMatched;
      if (isMatched === 1)
      {
        const result_friend = await database.execute(
          `INSERT INTO tinpet.Relationship 
          (userID, targetUserID, isFriend)
          VALUES 
          ('${this.userID}', '${targetUserID}', 1)
          ON DUPLICATE KEY UPDATE
          isFriend = VALUES(isFriend);`
        );
        return result_friend[0].affectedRows === 1 ? 2 : 1;
      }
      else 
        return 1;
    }
    return 0;
    // return null;
  });

  testRedis = tryCatchBlock(async () => {
    try {
      await r_database.connect();
    }
    catch(err)
    {
      console.log('Already open connection to Redis!');
      console.log(err)
    }
    const result = await r_database.get('7de791e4-19fd-1f90-f5e4-cbefc3792353')

    return result;
  });

  getBreeds = tryCatchBlock(async () =>{
    const [resultSet] = await database.execute(
      "select * from PetType order by name"
    );
    return resultSet.length === 0 ? [] : resultSet;
  })

  savePet = tryCatchBlock(async (petObject)=>{
    const [resultSet] = await database.query(`CALL Proc_StorePetInformation(
      '${petObject.petName}','${petObject.email}','${petObject.dob}','${petObject.breed}',${petObject.gender}
    );`);
  })

  changeInfoPet = tryCatchBlock(async (petObject) =>{
    const [resultSet] = await database.query(`CALL Proc_ChangePetInformation(
      '${petObject.petName}','${petObject.email}','${petObject.dob}',
      '${petObject.breed}',${petObject.gender},'${petObject.address}','${petObject.avtURL}'
    );`);
  })
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
