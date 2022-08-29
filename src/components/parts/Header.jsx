import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  FaUser,
  FaSuitcase,
  FaEnvelope,
  FaDesktop,
  FaPencilAlt,
} from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiGithub,
} from "react-icons/si";

const Header = () => {
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("show").style.height = `${window.outerHeight}px`;
  });

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  // Drawer
  const [showDrawer, setShowDrawer] = useState(false);
  const ShowDrawer = () => {
    setShowDrawer(!showDrawer);

  };

  // Toggle
  const [activeToggle, setActiveToggle] = useState(false);
  const ActiveToggle = () => {
    setActiveToggle(!activeToggle);
  };

  // overflow
  const [overflowToggle, setOverflowToggle] = useState(false);
  const OverflowToggle = () => {
    setOverflowToggle(!overflowToggle);
    
    if (!overflowToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  return (
    <>
      <header className="header">
        <div
          className={showDrawer ? "show" : ""}
          onClick={() => {
            ShowDrawer();
            ActiveToggle();
          }}
        >
          <div className="drawer-overlay" />
        </div>
        <div className="header-wrapper">
          <div className="logo-wrapper">
            <NavLink to={"/"} activeClassName="active" className="non-select">
              <svg className="jiei-logo">
                <g id="Jiei_Outline_" data-name="Jiei(Outline)">
                  <path
                    class="cls-1 logo"
                    d="M14.83,42.79q-7.1,0-10.44-2.52C2.17,38.59,1.06,36,1.06,32.52A11.92,11.92,0,0,1,1.34,30H9c-.06.42-.11.82-.14,1.2s-.05.71-.05,1a3.49,3.49,0,0,0,2,3.53,13.21,13.21,0,0,0,5.33.89h3q4.08,0,5.79-1.32t1.7-5V8.33h7.68V30.26a16.53,16.53,0,0,1-1.3,7,8.35,8.35,0,0,1-4.32,4.15,20.38,20.38,0,0,1-8.25,1.37Z"
                  />
                  <path
                    class="cls-1"
                    d="M71.47,13.75V8.32h7.06v5.43Zm0,28.8V17.83h7V42.55Z"
                  />
                  <path
                    class="cls-1"
                    d="M127.63,42.79q-6.43,0-10-3.19T114,30.21q0-6.24,3.6-9.43t10-3.19h12q4.23,0,6.46,2a7.26,7.26,0,0,1,2.23,5.69q0,7.53-8.69,7.53H121.49q1,4.47,6.14,4.47h19.44v5.52Zm0-19.68q-4.95,0-6.1,4.17h17.76a2,2,0,0,0,1.52-.57,2.24,2.24,0,0,0,.55-1.59,1.8,1.8,0,0,0-2.07-2Z"
                  />
                  <path
                    class="cls-1"
                    d="M183.79,13.75V8.32h7.06v5.43Zm.05,28.8V17.83h7V42.55Z"
                  />
                </g>
                <g id="Add_bar" data-name="Add bar">
                  <rect
                    id="bar2"
                    class="cls-1"
                    x="89.98"
                    y="8.33"
                    width="82.34"
                    height="5.4"
                  />
                  <rect
                    id="bar1"
                    class="cls-1 logo"
                    x="26.81"
                    y="8.33"
                    width="33.19"
                    height="5.4"
                  />
                </g>
              </svg>
            </NavLink>
          </div>
          <div className="nav-wrapper">
            {activeToggle ? (
              <div
                className="hamburger-menu active-toggle"
                onClick={() => {
                  ShowDrawer();
                  ActiveToggle();
                  OverflowToggle();
                }}
              >
                <span className="hamburger-menu-bar" />
                <span className="hamburger-menu-bar" />
                <span className="hamburger-menu-bar" />
              </div>
            ) : (
              <div
                className="hamburger-menu"
                onClick={() => {
                  ShowDrawer();
                  ActiveToggle();
                  OverflowToggle();
                }}
              >
                <span className="hamburger-menu-bar" />
                <span className="hamburger-menu-bar" />
                <span className="hamburger-menu-bar" />
              </div>
            )}

            <div className={showDrawer ? "show" : ""}>
              <nav className="nav">
                <ul className="list-wrapper">
                  <li className="list-item">
                    <NavLink
                      to="/About"
                      activeClassName="active"
                      className="underline button-text non-select"
                      onClick={() => {
                        ShowDrawer();
                        ActiveToggle();
                      }}
                    >
                      {showDrawer
                          ? <toggle onClick={OverflowToggle} />
                          : ""
                      }
                      <FaUser className="icon" />
                      About
                    </NavLink>
                  </li>
                  <li className="list-item dropdown-menu">
                    <NavLink
                      to="/Works"
                      activeClassName="active"
                      className="underline button-text non-select"
                      onClick={() => {
                        ShowDrawer();
                        ActiveToggle();
                      }}
                    >
                      {showDrawer
                          ? <toggle onClick={OverflowToggle} />
                          : ""
                      }
                      <FaSuitcase className="icon" />
                      Works
                      
                    </NavLink>
                      <div className="dropdown-list">
                        <ul>
                          <li className="dropdown-item">
                            <HashLink
                              to="/Works/#webSite"
                              smooth
                              scroll={(el) => scrollWithOffset(el)}
                              className="button-text non-select"
                            >
                              <FaDesktop className="icon" />
                              Web site
                            </HashLink>
                          </li>
                          <li className="dropdown-item">
                            <HashLink
                              to="/Works/#logo"
                              smooth
                              scroll={(el) => scrollWithOffset(el)}
                              className="button-text non-select"
                            >
                              <SiAdobeillustrator className="icon" />
                              Logo
                            </HashLink>
                          </li>
                          <li className="dropdown-item">
                            <HashLink
                              to="/Works/#illust"
                              smooth
                              scroll={(el) => scrollWithOffset(el)}
                              className="button-text non-select"
                            >
                              <FaPencilAlt className="icon" />
                              Illust
                            </HashLink>
                          </li>
                          <li className="dropdown-item">
                            <HashLink
                              to="/Works/#lottie"
                              smooth
                              scroll={(el) => scrollWithOffset(el)}
                              className="button-text non-select"
                            >
                              <SiAdobeaftereffects className="icon" />
                              Lottie
                            </HashLink>
                          </li>
                        </ul>
                      </div>
                  </li>
                  <li className="list-item">
                    <NavLink
                      to="/Contact"
                      activeClassName="active"
                      className="underline button-text non-select"
                      onClick={() => {
                        ShowDrawer();
                        ActiveToggle();
                      }}
                    >
                      {showDrawer
                          ? <toggle onClick={OverflowToggle} />
                          : ""
                      }
                      <FaEnvelope className="icon" />
                      Contact
                    </NavLink>
                  </li>
                  <li className="list-item">
                    <a
                      href="https://github.com/1203recruit"
                      target={"blank"}
                      className="github-link"
                    >
                      <SiGithub className="github-icon" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
