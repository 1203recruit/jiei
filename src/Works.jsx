import React from "react";
import PCImage from "./img/PCImage.png";
import PhoneImage from "./img/PhoneImage.png";
import LogoImage from "./img/LogoImage.png";
import IllustImage from "./img/IllustImage.png";
import ScrollToTop from "react-scroll-to-top";

const Works = () => {
  return (
    <div className="wrapper2" id="top">
      <div className="container">
        <div className="main">
          <h1 className="head-line1">Works</h1>

          <div className="contents" id="webSite">
            <h2 className="head-line2">Web site :</h2>
            <div className="border-box normal-text">
              <div className="works-item-1">
                <div className="works-title-1">
                  <p>Jiei（当サイト）</p>
                </div>
                <div className="works-image">
                  <img src={PCImage} className="pc-image" />
                  <img src={PhoneImage} className="phone-image" />
                </div>
                <div className="works-comment">
                  <p>Comment:</p>
                  <p>できるだけシンプルになるよう色は極力減らした</p>
                </div>
              </div>
            </div>
            <div className="border-box normal-text">
              <div className="works-item-1">
                <div className="works-title-1">
                  <p>ちくわ専門店（架空のECサイト）</p>
                </div>
                <div className="works-image">
                  <img src={PCImage} className="pc-image" />
                  <img src={PhoneImage} className="phone-image" />
                </div>
                <div className="works-comment">
                  <p>Comment:</p>
                  <p>
                    ちくわの購買欲をあげるためにちくわにはミスマッチな暖色を刺し色として採用
                  </p>
                </div>
              </div>
            </div>
            <div className="border-box normal-text">
              <div className="works-item-1">
                <div className="works-title-1">
                  <p>KINOKO FESTIVAL（架空のLP）</p>
                </div>
                <div className="works-image">
                  <img src={PCImage} className="pc-image" />
                  <img src={PhoneImage} className="phone-image" />
                </div>
                <div className="works-comment">
                  <p>Comment:</p>
                  <p>
                    自然をイメージの緑系ときのこの毒々しいカラフルな色を添えてキャンペーン感を
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="boundary-line" />

          <div className="contents" id="logo">
            <h2 className="head-line2">Logo :</h2>
            <div className="border-box normal-text">
              <div className="works-item-2">
                <div className="works-image">
                  <img src={LogoImage} className="logo-image" />
                </div>
                <div className="works-flex-2">
                  <div className="works-title-2">
                    <p>炎</p>
                  </div>
                  <div className="works-comment">
                    <p>Comment:</p>
                    <p>ポップで動きのある感じに</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-box normal-text">
              <div className="works-item-2">
                <div className="works-image">
                  <img src={LogoImage} className="logo-image" />
                </div>
                <div className="works-flex-2">
                  <div className="works-title-2">
                    <p>Title</p>
                  </div>
                  <div className="works-comment">
                    <p>Comment:</p>
                    <p>TextTextTextTextTextTextTextTextTextTextTex</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-box normal-text">
              <div className="works-item-2">
                <div className="works-image">
                  <img src={LogoImage} className="logo-image" />
                </div>
                <div className="works-flex-2">
                  <div className="works-title-2">
                    <p>Title</p>
                  </div>
                  <div className="works-comment">
                    <p>Comment:</p>
                    <p>TextTextTextTextTextTextTextTextTextTextTex</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="boundary-line" />

          <div className="contents" id="illust">
            <h2 className="head-line2">Illust :</h2>
            <div className="border-box normal-text">
              <div className="works-item-1">
                <div className="works-title-1">
                  <p>Sky</p>
                </div>
                <div className="works-image">
                  <img src={IllustImage} className="pc-image" />
                </div>
                <div className="works-comment">
                  <p>Comment:</p>
                  <p>入道雲はエモい</p>
                </div>
              </div>
            </div>
            <div className="border-box normal-text">
              <div className="works-item-1">
                <div className="works-title-1">
                  <p>Chocolate</p>
                </div>
                <div className="works-image">
                  <img src={IllustImage} className="pc-image" />
                </div>
                <div className="works-comment">
                  <p>Comment:</p>
                  <p>カートゥーンを意識</p>
                </div>
              </div>
            </div>
            <div className="border-box normal-text">
              <div className="works-item-1">
                <div className="works-title-1">
                  <p>Original_Girls</p>
                </div>
                <div className="works-image">
                  <img src={IllustImage} className="pc-image" />
                </div>
                <div className="works-comment">
                  <p>Comment:</p>
                  <p>Kawaii</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="boundary-line" />

          <div className="contents" id="lottie">
            <h2 className="head-line2">Lottie :</h2>
            <div className="border-box normal-text">
              <div className="works-item-2">
                <div className="works-image">
                  <img src={LogoImage} className="logo-image" />
                </div>
                <div className="works-flex-2">
                  <div className="works-title-2">
                    <p>☆　⇒　★</p>
                  </div>
                  <div className="works-comment">
                    <p>Comment:（要クリック）</p>
                    <p>星に色がつくアニメーション</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-box normal-text">
              <div className="works-item-2">
                <div className="works-image">
                  <img src={LogoImage} className="logo-image" />
                </div>
                <div className="works-flex-2">
                  <div className="works-title-2">
                    <p>！</p>
                  </div>
                  <div className="works-comment">
                    <p>Comment:（自動再生）</p>
                    <p>注意喚起を促すモーダル画面での使用を想定</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ScrollToTop smooth color="#faae0b" />
        </div>
      </div>
    </div>
  );
};

export default Works;
