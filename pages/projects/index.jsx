import Head from "next/head";
import React, { useState } from "react";
import PageInfo from "../../components/Main/PageInfo";
import Default from "../../layouts/default";
import { FormattedMessage } from "react-intl";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { MdSearch } from "react-icons/md";
import { BiCurrentLocation } from "react-icons/bi";
import Select from "react-select";
import SidebarFilter from "../../components/SidebarFilter";

const Projects = () => {
  const selectStyle = {
    control: (base, { isFocused }) => ({
      ...base,
      border: "1px solid var(--mainColor)",
      boxShadow: "none",
      color: "red",
      "&:hover": {
        border: "1px solid var(--mainColor)",
      },
    }),
    option: (styles, { isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "var(--mainColor)" : null,
        color: "#000",
      };
    },
  };

  const property_type_options = [
    { value: "palace", label: "palace" },
    { value: "villa", label: "villa" },
    { value: "twin_house", label: "twin house" },
    { value: "pent_house", label: "pent house" },
    { value: "flat", label: "flat" },
    { value: "studio", label: "studio" },
    { value: "chalet", label: "chalet" },
    { value: "shop", label: "shop" },
    { value: "factory", label: "factory" },
    { value: "land", label: "land" },
    { value: "warehouse", label: "warehouse" },
    { value: "playground", label: "playground" },
    { value: "pharmacy", label: "pharmacy" },
    { value: "mall", label: "mall" },
    { value: "offices", label: "offices" },
  ];

  const [showSidebarFilter, setShowSidebarFilter] = useState(false);

  const [propertyType, setPropertyType] = useState(null);
  return (
    <>
      <Head>
        <title>Aqar Stock - Projects</title>
      </Head>
      <Default className="projects-page">
        {showSidebarFilter && (
          <SidebarFilter setShowSidebarFilter={setShowSidebarFilter} />
        )}
        <div className="projects-page uniqe-page">
          <section
            className="intro"
            style={{ backgroundImage: "url(/img/intro.jpg)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="home-content">
                    <h1>ابحث عن مشاريع جديدة في مصر</h1>
                    <div className="intro-filter">
                      <form style={{ textAlign: "center" }}>
                        <div className="intro-filter-body">
                          <div className="ifb-top ">
                            <div className="search-btn">
                              <button
                                type="button"
                                onClick={(e) =>
                                  setShowSidebarFilter(!showSidebarFilter)
                                }
                                className="btn"
                              >
                                <span>بحث</span>
                              </button>
                            </div>
                            <div className="location-input ifb-bottom">
                              <div className="filter-property-type">
                                <Select
                                  styles={selectStyle}
                                  isSearchable={false}
                                  instanceId="property_type"
                                  placeholder="البلد"
                                  value={propertyType}
                                  onChange={setPropertyType}
                                  name="type"
                                  id="property_type"
                                  options={property_type_options}
                                />
                              </div>
                              <div className="filter-property-type">
                                <Select
                                  styles={selectStyle}
                                  isSearchable={false}
                                  instanceId="property_type"
                                  placeholder="البلد"
                                  value={propertyType}
                                  onChange={setPropertyType}
                                  name="type"
                                  id="property_type"
                                  options={property_type_options}
                                />
                              </div>
                              <div className="filter-property-type">
                                <Select
                                  styles={selectStyle}
                                  isSearchable={false}
                                  instanceId="property_type"
                                  placeholder="البلد"
                                  value={propertyType}
                                  onChange={setPropertyType}
                                  name="type"
                                  id="property_type"
                                  options={property_type_options}
                                />
                              </div>
                              <div className="area-size-box">
                                <Select
                                  styles={selectStyle}
                                  isSearchable={false}
                                  instanceId="property_type"
                                  placeholder="المحافظة"
                                  value={propertyType}
                                  onChange={setPropertyType}
                                  name="type"
                                  id="property_type"
                                  options={property_type_options}
                                />
                              </div>
                              <div className="price-box">
                                <Select
                                  styles={selectStyle}
                                  isSearchable={false}
                                  instanceId="property_type"
                                  placeholder="الحي"
                                  value={propertyType}
                                  onChange={setPropertyType}
                                  name="type"
                                  id="property_type"
                                  options={property_type_options}
                                />
                              </div>
                            </div>
                          </div>
                          {/* <div className="ifb-middle">
                            <span
                              onClick={(e) =>
                                setShowSidebarFilter(!showSidebarFilter)
                              }
                            >
                              {showSidebarFilter
                                ? "خيارات أقل"
                                : "خيارات إضافية"}
                            </span>
                            <span>إعادة البحث</span>
                          </div> */}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <div className="container-fluid">
            <PageInfo title="Our Projects" image="/img/breadcrumb-1.jpg">
              <ul>
                <li>
                  <a href="#">Home</a>
                  <span>/</span>
                  <a href="#" className="active">
                    Projects
                  </a>
                </li>
              </ul>
            </PageInfo>
          </div> */}

          



          <section
            className="our-projects-section ptb-40"
            style={{ backgroundColor: "#f3f3f3" }}
          >
            <div className="container">
              <div className="section-title" style={{ textAlign: "center" }}>
                <h2>
                  <FormattedMessage id="new-projects" />
                </h2>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="project-card-box">
                    <div className="top-card">
                      <div className="project-card-img-box">
                        <img src="/img/project-image.jpg" alt="project image" />
                      </div>
                      <div className="project-card-content-box">
                        <div className="project-card-title">
                          <a href="#">
                            <h3>مول ارمونيا ووك العاصمة الادارية</h3>
                          </a>
                        </div>
                        <div className="project-card-price">
                          <span>السعر يبدأ من</span>
                          <b>1,000,000 جنيه مصري</b>
                        </div>
                        <div className="project-card-location">
                          <ul>
                            <li>
                              <a href="#">مصر</a>
                            </li>
                            <li>
                              <a href="#">العاصمة الادارية الجديده</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-bottom">
                      <button className="btn">CAll</button>
                      <button className="btn">Email</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="project-card-box">
                    <div className="top-card">
                      <div className="project-card-img-box">
                        <img src="/img/project-image.jpg" alt="project image" />
                      </div>
                      <div className="project-card-content-box">
                        <div className="project-card-title">
                          <a href="#">
                            <h3>مول ارمونيا ووك العاصمة الادارية</h3>
                          </a>
                        </div>
                        <div className="project-card-price">
                          <span>السعر يبدأ من</span>
                          <b>1,000,000 جنيه مصري</b>
                        </div>
                        <div className="project-card-location">
                          <ul>
                            <li>
                              <a href="#">مصر</a>
                            </li>
                            <li>
                              <a href="#">العاصمة الادارية الجديده</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-bottom">
                      <button className="btn">CAll</button>
                      <button className="btn">Email</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="project-card-box">
                    <div className="top-card">
                      <div className="project-card-img-box">
                        <img src="/img/project-image.jpg" alt="project image" />
                      </div>
                      <div className="project-card-content-box">
                        <div className="project-card-title">
                          <a href="#">
                            <h3>مول ارمونيا ووك العاصمة الادارية</h3>
                          </a>
                        </div>
                        <div className="project-card-price">
                          <span>السعر يبدأ من</span>
                          <b>1,000,000 جنيه مصري</b>
                        </div>
                        <div className="project-card-location">
                          <ul>
                            <li>
                              <a href="#">مصر</a>
                            </li>
                            <li>
                              <a href="#">العاصمة الادارية الجديده</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-bottom">
                      <button className="btn">CAll</button>
                      <button className="btn">Email</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="project-card-box">
                    <div className="top-card">
                      <div className="project-card-img-box">
                        <img src="/img/project-image.jpg" alt="project image" />
                      </div>
                      <div className="project-card-content-box">
                        <div className="project-card-title">
                          <a href="#">
                            <h3>مول ارمونيا ووك العاصمة الادارية</h3>
                          </a>
                        </div>
                        <div className="project-card-price">
                          <span>السعر يبدأ من</span>
                          <b>1,000,000 جنيه مصري</b>
                        </div>
                        <div className="project-card-location">
                          <ul>
                            <li>
                              <a href="#">مصر</a>
                            </li>
                            <li>
                              <a href="#">العاصمة الادارية الجديده</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-bottom">
                      <button className="btn">CAll</button>
                      <button className="btn">Email</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="project-card-box">
                    <div className="top-card">
                      <div className="project-card-img-box">
                        <img src="/img/project-image.jpg" alt="project image" />
                      </div>
                      <div className="project-card-content-box">
                        <div className="project-card-title">
                          <a href="#">
                            <h3>مول ارمونيا ووك العاصمة الادارية</h3>
                          </a>
                        </div>
                        <div className="project-card-price">
                          <span>السعر يبدأ من</span>
                          <b>1,000,000 جنيه مصري</b>
                        </div>
                        <div className="project-card-location">
                          <ul>
                            <li>
                              <a href="#">مصر</a>
                            </li>
                            <li>
                              <a href="#">العاصمة الادارية الجديده</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-bottom">
                      <button className="btn">CAll</button>
                      <button className="btn">Email</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="project-card-box">
                    <div className="top-card">
                      <div className="project-card-img-box">
                        <img src="/img/project-image.jpg" alt="project image" />
                      </div>
                      <div className="project-card-content-box">
                        <div className="project-card-title">
                          <a href="#">
                            <h3>مول ارمونيا ووك العاصمة الادارية</h3>
                          </a>
                        </div>
                        <div className="project-card-price">
                          <span>السعر يبدأ من</span>
                          <b>1,000,000 جنيه مصري</b>
                        </div>
                        <div className="project-card-location">
                          <ul>
                            <li>
                              <a href="#">مصر</a>
                            </li>
                            <li>
                              <a href="#">العاصمة الادارية الجديده</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-bottom">
                      <button className="btn">CAll</button>
                      <button className="btn">Email</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="project-card-box">
                    <div className="top-card">
                      <div className="project-card-img-box">
                        <img src="/img/project-image.jpg" alt="project image" />
                      </div>
                      <div className="project-card-content-box">
                        <div className="project-card-title">
                          <a href="#">
                            <h3>مول ارمونيا ووك العاصمة الادارية</h3>
                          </a>
                        </div>
                        <div className="project-card-price">
                          <span>السعر يبدأ من</span>
                          <b>1,000,000 جنيه مصري</b>
                        </div>
                        <div className="project-card-location">
                          <ul>
                            <li>
                              <a href="#">مصر</a>
                            </li>
                            <li>
                              <a href="#">العاصمة الادارية الجديده</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-bottom">
                      <button className="btn">CAll</button>
                      <button className="btn">Email</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="project-card-box">
                    <div className="top-card">
                      <div className="project-card-img-box">
                        <img src="/img/project-image.jpg" alt="project image" />
                      </div>
                      <div className="project-card-content-box">
                        <div className="project-card-title">
                          <a href="#">
                            <h3>مول ارمونيا ووك العاصمة الادارية</h3>
                          </a>
                        </div>
                        <div className="project-card-price">
                          <span>السعر يبدأ من</span>
                          <b>1,000,000 جنيه مصري</b>
                        </div>
                        <div className="project-card-location">
                          <ul>
                            <li>
                              <a href="#">مصر</a>
                            </li>
                            <li>
                              <a href="#">العاصمة الادارية الجديده</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-bottom">
                      <button className="btn">CAll</button>
                      <button className="btn">Email</button>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="page-nav list-style mt-10">
                <li>
                  <a href="agents">
                    <i>
                      <HiOutlineArrowLeft />
                    </i>
                  </a>
                </li>
                <li>
                  <a className="active" href="agents">
                    1
                  </a>
                </li>
                <li>
                  <a href="agents">2</a>
                </li>
                <li>
                  <a href="agents">3</a>
                </li>
                <li>
                  <a href="agents">
                    <i>
                      <HiOutlineArrowRight />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section className="our-clients ptb-40">
            <div className="container">
              <div className="section-title">
                <h2>
                  <FormattedMessage id="featured-developers" />{" "}
                </h2>
              </div>
              <div className="section-content">
                <div className="row">
                  <div className="col-md-2">
                    <div className="client-box">
                      <a href="#">
                        <img src="/img/client-image.jpg" alt="client image" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="client-box">
                      <a href="#">
                        <img src="/img/client-image.jpg" alt="client image" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="client-box">
                      <a href="#">
                        <img src="/img/client-image.jpg" alt="client image" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="client-box">
                      <a href="#">
                        <img src="/img/client-image.jpg" alt="client image" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="client-box">
                      <a href="#">
                        <img src="/img/client-image.jpg" alt="client image" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="client-box">
                      <a href="#">
                        <img src="/img/client-image.jpg" alt="client image" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Default>
    </>
  );
};

export default Projects;
