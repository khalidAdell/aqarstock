import React, { useState } from "react";
import Properties from "./Properties";

const DeveloperInformation = ({ sectionRef }) => {
  const [activeTab, setActiveTab] = useState("ready-to-move");
  return (
    <section className="project-developer" ref={sectionRef} id="AboutDeveloper">
      <div className="project-section-title">
        <h4>DLF The Aralias Developer Information</h4>
      </div>
      <div className="developer-box">
        <div className="deve-auth-box">
          <img src="/img/client-image.jpg" alt="" />
          <div className="developer-info">
            <h5>DLF</h5>
            <div className="di-list">
              <div className="di-item">
                <span>1946</span>
                <p>Established In</p>
              </div>
              <div className="di-item">
                <span>146</span>
                <p>Total Projects</p>
              </div>
            </div>
          </div>
        </div>
        <p>
          At DLF, we take pride in our uncompromising integrity in customer
          engagement and quality assurance, and throughout our 73 years legacy
          we have made it our core mission to provide real-estate development,
          management, and investment services of the highest calibre.
        </p>
      </div>
      <div className="developer-projects-tabs">
        <span>Possession status:</span>
        <div className="dp-tabs">
          <ul>
            <li
              className={`${activeTab === "ready-to-move" ? "active" : ""}`}
              onClick={() => setActiveTab("ready-to-move")}
            >
              <span>Ready to Move</span>
            </li>
            <li
              className={`${activeTab === "in-3-years" ? "active" : ""}`}
              onClick={() => setActiveTab("in-3-years")}
            >
              <span>In 3 years</span>
            </li>
            <li
              className={`${activeTab === "beyond-3-years" ? "active" : ""}`}
              onClick={() => setActiveTab("beyond-3-years")}
            >
              <span>Beyond 3 years</span>
            </li>
          </ul>
        </div>
      </div>
      {activeTab === "ready-to-move" &&
        [1, 2, 3, 4, 5].map((item, index) => (
          <div className="project-full-width-card" key={index}>
            <div className="tileBox tileNo_1" >
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
                    <a target="_blank" href="#" className="DSE_NewProjects_D19">
                      <h2 className="projectName">Sowparnika Indradhanush</h2>
                    </a>
                    <span className="locationName">Hoskote, Bangalore</span>
                    <div className="priceWithStar">
                      <div className="price DSE_NewProjects_D19">
                        ₹ 30.00 Lac - 66.01 Lac
                      </div>
                    </div>
                    <div className="shortInfoBox">
                      <div className="shortInfoSec">
                        <em className="icon ico-project-size"></em>
                        <div className="shortInfoBody">
                          <label className="label">Project Size</label>
                          <ul className="value">
                            <li>930 units </li>
                            <li>5.5 Acres</li>
                          </ul>
                        </div>
                      </div>
                      <div className="shortInfoSec">
                        <em className="icon ico-config"></em>
                        <div className="shortInfoBody">
                          <label className="label">Configurations</label>
                          <ul className="value">
                            <li>1, 2, 3 BHK</li>
                            <li>Flat</li>
                            <li>519 - 1142 Sq. Ft. (Saleable)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="ctaBox">
                      <a className="btn btn-default" target="_blank" href="#">
                        Details
                      </a>
                      <button className="btn btn-primary">
                        <em className="icon ico-call"></em> Get a Call Back
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      {activeTab === "in-3-years" &&
        [1, 2, 3, 4, 5].map((item, index) => (
          <div className="project-full-width-card" key={index}>
            <div className="tileBox tileNo_1" >
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
                    <a target="_blank" href="#" className="DSE_NewProjects_D19">
                      <h2 className="projectName">Sowparnika Indradhanush</h2>
                    </a>
                    <span className="locationName">Hoskote, Bangalore</span>
                    <div className="priceWithStar">
                      <div className="price DSE_NewProjects_D19">
                        ₹ 30.00 Lac - 66.01 Lac
                      </div>
                    </div>
                    <div className="shortInfoBox">
                      <div className="shortInfoSec">
                        <em className="icon ico-project-size"></em>
                        <div className="shortInfoBody">
                          <label className="label">Project Size</label>
                          <ul className="value">
                            <li>930 units </li>
                            <li>5.5 Acres</li>
                          </ul>
                        </div>
                      </div>
                      <div className="shortInfoSec">
                        <em className="icon ico-config"></em>
                        <div className="shortInfoBody">
                          <label className="label">Configurations</label>
                          <ul className="value">
                            <li>1, 2, 3 BHK</li>
                            <li>Flat</li>
                            <li>519 - 1142 Sq. Ft. (Saleable)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="ctaBox">
                      <a className="btn btn-default" target="_blank" href="#">
                        Details
                      </a>
                      <button className="btn btn-primary">
                        <em className="icon ico-call"></em> Get a Call Back
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      {activeTab === "beyond-3-years" &&
        [1, 2, 3, 4, 5].map((item, index) => (
          <div className="project-full-width-card" key={index}>
            <div className="tileBox tileNo_1" >
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
                    <a target="_blank" href="#" className="DSE_NewProjects_D19">
                      <h2 className="projectName">Sowparnika Indradhanush</h2>
                    </a>
                    <span className="locationName">Hoskote, Bangalore</span>
                    <div className="priceWithStar">
                      <div className="price DSE_NewProjects_D19">
                        ₹ 30.00 Lac - 66.01 Lac
                      </div>
                    </div>
                    <div className="shortInfoBox">
                      <div className="shortInfoSec">
                        <em className="icon ico-project-size"></em>
                        <div className="shortInfoBody">
                          <label className="label">Project Size</label>
                          <ul className="value">
                            <li>930 units </li>
                            <li>5.5 Acres</li>
                          </ul>
                        </div>
                      </div>
                      <div className="shortInfoSec">
                        <em className="icon ico-config"></em>
                        <div className="shortInfoBody">
                          <label className="label">Configurations</label>
                          <ul className="value">
                            <li>1, 2, 3 BHK</li>
                            <li>Flat</li>
                            <li>519 - 1142 Sq. Ft. (Saleable)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="ctaBox">
                      <a className="btn btn-default" target="_blank" href="#">
                        Details
                      </a>
                      <button className="btn btn-primary">
                        <em className="icon ico-call"></em> Get a Call Back
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default DeveloperInformation;
