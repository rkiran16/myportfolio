import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { contact, contactForm, copyRight } from './contact.module.scss';
import Linkedin from './linkedin.png';
import Github from './github.png';

export default class Contact extends Component {
    render() {
        return(
            <div id="contact" className={contact}>
                {/*<svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1"*/}
                {/*     xmlns="http://www.w3.org/2000/svg" className="svgcolor-light">*/}
                {/*    <path d="M0 0 L50 100 L100 0 Z" fill="#001a34" stroke="#001a34"/>*/}
                {/*</svg>*/}
                <div className={contactForm}>
                    <h1>Say Hello. Let's work together</h1>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/ravikancula/" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="Ravi's Linkedin"/></a>
                        </li>
                        <li>
                            <a href="https://github.com/rkiran16" target="_blank" rel="noopener noreferrer"><img src={Github} alt="Ravi's Github"/></a>
                        </li>
                    </ul>
                    <p>Find me on social media, use the form below, or hit me up via email at ravikancula@gmail.com.</p>
                    <Formik
                        initialValues={{ username: '', email: '', message: '' }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <Field type="text" name="username" placeHolder="Name" />
                                <Field type="email" name="email" placeHolder="Email" />
                                <Field type="text" component="textarea"
                                       rows="10" name="message" placeHolder="Your Message" />
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className={copyRight}>
                    <span>&copy; Ravi Kanculakunta 2014</span>
                </div>
            </div>
        )
    }
}