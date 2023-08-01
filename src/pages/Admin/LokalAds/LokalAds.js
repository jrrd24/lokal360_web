import React, { useEffect } from "react";
import AdminSidebar from "../../../components/Sidebar/AdminSidebar";
import { Box } from "@mui/material";
import LokalAdsContent from "./LokalAdsContent";

function LokalAds() {
  //Set Document Title
  useEffect(() => {
    document.title = "Lokal Ads | Lokal 360";
    return () => {
      document.title = "Lokal 360";
    };
  }, []);

  return <AdminSidebar component={LokalAdsContent} />;
}

export default LokalAds;
