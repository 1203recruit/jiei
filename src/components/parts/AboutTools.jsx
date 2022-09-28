import React from "react";
import AboutItemsWrapper from "./AboutItemsWrapper";
import {
  SiAdobe,
  SiVisualstudiocode,
  SiFigma,
  SiMiro,
  SiSlack,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiMysql,
} from "react-icons/si";
import { AiOutlinePaperClip } from "react-icons/ai";

const AboutTools = () => {
  return (
    <div className="about-item-list">
      <AboutItemsWrapper>
        <div className="about-item-x">
          <ul>
            <li>
              <SiAdobe className="icon" />
              Adobe
            </li>
            <li className="adobe">
              Photoshop / Illustrator / AfterEffects / XD
            </li>
          </ul>
          <ul>
            <li>
              <SiVisualstudiocode className="icon" />
              Visual Studio Code
            </li>
            <li>
              <SiFigma className="icon" />
              Figma
            </li>
            <li>
              <SiMiro className="icon" />
              Miro
            </li>
            <li>
              <SiSlack className="icon" />
              Slack
            </li>
            <li>
              <AiOutlinePaperClip className="icon" />
              CLIP STUDIO PAINT
            </li>
          </ul>
        </div>
        <div className="about-item-x">
          <ul>
            <li>
              <SiHtml5 className="icon" />
              HTML
            </li>
            <li>
              <SiCss3 className="icon" />
              CSS(Tailwind CSS)
            </li>
            <li>
              <SiJavascript className="icon" />
              JavaScript(JQuery / React)
            </li>
          </ul>
          <ul>
            <li>
              <SiPhp className="icon" />
              PHP(Laravel)
            </li>
            <li>
              <SiMysql className="icon" />
              MySQL
            </li>
          </ul>
        </div>
      </AboutItemsWrapper>
    </div>
  );
};

export default AboutTools;
