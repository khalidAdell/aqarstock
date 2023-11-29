import React, { useState } from "react";
import Default from "../../layouts/default";
import Select from "react-select";
import { FormattedMessage } from "react-intl";
import { MdSearch, MdClose } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import MapComponent from "../../components/Map";

const Search = () => {
  const [viewport, setViewport] = useState({
    latitude: 26.8206, // Approximate latitude of Egypt's center
    longitude: 30.8025, // Approximate longitude of Egypt's center
    zoom: 6, // Adjust the zoom level as needed
  });
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
    { value: "Projects", label: "Projects" },
    { value: "Rent", label: "Properties For Rent" },
    { value: "Buy", label: "Properties For Buy" },
  ];

  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const [propertyType, setPropertyType] = useState(null);
  const [showPropertyTypeFilter, setShowPropertyTypeFilter] = useState(false);
  const [showBedroosFilter, setShowBedroosFilter] = useState(false);
  const [showBudgetFilter, setShowBudgetFilter] = useState(false);
  const [showProjectStatusFilter, setShowProjectStatusFilter] = useState(false);
  const [showMoreFilter, setShowMoreFilter] = useState(false);
  const [showMap, setShowMap] = useState(false);
  return (
    <>
      <Default>
        <div className=" search-container">
          <div className={`container search-filter ${showMobileFilter ? "show" : ""}`}>
            <div className="search-mobile-head mobile-only">
              <div
                className="for-mobile-close"
                onClick={() => setShowMobileFilter(false)}
              >
                <MdClose />
              </div>
            </div>
            <div className="left-area">
              <div className="main-control">
                <div className="select-box">
                  <Select
                    styles={selectStyle}
                    isSearchable={false}
                    instanceId="property_type"
                    placeholder={"Select Type"}
                    value={propertyType}
                    onChange={setPropertyType}
                    name="type"
                    id="property_type"
                    options={property_type_options}
                  />
                </div>
                <div className="text-search-box">
                  <MdSearch />
                  <input
                    type="text"
                    placeholder="Search by Project, Locality, Builder, Road or Landmark"
                  />
                </div>
              </div>
              <div className="optional-filters">
                <div className={`filter-box ${showBedroosFilter ? 'active' : ''}`}>
                  <button
                    className="btn"
                    onClick={() => setShowBedroosFilter(!showBedroosFilter)}
                  >
                    <span>Bedrooms</span>
                    <BiChevronDown />
                  </button>
                  {showBedroosFilter && (
                    <div className="filter-dropdown property-bedroom-filter">
                      <div className="bedcount-box">
                        <span>1</span>
                      </div>
                      <div className="bedcount-box active">
                        <span>2</span>
                      </div>
                      <div className="bedcount-box active">
                        <span>3</span>
                      </div>
                      <div className="bedcount-box">
                        <span>4</span>
                      </div>
                      <div className="bedcount-box">
                        <span>5+</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className={`filter-box ${showPropertyTypeFilter ? 'active' : ''}`}>
                  <button
                    className="btn"
                    onClick={() =>
                      setShowPropertyTypeFilter(!showPropertyTypeFilter)
                    }
                  >
                    <span>Property Type</span>
                    <BiChevronDown />
                  </button>
                  {showPropertyTypeFilter && (
                    <div className="filter-dropdown scrollbar property-type-filter">
                      <div className="property-type-filter-top">
                        <div className="ptf-item">
                          <input type="checkbox" id="residential" />
                          <label htmlFor="residential">residential</label>
                        </div>
                        <div className="ptf-item">
                          <input type="checkbox" id="commercial" />
                          <label htmlFor="commercial">commercial</label>
                        </div>
                      </div>
                      <div className="property-type-filter-bottom">
                        <span>Unit Type</span>
                        <div className="ptf-item">
                          <input type="checkbox" id="residential" />
                          <label htmlFor="residential">residential</label>
                        </div>
                        <div className="ptf-item">
                          <input type="checkbox" id="apartment" />
                          <label htmlFor="apartment">apartment</label>
                        </div>
                        <div className="ptf-item">
                          <input type="checkbox" id="plots" />
                          <label htmlFor="plots">plots</label>
                        </div>
                        <div className="ptf-item">
                          <input type="checkbox" id="ind-floor" />
                          <label htmlFor="ind-floor">ind floor</label>
                        </div>
                        <div className="ptf-item">
                          <input type="checkbox" id="office-space" />
                          <label htmlFor="office-space">office space</label>
                        </div>
                        <div className="ptf-item">
                          <input type="checkbox" id="penthouse" />
                          <label htmlFor="penthouse">penthouse</label>
                        </div>
                        <div className="ptf-item">
                          <input type="checkbox" id="retail-shop" />
                          <label htmlFor="retail-shop">retail shop</label>
                        </div>
                        <div className="ptf-item">
                          <input type="checkbox" id="row-house" />
                          <label htmlFor="row-house">row house</label>
                        </div>
                        <div className="ptf-item">
                          <input type="checkbox" id="studioential" />
                          <label htmlFor="studio">studio</label>
                        </div>
                        <div className="ptf-item">
                          <input type="checkbox" id="ressidential" />
                          <label htmlFor="ressidential">residential</label>
                        </div>
                        <div className="ptf-item">
                          <input type="checkbox" id="commercxial" />
                          <label htmlFor="commercxial">commercial</label>
                        </div>
                      </div>
                      <div className="filter-clear-btn">
                        <button className="btn">clear all</button>
                      </div>
                    </div>
                  )}
                </div>
                <div className={`filter-box ${showBudgetFilter ? 'active' : ''}`}>
                  <button
                    className="btn"
                    onClick={() => setShowBudgetFilter(!showBudgetFilter)}
                  >
                    <span>Budget</span>
                    <BiChevronDown />
                  </button>
                  {showBudgetFilter && (
                    <div className="filter-dropdown scrollbar budget-filter">
                      <div className="budget-inputs">
                        <div className="min-box">
                          <input
                            type="number"
                            inputMode="numeric"
                            placeholder="Min"
                          />
                        </div>
                        <div className="max-box">
                          <input
                            type="number"
                            inputMode="numeric"
                            placeholder="Max"
                          />
                        </div>
                      </div>
                      <div className="budget-history-or-list">
                        <ul>
                          <li>
                            <span>$ 100,000</span>
                          </li>
                          <li>
                            <span>$ 300,000</span>
                          </li>
                          <li>
                            <span>$ 500,000</span>
                          </li>
                          <li>
                            <span>$ 800,000</span>
                          </li>
                          <li>
                            <span>$ 1,000,000</span>
                          </li>
                        </ul>
                      </div>
                      <div className="filter-clear-btn">
                        <button className="btn">clear all</button>
                      </div>
                    </div>
                  )}
                </div>
                <div className={`filter-box ${showProjectStatusFilter ? 'active' : ''}`}>
                  <button
                    className="btn"
                    onClick={() =>
                      setShowProjectStatusFilter(!showProjectStatusFilter)
                    }
                  >
                    <span>Project Status</span>
                    <BiChevronDown />
                  </button>
                  {showProjectStatusFilter && (
                    <div className="filter-dropdown scrollbar property-type-filter">
                      <div className="property-type-filter-top">
                        <div className="ptf-item">
                          <input type="checkbox" id="residential12w" />
                          <label htmlFor="residential12w">Advanced Stage</label>
                        </div>
                        <div className="ptf-item">
                          <input type="checkbox" id="commercialsad" />
                          <label htmlFor="commercialsad">Early Stage</label>
                        </div>
                      </div>
                      <div className="ptf-item">
                        <input type="checkbox" id="residentialasdc" />
                        <label htmlFor="residentialasdc">Mid Stage</label>
                      </div>
                      <div className="ptf-item">
                        <input type="checkbox" id="asdasd" />
                        <label htmlFor="asdasd">New Launch</label>
                      </div>
                      <div className="ptf-item">
                        <input type="checkbox" id="plotsasdq" />
                        <label htmlFor="plotsasdq">Ready To Move</label>
                      </div>
                      <div className="ptf-item">
                        <input type="checkbox" id="ind-floorasd" />
                        <label htmlFor="ind-floorasd">Under Construction</label>
                      </div>
                      <div className="ptf-item">
                        <input type="checkbox" id="office-spacesda" />
                        <label htmlFor="office-spacesda">Upcoming</label>
                      </div>
                      <div className="filter-clear-btn">
                        <button className="btn">clear all</button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="more-filters-box">
                  <button className="btn">
                    <span>More</span>
                    <BiChevronDown />
                  </button>
                </div>
              </div>
            </div>
            <div className="right-area">
              <div className="show-map-btn">
                <button className="btn" onClick={() => setShowMap(!showMap)}>
                  {showMap ? "Hide" : "Show "} map
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="search-page p-80">
          <div className="container">
            <div className="row">
              <div className={`col-md-${showMap ? 6 : 8}`}>
                <div className="mobile-filter-switcher mobile-only">
                  <span>Filter</span>
                  <div
                    className="icon"
                    onClick={() => setShowMobileFilter(true)}
                  >
                    <span>F</span>
                  </div>
                </div>

                {/* For PRojects !! */}
                <div className="search-result-count">
                  <span>showing 1.69.341</span>
                </div>

                <div className="cities-nummed-area">
                  <div className="cna-head"></div>
                  <ul className="cna-list">
                    <li>
                      <a href="#">
                        <span>Cairo</span>
                        <div className="number">1749</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Cairo</span>
                        <div className="number">1749</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Cairo</span>
                        <div className="number">1749</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Cairo</span>
                        <div className="number">1749</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Cairo</span>
                        <div className="number">1749</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Cairo</span>
                        <div className="number">1749</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Cairo</span>
                        <div className="number">1749</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Cairo</span>
                        <div className="number">1749</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Cairo</span>
                        <div className="number">1749</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Cairo</span>
                        <div className="number">1749</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Cairo</span>
                        <div className="number">1749</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Cairo</span>
                        <div className="number">1749</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Cairo</span>
                        <div className="number">1749</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>Cairo</span>
                        <div className="number">1749</div>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="show-projects-by">
                  <ul className="spb-list">
                    <li className="active">
                      <a href="#">All</a>
                    </li>
                    <li>
                      <a href="#">New Launch</a>
                    </li>
                    <li>
                      <a href="#">Ready to move</a>
                    </li>
                    <li>
                      <a href="#">affordable</a>
                    </li>
                  </ul>
                  <div className="sort-by">
                    <button>
                      <span>sort by </span>
                      <BiChevronDown />
                    </button>
                    <div className="project-sort-list">
                      <div className="project-sort-list-item">
                        <span>New</span>
                      </div>
                      <div className="active project-sort-list-item">
                        <span>Old</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="projects-full-width-container">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                    <div className="project-full-width-card" key={index}>
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
                  ))}
                </div>
              </div>
              {showMap ? (
                <div className="col-md-6">
                  <MapComponent />
                </div>
              ) : (
                <div className="col-md-4 ">
                  <div className="search-sidebar">Details</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Default>
    </>
  );
};

export default Search;
