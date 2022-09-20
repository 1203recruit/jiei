import React from "react";

// 文字列を改行コードで分割して改行タグに置換
const lbToBr = (cmt) => {
  return (
      cmt.split(/(\n)/g).map(t => (t === '\n')?<br/>:t)
  )
}

const WorksIllust = (props) => {
  return (
    <div className="works-box normal-text">
      <div className="works-item-1">
        <div className="works-title-1">
          <p>{props.title}</p>
        </div>
        <div className="works-image">
          <img src={props.IllustImage} alt={props.title} className="illust-image" />
        </div>
        <div className="works-comment">
          <p>{lbToBr(props.comment)}</p>
        </div>
      </div>
    </div>
  );
};

export default WorksIllust;
