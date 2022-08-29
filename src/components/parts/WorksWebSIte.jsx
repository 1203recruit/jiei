import React from "react";
import PCImage from "../../img/PCImage.png";
import PhoneImage from "../../img/PhoneImage.png";

const WorksWebSIte = (props) => {
  return (
    <div className="works-box normal-text">
      <div className="works-item-1">
        <div className="works-title-1">
          <p>{props.title}</p>
        </div>
        <div className="works-item-1">
          <div className="works-image">
            <img src={PCImage} alt="pc-site-title" className="pc-image" />
            <img
              src={PhoneImage}
              alt="phone-site-title"
              className="phone-image"
            />
          </div>
        </div>
        <div className="works-comment">
          <p>Comment:</p>
          <p>{props.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default WorksWebSIte;
