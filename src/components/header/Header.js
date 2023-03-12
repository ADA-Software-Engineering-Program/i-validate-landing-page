import React from "react";
import './headerFooter.css';
import Logo from '../../images/i-validate-logo-optimiz.jpg';

import Container from 'react-bootstrap/Container';
import { Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

import { useLocation, NavLink } from "react-router-dom";

const Header = () => {

   //assigning location variable
   const location = useLocation();

   //destructuring pathname from location
   const { pathname } = location;

  return (
    <Navbar expand="lg"  className="navbar-main">
      <Container>
        <Navbar.Brand href="/"> 
          <img src={Logo} alt="logo" className="headerLogo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-gap">
            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
            <NavLink to="/AboutUs" className="nav-link" activeClassName="active">About Us</NavLink>
            <NavLink to="/ContactUs" className="nav-link" activeClassName="active">Contact Us</NavLink>
            <NavLink to="/Analytic" className="nav-link" activeClassName="active">Analytics</NavLink>
            <NavLink to="/Login" className="nav-link" activeClassName="active">Log In</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
