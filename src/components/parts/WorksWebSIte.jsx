import React from "react";
import { FiExternalLink } from "react-icons/fi";

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
              src={props.pcImage}
              alt={props.title}
              className="pc-image image-shadow"
            />
            <img
              src={props.phoneImage}
              alt={props.title}
              className="phone-image image-shadow"
            />
          </div>
        </div>
        <div className="works-comment">
          <p>
            {lbToBr(props.comment)}
            <a href={props.href} target="blank" className="orange-link">
              {props.linkWord}
              <FiExternalLink />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorksWebSIte;
