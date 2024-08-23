// Navbar.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import DropdownMenu from './DropdownMenu';
import '../style/NavBar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className='navBox'>
            <nav className="navbar">
                <div className="navbar-logo">BayMudanzas</div>
                <div className="navbar-hamburger" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className="navbar-links">
                    <FontAwesomeIcon icon={faHome} />
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faCog} />
                </div>
            </nav>
                <DropdownMenu isOpen={isOpen} closeMenu={closeMenu} />
        </div>
    );
};

export default Navbar;
