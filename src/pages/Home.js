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
        
          <Link to='/Signup' className='btn heroBtn'>Get Started</Link>
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

// Enbedded code for the chatbot
  window.watsonAssistantChatOptions = {
    integrationID: "6bea3e79-fec6-4c20-9b87-607a0076db49", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "76278e82-f06e-436a-97df-d58a8bd2f505", // The ID of your service instance.
    onLoad: function(instance) { instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });

