import React from 'react'
import { Link } from "react-router-dom";
import SignupForm from './SignupForm'
import Bub from '../images/bub.png'
import './signup.css'

const Signup = () => {
  return (
    <div className='main-signup'>
      <SignupForm />
      <div className='color-side'>
        <div className='signin-option d-flex justify-content-center align-items-center'>
            <p>Already have an Account?</p>
            <Link to='#' className='signin-option-btn'>Sign In</Link>
        </div>
        <div className='light-bub d-flex justify-content-center align-items-center'>
            <img src={Bub} alt='Light' />
        </div>
        <div className='signup-details'>
            <p>I-validate is an idea validator and a powerful tool for aspiring entrepreneurs who want to bring their innovative ideas to market. </p>

            <p>Our platform offers a comprehensive set of tools and resources that make it easy to test your ideas, refine your plans, and get feedback from experts. </p>

            <p>Whether you're a seasoned entrepreneur or just starting, the Idea Validator App can help you reduce the risk of failure and increase your chances of success.</p>
        </div>
      </div>
    </div>
  )
}

export default Signup
