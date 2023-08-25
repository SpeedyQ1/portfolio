import React, { useEffect, useState, useRef } from "react";
import logo from "./../assets/AshLogo.png";
import { useNavigate } from "react-router-dom";
import { Link, Element } from "react-scroll";
import SocialCard from "./SocialCard";

import "./NavBar.css";

function NavBar() {
  const [isActive, setIsActive] = useState(false);

  function handleBurgerClicked() {
    setIsActive((prev) => !prev);
  }

  return (
    <>
      <div className="burger-btn">
        {/* <img id="logo-phone" src={logo} alt="" /> */}

        <button
          className={
            isActive
              ? "hamburger hamburger--slider is-active "
              : "hamburger hamburger--slider"
          }
          type="button"
          onClick={() => handleBurgerClicked()}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>

      <nav
        className={isActive ? "nav-container show" : "nav-container dont-show"}
      >
        {/* <img id="logo" src={logo} alt="" /> */}
        <div className="link-div">
          <Link
            className="link"
            to={"technologies"}
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            onClick={() => setIsActive(false)}
          >
            Technologies
          </Link>
        </div>

        <div className="link-div">
          <Link
            className="link"
            to={"projects-section"}
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            onClick={() => setIsActive(false)}
          >
            Projects
          </Link>
        </div>

        <div className="link-div">
          <Link
            to="education-section"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            className="link"
            onClick={() => setIsActive(false)}
          >
            Education
          </Link>
        </div>
        {isActive && <SocialCard />}
      </nav>
    </>
  );
}

export default NavBar;
