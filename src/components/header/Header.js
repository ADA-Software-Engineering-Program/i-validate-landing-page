import React from "react";
import './headerFooter.css';
import Logo from '../../images/i-validate-logo-optimiz.jpg';
import Container from 'react-bootstrap/Container';
import { Nav, NavItem } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";


const NavLinks = [
  {
    title: "About Us",
    href: "/aboutUs"
  },
  {
    title: "Contact Us",
    href: "/contactUs"
  },
  {
    title: "Analytics",
    href: "/analytic"
  },
  {
    title: "Login",
    href: "/login"
  },
]

function Header() {

  return (
    <Navbar expand="lg"  className="navbar-main">
      <Container>
        <Navbar.Brand href="/"> 
          <img src={Logo} alt="logo" className="headerLogo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-gap">
            {NavLinks.map((link) =>(
              <NavItem key={link.title}>
                <NavLink
                to={link.href}
                className={({
                  isActive
                }) => [
                  isActive ? "active-link" : "nav-link",
                ].join(" ")}
                >
                  {link.title}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;