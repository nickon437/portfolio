import React from 'react';
import Page from '../resources/enum/Page';
import Home from './Home';

const Body = () => {
    let page = Page.Home;
    let content = null;

    if (page === Page.Home) {
        content = <Home />;
    } 

    return (
        <div id="body">
            <div className="body-separator" />
            {content}
        </div>
    )
}

export default Body
