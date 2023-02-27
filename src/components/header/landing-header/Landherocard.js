import React, { useState } from 'react';
import Landhero from '../../../components/Landhero';
import '../../../index.css'


function Landherocard() {
  const [vision] = useState([
    {
      id: 1,
      title: 'Vision',
      detail:
        'At the core of our brand is the belief that anyone can be an entrepreneur, and that every idea has the potential to change the world.',
    },
    {
      id: 2,
      title: 'Mission',
      detail:
        'At the core of our brand is the belief that anyone can be an entrepreneur, and that every idea has the potential to change the world.',
    },
  ]);

  return (
    <section className='row numberSection vision'>
            <div className='col-lg-6 researchLeft'>
                <div className='d-flex'>
                    {vision.map((item) => (
                    <Landhero key={item.id} title={item.title} detail={item.detail} />
                    ))}
                </div>
            </div>
    </section>
  );
}

export default Landherocard;
