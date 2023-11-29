import React, { useState } from "react";

const Specifications = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <section className="project-specifications">
      <div className="project-section-title">
        <h4>DLF The Aralias Specifications</h4>
      </div>
      <div className="spec-tabs">
        <ul>
          <li
            className={activeTab === "all" ? "active" : ""}
            onClick={() => setActiveTab("all")}
          >
            All
          </li>
          <li
            className={activeTab === "floor" ? "active" : ""}
            onClick={() => setActiveTab("floor")}
          >
            Floor & Counter
          </li>
          <li
            className={activeTab === "fitting" ? "active" : ""}
            onClick={() => setActiveTab("fitting")}
          >
            {" "}
            Fitting
          </li>
          <li
            className={activeTab === "wall" ? "active" : ""}
            onClick={() => setActiveTab("wall")}
          >
            Wall & Ceiling
          </li>
        </ul>
      </div>
      <div className="spec-content">
        {activeTab === "all" && (
          <div className="active-tab">
            <div className="spec-box">
              <h6>Electrical</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>Electrical</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>Electrical</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>Electrical</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>Electrical</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>Electrical</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>Electrical</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>Electrical</h6>
              <span>Concealed copper wiring</span>
            </div>
          </div>
        )}
        {activeTab === "floor" && (
          <div className="active-tab">
            <div className="spec-box">
              <h6>floor</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>floor</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>floor</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>floor</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>floor</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>floor</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>floor</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>floor</h6>
              <span>Concealed copper wiring</span>
            </div>
          </div>
        )}
        {activeTab === "fitting" && (
          <div className="active-tab">
            <div className="spec-box">
              <h6>Living/Dining</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>Living/Dining</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>Living/Dining</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>Living/Dining</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>Living/Dining</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>Living/Dining</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>Living/Dining</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>Living/Dining</h6>
              <span>Concealed copper wiring</span>
            </div>
          </div>
        )}
        {activeTab === "wall" && (
          <div className="active-tab">
            <div className="spec-box">
              <h6>Exterior</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>Exterior</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>Exterior</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>Exterior</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>Exterior</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>Exterior</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>Exterior</h6>
              <span>Concealed copper wiring</span>
            </div>
            <div className="spec-box">
              <h6>Exterior</h6>
              <span>Concealed copper wiring</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Specifications;
