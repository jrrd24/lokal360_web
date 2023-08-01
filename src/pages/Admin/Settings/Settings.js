import React, { useEffect } from "react";
import AdminSidebar from "../../../components/Sidebar/AdminSidebar";
import SettingsContent from "./SettingsContent";

function Settings() {
  //Set Document Title
  useEffect(() => {
    document.title = "Settings | Lokal 360";
    return () => {
      document.title = "Lokal 360";
    };
  }, []);
  return <AdminSidebar component={SettingsContent} />;
}

export default Settings;
