import React, { useEffect } from "react";
import ShopSidebar from "../../../components/Sidebar/ShopSidebar";
import EmployeeManagementContent from "./EmployeeManagementContent";

function EmployeeManagement() {
  //Set Document Title
  useEffect(() => {
    document.title = "Employee Management | Lokal 360";
    return () => {
      document.title = "Lokal 360";
    };
  }, []);

  return <ShopSidebar component={EmployeeManagementContent} />;
}

export default EmployeeManagement;
