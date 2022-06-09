import React, { Component, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Logo from "../Assets/logo.png";
import InputAdornment from "@mui/material/InputAdornment";
import LoginIcon from "@mui/icons-material/Login";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { LogUser } from "../api/auth";
import "../Login.css";
const LoginScreen = ({ setCurrentPage }) => {
  const [errorMessageVisible, setErrorMessageVisibility] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const handleUserInput = (input, fieldName) => {
    setUserInput({ ...userInput, [fieldName]: input });
  };
  const Login = async () => {
    if (userInput.email.trim() != "" && userInput.password.trim()) {
      const response = await LogUser(userInput);
      if (!response.data.ok) {
        setErrorMessage(response.data.error);
        setErrorMessageVisibility(true);
        setTimeout(() => {
          setErrorMessageVisibility(false);
        }, 1500);
      } else {
        localStorage.setItem('loggedUser',JSON.stringify(response.data))
        if(response.data.user.role=="admin") setCurrentPage("AdminSection")
        if(response.data.user.role=="doctor") setCurrentPage("DoctorDashboard")
      }
    }else{
      setErrorMessage("Please fill all fields");
      setErrorMessageVisibility(true);
      setTimeout(() => {
        setErrorMessageVisibility(false);
      }, 1500);
    }
  };
  return (
    <section className="LoginSection flex_center">
      <div className="formContainer flex_center">
        <img className="LoginLogo" src={Logo} alt="Logo" />
        <h1 className="LoginTitle">Log in to your account</h1>
        <div className="flex_center form">
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
            type="password"
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
            onChange={(e) => handleUserInput(e.target.value, "password")}
          />
          <Button onClick={Login} className="LoginBtn" variant="contained">
            <LoginIcon sx={{ color: "#fff", marginRight: "10px" }} />
            Log in
          </Button>
          {errorMessageVisible && (
            <div className="alert flex_center">
              <HighlightOffIcon sx={{ color: "#fff", marginRight: "10px" }} />

              <h2 className="alertMessage">{errorMessage}</h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LoginScreen;
