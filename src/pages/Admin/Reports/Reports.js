import React, { useEffect } from "react";
import ReportsContent from "./ReportsContent";
import AdminSidebar from "../../../components/Sidebar/AdminSidebar";

function Reports() {
  //Set Document Title
  useEffect(() => {
    document.title = "Reports | Lokal 360";
    return () => {
      document.title = "Lokal 360";
    };
  }, []);
  return <AdminSidebar component={ReportsContent} />;
}

export default Reports;
