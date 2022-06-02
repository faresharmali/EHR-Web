import React, { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import LoginIcon from '@mui/icons-material/Login';
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import DoctorSideBar from "../../Components/Navigation/DoctorSideBar";
import "./Doctor.css";
const DoctorSection = () => {
  return (
    <section className="DoctorSection">
    < DoctorSideBar />
    </section>
  );
};

export default DoctorSection;
