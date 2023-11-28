const express = require("express");
const mysql = require("mysql2");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  database: 'careerhub',
  user: 'Seven',
  password: 'SE7'
});

app.post('/login', (req, res) => {
  let name = req.body.name;
  let title = req.body.title;
  let password = req.body.password;
  title = title.toLowerCase();
  let isValid = true;
  console.log(name+" "+title+" "+password);
  if (title === 'employee') {
      const sql="Select * from Entry where name=? and title=? and password=?";
      connection.query(sql,[name,title,password],(err,data)=>{
        if(err)return res.json("error");
        if(data.length>0){
          console.log("SERVER se success");
          return res.json("Login success");
        }
        else{
          console.log("server se No record");
          return res.json("No record employee");
        }
      })
  } else if (title === 'employer') {
    const sql="Select * from Entry where name=? and title=? and password=?";
    connection.query(sql,[name,title,password],(err,data)=>{
      if(err)return res.json("error");
      if(data.length>0){
        console.log("SERVER se success");
        return res.json("Login success");
      }
      else{
        console.log("Server no record");
        return res.json("No record employer");
      }
    })
  }
  else {
    res.status(400).json({ message: "Please fill the correct details" });
  }
});


app.post('/signup', (req, res) => {
  let name = req.body.name;
  let title = req.body.title;
  let password = req.body.password;
  let contact = req.body.contact;
  console.log(name);
  console.log(title);
  console.log(password);
  console.log(contact);
  if (!contact || contact.length !== 10) {
    return res.json("Wrong Details");
  }

  title = title.toLowerCase();
  console.log(name + " " + title + " " + password);

  const checkContactQuery = "SELECT * FROM Entry WHERE contact = ?";
  connection.query(checkContactQuery, [contact], (checkErr, checkResult) => {
    if (checkErr) {
      return res.json("error");
    }

    if (checkResult.length > 0) {
      return res.json("Contact already exists");
    }

    const insertQuery = "INSERT INTO Entry (name, title, password, contact) VALUES (?, ?, ?, ?)";
    connection.query(insertQuery, [name, title, password, contact], (insertErr, insertResult) => {
      if (insertErr) {
        return res.json("error");
      }

      if (insertResult.affectedRows > 0) {
        return res.json("Signup success");
      } else {
        return res.json("Check details again");
      }
    });
  });
});

app.post('/employer', (req, res) => {
  const { name1, name, Stipend, experience, skills, location, other, field } = req.body;
  console.log(name1);

  const sql = "INSERT INTO job (company_name, stipend, experience, skills, location, other, field, employer_name) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

  connection.query(sql, [name, Stipend, experience, skills, location, other, field, name1], (err, results) => {
    if (err) {
      console.error("Error executing SQL:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    console.log("Record inserted successfully");
    return res.status(200).json({ message: "Record inserted successfully" });
  });
});


app.post('/rhistory', (req, res) => {
  const name = req.body.name1;
  console.log(name);
  const sql = "SELECT * FROM job WHERE employer_name=?";

  connection.query(sql, [name], (err, results) => {
    if (err) {
      console.error("Error executing SQL:", err);
      return res.status(500).json({r:0});
    }

    console.log("Records fetched successfully");
    return res.status(200).json({ results });
  });
});
app.post('/ehistory', (req, res) => {
  const name = req.body.name1;
  console.log(name);
  const sql = "SELECT * FROM job WHERE candidate_name=?";

  connection.query(sql, [name], (err, results) => {
    if (err) {
      console.error("Error executing SQL:", err);
      return res.status(500).json({r:0});
    }

    console.log("Records fetched successfully");
    console.log(results);
    return res.status(200).json({ results });
  });
});
app.post('/company', (req, res) => {
  var name = req.body.field;
  name=name.toLowerCase();
  console.log("C"+name);
  const sql = "SELECT * FROM job WHERE field=?";

  connection.query(sql, [name], (err, results) => {
    if (err) {
      console.error("Error executing SQL:", err);
      return res.status(500).json({r:0});
    }

    console.log("Records fetched successfully");
    console.log(results);
    return res.status(200).json({ results });
  });
});
app.post('/candapply', (req, res) => {
  const skills = req.body.skills;
  const cname = req.body.cname;
  const compName = req.body.compName;
  const ename = req.body.ename;
  const email = req.body.email;
  const field=req.body.field;
  console.log(compName);
  console.log(ename);
  console.log(cname);
  console.log(field);
  const updateSql = `
  UPDATE job
  SET candidate_name = ?,
      candidate_email = ?
  WHERE company_name = ? AND employer_name = ? AND field=?;
`;

connection.query(updateSql, [cname, email, compName, ename,field], (err, results) => {
  if (err) {
    console.error("Error executing SQL:", err);
    return res.status(500).json({ r: 0 });
  }

  if (results.affectedRows > 0) {
    console.log("Record updated successfully");
    return res.status(200).json({ r: 1 });
  } else {
    console.log("No matching record found for update");
    return res.status(404).json({ r: 0, message: "No matching record found for update" });
  }
});

});



app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});
