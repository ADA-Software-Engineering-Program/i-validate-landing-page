import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import reCaptcha from '../Form/recaptcha.png'
import "./contactUs.css";

const ContactUsForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_lhgk9kl', 
        'template_bamadl4', 
        form.current, 
        'CqHO2lxC5bQBMbgiv'
        )

      .then((result) => {
          console.log(result.text);
          alert("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };
    

  return (
      <form className="form-box" ref={form} onSubmit={sendEmail}>
        <div className="radioResp">
            <label className="form-label contact-text-color form-font">
                Would  you like to be featured on i-validate?
            </label>
            <div className="d-flex align-items-center radio-box">
                <input type="radio" name="response" />
                <label className="contact-text-color form-font">
                    Yes
                </label>
            </div>
            <div className="d-flex align-items-center radio-box">
                <input type="radio" name="response" />
                <label className=" contact-text-color form-font">
                    No
                </label>
            </div>
        </div>
        <label className="form-label contact-text-color form-font">
              Your Name*
            </label>
        <div className="d-flex align-items-center mb-3 form-name">
          <div className="form-firstName">
            <input
              type="text"
              className="form-control contact-form-control"
              placeholder="First Name"
              name="first_name"
            />
          </div>
          <div className="form-lastName">
            <input
              type="text"
              className="form-control contact-form-control"
              placeholder="Last Name"
              name="last_name"
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label contact-text-color form-font">
            Your Comapany/Organization
          </label>
          <input type="text" className="form-control contact-form-control" name="user_company" />
        </div>
        <div className="mb-3">
          <label className="form-label contact-text-color form-font">
            Email*
          </label>
          <input
            type="email"
            className="form-control contact-form-control"
            id="exampleInputEmail1"
            name="user_email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label contact-text-color form-font">
            Message*
          </label>
          <textarea name="message" className="form-control contact-form-control message"></textarea>
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
          <button className="btn submit-btn rounded-none contact-bg-color outline-none border-none text-white form-font" type="submit" value="Send">
            Submit
          </button>
        </div>
      </form>
  );
};

export default ContactUsForm;
