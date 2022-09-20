import React from "react";
import { FaUser } from "react-icons/fa";
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
import ScrollToTop from "react-scroll-to-top";

const About = () => {
  return (
    <div className="container" id="about">
      <main>
        <h1 className="head-line1">
          <FaUser className="icon" />
          About
        </h1>
        <article className="contents normal-text">
          <div className="about-item-table">
            <div className="about-item-wrapper">
              <div className="about-item-list">
                <div className="about-item-L">Name：</div>
                <div className="about-item-R">Jiei</div>
              </div>
              <div className="about-item-list">
                <div className="about-item-L">Address：</div>
                <div className="about-item-R">Tokyo</div>
              </div>
              <div className="about-item-list">
                <div className="about-item-L">E-mail：</div>
                <div className="about-item-R">sample@sample.com</div>
              </div>
            </div>
            <div className="about-item-wrapper">
              <div className="about-item-list">
                <h2 className="about-item-L head-line-2-sp">Bio：</h2>
                <div className="about-item-wrapper">
                  <div className="about-item-list">
                    <div className="about-item-L">2017年4月</div>
                    <div className="about-item-R">
                      <p>
                        新社会人としてアニメ制作会社の撮影部に就職
                        <br />
                        2年ほどしたときに自社のHPが古臭い事に気づき、空いた時間で高校時代に少しだけ身に着けた程度の知識で改修しようと試みたのがITに興味を持ったきっかけ
                      </p>
                    </div>
                  </div>
                  <div className="about-item-list">
                    <div className="about-item-L">2021年8月</div>
                    <div className="about-item-R">
                      <p>アニメ制作会社を退職</p>
                    </div>
                  </div>
                  <div className="about-item-list">
                    <div className="about-item-L">2021年9月</div>
                    <div className="about-item-R">
                      <p>SES事業の会社に就職し、IT業界に足を踏み入れる</p>
                    </div>
                  </div>
                  <div className="about-item-list">
                    <div className="about-item-L">2022年1月</div>
                    <div className="about-item-R">
                      <p>SES事業の会社を退職予定</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-item-wrapper">
              <div className="about-item-list">
                <h2 className="about-item-L head-line-2-sp">Tools：</h2>
                <div className="about-item-wrapper">
                  <div className="about-item-x">
                    <ul>
                      <li>
                        <SiAdobe className="icon" />
                        Adobe
                      </li>
                      <li className="adobe">
                        Photoshop / Illustrator / After Effects / XD
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
                </div>
              </div>
            </div>
            <div className="about-item-wrapper">
              <div className="about-item-list">
                <h2 className="about-item-L head-line-2-sp">I want to：</h2>
                <div className="about-item-wrapper">
                  <div className="about-item-x">
                    <p>Web Designer & Front End Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <ScrollToTop smooth />
      </main>
    </div>
  );
};

export default About;
