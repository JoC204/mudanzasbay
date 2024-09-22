import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope, faEnvelopeOpen, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import DropdownMenu from "./DropdownMenu";
import Logo from "../img/logoBay.png";
import LogoHover from "../img/insta-color.png"; // Logo alternativo
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
 const handleScroll = useCallback(() => {
  const currentScrollPos = window.pageYOffset;

  // Usa la función anterior para obtener el valor más reciente
  setVisible(prevVisible => {
    return prevScrollPos > currentScrollPos; // Aquí puedes comparar directamente
  });
  setPrevScrollPos(currentScrollPos);
}, [prevScrollPos]); // Sin dependencias aquí
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className={`navBox ${visible ? "visible" : "hidden"}`}>
      <nav className="navbar">
        <div className="navbar-logoBox">
          <div className="navbar-hamburger" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <Link to="/" className="navbar-logo">
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
          <a href="tel:+5493416541371" className="icon-link" id="phone">
            <FontAwesomeIcon icon={faPhone} />
          </a>
          <a href="mailto:fletebay@gmail.com" className="icon-link">
            <FontAwesomeIcon icon={faEnvelope} className="icon-envelope" />
            <FontAwesomeIcon icon={faEnvelopeOpen} className="icon-envelope-open" />
          </a>
          <a
            href="https://www.instagram.com/bay.mudanzas/"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon-instagram logo-default" />
            <img src={LogoHover} alt="Logo Hover" className="logo-hover" />
          </a>
        </div>
      </nav>
      <DropdownMenu isOpen={isOpen} closeMenu={closeMenu} />
    </div>
  );
};

export default Navbar;
