import React from "react";
import { Box } from "@mui/material";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";

function AnalyticsShopContent() {
  return (
    <Box sx={{ backgroundColor: "transparent" }}>
      <PageInfoComponent
        PageName={"Analytics"}
        Subtitle={"View Realtime Product and Shop Analytics"}
      />
    </Box>
  );
}

export default AnalyticsShopContent;
