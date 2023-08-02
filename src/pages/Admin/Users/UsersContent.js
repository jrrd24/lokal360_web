import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";

function UsersContent() {
  return (
    <Box sx={{ backgroundColor: "transparent" }}>
      <PageInfoComponent
        PageName={"Users"}
        Subtitle={"View and Manage System Users"}
      />
    </Box>
  );
}

export default UsersContent;
