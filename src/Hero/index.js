import React from 'react';
import Social from '../components/Social';
import ProfilePic from "./profile.jpg";


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
                <a href="#work" type="button" className='button slide_right animate__animated animate__fadeInUp '>
                    VIEW MY WORK
                </a>
            </div>
        </div>
    )
}


const Hero = () => {
    return (
        <div className='bg-green-white'>
            <div className='min-vh-100 container d-flex'>
                <div className='d-flex flex-column align-items-center w-100 flex-md-row justify-content-between'>
                    <ProfileSection />
                    <div className='d-flex w-100 p-sm-3 animate__animated animate__fadeInRight'>
                        <img src={ProfilePic} alt="Ravi Kanculakunta" className="img-fluid rounded-4 shadow" />
                    </div>
                </div>
            </div>
            <Social />
        </div>
    )
}

export default Hero;