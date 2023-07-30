import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";

function ReportsContent() {
  return (
    <Box sx={{ backgroundColor: "transparent" }}>
      <PageInfoComponent
        PageName={"Reports"}
        Subtitle={"View and Manage Reports"}
      />
    </Box>
  );
}

export default ReportsContent;
