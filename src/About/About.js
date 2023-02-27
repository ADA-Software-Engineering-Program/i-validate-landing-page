import React from "react";
import landImg from "../images/business-woman.png";
import Landherocard from "./Landherocard";
import { Link } from "react-router-dom";

import { BsGlobe } from "react-icons/bs";
import Person from "../images/person.png"


const About = () => {
  return (
    <main>
      <section className="row">
        <div className="col-md-6 rightCol">
          <h1 className="w-lg-50 title text-white Hero-head ">
            Bring your refined innovative ideas to market.
          </h1>
          <button className="btn heroBtn mt-4 text-white">Get Started</button>
        </div>
        <div className="col-md-6 position-relative leftCol">
          <div className="img-arc">
            <img src={landImg} className="landImg" alt="business woman" />
          </div>
          <div className="img-arc arc-right"></div>
          <div className="small-circle small-circle-main"></div>
          <div className="small-circle circle-right"></div>
          <div className="mid-circle"></div>
        </div>
      </section>
      <Landherocard />
      <div className="d-flex justify-content-between align-items-center container mb-5">
        <div className="contact-text-color">
          <BsGlobe />
          <Link to='/' className="ms-3 contact-text-color text-decoration-none">www.ivalidate.com</Link>
        </div>
        <div className="bg-white person-img">
          <img src={Person} alt="person"/>
        </div>
      </div>
    </main>
  );
};

export default About;
