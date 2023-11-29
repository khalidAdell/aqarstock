import React from "react";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb">
      <ul className="breadcrumb-list">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <span>/</span>
        <li className="breadcrumb-item">
          <a href="#">Gurgaon</a>
        </li>
        <span>/</span>
        <li className="breadcrumb-item">
          <a href="#"> City</a>
        </li>
        <span>/</span>
        <li className="breadcrumb-item">
          <a href="#">Item</a>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
