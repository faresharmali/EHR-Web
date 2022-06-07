import React, { Component, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import InputAdornment from "@mui/material/InputAdornment";
import LoginIcon from "@mui/icons-material/Login";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
const AddUserModal = ({ setShowModal }) => {
  const [errorMessageVisible, setErrorMessageVisibility] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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

  return (
    <div onClick={() => setShowModal(false)} className="Modal">
      <div
        onClick={(e) => e.stopPropagation()}
        className="modalContent2 flex_center"
      >
        <h2 className="ModalTitle">Create new user</h2>
        <div className="AddUserformContainer">
          <TextField
            className="textField"
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: "#00A77A" }} />
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
                  <EmailIcon sx={{ color: "#00A77A" }} />
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
                  <EmailIcon sx={{ color: "#00A77A" }} />
                </InputAdornment>
              ),
            }}
            onChange={(e) => handleUserInput(e.target.value, "email")}
          />
          <TextField
            className="textField"
            id="outlined-basic"
            label="Phone number"
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
            label="Username"
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
                  <EmailIcon sx={{ color: "#00A77A" }} />
                </InputAdornment>
              ),
            }}
            onChange={(e) => handleUserInput(e.target.value, "email")}
          />
          <TextField
            className="textField"
            id="outlined-basic"
            label="Confirme password"
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
            label="Address"
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
          <FormControl sx={{ m: 0, width:"100%" }}>
            <InputLabel id="demo-simple-select-helper-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Age"
              onChange={handleChange}
            >
            
              <MenuItem value={10}>Admin</MenuItem>
              <MenuItem value={20}>Doctor</MenuItem>
              <MenuItem value={30}>Patient</MenuItem>
              <MenuItem value={30}>Laboratory</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Button className="LoginBtn" variant="contained">
          Create user
        </Button>
      </div>
    </div>
  );
};

export default AddUserModal;
