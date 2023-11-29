import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Parallax } from "swiper";
import { AiOutlineDownload } from "react-icons/ai";
import "swiper/css";
import "swiper/css/navigation";
SwiperCore.use([Navigation, Parallax]);

const Brochure = ({ sectionRef }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <section className="project-brochure" id="Brochure" ref={sectionRef}>
      <div className="project-section-title">
        <h4>DLF The Aralias - Brochure</h4>
      </div>
      <div className="brochure-slider slider">
        <div className="swiper-container parallax-slider">
          <Swiper
            speed={1000}
            parallax={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            className="swiper-wrapper"
            slidesPerView={3}
          >
            <SwiperSlide className="swiper-slide">
              <div className="brochure-image">
                <img src="/img/brochure/original1.webp" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="/img/brochure/original1.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="/img/brochure/original2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="/img/brochure/original3.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="/img/brochure/original4.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="/img/brochure/original1.webp" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="/img/brochure/original4.webp" alt="" />
            </SwiperSlide>
          </Swiper>
          <div className="setone setwo">
            <div
              ref={navigationNextRef}
              className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
            ></div>
            <div
              ref={navigationPrevRef}
              className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
            ></div>
          </div>
        </div>
      </div>
      <div className="brochure-footer">
        <button className="btn">
          <AiOutlineDownload />
          <span>Download Brochure</span>
        </button>
      </div>
    </section>
  );
};

export default Brochure;
