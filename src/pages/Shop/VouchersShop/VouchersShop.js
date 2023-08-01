import React, { useEffect } from "react";
import ShopSidebar from "../../../components/Sidebar/ShopSidebar";
import VouchersShopContent from "./VouchersShopContent";

function VouchersShop() {
  //Set Page Title
  useEffect(() => {
    document.title = "Vouchers | Lokal 360";
    return () => {
      document.title = "Lokal 360";
    };
  }, []);
  return <ShopSidebar component={VouchersShopContent} />;
}

export default VouchersShop;
