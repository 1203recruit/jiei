import React from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -100;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const NavMenu = () => {
  return (
    <nav className="nav">
      <ul className="list-wrapper">
        <li className="list-item">
          <NavHashLink
            smooth
            activeClassName="active"
            to={"/About/#about"}
            className="underline button-text non-select"
            scroll={(el) => scrollWithOffset(el)}
          >
            About
          </NavHashLink>
        </li>
        <li className="list-item dropdown-menu">
          <NavLink
            smooth
            activeClassName="active"
            to={"/Works/"}
            className="underline button-text non-select"
          >
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
          </NavLink>
        </li>
        <li className="list-item">
          <NavHashLink
            smooth
            activeClassName="active"
            to={"/Contact/#contact"}
            className="underline button-text non-select"
            scroll={(el) => scrollWithOffset(el)}
          >
            Contact
          </NavHashLink>
        </li>
        <li className="list-item">
          <a
            href="https://github.com/1203recruit"
            target={"blank"}
            className="github-link"
          >
            <svg className="github-icon">
              <path
                class="cls-1 github-color"
                d="M32,1.45a31.77,31.77,0,0,0-10,61.9c1.59.29,2.17-.69,2.17-1.53s0-2.75,0-5.4c-8.84,1.92-10.7-4.26-10.7-4.26-1.45-3.67-3.53-4.65-3.53-4.65-2.89-2,.22-1.93.22-1.93,3.18.23,4.86,3.28,4.86,3.28,2.84,4.85,7.44,3.45,9.25,2.63a6.81,6.81,0,0,1,2-4.24c-7-.8-14.47-3.53-14.47-15.7A12.27,12.27,0,0,1,15,23a11.49,11.49,0,0,1,.32-8.41s2.66-.86,8.73,3.26a30.11,30.11,0,0,1,15.91,0c6.06-4.12,8.72-3.26,8.72-3.26A11.49,11.49,0,0,1,49,23a12.27,12.27,0,0,1,3.26,8.52c0,12.2-7.42,14.89-14.5,15.67,1.14,1,2.16,2.92,2.16,5.89,0,4.24,0,7.67,0,8.71,0,.85.57,1.84,2.18,1.53A31.77,31.77,0,0,0,32,1.45Z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
