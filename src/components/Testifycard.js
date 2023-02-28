import React from 'react'


const Testifycard=({profilePic, title, detail}) => {
  return (
    <div className=' d-flex '>
        <div>
                <img className="img-responsive profilePics" 
                src={profilePic} 
                alt='profile pic' />
            </div>
         <div className=''>
            <h6 className="w-50 ms-2 subTitle">{title}</h6>
            <p className="my-4 ">{detail}</p>
         </div>
        
    </div>
  )
}

export default Testifycard