import React from 'react';
import './Navbar.css'; 

function Navbar() {
    return (
        <nav className="App-navbar">
            <ul className="navbar-links">
                <li><a href="/">Unidad 1</a></li>
                <li><a href="/about">Unidad 2</a></li>
                <li><a href="/contact">Unidad 3</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
