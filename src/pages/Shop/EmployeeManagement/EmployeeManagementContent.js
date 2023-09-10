import React from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import { Box } from "@mui/material";
import theme from "../../../Theme";
import MyEmployees from "./EmployeeMgmtComponents/MyEmployees";

function EmployeeManagementContent() {
  return (
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
            <MyEmployees />
          </Box>
        </Box>
      </Box>
    </Box>
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
