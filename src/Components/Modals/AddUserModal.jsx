import React, { Component, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import InputAdornment from "@mui/material/InputAdornment";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import LockIcon from "@mui/icons-material/Lock";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FormControl from "@mui/material/FormControl";
import {CreateUser} from "../../api/admin"
const AddUserModal = ({ setShowModal,fetchUsers }) => {
  
  const [errorMessageVisible, setErrorMessageVisibility] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    role: "",
    firstName: "",
    lastName: "",
    birthday: "",
    contact: "",
    address: "",
    org: "org",
  });
  const handleUserInput = (input, fieldName) => {
    setUserInput({ ...userInput, [fieldName]: input });
  };
 const create=async()=>{
  const res= await CreateUser(userInput)
  if(res.data.ok){
    fetchUsers()
    setShowModal(false)
  }else{
    alert("error")
  }
 }
  return (
    <div onClick={() => setShowModal(false)} className="Modal">
      <div
        onClick={(e) => e.stopPropagation()}
        className="modalContent2 flex_center"
      >
        <h2 className="ModalTitle">
          {" "}
          <PersonAddAlt1Icon
            sx={{ color: "#00A77A", marginRight: "5px", marginBottom: "-3px" }}
          />
          Create new user
        </h2>
        <div className="AddUserformContainer">
          <TextField
            className="textField"
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon sx={{ color: "#00A77A" }} />
                </InputAdornment>
              ),
            }}
            onChange={(e) => handleUserInput(e.target.value, "firstName")}
          />
          <TextField
            className="textField"
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon sx={{ color: "#00A77A" }} />
                </InputAdornment>
              ),
            }}
            onChange={(e) => handleUserInput(e.target.value, "lastName")}
          />
          <TextField
            className="textField"
            id="outlined-basic"
            label="Date of birth"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarMonthIcon sx={{ color: "#00A77A" }} />
                </InputAdornment>
              ),
            }}
            onChange={(e) => handleUserInput(e.target.value, "birthday")}
          />
          <TextField
            className="textField"
            id="outlined-basic"
            label="Phone number"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocalPhoneIcon sx={{ color: "#00A77A" }} />
                </InputAdornment>
              ),
            }}
            onChange={(e) => handleUserInput(e.target.value, "contact")}
          />
          <TextField
            className="textField"
            id="outlined-basic"
            label="Username"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon sx={{ color: "#00A77A" }} />
                </InputAdornment>
              ),
            }}
            onChange={(e) => handleUserInput(e.target.value, "username")}
          />
          <TextField
            className="textField"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: "#00A77A" }} />
                </InputAdornment>
              ),
            }}
            onChange={(e) => handleUserInput(e.target.value, "email")}
          />
          <TextField
            className="textField"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon sx={{ color: "#00A77A" }} />
                </InputAdornment>
              ),
            }}
            type={"password"}
            onChange={(e) => handleUserInput(e.target.value, "password")}
          />
          <TextField
            className="textField"
            id="outlined-basic"
            label="Confirme password"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon sx={{ color: "#00A77A" }} />
                </InputAdornment>
              ),
            }}
            type={"password"}

            onChange={(e) => handleUserInput(e.target.value, "password")}
          />

          <TextField
            className="textField"
            id="outlined-basic"
            label="Address"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon sx={{ color: "#00A77A" }} />
                </InputAdornment>
              ),
            }}
            onChange={(e) => handleUserInput(e.target.value, "address")}
          />
          <FormControl sx={{ m: 0, width: "100%" }}>
            <InputLabel id="demo-simple-select-helper-label">Role</InputLabel>
            <Select
            onChange={(e)=>setUserInput({...userInput,role:e.target.value})}
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={userInput.role}
              label="Age"
            >
              <MenuItem value={"admin"}>Admin</MenuItem>
              <MenuItem value={"doctor"}>Doctor</MenuItem>
              <MenuItem value={"patient"}>Patient</MenuItem>
              <MenuItem value={"laboratory"}>Laboratory</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Button onClick={create} className="LoginBtn" variant="contained">
          <PersonAddAlt1Icon sx={{ color: "#fff", marginRight: "5px" }} />
          Create user
        </Button>
      </div>
    </div>
  );
};

export default AddUserModal;
