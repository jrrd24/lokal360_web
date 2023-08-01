import React, { useEffect } from "react";
import AdminSidebar from "../../../components/Sidebar/AdminSidebar";
import ShopsManagementContent from "./ShopsManagementContent";

function ShopsManagement() {
  //Set Document Title
  useEffect(() => {
    document.title = "Shops Management | Lokal 360";
    return () => {
      document.title = "Lokal 360";
    };
  }, []);
  return <AdminSidebar component={ShopsManagementContent} />;
}

export default ShopsManagement;
