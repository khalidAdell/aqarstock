import React from "react";
import { BiImage } from "react-icons/bi";

const ImagesVideos = () => {
  return (
    <section className="project-images-and-videos">
      <div className="project-section-title">
        <h4>tour DLF the arallas Images & video</h4>
      </div>
      <div className="iavs-items">
        <div className="iav-box">
          <img src="/img/project-image.jpg" alt="project image" />
          <div className="iav-span">
            <div className="icon">
              <BiImage />
            </div>
            <span>see all project images</span>
          </div>
        </div>
        <div className="iav-box">
          <img src="/img/project-image.jpg" alt="project image" />
          <div className="iav-span">
            <div className="icon">
              <BiImage />
            </div>
            <span>see all project images</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagesVideos;
