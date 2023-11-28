const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'careerhub',
    user: 'SEVEN',
    password: "SE7"
  });

connection.query(
  `CREATE TABLE IF NOT EXISTS Entry (
    SNO integer auto_increment primary key,
    name varchar(40) not null,
    contact varchar(11) not null,
    password varchar(15) not null,
    title varchar(8) not null
  )`,
  function(err, results) {
    if (err) {
      console.error(err);
    } else {
      console.log("Success");
    }
    connection.close();
  }
);
