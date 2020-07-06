import React, {useState} from 'react';
import Scrollspy from 'react-scrollspy'
import {header, logo, menu, hamburgerIcon } from './Header.module.scss';
import Anchor from "../Anchor";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faBuilding, faEnvelope, faTools, faVial, faTimes} from '@fortawesome/free-solid-svg-icons'
// images
import Logo from './logo.png';

const Header = () => {
    const [isMenuVisible, setVisibility] = useState(false);
    const toggleMenuIconVisibility = () => setVisibility(!isMenuVisible);

    return (
        <div className={header}>
            <div className={logo}>
                <a href="/"><img src={Logo} alt="Portfolio Logo"/></a>
            </div>
            <div className={menu}>
                <button className={hamburgerIcon} onClick={toggleMenuIconVisibility}>
                    <FontAwesomeIcon icon={faBars} size="3x" className={!isMenuVisible ? 'show' : 'hide'}/>
                    <FontAwesomeIcon icon={faTimes} size="3x" className={isMenuVisible ? 'show' : 'hide'}/>
                </button>
                <div className={isMenuVisible ? 'show' : 'hide'}>
                    <Scrollspy items={['experience', 'work', 'skills', 'contact']} currentClassName="is-current">
                        <li>
                            <a href="#experience">
                                <FontAwesomeIcon icon={faBuilding} size="2x" className="iconColor"/>
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="#work">
                                <FontAwesomeIcon icon={faVial} size="2x" className="iconColor"/>
                                Work
                            </a>
                        </li>
                        <li>
                            <a href="#skills">
                                <FontAwesomeIcon icon={faTools} size="2x" className="iconColor"/>
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                <FontAwesomeIcon icon={faEnvelope} size="2x" className="iconColor"/>
                                Contact
                            </a>
                        </li>
                        <li><Anchor href="./Resume.pdf" children={<span>Resume</span>}/></li>
                    </Scrollspy>
                </div>
            </div>
        </div>
    )
}

export default Header;