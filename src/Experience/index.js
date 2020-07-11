import React from 'react';
import Heading from "../Components/Heading";
import {experienceWrapper, timeLine } from './experience.module.scss';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBuilding} from '@fortawesome/free-solid-svg-icons'

export default class Experience extends React.Component {
    render() {
        return(
            <section title="experience" id="experience" className={experienceWrapper}>
                <Heading headingText="Experience" />
                <div className={timeLine}>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2017 - present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FontAwesomeIcon icon={faBuilding} size="2x" className="iconColor"/>}
                        >
                            <h3 className="vertical-timeline-element-title">Sr Application Developer @ IBM IX</h3>
                            <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
                            <p>
                               React, React Native,Node.js,Redux, Vanilla JS , AEM , Sketch, Invision.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2014 - 2017"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FontAwesomeIcon icon={faBuilding} size="2x" className="iconColor"/>}
                        >
                            <h3 className="vertical-timeline-element-title">Front End Developer @ Resource Ammirati</h3>
                            <h4 className="vertical-timeline-element-subtitle">Columbus, OH</h4>
                            <p>
                                React, HTML, SCSS, Vanilla JS, Atomic design Methodology, Sketch, Adobe PhotoShop.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2012 - 2014"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FontAwesomeIcon icon={faBuilding} size="2x" className="iconColor"/>}
                        >
                            <h3 className="vertical-timeline-element-title">Web Developer @ ICC</h3>
                            <h4 className="vertical-timeline-element-subtitle">Columbus, OH</h4>
                            <p>
                                Flex, As3, Robotlegs, HTML, SCSS, Vanilla JS.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2010 - 2012"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FontAwesomeIcon icon={faBuilding} size="2x" className="iconColor"/>}
                        >
                            <h3 className="vertical-timeline-element-title">Web Developer @ Smart Solutions</h3>
                            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                            <p>
                                Flex, As3, Cairnogram.
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </section>
        )
    }
}