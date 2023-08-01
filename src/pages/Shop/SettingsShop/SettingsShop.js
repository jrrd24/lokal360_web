import React, { useEffect } from "react";
import ShopSidebar from "../../../components/Sidebar/ShopSidebar";
import SettingsShopContent from "./SettingsShopContent";

function SettingsShop() {
  //Set Document Title
  useEffect(() => {
    document.title = "Settings | Lokal 360";
    return () => {
      document.title = "Lokal 360";
    };
  }, []);

  return <ShopSidebar component={SettingsShopContent} />;
}

export default SettingsShop;
