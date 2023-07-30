import React from "react";
import { Snackbar, Alert } from "@mui/material";

const CustomAlert = ({ open, setOpen, severity, alertMsg }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        sx={{ width: "100%", height: "50px", alignItems: "center" }}
      >
        {alertMsg}
      </Alert>
    </Snackbar>
  );
};

export default CustomAlert;
