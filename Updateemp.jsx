import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import { getEmployee, updateEmployee } from "../Services/ServiceEmployee.js";

export function Updateemp() {
  const [isSubmitted, setSubmitted] = useState(false);
  const param = useParams();
  const [formdata, setFormdata] = useState({
    firstname: "",
    lastname: "",
    phoneno: "",
    password: "",
    email: "",
    address: "",
    role: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await updateEmployee(formdata, param.id);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 1500);
      console.log("Data inserted from frontend");
    } catch (error) {
      console.log("Error submitting data:", error);
    }
  };

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const populateData = async () => {
    try {
      const response = await getEmployee(param.id);
      console.log("Response from server:", response);
      setFormdata(response);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    populateData();
  }, [param.id]);
  return (
    <Container className="mt-3">
      <h1>Update Student Data</h1>
      <Row>
        <Col>
          {isSubmitted ? (
            <Alert variant="success">Student Updated Successfully!</Alert>
          ) : null}
        </Col>
      </Row>
      <div className="main-div">
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalFirstname"
              >
                <Form.Label column sm={2}>
                  First_Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter first Name"
                    onChange={handleChange}
                    name="firstname"
                    value={formdata.firstname}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalLastname"
              >
                <Form.Label column sm={2}>
                  Last Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter last  Name"
                    onChange={handleChange}
                    name="lastname"
                    value={formdata.lastname}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalPhonenoname"
              >
                <Form.Label column sm={2}>
                  Phone no
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter phoneno Name"
                    onChange={handleChange}
                    name="phoneno"
                    value={formdata.phoneno}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalAddress"
              >
                <Form.Label column sm={2}>
                  Addres
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter Address"
                    onChange={handleChange}
                    name="address"
                    value={formdata.address}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={2}>
                  Email
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    onChange={handleChange}
                    name="email"
                    value={formdata.email}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalPassword"
              >
                <Form.Label column sm={2}>
                  Password
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder="Enter Password"
                    onChange={handleChange}
                    name="password"
                    value={formdata.password}
                  />
                </Col>
              </Form.Group>
              <Col>
                <Form.Select
                  aria-label="Default select example"
                  className="mb-3"
                  controlId="formHorizontalCentre"
                  onChange={handleChange}
                  name="centre"
                  value={formdata.password}
                >
                  <option>Select centre</option>
                  <option value="Bank">Bank</option>
                  <option value="Agency">Agency</option>
                </Form.Select>
              </Col>
              <Button variant="secondary" type="submit">
                UPDATE
              </Button>{" "}
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
