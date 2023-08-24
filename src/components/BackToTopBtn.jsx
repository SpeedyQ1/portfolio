import React from "react";
import { Link, Element } from "react-scroll";
import "./BackToTopBtn.css";
function BackToTopBtn() {
  return (
    <Link
      spy={true}
      smooth={true}
      offset={-120}
      duration={500}
      id="scroll-up"
      className="scroll-up"
      to="top-of-the-page"
    >
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path
          fill="rgba(255,255,255,1)"
          d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"
        ></path>
      </svg>
    </Link>
  );
}

export default BackToTopBtn;
