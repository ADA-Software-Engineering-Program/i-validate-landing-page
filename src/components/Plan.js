import React from 'react';
import Herocard from '../components/Herocard';

function Plan ({heading, description}){
    
  return (
    <section className='row numberSection'>
        <article className='col-md-6 my-5 px-5 heroDetail'>
            <Herocard heading={heading} description={description}/>
            <div className='d-flex'>
                <div className='circle '></div>
                <p>Try it out if few clicks</p>
            </div>
      </article>
      <form className='col-md-6'>
        <input type="text"  placeholder='Type idea here' className='w-75 my-2'/><br/>
        <input type="text"  placeholder='Choose sector' className='w-75 my-2'/><br/>
        <button className='btn heroBtn heroBtn2'>Generate</button>
      </form>
    </section>
  )
}

export default Plan