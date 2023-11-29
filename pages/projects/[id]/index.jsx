import Link from "next/link";
import React, { useState, useRef } from "react";
import { useEffect } from "react";
import Default from "../../../layouts/default";
import Breadcrumb from "../../../components/Breadcrumb";
import HighLights from "../../../components/projects/HighLights";
import OverView from "../../../components/projects/OverView";
import Description from "../../../components/projects/DescriptionSection";
import Amenities from "../../../components/projects/Amenities";
import Reviews from "../../../components/projects/Reviews";
import Info from "../../../components/projects/Info";
import ImagesVideos from "../../../components/projects/Imagesvideos";
import Specifications from "../../../components/projects/Specifications";
import ContactSellers from "../../../components/projects/ContactSellers";
import Brochure from "../../../components/projects/Brochure";
import Map from "../../../components/projects/Map";
import DeveloperInformation from "../../../components/projects/DeveloperInformation";
import QuestionsAndAnswers from "../../../components/projects/QuestionsAndAnswers";
import FAQs from "../../../components/projects/Faqs";
import Properties from "../../../components/projects/Properties";
import FloorPlan from "../../../components/projects/FloorPlan";
import QuickLinks from "../../../components/projects/QuickLinks";
import Disclaimer from "../../../components/projects/Disclaimer";
import ContactSellerSidebar from "../../../components/ContactSeller";
import { PhotoAlbum } from "react-photo-album";
import photos from "../../../components/Photos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import handleProjectQuickLinks from "../../../common/handleProjectQuickLinks";

const ProjectSingle = () => {
  const [showGallary, setShowGallary] = useState(false);

  const highLightsSectionRef = useRef(null);
  const AboutProjectSectionRef = useRef(null);
  const FloorPlanSectionRef = useRef(null);
  const AmenitiesSectionRef = useRef(null);
  const OverviewSectionRef = useRef(null);
  const RatingsAndReviewsSectionRef = useRef(null);
  const BrochureSectionRef = useRef(null);
  const LocalitySectionRef = useRef(null);
  const ProjectPropertiesSectionRef = useRef(null);
  const AboutDeveloperSectionRef = useRef(null);
  const QAndASectionRef = useRef(null);
  const FrequentlyAskedQuestionsSectionRef = useRef(null);

  const highLightsNavRef = useRef(null);
  const AboutProjectNavRef = useRef(null);
  const FloorPlanNavRef = useRef(null);
  const AmenitiesNavRef = useRef(null);
  const OverviewNavRef = useRef(null);
  const RatingsAndReviewsNavRef = useRef(null);
  const BrochureNavRef = useRef(null);
  const LocalityNavRef = useRef(null);
  const ProjectPropertiesNavRef = useRef(null);
  const AboutDeveloperNavRef = useRef(null);
  const QAndANavRef = useRef(null);
  const FrequentlyAskedQuestionsNavRef = useRef(null);

  useEffect(() => {
    document.body.style.backgroundColor = "rgb(245, 245, 245)";
  }, []);

  const settings = {
    navs: true,
    infinite: false,
    speed: 500,
    variableWidth: true,
    slidesToScroll: 3,
  };
  useEffect(() => {
    handleProjectQuickLinks([
      highLightsSectionRef,
      AboutProjectSectionRef,
      FloorPlanSectionRef,
      AmenitiesSectionRef,
      OverviewSectionRef,
      RatingsAndReviewsSectionRef,
      BrochureSectionRef,
      LocalitySectionRef,
      ProjectPropertiesSectionRef,
      AboutDeveloperSectionRef,
      QAndASectionRef,
      FrequentlyAskedQuestionsSectionRef,
    ]);
  }, [
    highLightsSectionRef,
    AboutProjectSectionRef,
    FloorPlanSectionRef,
    AmenitiesSectionRef,
    OverviewSectionRef,
    RatingsAndReviewsSectionRef,
    BrochureSectionRef,
    LocalitySectionRef,
    ProjectPropertiesSectionRef,
    AboutDeveloperSectionRef,
    QAndASectionRef,
    FrequentlyAskedQuestionsSectionRef,
  ]);
  return (
    <Default>
      <div className="page-navigation">
        <div className="container">
          <ul>
            <Slider {...settings}>
              <li className="highlights">
                <span>
                  <a href="#highlights">Highlights</a>
                </span>
              </li>
              <li className="AboutProject">
                <span>
                  <a href="#AboutProject">About Project</a>
                </span>
              </li>
              <li className="overview">
                <span>
                  <a href="#overview">Overview/Home</a>
                </span>
              </li>
              <li className="amenities">
                <span>
                  <a href="#amenities">Amenities</a>
                </span>
              </li>
              <li className="floorPlan">
                <span>
                  <a href="#floorPlan">Floor Plan</a>
                </span>
              </li>
              <li className="Brochure">
                <span>
                  <a href="#Brochure">Brochure</a>
                </span>
              </li>
              <li className="projectmap">
                <span>
                  <a href="#projectmap">Map View</a>
                </span>
              </li>
{/*               
              <li className="reviews">
                <span>
                  <a href="#reviews">Ratings and Reviews</a>
                </span>
              </li> */}
              
              {/* <li className="Locality">
                <span>
                  <a href="#Locality">Locality</a>
                </span>
              </li> */}
              <li className="AboutDeveloper">
                <span>
                  <a href="#AboutDeveloper">About Developer</a>
                </span>
              </li>
              <li className="ProjectProperties">
                <span>
                  <a href="#ProjectProperties">Project Properties</a>
                </span>
              </li>
              
              <li className="QAndA">
                <span>
                  <a href="#QAndA">Q&A</a>
                </span>
              </li>
              <li className="FrequentlyAskedQuestions">
                <span>
                  <a href="#project-location-page">
                    Frequently Asked Questions
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <a href="#project-location-page">Similar Projects</a>
                </span>
              </li>
            </Slider>
          </ul>
        </div>
      </div>
      <Lightbox
        slides={photos}
        open={showGallary}
        close={() => setShowGallary(false)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
      <main id="main" className="single-project">
        <header className="project-header">
          <div className="container">
            {/* <div className="d-flex justify-content-between">
              <Breadcrumb />
              <span>Last updated: Mar 16, 2023</span>
            </div> */}
            <div className="grid-images">
              <div className="row">
                <div className="col-md-6">
                  <div className="grid-item">
                    <img
                      src="/img/property/2.jpg"
                      alt="project image"
                      onClick={() => setShowGallary(true)}
                    />
                    <div
                      className="opacity-hover"
                      onClick={() => setShowGallary(true)}
                    ></div>
                    <button
                      className="btn show-all-images"
                      onClick={() => setShowGallary(true)}
                    >
                      show all photos
                    </button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="g4item">
                    <div className="grid-item">
                      <img src="/img/property/3.jpg" alt="project image" />
                      <div
                        className="opacity-hover"
                        onClick={() => setShowGallary(true)}
                      ></div>
                    </div>
                    <div className="grid-item">
                      <img src="/img/property/4.jpg" alt="project image" />
                      <div
                        className="opacity-hover"
                        onClick={() => setShowGallary(true)}
                      ></div>
                    </div>
                    <div className="grid-item">
                      <img src="/img/property/5.jpg" alt="project image" />
                      <div
                        className="opacity-hover"
                        onClick={() => setShowGallary(true)}
                      ></div>
                    </div>
                    <div className="grid-item">
                      <img
                        src="/img/property/property-7.jpg"
                        alt="project image"
                      />
                      <div
                        className="opacity-hover"
                        onClick={() => setShowGallary(true)}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="container ">
          <div className="row">
            <div className="col-md-8">
              <HighLights sectionRef={highLightsSectionRef} />
              <Description sectionRef={AboutProjectSectionRef} />
              {/* <Info sectionRef={AboutProjectSectionRef} /> */}
              <OverView sectionRef={OverviewSectionRef} />
              <ImagesVideos sectionRef={false} />
              <Amenities sectionRef={AmenitiesSectionRef} />
              <Specifications sectionRef={false} />
              <FloorPlan sectionRef={FloorPlanSectionRef} />
              {/* <ContactSellers  sectionRef={false} /> */}
              <Brochure sectionRef={BrochureSectionRef} />
              {/* <Reviews sectionRef={RatingsAndReviewsSectionRef} /> */}
              <Map sectionRef={LocalitySectionRef} />
              <DeveloperInformation sectionRef={AboutDeveloperSectionRef} />
              <Properties sectionRef={ProjectPropertiesSectionRef} />
              <QuestionsAndAnswers
                sectionRef={FrequentlyAskedQuestionsSectionRef}
              />
              <FAQs sectionRef={QAndASectionRef} />
              <QuickLinks sectionRef={false} />
              <Disclaimer sectionRef={false} />
            </div>
            <div className="col-md-4">
              <ContactSellerSidebar />
            </div>
          </div>
        </div>
      </main>
    </Default>
  );
};

export default ProjectSingle;
