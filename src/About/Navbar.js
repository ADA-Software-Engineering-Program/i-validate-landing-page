import React, { useState } from 'react';
import Logo from '../images/white logo 2.png';
import './landing.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useLocation } from "react-router-dom";

// const Navbar =() => {
//   return (
//     <nav className="navbar navbar-expand-lg navbarBox">
//       <div className="container-fluid">
//         <a className="navbar-brand Lo" href="/">
//           <img src={Logo} alt="logo" className="headerLogo"/>
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse navLinkContainer" id="navbarSupportedContent">
//           <ul className='navbar-nav '>
//           <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href={"/"}>
//                   About Us
//                 </a>
//           </li>
//           <li className="nav-item">
//                 <a className="nav-link"  href={"/contact"}>
//                   Contact Us
//                 </a>
//             </li>    
//             <li className="nav-item">
//                 <a className="nav-link"  href={"/service"}>
//                 Services
//                 </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }



const NavbarComponent = () => {

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
          <Nav className="ms-auto nav-gap">
            <Nav.Link href={"/"}  className={splitLocation[1] === "" ? "active" : ""}>About Us</Nav.Link>
            <Nav.Link href={"/contact"} className={splitLocation[1] === "contact" ? "active" : ""}>Contact Us</Nav.Link>
            <Nav.Link href={"/service"} className={splitLocation[1] === "service" ? "active" : ""}>Service</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default NavbarComponent

