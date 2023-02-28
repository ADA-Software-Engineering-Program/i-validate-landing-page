import React from "react";
import './headerFooter.css';
import Logo from '../../images/i-validate-logo-optimiz.jpg';

import Container from 'react-bootstrap/Container';
import { Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

import { useLocation } from "react-router-dom";

const Header = () => {

   //assigning location variable
   const location = useLocation();

   //destructuring pathname from location
   const { pathname } = location;
 
   //Javascript split method to get the name of the path in array
   const splitLocation = pathname.split("/");


  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"> 
          <img src={Logo} alt="logo" className="headerLogo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-gap ">
            <Nav.Link href={"/"}  className={splitLocation[1] === "" ? "active" : ""}>Home</Nav.Link>
            <Nav.Link href={"#about"} className={splitLocation[1] === "about" ? "active" : ""}>About Us</Nav.Link>
            <Nav.Link href={"#contact"} className={splitLocation[1] === "contact" ? "active" : ""}>Contact Us</Nav.Link>
            <Nav.Link href={"#analytics"} className={splitLocation[1] === "analytics" ? "active" : ""}>Analytics</Nav.Link>
            <Nav.Link href={"./SignUp"} className={splitLocation[1] === "sign up" ? "active" : ""}>Sign Up</Nav.Link>
            <Nav.Link href={"./Login"} className={splitLocation[1] === "log in" ? "active" : ""}>Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;