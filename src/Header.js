import React from "react";
import GithubIcon from "./img/GitHub-Mark-64px.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-wrapper">
          <div className="logo-wrap">
            <NavLink activeClassNAme="active" to="/">
              <div className="logo">
                <j>J</j>iei
              </div>
            </NavLink>
          </div>
          <nav className="nav">
            <ul className="list-wrapper">
              <NavLink
                activeClassNAme="active"
                to={"/About/"}
                className="underline"
              >
                <li className="li-item button-text">About</li>
              </NavLink>
              <NavLink
                activeClassNAme="active"
                to={"/Works/"}
                className="underline"
              >
                <li className="li-item button-text dropdown-menu">Works
                  <ul class="dropdown-list">
                    <li class="dropdown-item">
                      <NavLink to={"/"} className="button-text">Web site</NavLink>
                    </li>
                    <li class="dropdown-item">
                      <NavLink to={"/"} className="button-text">Logo</NavLink>
                    </li>
                    <li class="dropdown-item">
                      <NavLink to={"/"} className="button-text">Illust</NavLink>
                    </li>
                    <li class="dropdown-item">
                      <NavLink to={"/"} className="button-text">Other</NavLink>
                    </li>
                  </ul>
                </li>
              </NavLink>
              <NavLink
                activeClassNAme="active"
                to={"/Contact/"}
                className="underline"
              >
                <li className="li-item button-text">Contact</li>
              </NavLink>
            </ul>
          </nav>
          <div className="github-icon">
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
