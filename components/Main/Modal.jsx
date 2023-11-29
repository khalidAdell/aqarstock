import React, { useState } from "react";

const Modal = ({ isOpen, setIsOpen }) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="overlay-for-modal" onClick={closeModal}>
          <div className="aqar-stock-modal" onClick={handleModalClick}>
            <h1>Modal Content</h1>
            <p>Click inside the modal to keep it open.</p>
            <button onClick={closeModal}>close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
