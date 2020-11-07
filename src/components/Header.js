import React, { useContext } from 'react';
import { UiContext } from '../context/UiContext';
import Page from '../resources/enum/Page';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div id="header">
            <Link id="name-title" className="link" to="/">NICK . ON</Link>
            <div className="small-separator" />
            <nav className="horizontal-list">
                <Link className="link" to="/about">ABOUT ME</Link>
                <span>.</span>
                <Link className="link" to="/projects">PROJECTS</Link>
                <span>.</span>
                <Link className="link" to="/contact">CONTACT</Link>
            </nav>
        </div>
    )
}

export default Header;
