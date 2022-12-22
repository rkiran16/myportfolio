import React from "react";
import ProfilePic from "../Intro/profile.jpg";

const SkillSet = ["react", "vuejs", "js", "node-js", "python", "css3", "html5", "yarn"]

const Resume = () => {
    return (
        <>
            <div className="container mt-lg-5 shadow">
                <div className="row">
                    <div className="sidebar-wrapper col-12 col-sm-4">
                        <div className="p-4 text-center">
                            <img className="mb-4 img-thumbnail" src={ProfilePic} alt="" />
                            <h3>Ravi Kanculakunta</h3>
                            <h3 className="tagline">Sr.Front End Developer, IBM IX</h3>
                        </div>

                        <div className="container-block">
                            <ul className="list-unstyled contact-list">
                                <li className="d-flex align-items-center"><i className="fa-solid fa-envelope me-2"></i><a href="mailto: ravikancula@gmail.com">ravikancula@gmail.com</a></li>
                                <li className="d-flex align-items-center"><i className="fa-solid fa-phone me-2"></i><a href="tel:0123 456 789">425-614-9246</a></li>
                                <li className="d-flex align-items-center"><i className="fa-brands fa-linkedin-in me-2"></i><a href="#" target="_blank" rel="noreferrer" >linkedin.com/in/ravikanculakunta</a></li>
                                <li className="d-flex align-items-center"><i className="fa-brands fa-github me-2"></i><a href="#" target="_blank" rel="noreferrer" >github.com/rkiran16</a></li>
                            </ul>
                        </div>
                        <div className="education-container container-block">
                            <h2 className="container-block-title">Education</h2>
                            <div className="item">
                                <h4 className="degree">MS in Computer Science</h4>
                                <h5 className="meta">Stratford University</h5>
                                <div className="time">2008 - 2010</div>
                            </div>
                            <div className="item">
                                <h4 className="degree">BS in Computer Science</h4>
                                <h5 className="meta">Jawaharlal Nehru Technological University</h5>
                                <div className="time">2004 - 2007</div>
                            </div>
                        </div>
                    </div>

                    <div className="main-wrapper p-4 p-sm-5 bg-white col-12 col-sm-8">
                        <section className="section summary-section">
                            <h2 className="section-title"><span className="icon-holder"><i className="fa-solid fa-user"></i></span>Career Profile</h2>
                            <div className="summary">
                                <p>
                                    I am a Sr Front End Developer with 8 years expereince, meaningful contributions to teams of varying size and scope .
                                    I have proven experience at Cardinal Health , Sally Beauty, Northern Trust in helping companies create and maintain better code base for reusability.
                                    Capable of learning from Project Leads and architects while still nurturing Junior developers.
                                    Experience in driving projects forward as the development team leader, facilitating projects from concept to launch.
                                    Passionate about learning and development with desire to apply skills on a larger development team.
                                    Eager to tackle more complex problems and continue to find ways to maximize user efficiency.
                                </p>
                            </div>
                        </section>

                        <section className="section experiences-section">
                            <h2 className="section-title"><span className="icon-holder"><i className="fa-solid fa-briefcase"></i></span>Experiences</h2>
                            <div className="item">
                                <div className="meta">
                                    <div className="upper-row">
                                        <h3 className="job-title">Sr. Front-End Developer</h3>
                                        <div className="time">2017 - Present</div>
                                    </div>
                                    <div className="company">IBM iX, San Francisco</div>
                                </div>
                                <div className="details">
                                    <p>
                                        At IBM iX, Prior expereince with design system using Atomic design helped me to transition over as a React Developer because it allows to create reusable components.
                                        As a React Developer, I am responsible for the design and implementation of dynamic user interfaces(UIs) and UI components for various platforms.
                                    </p>
                                    <p>
                                        For Sally Beauty, I was involved to create native app using React Native. I am responsible for building functional UI components.
                                        With power of hooks , we built concise UI components and realted logic is tightly coupled inside of custom hook.Simplied how to make
                                        code composable and reusable.
                                    </p>
                                    <p>
                                        At Cardinal Health , I worked as Lead developer in helping them build design system using Lit-Html, SCSS and Storybook. Collaborated
                                        with designers to achieve single source of components, patterns and styles and unify disjointed experience so that they are visually cohesive
                                        and appear to be part of same ecosystem.
                                        I am also responsible for building restructuring applications utilizing Micro Front-End architecture utilizing Webpack Module Federation.
                                        As a Lead Developer , I Assisted team members in architectural compliance, functional accuracy validation, and adherence to appropriate industry standards.
                                    </p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="meta">
                                    <div className="upper-row">
                                        <h3 className="job-title">Front-End Developer</h3>
                                        <div className="time">2014 - 2017</div>
                                    </div>
                                    <div className="company">Resource/Ammirati, Columbus</div>
                                </div>
                                <div className="details">
                                    <p>
                                        At Resource/Ammirati as a Front-End Developer,  I worked on building Responsive Web Design and Micro sites for multiple clients with HTML,CSS and JS.In large amounts,  I was involved in building
                                        design system using principles of <a href="https://bradfrost.com/blog/post/atomic-web-design/">Atomic Design Methodology </a> for notable clients
                                        such as Toys“R”Us , Barnes & Noble , RCI.
                                    </p>
                                    <p>Collaborated with designers by clear communicating through words and via software such as Zeplin, Sketch and Adobe XD to bring prototypes in motion </p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="meta">
                                    <div className="upper-row">
                                        <h3 className="job-title">UI Developer</h3>
                                        <div className="time">2010 - 2014</div>
                                    </div>
                                    <div className="company">ICC, Columbus</div>
                                </div>
                                <div className="details">
                                    <p>
                                        Started as a Adobe Flex Developer for project <a href="https://www.mheducation.com/prek-12/program/microsites/MKTSP-RBT01M0/experience.html">SRA FLEX Literacy</a>.
                                        <i>SRA Flex Literacy</i> delivers personalized reading instructions for students in grades 3 and above by creating a student-specific learning path. Involved in both in UI developemnt and serivce layer.
                                        After sunset of Adobe Flex , I have moved on to become web-developer using HTML,CSS and JS.
                                    </p>
                                </div>
                            </div>

                        </section>

                        <section className="skills-section section">
                            <h2 className="section-title"><span className="icon-holder"><i className="fa-solid fa-rocket"></i></span>Skills &amp; Proficiency</h2>
                            <ul className="list-inline">
                                {SkillSet.map(skill => {
                                    return (
                                        <li className="list-inline-item me-3 mb-2 border border-info p-2">
                                            <i className={`display-4 fa-brands fa-${skill}`}></i>
                                        </li>
                                    )
                                })}
                            </ul>
                        </section>

                        <section className="section projects-section">
                            <h2 className="section-title"><span className="icon-holder"><i className="fa-solid fa-archive"></i></span>Projects</h2>
                            <div className="intro">
                                <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
                            </div>
                            <div className="item">
                                <span className="project-title"><span>Design system</span></span> - <span className="project-tagline">
                                    Built using storybook which is component library for building UI components and pages in
                                    isolation.
                                </span>
                            </div>
                            <div className="item">
                                <span className="project-title"><span>Outlook Dashboard</span></span> - <span className="project-tagline">
                                    A Web application that would provide status of Meeting Rooms by retreiving information from Outlook API
                                </span>
                            </div>
                            <div className="item">
                                <span className="project-title"><span>Britannica</span></span> - <span className="project-tagline">
                                    A Responsive Web application built with VanillaJs provides list of all countries by continent integrating with countries API
                                </span>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume;