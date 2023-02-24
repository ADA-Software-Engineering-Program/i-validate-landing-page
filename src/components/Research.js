import React from 'react'

const Research =({title,detail}) => {
  return (
    <div className='col-lg-3 col-md-4 mx-5'>
         <div className='d-flex'>
            <div className='circle '></div>
            <h4 className="w-100">{title}</h4>
         </div>
        <p className="my-4">{detail}</p>
    </div>
  )
}

export default Research