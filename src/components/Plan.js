import React from 'react';
import { useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import Plancard from '../components/Plancard';
import { Link } from 'react-router-dom';

const Plan = () =>{
    const [plandetail] =useState([
        {
            id: 1,
            heading: "Business Plan Generator",
            description: "We provide a step-by-step guide to create a business plan, including financial projections, marketing strategies, and a sales plan. This would help you to identify potential challenges and opportunities before investing significant resources."
         
        }
        
      ])
    
  return (
    <section className='row numberSection'>
        <article className='col-lg-6 px-md-5 planDetail'>
            {plandetail.map((item) => {
            return(<Plancard key={item.id} heading={item.heading} description={item.description} />)
            })}
            <div className='d-inline-flex'>
                <div className='circle '>
                  <BsArrowRightShort className='w-75 h-75 mx-1 my-1'/>
                </div>
                <p className='mt-2 ms-2'>Try it out if few clicks</p>
            </div>
      </article>
      <div className='col-lg-6 px-md-5'>
        <form className='planForm'>
            <input type="text"  placeholder='Type idea here' className='planInput' /><br/>
            <input type="text"  placeholder='Choose sector' className='planInput'  /><br/>
            <Link to='.' className='btn heroBtn heroBtn2'>Generate</Link>
        </form>
      </div>
    </section>
  )
}

export default Plan