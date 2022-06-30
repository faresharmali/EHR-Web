import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { getPatients } from "../../api/doctor";
import AddAnalysisModal from "../../Components/Modals/AddAnalysis";
const Patients = ({ navigateTo, setPatient }) => {
  let loggedUser = JSON.parse(localStorage.getItem("loggedUser")).user;
  const [PatientList, setPatientList] = useState([]);
  const [selectedPatient, setselectedPatient] = useState({});
  const [showAnalysisModal, setshowAnalysisModal] = useState(false);

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
      console.log(res.data.docs);
      setPatientList(
        res.data.docs.filter(
          (u) =>
            u.role == "patient" &&
            JSON.parse(u.doctorswithpermission).includes(loggedUser._id)
        )
      );
      setAllPatientList(
        res.data.docs.filter(
          (u) =>
            u.role == "patient" &&
            JSON.parse(u.doctorswithpermission).includes(loggedUser._id)
        )
      );
    }
  };


  return (
    <section className="mainPage patientsSection">
      <div className="filterSection">
        <div className="filters">
          <div className="filterItem filterItemlab flex_center">
            <h1 className="filterText">All Patients</h1>
          </div>

         
        </div>
        <div onClick={fetchUsers} className="Btn2  flex_center">
          <h1 className="filterText btnText">Refresh</h1>
        </div>
      </div>

      <div className="patientstable ">
        <div className="tableHeading Labpatientstable">
          <div className="headingItem">
            <h2 className="headingTitle lab">Select</h2>
          </div>
          <div className="headingItem">
            <h2 className="headingTitle lab">Full Name</h2>
          </div>
          <div className="headingItem">
            <h2 className="headingTitle lab">Date of birth</h2>
          </div>
          <div className="headingItem">
            <h2 className="headingTitle lab">Phone number</h2>
          </div>
          <div className="headingItem">
            <h2 className="headingTitle lab">Actions</h2>
          </div>
        </div>
        {PatientList.map((patient) => (
          <div className="tableRow">
            <div className="tableColumn">
              <Checkbox
                sx={{
                  color: "#3F7FBF",
                  "&.Mui-checked": {
                    color: "#3F7FBF",
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
                  onClick={() => {
                    setselectedPatient(patient);
                    setshowAnalysisModal(true);
                  }}
                  className="iconContainer"
                >
                  <AddCircleIcon sx={{ color: "#3F7FBF" }} />
                </div>
               
              </h2>
            </div>
          </div>
        ))}
      </div>
      {showAnalysisModal && (
        <AddAnalysisModal
          patientID={selectedPatient.userID}
          setShowModal={setshowAnalysisModal}
        />
      )}
    </section>
  );
};

export default Patients;
