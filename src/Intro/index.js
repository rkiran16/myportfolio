import React, {Fragment} from 'react';
import {introContainer, resume, scrollMe, divider, mousey, scroller } from './intro.module.scss'
import Anchor from "../Components/Anchor";
import Header from "../Components/Header";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBinoculars } from '@fortawesome/free-solid-svg-icons'
import {useSpring, animated} from 'react-spring'

const Intro = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}})

    return (
        <section title="Intro" id="intro" className={introContainer}>
            <Header/>
            <Fragment>
                <animated.h1 style={props}>RAVI KANCULAKUNTA</animated.h1>
                <hr className={divider}/>
                <h3>I'm a Front End Engineer based out of Boston, MA</h3>
                <div className={resume}>
                    <Anchor href="./Resume.pdf" children={<Fragment>
                        <FontAwesomeIcon icon={faBinoculars} size="lg" className="iconColor"/>
                        <span>VIEW MY RESUME</span>
                    </Fragment>
                    }/>
                </div>
                <div className={scrollMe}>
                    <div className={mousey}>
                        <div className={scroller} />
                    </div>
                </div>
            </Fragment>
        </section>
    )
}

export default Intro;