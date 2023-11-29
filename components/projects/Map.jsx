import React from "react";
import { BiShareAlt } from "react-icons/bi";

const Map = ({sectionRef}) => {
  return (
    <section ref={sectionRef} className="project-map" id="projectmap">
      <div className="project-section-title">
        <h4>Explore Neighbourhood - Map View</h4>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2411.3567777959!2d32.292468323152036!3d31.271296858719637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f99c5fc8955555%3A0xacdaa4535019995e!2sPort%20Said%20Club%20Hotel!5e0!3m2!1sar!2seg!4v1691372917200!5m2!1sar!2seg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="locality-places">
        <ul>
          <li>
            <div className="img-box">
              <img
                src="/img/icon/locality-guide/commuteLogo.svg"
                alt="commuteLogo"
              />
            </div>
            <span>Commute</span>
          </li>
          <li>
            <div className="img-box">
              <img
                src="/img/icon/locality-guide/bankLogo.svg"
                alt="banksLogo"
              />
            </div>
            <span>Banks</span>
          </li>
          <li>
            <div className="img-box">
              <img
                src="/img/icon/locality-guide/cinemaLogo.svg"
                alt="cinemasLogo"
              />
            </div>
            <span>Cinemas</span>
          </li>
          <li>
            <div className="img-box">
              <img
                src="/img/icon/locality-guide/foodLogoLogo.svg"
                alt="foodLogo"
              />
            </div>
            <span>Food and Drinks</span>
          </li>
          <li>
            <div className="img-box">
              <img
                src="/img/icon/locality-guide/groceriesLogo.svg"
                alt="groceriesLogo"
              />
            </div>
            <span>Groceries</span>
          </li>
          <li>
            <div className="img-box">
              <img
                src="/img/icon/locality-guide/healthcareLogo.svg"
                alt="healthcareLogo"
              />
            </div>
            <span>Healthcare</span>
          </li>
          <li>
            <div className="img-box">
              <img
                src="/img/icon/locality-guide/shoppingLogo.svg"
                alt="shoppingLogo"
              />
            </div>

            <span>Shopping</span>
          </li>
          <li>
            <div className="img-box">
              <img
                src="/img/icon/locality-guide/parksLogo.svg"
                alt="parksLogo"
              />
            </div>
            <span>Parks</span>
          </li>
        </ul>
      </div>
      {/* <div className="locality_guide">
        <div className="lg-head">
          <span>
            <b>Locality Guide</b>for DLF Phase 5, Gurgaon
          </span>

          <button className="btn">
            <BiShareAlt />
            <span>Share</span>
          </button>
        </div>
        <div className="lg-cont">
          <div className="row">
            <div className="col-md-6">
              <div className="grid-item">
                <img src="/img/property/3.jpg" alt="project image" />
                <div className="opacity-hover"></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="g4item">
                <div className="grid-item">
                  <img src="/img/property/3.jpg" alt="project image" />
                  <div className="opacity-hover"></div>
                </div>
                <div className="grid-item">
                  <img src="/img/property/4.jpg" alt="project image" />
                  <div className="opacity-hover"></div>
                </div>
                <div className="grid-item">
                  <img src="/img/property/5.jpg" alt="project image" />
                  <div className="opacity-hover"></div>
                </div>
                <div className="grid-item">
                  <img src="/img/property/property-7.jpg" alt="project image" />
                  <div className="opacity-hover"></div>
                  <div className="black-bg"></div>
                  <div className="show-all-images">
                    <span>+ 4 More</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Map;
