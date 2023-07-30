import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";

function CategoryContent() {
  return (
    <Box sx={{ backgroundColor: "transparent" }}>
      <PageInfoComponent
        PageName={"Category"}
        Subtitle={"View and Manage Lokal 360's Categories"}
      />
    </Box>
  );
}

export default CategoryContent;
