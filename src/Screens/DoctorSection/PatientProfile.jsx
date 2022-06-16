import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import MedicationIcon from "@mui/icons-material/Medication";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import AddReportModal from "../../Components/Modals/AddReportModal";
import { getPatientAsset } from "../../api/doctor";

const PatientProfile = ({ Patient, navigateTo,setAllRecords }) => {
  const [showModal, setShowModal] = useState(false);
  const [PatientList, setPatientList] = useState([
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
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  useEffect( () => {
    fetchData()
  },[]);
  const fetchData=async()=>{
    const res = await getPatientAsset(Patient.infos.userID);
    if (res.data.ok) {
      setAllRecords(res.data.data);
    } else {
      alert("not ok");
    }
  }
  const labels = ["1", "2", "3", "4", "5", "6", "7"];

  const chart1 = {
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
    },
    data: {
      labels,
      datasets: [
        {
          label: "Gluciose",
          data: labels.map(() =>
            Math.floor(Math.random() * (3 - 0.5 + 1) + 0.5)
          ),
          borderColor: "#00a77a",
          backgroundColor: "#00a77a",
        },
      ],
    },
  };
  const chart2 = {
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
    },
    data: {
      labels,
      datasets: [
        {
          label: "Hemoglobine",
          data: labels.map(() =>
            Math.floor(Math.random() * (3 - 0.5 + 1) + 0.5)
          ),
          borderColor: "#C14242",
          backgroundColor: "#C14242",
        },
      ],
    },
  };
  const chart3 = {
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
    },
    data: {
      labels,
      datasets: [
        {
          label: "Fever",
          data: labels.map(() =>
            Math.floor(Math.random() * (3 - 0.5 + 1) + 0.5)
          ),
          borderColor: "#7F3FBF",
          backgroundColor: "#7F3FBF",
        },
      ],
    },
  };
  const chart4 = {
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
    },
    data: {
      labels,
      datasets: [
        {
          label: "Blood pressure",
          data: labels.map(() =>
            Math.floor(Math.random() * (3 - 0.5 + 1) + 0.5)
          ),
          borderColor: "#3F7FBF",
          backgroundColor: "#3F7FBF",
        },
      ],
    },
  };

  return (
    <section className="PatientSection">
      <div className="Entity">
        <h2 className="patientPagetitle">Patient Details</h2>
        <input
          type="text"
          placeholder="Search a patient"
          className="searchInput"
        />
      </div>
      <div className="mainContainer">
        <div className="patientData">
          <div className="PatientHeading">
            <h2 className="patientName">
              {Patient.infos.firstName + " " + Patient.infos.lastName}
            </h2>
            <div className="btnContainer2 flex_center">
              <div
                onClick={() => setShowModal(true)}
                className="Btn AddRecord flex_center"
              >
                {" "}
                <AddIcon sx={{ color: "#fff", marginRight: "10px" }} />
                Add Record
              </div>
              <div
                onClick={() => navigateTo("Records")}
                className="Btn AddRecord flex_center"
              >
                {" "}
                <OpenInFullIcon sx={{ color: "#fff", marginRight: "10px" }} />
                Show records
              </div>
            </div>
          </div>

          <div className="statsContainer">
            <div className="stat active">
              <div className="statHeading">
                <h2 className="headingTitel">Heartrate</h2>
                <FavoriteIcon sx={{ color: "#fff" }} />
              </div>
              <h2 className="StatValue">70/120</h2>
              <div className="StatChart"></div>
            </div>

            <div className="stat">
              <div className="statHeading">
                <h2 className="headingTitel">Fever</h2>
                <DeviceThermostatIcon sx={{ color: "#00a77a" }} />
              </div>
              <h2 className="StatValue">39 °C</h2>
              <div className="StatChart"></div>
            </div>

            <div className="stat">
              <div className="statHeading">
                <h2 className="headingTitel">Blood Pressure</h2>
                <MonitorHeartIcon sx={{ color: "#00a77a" }} />
              </div>
              <h2 className="StatValue">70/120</h2>
              <div className="StatChart"></div>
            </div>

            <div className="stat">
              <div className="statHeading">
                <h2 className="headingTitel">Glucose Level</h2>
                <MedicationIcon sx={{ color: "#00a77a" }} />
              </div>
              <h2 className="StatValue">1.2g/L</h2>
              <div className="StatChart"></div>
            </div>
          </div>
          <div className="charts">
            <div className="chartsContainer">
              <Line options={chart1.options} data={chart1.data} />
            </div>
            <div className="chartsContainer">
              <Line options={chart2.options} data={chart2.data} />
            </div>
          </div>
          <div className="charts">
            <div className="chartsContainer">
              <Line options={chart3.options} data={chart3.data} />
            </div>
            <div className="chartsContainer">
              <Line options={chart4.options} data={chart4.data} />
            </div>
          </div>
        </div>

        <div className="otherPatientsSection">
          {PatientList.map((patient) => (
            <div className="patientPreview">
              <div className="iconContainer">
                <PersonIcon sx={{ color: "#00a77a", fontSize: "25px" }} />
              </div>
              <h2>{patient.name}</h2>
              <div className="iconContainer">
                <PhoneIcon sx={{ color: "#00a77a", fontSize: "25px" }} />
              </div>
              <h3>0660818412</h3>
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <AddReportModal
          patientID={Patient.infos.userID}
          setShowModal={setShowModal}
        />
      )}
    </section>
  );
};

export default PatientProfile;
