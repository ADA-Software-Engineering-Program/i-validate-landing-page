import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import { HiUserCircle } from 'react-icons/hi';
import Dlogo from '../../images/i-validate-logo-optimiz.jpg';
import { BsPatchCheckFill } from 'react-icons/bs';
import { MdAddCircle } from 'react-icons/md';
import Customer from './Customer';
import Ideagenerator from './Ideagenerator';




function Dashboard() {
  


  return (
    
        <main className='container'>
            <div className='d-flex justify-content-between my-3'>
                <h4 className='fw-bolder my-auto'>Overview</h4>
                <div className='d-flex justify-content-between'>
                    <Link className='my-auto text-decoration-none text-dark'
                    to="/"
                    >Log Out</Link>
                    <div>
                      <HiUserCircle className='hiUser'/>
                    </div>
                </div>
            </div>
            <section className='d-inline-flex container dHead'>
                <img src={Dlogo} alt="Logo" className='dLogo'/>
                <h1 className='w-lg-50 fw-bolder mx-auto my-auto'>
                  <span className='titleSpan'>Validate</span> your ideas before building
                </h1>
            </section>
            <div className='my-4 dSection'>
              <div className='overHead'>
                <h2 className='fw-bolder ms-4 pt-2'>
                  1. Idea
                </h2>
                <span className='ms-4'>Kindly answer the following questions:</span>
              </div>
              <Ideagenerator/>
            </div>
            <article className='my-4 dSection'>
              <div className='overHead'>
                <h2 className='fw-bolder ms-4 pt-2'>
                  2. Market Research
                </h2>
              </div>
              <div className='d-flex ideaSection'>
                <BsPatchCheckFill className='dIcons dIcons1'/>
                <div className='dQuestion'>
                  <h6 className='fw-bolder'>Research Competitors</h6>
                  <span>Know what your up against</span><br/>
                  <span>There is no such thing as a new idea-Mark Tawing. konw more about your competitors</span>
                </div>
              </div>
              <Link to='http://townhall.com' className='ideaSection2'>http://townhall.com </Link>
              
              <div className='row researchQuestion'>
                <div className='col-md-6'>
                  WHAT DO THEY DO WELL? <br/>
                  <li></li>
                </div>
                <div className='col-md-6'>
                  WHAT ARE THEIR WEAKNESSES? <br/>
                  <li></li>
                </div>
                <div className='col-md-6'>
                  CUSTOMERS REVIEW <br/>
                  <li></li>
                </div>
                <div className='col-md-6'>
                  PRICING <br/>
                  <li></li>
                </div>
              </div>
              <div className='d-inline-flex border p-1 newBtn' >
                <MdAddCircle className='dPlus'/>
                <p className='my-auto'>NEW COMPETITORS</p>
              </div>
            </article>
            <Customer />
        </main>
    
  )
}

export default Dashboard