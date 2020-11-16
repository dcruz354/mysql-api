const mysql = require('mysql');
const queries = require('./queries/orderdetails.queries');
const authQueries = require('./queries/auth.queries');

// Get the Host from Environment or use default
const host = process.env.DB_HOST || 'localhost';

// Get the User for DB from Environment or use default
const user = process.env.DB_USER || 'root';

// Get the Password for DB from Environment or use default
const password = process.env.DB_PASS || 'pass123';

// Get the Database from Environment or use default
const database = process.env.DB_DATABASE || 'orderdb';

// Create the connection with required details
const con = mysql.createConnection({
    host,
    user,
    password,
    database
  });

  // Connect to the database.
con.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');

    con.query(authQueries.CREATE_USERS_TABLE, function(err, result) {
      if (err) throw err;
      console.log('Users table created or exists already!');
    });
  
    con.query(queries.CREATE_ORDERDETAILS_TABLE, function(err, result) {
      if (err) throw err;
      console.log('Orderdetails table created or exists already!');
    });
  });
  
  module.exports = con;