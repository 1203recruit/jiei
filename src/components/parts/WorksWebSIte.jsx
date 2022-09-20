import React from "react";

// 文字列を改行コードで分割して改行タグに置換
const lbToBr = (cmt) => {
  return cmt.split(/(\n)/g).map((t) => (t === "\n" ? <br /> : t));
};

const WorksWebSIte = (props) => {
  return (
    <div className="works-box normal-text">
      <div className="works-item-1">
        <div className="works-title-1">
          <p>{props.title}</p>
        </div>
        <div className="works-item-1">
          <div className="works-image-box">
            <img
              src={props.PCImage}
              alt={props.title}
              className="pc-image image-shadow"
            />
            <img
              src={props.PhoneImage}
              alt={props.title}
              className="phone-image image-shadow"
            />
          </div>
        </div>
        <div className="works-comment">
          <p>{lbToBr(props.comment)}</p>
        </div>
      </div>
    </div>
  );
};

export default WorksWebSIte;
