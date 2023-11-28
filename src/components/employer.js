import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";
import Rhistory from './rhistory';
import Footer from "./footer";
function Employer(props) {
  const [name, setName] = useState("");
  const [Stipend, setstipend] = useState("");
  const [experience, setexperience] = useState("");
  const [skills, setskills] = useState("");
  const [location, setlocation] = useState("");
  const [other, setother] = useState("");
  const [field, setfield] = useState("");
  function handleSubmit(event) {
    const name1=props.name;
    console.log(name1);
    event.preventDefault();
    console.log(field);
    axios
      .post("http://localhost:3001/employer", {
        name1,
        name,
        Stipend,
        experience,
        skills,
        location,
        other,
        field,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const [showHistory, setShowHistory] = useState(false);

  const [historyData, setHistoryData] = useState([]);
  function handleSubmit1(event) {
    const name1 = props.name;
    event.preventDefault();
    axios
      .post("http://localhost:3001/rhistory", {
        name1,
      })
      .then((res) => {
        if (res.data.r !== 0) {
          console.log("History andar");
          setShowHistory(true);
          setHistoryData(res.data.results)
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "#67e0e6",position:"relative" }}>
        <Container>
          <Navbar.Brand style={{ fontFamily: "cursive", fontSize: "30px" }}>
            CareerHub
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Form onSubmit={handleSubmit1}>
            <Nav className="me-auto">
              <button
                style={{
                  border: "none",
                  background: "none",
                  backgroundColor: "#67e0e6",
                  outline: "none",
                }}
              >
                Previous
              </button>
            </Nav>
            </Form>
            <Nav>
              <Nav.Link>{props.name}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      {showHistory ? (<Rhistory arr={historyData}/>):(
      <div
        style={{
          width: "700px",
          margin: "auto",
          marginTop: "25px",
          backgroundColor: "aliceblue",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-2" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Company Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                style={{ backgroundColor: "#FFE7C7" }}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-4"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={2}>
              Location
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Location"
                onChange={(e) => setlocation(e.target.value)}
                style={{ backgroundColor: "#FFE7C7" }}
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-4"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={2}>
              Field
            </Form.Label>
            <Col sm={10}>
              <Form.Select
                aria-label="Default select example"
                style={{ backgroundColor: "#FFE7C7" }}
                onChange={(e) => setfield(e.target.value)}
              >
                <option value="Accounting">Accounting</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="Finance">Finance</option>
                <option value="International Business">International Business</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Health">Health Services</option>
                <option value="Management information systems">Management systems</option>
                <option value=" Business administration and management">
                  Business administration and management
                </option>
                <option value="Education">Education</option>
                <option value="Installation, repair and maintenance">Installation, repair and maintenance</option>
                <option value="Farming, fishing and forestry">Farming, fishing and forestry</option>
                <option value="Health">Health and medicine</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-4" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Conatct No.
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Mobile No."
                style={{ backgroundColor: "#FFE7C7" }}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-2"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={2}>
              Email Address
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Email"
                style={{ backgroundColor: "#FFE7C7" }}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-4" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Stipend
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Stipend"
                onChange={(e) => setstipend(e.target.value)}
                style={{ backgroundColor: "#FFE7C7" }}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-4"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={2}>
              Experience
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="number"
                placeholder="Years of experience"
                onChange={(e) => setexperience(e.target.value)}
                style={{ backgroundColor: "#FFE7C7" }}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-2" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Skills required
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                onChange={(e) => setskills(e.target.value)}
                placeholder="Enter required skills"
                style={{ backgroundColor: "#FFE7C7" }}
              />
            </Col>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Any other information</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => setother(e.target.value)}
              style={{ backgroundColor: "#FFE7C7" }}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{ marginLeft: "290px" }}
          >
            Upload
          </Button>
        </Form>
        <Footer />
      </div>)}
      
    </div>
  );
}

export default Employer;
