import React from "react";
import AboutItemsWrapper from "../parts/AboutItemsWrapper";
import AboutItems from "../parts/AboutItems";
import AboutItemsList from "../parts/AboutItemsList";
import AboutTools from "../parts/AboutTools";
import { FaUser } from "react-icons/fa";
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
            <AboutItems label={"Bio："}>
              <AboutItemsList subLabel={"Name"} contents={"Jiei Ikebe"} />
              <AboutItemsList subLabel={"Address"} contents={"Tokyo"} />
              <AboutItemsList
                subLabel={"E-mail"}
                contents={"1203recruit@gmail.com"}
              />
            </AboutItems>
            <AboutItems label={"History："}>
              <AboutItemsList
                subLabel={"2017年4月"}
                contents={
                  "新社会人としてアニメ制作会社の撮影部に就職\n2年ほどしたときに自社のHPが古臭い事に気づき、空いた時間で高校時代に少しだけ身に着けた程度の知識で改修しようと試みたのがITに興味を持ったきっかけ"
                }
              />
              <hr />
              <AboutItemsList
                subLabel={"2021年8月"}
                contents={"アニメ制作会社を退職"}
              />
              <hr />
              <AboutItemsList
                subLabel={"2021年9月"}
                contents={"SES事業の会社に就職し、IT業界に足を踏み入れる"}
              />
              <hr />
              <AboutItemsList
                subLabel={"2021年10月\n~\n2022年12月"}
                contents={"SESとして地方銀行のアプリ開発のプロジェクトに参画。\n最初はQAとして参画したが、2ヵ月後ほどで次プロジェクトのため上流工程に異動。そこから仕様書を書きながら、デザイナーのヘルプ、QAのヘルプとして奮闘。"}
              />
              <hr />
              <AboutItemsList
                subLabel={"2022年12月"}
                contents={"SES事業の会社を退職予定"}
              />
            </AboutItems>
            <AboutItems label={"Tools"}>
              <AboutTools />
            </AboutItems>
            <AboutItems label={"I want to："}>
              <AboutItemsWrapper>
                <div className="about-item-x">
                  <p>Web Designer & Front End Engineer</p>
                </div>
              </AboutItemsWrapper>
            </AboutItems>
          </div>
        </article>
        <ScrollToTop smooth />
      </main>
    </div>
  );
};

export default About;
