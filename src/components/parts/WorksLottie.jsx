import React from "react";
import Lottie from "lottie-react";

// 文字列を改行コードで分割して改行タグに置換
const lbToBr = (cmt) => {
  return cmt.split(/(\n)/g).map((t) => (t === "\n" ? <br /> : t));
};

const WorksLottie = (props) => {
  return (
    <div className="works-box normal-text">
      <div className="works-item-2">
        <div className="works-image-box">
          <Lottie animationData={props.lottie} loop={true} />
        </div>
        <div className="works-flex-2">
          <div className="works-title-2">
            <p>{props.title}</p>
          </div>
          <div className="works-comment">
            <p>{lbToBr(props.comment)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksLottie;
