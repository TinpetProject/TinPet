const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "tinpet",
    password: "gunny318",
});

module.exports = pool.promise();