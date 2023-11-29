import React, { useState } from "react";
import { FaSwimmingPool } from "react-icons/fa";

const Amenities = ({ sectionRef }) => {
  const [showAll, setShowAll] = useState(true);
  const [data, setData] = useState(Array.from(Array(50).keys()));

  const renderAmenities = (data) => {
    if (showAll) {
      return (
        <>
          {data.slice(0, 11).map((item, index) => (
            <li key={index}>
              <span className="icon">
                <FaSwimmingPool />
              </span>
              <p>swimming pool</p>
            </li>
          ))}
          <li className="amenities-buttons" onClick={() => setShowAll(false)}>
            <p>Show All</p>
          </li>
        </>
      );
    } else {
      return (
        <>
          {data.map((item, index) => (
            <li key={index}>
              <span className="icon">
                <FaSwimmingPool />
              </span>
              <p>swimming pool</p>
            </li>
          ))}
          <li className="amenities-buttons" onClick={() => setShowAll(true)}>
            <p>Less</p>
          </li>
        </>
      );
    }
  };

  return (
    <section className="project-amenities" id="amenities" ref={sectionRef}>
      <div className="project-section-title">
        <h4>DLF The Aralias Amenities</h4>
      </div>
      <ul className="amenities-list">{renderAmenities(data)}</ul>
    </section>
  );
};

export default Amenities;
