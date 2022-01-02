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
};
