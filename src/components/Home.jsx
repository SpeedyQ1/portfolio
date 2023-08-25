import { useState, useEffect } from "react";
import "./Home.css";
import backgroundImg from "../assets/675518266729.jpg";

import ProPertyImg1 from "../assets/ProPertyImg/1.png";
import ProPertyImg2 from "../assets/ProPertyImg/2.png";
import ProPertyImg3 from "../assets/ProPertyImg/3.png";

import CvImg1 from "../assets/CvImg/1.png";
import CvImg2 from "../assets/CvImg/2.png";
import CvImg3 from "../assets/CvImg/3.png";

import MindGamesImg1 from "../assets/MindGamesImg/1.png";
import MindGamesImg2 from "../assets/MindGamesImg/2.png";
import MindGamesImg3 from "../assets/MindGamesImg/3.png";
import MindGamesImg4 from "../assets/MindGamesImg/4.png";
import MindGamesImg5 from "../assets/MindGamesImg/5.png";

import LonelySoldierImg1 from "../assets/LonelySoldierImg/1.png";
import LonelySoldierImg2 from "../assets/LonelySoldierImg/2.png";
import LonelySoldierImg3 from "../assets/LonelySoldierImg/3.png";
import LonelySoldierImg4 from "../assets/LonelySoldierImg/4.png";
import LonelySoldierImg5 from "../assets/LonelySoldierImg/5.png";
import LonelySoldierImg6 from "../assets/LonelySoldierImg/6.png";
import LonelySoldierImg7 from "../assets/LonelySoldierImg/7.png";
import LonelySoldierImg8 from "../assets/LonelySoldierImg/8.png";
import LonelySoldierImg9 from "../assets/LonelySoldierImg/9.png";

import html from "../assets/html5.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import mongodb from "../assets/mongodb.svg";
import nodeJs from "../assets/node-js.svg";
import express from "../assets/express.svg";
import java from "../assets/java.svg";
import python from "../assets/python.svg";
import sql from "../assets/sql.svg";
import json from "../assets/file.svg";
import react from "../assets/react.svg";

import ProjectCard from "./ProjectCard";
import Loader from "./Loader";
import SocialCard from "./SocialCard";
import BackToTopBtn from "./BackToTopBtn";

function Home() {
  const proPertyObj = {
    title: "ProPerty",
    description: `"ProPerty" represents my initial independent, full-scale React project, focusing solely on front-end development. The objective was to create an efficient property exploration platform using real-time API data extraction of real estate listings, enabling users to effortlessly discover relevant properties through intuitive filtering options. Functioning as a real estate web application, it highlights my skill in designing user-friendly interfaces by leveraging a JSON file with diverse API-fetched property data.`,
    shortDescription: "real-estate web-app",

    images: [ProPertyImg1, ProPertyImg2, ProPertyImg3],
    url: "https://ash-pro-perty.netlify.app/",
    gitHubUrl: "https://github.com/SpeedyQ1/ProPerty",
  };
  const cvObj = {
    title: "CV",
    shortDescription: "CV generator",
    description: `My first real full-stack project was to create a web tool for formulating CV personal information using predesigned templates and enabling users to download and print their designed CV forms. The "CV Generator" project, melded React and MongoDB. The current MVP scope offers two layout templates to choose from, Input your info, and download your CV in PDF format instantly. Manage, edit, and download all your resumes with ease. (not mobile responsive)
    In this project, I implemented DB-based secured user authentication and user CV storage.`,
    images: [CvImg1, CvImg2, CvImg3],
    url: "https://ash-cv-generator.netlify.app/",
    gitHubUrl: "https://github.com/SpeedyQ1/cvsClient",
    gitHubBack: "https://github.com/SpeedyQ1/cvsServer",
  };
  const mindGamesObj = {
    title: "MindGames",
    shortDescription: "selling tickets platform",
    description: `For the mid term project, my partner and I aimed to create "MindGames," a frontend-only web app for buying and selling tickets for letures. We invested a week's work into it, everaging GitHub, we ensured a seamless partnership while crafting an intuitive platform. Notably, user sign-up and login used temporary local storage. We also created internal API to present dynamic information for users`,
    images: [
      MindGamesImg1,
      MindGamesImg2,
      MindGamesImg3,
      MindGamesImg4,
      MindGamesImg5,
    ],
    url: "https://ash-mindgames.netlify.app/",
    gitHubUrl: "https://github.com/SpeedyQ1/MindGames",
  };
  const LonelySoldier = {
    title: "lone soldier",
    shortDescription: "Volunteer 2 sided platform",
    description: `In this project, our goal was to provide a solution for the painful problem of civil support for IDF-lonely soldiers. The idea and implementation were done within a 48-hour hackathon in which we built a platform for IDF Lonly Soldiers to hook up with volunteering individuals and adopting families.

    The website offers dual registration and login options for both parties and the ability for lonely soldiers to filter and search for the volunteers in context and the type of support they need using location and volunteer profile variables.
    
    In the presentation event, our project and team were highly commanded by the program’s managers and our peer teams.`,
    images: [
      LonelySoldierImg1,
      LonelySoldierImg2,
      LonelySoldierImg3,
      LonelySoldierImg4,
      LonelySoldierImg5,
      LonelySoldierImg6,
      LonelySoldierImg7,
      LonelySoldierImg8,
      LonelySoldierImg9,
    ],
    url: "https://ash-lonely-soldier.netlify.app/",
    gitHubUrl: "https://github.com/SpeedyQ1/LonelySoldier",
  };

  const [isLoading, setIsLoading] = useState(true);
  const [upBtn, setUpBtn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setUpBtn(true);
      } else {
        setUpBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const projects = [proPertyObj, LonelySoldier, cvObj, mindGamesObj];
  return (
    <div id="home-container">
      {isLoading && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "#212121",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader />
        </div>
      )}
      {upBtn && <BackToTopBtn />}

      <div id="top-of-the-page" className="sahar-title">
        <h1 className="h-title-home">Sahar Ash</h1>
        <h2 className="h2-title-home">Full-Stack Developer</h2>
        <div id="social-media-div">
          <SocialCard />
          Let's Talk 😉
        </div>
      </div>
      <div id="home-big-img-div">
        <img id="home-big-img" src={backgroundImg} alt="" />
      </div>

      <div id="technologies">
        <h1 className="edu-info edu-info-title">T e c h n o l o g i e s</h1>
        <div className="technologies-container">
          <div className="tech-div">
            <img className="tech" src={html} alt="" />
          </div>
          <div className="tech-div">
            <img className="tech" src={css} alt="" />
          </div>
          <div className="tech-div">
            <img className="tech" src={javascript} alt="" />
          </div>
          <div className="tech-div">
            <img className="tech" src={react} alt="" />
          </div>
          <div className="tech-div">
            <img className="tech" src={nodeJs} alt="" />
          </div>
          <div className="tech-div">
            <img className="tech" src={mongodb} alt="" />
          </div>
          <div className="tech-div">
            <img className="tech" src={express} alt="" />
          </div>
          <div className="tech-div">
            <img className="tech" src={sql} alt="" />
          </div>
          <div className="tech-div">
            <img className="tech" src={python} alt="" />
          </div>
          <div className="tech-div">
            <img className="tech" src={json} alt="" />
          </div>
          <div className="tech-div">
            <img className="tech" src={java} alt="" />
          </div>
        </div>
      </div>

      <div id="projects-section">
        {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
        ))}
      </div>

      <div id="education-section">
        <h1 className="edu-info edu-info-title">E d u c a t i o n</h1>
        <div className="edu-container">
          <div className="edu-div">
            <h3 className="edu-info">
              Fullstack development bootcamp, CyberPro , Ramat Gan.
            </h3>
            <span className="hours-year">
              <h4 className="edu-info">700+ hours</h4>
              <h4 className="edu-info">2023</h4>
            </span>
          </div>
          <div className="edu-div">
            <h3 className="edu-info">
              High school majors (5 units): Mathematics, Physics, Computer
              Science, and English
            </h3>
            <h4 className="edu-info">2020</h4>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Home;

// import html from "../assets/html5.svg";
// import css from "../assets/css.svg";
// import javascript from "../assets/javascript.svg";
// import mongodb from "../assets/mongodb.svg";
// import nodeJs from "../assets/node-js.svg";
// import express from "../assets/express.svg";
// import java from "../assets/java.svg";
// import python from "../assets/python.svg";
// import sql from "../assets/sql.svg";
// import json from "../assets/file.svg";
