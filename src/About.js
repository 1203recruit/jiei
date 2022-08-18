import React from "react";

const About = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="main">
          <h1 className="head-line1">About</h1>
          <div className="contents normal-text">
            <div className="item-table">

              <div className="item-wrapper">
                <div className="item-list">
                  <div className="item-L">Name：</div>
                  <div>Jiei</div>
                </div>
                <div className="item-list">
                  <div className="item-L">Address：</div>
                  <div>Tokyo</div>
                </div>
                <div className="item-list">
                  <div className="item-L">E-mail：</div>
                  <div>sample@sample.com</div>
                </div>
              </div> {/* item-list */}

              <div className="item-wrapper">
                <div className="item-list">
                  <div className="item-L">Bio：</div>
                  <div className="item-wrapper">
                    <div className="item-list">
                      <div className="item-L">2017年4月</div>
                      <div>
                        <p>
                          新社会人としてアニメ制作会社に就職
                          <br />
                          その後自社のHPがダサすぎる事に気づき、高校時代にちょっとかじった程度の知識で空いた時間に改修しようと試みたのがITに興味を持ったきっかけとなる
                        </p>
                      </div>
                    </div>
                    <div className="item-list">
                      <div className="item-L">2021年8月</div>
                      <div>
                        <p>アニメ制作会社を退職</p>
                      </div>
                    </div>
                    <div className="item-list">
                      <div className="item-L">2021年9月</div>
                      <div>
                        <p>SES事業の会社に就職し、IT業界に足を踏み入れる</p>
                      </div>
                    </div>
                    <div className="item-list">
                      <div className="item-L">2022年1月</div>
                      <div>
                        <p>SES事業の会社を退職し、フリーランスへ転身（予定）</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> {/* item-list */}

              <div className="item-wrapper">
                <div className="item-list">
                  <div className="item-L">Tools：</div>
                  <div className="item-wrapper">
                    <div className="item-x">
                        <p>Adobe Photoshop/Illustrator/After Effects/XD</p>
                        <p>
                          Visual Studio Code　Figma　Miro　CLIP STUDIO
                          PAINT　MagicaVoxel
                        </p>
                    </div>
                    <div className="item-x">
                        <p>HTML　CSS　Javascript（JQuery/React）</p>
                        <p>PHP　MySQL</p>
                    </div>
                  </div>
                </div>
              </div> {/* item-list */}

            </div> {/* item-table */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
