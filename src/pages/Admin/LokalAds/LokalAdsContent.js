import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";

function LokalAdsContent() {
  return (
    <Box sx={{ backgroundColor: "transparent" }}>
      <PageInfoComponent
        PageName={"Lokal Ads"}
        Subtitle={"Manage Sitewide Campaigns"}
      />
    </Box>
  );
}

export default LokalAdsContent;
