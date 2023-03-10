import React from "react";
import "../styles/header.css";
import Logo from "../assets/Logo.png";

function MainHeader() {
  return (
    <div className="header-main">
      <img src={Logo} alt="temp" className="header-logo" />
      <h1 className="header-title">xX_KRITIKZ_Xx</h1>
      <br />
    </div>
  );
}
export default MainHeader;
