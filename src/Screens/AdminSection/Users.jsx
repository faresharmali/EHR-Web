import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import AddUserModal from "../../Components/Modals/AddUserModal";
import { GetUsers, DeleteUser } from "../../api/admin";
import DeleteModal from "../../Components/Modals/DeleteModal";
const Users = ({ navigateTo }) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setshowDeleteModal] = useState(false);
  const [Active, setActive] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);

  const [PatientList, setPatientList] = useState([]);
  const [AllPatientList, setAllPatientList] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    const res = await GetUsers();
    if (res.data.ok) {
      console.log(res.data.docs)
      setPatientList(res.data.docs);
      setAllPatientList(res.data.docs);
    }
  };
  const deleteuser = async (user) => {
    const res = await DeleteUser({
      email: selectedUser._id,
      _rev: selectedUser._rev,
    });
    if (res.data.ok) {
      fetchUsers();
    }
  };

  const filterData = (type) => {
    switch (type) {
      case "users":
        setActive(1);
        setPatientList(AllPatientList);
        break;
      case "admins":
        setActive(2);
        setPatientList(AllPatientList.filter((u) => u.role == "admin"));

        break;
      case "patients":
        setActive(3);
        setPatientList(AllPatientList.filter((u) => u.role == "patient"));

        break;
      case "doctors":
        setActive(4);
        setPatientList(AllPatientList.filter((u) => u.role == "doctor"));

        break;
    }
  };
  return (
    <section className="mainPage patientsSection">
      <div className="filterSection">
        <div className="filters">
          <div
            onClick={() => filterData("users")}
            className={
              Active == 1
                ? "filterItem flex_center activeFilter"
                : "filterItem flex_center"
            }
          >
            <h1
              className={Active == 1 ? "filterText activeFilter" : "filterText"}
            >
              All users
            </h1>
          </div>

          <div
            onClick={() => filterData("admins")}
            className={
              Active == 2
                ? "filterItem flex_center activeFilter"
                : "filterItem flex_center"
            }
          >
            <h1
              className={Active == 2 ? "filterText activeFilter" : "filterText"}
            >
              Admins
            </h1>
          </div>
          <div
            onClick={() => filterData("patients")}
            className={
              Active == 3
                ? "filterItem flex_center activeFilter"
                : "filterItem flex_center"
            }
          >
            <h1
              className={Active == 3 ? "filterText activeFilter" : "filterText"}
            >
              Patients
            </h1>
          </div>
          <div
            onClick={() => filterData("doctors")}
            className={
              Active == 4
                ? "filterItem flex_center activeFilter"
                : "filterItem flex_center"
            }
          >
            <h1
              className={Active == 4 ? "filterText activeFilter" : "filterText"}
            >
              Doctors
            </h1>
          </div>
        </div>
        <input className="searchInput" type="text" placeholder="search" />
      </div>
      <div className="filterSection">
        <div className="filters"></div>
        <div
          onClick={() => setShowModal(true)}
          className="Btn AddRecord flex_center"
        >
          <AddIcon sx={{ color: "#fff", marginRight: "5px" }} />
          New user
        </div>
      </div>

      <div className="patientstable">
        <div className="tableHeading">
          <div className="headingItem">
            <h2 className="headingTitle">Full Name</h2>
          </div>
          <div className="headingItem">
            <h2 className="headingTitle">Email</h2>
          </div>
          <div className="headingItem">
            <h2 className="headingTitle">Phone number</h2>
          </div>
          <div className="headingItem">
            <h2 className="headingTitle">Date of birth</h2>
          </div>
          <div className="headingItem">
            <h2 className="headingTitle">Role</h2>
          </div>
          <div className="headingItem">
            <h2 className="headingTitle">Delete</h2>
          </div>
        </div>
        {PatientList.map((patient) => (
          <div className="tableRow">
            <div className="tableColumn">
              <h2 className="columnItem">
                {patient.firstName + " " + patient.lastName}
              </h2>
            </div>
            <div className="tableColumn">
              <h2 className="columnItem">{patient._id}</h2>
            </div>
            <div className="tableColumn">
              <h2 className="columnItem">{patient.contact}</h2>
            </div>
            <div className="tableColumn">
              <h2 className="columnItem">{patient.birthday}</h2>
            </div>
            <div className="tableColumn">
              <h2 className="columnItem">{patient.role}</h2>
            </div>
            <div className="tableColumn">
              <h2 className="columnItem">
                {" "}
                <div
                  onClick={() => {
                    setSelectedUser(patient);
                    setshowDeleteModal(true);
                  }}
                  className="iconContainer"
                >
                  <DeleteIcon sx={{ color: "#D42A2A" }} />
                </div>
              </h2>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <AddUserModal fetchUsers={fetchUsers} setShowModal={setShowModal} />
      )}
      {showDeleteModal && (
        <DeleteModal
          deleteuser={deleteuser}
          setShowModal={setshowDeleteModal}
        />
      )}
    </section>
  );
};

export default Users;
