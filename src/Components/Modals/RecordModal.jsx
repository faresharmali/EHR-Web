import React, { Component, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { CreateAsset } from "../../api/assets";
const RecordModal = ({ setShowModal, Record, patientID }) => {
    console.log(Record)
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
            <h2 className="recordItem"><span>bloodGroup:</span> {Record.bloodGroup} </h2>
            <h2 className="recordItem"><span>lastVisits:</span> {Record.lastVisits} </h2>
            <h2 className="recordItem"><span>radio:</span> {Record.radio} </h2>
            <h2 className="recordItem"><span>report:</span> {Record.report} </h2>
            <h2 className="recordItem"><span>symptoms:</span> {Record.symptoms} </h2>
            <h2 className="recordItem"><span>treatment:</span> {Record.treatment} </h2>

        </div>
      </div>
    </div>
  );
};

export default RecordModal;
