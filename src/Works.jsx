import React, { useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import ModalImage from "./component/ModalImage";
import Modal from "./Modal";
import LogoImage from "./img/LogoImage.png";
import IllustImage from "./img/IllustImage.png";
import { disableBodyScroll } from "body-scroll-lock";

const Works = () => {
  // Modal
  const [showModal, setShowModal] = useState(false);
  const ShowModal = () => {
    setShowModal(true);
  };

  return (
    <div className="container" id="top">
      <Modal
        showFlag={showModal}
        setShowModal={setShowModal}
        element={<ModalImage />}
      />
      <div className="main">
        <h1 className="head-line1">Works</h1>
        <div className="contents" id="webSite">
          <h2 className="head-line2">Web site :</h2>
          <div className="border-box normal-text">
            <div className="works-item-1">
              <div className="works-title-1">
                <p>Jiei（当サイト）</p>
              </div>
              <div
                onClick={() => {
                  ShowModal();
                  disableBodyScroll("ModalImag");
                }}
              >
                <ModalImage />
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
                <p>Title</p>
              </div>
              <div
                onClick={() => {
                  ShowModal();
                  disableBodyScroll("ModalImag");
                }}
              >
                <ModalImage />
              </div>
              <div className="works-comment">
                <p>Comment:</p>
                <p>
                  TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
                </p>
              </div>
            </div>
          </div>
          <div className="border-box normal-text">
            <div className="works-item-1">
              <div className="works-title-1">
                <p>Title</p>
              </div>
              <div
                onClick={() => {
                  ShowModal();
                  disableBodyScroll("ModalImag");
                }}
              >
                <ModalImage />
              </div>
              <div className="works-comment">
                <p>Comment:</p>
                <p>
                  TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
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
                <img src={LogoImage} alt="logo-title" className="logo-image" />
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
                <img src={LogoImage} alt="logo-title" className="logo-image" />
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
                <img src={LogoImage} alt="logo-title" className="logo-image" />
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
                  TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
                </p>
              </div>
            </div>
          </div>
          <div className="border-box normal-text">
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
                  TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
                </p>
              </div>
            </div>
          </div>
          <div className="border-box normal-text">
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
                  TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
                </p>
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
                  <p>TextTextTextTextTextTextTextTextTextTextTex</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-box normal-text">
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
                  <p>TextTextTextTextTextTextTextTextTextTextTex</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollToTop smooth color="#faae0b" />
      </div>
    </div>
  );
};

export default Works;
