import React from "react";
import DBSidebar from "../../../components/SidebarAndAppbar/DBSidebar";
import { Box } from "@mui/material";
import DashboardContent from "./DashboardContent";

function Dashboard() {
  return (
    <Box>
      <DBSidebar component={DashboardContent} />
    </Box>
  );
}

export default Dashboard;
