const database = require("../util/database");
const tryCatchBlock = require("../util/function").tryCatchBlockForModule;
const HttpError = require("../models/http-error");

module.exports = {
  validateEmail: tryCatchBlock(async (email) => {
    const [resultSet] = await database.execute(`SELECT * from User WHERE email LIKE '${email}'`);
    return resultSet.length === 0 ? true : false;
  }),

  validateUserID: tryCatchBlock(async (userID) => {
    const [resultSet] = await database.execute(`SELECT * from User WHERE userID LIKE '${userID}'`);
    return resultSet.length === 1 ? true : false;
  }),

  getUserIDByEmail: tryCatchBlock(async (email) => {
    const [resultSet] = await database.execute(`SELECT userID from User WHERE email LIKE '${email}'`);
    return resultSet.length === 1 ? resultSet[0].userID : null;
  }),

  signUp: tryCatchBlock(async (email, password, name) => {
    await database.execute(
      `INSERT INTO User(userID,email,password,name,status,createdAt,updatedAt) VALUES(uuid(),'${email}','${password}','${name}',0,'2021-11-05 04:00:58','2021-11-05 04:00:58')`
    );
  }),

  signIn: tryCatchBlock(async (email, password) => {
    const [resultSet] = await database.execute(`SELECT * FROM User WHERE email LIKE '${email}' AND password LIKE '${password}'`);
    return resultSet.length === 0 ? null : { userID: resultSet[0].userID, avatar: resultSet[0].avatar };
  }),

  getProfile: tryCatchBlock(async (userID) => {
    // get user: name,nickname,avatar,background,intro,pics
    const [resultSet] = await database.execute(
      `SELECT u.name, u.nickname, u.avatar, u.backgroundImage, u.address, p.dob, p.genderID,
        (SELECT GROUP_CONCAT(f.name SEPARATOR ', ') FROM Property f, PetProperty pp WHERE f.propertyID = pp.propertyID AND pp.petID = p.petID GROUP BY p.petID) AS favourite
    FROM User u JOIN Pet p ON u.userID = p.userID
      WHERE p.userID = '${userID}';`
    );
    return resultSet.length === 0 ? null : resultSet[0];
  }),

  getRecentImgs: tryCatchBlock(async (userID) => {
    // get user: name,nickname,avatar,background,intro,pics
    const [resultSet] = await database.execute(
      `SELECT link
      FROM User usr
      JOIN Album al ON usr.userID = al.userID
      JOIN Photo ph ON al.albumID = ph.albumID
      WHERE usr.userID LIKE '${userID}'
      ORDER BY ph.createdAt LIMIT 9`
    );
    return resultSet.length === 0 ? [] : resultSet.map((result) => result.link);
  }),

  sendMessage: tryCatchBlock(async (userID, targetUserID, content) => {
    // get user: name,nickname,avatar,background,intro,pics
    let [resultSet] = await database.query(
      `CALL Proc_SendMessage('c0646e0a-460b-11ec-a250-892621329b72','11272983-4328-1c6e-8b08-768121fccb40','TESTING MESSAGE',@returnValue); SELECT @returnValue;`
    );
    const messageID = resultSet[1][0]["@returnValue"];
    return messageID;
  }),

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

  changePassword: tryCatchBlock(async (userID, password) => {
    await database.execute(`UPDATE User SET password = '${password}' WHERE userID LIKE '${userID}'`);
  }),
};
