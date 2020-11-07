import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Switch, Route, withRouter } from "react-router-dom";
import Home from './Home';
import About from './About';

const Body = ({ location }) => {

    return (
        <div id="body">
            <div className="body-separator" />
            <TransitionGroup className="transition-group">
                <CSSTransition 
                    key={location.key}
                    classNames="fade"
                    timeout={300}
                >
                    <section className="route-section">
                        <Switch location={location}>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                        </Switch>
                    </section>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default withRouter(Body);
