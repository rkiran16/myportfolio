import React from 'react';
import {Link, scroller as scroll} from "react-scroll";
import { navigation } from './navigation.module.scss';

const Navigation = () => {
    const menu = [{
        name: "About",
        route: "about"
    }, {
        name: "Experience",
        route: "experience"
    }, {
        name: "Mylab",
        route: "work"
    }, {
        name: "Contact",
        route: "contact"
    }]
    return (
        <nav className={navigation}>
            {menu.map((item) => {
                return (
                    <a
                        id={item.route}
                        onClick={() => scroll.scrollTo(item.route, {
                            duration: 1500,
                            delay: 0,
                            smooth: 'easeInOutQuint',
                        })}
                    >
                        <span>{item.name}</span>
                    </a>
                )
            })}
        </nav>
    )
}

export default Navigation;