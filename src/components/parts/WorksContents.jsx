import React from "react";
import WorksWebSite from "../parts/WorksWebSIte";

const WorksIllust = (props) => {
  return (
    <div className="contents" id="webSite">
      <h2 className="head-line2">
        <FaDesktop className="icon" />
        Web site :
      </h2>
      <WorksWebSite
        title="Jiei（当サイト）"
        comment="できるだけシンプルになるよう使用色を減らした（Reactで作成）"
      />
      <WorksWebSite
        title="Title2"
        comment="Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam, incidunt?"
      />
      <WorksWebSite
        title="Title3"
        comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptatem, maxime velit obcaecati deleniti animi!"
      />
    </div>
  );
};

export default WorksIllust;
