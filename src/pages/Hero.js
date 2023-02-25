import React from 'react';
import { useState } from 'react';
import Herocard from '../components/Herocard';
import heroImage  from '../images/business-woman.png';



const Hero = () => {
  const [herodetail] =useState([
    {
      id: 1,
      heading: "Bring your refined innovative ideas to market.",
      description: "I-validate provide a screening process for new business ideas, to answer a series of questions to determine if their idea has potential."
    }
    
  ])
    
  return (
    <section className='row hero '>
      <article className='col-md-6 my-5 px-5 heroDetail'>
      {herodetail.map((item) => {
        return(<Herocard key={item.id} heading={item.heading} description={item.description} />)
      })}
        <button className='btn heroBtn'>Get Started</button>
      </article>

      <div className='col-md-6 my-5 heroLeft'>
        <picture className='w-50 h-100 position-relative '>
        <img src={heroImage} alt='A Business woman' className='img responsive heroImage mt-5' />
        </picture>
        <div className='box style={zIndex: -1}'>
        </div>
      </div>

    </section>
  )
}

export default Hero