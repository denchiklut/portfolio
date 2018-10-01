import React from 'react';
import Landing from "./landingpage";
import About from "./aboutme";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";
import {Switch, Route} from 'react-router-dom'

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
    </Switch>
);

export default Main;