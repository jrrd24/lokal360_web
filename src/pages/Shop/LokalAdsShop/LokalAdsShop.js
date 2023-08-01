import React, { useEffect } from "react";
import ShopSidebar from "../../../components/Sidebar/ShopSidebar";
import LokalAdsShopContent from "./LokalAdsShopContent";

function LokalAdsShop() {
  //Set Page Title
  useEffect(() => {
    document.title = "Lokal Ads | Lokal 360";
    return () => {
      document.title = "Lokal 360";
    };
  }, []);

  return <ShopSidebar component={LokalAdsShopContent} />;
}

export default LokalAdsShop;
