import React from "react";

const Modal = (props) => {
  const closeModal = () => {
    props.setShowModal(false);

    if (true) {
      document.body.style.overflow = "";
    }
  };

  return (
    <>
      {props.showFlag ? (
        <div
          className="modal-overlay"
          onClick={() => {
            closeModal();
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
