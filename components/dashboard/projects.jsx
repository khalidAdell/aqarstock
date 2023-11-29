import React, { useState } from "react";
import Table from "rc-table";
import { AiOutlineEdit, AiOutlineSearch } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";
import { FormattedMessage } from "react-intl";
import Select from "react-select";

const DProjects = () => {
  const [companyName, setCompanyName] = useState();
  const columns = [
    {
      title: "الاسم",
      dataIndex: "name",
      key: "name",
      width: 300,
    },
    {
      title: "اسم الشركه",
      dataIndex: "companyName",
      key: "companyName",
      width: 100,
    },
    {
      title: "مميز",
      dataIndex: "type",
      key: "type",
      width: 100,
    },
    {
      title: "موقوف",
      dataIndex: "stopStatus",
      key: "stopStatus",
      width: 200,
    },
    {
      title: "الحالة",
      dataIndex: "unitType",
      key: "unitType",
      width: 200,
    },
    {
      title: "العمليات",
      dataIndex: "",
      key: "operations",
      render: () => (
        <div className="operations-btns">
          <a href="#" className="btn delete-btn">
            <BiTrashAlt />
            <span>Delete</span>
          </a>
          <a href="#" className="btn edit-btn">
            <AiOutlineEdit />
            <span>Edit</span>
          </a>
        </div>
      ),
    },
  ];

  const data = [
    {
      name: "امتلك الان شالية في موسي كوست (راس سدر)",
      type: "نعم",
      unitType: "جديد",
      companyName: "مشارف العقارية",
      stopStatus: "متوفر",
      key: "1",
    },
    {
      name: "امتلك شالية بسعر لقطة وفيو رائع علي البحر في جي باي السخنة",
      type: "لا",
      unitType: "قديم",
      companyName: "عقار ستوك",
      stopStatus: "متوفر",
      key: "2",
    },
    {
      name: "امتلك شالية بسعر لقطة وفيو رائع علي البحر في جي باي السخنة",
      type: "لا",
      unitType: "جديد",
      companyName: "مشارف العقارية",
      stopStatus: " غير متوفر",
      key: "2",
    },
    {
      name: "امتلك شالية بسعر لقطة وفيو رائع علي البحر في جي باي السخنة",
      type: "لا",
      unitType: "جديد",
      companyName: "مشارف العقارية",
      stopStatus: "متوفر",
      key: "2",
    },
    {
      name: "امتلك شالية بسعر لقطة وفيو رائع علي البحر في جي باي السخنة",
      type: "نعم",
      unitType: "قديم",
      companyName: "عقار ستوك",
      stopStatus: "متوفر",
      key: "2",
    },
    {
      name: "امتلك شالية بسعر لقطة وفيو رائع علي البحر في جي باي السخنة",
      type: "نعم",
      unitType: "جديد",
      companyName: "مشارف العقارية",
      stopStatus: "غير متوفر",
      key: "2",
    },
    {
      name: "امتلك شالية بسعر لقطة وفيو رائع علي البحر في جي باي السخنة",
      type: "لا",
      unitType: "جديد",
      companyName: "مشارف العقارية",
      stopStatus: "متوفر",
      key: "2",
    },
  ];
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
    { value: "villa", label: "مشارف العقارية" },
    { value: "twin_house", label: "عقار ستوك" },
  ];
  return (
    <div className="projects">
      <div className="projects-search">
        <form>
          <Select
            styles={selectStyle}
            isSearchable={false}
            instanceId="property_type"
            placeholder={<FormattedMessage id="intro.filter.property-type" />}
            value={companyName}
            onChange={setCompanyName}
            name="type"
            id="property_type"
            options={property_type_options}
          />
          <input type="text" placeholder="كلمة البحث" />
          <button type="submit">
            <AiOutlineSearch />
          </button>
        </form>
      </div>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default DProjects;
