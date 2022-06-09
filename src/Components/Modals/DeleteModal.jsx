import React, { Component, useState } from "react";
import Button from "@mui/material/Button";

import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
const DeleteModal = ({ setShowModal, deleteuser }) => {
  return (
    <div onClick={() => setShowModal(false)} className="Modal">
      <div
        onClick={(e) => e.stopPropagation()}
        className="modalContent2 flex_center"
      >
        <h2 className="ModalTitle">
          {" "}
          Are you sure you want to delete this user ?
        </h2>
        <div className="btnContainer flex_center">
          <Button onClick={() => setShowModal(false)} className="LoginBtn cancel" variant="contained">
            Cancel
          </Button>
          <Button onClick={()=>{deleteuser();setShowModal(false)}} className="LoginBtn delete" variant="contained">
            <PersonAddAlt1Icon sx={{ color: "#fff", marginRight: "5px" }} />
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
