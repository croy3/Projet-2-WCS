import React from "react";
import "../styles/Footer.css";
import logo from "../assets/Logo.png";

function Footer() {
  return (
    <footer>
      <div className="list">
        <div id="logo">
          <img src={logo} id="logo-footer" alt="logo-footer" />
        </div>
      </div>
      <div className="list">
        <h3>Nous contacter</h3>
        <br />
        <p>Tél. 04 04 04 04 04</p>
        <p>kritikz@caramail.fr</p>
      </div>
      <div>
        <h3 className="network">A propos</h3>
        <div>
          <br />
        </div>
        <p className="copyright">2023 Kritikz © </p>
        <p>Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
