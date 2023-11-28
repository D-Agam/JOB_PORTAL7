import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
import axios from "axios";
function Apply(props) {
    const [skills,setskills]=useState("");
    const [email,setemail]=useState("");
    const [cname,setname]=useState("");
    const ename=props.employerName;
    const field=props.field;
    console.log(cname);
    const compName=props.companyName;
    function handleSubmit(event) {
        event.preventDefault();
        console.log(skills);
        axios
          .post("http://localhost:3001/candapply", {
            skills,cname,ename,compName,email,field
          })
          .then((res) => {
              console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    return (
        <div>
            <br/>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Full Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                required
                id="exampleInputName"
                placeholder="John D.."
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Enter Skills</label>
              <input
                name="skills"
                type="text"
                className="form-control"
                required
                id="exampleInputskills"
                placeholder="Skills"
                onChange={(e) => setskills(e.target.value)}
              />
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Email-ID</label>
              <input
                name="email"
                type="text"
                className="form-control"
                required
                id="exampleInputemail"
                placeholder="abc@gmail.com"
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Field</label>
              <input
                name="field"
                type="text"
                className="form-control"
                required
                id="exampleInputfield"
                
                placeholder={field}
                disabled
              />
            </div>
            <br/>
            <button type="submit" className="btn btn-primary" id="submit">
              Submit &gt;&gt;
            </button>  
            </form>
            <Footer />
        </div>
    );
}

export default Apply;