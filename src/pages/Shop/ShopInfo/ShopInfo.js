import React, { useEffect } from "react";
import ShopSidebar from "../../../components/Sidebar/ShopSidebar";
import ShopInfoContent from "./ShopInfoContent";

function ShopInfo() {
  //Set Page Title
  useEffect(() => {
    document.title = "Shop Information | Lokal 360";
    return () => {
      document.title = "Lokal 360";
    };
  }, []);

  return <ShopSidebar component={ShopInfoContent} />;
}

export default ShopInfo;
