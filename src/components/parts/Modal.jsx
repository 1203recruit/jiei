import React from "react";
import ModalImage from "../parts/ModalImage";

const Modal = (props) => {
  const closeModal = () => {
    props.setShowModal(false);

    if (true) {
      document.body.style.overflow = "";
    }
  };

  return (
    <>
      <div
        className="modal-overlay"
        onClick={() => {
          closeModal();
        }}
      >
        <div className="modal-content">
          <ModalImage />
        </div>
      </div>
    </>
  );
};

export default Modal;
