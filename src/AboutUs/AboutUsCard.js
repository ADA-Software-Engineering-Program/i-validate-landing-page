import React from "react";
import "./aboutUs.css";

const AboutUsCard = ({ profilePic, ourName, phoneNumber, techStack }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="about-card-main">
        <div className="d-flex align-items-center justify-content-center">
          <img src={profilePic} alt="About us" />
        </div>
        <div className="about-card-details">
          <h2>{ourName}</h2>
          <h4>{phoneNumber}</h4>
          <p>{techStack}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
