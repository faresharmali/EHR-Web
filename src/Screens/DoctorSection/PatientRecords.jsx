import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { getPatients, getPatientAsset } from "../../api/doctor";

import RecordModal from "../../Components/Modals/RecordModal";
const Records = ({ navigateTo, Records, Patient }) => {
    console.log("aaaaaaa",Records)
  const [PatientList, setPatientList] = useState([]);
  const [selectedRecord, setselectedRecord] = useState({});
  const [showModal, setshowRecordModal] = useState(false);


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
            <h1 className="filterText">All Records</h1>
          </div>

          <div className="filterItem flex_center">
            <h1 className="filterText">Analysis</h1>
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
            <h2 className="headingTitle">Date</h2>
          </div>
          <div className="headingItem">
            <h2 className="headingTitle">Doctor / Lab</h2>
          </div>
          <div className="headingItem">
            <h2 className="headingTitle"></h2>
          </div>
          <div className="headingItem">
            <h2 className="headingTitle">show</h2>
          </div>
        </div>
        {Records.map((record) => (
          <div className="tableRow">
            <div className="tableColumn">
              <Checkbox
                sx={{
                  color: "#00a77a",
                  "&.Mui-checked": {
                    color: "#00a77a",
                  },
                }}
                checked={record.checked}
                onChange={(e) => handleChange(e, record.name)}
                inputProps={{ "aria-label": "controlled" }}
              />
            </div>
            <div className="tableColumn">
              <h2 className="columnItem">
                {" "}
                {record.firstName + " " + record.lastName}
              </h2>
            </div>
            <div className="tableColumn">
              <h2 className="columnItem">{record.birthday}</h2>
            </div>
            <div className="tableColumn">
              <h2 className="columnItem">{record.contact}</h2>
            </div>
            <div className="tableColumn">
              <h2 className="columnItem">
                {" "}
                <div
                  onClick={() => {setselectedRecord(record);setshowRecordModal(true)}}
                  className="iconContainer"
                >
                  <OpenInNewIcon sx={{ color: "#00A77A" }} />
                </div>
              </h2>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <RecordModal
        Record={selectedRecord}
          setShowModal={setshowRecordModal}
        />
      )}
    </section>
  );
};

export default Records;
