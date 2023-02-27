import React from 'react';
import landImg from '../images/business-woman.png';
import Landherocard from './Landherocard';
import { TbWorld } from 'react-icons/tb';
import Chat from '../images/pngwing 1.png'

const About = () => {
  

    return (
      <main className='homemain'>
        <section className='row'>
          <div className='col-md-6 rightCol'>
            <h1  className='w-md-25  title text-white Hero-head '>
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
        <div className=' i-link w-100'>
            <div className='d-inline-flex iLink mt-3'>
                <TbWorld className='w-md-50 h-md-50 mt-md-2'/>
                <p className='mt-1 ms-1'>www.ivalidate.com</p>
            </div>
            <div className='bg-white chatHome'>
                <img src={Chat} alt="Chatbot" className='chatbot img-fluid'/>
            </div>
        </div>
        
      </main>
        
        
        
      
    );
  };
  
  export default About;