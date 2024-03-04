require ('dotenv').config();
const mysql = require("mysql");

//For Local DB
// console.log('check',process.env.db_port);

var connection = mysql.createConnection({
    host: process.env.db_host,
    port: process.env.db_port,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_database,
    multipleStatements: true
});



connection.connect(function (err) {
    if (err) {
      console.log(err);
      console.log(`Error occured while connecting to helpApp`);
    } else {
      console.log(`Successfully connected to DB`);
    }
  });

  
  module.exports = connection;
