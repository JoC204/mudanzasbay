// Navbar.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
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
          <img src={Logo} alt="Logo" className="navbar-logoBay" />
        </div>
        {/* <div className="navbar-logo">MudanzasBay</div>  */}
        <div className="navbar-links">
          <FontAwesomeIcon icon={faPhone} />
          <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
      </nav>
      <DropdownMenu isOpen={isOpen} closeMenu={closeMenu} />
    </div>
  );
};

export default Navbar;
