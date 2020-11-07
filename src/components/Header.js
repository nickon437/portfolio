import React, { useContext } from 'react';
import { UiContext } from '../context/UiContext';
import Page from '../resources/enum/Page';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div id="header">
            <Link id="name-title" className="link" to="/">NICK . ON</Link>
            <div className="small-separator" />
            <ul className="horizontal-list nav">
                {/* <li><button className="link" onClick={handleAbout}>ABOUT ME</button></li> */}
                <li><Link className="link" to="/about">ABOUT ME</Link></li>
                <li>.</li>
                <li>PROJECTS</li>
                <li>.</li>
                <li>CONTACT</li>
            </ul>
        </div>
    )
}

export default Header;
