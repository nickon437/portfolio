import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div id="header">
            <NavLink id="name-title" className="link" to="/portfolio">NICK . ON</NavLink>
            <div className="small-separator" />
            <nav className="horizontal-list">
                <NavLink className="link" to="/about">ABOUT ME</NavLink>
                <span>.</span>
                <NavLink className="link" to="/projects">PROJECTS</NavLink>
                <span>.</span>
                <NavLink className="link" to="/contact">CONTACT</NavLink>
            </nav>
        </div>
    )
}

export default Header;
