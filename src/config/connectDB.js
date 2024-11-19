import mysql from "mysql2/promise";

const connection = mysql.createPool({
  host: 'localhost',
  user: 'diuwinorg',
  password: 'FgGp9ppyQfePFrTHkOxC',
  database: 'diuwinorg',
});

export default connection;
