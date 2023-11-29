import React, { useState } from "react";
import { BiShareAlt, BiLocationPlus } from "react-icons/bi";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";

const Description = ({ sectionRef }) => {
  const [showReadMore, setShowReadMore] = useState(true);
  const setDescriptionLength = (str) => {
    return showReadMore ? str.substring(0, 300) : str.substring();
  };
  const text = `Situated in Gurgaon at Sector 42, The Aralias is a residential
  development launched by DLF. This project is under construction with
  possession scheduled in possession on Oct 09. This project provides a
  vast range of amenities including Club House, Car Parking, Others,
  Children's play area, Gymnasium. Prominent suburbs of Gurgaon are close
  by and with several schools, hospitals, banks and offices situated in
  the proximity, the project is a preferred choice for home seekers.`;
  return (
    <section ref={sectionRef} className="project-description" id="AboutProject">
      {/* <div className="project-section-title">
        <h4>About DLF The Aralias</h4>
      </div> */}

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

      <p>{setDescriptionLength(text)}</p>
      <button
        onClick={() => {
          setShowReadMore(!showReadMore);
        }}
      >
        {showReadMore ? "Show More.." : "..Show Less"}
      </button>
    </section>
  );
};

export default Description;
