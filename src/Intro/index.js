import React, {Fragment} from 'react';
import {introContainer, resume, scrollMe} from './intro.module.scss'
import Anchor from "../Components/Anchor";
import Header from "../Components/Header";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBinoculars, faMouse} from '@fortawesome/free-solid-svg-icons'
import {scroller as scroll} from "react-scroll";

const Intro = () => {
    return (
        <div id="intro" className={introContainer}>
            <Header/>
            <Fragment>
                <h1>RAVI KANCULAKUNTA</h1>
                <hr/>
                <h3>I'm a Front End Engineer based out of Boston, MA</h3>
                <div className={resume}>
                    <Anchor href="./Resume.pdf" children={<Fragment>
                        <FontAwesomeIcon icon={faBinoculars} size="lg" className="iconColor"/>
                        <span>VIEW MY RESUME</span>
                    </Fragment>
                    }/>
                </div>
                <div className={scrollMe} onClick={() => scroll.scrollTo('about', {
                    duration: 1500,
                    delay: 50,
                    smooth: 'easeInOutQuint',
                })}>
                    <FontAwesomeIcon icon={faMouse} size="3x" className="iconColor"/>
                </div>
            </Fragment>
        </div>
    )
}

export default Intro;