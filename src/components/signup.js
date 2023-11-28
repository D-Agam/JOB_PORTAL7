import React, { useState } from "react";
import HomePage from "./images/Home-page.png";
import "./login.css";
import Footer from "./footer";
import Employee from "./employee";
import Employer from "./employer";
import axios from "axios";
function Signup(props) {
  const { contact } = props;
  console.log(contact);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  var [title, setTitle] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    title = title.toLowerCase();
    axios.post("http://localhost:3001/signup", { name, password, title,contact })
      .then((res) => {
        console.log(res);
        if (res.data === "Login success") {
          console.log("Login success");
          setLoggedInUser(true);
        } else {
          console.log("Login failed");
          setLoggedInUser(false);
        }
      })     
      .catch((err) => console.log(err), console.log(name));
    console.log(props);
  }

  return (
    <div>
      {loggedInUser ? (
        title === "employee" ? (
          <Employee name={name} password={password} />
        ) : (
          <Employer name={name} password={password} />
        )
      ) : (
      <div className="row g-0">
        <div className="col-md-8">
          <img
            src={HomePage}
            alt="Home-Page"
            style={{ height: "705px", width: "99.4%", maxWidth: "100%" }}
          />
        </div>
        <div className="col-md-4" style={{ backgroundColor: "#EDFFFF" }}>
          <h1
            style={{
              fontFamily: "cursive",
              marginTop: "15px",
              color: "#0D98BA",
              textAlign: "center",
            }}
          >
            CareerHub
          </h1>

          <form onSubmit={handleSubmit} style={{ marginTop: "100px" }}>
            <div className="form-group">
              <label htmlFor="exampleInputName">Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                id="exampleInputName"
                required
                placeholder="Enter username"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputcontact">Contact</label>
              <input
                name="contact"
                type="number"
                className="form-control"
                id="exampleInputContact"
                required
                placeholder={contact}
                disabled
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                required
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
                <label htmlFor="title">Title</label>
                <select
                  id="title"
                  name="title"
                  className="form-control"
                  onChange={(e) => setTitle(e.target.value)}
                >
                  <option value="employee">Select Title</option>
                  <option value="employee">Employee</option>
                  <option value="employer">Employer</option>
                </select>
              </div>
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your details with anyone else.
            </small>
            <br />

            <button type="submit" className="btn btn-primary" id="submit">
              Submit &gt;&gt;
            </button>
          </form>
          <Footer />
        </div>
      </div>
      )}
    </div>
  );
}
export default Signup;
