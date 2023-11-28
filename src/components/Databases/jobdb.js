const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'careerhub',
    user: 'SEVEN',
    password: "SE7"
  });

connection.query(
  `CREATE TABLE IF NOT EXISTS Job (
    SNO integer auto_increment primary key,
    company_name varchar(40) not null,
    stipend varchar(40) not null,
    experience varchar(40) not null,
    skills varchar(80) not null,
    location varchar(60) not null,
    other varchar(90) not null,
    field varchar(20) not null,
    candidate_name varchar(20) not null,
    candidate_email varchar(20) not null
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
