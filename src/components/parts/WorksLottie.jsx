import React from "react";
import LottieImage from "../../img/LottieImage.png";

const WorksLottie = (props) => {
  return (
    <div className="works-box normal-text">
      <div className="works-item-2">
        <div className="works-image">
          <img src={LottieImage} alt="lottie-title" className="logo-image" />
        </div>
        <div className="works-flex-2">
          <div className="works-title-2">
            <p>{props.title}</p>
          </div>
          <div className="works-comment">
            <p>Comment:</p>
            <p>{props.comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksLottie;
