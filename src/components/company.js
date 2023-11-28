import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Footer from "./footer";
import Apply from "./Apply";

function Company(props) {
  var dataArray = props.arr;
  const [apply, setApply] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const field = props.field;

  function handleSubmit(event, employerName, companyName) {
    event.preventDefault();
    // Perform any action you need with employerName and companyName
    console.log("Applying for", employerName, "at", companyName);
    setApply(true);
  }

  if (dataArray.length === 0) {
    return (
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
              <Nav>
                <Nav.Link>{props.name}</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <h1>No Records Found</h1>
        <Footer />
      </div>
    );
  }

  // Exclude columns based on props.type
  const excludedColumns =
    props.type === "employee"
      ? ["candidate_name", "candidate_email"]
      : [];

  return (
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
            <Nav>
              <Nav.Link>{props.name}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {apply ? (
        <Apply
          employerName={selectedRow?.employer_name}
          companyName={selectedRow?.company_name}
          candidate_name={props.name}
          field={field}
        />
      ) : (
        <div>
          <h1>
            Company{" "}
            <span style={{ borderBottom: "4px solid #67e0e6" }}>Details</span>:
          </h1>
          <br />
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr>
                {Object.keys(dataArray[0]).map((key) => (
                  // Check if the column should be excluded
                  !excludedColumns.includes(key) && (
                    <th
                      key={key}
                      style={{
                        border: "1px solid #dddddd",
                        textAlign: "left",
                        padding: "8px",
                      }}
                    >
                      {key}
                    </th>
                  )
                ))}
                <th
                  style={{
                    border: "1px solid #dddddd",
                    textAlign: "left",
                    padding: "8px",
                  }}
                >
                  Apply
                </th>
              </tr>
            </thead>
            <tbody>
              {dataArray.map((data, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.entries(data).map(([key, value], cellIndex) => (
                    // Check if the column should be excluded
                    !excludedColumns.includes(key) && (
                      <td
                        key={cellIndex}
                        style={{
                          border: "1px solid #dddddd",
                          textAlign: "left",
                          padding: "8px",
                        }}
                      >
                        {value}
                      </td>
                    )
                  ))}
                  <td
                    style={{
                      border: "1px solid #dddddd",
                      textAlign: "left",
                      padding: "8px",
                    }}
                  >
                    <div>
                      <Form
                        onSubmit={(event) =>
                          handleSubmit(
                            event,
                            data.employer_name,
                            data.company_name
                          )
                        }
                      >
                        <Button
                          variant="success"
                          type="submit"
                          onClick={() => setSelectedRow(data)}
                        >
                          Apply
                        </Button>
                      </Form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Company;
