import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";

function AnalyticsContent() {
  return (
    <Box sx={{ backgroundColor: "transparent" }}>
      <PageInfoComponent
        PageName={"Analytics"}
        Subtitle={"View Lokal 360's Analytics"}
      />
    </Box>
  );
}

export default AnalyticsContent;
