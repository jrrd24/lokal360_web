import React, { useEffect } from "react";
import ShopSidebar from "../../../components/Sidebar/ShopSidebar";
import DashboardShopContent from "./DashboardShopContent";

function DashboardShop() {
  //Set Document Title
  useEffect(() => {
    document.title = "Dashboard | Lokal 360";
    return () => {
      document.title = "Lokal 360";
    };
  }, []);

  return <ShopSidebar component={DashboardShopContent} />;
}

export default DashboardShop;
