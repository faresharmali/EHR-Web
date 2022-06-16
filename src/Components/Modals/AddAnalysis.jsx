import React, { Component, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { CreateAsset } from "../../api/assets";
const AddAnalysisModal = ({ setShowModal, fetchUsers, patientID }) => {
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
    const res = await CreateAsset(patientID, userInput);
    console.log(res);
    if (res.data.ok) {
    } else {
      alert("error");
    }
  };
  const uploadFile=(e)=>{
    console.log(e.target.files[0])
  }
  return (
    <div onClick={() => setShowModal(false)} className="Modal">
      <div
        onClick={(e) => e.stopPropagation()}
        className="modalContent2 flex_center"
      >
        <h2 className="ModalTitle">
          {" "}
       
          Create new Analysis
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
            <input type="file" onChange={uploadFile} />
        </div>
        <Button onClick={create} className="LoginBtn" variant="contained">
          <PersonAddAlt1Icon sx={{ color: "#fff", marginRight: "5px" }} />
          Create record
        </Button>
      </div>
    </div>
  );
};

export default AddAnalysisModal;
