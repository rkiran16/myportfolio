import React from 'react';
import cx from 'classnames';
import {work, wrapper, grid} from './work.module.scss';
import Heading from "../Components/Heading";
import learnCSS from "./images/learnCSS.png";
import curryBowl from "./images/currybowl.png";
import nyc from "./images/nyc.png";
import bookStore from "./images/bookstore.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";

export default class Work extends React.Component {
    render() {
        return (
            <section title="work" id="work" className={work}>
                <Heading headingText="Work"/>
                <div className={grid}>
                    <div className={wrapper}>
                        <figure>
                            <img src={curryBowl} alt="Learn css"/>
                            <figcaption>
                                <p>
                                    <a href="https://github.com/rkiran16/restaurant" target="_blank"
                                       rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faGithub} size="2x"/>
                                    </a>
                                    <a href="https://rkiran16.github.io/restaurant"
                                       target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faExternalLinkAlt} size="2x"/>
                                    </a>
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className={cx(wrapper)}>
                        <figure>
                            <img src={learnCSS} alt="Learn css"/>
                            <figcaption>
                                <p>
                                    <a href="https://github.com/rkiran16/Clothing-Store" target="_blank"
                                       rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faGithub} size="2x"/>
                                    </a>
                                    <a href="http://parallax-clothing-store.s3-website-us-east-1.amazonaws.com/"
                                       target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faExternalLinkAlt} size="2x"/>
                                    </a>
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className={cx(wrapper)}>
                        <figure>
                            <img src={nyc} alt="Help Desk"/>
                            <figcaption>
                                <p>
                                    <a href="https://nydoe.us-east.mybluemix.net/"
                                       target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faExternalLinkAlt} size="2x"/>
                                    </a>
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className={cx(wrapper)}>
                        <figure>
                            <img src={bookStore} alt="Book Store"/>
                            <figcaption>
                                <p>
                                    <a href="https://github.com/rkiran16/infinitescroll" target="_blank"
                                       rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faGithub} size="2x"/>
                                    </a>
                                    <a href="https://rkiran16.github.io/infinitescroll/"
                                       target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faExternalLinkAlt} size="2x"/>
                                    </a>
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>
        )
    }
};