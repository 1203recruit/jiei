import React from "react";
import WorksWebSite from "../parts/WorksWebSIte";
import WorksLogo from "../parts/WorksLogo";
import WorksIllust from "../parts/WorksIllust";
import WorksLottie from "../parts/WorksLottie";
import Star from "../../img/Star.json"
import Rolling from "../../img/Rolling.json"

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
            title={"Jiei（当サイト）"}
            comment={"・React+HTML+CSS\nできるだけシンプルになるよう使用色を減らした"}
          />
          <WorksWebSite
            title={"Title2"}
            comment={"Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam, incidunt?"}
          />
          <WorksWebSite
            title={"Title3"}
            comment={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptatem, maxime velit obcaecati deleniti animi!"}
          />
        </div>
        <hr className="boundary-line" />
        <div className="contents" id="logo">
          <h2 className="head-line2">
            <SiAdobeillustrator className="icon" />
            Logo :
          </h2>
          <WorksLogo
            title={"Title4"}
            comment={"Lorem ipsum dolor sit amet consectetur adipisicing."}
          />
          <WorksLogo
            title={"Title5"}
            comment={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit!"}
          />
        </div>
        <hr className="boundary-line" />
        <div className="contents" id="illust">
          <h2 className="head-line2">
            <FaPencilAlt className="icon" />
            Illust :
          </h2>
          <WorksIllust
            title={"Title6"}
            comment={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, atque sint."}
          />
          <WorksIllust
            title={"Title7"}
            comment={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, praesentium nesciunt? Cum."}
          />
          <WorksIllust
            title={"Title8"}
            comment={"Lorem ipsum dolor sit amet consectetur."}
          />
        </div>
        <hr className="boundary-line" />
        <div className="contents" id="lottie">
          <h2 className="head-line2">
            <SiAdobeaftereffects className="icon" />
            Lottie :
          </h2>
          <WorksLottie
            lottie={Star}
            title={"Star!!"}
            comment={"CSSでもやろうと思えばできるかもしれないが、そこに工数をかけるよりAEで作った方が綺麗にできるし何より早い。"}
          />
          <WorksLottie
            lottie={Rolling}
            title={"Rolling-Ball"}
            comment={"CSSでは表現が難しいこのようなアニメーションもLottieなら簡単に実装することができる。"}
          />
        </div>
        <ScrollToTop smooth />
      </div>
    </div>
  );
};

export default Works;
