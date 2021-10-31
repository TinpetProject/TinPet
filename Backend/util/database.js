const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "Tinpet",
  password: "Phuongkho1",
});

module.exports = pool.promise();
