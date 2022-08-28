import React from "react";
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
          <NavLink
            to="/About"
            activeClassName="active"
            className="underline button-text non-select"
          >
            <FaUser className="icon" />
            About
          </NavLink>
        </li>

        <li className="list-item dropdown-menu">
          <NavLink
            to="/Works"
            activeClassName="active"
            className="underline button-text non-select"
          >
            <FaSuitcase className="icon" />
            Works
            <div className="dropdown-list">
              <ul>
                <li className="dropdown-item">
                  <HashLink
                    to="/works/#webSite"
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
                    to="/works/#logo"
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
                    to="/works/#illust"
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
                    to="/works/#lottie"
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
          </NavLink>
        </li>

        <li className="list-item">
          <NavLink
            to="/Contact"
            activeClassName="active"
            className="underline button-text non-select"
          >
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
  );
};

export default NavMenu;
