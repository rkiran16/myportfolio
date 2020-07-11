import React from 'react';
import cx from 'classnames';
import {work, wrapper, projectDesc, wrapperReverse} from './work.module.scss';
import Heading from "../Components/Heading";
import learnCSS from "./images/learnCSS.png";
import curryBowl from "./images/currybowl.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";

export default class Work extends React.Component {
    render() {
        return (
            <section title="work" id="work" className={work}>
                <Heading headingText="Work"/>
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
                    <div className={projectDesc}>
                        <h4>Featured Project</h4>
                        <h2>Curry Bowl</h2>
                        <p>
                            Responsive single page application built with React , GraphQL, Apollo Server. For
                            Scaffolding
                            used create-react-app.
                        </p>
                    </div>
                </div>
                <div className={cx(wrapper, wrapperReverse)}>
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
                    <div className={projectDesc}>
                        <h4>Featured Project</h4>
                        <h2>BlackBird Clothing Store</h2>
                        <p>
                            Responsive single page application built using Vanila Js, CSS which demonstrates parallex
                            and animations
                        </p>
                    </div>
                </div>
            </section>
        )
    }
};