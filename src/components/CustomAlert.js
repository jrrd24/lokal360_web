/*
 * How to Use:
 *  Add the ff to file:
 ?   // Handle Alert Click
 ?        const [open, setOpen] = useState(false);
 ?        const [severity, setSeverity] = useState("error");
 ?        const [alertMsg, setAlertMsg] = useState("");

 ?        const handleClick = (severity, alertMsg) => {
 ?        setSeverity(severity);
 ?        setAlertMsg(alertMsg);
 ?        setOpen(true);
 ?        }; 

*   Handle Click usage: (sample)
?       handleClick("warning", "Incorrect Username or Password");
*   Types of Severity: 
?       warning, info, error, success

*   Then call custom alert:
 ?      <CustomAlert
 ?        open={open}
 ?         setOpen={setOpen}
 ?         severity={severity}
 ?         alertMsg={alertMsg}
 ?       />
 */

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
