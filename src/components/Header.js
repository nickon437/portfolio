import React, { useContext } from 'react';
import { UiContext } from '../context/UiContext';
import Page from '../resources/enum/Page';

const Header = () => {
    const [ui, setUi] = useContext(UiContext);

    const handleHome = (e) => {
        setUi((prevUi) => ({
            ...prevUi,
            ctxPage: Page.Home,
        }));
    }

    const handleAbout = (e) => {
        console.log("Click about");
        setUi((prevUi) => ({
            ...prevUi,
            ctxPage: Page.About,
        }));
    }

    return (
        <div id="header">
            <button id="name-title" className="link" onClick={handleHome}>NICK . ON</button>
            <div className="small-separator" />
            <ul className="horizontal-list nav">
                <li><button className="link" onClick={handleAbout}>ABOUT ME</button></li>
                <li>.</li>
                <li>PROJECTS</li>
                <li>.</li>
                <li>CONTACT</li>
            </ul>
        </div>
    )
}

export default Header;
