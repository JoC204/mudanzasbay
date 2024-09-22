// src/components/Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../style/Footer.css"; // Asegúrate de tener este archivo para los estilos

const Footer = () => {
  return (
    <footer className="footer-container">
      <a href="tel:+5493416541371" className="icon-link">
        <FontAwesomeIcon icon={faPhone} />
      </a>
      <a href="mailto:fletebay@gmail.com" className="icon-link">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a
        href="https://www.instagram.com/bay.mudanzas/"
        className="icon-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <hr className="footer-divider" />
      <p>Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
