// import React from 'react';
// import ReactDOM from 'react-dom/client';
import './Service.css';

const List = [
  {
    title: 'Market Research',
    img: 'one.png',
    content:
      'We offer tools to conduct market research, such as competitor analysis, customer surveys, and focus groups. This information would help you understand the market demand and potential for their idea.This information would help you understand the market demand and potential for their idea',
    id: 1,
  },
  {
    title: 'Business Plan Generator',
    img: './two.png',
    content:
      'We provide a step-by-step guide to create a business plan, including financial projections, marketing strategies,and a sales plan. This would help users to identify potential challenges and opportunities before investing significant resources.',
    id: 2,
  },
  {
    title: 'Expert Feedback',
    img: './three.png',
    content:
      'I-Validate connect users with industry experts or perienced entrepreneurs who can offer feedback and advice on their idea. This would provide an objective perspective and help users refine their idea.',

    id: 3,
  },
  {
    title: 'Crowdfunding',
    img: './.png',
    content:
      'We offer a crowdfunding platform to allow users to test their idea by raising funds for a prototype or minimum viable product. This would help users to validate market demand and attract potential investors.',
    id: 4,
  },
];

const Service = () => {
  return (
    <section className="container mt-5 ml-5 mr-5 pl-5">
      <h2 className="text-white mb-5 fw-bold"> Service</h2>
      <div className="row">
        {List.map((item) => {
          // const { title, img, content } = item;

          return <Serve {...item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

const Serve = (props) => {
  const { title, img, content } = props;
  return (
    <div className="col-sm-6 mb-2" id="container">
      <div className="card pt-9" id="card">
        <span>
          <h1 className="text-white">{title}</h1>
          <img
            src={img}
            alt={title}
            className="position-absolute top-0 end-0"
          />
        </span>
        <p className="fs-6 text-dark fw-bolder">{content}</p>
      </div>
    </div>
  );
};
export default Service;
