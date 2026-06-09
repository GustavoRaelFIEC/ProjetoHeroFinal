const mysql = require("mysql2");

const pool = mysql.createPool({
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
});

module.exports = pool.promise();