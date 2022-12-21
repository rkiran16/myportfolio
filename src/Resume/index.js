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
                                    I am a Sr Front End Developer with 8 years expereince, meaningful contributions to teams of varying size and scope . I have proven experience at Cardinal Health , Sally Beauty, Northern Trust in helping companies create and maintain better code base for reusability. Capable of learning from Project Leads and architects while still nurturing Junior developers. Experience in driving projects forward as the development team leader, facilitating projects from concept to launch. Passionate about learning and development with desire to apply skills on a larger development team. Eager to tackle more complex problems and continue to find ways to maximize user efficiency.
                                </p>
                            </div>
                        </section>

                        <section className="section experiences-section">
                            <h2 className="section-title"><span className="icon-holder"><i className="fa-solid fa-briefcase"></i></span>Experiences</h2>
                            <div className="item">
                                <div className="meta">
                                    <div className="upper-row">
                                        <h3 className="job-title">Lead Developer</h3>
                                        <div className="time">2022 - Present</div>
                                    </div>
                                    <div className="company">Startup Hubs, San Francisco</div>
                                </div>
                                <div className="details">
                                    <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.</p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="meta">
                                    <div className="upper-row">
                                        <h3 className="job-title">Senior Software Engineer</h3>
                                        <div className="time">2018 - 2022</div>
                                    </div>
                                    <div className="company">Google, London</div>
                                </div>
                                <div className="details">
                                    <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>

                                </div>
                            </div>

                            <div className="item">
                                <div className="meta">
                                    <div className="upper-row">
                                        <h3 className="job-title">UI Developer</h3>
                                        <div className="time">2016 - 2018</div>
                                    </div>
                                    <div className="company">Amazon, London</div>
                                </div>
                                <div className="details">
                                    <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                                </div>
                            </div>

                        </section>

                        <section className="skills-section section">
                            <h2 className="section-title"><span className="icon-holder"><i className="fa-solid fa-rocket"></i></span>Skills &amp; Proficiency</h2>
                            <ul className="list-inline">
                                {SkillSet.map(skill => {
                                    return (
                                        <li className="list-inline-item me-3 border border-info p-2">
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
                                <span className="project-title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderpro-bootstrap-5-startup-template-for-software-projects/" target="_blank">CoderPro</a></span> - <span className="project-tagline">A responsive website template designed to help developers launch their software projects. </span>

                            </div>
                            <div className="item">
                                <span className="project-title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/launch-bootstrap-5-template-for-saas-businesses/" target="_blank">Launch</a></span> - <span className="project-tagline">A responsive website template designed to help startups promote their products or services.</span>
                            </div>
                            <div className="item">
                                <span className="project-title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/devcard-bootstrap-5-vcard-portfolio-template-for-software-developers/" target="_blank">DevCard</a></span> - <span className="project-tagline">A portfolio website template designed for software developers.</span>
                            </div>
                            <div className="item">
                                <span className="project-title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/bootstrap-template-for-mobile-apps-nova-pro/" target="_blank">Nova Pro</a></span> - <span className="project-tagline">A responsive Bootstrap theme designed to help app developers promote their mobile apps</span>
                            </div>
                            <div className="item">
                                <span className="project-title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-web-development-agencies-devstudio/" target="_blank">DevStudio</a></span> -
                                <span className="project-tagline">A responsive website template designed to help web developers/designers market their services. </span>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume;