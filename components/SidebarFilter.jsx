import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";
import Select from "react-select";

const SidebarFilter = ({ setShowSidebarFilter }) => {
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

  const [unitType, setUnitType] = useState([]);
  const [cities, setCities] = useState([]);
  const [neighborhoods, setNeighborhoods] = useState([]);
  const [rentTime, setRentTime] = useState("");
  const [roomsCount, setRoomsCount] = useState("*");
  const [floorNum, setFloorNum] = useState("*");
  const [lastTwoWeeks, setLastTwoWeeks] = useState(false);
  const unit_type_options = [
    { value: "غير محدد", label: "غير محدد" },
    { value: "شقة للإيجار", label: "شقة للإيجار" },
    { value: "أرض للبيع", label: "أرض للبيع" },
    { value: "فيلا للبيع", label: "فيلا للبيع" },
    { value: "فيلا للإيجار", label: "فيلا للإيجار" },
    { value: "شقة للبيع", label: "شقة للبيع" },
    { value: "عمارة للبيع", label: "عمارة للبيع" },
    { value: "محل للإيجار", label: "محل للإيجار" },
    { value: "بيت للبيع", label: "بيت للبيع" },
    { value: "بيت للإيجار", label: "بيت للإيجار" },
    { value: "مكتب تجاري للإيجار", label: "مكتب تجاري للإيجار" },
    { value: "محل للبيع", label: "محل للبيع" },
    { value: "شقة مفروشة", label: "شقة مفروشة" },
    { value: "شاليه للإيجار", label: "شاليه للإيجار" },
    { value: "مستودع للإيجار", label: "مستودع للإيجار" },
  ];

  const cities_options = [
    { value: "القاهره", label: "القاهره" },
    { value: "الاسكندريه", label: "الاسكندريه" },
    { value: "الجيزه", label: "الجيزه" },
    { value: "اسوان", label: "اسوان" },
    { value: "الأقصر", label: "الأقصر" },
    { value: "الشرقية", label: "الشرقية" },
    { value: "البحيرة", label: "البحيرة" },
    { value: "مرسي مطروح", label: "مرسي مطروح" },
  ];

  const neighborhoods_options = [
    { value: "حدائق المعادي", label: "حدائق المعادي" },
    { value: "حلمية الزيتون", label: "حلمية الزيتون" },
    { value: "حي الأزبكية", label: "حي الأزبكية" },
    { value: "حي البساتين", label: "حي البساتين" },
    { value: "حي المعادي", label: "حي المعادي" },
    { value: "حي المقطم", label: "حي المقطم" },
    { value: "حي المنيل", label: "حي المنيل" },
    { value: "حي النزهة", label: "حي النزهة" },
  ];
  const floorNum_options = [
    { value: "الكل", label: "الكل" },
    { value: "دور ارضي", label: "دور ارضي" },
    { value: "دور علوي", label: "دور علوي" },
    { value: "الدور 3", label: "الدور 3" },
    { value: "الدور 4", label: "الدور 4" },
    { value: "الدور 5", label: "الدور 5" },
    { value: "الدور 6", label: "الدور 6" },
    { value: "الدور 7", label: "الدور 7" },
    { value: "الدور 8", label: "الدور 8" },
    { value: "الدور 9", label: "الدور 9" },
    { value: "الدور 10", label: "الدور 10" },
    { value: "الدور 11", label: "الدور 11 " },
  ];

  //   حدائق المعادي
  //
  //   حلوان
  //
  //
  //   حي التبين
  //   حي الخليفة
  //   حي الزاوية الحمراء
  //   حي الزبالين
  //   حي الزيتون (القاهرة)
  //   حي الساحل
  //   حي السيدة زينب
  //   حي الشرابية
  //   حي المرج
  //   حي المعادي
  //   حي المقطم
  //   حي المنيل
  //   حي النزهة (القاهرة)
  //   حي الوايلي
  //   حي حدائق القبة
  //   حي دار السلام
  //   حي شبرا
  //   حي طره
  //   حي عين شمس
  //   حي مصر القديمة
  //   حي منشأة ناصر
  return (
    <div className="sidebar-wrap">
      <div className="sidebar-filter">
        <div className="sidebar-filter-header">
          <div className="close-sidebar-btn-wrap">
            <button
              type="button"
              className="btn"
              onClick={(e) => setShowSidebarFilter(false)}
            >
              <AiOutlineClose />
            </button>
          </div>
          <span className="sidebar-title">ابحث عن عقار</span>
          <div className="reset-filter-btn-wrap">
            <button type="button" className="btn">
              <GrPowerReset />
            </button>
          </div>
        </div>
        <div className="sidebar-filter-content">
          <div className="filter-item-box">
            <label className="fib-label">قسم العقار</label>
            <div className="filter-type-select">
              <Select
                styles={selectStyle}
                isSearchable={false}
                instanceId="unit_type"
                placeholder="غير محدد"
                value={unitType}
                onChange={setUnitType}
                name="type"
                id="unit_type"
                options={unit_type_options}
              />
            </div>
          </div>
          <div className="filter-item-box">
            <label className="fib-label">المدينة</label>
            <div className="filter-type-select">
              <Select
                styles={selectStyle}
                isSearchable={false}
                instanceId="unit_type"
                placeholder="غير محدد"
                value={cities}
                onChange={setCities}
                name="cities"
                id="cities_select"
                options={cities_options}
              />
            </div>
          </div>
          {cities.value && (
            <div className="filter-item-box">
              <label className="fib-label">المدينة</label>
              <div className="filter-type-select">
                <Select
                  styles={selectStyle}
                  isSearchable={false}
                  instanceId="unit_type"
                  placeholder="غير محدد"
                  value={neighborhoods}
                  onChange={setNeighborhoods}
                  name="neighborhoods"
                  id="neighborhoods_select"
                  options={neighborhoods_options}
                />
              </div>
            </div>
          )}
          {unitType.value && (
            <div className="filter-item-box">
              <label className="fib-label">مدة الإيجار</label>
              <div className="filter-type-tabs">
                <div
                  className={`ftt-box ${
                    rentTime === "per-day" ? "active" : ""
                  }`}
                  onClick={() => setRentTime("per-day")}
                >
                  <span>يومي</span>
                </div>
                <div
                  className={`ftt-box ${
                    rentTime === "per-month" ? "active" : ""
                  }`}
                  onClick={() => setRentTime("per-month")}
                >
                  <span>شهري</span>
                </div>
                <div
                  className={`ftt-box ${
                    rentTime === "per-year" ? "active" : ""
                  }`}
                  onClick={() => setRentTime("per-year")}
                >
                  <span>سنوي</span>
                </div>
              </div>
            </div>
          )}
          {unitType.value && (
            <div className="filter-item-box">
              <label className="fib-label">الغرف</label>
              <div className="filter-type-tabs">
                <div
                  className={`ftt-box ${roomsCount === "*" ? "active" : ""}`}
                  onClick={() => setRoomsCount("*")}
                >
                  <span>الكل</span>
                </div>
                <div
                  className={`ftt-box ${roomsCount === "2" ? "active" : ""}`}
                  onClick={() => setRoomsCount("2")}
                >
                  <span>غرفتين</span>
                </div>
                <div
                  className={`ftt-box ${roomsCount === "3" ? "active" : ""}`}
                  onClick={() => setRoomsCount("3")}
                >
                  <span>3 غرف</span>
                </div>
                <div
                  className={`ftt-box ${roomsCount === "4" ? "active" : ""}`}
                  onClick={() => setRoomsCount("4")}
                >
                  <span>4 غرف</span>
                </div>
              </div>
            </div>
          )}
          {unitType.value && (
            <div className="filter-item-box">
              <label className="fib-label">رقم الدور</label>
              <div className="filter-type-select">
                <Select
                  styles={selectStyle}
                  isSearchable={false}
                  instanceId="unit_type"
                  placeholder="الرجاء الاختيار..."
                  value={floorNum}
                  onChange={setFloorNum}
                  name="floorNum"
                  id="floorNum_select"
                  options={floorNum_options}
                />
              </div>
            </div>
          )}
        </div>
        <div className="sidevar-filter-footer">
          <div className="searchbar_switch">
            <button
              type="button"
              onClick={(e) => setLastTwoWeeks(!lastTwoWeeks)}
              class={`Switch-module_switch ${lastTwoWeeks ? "active" : ""}`}
            >
              <div className="Switch-module_handler"></div>
            </button>
            <p className="searchbar_label">أخر اسبوعين فقط</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;
