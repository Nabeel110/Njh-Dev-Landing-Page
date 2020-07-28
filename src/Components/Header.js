import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../NJH Logo.svg";

const Header = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light" sticky="top">
      <Container>
        <Navbar.Brand href="#intro">
          <img
            alt="njh-logo"
            src={logo}
            width="30"
            height="30"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          {"\t"}
          NJH Developers
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ml-auto smooth-scroll "
            style={{ justifyContent: "end" }}
          >
            <Nav.Link href="#intro">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
