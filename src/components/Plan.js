import React from 'react';
import { useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import Plancard from '../components/Plancard';

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
        <article className='col-md-6 px-5 heroDetail'>
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
      <div className='col-md-6 px-5'>
        <form>
            <input type="text"  placeholder='Type idea here' /><br/>
            <input type="text"  placeholder='Choose sector' /><br/>
            <button className='btn heroBtn heroBtn2'>Generate</button>
        </form>
      </div>
    </section>
  )
}

export default Plan