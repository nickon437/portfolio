import React, { useContext } from 'react';
import Page from '../resources/enum/Page';
import Home from './Home';
import About from './About';
import { UiContext } from '../context/UiContext';

const Body = () => {
    const [ui, setUi] = useContext(UiContext);
    let content = null;

    if (ui.ctxPage === Page.Home) {
        content = <Home />;
    } else if (ui.ctxPage === Page.About) {
        content = <About />;
    }

    return (
        <div id="body">
            <div className="body-separator" />
            {content}
        </div>
    )
}

export default Body
