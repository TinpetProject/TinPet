const jwt = require("jsonwebtoken");
<<<<<<< HEAD
=======
const database = require("../util/database");
const crypto = require("crypto");
const tryCatchBlock = require("../util/function").tryCatchBlockForModule;
>>>>>>> 689a9106b11758fc3d5585c247e28da2c69a1b8e
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
