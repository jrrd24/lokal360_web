import React, { useEffect } from "react";
import DBSidebarShop from "../../../components/Sidebar/ShopSidebar";
import AnalyticsShopContent from "./AnalyticsShopContent";

function AnalyticsShop() {
  //Set Page Title
  useEffect(() => {
    document.title = "Analytics | Lokal 360";
    return () => {
      document.title = "Lokal 360";
    };
  }, []);

  return <DBSidebarShop component={AnalyticsShopContent} />;
}

export default AnalyticsShop;
