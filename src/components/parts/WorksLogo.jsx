import React from "react";
import LogoImage from "../../img/LogoImage.png";

const WorksLogo = (props) => {
  return (
    <div className="works-box normal-text">
      <div className="works-item-2">
        <div className="works-image">
          <img src={LogoImage} alt="logo-title" className="logo-image" />
        </div>
        <div className="works-flex-2">
          <div className="works-title-2">
            <p>{props.title}</p>
          </div>
          <></>
          <div className="works-comment">
            <p>Comment:</p>
            <p>{props.comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksLogo;
