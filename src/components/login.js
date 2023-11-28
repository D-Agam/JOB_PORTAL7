import React, { useState } from "react";
import "./login.css";
import Footer from "./footer";
import HomePage from "./images/Home-page.png";
import axios from "axios";
import Employee from "./employee";
import Employer from "./employer";
function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  var [title, setTitle] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    title = title.toLowerCase();

    axios
      .post("http://localhost:3001/login", { name, password, title })
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
      .catch((err) => {
        console.log(err);
      });
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
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="exampleInputname"
                  placeholder="Enter username"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
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
              <br /><br />
              <button type="submit" className="btn btn-primary" id="submit">
                Submit&nbsp;
                <svg width="34" height="24" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
        <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
    </svg>
              </button>
            </form>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
