import React, { useEffect } from "react";
import ShopSidebar from "../../../components/Sidebar/ShopSidebar";
import ProductsShopContent from "./ProductsShopContent";

function ProductsShop() {
  //Set Page Title
  useEffect(() => {
    document.title = "Products | Lokal 360";
    return () => {
      document.title = "Lokal 360";
    };
  }, []);
  return <ShopSidebar component={ProductsShopContent} />;
}

export default ProductsShop;
