import React, { useState } from "react";

const FloorPlan = ({sectionRef}) => {
  const [firstTabsActive, setFirstTabsActive] = useState(4);
  const [secondTabsActive, setSecondTabsActive] = useState(6200);
  return (
    <section className="project-floor_plan-section" ref={sectionRef} id="floorPlan">
      <div className="project-section-title">
        <h4>DLF The Aralias Price & Floor Plan</h4>
      </div>
      <div className="floor-plan-content">
        <div className="fpc-tabs">
          <div
            className={`fpc-item ${firstTabsActive === 4 ? "active" : ""}`}
            onClick={() => setFirstTabsActive(4)}
          >
            <span>
              4 BHK <div>Apartment</div>
            </span>
          </div>
          <div
            className={`fpc-item ${firstTabsActive === 4.5 ? "active" : ""}`}
            onClick={() => setFirstTabsActive(4.5)}
          >
            <span>
              4.5 BHK <div>Apartment</div>
            </span>
          </div>
        </div>
        <div className="fpc-sec-tabs">
          <div
            className={`fpc-sec-item ${
              secondTabsActive === 6000 ? "active" : ""
            }`}
            onClick={() => setSecondTabsActive(6000)}
          >
            <span>6000.00 SQ.FT</span>
          </div>
          <div
            className={`fpc-sec-item ${
              secondTabsActive === 6200 ? "active" : ""
            }`}
            onClick={() => setSecondTabsActive(6200)}
          >
            <span>6200.00 SQ.FT</span>
          </div>
        </div>
        <div className="fpc-details">
          <div className="rig-di">
            <span>4.5 BHK</span>
            <p>Builtup Area : 5575.00 sq.ft at ₹6.5K per sq.ft</p>
          </div>
          <div className="lef-di">
            <span>₹ 24 Cr</span>
          </div>
        </div>

        <img src="/img/map-img.jpg" alt="" />

        {/* <div className="text-center mt-3">
          <button className="btn request-floor-plan-btn">
            Contact Sellers
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default FloorPlan;
