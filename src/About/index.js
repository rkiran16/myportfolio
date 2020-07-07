import React from 'react';
import { about, wrapper, skills, profileDiv } from './about.module.scss';
import ProfilePic from './profile.jpg';
import Heading from "../Components/Heading";

export default class About extends React.Component {
     render() {
         return(
             <div className={about}>
                <Heading headingText="ABOUT" />
                <div className={wrapper}>
                    <div className={skills}>

                    </div>
                    <div className={profileDiv}>
                        <a href="https://www.linkedin.com/in/ravikancula/">
                            <img src={ProfilePic} alt="Ravi Kanculakunta"/>
                        </a>
                        <div>
                            <p>Hello I'm <span>Ravi</span> , a Front End Engineer for
                                <a href="https://www.ibm.com/services/ibmix/studios/cambridge/" target="_blank" rel="noopener noreferrer">IBM IX</a> in Boston, MA.</p>
                            <p>
                                I enjoy creating <span>smart</span> user interface and imagine useful interaction, developing rich web experiences & web applications.
                                I am interested in building applications from ground up that are pixel-perfect, intuitive, dynamic experiences .
                            </p>
                        </div>
                    </div>
                </div>
             </div>
         )
     }
};