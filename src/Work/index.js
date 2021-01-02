import React from 'react';
import cx from 'classnames';
import {work, big, grid} from './work.module.scss';
import learnCSS from "./images/learnCSS.png";
import curryBowl from "./images/currybowl.png";
import nyc from "./images/nyc.png";
import bookStore from "./images/bookstore.png";

export default class Work extends React.Component {
    render() {
        return (
            <section title="work" id="work" className={work}>
                <div className={grid}>
                    <img src={curryBowl} className={big} alt="Learn css"/>
                    <img src={learnCSS} className={big} alt="Learn css"/>
                    <img src={nyc} className={big} alt="Help Desk"/>
                    <img src={bookStore} className={big} alt="Book Store"/>
                </div>
            </section>
        )
    }
};