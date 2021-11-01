const jwt = require("jsonwebtoken");
const database = require("../util/database");
const crypto = require("crypto");
module.exports = {
  createToken: (payload) => {
    token = jwt.sign(payload, process.env.TOKEN_SECURITY_KEY, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return token;
  },
  createResetPwLink: async (userId) => {
    try {
      const resetPwToken = crypto.randomBytes(32).toString("hex");
      console.log("save token");
      await database.execute(`INSERT INTO ResetToken(token,userId) VALUES('${resetPwToken}','${userId}')`);

      return `${process.env.FE_BASE_URL}/reset-passwod/${resetPwToken}`;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  validateResetPwToken: async (resetPwToken) => {
    try {
      const result = await database.execute(`SELECT userId FROM ResetToken WHERE token LIKE '${resetPwToken}'`);
      return result[0].length === 1 ? result[0][0].userId : false;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
