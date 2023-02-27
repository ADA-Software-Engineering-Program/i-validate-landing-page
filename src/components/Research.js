import React from 'react'

const Research =({title,detail}) => {
  return (
    <div className=' mx-md-3 px-md-0 '>
         <div className='d-inline-flex pt-2'>
            <div className='circle mt-2'></div>
            <h4 className="w-50 ms-2 subTitle">{title}</h4>
         </div>
        <p className="my-4 ">{detail}</p>
    </div>
  )
}

export default Research