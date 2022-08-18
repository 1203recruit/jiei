import React from "react";
import GithubIcon from "./img/GitHub-Mark-64px.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-wrapper">
          <div className="logo-wrap">
            <NavLink activeClassName="active" to="/" className="logo-wrapper non-select">
              <div className="logo">
                <j>J</j>iei
              </div>
            </NavLink>
          </div>
          <nav className="nav">
            <ul className="list-wrapper">
              <NavLink
                activeClassName="active"
                to={"/About/"}
                className="underline non-select"
              >
                <li className="li-item button-text">About</li>
              </NavLink>
              <NavLink
                activeClassName="active"
                to={"/Works/"}
                className="underline non-select"
              >
                <li className="li-item button-text dropdown-menu">Works
                <div className="dropdown-list">
                  <ul>
                    <li className="dropdown-item">
                      <NavLink to={"/Works/"} className="button-text non-select">Web site</NavLink>
                    </li>
                    <li className="dropdown-item">
                      <NavLink to={"/Works/"} className="button-text non-select">Logo</NavLink>
                    </li>
                    <li className="dropdown-item">
                      <NavLink to={"/Works/"} className="button-text non-select">Illust</NavLink>
                    </li>
                    <li className="dropdown-item">
                      <NavLink to={"/Works/"} className="button-text non-select">Other</NavLink>
                    </li>
                  </ul>
                  </div>
                </li>
              </NavLink>
              <NavLink
                activeClassName="active"
                to={"/Contact/"}
                className="underline non-select"
              >
                <li className="li-item button-text">Contact</li>
              </NavLink>
            </ul>
          </nav>
          <div className="github-icon non-select">
            <a href="https://github.com/1203recruit" target={"blank"}>
              <img src={GithubIcon} alt="Github-icon" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
