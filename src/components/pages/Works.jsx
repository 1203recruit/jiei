import React, { useState } from "react";
import ModalImage from "../parts/ModalImage";
import Modal from "../parts/Modal";
import LogoImage from "../../img/LogoImage.png";
import IllustImage from "../../img/IllustImage.png";
import { FaSuitcase, FaDesktop, FaPencilAlt } from "react-icons/fa";
import { SiAdobeillustrator, SiAdobeaftereffects } from "react-icons/si";
import ScrollToTop from "react-scroll-to-top";

const Works = () => {
  // Modal
  const [showModal, setShowModal] = useState(false);
  const ShowModal = () => {
    setShowModal(!showModal);

    if (true) {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div className="container" id="top">
      <Modal onClick={ShowModal} />
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
          <div className="works-box normal-text">
            <div className="works-item-1">
              <div className="works-title-1">
                <p>Jiei（当サイト）</p>
              </div>
              <div
                onClick={() => {
                  ShowModal();
                }}
              >
                <ModalImage />
              </div>
              <div className="works-comment">
                <p>Comment:</p>
                <p>
                  できるだけシンプルになるよう使用色を減らした（Reactで作成）
                </p>
              </div>
            </div>
          </div>
          <div className="works-box normal-text">
            <div className="works-item-1">
              <div className="works-title-1">
                <p>Title</p>
              </div>
              <div
                onClick={() => {
                  ShowModal();
                }}
              >
                <ModalImage />
              </div>
              <div className="works-comment">
                <p>Comment:</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, incidunt?
                </p>
              </div>
            </div>
          </div>
          <div className="works-box normal-text">
            <div className="works-item-1">
              <div className="works-title-1">
                <p>Title</p>
              </div>
              <div
                onClick={() => {
                  ShowModal();
                }}
              >
                <ModalImage />
              </div>
              <div className="works-comment">
                <p>Comment:</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  saepe dolorum sit quidem officia quas delectus alias nam velit
                  dolores.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="boundary-line" />

        <div className="contents" id="logo">
          <h2 className="head-line2">
            <SiAdobeillustrator className="icon" />
            Logo :
          </h2>
          <div className="works-box normal-text">
            <div className="works-item-2">
              <div className="works-image">
                <img src={LogoImage} alt="logo-title" className="logo-image" />
              </div>
              <div className="works-flex-2">
                <div className="works-title-2">
                  <p>Title</p>
                </div>
                <></>
                <div className="works-comment">
                  <p>Comment:</p>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="works-box normal-text">
            <div className="works-item-2">
              <div className="works-image">
                <img src={LogoImage} alt="logo-title" className="logo-image" />
              </div>
              <div className="works-flex-2">
                <div className="works-title-2">
                  <p>Title</p>
                </div>
                <div className="works-comment">
                  <p>Comment:</p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="works-box normal-text">
            <div className="works-item-2">
              <div className="works-image">
                <img src={LogoImage} alt="logo-title" className="logo-image" />
              </div>
              <div className="works-flex-2">
                <div className="works-title-2">
                  <p>Title</p>
                </div>
                <div className="works-comment">
                  <p>Comment:</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, porro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="boundary-line" />

        <div className="contents" id="illust">
          <h2 className="head-line2">
            <FaPencilAlt className="icon" />
            Illust :
          </h2>
          <div className="works-box normal-text">
            <div className="works-item-1">
              <div className="works-title-1">
                <p>Title</p>
              </div>
              <div className="works-image">
                <img
                  src={IllustImage}
                  alt="illust-title"
                  className="pc-image"
                />
              </div>
              <div className="works-comment">
                <p>Comment:</p>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </div>
          </div>
          <div className="works-box normal-text">
            <div className="works-item-1">
              <div className="works-title-1">
                <p>Title</p>
              </div>
              <div className="works-image">
                <img
                  src={IllustImage}
                  alt="illust-title"
                  className="pc-image"
                />
              </div>
              <div className="works-comment">
                <p>Comment:</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </div>
            </div>
          </div>
          <div className="works-box normal-text">
            <div className="works-item-1">
              <div className="works-title-1">
                <p>Title</p>
              </div>
              <div className="works-image">
                <img
                  src={IllustImage}
                  alt="illust-title"
                  className="pc-image"
                />
              </div>
              <div className="works-comment">
                <p>Comment:</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, delectus eius.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="boundary-line" />

        <div className="contents" id="lottie">
          <h2 className="head-line2">
            <SiAdobeaftereffects className="icon" />
            Lottie :
          </h2>
          <div className="works-box normal-text">
            <div className="works-item-2">
              <div className="works-image">
                <img
                  src={LogoImage}
                  alt="lottie-title"
                  className="logo-image"
                />
              </div>
              <div className="works-flex-2">
                <div className="works-title-2">
                  <p>Title</p>
                </div>
                <div className="works-comment">
                  <p>Comment:</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="works-box normal-text">
            <div className="works-item-2">
              <div className="works-image">
                <img
                  src={LogoImage}
                  alt="lottie-title"
                  className="logo-image"
                />
              </div>
              <div className="works-flex-2">
                <div className="works-title-2">
                  <p>Title</p>
                </div>
                <div className="works-comment">
                  <p>Comment:</p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Qui nisi quos impedit commodi!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollToTop smooth />
      </div>
    </div>
  );
};

export default Works;
