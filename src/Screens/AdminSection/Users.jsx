import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import AddIcon from "@mui/icons-material/Add";
import AddUserModal from "../../Components/Modals/AddUserModal";
const Users = ({ navigateTo }) => {
    const [showModal,setShowModal]=useState(false)

  const [PatientList, setPatientList] = useState([
    { name: "Patient 1", age: 24, lastVisit: "25/08/2022", checked: false },
    { name: "Patient 2", age: 25, lastVisit: "12/04/2022", checked: false },
    { name: "Patient 3", age: 23, lastVisit: "25/06/2021", checked: false },
    {
      name: "Patient 4",
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
            <h1 className="filterText">All users</h1>
          </div>

          <div className="filterItem flex_center">
            <h1 className="filterText">Doctors</h1>
          </div>
          <div className="filterItem flex_center">
            <h1 className="filterText">Patients</h1>
          </div>
          <div className="filterItem flex_center">
            <h1 className="filterText">Laboratories</h1>
          </div>
        </div>
        <input className="searchInput" type="text" placeholder="search" />
      </div>
      <div className="filterSection">
        <div className="filters"></div>
        <div onClick={()=>setShowModal(true)} className="Btn AddRecord flex_center">
          <AddIcon sx={{ color: "#fff", marginRight: "5px" }} />
          New user
        </div>
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
                <div
                  onClick={() => navigateTo("PatientProfile")}
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
      {showModal && <AddUserModal setShowModal={setShowModal}/>} 

    </section>
  );
};

export default Users;
