import React from 'react';
import landImg from '../images/business-woman.png';
import Landherocard from './Landherocard';

const About = () => {
  

    return (
      <main>
        <section className='row'>
          <div className='col-md-6 rightCol'>
            <h1  className='w-lg-50 title text-white Hero-head '>
              Bring your refined innovative ideas to market.
            </h1>
            <button className='btn heroBtn mt-4 text-white'>Get Started</button>
            
          </div>
          <div className='col-md-6 position-relative'>
            <div className='img-arc'>
            <img src={landImg} className='landImg' alt='business woman' />
            </div>
            <div className='img-arc arc-right'></div>
            <div className='small-circle'></div>
            <div className='small-circle circle-right'></div>
            <div className='mid-circle'></div>
          </div>
        </section>
        <Landherocard />
      <div className='d-flex'>
      <div>
        
      </div>
      
      </div>
        
      </main>
        
        
        
      
    );
  };
  
  export default About;