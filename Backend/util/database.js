const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "tinpet.clm9yz8uubsm.us-east-2.rds.amazonaws.com",
  user: "admin",
  database: "tinpet",
  password: "dung1234",
  multipleStatements: true,
});

module.exports = pool.promise();
