import React, { useContext } from 'react';
// import ReactCSSTransitionGroup from 'react-transition-group';
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
    CSSTransition,
    TransitionGroup,
    SwitchTransition,
  } from 'react-transition-group';
import { Switch, Route } from "react-router-dom";
import Page from '../resources/enum/Page';
import Home from './Home';
import About from './About';
import { UiContext } from '../context/UiContext';

const Body = () => {
    const [ui, setUi] = useContext(UiContext);
    let content = null;

    // if (ui.ctxPage === Page.Home) {
    //     content = <Home />;
    // } else if (ui.ctxPage === Page.About) {
    //     content = <About />;
    // }

    return (
        <div id="body">
            <div className="body-separator" />
            {/* {content} */}
            {/* <TransitionGroup component={null}> */}
            {/* <SwitchTransition> */}
                {/* <CSSTransition 
                    transitionName="body-content"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >   */}
                    {/* <div>ads</div> */}
                    {/* {content} */}
                {/* </CSSTransition> */}
            {/* </SwitchTransition> */}
            {/* </TransitionGroup> */}

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </div>
    )
}

export default Body
