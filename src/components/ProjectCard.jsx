import React from "react";
import "./ProjectCard.css";
import ProPertyCarousel from "./ProPertyCarousel";
import github from "../assets/github.png";
import websiteLogo from "../assets/websiteLogo.png";

function ProjectCard({ project }) {
  const formattedDescription = project.description
    .split(". ")
    .map((sentence, index) => (
      <React.Fragment key={index}>
        {sentence}
        <br />
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
          <div className="project-description">{formattedDescription}</div>
        </div>
      </div>

      <div className="project-links-section">
        <h2 style={{ marginBottom: "20px" }}>check it yourself</h2>
        <div className="all-links-div">
          <div className="project-links">
            <a href={project.url} target="_blank">
              <img className="website-logo" src={websiteLogo} />
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
              <img className="website-logo" src={github} />
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
                <img className="website-logo" src={github} />
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
  );
}

export default ProjectCard;
