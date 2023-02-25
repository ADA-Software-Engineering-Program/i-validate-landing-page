import React, { useState } from 'react';
import Research from './Research';
import { TiWaves } from 'react-icons/ti';

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
        <div className='col-lg-6 position-relative'>
            <div className='researchRight'>
                <h4 className='numbText'>1,000+</h4>
                <p className='fw-light'>Entrepreneurs use I-validate </p>
            </div>
            <div className='researchShadow'>
              <TiWaves className='wave'/>
            </div>
        </div>
            <div className='col-lg-6 '>
                <div className='d-flex'>
                    {researchDetail.map((item) => (
                    <Research key={item.id} title={item.title} detail={item.detail} />
                    ))}
                </div>
            </div>
    </section>
  );
}

export default ResearchCard;
