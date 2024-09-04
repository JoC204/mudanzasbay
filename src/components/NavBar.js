// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import DropdownMenu from "./DropdownMenu";
import Logo from "../img/logoBay.png";
import "../style/NavBar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="navBox">
      <nav className="navbar">
        <div className="navbar-logoBox">
          <div className="navbar-hamburger" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <Link to="/">
            <img src={Logo} alt="Logo" className="navbar-logoBay" />
          </Link>
        </div>

        <div className="links">
          <ul>
            <li>
              <Link className="link" to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/mudanzas" onClick={closeMenu}>
                Fletes/Mudanzas
              </Link>
            </li>
            <li>
              <Link className="link" to="/guardamuebles" onClick={closeMenu}>
                Guardamuebles
              </Link>
            </li>
            <li>
              <Link className="link" to="/contacto" onClick={closeMenu}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-links">
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
        </div>
      </nav>
      <DropdownMenu isOpen={isOpen} closeMenu={closeMenu} />
    </div>
  );
};

export default Navbar;
