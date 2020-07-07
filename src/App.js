import React, {Fragment} from 'react';
import './App.scss';
import About from "./About";
import Contact from "./Contact";
import Intro from "./Intro";

export default class App extends React.Component {
    render() {
        return (
            <Fragment>
                <Intro/>
                <About/>
                <Contact/>
            </Fragment>
        );
    }
}
