import React from 'react';
import { about, aboutMe, profileDiv } from './about.module.scss';
import Anchor from "../Components/Anchor";
import ProfilePic from './profile.jpg';

export default class About extends React.Component {
     render() {
         return(
             <div className={about}>
                <div className={aboutMe}>
                    <h3>Front End Engineer</h3>
                    <h1>RAVI <br/>KANCULAKUNTA</h1>
                    <Anchor href="#contact" children={<span>Contact Me</span>} />
                </div>
                 <div className={profileDiv}>
                     <a href="">
                         <img src={ProfilePic} alt="Ravi Kanculakunta"/>
                     </a>
                 </div>
             </div>
         )
     }
};