import React from "react";
import WorksWebSite from "../parts/WorksWebSIte";
import WorksLogo from "../parts/WorksLogo";
import WorksIllust from "../parts/WorksIllust";
import WorksLottie from "../parts/WorksLottie";
import { FaSuitcase, FaDesktop, FaPencilAlt } from "react-icons/fa";
import { SiAdobeillustrator, SiAdobeaftereffects } from "react-icons/si";
import ScrollToTop from "react-scroll-to-top";

const Works = () => {
  return (
    <div className="container" id="top">
      <div className="main">
        <h1 className="head-line1">
          <FaSuitcase className="icon" />
          Works
        </h1>

        <div className="contents" id="webSite">
          <h2 className="head-line2">
            <FaDesktop className="icon" />
            Web site :
          </h2>
          <WorksWebSite
            title="Jiei（当サイト）"
            comment="できるだけシンプルになるよう使用色を減らした（Reactで作成）"
          />
          <WorksWebSite
            title="Title2"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam, incidunt?"
          />
          <WorksWebSite
            title="Title3"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptatem, maxime velit obcaecati deleniti animi!"
          />
        </div>
        <hr className="boundary-line" />
        <div className="contents" id="logo">
          <h2 className="head-line2">
            <SiAdobeillustrator className="icon" />
            Logo :
          </h2>
          <WorksLogo
            title="Title4"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing."
          />
          <WorksLogo
            title="Title5"
            comment="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit!"
          />
        </div>
        <hr className="boundary-line" />
        <div className="contents" id="illust">
          <h2 className="head-line2">
            <FaPencilAlt className="icon" />
            Illust :
          </h2>
          <WorksIllust
            title="Title6"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, atque sint."
          />
          <WorksIllust
            title="Title7"
            comment="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, praesentium nesciunt? Cum."
          />
          <WorksIllust
            title="Title8"
            comment="Lorem ipsum dolor sit amet consectetur."
          />
        </div>
        <hr className="boundary-line" />
        <div className="contents" id="lottie">
          <h2 className="head-line2">
            <SiAdobeaftereffects className="icon" />
            Lottie :
          </h2>
          <WorksLottie
            title="Title9"
            comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi."
          />
          <WorksLottie
            title="Title10"
            comment="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vel recusandae dolorum unde consequuntur ipsa?"
          />
        </div>
        <ScrollToTop smooth />
      </div>
    </div>
  );
};

export default Works;
