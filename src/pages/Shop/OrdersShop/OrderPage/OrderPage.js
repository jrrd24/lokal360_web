import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShopSidebar from "../../../../components/Sidebar/ShopSidebar";
import OrderPageContent from "./OrderPageContent";

function OrderPage() {
  // Get the productId parameter from the URL and convert to number
  const { orderID } = useParams();
  const selectedOrderID = parseInt(orderID, 10);

  //Set Page Title
  useEffect(() => {
    document.title = `Order #${orderID} | Lokal 360`;
    return () => {
      document.title = "Lokal 360";
    };
  }, [orderID]);

  return (
    <ShopSidebar
      component={() => <OrderPageContent selectedOrderID={selectedOrderID} />}
    />
  );
}

export default OrderPage;
