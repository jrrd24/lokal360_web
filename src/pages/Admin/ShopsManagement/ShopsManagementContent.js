import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";

function ShopsManagementContent() {
  return (
    <Box sx={{ backgroundColor: "transparent" }}>
      <PageInfoComponent
        PageName={"Shops Management"}
        Subtitle={"View and Manage Shop Approval Requests"}
      />
    </Box>
  );
}

export default ShopsManagementContent;
