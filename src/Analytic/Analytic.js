import React from "react";

import img3 from "../images/analar.png";
import img2 from "../images/analytic.png";
import img1 from "../images/Rectangle.png";
import AppLayout from "../layout/AppLayout";

const List = [
  {
    id: 1,
    title: "Market Research",
    content:
      "Acess tools to conduct market research,such as competitor analysis,customer surveys and focus groups",
    img: img1,
  },

  {
    id: 2,
    title: "Competitor Analysis",
    content:
      "The app could offer real-time analytics to track user engagement, retention, and other metricsthat help users to understand how their idea is performing in the market.",
    img: img2,
  },

  {
    id: 3,
    title: "Product Research",
    content:
      "The app could offer tools to conduct market research,such as competitor analysis, customer surveys, and focus groups.This information would help users understand the market demand and potential for their idea.",
    img: img3,
  },
];
const Analytic = () => {
  return (
    <AppLayout>
      <section>
        {List.map((item) => {
          return <Analar item={item} key={item.id} />;
        })}
      </section>
    </AppLayout>
  );
};

const Analar = ({ item }) => {
  const { title, content, img } = item;
  console.log(title, content, img);
  return (
    <div className="row mt-5 mb-5" id="con">
      <div className="d-md-flex justify-content-around  align-items-center ">
        <div className="col-md-4 mr-4">
          {" "}
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
        <div className="  col-md-5  ">
          <div
            style={{ backgroundColor: "#292988" }}
            className="d-flex flex-column "
          >
            <div className="p-0 m-0 ml-4 mr-4">
              <img
                src={img}
                alt={title}
                className="img-fluid mt-0 mb-0 pt-0 pb-0 ml-4 "
              />
            </div>
            <p className="text-white mt-0  text-center">oando 2023-2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Analytic;
