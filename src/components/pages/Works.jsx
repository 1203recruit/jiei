import React from "react";
import WorksItems from "../parts/WorksItems";

import WorksWebSite from "../parts/WorksWebSIte";
import JieiPC from "../../img/Jiei-PC.png";
import JieiSP from "../../img/Jiei-SP.png";

import WorksLogo from "../parts/WorksLogo";
import Koneko from "../../img/KONEKO.png";

import WorksIllust from "../parts/WorksIllust";
import Animals from "../../img/Animals.png";

import WorksLottie from "../parts/WorksLottie";
import Star from "../../img/Star.json";
import Rolling from "../../img/Rolling.json";

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

        <WorksItems
          icon={<FaDesktop className="icon" />}
          label={"Web site :"}
          contents={
            <WorksWebSite
              title={"Jiei（当サイト）"}
              pcImage={JieiPC}
              phoneImage={JieiSP}
              comment={
                "●使用言語：HTML+CSS+React\nReactを勉強するため作成。できるだけシンプルにしたかったため使用色を3色ほどに抑えた。レスポンシブにも対応。\n当サイトのFigmaは"
              }
              href={
                "https://www.figma.com/file/MdQuBuxTmCuvOE5qgNQw8h/Portfolio?node-id=0%3A1"
              }
              linkWord={"こちら"}
            />
          }
        />
        <hr className="boundary-line" />
        <WorksItems
          icon={<SiAdobeillustrator className="icon" />}
          label={"Logo :"}
          contents={
            <WorksLogo
              title={"子猫書店"}
              logoImage={Koneko}
              comment={
                "「子猫書店」という架空の書店をイメージしてロゴを作成。\n今回は奇抜なデザインを目指さず、可読性を重視した。"
              }
            />
          }
        />
        <hr className="boundary-line" />
        <WorksItems
          icon={<FaPencilAlt className="icon" />}
          label={"Illust :"}
          contents={
            <WorksIllust
              title={"Animals"}
              illustImage={Animals}
              comment={"好きな小動物たちを描いた。"}
            />
          }
        />
        <hr className="boundary-line" />
        <WorksItems
          icon={<SiAdobeaftereffects className="icon" />}
          label={"Lottie :"}
          contents={
            <WorksLottie
              title={"Star!!"}
              lottie={Star}
              comment={
                "CSSでもやろうと思えばできるかもしれないが、そこに工数をかけるよりAEで作った方が綺麗にできるし何より早い。"
              }
            />
          }
          contents2={
            <WorksLottie
              title={"Rolling-Ball"}
              lottie={Rolling}
              comment={
                "CSSでは表現が難しいこのようなアニメーションもLottieなら簡単に実装することができる。"
              }
            />
          }
        />
        <ScrollToTop smooth />
      </main>
    </div>
  );
};

export default Works;
