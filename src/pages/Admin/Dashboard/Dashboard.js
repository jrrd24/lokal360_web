import React, { useEffect } from "react";
import AdminSidebar from "../../../components/Sidebar/AdminSidebar";
import { Box } from "@mui/material";
import DashboardContent from "./DashboardContent";

function Dashboard() {
  //Set Document Title
  useEffect(() => {
    document.title = "Dashboard | Lokal 360";
    return () => {
      document.title = "Lokal 360";
    };
  }, []);

  return <AdminSidebar component={DashboardContent} />;
}

export default Dashboard;
