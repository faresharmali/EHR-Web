import React, { Component, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

const AddAnalysisModal = ({ setShowModal, fetchUsers, patientID }) => {
  const [errorMessageVisible, setErrorMessageVisibility] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState({ preview: "", data: "" });

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

  const handleSubmit = async (e) => {
    const axios = require("axios");
    e.preventDefault();
    let formData = new FormData();
    formData.append("image", image.data);
    formData.append("report", "reportsssssssssssssssssss");

    axios
      .post("http://192.168.100.3:8081/api/asset/" + patientID, formData, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("loggedUser")).token,
        },
      })
      .then((res) => {
        console.log(res);
      });
  };
  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };

    setImage(img);
  };
  return (
    <div onClick={() => setShowModal(false)} className="Modal">
      <div
        onClick={(e) => e.stopPropagation()}
        className="modalContent2 flex_center"
      >
        <h2 className="ModalTitle"> Create new Analysis</h2>
        <form className="form flex_center" onSubmit={handleSubmit} enctype="multipart/form-data">
          <TextField
            className="textField"
            id="outlined-basic"
            label="Report"
            variant="outlined"
            multiline
            onChange={(e) => handleUserInput(e.target.value, "Diagnosis")}
          />
          <input type="file" name="image" onChange={handleFileChange} />
          <button className="SubmitBtn flex_center" type="submit">
          <AddIcon sx={{ color: "#fff" }} />

            Add Analysis
          </button>
        </form>
        <div className="AddUserformContainer"></div>
      </div>
    </div>
  );
};

export default AddAnalysisModal;
