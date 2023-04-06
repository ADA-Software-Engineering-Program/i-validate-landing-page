import React from 'react'
import { Link } from 'react-router-dom'

const Customercontact =({title, link})=> {
  return (
    <div className='w-100'>
        <div className='d-flex custCard '>
            <h6 className="fw-bolder">{title}</h6>
           <div>
              <Link to="/response" className='custLink text-decoration-none'>
                  <p>{link}</p>
              </Link>
           </div>
        </div>
        <hr/>
    </div>
  )
}

export default Customercontact