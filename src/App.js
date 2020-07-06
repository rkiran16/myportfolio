import React, { Fragment } from 'react';
import './App.scss';
import Header from "./Components/Header";
import About from "./About";
import Contact from "./Contact";

export default class App extends React.Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <div className="app">
                    <About/>
                </div>
                <Contact/>
            </Fragment>
        );
    }
}
