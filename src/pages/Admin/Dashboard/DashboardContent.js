import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";

function DashboardContent() {
  return (
    <Box sx={{ backgroundColor: "transparent" }}>   
      <PageInfoComponent
        PageName={"Admin Dashboard"}
        Subtitle={"Welcome Admin"}
      />
     
    </Box>
  );
}

export default DashboardContent;
