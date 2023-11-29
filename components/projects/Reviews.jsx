import React from "react";
import { MdSecurity } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = ({ sectionRef }) => {
  const settings = {
    navs: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="project-reviews" id="reviews" ref={sectionRef}>
      <div className="project-section-title project-reviews-section-header">
        <div className="col-it">
          <h4>See what the residents have to say</h4>
          <span>for DLF The Aralias , DLF Phase 5, Gurgaon</span>
        </div>
        <div className="col-it">
          <span>3.8/5</span>
        </div>
      </div>
      <div className="reviews-shorts">
        <div className="reviews-shorts-title">
          <h5>Ratings based on DLF The Aralias features</h5>
        </div>
        <ul className="reviews-shorts-list">
          <li>
            <div className="rsl-icon">
              <MdSecurity />
            </div>
            <span>4/5</span>
            <b>Connectivity</b>
          </li>
          <li>
            <div className="rsl-icon">
              <MdSecurity />
            </div>
            <span>4/5</span>
            <b>Connectivity</b>
          </li>
          <li>
            <div className="rsl-icon">
              <MdSecurity />
            </div>
            <span>4/5</span>
            <b>Connectivity</b>
          </li>
          <li>
            <div className="rsl-icon">
              <MdSecurity />
            </div>
            <span>4/5</span>
            <b>Connectivity</b>
          </li>
          <li>
            <div className="rsl-icon">
              <MdSecurity />
            </div>
            <span>4/5</span>
            <b>Connectivity</b>
          </li>
          <li>
            <div className="rsl-icon">
              <MdSecurity />
            </div>
            <span>4/5</span>
            <b>Connectivity</b>
          </li>
        </ul>
      </div>
      <div className="reviews-goods-here">
        <h4>Good things here</h4>
        <ul>
          <li>
            <span>Public Transport</span>
          </li>
          <li>
            <span>Cab/Auto Availability</span>
          </li>
          <li>
            <span>No Traffic Jams</span>
          </li>
          <li>
            <span>Nearby Metro Station</span>
          </li>
        </ul>
      </div>
      <div className="reviews-slider">
        <div className="reviews-slider-title">
          <h5>Most helpful reviews</h5>
        </div>
        <Slider {...settings} className="reviews-list">
          <div className="slider-review-item">
            <span className="review-rate">
              <span className="icon">x</span>
              <b>4</b>
            </span>
            <p>
              I have bought an apartment. It is located at a well connected
              place with all modern amenities of lifestyle are available. These
              apartments are ready to move in. There is no problem
            </p>
            <div className="review-by">
              {/* <img src="" alt="" /> */}
              <div className="auth-con">
                <h6>Nilam</h6>
                <span>Owner | posted 2029 years ago</span>
              </div>
            </div>
          </div>
          <div className="slider-review-item">
            <span className="review-rate">
              <span className="icon">x</span>
              <b>4</b>
            </span>
            <p>
              I have bought an apartment. It is located at a well connected
              place with all modern amenities of lifestyle are available. These
              apartments are ready to move in. There is no problem
            </p>
            <div className="review-by">
              {/* <img src="" alt="" /> */}
              <div className="auth-con">
                <h6>Nilam</h6>
                <span>Owner | posted 2029 years ago</span>
              </div>
            </div>
          </div>
          <div className="slider-review-item">
            <span className="review-rate">
              <span className="icon">x</span>
              <b>4</b>
            </span>
            <p>
              I have bought an apartment. It is located at a well connected
              place with all modern amenities of lifestyle are available. These
              apartments are ready to move in. There is no problem
            </p>
            <div className="review-by">
              {/* <img src="" alt="" /> */}
              <div className="auth-con">
                <h6>Nilam</h6>
                <span>Owner | posted 2029 years ago</span>
              </div>
            </div>
          </div>
          <div className="slider-review-item">
            <span className="review-rate">
              <span className="icon">x</span>
              <b>4</b>
            </span>
            <p>
              I have bought an apartment. It is located at a well connected
              place with all modern amenities of lifestyle are available. These
              apartments are ready to move in. There is no problem
            </p>
            <div className="review-by">
              {/* <img src="" alt="" /> */}
              <div className="auth-con">
                <h6>Nilam</h6>
                <span>Owner | posted 2029 years ago</span>
              </div>
            </div>
          </div>
          <div className="slider-review-item">
            <span className="review-rate">
              <span className="icon">x</span>
              <b>4</b>
            </span>
            <p>
              I have bought an apartment. It is located at a well connected
              place with all modern amenities of lifestyle are available. These
              apartments are ready to move in. There is no problem
            </p>
            <div className="review-by">
              {/* <img src="" alt="" /> */}
              <div className="auth-con">
                <h6>Nilam</h6>
                <span>Owner | posted 2029 years ago</span>
              </div>
            </div>
          </div>
          <div className="slider-review-item">
            <span className="review-rate">
              <span className="icon">x</span>
              <b>4</b>
            </span>
            <p>
              I have bought an apartment. It is located at a well connected
              place with all modern amenities of lifestyle are available. These
              apartments are ready to move in. There is no problem
            </p>
            <div className="review-by">
              {/* <img src="" alt="" /> */}
              <div className="auth-con">
                <h6>Nilam</h6>
                <span>Owner | posted 2029 years ago</span>
              </div>
            </div>
          </div>
          <div className="slider-review-item">
            <span className="review-rate">
              <span className="icon">x</span>
              <b>4</b>
            </span>
            <p>
              I have bought an apartment. It is located at a well connected
              place with all modern amenities of lifestyle are available. These
              apartments are ready to move in. There is no problem
            </p>
            <div className="review-by">
              {/* <img src="" alt="" /> */}
              <div className="auth-con">
                <h6>Nilam</h6>
                <span>Owner | posted 2029 years ago</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
