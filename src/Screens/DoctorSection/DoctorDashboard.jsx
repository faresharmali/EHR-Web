import React, { useState } from "react";

import DoctorSideBar from "../../Components/Navigation/DoctorSideBar";
import Patients from "./patients";
import PatientProfile from "./PatientProfile";
import Records from "./PatientRecords";
import "./Doctor.css";
const DoctorSection = ({setCurrentPage,signOut}) => {
  const [currentPage, navigateTo] = useState("Patients");
  const [Patient, setPatient] = useState({});
  const [AllRecords, setRecords] = useState([]);
  return (
    <section className="DoctorSection">
      <DoctorSideBar  signOut={signOut}  navigateTo={navigateTo} setCurrentPage={setCurrentPage}/>
      <div className="main">
        {currentPage == "Patients" && <Patients navigateTo={navigateTo} setPatient={setPatient} />}
        {currentPage == "PatientProfile" && <PatientProfile setAllRecords={setRecords} Patient={Patient} navigateTo={navigateTo} />}
        {currentPage == "Records" && <Records Records={AllRecords} Patient={Patient} navigateTo={navigateTo} />}
      </div>
    </section>
  );
};

export default DoctorSection;
