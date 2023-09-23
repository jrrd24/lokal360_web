import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ShopSidebar from "../../../../components/Sidebar/ShopSidebar";
import ProductPageContent from "./ProductPageContent";

function ProductPage() {
  // Get the productId parameter from the URL and convert to number
  const { productID } = useParams();
  const selectedProductID = parseInt(productID, 10);

  //Set Page Title
  useEffect(() => {
    document.title = `Product | Lokal 360`;
    return () => {
      document.title = "Lokal 360";
    };
  }, []);

  return (
    <ShopSidebar
      component={() => (
        <ProductPageContent selectedProductID={selectedProductID} />
      )}
    />
  );
}

export default ProductPage;
