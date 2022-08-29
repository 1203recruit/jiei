import React from "react";
import IllustImage from "../../img/IllustImage.png";

const WorksIllust = (props) => {
  return (
    <div className="works-box normal-text">
      <div className="works-item-1">
        <div className="works-title-1">
          <p>{props.title}</p>
        </div>
        <div className="works-image">
          <img src={IllustImage} alt="illust-title" className="pc-image" />
        </div>
        <div className="works-comment">
          <p>Comment:</p>
          <p>{props.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default WorksIllust;
