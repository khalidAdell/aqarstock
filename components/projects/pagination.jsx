import React, { useEffect, useState } from "react";

const DataPagination = ({data, setCurrentData, sectionRef}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setCurrentData(getDataSlice(currentPage));
  }, [currentPage]);

  const getDataSlice = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    let da = data;
    return da.slice(startIndex, endIndex);
  };

  const handlePageChange = (pageNumber) => {
    window.scrollTo({ top: sectionRef.current.offsetTop, behavior: "smooth" });
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const renderPaginationItems = () => {
    const paginationItems = [];
    for (let i = 1; i <= totalPages; i++) {
      const isActive = i === currentPage;
      const classNames = `pagination-item ${isActive ? "active" : ""}`;

      paginationItems.push(
        <li key={i} className={classNames} onClick={() => handlePageChange(i)}>
          {i}
        </li>
      );
    }
    return paginationItems;
  };
  return <>{renderPaginationItems()}</>;
};

export default DataPagination;
