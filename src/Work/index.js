import React from 'react';
import { work } from './work.module.scss';
import Heading from "../Components/Heading";

export default class Work extends React.Component {
     render() {
         return(
             <section title="work" id="work" className={work}>
                <Heading headingText="Skills"/>
                <div>
                    <span>Your Content Goes Here !!!</span>
                </div>
             </section>
         )
     }
};