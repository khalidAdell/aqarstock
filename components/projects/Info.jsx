import React from "react";
import { BiShareAlt, BiLocationPlus, BiBed, BiBath } from "react-icons/bi";
import { AiOutlineHeart, AiFillStar, AiOutlineUser } from "react-icons/ai";
import { MdOutlineBedroomParent } from "react-icons/md";

const Info = ({ sectionRef }) => {
  return (
    <section className="project-info" ref={sectionRef} id="AboutProject">
      <div className="project-info-content">
        <div className="project-shorts">
          <button className="btn">
            <div className="icon">
              <BiShareAlt />
            </div>
            <span>Share</span>
          </button>
          <button className="btn">
            <div className="icon">
              <AiOutlineHeart />
            </div>
            <span>Save</span>
          </button>
        </div>
        <h1 className="project-title">Beach House in Collingwood</h1>

        <div className="project-review-rate-and-location">
          <div className="review-rate">
            <AiFillStar />
            <span>4.3 (112)</span>
            <div className="add-review">
              <span>add a review</span>
            </div>
          </div>
          <div className="project-location">
            <BiLocationPlus />
            <span>Tokyo, Jappan</span>
          </div>
        </div>
      </div>
      {/* <div className="project-info-footer">
        <ul className="project-global-info-list">
          <li>
            <div className="icon">
              <AiOutlineUser />
            </div>
            <span>6 guests</span>
          </li>
          <li>
            <div className="icon">
              <BiBed />
            </div>
            <span>6 beds</span>
          </li>
          <li>
            <div className="icon">
              <BiBath />
            </div>
            <span>3 baths</span>
          </li>
          <li>
            <div className="icon">
              <MdOutlineBedroomParent />
            </div>
            <span>2 bedrooms</span>
          </li>
        </ul>
      </div> */}
    </section>
  );
};

export default Info;
