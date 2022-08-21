import React from "react";
import { enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

const Modal = (props) => {
  const closeModal = () => {
    props.setShowModal(false);
  };

  return (
    <>
      {props.showFlag ? (
        <div
          className="modal-overlay"
          onClick={() => {
            closeModal();
            enableBodyScroll("ModalImag");
            clearAllBodyScrollLocks("ModalImag");
          }}
        >
          <div className="modal-content">
            <>{props.element}</>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
