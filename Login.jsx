import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const url = "http://localhost:9091/login";

    try {
      const response = await axios.post(url, { email, password, role });

      if (response.data.status) {
        alert("Login successful!");
        console.log("Response Data:", response.data);

        // Redirect to the appropriate dashboard based on the role
        switch (role) {
          case "1":
            navigate("/dashboardbank");
            break;
          case "2":
            navigate("/dashboardagencyowner");
            break;
          case "3":
            navigate("/dashboardtelecaller");
            break;
          default:
            // Handle other roles or scenarios
            break;
        }
      } else {
        alert("Login failed!");
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      alert("Login failed! Please try again.");
    }
  };

  return (
    <Container className="mt-5">
      <h1>Login</h1>
      <Row className="justify-content-md-center">
        <Col md="5">
          <Form onSubmit={handleLogin}>
            <FloatingLabel controlId="floatingInput" label="Email address">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingSelect" label="Role">
              <Form.Select
                aria-label="Floating label select example"
                name="role"
                onChange={(e) => setRole(e.target.value)}
              >
                <option>Open this select menu</option>
                <option value="1">Bank</option>
                <option value="2">Agency Owner</option>
                <option value="3">Telecaller</option>
              </Form.Select>
            </FloatingLabel>

            <Button
              variant="secondary"
              size="lg"
              type="submit"
              className="mt-3"
            >
              Login
            </Button>
          </Form>

          <div className="mt-3">
            <Link to="/register" className="btn btn-primary btn-lg me-2">
              Registered yourself
            </Link>
            <Link
              to="/dashboardtelecaller"
              className="btn btn-primary btn-lg me-2"
            >
              Click here for telecaller dashboard
            </Link>
            <Link to="/dashboardbank" className="btn btn-primary btn-lg me-2">
              Click here for bank dashboard
            </Link>
            <Link to="/dashboardagencyowner" className="btn btn-primary btn-lg">
              Click here for agency owner dashboard
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
