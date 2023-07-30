import React from "react";
import AdminSidebar from "../../../components/Sidebar/AdminSidebar";
import { Box } from "@mui/material";
import DashboardContent from "./DashboardContent";

function Dashboard() {
  return (
    <Box>
      <AdminSidebar component={DashboardContent} />
    </Box>
  );
}

export default Dashboard;
