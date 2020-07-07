import React from 'react';
import { skills } from './skills.module.scss';
import Heading from "../Components/Heading";
import { faTools } from '@fortawesome/free-solid-svg-icons'

export default class Skills extends React.Component {
     render() {
         return(
             <div className={skills}>
                <Heading headingText="Skills" iconName={faTools}/>
                <div>
                    <span>Your Content Goes Here !!!</span>
                </div>
             </div>
         )
     }
};