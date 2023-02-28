import React from 'react';
import './subsection.css';
import Video from './Video'
import SubImg from '../../images/Rectangle 17.png';
import SubImgs from '../../images/Rectangle 18.png';
import Brand1 from '../../images/Teelims.png';
import Brand2 from '../../images/mafiz.png';
import Brand3 from '../../images/Rytworth.png';
import Brand4 from '../../images/I-mata.png';
import Brand5 from '../../images/ASI.png';
import Testimonial from '../Testimonial';

function Subsection() {
  return (
    <section>
      <Menu />
    </section>
  );
}



const Menu = () => {
  return (
    <div className='subsection my-md-5'>
      <div className="background h-50">
        <Video />
      </div>
      <div className='row pattern'>
      <div className="col-lg-6" >
          <h1 id="pattern">
            <span className="valid">I-Validate</span> committed to providing
            entrepreneurs with the information and resources they need to make
            informed decisions and bring their ideas to life
          </h1>
      </div>
      <div className='col-lg-6'>
        <div className='row py-3'>
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
            <p className='col-md-6 my-3'>
              Whether you're looking to test a new product, validate a business model, 
              or raise funds for a prototype, the Idea Validator App can help. 
              Join us on our mission to empower entrepreneurs and transform the world through innovation.
            </p>
            <p className='col-md-6 my-3'>
              We are committed to providing entrepreneurs with the information 
              and resources they need to make informed decisions and bring their ideas to life.
            </p>
        </div>
      </div>
      </div>
      
      <div className="row subImg">
        <div className=" col-md-6  ">
          <img src={SubImg} alt="An  awarness event" className='img-responsive'/>
        </div>
        <div className=" col-md-6 mt-md-0 mt-2 ">
          <img src={SubImgs} alt="An  awarness event" className='img-responsive'/>
        </div>
      </div>
      <div className="text">
        <h5 className='fw-bolder'>Testimonial</h5>
      </div>
      <Testimonial />
      <div className="text">
        <h5 className='fw-bolder'>Trusted by these brands</h5>
        <div className='d-md-inline-flex textBrand'>
          <img src={Brand1} alt="Trusted brands" className='brand'/>
          <img src={Brand2} alt="Trusted brands" className='brand'/>
          <img src={Brand3} alt="Trusted brands" className='brand'/>
          <img src={Brand4} alt="Trusted brands" className='brand'/>
          <img src={Brand5} alt="Trusted brands" className='brand'/>
        </div>
      </div>
      
    </div>
  );
};

export default Subsection;
