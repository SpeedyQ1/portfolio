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
    description: `"ProPerty" is one of my initial React projects, focused solely on front-end development. Serving as a real estate web application, it highlights my proficiency in crafting engaging user interfaces. By utilizing a JSON file containing various real properties, the app offers a streamlined platform for property exploration. Users can easily refine and organize property options based on their preferences. This project underscores my dedication to constructing interactive and user-centric interfaces, setting the stage for further advancements in web development`,
    images: [ProPertyImg1, ProPertyImg2, ProPertyImg3],
    url: "https://ash-pro-perty.netlify.app/",
    gitHubUrl: "https://github.com/SpeedyQ1/ProPerty",
  };
  const cvObj = {
    title: "Cv Generator",
    description: `My first real full-stack project, the "CV Generator" project, melded React and MongoDB. The current MVP scope offers two layout templates to choose from, Input your info, and download your CV in PDF format instantly. Manage, edit, and download all your resumes with ease. (not mobile responsive)`,
    images: [CvImg1, CvImg2, CvImg3],
    url: "https://ash-cv-generator.netlify.app/",
    gitHubUrl: "https://github.com/SpeedyQ1/cvsClient",
    gitHubBack: "https://github.com/SpeedyQ1/cvsServer",
  };
  const mindGamesObj = {
    title: "MindGames",
    description: `During the middle project of my bootcamp at Cyberpro, for a week I worked with another student to develop "MindGames," a frontend-only web app for buying and selling lecture tickets. Leveraging GitHub, we ensured a seamless partnership while crafting an intuitive platform. Notably, user sign-up and login used local storage, and data wasn't stored permanently `,
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
    description: `During a 48-hour bootcamp hackathon, my partner and I created "lone soldier," a frontend-only web app designed for volunteers and lonely soldiers. It was a unique endeavor, as the continuous 48-hour work session took place at the college The intense coding marathon, fueled by GitHub collaboration, resulted in a unique project.  This project reflects the dedication of a non-stop coding session. 
    I didnt change te final result so you can see what we acomplished after 48 hours.
    To experience it, sign up as a volunteer or log in using the provided credentials for a soldier's perspective.
    
    Notably, the sign-up and login functionalities were enabled through local storage, with data not being permanently stored `,
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
          Contact Me Any Time
        </div>
      </div>
      <div id="home-big-img-div">
        <img id="home-big-img" src={backgroundImg} alt="" />
      </div>
      <div id="projects-section">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <div id="education-section">
        <h1 className="edu-info">E d u c a t i o n</h1>
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

      <div id="technologies">
        <h1 className="edu-info">T e c h n o l o g i e s</h1>
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
