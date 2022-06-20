import React, { Component, useState } from "react";
import Button from "@mui/material/Button";

const RecordModal = ({ setShowModal, Record, OpenRadio }) => {
  return (
    <div onClick={() => setShowModal(false)} className="Modal">
      <div
        onClick={(e) => e.stopPropagation()}
        className="modalContent2 flex_center"
      >
        <h2 className="ModalTitle"> Medical Record</h2>
        <div className="AddUserformContainer">
            <h2 className="recordItem"><span> Allergies:</span> {Record.Allergies} </h2>
            <h2 className="recordItem"><span>Diagnosis:</span> {Record.Diagnosis} </h2>
            <h2 className="recordItem"><span>Report:</span> {Record.report} </h2>
            <h2 className="recordItem"><span>bloodGroup:</span> {Record.bloodGroup} </h2>
            <h2 className="recordItem"><span>Date:</span> {Record.lastVisits} </h2>
            <h2 className="recordItem"><span>Radio:</span> <Button className="radioBtn" onClick={()=>OpenRadio(Record.radio)}>Check Radio</Button> </h2>
            <h2 className="recordItem"><span>symptoms:</span> {Record.symptoms} </h2>
            <h2 className="recordItem"><span>treatment:</span> {Record.treatment} </h2>

        </div>
      </div>
    </div>
  );
};

export default RecordModal;
