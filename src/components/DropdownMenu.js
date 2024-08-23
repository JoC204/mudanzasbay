// DropdownMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/DropdownMenu.css';

const DropdownMenu = ({ isOpen, closeMenu }) => {
    return (
        <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
            <ul>
                <li>
                    <Link className='link' to="/" onClick={closeMenu}>Home</Link>
                </li>
                <li>
                    <Link className='link' to="/mudanzas" onClick={closeMenu}>Fletes/Mudanzas</Link>
                </li>
                <li>
                    <Link className='link' to="/guardamuebles" onClick={closeMenu}>Guardamuebles</Link>
                </li>
                <li>
                    <Link className='link' to="/contacto" onClick={closeMenu}>Contacto</Link>
                </li>
            </ul>
        </div>
    );
};

export default DropdownMenu;
