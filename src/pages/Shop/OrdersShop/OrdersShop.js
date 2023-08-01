import React, { useEffect } from "react";
import ShopSidebar from "../../../components/Sidebar/ShopSidebar";
import OrdersShopContent from "./OrdersShopContent";

function OrdersShop() {
  //Set Page Title
  useEffect(() => {
    document.title = "Orders | Lokal 360";
    return () => {
      document.title = "Lokal 360";
    };
  }, []);

  return <ShopSidebar component={OrdersShopContent} />;
}

export default OrdersShop;
