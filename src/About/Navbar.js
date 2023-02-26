import React from 'react';
import Logo from '../images/white logo 2.png';
import './landing.css'

const Navbar =() => {
  return (
    <nav className="navbar navbar-expand-lg navbarBox">
      <div className="container-fluid">
        <a className="navbar-brand Lo" href="/">
          <img src={Logo} alt="logo" className="headerLogo"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navLinkContainer" id="navbarSupportedContent">
          <ul className='navbar-nav '>
          <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={"/"}>
                  About Us
                </a>
          </li>
          <li className="nav-item">
                <a className="nav-link"  href={"/contact"}>
                  Contact Us
                </a>
            </li>    
            <li className="nav-item">
                <a className="nav-link"  href={"/service"}>
                Services
                </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar