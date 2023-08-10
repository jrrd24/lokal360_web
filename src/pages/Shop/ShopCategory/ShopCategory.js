import React, { useEffect } from "react";
import ShopSidebar from "../../../components/Sidebar/ShopSidebar";
import ShopCategoryContent from "./ShopCategoryContent";

function ShopCategory() {
  //Set Page Title
  useEffect(() => {
    document.title = "Products | Lokal 360";
    return () => {
      document.title = "Lokal 360";
    };
  }, []);
  return <ShopSidebar component={ShopCategoryContent} />;
}

export default ShopCategory;
