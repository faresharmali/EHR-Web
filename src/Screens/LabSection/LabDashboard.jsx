import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import LoginIcon from "@mui/icons-material/Login";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import LabSidebar from "../../Components/Navigation/LabSideBar";
import Patients from "./patients";
import "./Doctor.css";
const LabSection = ({setCurrentPage,signOut}) => {
  const [currentPage, navigateTo] = useState("Patients");
  const [Patient, setPatient] = useState({});
  return (
    <section className="DoctorSection">
      <LabSidebar  signOut={signOut}  navigateTo={navigateTo} setCurrentPage={setCurrentPage}/>
      <div className="main">
        {currentPage == "Patients" && <Patients navigateTo={navigateTo} setPatient={setPatient} />}
      </div>
    </section>
  );
};

export default LabSection;
