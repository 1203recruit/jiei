import React from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import GithubIcon from "../../img/GitHub-Mark-64px.png";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -100;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const NavMenu = () => {
  return (
    <nav className="nav">
      <ul className="list-wrapper">
        <NavHashLink
          smooth
          activeClassName="active"
          to={"/About/#about"}
          className="underline non-select"
          scroll={(el) => scrollWithOffset(el)}
        >
          <li className="li-item button-text">About</li>
        </NavHashLink>
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
                    scroll={(el) => scrollWithOffset(el)}
                  >
                    Web site
                  </NavHashLink>
                </li>
                <li className="dropdown-item">
                  <NavHashLink
                    smooth
                    to={"/Works/#logo"}
                    className="button-text non-select"
                    scroll={(el) => scrollWithOffset(el)}
                  >
                    Logo
                  </NavHashLink>
                </li>
                <li className="dropdown-item">
                  <NavHashLink
                    smooth
                    to={"/Works/#illust"}
                    className="button-text non-select"
                    scroll={(el) => scrollWithOffset(el)}
                  >
                    Illust
                  </NavHashLink>
                </li>
                <li className="dropdown-item">
                  <NavHashLink
                    smooth
                    to={"/Works/#lottie"}
                    className="button-text non-select"
                    scroll={(el) => scrollWithOffset(el)}
                  >
                    Lottie
                  </NavHashLink>
                </li>
              </ul>
            </div>
          </li>
        </NavLink>
        <NavHashLink
          smooth
          activeClassName="active"
          to={"/Contact/#contact"}
          className="underline non-select"
          scroll={(el) => scrollWithOffset(el)}
        >
          <li className="li-item button-text">Contact</li>
        </NavHashLink>
        <a href="https://github.com/1203recruit" target={"blank"}>
          <div className="github-icon">
            <li className="li-item">
              <img src={GithubIcon} alt="github-icon" />
            </li>
          </div>
        </a>
      </ul>
    </nav>
  );
};

export default NavMenu;
