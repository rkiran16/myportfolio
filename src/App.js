import React, {Fragment} from 'react';
import './App.scss';
import Contact from "./Contact";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";

export default class App extends React.Component {
    render() {
        return (
            <Fragment>
                <Intro/>
                <About/>
                <Experience/>
                <Contact/>
            </Fragment>
        );
    }
}
