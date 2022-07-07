import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

export default class Contact extends Component {
    render() {
        return (
            <section title="contact" id="contact">
                <div>
                    <h1>Get In Touch</h1>
                </div>
                <div>
                    <div>
                        {/* <img src={avatar} alt="Ravi Kanculakunta" /> */}
                    </div>
                    <a href="mailto:ravikancula@gmail.com">ravikancula@gmail.com</a>
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
                <div>
                    <span>&copy; Ravi Kanculakunta 2014</span>
                </div>
            </section>
        )
    }
}