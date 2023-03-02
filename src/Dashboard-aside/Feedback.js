import React from "react";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import "./dashboard-aside.css";
import BarCC from "../components/dashboard-aside-comp/BarCC";


const Feedback = () => {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Feedback</h3>
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/Login" className="text-black d-block me-2">
            Log out
          </Link>
          <BsPersonCircle className="fs-4" />
        </div>
      </div>

      <div className="feedback-text">
        <h3>This is a great Idea!</h3>
        <p>
          However, some things you may want to consider are the target market
          for your business and how you plan to generate revenue. For example,
          will you charge a commission on each sale? Additionally, you'll need
          to research what types of collectibles are in demand and develop a
          system for procuring these items. Furthermore, you'll need to create a
          platform (online or offline) where people can purchase shares.
          However, it's important to note that no app can guarantee 100% success
          of an idea, and ultimately, it's up to the users to decide whether or
          not to pursue their ideas based on the information gathered through
          the app. Overall, this is a great idea with a lot of potential!
        </p>
      </div>
      <div>
        <BarCC />
      </div>
    </div>
  );
};

export default Feedback;
