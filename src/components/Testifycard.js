import React from 'react'


const Testifycard=({profilePic, title, detail}) => {
  return (
    <div className=' d-flex testifyCard '>
                <img className="img-responsive profilePics" 
                src={profilePic} 
                alt='profile pic' />
            
         <div className='my-auto'>
            <h6 className=" ms-2 proTitle fw-bolder">{title}</h6>
            <p className="ms-2  proDetail">{detail}</p>
         </div>
        
    </div>
  )
}

export default Testifycard