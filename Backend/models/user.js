const database = require("../util/database");
const HttpError = require("../models/http-error");

module.exports = {
  validateEmail: async (email) => {
    try {
      const result = await database.execute(`SELECT * from User WHERE email LIKE '${email}'`);
      return result[0].length === 0 ? true : false;
    } catch (error) {
      console.log("Error in User.validateEmail:::", error);
      throw new HttpError("SERVER_INTERNAL_ERROR", 500);
    }
  },
  validateUserId: async (userId) => {
    try {
      const result = await database.execute(`SELECT * from User WHERE userId LIKE '${userId}'`);
      return result[0].length === 1 ? true : false;
    } catch (error) {
      console.log("Error in User.validateUserId:::", error);
      throw new HttpError("SERVER_INTERNAL_ERROR", 500);
    }
  },
  getUserIdByEmail: async (email) => {
    try {
      const result = await database.execute(`SELECT userId from User WHERE email LIKE '${email}'`);
      return result[0].length === 1 ? result[0][0].userId : null;
    } catch (error) {
      console.log("Error in User.getUserIdByEmail:::", error);
      throw new HttpError("SERVER_INTERNAL_ERROR", 500);
    }
  },
  signUp: async (email, password, name) => {
    try {
      await database.execute(
        `INSERT INTO User(userId,email,password,name,status) VALUES(uuid(),'${email}','${password}','${name}',0)`
      );
    } catch (error) {
      console.log("Error in User.signUp:::", error);
      throw new HttpError("SERVER_INTERNAL_ERROR", 500);
    }
  },
  signIn: async (email, password) => {
    try {
      const result = await database.execute(
        `SELECT * FROM User WHERE email LIKE '${email}' AND password LIKE '${password}'`
      );
      return result[0].length === 0 ? null : { userId: result[0][0].userId, avatar: result[0][0].avatar };
    } catch (error) {
      console.log("Error in User.signIn:::", error);
      throw new HttpError("SERVER_INTERNAL_ERROR", 500);
    }
  },
  changePassword: async (userId, password) => {
    try {
      await database.execute(`UPDATE User SET password = '${password}' WHERE userId LIKE '${userId}'`);
    } catch (error) {
      console.log("Error in User.changePassword:::", error);
      throw new HttpError("SERVER_INTERNAL_ERROR", 500);
    }
  },
};
