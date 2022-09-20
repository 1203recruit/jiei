import React from "react";
import WorksWebSite from "../parts/WorksWebSIte";
import JieiPC from "../../img/Jiei-PC.png"
import JieiSP from "../../img/Jiei-SP.png"

import WorksLogo from "../parts/WorksLogo";

import WorksIllust from "../parts/WorksIllust";
import Animals from "../../img/Animals.png";

import WorksLottie from "../parts/WorksLottie";
import Star from "../../img/Star.json"
import Rolling from "../../img/Rolling.json"

import { FaSuitcase, FaDesktop, FaPencilAlt } from "react-icons/fa";
import { SiAdobeillustrator, SiAdobeaftereffects } from "react-icons/si";
import ScrollToTop from "react-scroll-to-top";

const Works = () => {
  return (
    <div className="container" id="top">
      <main>
        <h1 className="head-line1">
          <FaSuitcase className="icon" />
          Works
        </h1>

        <article className="contents" id="webSite">
          <h2 className="head-line2">
            <FaDesktop className="icon" />
            Web site :
          </h2>
          <WorksWebSite
            title={"Jiei（当サイト）"}
            PCImage={JieiPC}
            PhoneImage={JieiSP}
            comment={"●使用言語：React+HTML+CSS\nReactの勉強のため作成。できるだけシンプルにしたかったため使用色を3色くらいに抑えた。一応レスポンシブにも対応。"}
          />
        </article>
        <hr className="boundary-line" />
        <article className="contents" id="logo">
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
        </article>
        <hr className="boundary-line" />
        <article className="contents" id="illust">
          <h2 className="head-line2">
            <FaPencilAlt className="icon" />
            Illust :
          </h2>
          <WorksIllust
            title={"Animals"}
            IllustImage={Animals}
            comment={"好きな小動物たちを描いた"}
          />
        </article>
        <hr className="boundary-line" />
        <article className="contents" id="lottie">
          <h2 className="head-line2">
            <SiAdobeaftereffects className="icon" />
            Lottie :
          </h2>
          <WorksLottie
            title={"Star!!"}
            lottie={Star}
            comment={"CSSでもやろうと思えばできるかもしれないが、そこに工数をかけるよりAEで作った方が綺麗にできるし何より早い。"}
          />
          <WorksLottie
            title={"Rolling-Ball"}
            lottie={Rolling}
            comment={"CSSでは表現が難しいこのようなアニメーションもLottieなら簡単に実装することができる。"}
          />
        </article>
        <ScrollToTop smooth />
      </main>
    </div>
  );
};

export default Works;
