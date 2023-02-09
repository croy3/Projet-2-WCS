import React from "react";

function Footer() {
  return (
    <footer>
      <section className="contact">
        <div className="contact-container">
          <div className="contact-list">
            <div className="list">
              <div id="contact-img">
                <img src="./assets/img/logo-footer.png" alt="logo-footer" />
              </div>
            </div>
            <div className="list">
              <h5>Infos pratiques</h5>
            </div>
            <div className="list">
              <h5>Nous contacter</h5>
              <h6>Tél. 04 04 04 04 04</h6>
              <h6>kritikz@caramail.fr</h6>
              <h5 className="network">Nous suivre</h5>
              <div className="footer-logos">
                <i className="fab fa-twitter" />
                <i className="fab fa-facebook" />
                <i className="fab fa-linkedin" />
                <i className="fab fa-instagram" />
              </div>
              <p className="copyright">2023 Kritikz © </p>
              <p>Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
