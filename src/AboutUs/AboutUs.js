import React, { useState } from "react";
import "./aboutUs.css";
import AboutUsCard from "./AboutUsCard";
import AppLayout from "../layout/AppLayout";
import AboutHero from "./images/about-hero.png";
import Atinuke from "./images/Atinuke.png";
import Chimdindu from "./images/Chimdindu.png";
import Chinemerem from "./images/Chinemerem.png";
import Chinwe from "./images/Chinwe.png";
import Ezinma from "./images/Ezinma.png";
import Fikona from "./images/Fikona.png";
import Ibraheem from "./images/Ibraheem.png";
import Ihuoma from "./images/Ihuoma.png";
import Kadija from "./images/Kadija.png";
import Kasie from "./images/Kasie.png";
import Ogochukwu from "./images/Ogochukwu.png";
import Willie from "./images/Willie.png";

const AboutUs = () => {
  const [aboutUsInfo] = useState([
    {
      id: 1,
      profilePic: Chinwe,
      ourName: "Chinwe Erugo",
      phoneNumber: "+234 8036517056",
      techStack: "Product Manager",
    },
    {
      id: 2,
      profilePic: Ezinma,
      ourName: "Ezinma Erimah",
      phoneNumber: "+234 913426232",
      techStack: "Data Analyst",
    },
    {
      id: 3,
      profilePic: Fikona,
      ourName: "Fikona Temimana",
      phoneNumber: "+234 818409692",
      techStack: "Data Analyst",
    },
    {
      id: 4,
      profilePic: Chinemerem,
      ourName: "Ezeji Chinemerem",
      phoneNumber: "+234 8103261869",
      techStack: "Data Analyst",
    },
    {
      id: 5,
      profilePic: Atinuke,
      ourName: "Atinuke Gabageen",
      phoneNumber: "+234 7016648558",
      techStack: "Data Analyst",
    },
    {
      id: 6,
      profilePic: Kasie,
      ourName: "Kasie Ugwu",
      phoneNumber: "+234 7034367299",
      techStack: "Frontend Engineer",
    },
    {
      id: 7,
      profilePic: Ogochukwu,
      ourName: "Ogochukwu Ugorji",
      phoneNumber: "+234 7066956779",
      techStack: "Frontend Engineer",
    },
    {
      id: 8,
      profilePic: Ibraheem,
      ourName: "Ejibode Ibraheem",
      phoneNumber: "+234 8135676808",
      techStack: "Frontend Engineer",
    },
    {
      id: 9,
      profilePic: Kadija,
      ourName: "Kadija Lawal",
      phoneNumber: "+234 7039545422",
      techStack: "Product Designer",
    },
    {
      id: 10,
      profilePic: Willie,
      ourName: "Ifiok Willie",
      phoneNumber: "+234 810751617",
      techStack: "Product Designer",
    },
    {
      id: 11,
      profilePic: Chimdindu,
      ourName: "Ojih Chimdindu",
      phoneNumber: "+234 9073233349",
      techStack: "Product Designer",
    },
    {
      id: 12,
      profilePic: Ihuoma,
      ourName: "Ihuoma Agbaru",
      phoneNumber: "+234 8036517056",
      techStack: "Cloud Developer",
    },
  ]);

  return (
    <AppLayout>
      <div className="about-container">
        <div className="aboutUs-title container">
          <h1 >Let Us Validate Your Business Idea</h1>
          <p>
            i-validate is a web app developed to help entrepreneurs validate
            their business ideas before investing significant resources.
          </p>
        </div>
        <div className="image-box">
          <img src={AboutHero} alt="Hero Page" />
        </div>
        <div className="container">
          <div className="about-team">
            <h2>Our Team</h2>
            <p>"Convert your ideas to Reality"</p>
          </div>
          <div className="row">
            {aboutUsInfo.map((item) => {
              return (
                <AboutUsCard
                  key={item.id}
                  profilePic={item.profilePic}
                  ourName={item.ourName}
                  phoneNumber={item.phoneNumber}
                  techStack={item.techStack}
                />
              );
            })}
          </div>
        </div>
        <div className="about-insight container">
          <h2>Insight</h2>
          <p>
            The idea came from major problems in which most startups usually
            face, whereby, investing a lot of money, time, effort and resources,
            but end up building an app that isn't needed by the masses.
            </p>
            <p>
            Getting feedback at an early stage helps a lot. so our team came up
            with the i-validate application, to help individuals at their
            earliest stages by making them see what the market is and what users
            have to say about their idea before they get started on it.
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default AboutUs;
