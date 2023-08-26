import React, { useState } from "react";
import "./ProjectCard.css";
import ProPertyCarousel from "./ProPertyCarousel";
import github from "../assets/github.png";
import websiteLogo from "../assets/websiteLogo.png";
import "animate.css";
import upArrow from "../assets/upArrow.png";
import downArrow from "../assets/downArrow.png";
import StorageIcon from "@mui/icons-material/Storage";
import SourceIcon from "@mui/icons-material/Source";
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function ProjectCard({ project }) {
  const [readMore, setReadMore] = useState(false);
  const formattedDescription = project.description
    .split(". ")
    .map((sentence, index) => (
      <React.Fragment key={index}>
        {sentence + "."}
        <br />
      </React.Fragment>
    ));

  return (
    <div className="project-card-container">
      <div className="description-and-carousel">
        <div className="carousel-container">
          <ProPertyCarousel data={project.images} />
        </div>
        <div className="project-info-div">
          <h1 className="project-name">{project.title}</h1>
          <h4>{project?.shortDescription}</h4>
          <div
            className={
              readMore
                ? "project-description display-me animate__animated animate__bounceIn"
                : "dont-display-me"
            }
          >
            {formattedDescription}

            <h2 className="technical-details-title">Technical Details</h2>
            <div className="project-details">
              <div className="library-section details">
                <SourceIcon />
                <h3> Libraries</h3>
                {project?.libraries.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
              <div className="data-storage-section details">
                <StorageIcon />
                <h3>Data Storage </h3>
                {project?.dataStorage.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>

              <div className="time-section details">
                <AccessTimeIcon />
                <h3>Dev Duration </h3>
                {project?.time}
              </div>
            </div>

            <div className="project-links-section">
              <h2 style={{ marginBottom: "20px" }}>check it yourself</h2>
              <div className="all-links-div">
                <div className="project-links">
                  <a href={project.url} target="_blank">
                    <LanguageIcon/>
                  </a>
                  <h3>
                    for the website, click{" "}
                    <a href={project.url} target="_blank">
                      <span className="here-link">here</span>
                    </a>{" "}
                  </h3>
                </div>
                <div className="project-links">
                  <a href={project.gitHubUrl} target="_blank">
                    <GitHubIcon/>
                  </a>
                  <h3>
                    for the git repository, click{" "}
                    <a href={project.gitHubUrl} target="_blank">
                      <span className="here-link">here</span>
                    </a>{" "}
                  </h3>
                </div>
                {project?.gitHubBack && (
                  <div className="project-links">
                    <a href={project.gitHubUrl} target="_blank">
                      <GitHubIcon/>
                    </a>
                    <h3>
                      for the git back-end repository, click{" "}
                      <a href={project.gitHubUrl} target="_blank">
                        <span className="here-link">here</span>
                      </a>{" "}
                    </h3>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="read-more-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? (
              <div className="read-more-btn-div">
                {" "}
                read less <img className="arrow-img" src={upArrow} />
              </div>
            ) : (
              <div className="read-more-btn-div">
                {" "}
                read more <img className="arrow-img" src={downArrow} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
