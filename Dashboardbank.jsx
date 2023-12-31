import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export function Dashboardbank() {
  return (
    <div>
      <h2>this is bank dashboard</h2>

      <Container fluid>
        <Row>
          <Col md={2}>
            <Navbar
              expand="lg"
              className="bg-body-dark"
              bg="dark"
              variant="dark"
            >
              <Container>
                <Navbar.Brand href="#home">Main Dashboard</Navbar.Brand>
              </Container>
            </Navbar>
            <br />

            <Navbar className="bg-body-dark" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Track status of work</Navbar.Brand>
              </Container>
            </Navbar>
            <br />

            <Navbar className="bg-body-dark" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Update Profile</Navbar.Brand>
              </Container>
            </Navbar>
            <br />

            <Navbar className="bg-body-dark" bg="dark" variant="dark">
              <Container>
                {/* Link to the Customer page */}
                <Navbar.Brand as={Link} to="/pages/Customer">
  Add Customer Details
</Navbar.Brand>
              </Container>
            </Navbar>
            <br />

            <Navbar className="bg-body-dark" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Logout</Navbar.Brand>
              </Container>
            </Navbar>
            <br />
          </Col>
          <Col md={10}>
            {/* Content */}
            <div className="p-4">
              <h2>Main Content</h2>
              <p>Your content goes here...</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
