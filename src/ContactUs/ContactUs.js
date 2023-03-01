import React from 'react';
import ContactUsForm from'./ContactUsForm';
import './contactUs.css';
import contactUsHero from './contactus-hero.png';
import AppLayout from '../layout/AppLayout';

const ContactUs = () => {
  return (
    <AppLayout>
        <div className='contact-container'>
        <div className='container contactUs-title'>
            <h1>Contact i-validate</h1>
            <p>Having an early startup problem and seeking for help? Drop your details below. we would love to hear from you, this form is for you.
            </p>
        </div>
        <div className='contact-img-box'>
            <img src={contactUsHero} alt="Contact Us" />
        </div>
        <div className='container' >
            <ContactUsForm />
        </div>
        </div>
    </AppLayout>
  )
}

export default ContactUs
