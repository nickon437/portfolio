import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Switch, Route, withRouter } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import ProjectDetail from './ProjectDetail';

const Body = ({ location }) => {

    return (
        <div id="body">
            <div className="body-separator" />
            <TransitionGroup className="transition-group">
                <CSSTransition
                    key={location.pathname}
                    classNames="fade"
                    appear={true}
                    timeout={1100}
                >
                    <section className="route-section">
                        <Switch location={location}>
                            <Route exact path="/portfolio" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                            <Route
                                path="/projects"
                                render={({ match: { url } }) => (
                                    <>
                                        <Route path={`${url}/`} component={Projects} exact />
                                        <Route path={`${url}/:projectname`} component={ProjectDetail} />
                                    </>
                                )}
                            />
                        </Switch>
                    </section>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default withRouter(Body);
