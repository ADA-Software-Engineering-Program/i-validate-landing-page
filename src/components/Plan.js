import React, { Suspense, useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import Plancard from '../components/Plancard';
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";


const Plan = () => {
  const [plandetail] = useState([
    {
      id: 1,
      heading: 'Business Plan Generator',
      description:
        'We provide a step-by-step guide to create a business plan, including financial projections, marketing strategies, and a sales plan. This would help you to identify potential challenges and opportunities before investing significant resources.',
    },
  ]);

  
  
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  const [idea, setIdea] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);


  const Fallback = () => <div className='fallback'><p>This will take a while. Hold on</p></div>

  async function generate(e) {
    e.preventDefault();

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
          return (
            <Plancard
              key={item.id}
              heading={item.heading}
              description={item.description}
            />
          );
        })}
        <div className="d-inline-flex">
          <div className="circle ">
            <BsArrowRightShort className="w-75 h-75 mx-1 my-1" />
          </div>
          <p className="mt-2 ms-2">Try it out if few clicks</p>
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
          <input
            type="text"
            placeholder="Choose sector"
            className="planInput"
          />
          <br />
          <button
            type="submit"
            onClick={open}
            className="btn heroBtn heroBtn2"
          >
            Generate
          </button>
        </form>
        <Suspense fallback={<Fallback/>}>
          {loading && <Fallback/>}
          {feedback.data && !loading && (
            <Dialog isOpen={showDialog}>
              <DialogOverlay
              style={{ background: "hsla(0, 0%, 0%, .5)" , zIndex: "1055"}}
              onDismiss={close}
              >
                <DialogContent
                  style={{ boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)", width: "80%" }}
                >
                  <div className='d-flex justify-content-between align-items-center mb-3'>
                    <h4>Feedback</h4>
                    <button className='closeBtn' onClick={close}>
                      <span aria-hidden>X</span>
                    </button>
                  </div>
                  <p>
                    {feedback.data}
                  </p>
                </DialogContent>
            </DialogOverlay>
          </Dialog>
        )}
        </Suspense>
      </div>
    </section>
  );
};

export default Plan;
