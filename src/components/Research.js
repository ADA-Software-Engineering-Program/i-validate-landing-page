import React from 'react'

const Research =({title,detail}) => {
  return (
    <div className=' mx-3 '>
         <div className='d-inline-flex pt-2'>
            <div className='circle'></div>
            <h4 className="w-50 ms-2 subTitle">{title}</h4>
         </div>
        <p className="my-4">{detail}</p>
    </div>
  )
}

export default Research