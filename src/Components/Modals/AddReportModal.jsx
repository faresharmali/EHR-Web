import React, { Component, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { CreateAsset } from "../../api/assets";
const AddReportModal = ({ setShowModal, fetchUsers, patientID }) => {
  const [errorMessageVisible, setErrorMessageVisibility] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [userInput, setUserInput] = useState({
    Diagnosis: "",
    Treatement: "",
    Symtoms: "",
    Allergies: "",
    BloodGroupe: "",
    Report: "",
    glucose: "",

    lastVisits: JSON.stringify(new Date()),
  });
  const handleUserInput = (input, fieldName) => {
    setUserInput({ ...userInput, [fieldName]: input });
  };
  const create = async () => {
    console.log(patientID);
    const res = await CreateAsset(JSON.parse(localStorage.getItem("loggedUser")).token,patientID, userInput);
    console.log(res);
    if (res.data.ok) {
      setShowModal(false)
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
        <h2 className="ModalTitle">
          {" "}
       
          Create new record
        </h2>
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
            onChange={(e) => handleUserInput(e.target.value, "Treatement")}
          />
          <TextField
            className="textField"
            id="outlined-basic"
            label="Symtoms"
            multiline
            variant="outlined"
            onChange={(e) => handleUserInput(e.target.value, "Symtoms")}
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
            onChange={(e) => handleUserInput(e.target.value, "BloodGroupe")}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Report"
            multiline
            maxRows={4}
            onChange={(e) => handleUserInput(e.target.value, "Report")}
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
