import React, { Suspense, useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import Plancard from '../components/Plancard';
import { Dialog } from '@headlessui/react';
import { RxCross2 } from 'react-icons/rx';




function Plan() {
  const [plandetail] = useState([
    {
      id: 1,
      heading: 'Business Plan Generator',
      description: 'We provide a step-by-step guide to create a business plan, including financial projections, marketing strategies, and a sales plan. This would help you to identify potential challenges and opportunities before investing significant resources.',
    },
  ]);

  
  const [idea, setIdea] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);



  const Fallback = () => <div className='fallback'><p>This will take a while. Hold on</p></div>

  async function generate(e) {
    e.preventDefault();

    console.log('Generating feedback from OpenAI');

    if (!idea) {
      alert('Please fill out all input fields');
      return;
    }
    setLoading(true);

    console.log('Generating feedback from OpenAI');

    
    try {
      const response = await fetch('https://i-validate-api.onrender.com/generate', {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idea }),
      });

      const data = await response.json();
      console.log(data);
      setFeedback(data);
      setIsOpen(true); // Open the dialog after receiving feedback
    } catch (error) {
      console.error(error);
      alert('An error occurred while generating feedback.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="row numberSection">
      <article className="col-lg-6 px-md-5 planDetail">
        {plandetail.map((item) => {
          return <Plancard key={item.id} heading={item.heading} description={item.description} />;
        })}
        <div className="d-inline-flex">
          <div className="circle ">
            <BsArrowRightShort className="w-75 h-75 mx-1 my-1" />
          </div>
          <p className="mt-2 ms-2">Try it out with a few clicks</p>
        </div>
      </article>
      <div className="col-lg-6 px-md-5">
        <form onSubmit={generate} className="planForm">
          <input
            type="text"
            placeholder="Type idea here"
            className="planInput"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
          />
          <br />
          <input type="text" placeholder="Choose sector" className="planInput" />
          <br />
          <button
            type="submit"
            className="btn heroBtn heroBtn2"
          >
            Generate
          </button>
        </form>
        <Suspense fallback={<Fallback/>}>
          {loading && <Fallback/>}
          {isOpen && feedback.data && !loading && (
            
              <Dialog 
                open={isOpen}
                style={{position: "fixed", left:"0", right:"0", top:"0", bottom:"0",  zIndex: "60", justifyContent:"center", alignItems:"center", minHeight:"100vh" }}
                onClose={() => setIsOpen(false)}
              >
                <div style={{position:"fixed", inset:"0", overflowY:"auto"}}>
                  <div style={{display:"flex", justifyContent:"center", alignItems:"center", minHeight:"full", padding:"4px"}}>
                    <Dialog.Panel
                      className='mx-auto bg-white p-3  text-start align-items-center'
                    >
                      <div className='d-flex justify-content-around align-items-center'>
                        <Dialog.Title as='h4' className='text-lg fw-semibold'>Feedback</Dialog.Title>
                          <button onClick={() => setIsOpen(false)} className='bg-transparent p-1 border-0'>
                            <RxCross2/>
                          </button>
                      </div>
                      <p className='text-base p-2 overflow-auto'>{feedback.data}</p>
                    </Dialog.Panel>
                  </div>
                </div>
              </Dialog>
        )}
        </Suspense>
      </div>
      
    </section>

  );
};
export default Plan














