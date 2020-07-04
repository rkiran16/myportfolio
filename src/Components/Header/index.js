import React from 'react';
import Scrollspy from 'react-scrollspy'
import { header, logo } from './Header.module.scss';
import Anchor from "../Anchor";

// images
import Logo from './logo.png';
import Experience  from './icons/experience.png';
import Work from './icons/work.png';
import Skills from './icons/skills.png';
import Contact from './icons/contact.png';

const Header = () => {
    return(
        <div className={header}>
            <div className={logo}>
                <a href="/"><img src={Logo} alt="Portfolio Logo"/></a>
            </div>
            <Scrollspy items={ ['experience', 'work', 'skills', 'contact'] } currentClassName="is-current">
                <li><a href="#experience"><img src={Experience} alt="Experience Logo"/> Experience</a></li>
                <li><a href="#work"><img src={Work} alt="Work Logo"/> Work</a></li>
                <li><a href="#skills"><img src={Skills} alt="Skills Logo"/>Skills</a></li>
                <li><a href="#contact"><img src={Contact} alt="Contact Logo"/>Contact</a></li>
                <li><Anchor href="./Resume.pdf" children={<span>Resume</span>}/></li>
            </Scrollspy>
        </div>
    )
}

export default Header;