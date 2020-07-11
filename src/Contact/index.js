import React, {Component} from 'react';
import {Formik, Form, Field} from 'formik';
import {contact, contactForm, copyRight} from './contact.module.scss';
import emailjs from 'emailjs-com';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default class Contact extends Component {
    componentDidMount() {
        emailjs.init("user_kIxox3qpQwa7YKbCVxuFa");
    }

    render() {
        return (
            <section title="contact" id="contact" className={contact}>
                <div className={contactForm}>
                    <h1>Say Hello. Let's work together</h1>
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
                    <p>Find me on social media or use the form below to contact me.</p>
                    <Formik
                        initialValues={{username: '', email: '', message: ''}}
                        onSubmit={(values, {setSubmitting, resetForm}) => {
                            const email = {
                                message_html: values.message,
                                from_name: values.username,
                                reply_to: values.email,
                                to_name: "Ravi Kanculakunta"
                            }
                            emailjs.send('gmail', 'template_2nTVArDl', email)
                                .then(function (response) {
                                    console.log('SUCCESS!', response.status, response.text);
                                    resetForm({username: '', email: '', message: ''});
                                    setSubmitting(false);
                                }, function (error) {
                                    console.log('FAILED...', error);
                                    setSubmitting(false);
                                });
                        }}
                    >
                        {({isSubmitting}) => (
                            <Form>
                                <Field type="text" name="username" placeholder="Name"/>
                                <Field type="email" name="email" placeholder="Email"/>
                                <Field type="text" component="textarea"
                                       rows="10" name="message" placeholder="Your Message"/>
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
            </section>
        )
    }
}