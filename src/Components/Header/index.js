import React from 'react';
import { header, logo } from './Header.module.scss';
import Logo from './logo.png';
import Anchor from "../Anchor";

const Header = () => {
    return(
        <div className={header}>
            <div className={logo}>
                <a href="/"><img src={Logo} alt="Portfolio Logo"/></a>
            </div>
            <ul>
                <li>Experience</li>
                <li>Work</li>
                <li>Skills</li>
                <li>Contact</li>
                <li>
                    <Anchor href="./Resume.pdf" children={<span>Resume</span>}/>
                </li>
            </ul>
        </div>
    )
}

export default Header;