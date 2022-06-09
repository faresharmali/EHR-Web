import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { getPatients,getPatientAsset } from "../../api/doctor";
const Patients = ({ navigateTo }) => {
  const [PatientList, setPatientList] = useState([]);
  const [AllPatientList, setAllPatientList] = useState([]);
  const handleChange = (event, name) => {
    setPatientList(
      PatientList.map((p) => ({
        ...p,
        checked: p.name == name ? event.target.checked : p.checked,
      }))
    );
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    const res = await getPatients();
    if (res.data.ok) {
      setPatientList(res.data.docs.filter((u)=>u.role=="patient"));
      setAllPatientList(res.data.docs.filter((u)=>u.role=="patient"));
    }
  };

  const getasset=async(patient)=>{
    console.log(patient.userID)
   const res= await  getPatientAsset(patient.userID)
   console.log(res.data)
  }
  return (
    <section className="mainPage patientsSection">
      <div className="filterSection">
        <div className="filters">
          <div className="filterItem flex_center">
            <h1 className="filterText">All Patients</h1>
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
            <h2 className="headingTitle">Date of birth</h2>
          </div>
          <div className="headingItem">
            <h2 className="headingTitle">Phone number</h2>
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
              <h2 className="columnItem">
                {" "}
                {patient.firstName + " " + patient.lastName}
              </h2>
            </div>
            <div className="tableColumn">
              <h2 className="columnItem">{patient.birthday}</h2>
            </div>
            <div className="tableColumn">
              <h2 className="columnItem">{patient.contact}</h2>
            </div>
            <div className="tableColumn">
              <h2 className="columnItem">
                {" "}
                <div
                  onClick={() => getasset(patient)}
                  className="iconContainer"
                >
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
