const jwt = require("jsonwebtoken");
const database = require("../util/database");
const crypto = require("crypto");
const tryCatchBlock = require("../util/function").tryCatchBlockForModule;
module.exports = {
  createToken: (payload) => {
    token = jwt.sign(payload, process.env.TOKEN_SECURITY_KEY, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return token;
  },
  createResetPwLink: tryCatchBlock(async (userId) => {
    const resetPwToken = crypto.randomBytes(32).toString("hex");
    await database.execute(`INSERT INTO ResetToken(token,userId) VALUES('${resetPwToken}','${userId}')`);

    return `${process.env.FE_BASE_URL}/reset-passwod/${resetPwToken}`;
  }),
  validateResetPwToken: tryCatchBlock(async (resetPwToken) => {
    const [resultSet] = await database.execute(`SELECT userId FROM ResetToken WHERE token LIKE '${resetPwToken}'`);
    return resultSet.length === 1 ? resultSet[0].userId : false;
  }),
};
