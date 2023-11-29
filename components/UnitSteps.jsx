import React from "react";

const UnitSteps = ({ progress, setTab }) => {
  return (
    <div className="unit-steps">
      <ul>
        <li className={progress === 1 ? "done" : ""}>
          <a href="#0" onClick={() => setTab(1)}>
            <span className="num">01</span>
            <span className="txt">قسم العقار</span>
          </a>
        </li>
        <li className={progress === 2 ? "done" : ""}>
          <a href="#0" onClick={() => setTab(2)}>
            <span className="num">02</span>
            <span className="txt">الصور</span>
          </a>
        </li>
        <li className={progress === 3 ? "done" : ""}>
          <a href="#0" onClick={() => setTab(3)}>
            <span className="num">03</span>
            <span className="txt">مواصفات الوحدة</span>
          </a>
        </li>
        <li className={progress === 4 ? "done" : ""}>
          <a href="#0" onClick={() => setTab(4)}>
            <span className="num">04</span>
            <span className="txt">العنوان</span>
          </a>
        </li>
        <li className={progress === 5 ? "done" : ""}>
          <a href="#0" onClick={() => setTab(5)}>
            <span className="num">05</span>
            <span className="txt">وصف الاعلان</span>
          </a>
        </li>
      </ul>
      <div className="form-button">
        <button className="btn">رفع العقار</button>
      </div>
    </div>
  );
};

export default UnitSteps;
