import React, {Fragment} from 'react';
import './App.scss';
import Contact from "./Contact";
import Intro from "./Intro";

export default class App extends React.Component {
    render() {
        return (
            <Fragment>
                <Intro/>
                <Contact/>
            </Fragment>
        );
    }
}
