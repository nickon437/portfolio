import React from 'react';
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div id="home" className="body-content">
            <h1>HI,<br/>I'M NICK</h1>
            <div className="page-content">A front-end developer who wants to create the optimal experience with intuitive design and scalable applications.</div>
            <ul className="horizontal-list">
                <li><NavLink className="link" to="/contact">HIRE ME</NavLink></li>
                <li>.</li>
                <li><NavLink className="link" to="/about">READ MORE</NavLink></li>
            </ul>
        </div>
    )
}

export default Home
