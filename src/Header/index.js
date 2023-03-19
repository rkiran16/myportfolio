import React from "react";

const Header = () => {
    return (
        <header className="sticky-top">
            <nav id="navbar-example2" className="navbar border-bottom border-success border-4 bg-green px-3">
                <a className="display-4 logo underline" href="/">RK</a>
                <ul className="nav nav-pills">
                    <li className="nav-item border-end border-1 border-opacity-50 border-secondary">
                        <a className="nav-link underline text-black fw-bold animate__animated animate__fadeInDown" href="/#intro">Intro</a>
                    </li>
                    <li className="nav-item border-end border-1 border-opacity-50 border-secondary">
                        <a className="nav-link underline text-black fw-bold animate__animated animate__fadeInDown" href="/#work">My Work</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link underline text-black fw-bold animate__animated animate__fadeInDown" href="mailto: ravikancula@gmail.com">
                            Fire Me An Email
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;