import React from "react";

const Header = () => {
    return (
        <header className="sticky-top">
            <nav id="navbar-example2" className="navbar border-bottom border-success border-4 bg-white  p-2">
                <a className="display-4 logo underline" href="/">RK</a>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link underline text-black fw-bold animate__animated animate__fadeInDown" href="/#intro">Intro</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link underline text-black fw-bold animate__animated animate__fadeInDown" href="/#work">My Work</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;