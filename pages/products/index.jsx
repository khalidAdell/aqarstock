import React, { useState } from "react";
import SidebarFilter from "../../components/SidebarFilter";
import Default from "../../layouts/default";
import Select from "react-select";
import { FormattedMessage } from "react-intl";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import Link from "next/link";
const Products = () => {
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
    <Default>
      {showSidebarFilter && (
        <SidebarFilter setShowSidebarFilter={setShowSidebarFilter} />
      )}
      <div className="products-page uniqe-page">
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
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Default>
  );
};
export default Products;
