import React from "react";

const HighLights = ({sectionRef}) => {
  return (
    <section className="highlights-section" id="highlights" ref={sectionRef}>
      <div className="project-section-title">
        <h4>Why DLF The Aralias?</h4>
      </div>
      <ul>
        <li>
          Club house, children play area, gated community, community hall and
          center are some of the prominent amenities
        </li>
        <li>Schools, hospitals, banks in close vicinity</li>
        <li>
          Air conditioned apartments with energy efficient vrv / vrf system
        </li>
        <li>Air cond lobby apartment entrance hall</li>
        <li>Amenities like ,swimming pool, gymnasium</li>
      </ul>
    </section>
  );
};

export default HighLights;
