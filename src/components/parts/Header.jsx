import React from "react";
import GithubIcon from "../../img/GitHub-Mark-64px.png";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { slide as Menu } from "react-burger-menu";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -100;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

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
              </ul>
            </nav>
            <div className="github-icon non-select">
              <a href="https://github.com/1203recruit" target={"blank"}>
                <img src={GithubIcon} alt="github-icon" />
              </a>
            </div>
        </div>
      </header>
    </>
  );
};

export default Header;
