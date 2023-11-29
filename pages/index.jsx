import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import Default from "../layouts/default";
import { BiChevronDown, BiCurrentLocation } from "react-icons/bi";
import { MdSearch } from "react-icons/md";
import Select from "react-select";
import { FormattedMessage } from "react-intl";

const Home = () => {
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

  const [propertyType, setPropertyType] = useState(null);
  const [filterType, setFilterType] = useState("properties");
  const [location, setLocation] = useState("");
  const [showAllFilters, setShowAllFilters] = useState(false);

  return (
    <Default pageName="home">
      <Head>
        <title>
          Aqar Stock | Real estate search engine apartments, villas and land |
          For sell and rent
        </title>
      </Head>
      <div className="home-page">
        <section
          className="intro"
          style={{ backgroundImage: "url(/img/intro.jpg)" }}
        >
          <div className="container" style={{ height: "100%" }}>
            <div className="row" style={{ height: "100%" }}>
              <div className="col-md-9">
                <div className="home-content">
                  <h1>
                    <span>
                      <FormattedMessage id="intro.title" />
                    </span>
                  </h1>
                  <div className="intro-filter">
                    <form style={{ textAlign: "center" }}>
                      {/* <div className="intro-filter-for">
                        <div className="form-group">
                          <button
                          type="button"
                            onClick={(e) => {
                              setFilterType("properties");
                            }}
                            className={
                              filterType === "properties" ? "active" : ""
                            }
                          >
                            <FormattedMessage id="intro.properties" />
                          </button>
                        </div>
                        <div className="form-group">
                          <button
                          type="button"
                            onClick={(e) => {
                              setFilterType("projects");
                            }}
                            className={
                              filterType === "projects" ? "active" : ""
                            }
                          >
                            <FormattedMessage id="intro.projects" />
                          </button>
                        </div>
                      </div> */}
                      <div className="intro-filter-body">
                        <div className="ifb-top">
                          <div className="location-input">
                            <div className="lb-right-box">
                              <div className="ifb-bottom">
                                <div className="filter-property-type">
                                  <Select
                                    styles={selectStyle}
                                    isSearchable={false}
                                    instanceId="property_type"
                                    placeholder={
                                      <FormattedMessage id="intro.filter.property-type" />
                                    }
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
                                    placeholder={
                                      <FormattedMessage id="intro.filter.area-size" />
                                    }
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
                                    placeholder={
                                      <FormattedMessage id="intro.filter.price" />
                                    }
                                    value={propertyType}
                                    onChange={setPropertyType}
                                    name="type"
                                    id="property_type"
                                    options={property_type_options}
                                  />
                                </div>
                                <div className="beds-box">
                                  <Select
                                    styles={selectStyle}
                                    isSearchable={false}
                                    instanceId="property_type"
                                    placeholder={
                                      <FormattedMessage id="intro.filter.beds-and-baths" />
                                    }
                                    value={propertyType}
                                    onChange={setPropertyType}
                                    name="type"
                                    id="property_type"
                                    options={property_type_options}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="lb-left-box">
                              <BiCurrentLocation />
                            </div>
                          </div>
                          <div className="search-btn">
                            <button type="submit" className="btn">
                              <span>بحث</span>
                            </button>
                          </div>
                        </div>
                        {/* <div className="ifb-middle">
                          <span></span>
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
        <section className="popular-cities">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title">
                  <h2>Most popular cities</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="city-box"
                  style={{ backgroundImage: "url(/img/cairo-bg.png)" }}
                >
                  <h4>
                    <Link href="#">Cairo</Link>
                  </h4>
                  <span>11 Unit</span>
                </div>
                <div
                  className="city-box"
                  style={{ backgroundImage: "url(/img/cairo-bg.png)" }}
                >
                  <h4>
                    <Link href="#">6th of October City</Link>
                  </h4>
                  <span>11 Unit</span>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="city-box"
                  style={{ backgroundImage: "url(/img/cairo-bg.png)" }}
                >
                  <h4>
                    <Link href="#">Gizeh</Link>
                  </h4>
                  <span>11 Unit</span>
                </div>
                <div
                  className="city-box"
                  style={{ backgroundImage: "url(/img/cairo-bg.png)" }}
                >
                  <h4>
                    <Link href="#">Marsa Matruh</Link>
                  </h4>
                  <span>11 Unit</span>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="city-box"
                  style={{ backgroundImage: "url(/img/cairo-bg.png)" }}
                >
                  <h4>
                    <Link href="#">Alexandria</Link>
                  </h4>
                  <span>11 Unit</span>
                </div>
                <div
                  className="city-box"
                  style={{ backgroundImage: "url(/img/cairo-bg.png)" }}
                >
                  <h4>
                    <Link href="#">Hurghada</Link>
                  </h4>
                  <span>11 Unit</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tags">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="tags-list">
                  <h4>Properties For Installment</h4>
                  <ul>
                    <li>
                      <Link href="#">Properties in Cairo</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in Alexandria</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in Gizeh</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in Hurghada</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in 6th of October City</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="tags-list">
                  <h4>Properties For Sell</h4>
                  <ul>
                    <li>
                      <Link href="#">Properties in Marsa Matruh</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in Cairo</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in Alexandria</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in 6th of October City</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in Cairo</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="tags-list">
                  <h4>Properties For Rent</h4>
                  <ul>
                    <li>
                      <Link href="#">Properties in Alexandria</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in Gizeh</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in Marsa Matruh</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in Cairo</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in 6th of October City</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="tags-list">
                  <h4>popular Properties </h4>
                  <ul>
                    <li>
                      <Link href="#">Properties in Hurghada</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in Cairo</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in Marsa Matruh</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in Gizeh</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in Alexandria</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="tags"
          style={{
            backgroundColor: "#fff",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="tags-list">
                  <h4>Properties For Installment</h4>
                  <ul>
                    <li>
                      <Link href="#">Properties in Cairo</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in Alexandria</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in Gizeh</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in Hurghada</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in 6th of October City</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="tags-list">
                  <h4>Properties For Sell</h4>
                  <ul>
                    <li>
                      <Link href="#">Properties in Marsa Matruh</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in Cairo</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in Alexandria</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in 6th of October City</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in Cairo</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="tags-list">
                  <h4>Properties For Rent</h4>
                  <ul>
                    <li>
                      <Link href="#">Properties in Alexandria</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in Gizeh</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in Marsa Matruh</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in Cairo</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in 6th of October City</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="tags-list">
                  <h4>popular Properties </h4>
                  <ul>
                    <li>
                      <Link href="#">Properties in Hurghada</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in Cairo</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in Marsa Matruh</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in Gizeh</Link>
                    </li>
                    <li>
                      <Link href="#">Properties in Alexandria</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Default>
  );
};

export default Home;
