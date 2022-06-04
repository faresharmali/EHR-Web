import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import LoginIcon from "@mui/icons-material/Login";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import DoctorSideBar from "../../Components/Navigation/DoctorSideBar";
import Patients from "./patients";
import PatientProfile from "./PatientProfile";
import "./Doctor.css";
const DoctorSection = () => {
  const [currentPage, navigateTo] = useState("PatientProfile");
  return (
    <section className="DoctorSection">
      <DoctorSideBar />
      <div className="main">
        {currentPage == "Patients" && <Patients navigateTo={navigateTo} />}
        {currentPage == "PatientProfile" && <PatientProfile navigateTo={navigateTo} />}
      </div>
    </section>
  );
};

export default DoctorSection;
