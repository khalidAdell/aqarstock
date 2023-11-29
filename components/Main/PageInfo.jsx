import React from "react";

const PageInfo = ({ image, title, children }) => {
  return (
    <div className="page-info" style={{ backgroundImage: `url(${image})` }}>
      <div className="row">
        <div className="col">
          <div className="page-title">
            <h1>{title}</h1>
          </div>
          <div className="page-pagination">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageInfo;
