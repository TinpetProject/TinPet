const mysql = require("mysql2");

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  database: DB_DATABASE,
  password: DB_PASSWORD,
  multipleStatements: true,
});

module.exports = pool.promise();
