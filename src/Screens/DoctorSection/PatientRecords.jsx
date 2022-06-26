import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { getPatients, getPatientAsset } from "../../api/doctor";
import RadioModal from "../../Components/Modals/RadioModal";
import RecordModal from "../../Components/Modals/RecordModal";
const Records = ({ navigateTo, Patient }) => {
  const [PatientList, setPatientList] = useState([]);
  const [selectedRecord, setselectedRecord] = useState({});
  const [RadioLink, setRadioLink] = useState({});
  const [showModal, setshowRecordModal] = useState(false);
  const [showRadioModal, setshowRadioModal] = useState(false);

  const handleChange = (event, name) => {
    setPatientList(
      PatientList.map((p) => ({
        ...p,
        checked: p.name == name ? event.target.checked : p.checked,
      }))
    );
  };

  const OpenRadio = (Link) => {
    setRadioLink(Link);
    setshowRadioModal(true);
  };
  console.log("alll", Patient.records.slice(0, Patient.records.length - 1));
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
        {Patient.records.slice(0, Patient.records.length - 1).map((record) => (
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
              
              </h2>
            </div>
            <div className="tableColumn">
              <h2 className="columnItem">
                {record.doctor.trim() != "" &&
                  JSON.parse(record.doctor).user.firstName}
              </h2>
            </div>
            <div className="tableColumn">
              <h2 className="columnItem">{record.contact}</h2>
            </div>
            <div className="tableColumn">
              <h2 className="columnItem">
                {" "}
                <div
                  onClick={() => {
                    setselectedRecord(record);
                    setshowRecordModal(true);
                  }}
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
          OpenRadio={OpenRadio}
          Record={selectedRecord}
          setShowModal={setshowRecordModal}
        />
      )}
      {showRadioModal && (
        <RadioModal Link={RadioLink} setShowModal={setshowRadioModal} />
      )}
    </section>
  );
};

export default Records;
