import React, { useEffect } from "react";
import PartnerShopContent from "./PartnerShopContent";
import ShopSidebar from "../../../components/Sidebar/ShopSidebar";

function PartnerShop() {
  //Set Page Title
  useEffect(() => {
    document.title = "360 Partner | Lokal 360";
    return () => {
      document.title = "Lokal 360";
    };
  }, []);
  return <ShopSidebar component={PartnerShopContent} />;
}

export default PartnerShop;
