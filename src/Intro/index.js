import React from 'react';
import ProfilePic from "./profile.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const ProfileSection = () => {
    return (
        <div className='d-flex flex-column w-100 p-sm-2 '>
            <div className='mb-4'>
                <h1 id="intro" className='display-2 fw-bold animate__animated animate__fadeInUp'>
                    Hi! I Am
                </h1>
                <h2 className='display-3 fw-bold animate__animated animate__fadeInUp'>
                    Ravi Kanculakunta
                </h2>
                <h3 className='mb-3 animate__animated animate__fadeInUp'>Based in San Francisco</h3>
                <h4 className="blockquote animate__animated animate__fadeInUp">
                    A <em className=''>Front-End Developer</em> passionate about creating interactive applications and experience on web.
                </h4>
            </div>
            <div className='mb-2'>
                <a href="#work" type="button" className='btn btn-outline-dark btn-lg animate__animated animate__fadeInUp '>
                    View My Work
                </a>
            </div>
        </div>
    )
}


const Intro = () => {
    return (
        <div className='bg-green-white'>
            <div className='min-vh-100 container d-flex'>
                <div className='d-flex flex-column align-items-center w-100 flex-md-row justify-content-between'>
                    <ProfileSection />
                    <div className='d-flex w-100 p-sm-3 animate__animated animate__fadeInRight'>
                        <img src={ProfilePic} alt="Ravi Kanculakunta" className="img-fluid rounded-4 shadow" />
                    </div>
                </div>
                {/* <div className='divider line one-line'>
                <a href='https://github.com/rkiran16' rel="noreferrer" target="_blank">
                    <FontAwesomeIcon className='me-4 fs-1' icon={faSquareGithub} />
                </a>
                <a href='https://www.linkedin.com/in/ravikanculakunta/' rel="noreferrer" target="_blank">
                    <FontAwesomeIcon className='me-4 fs-1' icon={faLinkedin} />
                </a>
                <a href="mailto: ravikancula@gmail.com"><FontAwesomeIcon className='fs-1' icon={faEnvelope} /></a>
            </div> */}
            </div>
        </div>
    )
}

export default Intro;