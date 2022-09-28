import React from "react";

// 文字列を改行コードで分割して改行タグに置換
const lbToBr = (cmt) => {
  return cmt.split(/(\n)/g).map((t) => (t === "\n" ? <br /> : t));
};

const AboutItemsList = (props) => {
  return (
    <div className="about-item-list">
      <div className="about-item-L">{lbToBr(props.subLabel)}</div>
      <div className="about-item-R">
        <p>{lbToBr(props.contents)}</p>
      </div>
    </div>
  );
};

export default AboutItemsList;
