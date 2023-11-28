import React, { useState,useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";
import Rhistory from "./rhistory";
import Company from "./company";

function Employee(props) {
  const buttonRef = useRef();
  const [field1,setfield]=useState();
  const [showCompany, setCompany] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [historyData, setHistoryData] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  function handleSubmit(field,event) {
    event.preventDefault();
    setfield(field)
    console.log("F"+field1);
    console.log(field);
    axios
      .post("http://localhost:3001/company", {
        field,
      })
      .then((res) => {
        if (res.data.r !== 0) {
          console.log("Company andar");
          setCompany(true);
          setCompanyData(res.data.results);
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleSubmit1(event) {
    const name1 = props.name;
    event.preventDefault();
    axios
      .post("http://localhost:3001/ehistory", {
        name1,
      })
      .then((res) => {
        if (res.data.r !== 0) {
          console.log("History andar");
          setShowHistory(true);
          setHistoryData(res.data.results);
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      {showCompany ? (
        <Company arr={companyData} field={field1} type={"employee"}/>
      ) : (
        <div>
          <Navbar
            expand="lg"
            style={{ backgroundColor: "#67e0e6", position: "relative" }}
          >
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
          {showHistory ? (
            <Rhistory arr={historyData} name={props.name} type={"employee"}  />
          ) : (
            <div>
              <div style={{ float: "left" }}>
                <div
                  style={{
                    width: "270px",
                    height: "300px",
                    backgroundColor: "#FEF8DD",
                    float: "left",
                    margin: "10px",
                    borderRadius: "12px",
                    marginLeft: "20px",
                    marginTop: "20px",
                    boxShadow:
                      "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                  }}
                >
                  <img
                    src="pics/acc.jpg"
                    alt="Accounting"
                    style={{
                      height: "180px",
                      width: "270px",
                      borderRadius: "12px",
                    }}
                  />
                  <div>
                    <Card.Title
                      style={{ marginLeft: "85px", marginTop: "10px" }}
                    >
                      Accounting
                    </Card.Title>
                    <Form onSubmit={(e) => handleSubmit("Accounting", e)}>
                      <Button
                        variant="outline-danger"
                        style={{
                          marginLeft: "45px",
                          width: "180px",
                          marginTop: "23px",
                        }}
                        ref={buttonRef}
                        type="submit"
                        value="accounting"
                      >
                        Fetch Companies
                      </Button>
                    </Form>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "270px",
                  height: "300px",
                  backgroundColor: "#FEF8DD",
                  float: "left",
                  margin: "10px",
                  borderRadius: "12px",
                  marginLeft: "20px",
                  marginTop: "20px",
                  boxShadow:
                    "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                }}
              >
                <img
                  src="pics/download.jpg"
                  alt="Education"
                  style={{
                    height: "180px",
                    width: "270px",
                    borderRadius: "12px",
                  }}
                />
                <div>
                  <Card.Title style={{ marginLeft: "95px", marginTop: "10px" }}>
                    Education
                  </Card.Title>
                  <Form onSubmit={(e) => handleSubmit("education", e)}>
                  <Button
                    variant="outline-danger"
                    style={{
                      marginLeft: "45px",
                      width: "180px",
                      marginTop: "23px",
                    }}
                    ref={buttonRef}
                    type="submit"
                    value="Education"
                  >
                    Fetch Companies
                  </Button>
                  </Form>
                </div>
              </div>

              <div
                style={{
                  width: "270px",
                  height: "300px",
                  backgroundColor: "#FEF8DD",
                  float: "left",
                  margin: "10px",
                  borderRadius: "12px",
                  marginLeft: "20px",
                  marginTop: "20px",
                  boxShadow:
                    "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                }}
              >
                <img
                  src="pics/download.png"
                  alt="Marketing"
                  style={{
                    height: "180px",
                    width: "270px",
                    borderRadius: "12px",
                  }}
                />
                <div>
                  <Card.Title style={{ marginLeft: "90px", marginTop: "10px" }}>
                    Marketing
                  </Card.Title>
                  <Form onSubmit={(e) => handleSubmit("marketing", e)}>

                  <Button
                    variant="outline-danger"
                    style={{
                      marginLeft: "45px",
                      width: "180px",
                      marginTop: "23px",
                    }}
                    ref={buttonRef}
                    type="submit"
                    value="Marketing"
                    
                  >
                    Fetch Companies
                  </Button>
                  </Form>
                </div>
              </div>

              <div
                style={{
                  width: "270px",
                  height: "300px",
                  backgroundColor: "#FEF8DD",
                  float: "left",
                  margin: "10px",
                  borderRadius: "12px",
                  marginLeft: "20px",
                  marginTop: "20px",
                  boxShadow:
                    "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                }}
              >
                <img
                  src="pics/download.png"
                  alt="Health"
                  style={{
                    height: "180px",
                    width: "270px",
                    borderRadius: "12px",
                  }}
                />
                <div>
                  <Card.Title style={{ marginLeft: "42px", marginTop: "10px" }}>
                    Health and Medicine
                  </Card.Title>
                  <Form onSubmit={(e) => handleSubmit("health", e)}>
                  <Button
                    variant="outline-danger"
                    style={{
                      marginLeft: "45px",
                      width: "180px",
                      marginTop: "23px",
                    }}
                    ref={buttonRef}
                    type="submit"
                    value="Health"
                    
                  >
                    Fetch Companies
                  </Button>
                  </Form>
                </div>
              </div>

              <div
                style={{
                  width: "270px",
                  height: "300px",
                  backgroundColor: "#FEF8DD",
                  float: "left",
                  margin: "10px",
                  borderRadius: "12px",
                  marginLeft: "20px",
                  marginTop: "20px",
                  boxShadow:
                    "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                }}
              >
                <img
                  src="pics/download.png"
                  alt="Finance"
                  style={{
                    height: "180px",
                    width: "270px",
                    borderRadius: "12px",
                  }}
                />
                <div>
                  <Card.Title style={{ marginLeft: "95px", marginTop: "10px" }}>
                    Finance
                  </Card.Title>
                  <Form onSubmit={(e) => handleSubmit("finance", e)}>

                  <Button
                    variant="outline-danger"
                    style={{
                      marginLeft: "45px",
                      width: "180px",
                      marginTop: "23px",
                    }}
                    ref={buttonRef}
                    type="submit"
                    value="Finance"
                    
                  >
                    Fetch Companies
                  </Button>
                  </Form>
                </div>
              </div>

              <div
                style={{
                  width: "270px",
                  height: "300px",
                  backgroundColor: "#FEF8DD",
                  float: "left",
                  margin: "10px",
                  borderRadius: "12px",
                  marginLeft: "20px",
                  marginTop: "20px",
                  boxShadow:
                    "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                }}
              >
                <img
                  src="pics/download.png"
                  alt="Human Resources"
                  style={{
                    height: "180px",
                    width: "270px",
                    borderRadius: "12px",
                  }}
                />
                <div>
                  <Card.Title style={{ marginLeft: "55px", marginTop: "10px" }}>
                    Human Resources
                  </Card.Title>
                  <Form onSubmit={(e) => handleSubmit("Human Resources", e)}>

                  <Button
                    variant="outline-danger"
                    style={{
                      marginLeft: "45px",
                      width: "180px",
                      marginTop: "23px",
                    }}
                    ref={buttonRef}
                    type="submit"
                    value="Human Resources"
                  >
                    Fetch Companies
                  </Button>
                  </Form>
                </div>
              </div>

              
              <div
                style={{
                  width: "270px",
                  height: "300px",
                  backgroundColor: "#FEF8DD",
                  float: "left",
                  margin: "10px",
                  borderRadius: "12px",
                  marginLeft: "20px",
                  marginTop: "20px",
                  boxShadow:
                    "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                }}
              >
                <img
                  src="pics/download.png"
                  alt="Sales"
                  style={{
                    height: "180px",
                    width: "270px",
                    borderRadius: "12px",
                  }}
                />
                <div>
                  <Card.Title
                    style={{ marginLeft: "108px", marginTop: "10px" }}
                  >
                    Sales
                  </Card.Title>
                  <Form onSubmit={(e) => handleSubmit("Sales", e)}>
                  <Button
                    variant="outline-danger"
                    style={{
                      marginLeft: "45px",
                      width: "180px",
                      marginTop: "23px",
                    }}
                    ref={buttonRef}
                    type="submit"
                    value="Sales"
                  >
                    Fetch Companies
                  </Button>
                  </Form>
                </div>
              </div>

             
              <br />
              <hr></hr>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Employee;
