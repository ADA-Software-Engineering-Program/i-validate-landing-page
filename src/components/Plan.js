import React, { useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import Plancard from '../components/Plancard';
import { Modal } from 'react-bootstrap';
import { Configuration, OpenAIApi } from 'openai';
// require('dotenv').config();

const Plan = () => {
  const [plandetail] = useState([
    {
      id: 1,
      heading: 'Business Plan Generator',
      description:
        'We provide a step-by-step guide to create a business plan, including financial projections, marketing strategies, and a sales plan. This would help you to identify potential challenges and opportunities before investing significant resources.',
    },
  ]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [idea, setIdea] = useState('');
  const [feedback, setFeedback] = useState('');

  const generate = async (e) => {
    e.preventDefault();

    if (!idea) {
      alert('Please fill out all input fields');
      return;
    }

    console.log('Generating feedback from OpenAI');

    const configuration = new Configuration({
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: 'What do you think about this?' + idea,
      temperature: 0.6,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 1,
      presence_penalty: 1,
    });
    setFeedback(response.data.choices[0].text);

    // console.log(response.data.choices[0].text);
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
            onChange={(e) => setIdea(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Choose sector"
            className="planInput"
          />
          <br />
          <div>
            <button
              type="submit"
              onClick={handleShow}
              className="btn heroBtn heroBtn2"
            >
              Generate
            </button>
            {feedback !== '' && (
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  {/* <Modal.Title>Modal heading</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>{feedback}</Modal.Body>
              </Modal>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Plan;
