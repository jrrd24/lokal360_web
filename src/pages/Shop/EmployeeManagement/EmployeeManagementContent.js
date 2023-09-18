import React, { useState } from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import { Box } from "@mui/material";
import theme from "../../../Theme";
import MyEmployees from "./EmployeeMgmtComponents/MyEmployees";
import CustomAlert from "../../../components/CustomAlert";

function EmployeeManagementContent() {
  // Handle Open Dialog Box
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  // Handle Open Alert
  const [openAlert, setOpenAlert] = useState(false);
  const [severity, setSeverity] = useState("error");
  const [alertMsg, setAlertMsg] = useState("");

  const handleSave = (severity, alertMsg) => {
    setOpen(false);
    setSeverity("success");
    setAlertMsg("Shop Information Successfully Updated!");
    setOpenAlert(true);
  };

  const handleDelete = ({ id, name }) => {
    console.log("Deleted: ", id);
    setSeverity("error");
    setAlertMsg(name + " is deleted");
    setOpenAlert(true);
  };

  return (
    <div>
      <Box sx={{ ...theme.components.box.pageContainer }}>
        <PageInfoComponent
          PageName={"Employee Management"}
          Subtitle={"View and Manage your Employees"}
        />

        {/*Main Content*/}
        <Box sx={{ ...theme.components.box.mainContent }}>
          {/*(Left Side)*/}
          <Box sx={{ ...classes.leftContainer }}>
            {/*My Employees*/}
            <Box sx={{ ...classes.employeesContainer }}>
              <MyEmployees
                handleSave={handleSave}
                handleDelete={handleDelete}
                open={open}
                setOpen={setOpen}
                openEdit={openEdit}
                setOpenEdit={setOpenEdit}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/*Display Alert */}
      <CustomAlert
        open={openAlert}
        setOpen={setOpenAlert}
        severity={severity}
        alertMsg={alertMsg}
      />
    </div>
  );
}

const classes = {
  leftContainer: {
    ...theme.components.box.contentColumn,
    "@media (max-width: 1516px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },

  employeesContainer: {
    ...theme.components.box.sectionContainer,
    minWidth: "600px",
    order: 1,
    "@media (max-width: 912px)": {
      order: 1,
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },
};
export default EmployeeManagementContent;
