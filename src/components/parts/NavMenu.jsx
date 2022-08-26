import React from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { FaUser } from "react-icons/fa";
import { MdWork,  MdMail } from "react-icons/md";
import { IoDesktop } from "react-icons/io5";
import { AiFillPicture } from "react-icons/ai";
import { SiAdobeillustrator, SiAdobeaftereffects, SiGithub } from "react-icons/si";


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
            <FaUser className="icon" />About
          </NavHashLink>
        </li>
        <li className="list-item dropdown-menu">
          <NavLink
            smooth
            activeClassName="active"
            to={"/Works/"}
            className="underline button-text non-select"
          >
            <MdWork className="icon" />Works
            <div className="dropdown-list">
              <ul>
                <li className="dropdown-item">
                  <NavHashLink
                    smooth
                    to={"/Works/#webSite"}
                    className="button-text non-select"
                    scroll={(el) => scrollWithOffset(el)}
                  >
                    <IoDesktop className="icon" />Web site
                  </NavHashLink>
                </li>
                <li className="dropdown-item">
                  <NavHashLink
                    smooth
                    to={"/Works/#logo"}
                    className="button-text non-select"
                    scroll={(el) => scrollWithOffset(el)}
                  >
                    <SiAdobeillustrator className="icon" />Logo
                  </NavHashLink>
                </li>
                <li className="dropdown-item">
                  <NavHashLink
                    smooth
                    to={"/Works/#illust"}
                    className="button-text non-select"
                    scroll={(el) => scrollWithOffset(el)}
                  >
                    <AiFillPicture className="icon" />Illust
                  </NavHashLink>
                </li>
                <li className="dropdown-item">
                  <NavHashLink
                    smooth
                    to={"/Works/#lottie"}
                    className="button-text non-select"
                    scroll={(el) => scrollWithOffset(el)}
                  >
                    <SiAdobeaftereffects className="icon" />Lottie
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
            <MdMail className="icon" />Contact
          </NavHashLink>
        </li>
        <li className="list-item">
          <a
            href="https://github.com/1203recruit"
            target={"blank"}
            className="github-link"
          >
            <SiGithub className="github-icon"/>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
