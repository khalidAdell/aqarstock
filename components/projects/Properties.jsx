import React, { useEffect, useState } from "react";
import DataPagination from "./pagination";

const Properties = ({ sectionRef }) => {
  const [activeTab, setActiveTab] = useState("buy");
  const [data, setData] = useState([
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" },
    { id: 6, name: "6" },
    { id: 7, name: "7" },
    { id: 8, name: "8" },
    { id: 9, name: "9" },
    { id: 10, name: "10" },
    { id: 11, name: "11" },
    { id: 12, name: "12" },
  ]);
  const [currentData, setCurrentData] = useState(data);

  return (
    <section
      className="project-properties"
      ref={sectionRef}
      id="ProjectProperties"
    >
      <div className="project-section-title">
        <h4>Properties in this Project</h4>
      </div>
      <div className="project-properties-content">
        <div className="project-properties-tab">
          <div
            onClick={() => setActiveTab("buy")}
            className={`ppt-item ${activeTab === "buy" ? "active" : ""}`}
          >
            <span>Buy</span>
          </div>
          <div
            onClick={() => setActiveTab("rent")}
            className={`ppt-item ${activeTab === "rent" ? "active" : ""}`}
          >
            <span>Rent</span>
          </div>
        </div>
        {activeTab === "buy" && (
          <>
            <div className="project-properties-list">
              {currentData.length
                ? currentData.map((item, index) => (
                    <div
                      className="project-full-width-card unit-full-width-card"
                      key={index}
                    >
                      <div className="tileBox tileNo_1" id="prop_155821">
                        <div className="tileFigure mobile-only">
                          <img
                            src="/img/property/3.jpg"
                            alt="Sowparnika Indradhanush Flagship"
                            className="img-responsive"
                          />
                          <div className="tagTypeBox">
                            <div
                              className="tagType galleryPopUpOpen videoBoxListing"
                              id="videoBoxListing"
                            >
                              <em className="icon ico-video"></em>
                              <span>Video</span>
                            </div>
                          </div>
                          <li className="tileTagBox">
                            <em className="icon ico-exclusive"></em>
                            <em className="icon ico-assured"></em>
                          </li>
                        </div>
                        <div className="tileShareBox">
                          <div className="shortListBox shortlistcontainerlink DSE_NewProjects_D20">
                            <em className="icon ico-heart"></em>
                          </div>
                          <div className="shareBox">
                            <em className="icon ico-share"></em>
                            <ul className="shareList">
                              <li>
                                <em className="icon-facebook"></em> Facebook
                              </li>
                              <li>
                                <em className="icon-linkedin"></em> Linkedin
                              </li>
                              <li>
                                <em className="icon-twitter"></em> Twitter
                              </li>
                              <li>
                                <em className="icon-whatsapp"></em> Whatsapp
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="tilebody">
                          <div className="tileFlexBox">
                            <div className="tileFigure desktop-only">
                              <img
                                src="/img/property/3.jpg"
                                alt="Sowparnika Indradhanush Flagship"
                                className="img-responsive"
                              />
                              <div className="tagTypeBox">
                                <div
                                  className="tagType galleryPopUpOpen videoBoxListing"
                                  id="videoBoxListing"
                                >
                                  <em className="icon ico-video"></em>
                                  <span>Video</span>
                                </div>
                              </div>
                              <li className="tileTagBox">
                                <em className="icon ico-exclusive"></em>
                                <em className="icon ico-assured"></em>
                              </li>
                            </div>
                            <div className="tileFigureBody">
                              <a
                                target="_blank"
                                href="#"
                                className="DSE_NewProjects_D19"
                              >
                                <h2 className="projectName">
                                  Sowparnika Indradhanush
                                </h2>
                              </a>
                              <span className="locationName">
                                Hoskote, Bangalore
                              </span>
                              <div className="priceWithStar">
                                <div className="price DSE_NewProjects_D19">
                                  ₹ 30.00 Lac - 66.01 Lac
                                </div>
                              </div>
                              <div className="shortInfoBox">
                                <div className="shortInfoSec">
                                  <em className="icon ico-project-size"></em>
                                  <div className="shortInfoBody">
                                    <label className="label">
                                      Project Size
                                    </label>
                                    <ul className="value">
                                      <li>930 units </li>
                                      <li>5.5 Acres</li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="shortInfoSec">
                                  <em className="icon ico-config"></em>
                                  <div className="shortInfoBody">
                                    <label className="label">
                                      Configurations
                                    </label>
                                    <ul className="value">
                                      <li>1, 2, 3 BHK</li>
                                      <li>Flat</li>
                                      <li>519 - 1142 Sq. Ft. (Saleable)</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="ctaBox">
                                <a
                                  className="btn btn-default"
                                  target="_blank"
                                  href="#"
                                >
                                  Details
                                </a>
                                <button className="btn btn-primary">
                                  <em className="icon ico-call"></em> Get a Call
                                  Back
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
            <div className="pagination">
              <ul className="pagination-list">
                <DataPagination
                  data={data}
                  setCurrentData={setCurrentData}
                  sectionRef={sectionRef}
                />
              </ul>
            </div>
          </>
        )}
        {activeTab === "rent" && (
          <>
            <div className="project-properties-list">
              {currentData.length
                ? currentData.map((item, index) => (
                    <div
                      className="project-full-width-card unit-full-width-card"
                      key={index}
                    >
                      <div className="tileBox tileNo_1" id="prop_155821">
                        <div className="tileFigure mobile-only">
                          <img
                            src="/img/property/3.jpg"
                            alt="Sowparnika Indradhanush Flagship"
                            className="img-responsive"
                          />
                          <div className="tagTypeBox">
                            <div
                              className="tagType galleryPopUpOpen videoBoxListing"
                              id="videoBoxListing"
                            >
                              <em className="icon ico-video"></em>
                              <span>Video</span>
                            </div>
                          </div>
                          <li className="tileTagBox">
                            <em className="icon ico-exclusive"></em>
                            <em className="icon ico-assured"></em>
                          </li>
                        </div>
                        <div className="tileShareBox">
                          <div className="shortListBox shortlistcontainerlink DSE_NewProjects_D20">
                            <em className="icon ico-heart"></em>
                          </div>
                          <div className="shareBox">
                            <em className="icon ico-share"></em>
                            <ul className="shareList">
                              <li>
                                <em className="icon-facebook"></em> Facebook
                              </li>
                              <li>
                                <em className="icon-linkedin"></em> Linkedin
                              </li>
                              <li>
                                <em className="icon-twitter"></em> Twitter
                              </li>
                              <li>
                                <em className="icon-whatsapp"></em> Whatsapp
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="tilebody">
                          <div className="tileFlexBox">
                            <div className="tileFigure desktop-only">
                              <img
                                src="/img/property/3.jpg"
                                alt="Sowparnika Indradhanush Flagship"
                                className="img-responsive"
                              />
                              <div className="tagTypeBox">
                                <div
                                  className="tagType galleryPopUpOpen videoBoxListing"
                                  id="videoBoxListing"
                                >
                                  <em className="icon ico-video"></em>
                                  <span>Video</span>
                                </div>
                              </div>
                              <li className="tileTagBox">
                                <em className="icon ico-exclusive"></em>
                                <em className="icon ico-assured"></em>
                              </li>
                            </div>
                            <div className="tileFigureBody">
                              <a
                                target="_blank"
                                href="#"
                                className="DSE_NewProjects_D19"
                              >
                                <h2 className="projectName">
                                  Sowparnika Indradhanush
                                </h2>
                              </a>
                              <span className="locationName">
                                Hoskote, Bangalore
                              </span>
                              <div className="priceWithStar">
                                <div className="price DSE_NewProjects_D19">
                                  ₹ 30.00 Lac - 66.01 Lac
                                </div>
                              </div>
                              <div className="shortInfoBox">
                                <div className="shortInfoSec">
                                  <em className="icon ico-project-size"></em>
                                  <div className="shortInfoBody">
                                    <label className="label">
                                      Project Size
                                    </label>
                                    <ul className="value">
                                      <li>930 units </li>
                                      <li>5.5 Acres</li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="shortInfoSec">
                                  <em className="icon ico-config"></em>
                                  <div className="shortInfoBody">
                                    <label className="label">
                                      Configurations
                                    </label>
                                    <ul className="value">
                                      <li>1, 2, 3 BHK</li>
                                      <li>Flat</li>
                                      <li>519 - 1142 Sq. Ft. (Saleable)</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="ctaBox">
                                <a
                                  className="btn btn-default"
                                  target="_blank"
                                  href="#"
                                >
                                  Details
                                </a>
                                <button className="btn btn-primary">
                                  <em className="icon ico-call"></em> Get a Call
                                  Back
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
            <div className="pagination">
              <ul className="pagination-list">
                <DataPagination
                  data={data}
                  setCurrentData={setCurrentData}
                  sectionRef={sectionRef}
                />
              </ul>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Properties;
