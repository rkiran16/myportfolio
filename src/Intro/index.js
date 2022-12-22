import React from 'react';
import ProfilePic from "./profile.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const ProfileSection = () => {
    return (
        <div className='d-flex flex-column w-100 p-sm-2 '>
            <div className='mb-4'>
                <h1 id="intro" className='display-3 fw-bold animate__animated animate__fadeInUp'>
                    Hi! I Am
                </h1>
                <h2 className='display-4 fw-bold animate__animated animate__fadeInUp'>
                    Ravi Kanculakunta
                </h2>
                <h3 className='display-6 mb-3 animate__animated animate__fadeInUp'>Based in San Francisco</h3>
                <p className="h3 lead animate__animated animate__fadeInUp">
                    Developing User Interfaces for over <strong className="me-1">8 years</strong>
                    as a Front End Developer
                </p>
            </div>
            <div className='mt-4 mb-4'>
                <Link to="/resume" type="button" className='btn btn-outline-success btn-lg animate__animated animate__fadeInUp '>
                    View Resume
                    <FontAwesomeIcon className='ms-2' icon={faSquareArrowUpRight} />
                </Link>
            </div>
        </div>
    )
}


const Intro = () => {
    return (
        <div className='d-flex flex-column w-100 flex-md-row py-sm-5 justify-content-between'>
            <ProfileSection />
            <div className='d-flex w-100 p-sm-3 animate__animated animate__fadeInRight'>
                <img src={ProfilePic} alt="Ravi Kanculakunta" className="img-fluid shadow-lg" />
            </div>
        </div>
    )
}

export default Intro;