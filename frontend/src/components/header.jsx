import React from "react";
import "./header.css";

function MainHeader() {
  return (
    <div className="header-main">
      <img
        src="http://placekitten.com/200/300"
        alt="temp"
        className="header-logo"
      />
      <h1 className="header-title">Titre de la page</h1>
    </div>
  );
}
export default MainHeader;
