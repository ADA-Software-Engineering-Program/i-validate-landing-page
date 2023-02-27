import React from "react";
import Form from "../Form/Form";
import "./contact.css";
import { BsPhone } from "react-icons/bs";

const Contact = () => {
    
  return (
    <div className="d-flex justify-content-center form-content">
      <div className="contact-details">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <h3>Office Address</h3>
          <p>9, Tech ADA street, Off wildfire Close Lagos Nigeria</p>
          <BsPhone />
          <span>+234 7034 5656 55
          </span>
        </div>
      </div>
      <div className="form-details">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
