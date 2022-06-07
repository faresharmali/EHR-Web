import React, { useEffect, useState } from "react";

import "../Login.css";
const LoadingScreen = ({ setCurrentPage }) => {
useEffect(()=>{
   let loggedUser= localStorage.getItem("loggedUser")
    if(loggedUser){
        console.log(JSON.parse(loggedUser))
        if(JSON.parse(loggedUser).user.role=="admin") setCurrentPage("AdminSection")
        if(JSON.parse(loggedUser).user.role=="doctor") setCurrentPage("DoctorDashboard")
    }else{
        setCurrentPage("Login")
    }
},[])
  return (
    <section className="LoginSection flex_center">
     
    </section>
  );
};

export default LoadingScreen;
