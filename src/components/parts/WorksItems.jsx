import React from "react";

const AboutItems = (props) => {
  return (
    <>
      <article className="contents" id="webSite">
        <h2 className="head-line2">
          {props.icon}
          {props.label}
        </h2>
          {props.contents}
          {props.contents2}
      </article>
    </>
  );
};

export default AboutItems;
