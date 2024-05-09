import React from 'react';

const Header = () => {
  return (
    <header className="animate__animated animate__fadeInDown">
      <nav className="navbar navbar-expand-lg px-3">
        <div className="container">
          <a
            className="display-5 logo shadow-inset p-2 underline animate__animated animate__zoomIn animate__slow animate__delay-1s"
            href="/"
          >
            RK
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="nav nav-pills">
              <li className="nav-item border-end border-1 border-opacity-50 border-secondary">
                <a
                  href="/resume"
                  className="nav-link underline fw-bold animate__animated animate__zoomIn animate__delay-1s"
                >
                  View Resume
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link underline fw-bold animate__animated animate__zoomIn animate__delay-1s"
                  rel="noreferrer"
                  target="_blank"
                  href="mailto: ravikancula@gmail.com"
                >
                  Fire Me An Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
