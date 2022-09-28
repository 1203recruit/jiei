import React from "react";

const AboutItemsWrapper = (props) => {
  return (
    <div className="about-item-wrapper">
      {props.children}
    </div>
  );
};

export default AboutItemsWrapper;
