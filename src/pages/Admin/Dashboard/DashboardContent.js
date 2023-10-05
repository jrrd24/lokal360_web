import React, { useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import useRefreshToken from "../../../hooks/useRefreshToken";

function DashboardContent() {
  const refresh = useRefreshToken();

  // useEffect to call the refresh function once when the component mounts
  useEffect(() => {
    refresh();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <Box sx={{ backgroundColor: "transparent" }}>
      <PageInfoComponent
        PageName={"Admin Dashboard"}
        Subtitle={"Welcome Admin"}
      />

      <button onClick={() => refresh()}>REFRESH</button>
    </Box>
  );
}

export default DashboardContent;
