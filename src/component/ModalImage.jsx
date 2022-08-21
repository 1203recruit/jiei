import React from "react";
import PCImage from "../img//PCImage.png";
import PhoneImage from "../img/PhoneImage.png";

const ModalImage = () => {
  return (
    <div className="works-item-1">
      <div className="works-image">
        <img src={PCImage} alt="pc-site-title" className="pc-image" />
        <img src={PhoneImage} alt="phone-site-title" className="phone-image" />
      </div>
    </div>
  );
};

export default ModalImage;
