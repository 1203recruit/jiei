import React from "react";
import AboutItemsWrapper from "./AboutItemsWrapper";

const AboutItems = (props) => {
  return (
    <AboutItemsWrapper>
      <div className="about-item-list">
        <h2 className="about-item-L head-line-2-sp">
          <span className="orange-border">{props.label}</span>
        </h2>
        <AboutItemsWrapper>
          {props.children}
        </AboutItemsWrapper>
      </div>
    </AboutItemsWrapper>
  );
};

export default AboutItems;
