import React, { Component, useState } from "react";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";

const AddAnalysisModal = ({ setShowModal, fetchUsers, patientID }) => {
  const [image, setImage] = useState({ preview: "", data: "" });
  const [userInput, setUserInput] = useState({
    report: "",
    Diagnosis: "none",
    treatment: "none",
    heartrate: "none",
    Allergies: "none",
    glucose: "none",
    BloodGroup: "none",
    symtoms: "none",
    type:"radio",
    doctor: localStorage.getItem("loggedUser"),
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
    formData.append("doctor", userInput.doctor);
    formData.append("report", userInput.report);
    formData.append("Diagnosis", userInput.Diagnosis);
    formData.append("treatement", userInput.report);
    formData.append("heartrate", userInput.heartrate);
    formData.append("symtoms", userInput.symtoms);
    formData.append("Allergies", userInput.Allergies);
    formData.append("BloodGroup", userInput.BloodGroup);
    formData.append("glucose", userInput.glucose);
    formData.append("lastVisits", JSON.stringify(new Date()));
    formData.append("type","radio");

    axios
      .post("http://192.168.100.3:8081/api/asset/" + patientID, formData, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("loggedUser")).token,
        },
      })
      .then((res) => {
        setShowModal(false);
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
        <form
          className="form flex_center"
          onSubmit={handleSubmit}
          enctype="multipart/form-data"
        >
          <TextField
            className="textField"
            id="outlined-basic"
            label="Report"
            variant="outlined"
            multiline
            onChange={(e) => handleUserInput(e.target.value, "report")}
          />
          <input type="file" name="image" onChange={handleFileChange} />
          <button className="SubmitBtn btnLab flex_center" type="submit">
            <AddIcon sx={{ color: "#fff" }} />
            Add Analysis
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAnalysisModal;
