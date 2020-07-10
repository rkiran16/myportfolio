import React, {Fragment} from 'react';
import './App.scss';
import Contact from "./Contact";
import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import Work from "./Work";

export default class App extends React.Component {
    render() {
        return (
            <main className="app">
                <Intro/>
                <About/>
                <Experience/>
                <Work/>
                <Contact/>
            </main>
        );
    }
}
