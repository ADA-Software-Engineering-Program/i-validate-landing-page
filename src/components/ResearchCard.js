import React, { useState } from 'react';
import Research from './Research';
// import numberImage from '../images/Rectangle 6.png';

function ResearchCard() {
  const [researchDetail] = useState([
    {
      id: 1,
      title: 'Expert Feedback',
      detail:
        'Connect users with industry experts or experienced entrepreneurs who can offer feedback and advice on their idea.',
    },
    {
      id: 2,
      title: 'Market Research',
      detail:
        'Access tools to conduct market research, such as competitor analysis, customer surveys, and focus groups',
    },
  ]);

  return (
    <section className='row numberSection'>
        <div className='col-lg-6'>
            <div>
                <h4>1,000+</h4>
                <p>Entrepreneurs use I-validate </p>
            </div>
            {/* <img src={numberImage}alt='icon' /> */}
        </div>
            <div className='col-lg-6 '>
                <div className='row'>
                    {researchDetail.map((item) => (
                    <Research key={item.id} title={item.title} detail={item.detail} />
                    ))}
                </div>
            </div>
    </section>
  );
}

export default ResearchCard;
