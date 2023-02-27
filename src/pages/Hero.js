import React from 'react';
import { useState } from 'react';
import Herocard from '../components/Herocard';
import heroImage  from '../images/business-woman.png';
import ResearchCard from '../components/ResearchCard';
import Plan from '../components/Plan';
import Subsection from '../components/subsection/Subsection';



const Hero = () => {
  const [herodetail] =useState([
    {
      id: 1,
      heading: "Bring your refined innovative ideas to market.",
      description: "I-validate provide a screening process for new business ideas, to answer a series of questions to determine if their idea has potential."
    }
    
  ])
    
  return (
    <main>
      <section className='row hero'>
        <article className='col-lg-6  px-5 heroDetail'>
        {herodetail.map((item) => {
          return(<Herocard key={item.id} heading={item.heading} description={item.description} />)
        })}
          <button className='btn heroBtn'>Get Started</button>
        </article>

        <div className='col-lg-6  heroLeft'>
          <picture className='w-50 h-md-100 h-sm-75 '>
          <img src={heroImage} alt='A Business woman' className='img responsive heroImage mt-5 position-relative' />
          </picture>
          <div className='box'>
          </div>
        </div>
    </section>
    <ResearchCard />
    <Plan />
    <Subsection />
    </main>
  )
}

export default Hero