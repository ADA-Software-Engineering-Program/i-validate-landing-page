import React from 'react'


const Testifycard=({profilePic, title, detail}) => {
  return (
    <div className=' d-flex testifyCard '>
        <div>
                <img className="img-responsive profilePics" 
                src={profilePic} 
                alt='profile pic' />
            </div>
         <div>
            <h6 className=" ms-4 subTitle">{title}</h6>
            <p className="ms-4 ">{detail}</p>
         </div>
        
    </div>
  )
}

export default Testifycard