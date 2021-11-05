const database = require("../util/database");
<<<<<<< HEAD
const tryCatchBlock = require("../util/function").tryCatchBlockForModule;
const HttpError = require("../models/http-error");

=======
const HttpError = require("./http-error.js");
const { isJSONType } = require("ajv/dist/compile/rules");
>>>>>>> e971ced26dae8e3e6f55b65484f43908df05f226
module.exports = {
  validateEmail: tryCatchBlock(async (email) => {
    const [resultSet] = await database.execute(`SELECT * from User WHERE email LIKE '${email}'`);
    return resultSet.length === 0 ? true : false;
  }),

  validateUserId: tryCatchBlock(async (userId) => {
    const [resultSet] = await database.execute(`SELECT * from User WHERE userId LIKE '${userId}'`);
    return resultSet.length === 1 ? true : false;
  }),

  getUserIdByEmail: tryCatchBlock(async (email) => {
    const [resultSet] = await database.execute(`SELECT userId from User WHERE email LIKE '${email}'`);
    return resultSet.length === 1 ? resultSet[0].userId : null;
  }),

  signUp: tryCatchBlock(async (email, password, name) => {
    await database.execute(`INSERT INTO User(userId,email,password,name,status) VALUES(uuid(),'${email}','${password}','${name}',0)`);
  }),

  signIn: tryCatchBlock(async (email, password) => {
    const [resultSet] = await database.execute(`SELECT * FROM User WHERE email LIKE '${email}' AND password LIKE '${password}'`);
    return resultSet.length === 0 ? null : { userId: resultSet[0].userID, avatar: resultSet[0].avatar };
  }),
  changePassword: tryCatchBlock(async (userId, password) => {
    await database.execute(`UPDATE User SET password = '${password}' WHERE userId LIKE '${userId}'`);
  }),
};
