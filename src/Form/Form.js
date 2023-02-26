import React from "react";
import reCaptcha from './recaptcha.png'
import "./form.css";

const Form = () => {

    function handleSubmit(event) {
        event.preventDefault();
      }
    

  return (
      <form className="form-box">
        <div className="d-flex align-items-center mb-3 form-name">
          <div className="">
            <label className="form-label contact-text-color form-font">
              Your Name*
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              name="firstName"
            />
          </div>
          <div className="form-lastName">
          <label className="form-label contact-text-color form-font label-display">
                 
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              name="lastName"
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label contact-text-color form-font">
            Your Comapany/Organization
          </label>
          <input type="text" className="form-control" name="yourCompany" />
        </div>
        <div className="mb-3">
          <label className="form-label contact-text-color form-font">
            Email*
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label contact-text-color form-font">
            Message*
          </label>
          <textarea name="message" className="form-control message"></textarea>
        </div>
        <div className="mb-3 d-flex">
          <div className="d-flex align-items-center"> 
            <input type="checkbox" className="robot-check" />
            <span className="contact-text-color form-font">
              I'm not a robot
            </span>
          </div>
          <div >
            <img src={reCaptcha} alt="" className="form-img" />
          </div>
        </div>
        <div className="">
          <button className="btn submit-btn rounded-none contact-bg-color outline-none border-none text-white form-font" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
  );
};

export default Form;
