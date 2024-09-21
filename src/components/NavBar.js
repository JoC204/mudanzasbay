import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import DropdownMenu from "./DropdownMenu";
import Logo from "../img/logoBay.png";
import "../style/NavBar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Hook para controlar la visibilidad del Navbar al hacer scroll
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    // Si el usuario desplaza hacia abajo, oculta el navbar. Si desplaza hacia arriba, muéstralo.
    if (prevScrollPos > currentScrollPos) {
      setVisible(true);
    } else {
      setVisible(false);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div className={`navBox ${visible ? "visible" : "hidden"}`}>
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
