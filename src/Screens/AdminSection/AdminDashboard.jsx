import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import LoginIcon from "@mui/icons-material/Login";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import AdminSidebar from "../../Components/Navigation/AdminSideBar";
import Users from "./Users";
import "../DoctorSection/Doctor.css";
const AdminSection = ({setCurrentPage}) => {
  const [currentPage, navigateTo] = useState("Users");
  return (
    <section className="DoctorSection">
      <AdminSidebar navigateTo={navigateTo} setCurrentPage={setCurrentPage}/>
      <div className="main">
        {currentPage == "Users" && <Users navigateTo={navigateTo} />}
      </div>
    </section>
  );
};

export default AdminSection;
