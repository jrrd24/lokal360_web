import React from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import { Box } from "@mui/material";

function DashboardShopContent() {
  return (
    <Box sx={{ backgroundColor: "transparent" }}>
      <PageInfoComponent
        PageName={"Shop Dashboard"}
        Subtitle={"Welcome, {Shop Owner Name}"}
      />
    </Box>
  );
}

export default DashboardShopContent;
