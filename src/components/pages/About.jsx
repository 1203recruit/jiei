import React from "react";

const About = () => {
  return (
    <div className="container" id="about">
      <div className="main">
        <h1 className="head-line1">About</h1>
        <div className="contents normal-text">
          <div className="about-item-table">
            <div className="about-item-wrapper">
              <div className="about-item-list">
                <div className="about-item-L">Name：</div>
                <div>Jiei</div>
              </div>
              <div className="about-item-list">
                <div className="about-item-L">Address：</div>
                <div>Tokyo</div>
              </div>
              <div className="about-item-list">
                <div className="about-item-L">E-mail：</div>
                <div>sample@sample.com</div>
              </div>
            </div>
            <div className="about-item-wrapper">
              <div className="about-item-list">
                <div className="about-item-L">Bio：</div>
                <div className="about-item-wrapper">
                  <div className="about-item-list">
                    <div className="about-item-L">2017年4月</div>
                    <div>
                      <p>
                        新社会人としてアニメ制作会社の撮影部に就職
                        <br />
                        2年ほどしたときに自社のHPがダサすぎる事に気づき、空いた時間で高校時代に少しだけ身に着けた程度の知識で改修しようと試みたのがITに興味を持ったきっかけ
                      </p>
                    </div>
                  </div>
                  <div className="about-item-list">
                    <div className="about-item-L">2021年8月</div>
                    <div>
                      <p>アニメ制作会社を退職</p>
                    </div>
                  </div>
                  <div className="about-item-list">
                    <div className="about-item-L">2021年9月</div>
                    <div>
                      <p>SES事業の会社に就職し、IT業界に足を踏み入れる</p>
                    </div>
                  </div>
                  <div className="about-item-list">
                    <div className="about-item-L">2022年1月</div>
                    <div>
                      <p>SES事業の会社を退職し、フリーランスへ転身（予定）</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-item-wrapper">
              <div className="about-item-list">
                <div className="about-item-L">Tools：</div>
                <div className="about-item-wrapper">
                  <div className="about-item-x">
                    <ul>
                      <li>Adobe</li>
                      <li>Photoshop/Illustrator/After Effects/XD</li>
                    </ul>
                    <ul>
                      <li>Visual Studio Code</li>
                      <li>Figma</li>
                      <li>Miro</li>
                      <li>Slack</li>
                      <li>CLIP STUDIO PAINT</li>
                      <li>MagicaVoxel</li>
                    </ul>
                  </div>
                  <div className="about-item-x">
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript(JQuery/React)</li>
                      <li>PHP(Laravel)</li>
                      <li>MySQL</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-item-wrapper">
              <div className="about-item-list">
                <div className="about-item-L">I want to：</div>
                <div className="about-item-wrapper">
                  <div className="about-item-x">
                    <p>Web Designer & Front End Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
