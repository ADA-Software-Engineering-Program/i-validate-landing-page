import React from 'react';
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import Testifycard from './Testifycard';

function Testimonial() {
    const [testify] = useState([
        {
          id: 1,
          profilePic: "../../src/images/Ade.png",
          title: 'Adekunle Adejoro',
          detail:
            'Sales Manager Capro',
        },
        {
          id: 2,
          profilePic: "../../src/images/Obinna.png",
          title: 'Obinna Eze',
          detail:
            'Secretary Benson Enterprise',
        },
        {
          id: 3,
          profilePic: "../../src/images/Ifunaya.png",
          title: 'Ifunaya Ani',
          detail:
            'Team Lead Rose chops',
        },
      ]);

  return (
    <div className='row bgTest p-md-5'>
        <div className='col-lg-6'>
            {testify.map((item) => (
                    <Testifycard key={item.id} profilePic={item.profilePic} title={item.title} detail={item.detail} />
                    ))}
        </div>
        <div className='col-lg-6'>
            <div>
                <h5 className='fw-bolder mt-md-0 mt-2'>It was a great Experience!</h5>
                <div className='d-flex star'>
                    < AiFillStar/>
                    < AiFillStar/>
                    < AiFillStar/>
                    < AiFillStar/>
                    < AiFillStar/>
                </div>
                <p>
                    We recently used the idea validate web app and were extremely impressed with its capabilities. The app was easy to use and provided us with valuable insights into the viability of our ideas. We appreciated the app's simple, yet effective design, which made it easy to navigate and understand.<br/>
                    <br/>
                    The app's validation algorithm was accurate and reliable, helping us to identify potential weaknesses in our ideas that we might have otherwise missed. The app also provided us with useful suggestions and feedback, helping us to refine our ideas and make them more successful.<br/>
                    <br/>
                    Overall, we highly recommend using this idea validate web app to anyone looking to validate their ideas quickly and effectively. We were impressed with the app's capabilities and found it to be an invaluable tool in our idea development process.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Testimonial