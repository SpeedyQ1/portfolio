import React from "react";
import "./Loader.css"; // Make sure to create a "Loader.css" file for your styles

function Loader() {
  return (
    <div className="loader">
      <div className="cell d-0"></div>
      <div className="cell d-1"></div>
      <div className="cell d-2"></div>

      <div className="cell d-1"></div>
      <div className="cell d-2"></div>

      <div className="cell d-2"></div>
      <div className="cell d-3"></div>

      <div className="cell d-3"></div>
      <div className="cell d-4"></div>
    </div>
  );
}

export default Loader;
