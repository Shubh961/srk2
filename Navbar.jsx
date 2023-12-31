import React from "react";
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap"; // Importing necessary components
import "./Navbar.css"; // Assuming you have a CSS file for styling

const CustomNavbar = () => {
  return (
    <BootstrapNavbar bg="light" expand="lg">
      <Container>
        <BootstrapNavbar.Brand>GUPS Agency</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/Home" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="./About" className="nav-link">
              About
            </Nav.Link>
            <Nav.Link href="./Service" className="nav-link">
              Service
            </Nav.Link>
            <Nav.Link href="/register/emplist" className="nav-link">
              emplist
            </Nav.Link>

            <Nav.Link href="./Service" className="nav-link">
              Contact
            </Nav.Link>
            <Nav.Link href="/Login" className="nav-link">
              Login
            </Nav.Link>
            <Nav.Link href="/Register" className="nav-link">
              Register
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;
