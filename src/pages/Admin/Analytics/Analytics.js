import React, { useEffect } from "react";
import AnalyticsContent from "./AnalyticsContent";
import AdminSidebar from "../../../components/Sidebar/AdminSidebar";

function Analytics() {
  //Set Document Title
  useEffect(() => {
    document.title = "Analytics | Lokal 360";
    return () => {
      document.title = "Lokal 360";
    };
  }, []);

  return <AdminSidebar component={AnalyticsContent} />;
}

export default Analytics;
