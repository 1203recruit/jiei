import React from "react";
import GithubIcon from "./img/GitHub-Mark-64px.png";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-wrapper">
          <div className="logo-wrap">
            <NavLink
              smooth
              activeClassName="active"
              to={"/"}
              className="logo-wrapper non-select"
            >
              <div className="logo">
                <j>J</j>iei
              </div>
            </NavLink>
          </div>
          <nav className="nav">
            <ul className="list-wrapper">
              <NavLink
                smooth
                activeClassName="active"
                to={"/About/"}
                className="underline non-select"
              >
                <li className="li-item button-text">About</li>
              </NavLink>
              <NavLink
                smooth
                activeClassName="active"
                to={"/Works/"}
                className="underline non-select"
              >
                <li className="li-item button-text dropdown-menu">
                  Works
                  <div className="dropdown-list">
                    <ul>
                      <li className="dropdown-item">
                        <NavHashLink
                          smooth
                          to={"/Works/#webSite"}
                          className="button-text non-select"
                        >
                          Web site
                        </NavHashLink>
                      </li>
                      <li className="dropdown-item">
                        <NavHashLink
                          smooth
                          
                          to={"/Works/#logo"}
                          className="button-text non-select"
                        >
                          Logo
                        </NavHashLink>
                      </li>
                      <li className="dropdown-item">
                        <NavHashLink
                          smooth
                          to={"/Works/#illust"}
                          className="button-text non-select"
                        >
                          Illust
                        </NavHashLink>
                      </li>
                      <li className="dropdown-item">
                        <NavHashLink
                          smooth
                          to={"/Works/#lottie"}
                          className="button-text non-select"
                        >
                          Lottie
                        </NavHashLink>
                      </li>
                    </ul>
                  </div>
                </li>
              </NavLink>
              <NavLink
                smooth
                activeClassName="active"
                to={"/Contact/"}
                className="underline non-select"
              >
                <li className="li-item button-text">Contact</li>
              </NavLink>
            </ul>
          </nav>
          <div className="github-icon non-select">
            <a to="https://github.com/1203recruit" target={"blank"}>
              <img src={GithubIcon} />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
