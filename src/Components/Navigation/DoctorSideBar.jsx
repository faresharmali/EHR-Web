import React, { Component } from "react";
import "./style.css";
import GroupIcon from "@mui/icons-material/Group";

import LogoutIcon from '@mui/icons-material/Logout';
const DoctorSideBar = ({navigateTo,setCurrentPage,signOut}) => {
  return (
    <div className="sidebar">
      <h1 className="sideBarTitle">My Health +</h1>

      <div className="navigationSection">
    
       
        <div onClick={()=>navigateTo("Patients")} className="navigationItem">
          <GroupIcon sx={{ color: "#fff" }} />
          <h2 className="itemTitle">Patients</h2>
        </div>
     
        <div onClick={()=>signOut()} className="navigationItem signout">
          <LogoutIcon sx={{ color: "#fff" }} />
          <h2 className="itemTitle">Sign out</h2>
        </div>
      </div>
    </div>
  );
};

export default DoctorSideBar;
