const jwt = require("jsonwebtoken");
const database = require("../util/database");
const { getRandomString } = require("../util/function");
const tryCatchBlock = require("../util/function").tryCatchBlockForModule;
module.exports = {
  createToken: (payload) => {
    token = jwt.sign(payload, process.env.TOKEN_SECURITY_KEY, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return token;
  },
  createResetPwLink: tryCatchBlock(async (userID) => {
    const resetPwToken = getRandomString();
    await database.execute(
      `INSERT INTO ResetToken(token,userID,createdAt,updatedAt) VALUES('${resetPwToken}','${userID}','2021-11-05 04:00:58','2021-11-05 04:00:58')`
    );
    return `${process.env.FE_BASE_URL}/reset-password/${resetPwToken}`;
  }),
  deleteResetPwToken: tryCatchBlock(async (resetPwToken) => {
    await database.execute(`DELETE FROM ResetToken WHERE token LIKE '${resetPwToken}'`);
  }),
  validateResetPwToken: tryCatchBlock(async (resetPwToken) => {
    const [resultSet] = await database.execute(`SELECT userID FROM ResetToken WHERE token LIKE '${resetPwToken}'`);
    return resultSet.length === 1 ? resultSet[0].userID : false;
  }),
};
