import React, { Component, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { CreateAsset } from "../../api/assets";
const AddReportModal = ({ setShowModal, patientID,fetchData }) => {


  const [userInput, setUserInput] = useState({
    Diagnosis: "",
    treatment: "",
    heartrate: "",
    doctor: localStorage.getItem("loggedUser"),
    Symtoms: "",
    Allergies: "",
    BloodGroup: "",
    report: "",
    glucose: "",
    type:"report",
    lastVisits: JSON.stringify(new Date()),
  });
  const handleUserInput = (input, fieldName) => {
    setUserInput({ ...userInput, [fieldName]: input });
  };
  const create = async () => {
    const res = await CreateAsset(
      JSON.parse(localStorage.getItem("loggedUser")).token,
      patientID,
      userInput
    );
    if (res.data.ok) {
      setShowModal(false);
      fetchData()
    } else {
      alert("error");
    }
  };
  return (
    <div onClick={() => setShowModal(false)} className="Modal">
      <div
        onClick={(e) => e.stopPropagation()}
        className="modalContent2 flex_center"
      >
        <h2 className="ModalTitle"> Create new record</h2>
        <div className="AddUserformContainer">
          <TextField
            className="textField"
            id="outlined-basic"
            label="Diagnosis"
            variant="outlined"
            multiline
            onChange={(e) => handleUserInput(e.target.value, "Diagnosis")}
          />
          <TextField
            className="textField"
            id="outlined-basic"
            label="Treatement"
            multiline
            variant="outlined"
            onChange={(e) => handleUserInput(e.target.value, "treatment")}
          />
          <TextField
            className="textField"
            id="outlined-basic"
            label="Symtoms"
            multiline
            variant="outlined"
            onChange={(e) => handleUserInput(e.target.value, "symptoms")}
          />
          <TextField
            className="textField"
            id="outlined-basic"
            label="Allergies"
            multiline
            variant="outlined"
            onChange={(e) => handleUserInput(e.target.value, "Allergies")}
          />
          <TextField
            className="textField"
            id="outlined-basic"
            label="BloodGroupe"
            multiline
            variant="outlined"
            onChange={(e) => handleUserInput(e.target.value, "bloodGroup")}
          />

          <TextField
            id="outlined-multiline-flexible"
            label="Glucose Level"
            multiline
            maxRows={4}
            onChange={(e) => handleUserInput(e.target.value, "glucose")}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="HeartRate"
            multiline
            maxRows={4}
            onChange={(e) => handleUserInput(e.target.value, "heartrate")}
          />
        </div>
        <Button onClick={create} className="LoginBtn" variant="contained">
          <PersonAddAlt1Icon sx={{ color: "#fff", marginRight: "5px" }} />
          Create record
        </Button>
      </div>
    </div>
  );
};

export default AddReportModal;
