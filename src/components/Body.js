import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Switch, Route, withRouter } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';

const Body = ({ location }) => {

    return (
        <div id="body">
            <div className="body-separator" />
            <TransitionGroup className="transition-group">
                <CSSTransition 
                    key={location.key}
                    classNames="fade"
                    timeout={3000}
                >
                    <section className="route-section">
                        <Switch location={location}>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                        </Switch>
                    </section>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default withRouter(Body);
