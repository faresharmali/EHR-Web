import React, { Component, useState } from "react";

const RadioModal = ({ setShowModal, Link }) => {
  console.log("link", Link);
  return (
    <div onClick={() => setShowModal(false)} className="Modal">
      <div
        onClick={(e) => e.stopPropagation()}
        className="modalContent3 flex_center"
      >
        <img className="Radio" alt="hello" src={"http://192.168.106.13:8081/" + Link} />
      </div>
    </div>
  );
};

export default RadioModal;
