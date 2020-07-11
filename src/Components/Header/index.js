import React, {useState, useEffect, Fragment} from 'react';
import cx from 'classnames';
import {header, logo, menuDivider, hamburger} from './Header.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBuilding, faEnvelope, faVial, faUserCircle, faAlignRight, faTimes} from '@fortawesome/free-solid-svg-icons'
import {Link, animateScroll as scroll} from "react-scroll";
// images
import Logo from './logo.png';

const Header = () => {
    const [isMenuVisible, setVisibility] = useState(false);
    const [headerClassName, setHeaderClassName] = useState("");
    const toggleMenuIconVisibility = () => setVisibility(!isMenuVisible);
    const menuItems = [
        {
            "route": "about",
            "name": "About Me",
            "icon": faUserCircle
        },
        {
            "route": "experience",
            "name": "Experience",
            "icon": faBuilding
        },
        {
            "route": "work",
            "name": "Work",
            "icon": faVial
        },
        {
            "route": "contact",
            "name": "Contact",
            "icon": faEnvelope
        }
    ]
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

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
        <Fragment>
            <hr className={menuDivider} />
            <div className={cx(header,headerClassName)}>
                <div className={logo}>
                    <img src={Logo} alt="Portfolio Logo" onClick={scrollToTop}/>
                </div>
                <button className={hamburger} onClick={toggleMenuIconVisibility}>
                    <FontAwesomeIcon icon={faAlignRight} size="2x" className={!isMenuVisible ? 'show' : 'hide'}/>
                    <FontAwesomeIcon icon={faTimes} size="3x" className={isMenuVisible ? 'show' : 'hide'}/>
                </button>
            </div>
            <div className={isMenuVisible ? 'show' : 'hide'}>
                <div className="menu">
                    <nav>
                        {menuItems.map(item => {
                            return (
                                <li key={item.route}>
                                    <Link
                                        activeClass="active"
                                        to={item.route}
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >
                                    <span className="image">
                                        <FontAwesomeIcon icon={item.icon} size="1x" className="iconColor"/>
                                    </span>
                                        <span className="title">{item.name}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </nav>
                </div>
            </div>
        </Fragment>
    )
}

export default Header;