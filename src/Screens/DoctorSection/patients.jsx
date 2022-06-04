import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
const Patients = ({navigateTo}) => {
  const [PatientList, setPatientList] = useState([
    { name: "Fares Harmali", age: 24, lastVisit: "25/08/2022", checked: false },
    { name: "Mokran Islam", age: 25, lastVisit: "12/04/2022", checked: false },
    { name: "Dahmani smail", age: 23, lastVisit: "25/06/2021", checked: false },
    {
      name: "Abd el madjid smail",
      age: 23,
      lastVisit: "14/05/2022",
      checked: false,
    },
    { name: "Patient 5", age: 17, lastVisit: "30/05/2021", checked: false },

  ]);
  const handleChange = (event, name) => {
    setPatientList(
      PatientList.map((p) => ({
        ...p,
        checked: p.name == name ? event.target.checked : p.checked,
      }))
    );
  };

  return (
    <section className="mainPage patientsSection">
      <div className="filterSection">
        <div className="filters">
          <div className="filterItem flex_center">
            <h1 className="filterText">All Patients</h1>
          </div>
          <div className="filterItem flex_center">
            <h1 className="filterText">My Patients</h1>
          </div>
          <div className="filterItem flex_center">
            <h1 className="filterText">Recent Patients</h1>
          </div>
        </div>
        <input className="searchInput" type="text" placeholder="search" />
      </div>

      <div className="patientstable">
        <div className="tableHeading">
          <div className="headingItem">
            <h2 className="headingTitle">Select</h2>
          </div>
          <div className="headingItem">
            <h2 className="headingTitle">Full Name</h2>
          </div>
          <div className="headingItem">
            <h2 className="headingTitle">Age</h2>
          </div>
          <div className="headingItem">
            <h2 className="headingTitle">Last visit</h2>
          </div>
          <div className="headingItem">
            <h2 className="headingTitle">Actions</h2>
          </div>
        </div>
        {PatientList.map((patient) => (
          <div className="tableRow">
            <div className="tableColumn">
              <Checkbox
                sx={{
                  color: "#00a77a",
                  "&.Mui-checked": {
                    color: "#00a77a",
                  },
                }}
                checked={patient.checked}
                onChange={(e) => handleChange(e, patient.name)}
                inputProps={{ "aria-label": "controlled" }}
              />
            </div>
            <div className="tableColumn">
              <h2 className="columnItem">{patient.name}</h2>
            </div>
            <div className="tableColumn">
              <h2 className="columnItem">{patient.age}</h2>
            </div>
            <div className="tableColumn">
              <h2 className="columnItem">{patient.lastVisit}</h2>
            </div>
            <div className="tableColumn">
              <h2 className="columnItem">
                {" "}
                <div onClick={()=>navigateTo("PatientProfile")} className="iconContainer">
                  <OpenInNewIcon sx={{ color: "#00A77A" }} />
                </div>
                <div className="iconContainer">
                  <DeleteIcon sx={{ color: "#D42A2A" }} />
                </div>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Patients;