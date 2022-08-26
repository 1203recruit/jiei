import React, { useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import ModalImage from "../parts/ModalImage";
import Modal from "../parts/Modal";
import LogoImage from "../../img/LogoImage.png";
import IllustImage from "../../img/IllustImage.png";
import { disableBodyScroll } from "body-scroll-lock";
import { MdWork } from "react-icons/md";
import { IoDesktop } from "react-icons/io5";
import { AiFillPicture } from "react-icons/ai";
import { SiAdobeillustrator, SiAdobeaftereffects } from "react-icons/si";

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
        <h1 className="head-line1"><MdWork className="icon" />Works</h1>
        <div className="contents" id="webSite">
          <h2 className="head-line2"><IoDesktop className="icon" />Web site :</h2>
          <div className="works-box normal-text">
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
                <p>できるだけシンプルになるよう使用色を減らした（Reactで作成）</p>
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
          <div className="works-box normal-text">
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
          <h2 className="head-line2"><SiAdobeillustrator className="icon" />Logo :</h2>
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
                  <p>TextTextTextTextTextTextTextTextTextTextTex</p>
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
                  <p>TextTextTextTextTextTextTextTextTextTextTex</p>
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
                  <p>TextTextTextTextTextTextTextTextTextTextTex</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="boundary-line" />

        <div className="contents" id="illust">
          <h2 className="head-line2"><AiFillPicture className="icon" />Illust :</h2>
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
                  TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
                </p>
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
                  TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
                </p>
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
                  TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="boundary-line" />

        <div className="contents" id="lottie">
          <h2 className="head-line2"><SiAdobeaftereffects className="icon" />Lottie :</h2>
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
                  <p>TextTextTextTextTextTextTextTextTextTextTex</p>
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
