import React, { useState } from 'react';

const Header = () => {
  const [theme, setTheme] = useState('dark');
  const themeToggle = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-bs-theme', 'light');
      setTheme('dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      setTheme('light');
    }
  };
  return (
    <header className="animate__animated animate__fadeInDown">
      <nav className="navbar navbar-expand-lg px-3">
        <div className="container">
          <a
            className="display-4 logo underline animate__animated animate__zoomIn animate__slow animate__delay-1s"
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
                  href="mailto: ravikancula@gmail.com"
                >
                  Fire Me An Email
                </a>
              </li>
            </ul>
          </div>
          <div className="border-secondary fw-bold animate__animated animate__zoomIn animate__delay-1s">
            <input
              type="checkbox"
              className="btn-check"
              id="btn-check"
              autocomplete="off"
              onClick={themeToggle}
            ></input>
            <label for="btn-check">
              {theme === 'dark' ? (
                <i className="fs-3 fa-sharp fa-solid fa-moon"></i>
              ) : (
                <i className="fs-3 fa-sharp fa-solid fa-sun"></i>
              )}
            </label>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
