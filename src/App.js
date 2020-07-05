import React from 'react';
import './App.scss';
import UncontrolledLottie from "./Components/Lottie";
import Header from "./Components/Header";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <UncontrolledLottie/>
                <Header/>
            </div>
        );
    }
}
