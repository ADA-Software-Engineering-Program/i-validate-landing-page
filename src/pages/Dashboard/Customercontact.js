import React from 'react'
import { Link } from 'react-router-dom'

const Customercontact =({title, link})=> {
  return (
    <div className='w-100  justify-content-between'>
        <div className='d-inline-flex custCard '>
            <h6 className="fw-bolder">{title}</h6>
            <Link to="." className='custLink text-decoration-none'>
                <p>{link}</p>
            </Link>
        </div>
        <hr/>
    </div>
  )
}

export default Customercontact