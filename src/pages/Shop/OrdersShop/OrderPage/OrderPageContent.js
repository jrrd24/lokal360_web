import React, { useState, useEffect } from "react";
import orderData from "../../../../data/orderData";

function OrderPageContent({ selectedOrderID }) {
  // Handle Alert Click
  const [open, setOpen] = useState(false);
  const [openNewVar, setOpenNewVar] = useState(false);
  const [openEditVar, setOpenEditVar] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [severity, setSeverity] = useState("error");
  const [alertMsg, setAlertMsg] = useState("");

  const handleSave = (severity, alertMsg) => {
    setOpen(false);
    setOpenNewVar(false);
    setOpenEditVar(false);
    setSeverity("success");
    setAlertMsg("Shop Information Successfully Updated!");
    setOpenAlert(true);
  };

  const handleDelete = ({ id, name }) => {
    console.log("Deleted: ", id);
    setSeverity("error");
    setAlertMsg(name + " is deleted");
    setOpenAlert(true);
  };

  // Use state to store the selectedOrder
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Use useEffect to fetch selectedOrder based on selectedProductId
  useEffect(() => {
    const foundOrder = orderData.find(
      (order) => order.orderID === selectedOrderID
    );

    foundOrder ? setSelectedOrder(foundOrder) : setSelectedOrder(null);
  }, [selectedOrderID]);

  return <div>OrderPageContent</div>;
}

export default OrderPageContent;
