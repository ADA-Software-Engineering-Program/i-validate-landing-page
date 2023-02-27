import React from 'react';
import './subsection.css';
import SubImg from '../../images/Rectangle 17.png';
import SubImgs from '../../images/Rectangle 18.png';

function Subsection() {
  return (
    <section>
      <Menu />
    </section>
  );
}

const Menu = () => {
  return (
    <div className='px-lg-5 subsection'>
      <div className="background">
        <video>
        <source src="../../images/WhatsApp Video 2023-02-27 at 9.44.47 PM.mp4" type="video/mp4"/>
          Sorry, your browser doesn't support videos.
        </video>
      </div>
      <div className='row'>
      <div className="col-lg-6 mb-lg-2" >
          <h1 id="pattern">
            <span className="valid">I-Validate</span> committed to providing
            entrepreneurs with the information and resources they need to make
            informed decisions and bring their ideas to life
          </h1>
      </div>
      <div className='col-lg-6'>
        <div className='row'>
          <p className='col-md-6'>
              We are proud to offer a platform that supports entrepreneurs at every
              stage of their journey, from idea generation to market entry and
              beyond
            </p>
            <p className='col-md-6'>
              At the core of our brand is the belief that anyone can be an
              entrepreneur, and that every idea has the potential to change the
              world.
            </p>
            <p className='col-md-6'>
              Whether you're looking to test a new product, validate a business model, 
              or raise funds for a prototype, the Idea Validator App can help. 
              Join us on our mission to empower entrepreneurs and transform the world through innovation.
            </p>
            <p className='col-md-6'>
              We are committed to providing entrepreneurs with the information 
              and resources they need to make informed decisions and bring their ideas to life.
            </p>
        </div>
      </div>
      </div>
      
      <div className="row">
        <div className="priority col-md-6">
          <img src={SubImg} alt="An  awarness event" className='img-responsive'/>
        </div>
        <div className="priority col-md-6">
          <img src={SubImgs} alt="An  awarness event" className='img-responsive'/>
        </div>
      </div>
      <div className="text">
        <h5>Trusted by these brands</h5>
      </div>
      {/* <div className="trust"></div> */}
    </div>
  );
};

export default Subsection;
