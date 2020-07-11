import React from 'react';
import {work, wrapper} from './work.module.scss';
import Heading from "../Components/Heading";
import learnCSS from "./images/learnCSS.png";

export default class Work extends React.Component {
    render() {
        return (
            <section title="work" id="work" className={work}>
                <Heading headingText="Work"/>
                <div className={wrapper}>
                    <ul>
                        <li>
                            <a href="http://parallax-clothing-store.s3-website-us-east-1.amazonaws.com/" target="_blank" rel="noopener noreferrer">
                                <img src={learnCSS} alt="Learn CSS Parallex" loading="lazy"/>
                            </a>
                        </li>
                        <li>
                            <img
                                src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05621_zgtcco.jpg"
                                alt="Interesting living room light through a window" loading="lazy"/>
                        </li>
                        <li>
                            <img
                                src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05513_gfbiwi.jpg"
                                alt="Sara on a red bike" loading="lazy"/>
                        </li>
                        <li>
                            <img
                                src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05588_nb0dma.jpg"
                                alt="XOXO venue in between talks" loading="lazy"/>
                        </li>
                        <li>
                            <img
                                src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05459_ziuomy.jpg"
                                alt="Trees lit by green light during dusk" loading="lazy"/>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
};