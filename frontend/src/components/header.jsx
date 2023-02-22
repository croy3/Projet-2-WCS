import React from "react";
import "../styles/header.css";

function MainHeader() {
  return (
    <div className="header-main">
      <img
        src="http://placekitten.com/200/300"
        alt="temp"
        className="header-logo"
      />
      <h1 className="header-title">KRITIKZ</h1>
    </div>
  );
}
export default MainHeader;
