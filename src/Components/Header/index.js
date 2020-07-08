import React, {useState, useEffect} from 'react';
import cx from 'classnames';
import Scrollspy from 'react-scrollspy'
import {header, logo, menu, hamburgerIcon } from './Header.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faBuilding, faEnvelope, faVial, faTimes} from '@fortawesome/free-solid-svg-icons'
// images
import Logo from './logo.png';

const Header = () => {
    const [isMenuVisible, setVisibility] = useState(false);
    const [headerClassName, setHeaderClassName] = useState("");
    const toggleMenuIconVisibility = () => setVisibility(!isMenuVisible);

    const listenScrollEvent = (event) => {
        if (window.scrollY < 73) {
            return setHeaderClassName("")
        } else if (window.scrollY > 70) {
            return setHeaderClassName("active")
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <div className={cx(header, headerClassName)}>
            <div className={logo}>
                <a href="#intro"><img src={Logo} alt="Portfolio Logo"/></a>
            </div>
            <div className={menu}>
                <button className={hamburgerIcon} onClick={toggleMenuIconVisibility}>
                    <FontAwesomeIcon icon={faBars} size="3x" className={!isMenuVisible ? 'show' : 'hide'}/>
                    <FontAwesomeIcon icon={faTimes} size="3x" className={isMenuVisible ? 'show' : 'hide'}/>
                </button>
                <div className={isMenuVisible ? 'show' : 'hide'}>
                    <Scrollspy items={['experience', 'work', 'contact']} currentClassName="is-current">
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
                            <a href="#contact">
                                <FontAwesomeIcon icon={faEnvelope} size="2x" className="iconColor"/>
                                Contact
                            </a>
                        </li>
                    </Scrollspy>
                </div>
            </div>
        </div>
    )
}

export default Header;