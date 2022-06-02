import React, { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Logo from "../Assets/logo.png";
import InputAdornment from "@mui/material/InputAdornment";
import LoginIcon from '@mui/icons-material/Login';
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import "../Login.css";
const LoginScreen = () => {
  return (
    <section className="LoginSection flex_center">
      <div className="formContainer">
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
          />
          <Button className="LoginBtn" variant="contained">
          <LoginIcon sx={{ color: "#fff",marginRight:"10px" }} />

            Log in
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LoginScreen;
