import React, {useState, useEffect} from 'react';
import cx from 'classnames';
import {header, logo, menu, hamburgerIcon} from './Header.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faBuilding, faEnvelope, faVial, faTimes, faUserCircle} from '@fortawesome/free-solid-svg-icons'
import {Link, animateScroll as scroll} from "react-scroll";
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

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className={cx(header, headerClassName)}>
            <div className={logo}>
                <img src={Logo} alt="Portfolio Logo" onClick={scrollToTop}/>
            </div>
            <div className={menu}>
                <button className={hamburgerIcon} onClick={toggleMenuIconVisibility}>
                    <FontAwesomeIcon icon={faBars} size="3x" className={!isMenuVisible ? 'show' : 'hide'}/>
                    <FontAwesomeIcon icon={faTimes} size="3x" className={isMenuVisible ? 'show' : 'hide'}/>
                </button>
                <div className={isMenuVisible ? 'show' : 'hide'}>
                    <ul>
                        <li>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <FontAwesomeIcon icon={faUserCircle} size="2x" className="iconColor"/>
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="experience"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <FontAwesomeIcon icon={faBuilding} size="2x" className="iconColor"/>
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="work"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <FontAwesomeIcon icon={faVial} size="2x" className="iconColor"/>
                                Work
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <FontAwesomeIcon icon={faEnvelope} size="2x" className="iconColor"/>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;