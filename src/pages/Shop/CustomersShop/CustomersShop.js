import React, { useEffect } from "react";
import ShopSidebar from "../../../components/Sidebar/ShopSidebar";
import CustomersShopContent from "./CustomersShopContent";

function CustomersShop() {
  //Set Page Title
  useEffect(() => {
    document.title = "Customers | Lokal 360";
    return () => {
      document.title = "Lokal 360";
    };
  }, []);

  return <ShopSidebar component={CustomersShopContent} />;
}

export default CustomersShop;
