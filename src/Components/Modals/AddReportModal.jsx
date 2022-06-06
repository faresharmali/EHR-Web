import React, { Component } from "react";
const AddReportModal = ({setShowModal}) => {
  return <div onClick={()=>setShowModal(false)} className="Modal">
      <div onClick={(e)=>e.stopPropagation()} className="modalContent">

</div>
  </div>;
};

export default AddReportModal;
