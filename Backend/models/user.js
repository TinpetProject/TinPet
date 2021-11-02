const database = require("../util/database");
const HttpError = require("./http-error.js");
const { isJSONType } = require("ajv/dist/compile/rules");
module.exports = {
  validateEmail: async (email) => {
    try {
      const result = await database.execute(`SELECT * from User WHERE email LIKE '${email}'`);
      return result[0].length === 0 ? true : false;
    } catch (error) {
      console.log("Error in User.signUp:::", error);
      throw new HttpError("SERVER_INTERNAL_ERROR", 500);
    }
  },
  signUp: async (email, password, name) => {
    try {
      await database.execute(
        `INSERT INTO User(userId,email,password,name) VALUES(uuid(),'${email}','${password}','${name}')`
      );
    } catch (error) {
      console.log("Error in User.signUp:::", error);
      throw new HttpError("SERVER_INTERNAL_ERROR", 500);
    }
  },
  signIn: async (email, password) => {
    try {
      const result = await database.execute(
        `SELECT * from User WHERE email LIKE '${email}' AND password LIKE '${password}'`
      );

      return result[0].length === 0 ? null : result[0][0];
    } catch (error) {
      console.log("Error in User.signIn:::", error);
      throw new HttpError("SERVER_INTERNAL_ERROR", 500);
    }
  },
};
