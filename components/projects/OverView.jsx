import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShareAlt, BiShower, BiWifi2 } from "react-icons/bi";
import { FaSnowflake, FaSwimmingPool } from "react-icons/fa";

const OverView = ({ sectionRef }) => {
  return (
    <section className="overview-section" ref={sectionRef} id="overview">
      <div className="project-section-title">
        <h4>DLF The Aralias Overview</h4>
      </div>
      <ul className="feats-list">
        <li>
          <span className="icon">
            <BiShower />
          </span>
          <div className="feat-box">
            <b>Sizes</b>
            <span>5575.00 sq.ft. - 6000.00 sq.ft.</span>
          </div>
        </li>
        <li>
          <span className="icon">
            <FaSnowflake />
          </span>
          <div className="feat-box">
            <b>Sizes</b>
            <span>5575.00 sq.ft. - 6000.00 sq.ft.</span>
          </div>
        </li>
        <li>
          <span className="icon">
            <FaSwimmingPool />
          </span>
          <div className="feat-box">
            <b>Sizes</b>
            <span>5575.00 sq.ft. - 6000.00 sq.ft.</span>
          </div>
        </li>
        <li>
          <span className="icon">
            <BiWifi2 />
          </span>
          <div className="feat-box">
            <b>Sizes</b>
            <span>5575.00 sq.ft. - 6000.00 sq.ft.</span>
          </div>
        </li>
        <li>
          <span className="icon">
            <FaSnowflake />
          </span>
          <div className="feat-box">
            <b>Sizes</b>
            <span>5575.00 sq.ft. - 6000.00 sq.ft.</span>
          </div>
        </li>
        <li>
          <span className="icon">
            <FaSnowflake />
          </span>
          <div className="feat-box">
            <b>Sizes</b>
            <span>5575.00 sq.ft. - 6000.00 sq.ft.</span>
          </div>
        </li>
      </ul>
      {/* <div className="project-section-footer">
        <button className="btn">
          <BiShareAlt />
          <span>Share</span>
        </button>
        <button className="btn">
          <span>Ask For Details</span>
        </button>
        <button className="btn">
          <AiOutlineHeart />
          <span>Save</span>
        </button>
      </div> */}
    </section>
  );
};

export default OverView;
