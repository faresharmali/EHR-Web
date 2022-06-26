import React, { Component } from "react";
import "./style.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from '@mui/icons-material/Logout';
const LabSidebar = ({navigateTo,setCurrentPage,signOut}) => {
  return (
    <div className="sidebar labSideBar">
      <h1 className="sideBarTitle">My Health +</h1>

      <div className="navigationSection">
   
       
        <div onClick={()=>navigateTo("Patients")} className="navigationItem">
          <GroupIcon sx={{ color: "#fff" }} />
          <h2 className="itemTitle">Patients</h2>
        </div>
        <div className="navigationItem">
          <SettingsIcon sx={{ color: "#fff" }} />
          <h2 className="itemTitle">Settings</h2>
        </div>
        <div onClick={()=>signOut()} className="navigationItem signout">
          <LogoutIcon sx={{ color: "#fff" }} />
          <h2 className="itemTitle">Sign out</h2>
        </div>
      </div>
    </div>
  );
};

export default LabSidebar;
