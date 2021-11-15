const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "Tinpet",
  password: "Phuongkho1",
  multipleStatements: true,
});

module.exports = pool.promise();
