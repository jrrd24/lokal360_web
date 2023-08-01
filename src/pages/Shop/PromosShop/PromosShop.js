import React, { useEffect } from "react";
import ShopSidebar from "../../../components/Sidebar/ShopSidebar";
import PromosShopContent from "./PromosShopContent";

function PromosShop() {
  //Set Page Title
  useEffect(() => {
    document.title = "Promos | Lokal 360";
    return () => {
      document.title = "Lokal 360";
    };
  }, []);

  return <ShopSidebar component={PromosShopContent} />;
}

export default PromosShop;
