import React, {Component} from 'react';
import {contact, headingContainer, imageWrapper, mailLink , contactForm, copyRight} from './contact.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import avatar from './avatar-2.jpg';

export default class Contact extends Component {
    render() {
        return (
            <section title="contact" id="contact" className={contact}>
                <div className={headingContainer}>
                    <h1>Get In Touch</h1>
                </div>
                <div className={contactForm}>
                    <div className={imageWrapper}>
                        <img src={avatar} alt="Ravi Kanculakunta" />
                    </div>
                    <a className={mailLink} href="mailto:ravikancula@gmail.com">ravikancula@gmail.com</a>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/ravikancula/" target="_blank"
                               rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/rkiran16" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="3x"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={copyRight}>
                    <span>&copy; Ravi Kanculakunta 2014</span>
                </div>
            </section>
        )
    }
}