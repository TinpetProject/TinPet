const database = require("../util/database");
const tryCatchBlock = require("../util/function").tryCatchBlockForModule;

module.exports = class Post {
  constructor(data) {
    this.postID = data.postID;
  }

  static isPostIDExist = tryCatchBlock(async (postID) => {
    const [resultSet] = await database.execute(`SELECT * from Post WHERE postID LIKE '${postID}'`);
    return resultSet.length === 1 ? true : false;
  });

  getCommentByPost = tryCatchBlock(async () => {
    // get comment
    const [resultSet] = await database.query(`CALL Proc_GetComment('${this.postID}');`);
    return resultSet.length === 0 ? null : resultSet[0];
  });

  sendCommentByPost = tryCatchBlock(async (userID, content) => {
    // send comment
    const [resultSet] = await database.query(
      `CALL Proc_SendComment('${userID}','${this.postID}','${content}',@returnValue); SELECT @returnValue;`
    );

    return resultSet.length === 0 ? null : resultSet[1][0]["@returnValue"];
  });

  likePost = tryCatchBlock(async (userID) => {
    // like poss
    const [resultSet] = await database.query(`CALL Proc_LikePost('${userID}','${this.postID}');`);

    return resultSet.length === 0 ? null : resultSet[0];
  });

  getPost = tryCatchBlock(async (userID) => {
    // like poss
    const [resultSet] = await database.query(`CALL Proc_GetPost('${userID}');`);

    return resultSet.length === 0 ? null : resultSet[0];
  });

  setLikeComment = tryCatchBlock(async (commentID,targetUserID,command) =>{
    const [resultSet] = await database.query(`CALL Proc_ProcessLikeComment('${commentID}','${targetUserID}','${command}')`);
  })
};
