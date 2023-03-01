import React from 'react';
import heroImage  from '../images/business-woman.png';
import ResearchCard from '../components/ResearchCard';
import Plan from '../components/Plan';
import Subsection from '../components/subsection/Subsection';
import AppLayout from '../layout/AppLayout';
import { Link } from 'react-router-dom';



const Hero = () => {
    
  return (
    <AppLayout>
    <main>
      <section className='row hero'>
        <article className='col-lg-5 heroDetail'>
          <h1 className='title'>Bring your <span className='titleSpan'>refined</span> innovative ideas to market.</h1>
          <p className='my-4'>
          I-validate provide a screening process for new business ideas, to answer a series of questions to determine if their idea has potential.
          </p>
        
          <Link to='../Form/Form.js' className='btn heroBtn'>Get Started</Link>
        </article>

        <div className='col-lg-6 mt-lg-0 mt-3 me-lg-0 heroLeft'>
          <picture className=' '>
          <img src={heroImage} alt='A Business woman' className='img-responsive heroImage  ' />
          </picture>
          <div className='box'>
          </div>
        </div>
    </section>
    <ResearchCard />
    <Plan />
    <Subsection />
    </main>
    </AppLayout>
  )
}

export default Hero