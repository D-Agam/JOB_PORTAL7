import React from "react";
import HomePage from "./images/Home-page.png";
import { Link } from "react-router-dom";
import "./login.css";
import Footer from "./footer";
function home(props) {
  return (
    <div>
      <div className="row g-0 text-center">
        <div className=" col-md-8">
          <img
            src={HomePage}
            alt="Home-Page"
            style={{ height: "705px", width: "99.4%" }}
          />
        </div>
        <div className="col-md-4" style={{ backgroundColor: "#EDFFFF" }}>
          <h1
            style={{
              fontFamily: "cursive",
              marginTop: "15px",
              color: "#0D98BA",
            }}
          >
            CareerHub
          </h1>
          <h3>Explore The Limitless</h3>
          <br></br>
          <div>
            <div style={{ fontFamily: "serif", position: "relative" }}>
              <div style={{ position: "relative" }}>
                <span
                  style={{
                    backgroundColor: "emerald",
                    position: "absolute",
                    top: "50%",
                    left: "0",
                    right: "0",
                    height: "2px",
                    transform: "rotate(-45deg)",
                    transformOrigin: "left",
                  }}
                ></span>
                We are CareerHub your gateway to endless oppurtunities and
                professional growth.{" "}
              </div>
              <div style={{ position: "relative" }}>
                <span
                  style={{
                    backgroundColor: "emerald",
                    position: "absolute",
                    top: "50%",
                    left: "0",
                    right: "0",
                    height: "2px",
                    transform: "rotate(-45deg)",
                    transformOrigin: "left",
                  }}
                ></span>
                With a commitment to excellence,we provide a platform for job
                seekers and employers to connect,opening doors to a number of
                oppurtunities.{" "}
              </div>
              <div style={{ position: "relative" }}>
                <span
                  style={{
                    backgroundColor: "emerald",
                    position: "absolute",
                    top: "50%",
                    left: "0",
                    right: "0",
                    height: "2px",
                    transform: "rotate(-45deg)",
                    transformOrigin: "left",
                  }}
                ></span>
                Explore the Limitless potential of your career with
                CareerHub,where your aspirations meet with perfect match.
              </div>
              <div style={{ position: "relative" }}>
                <span
                  style={{
                    backgroundColor: "emerald",
                    position: "absolute",
                    top: "50%",
                    left: "0",
                    right: "0",
                    height: "2px",
                    transform: "rotate(-45deg)",
                    transformOrigin: "left",
                  }}
                ></span>
              </div>
            </div>

            <br></br>
            <br></br>
            <div className="buttons" style={{ marginLeft: "30px" }}>
              <Link to="/login">
                <button class="btn" style={{backgroundColor:"#378792"}}>
                  <span class="btn-text-one">Login</span>
                  <span class="btn-text-two">Let's Go!</span>
                </button>
              </Link>
              &nbsp;&nbsp;
              <Link to="/verify">
                <button class="btn" style={{backgroundColor:"#379263"}}>
                  <span class="btn-text-one">Signup</span>
                  <span class="btn-text-two">Great!</span>
                </button>
              </Link>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
