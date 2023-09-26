import React, { useState, useEffect, lazy, Suspense } from "react";
import orderData from "../../../../data/orderData";
import { Box } from "@mui/material";
import theme from "../../../../Theme";
import PageInfoComponent from "../../../../components/PageInfoAndTime/PageInfoComponent";
import { LoadingCircle } from "../../../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import CustomAlert from "../../../../components/CustomAlert";
import Header from "./OrderPageComponents/Header";
import OrderStatus from "./OrderPageComponents/OrderStatus";
import OrderDetails from "./OrderPageComponents/OrderDetails";
import CustomerDetails from "./OrderPageComponents/CustomerDetails";
import ProductsBought from "./OrderPageComponents/ProductsBought";
import PriceSummary from "./OrderPageComponents/PriceSummary";

function OrderPageContent({ selectedOrderID }) {
  // Handle Alert Click
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [severity, setSeverity] = useState("error");
  const [alertMsg, setAlertMsg] = useState("");

  const handleSave = (severity, alertMsg) => {
    setOpen(false);
    setSeverity("success");
    setAlertMsg("Shop Information Successfully Updated!");
    setOpenAlert(true);
  };

  const navigate = useNavigate();

  const handleDelete = ({ id }) => {
    console.log("Deleted Order", id);
    setSeverity("error");
    setAlertMsg("Order " + id + " is deleted");
    setOpenAlert(true);
    setTimeout(() => {
      navigate("/shop/orders");
    }, 2000);
  };

  const handleUpdateOrderStatus = ({ status, orderID }) => {
    if (status === "For Refund") {
      console.log("Redirect to Chat");
    } else {
      console.log("Updated Order", orderID, " Status to:", status);
      setSeverity("success");
      setAlertMsg(`Updated Order ${orderID}, Status to ${status}`);
      setOpenAlert(true);
    }
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

  const {
    orderID,
    shopperID,
    status,
    shipping_method,
    created_at,
    approved_at,
    completed_at,
    shipping_fee,
    orderItem,
    username,
    userID,
    contact_number,
    municipality,
    postal_code,
    region,
    province,
    addressLine1,
    addressLine2,
    barangay,
    voucherID,
    promo_type,
    discount_amount,
  } = selectedOrder || {};

  return (
    <div>
      <Box sx={{ ...theme.components.box.pageContainer }}>
        <PageInfoComponent
          PageName={"Order Details"}
          Subtitle={`View and Manage Order Details`}
        />
        {/*Page Content */}
        <Box sx={{ ...theme.components.box.mainContent }}>
          {/*Main Content*/}
          <Box sx={{ ...classes.main }}>
            {/*Display Product Info*/}
            <Box sx={{ ...classes.displayInfo }}>
              <Header
                orderID={orderID}
                handleDelete={handleDelete}
                handleUpdateOrderStatus={handleUpdateOrderStatus}
                status={status}
              />
            </Box>

            {/*Details */}
            <Box sx={{ ...classes.main }}>
              {/*Product Variations*/}
              <Box sx={{ ...classes.content }}>
                <OrderStatus status={status} />
              </Box>

              {/*Appllied Promos*/}
              <Box sx={{ ...classes.content }}>
                <OrderDetails
                  orderID={orderID}
                  createdAt={created_at}
                  approvedAt={approved_at}
                  completedAt={completed_at}
                  shippingMethod={shipping_method}
                />
              </Box>

              {/*Vouchers*/}
              <Box sx={{ ...classes.content }}>
                <CustomerDetails
                  name={username}
                  municipality={municipality}
                  addressLine1={addressLine1}
                  addressLine2={addressLine2}
                  barangay={barangay}
                  province={province}
                  region={region}
                  postalCode={postal_code}
                  contactNumber={contact_number}
                />
              </Box>

              {/*Product Details*/}
              <Box sx={{ ...classes.content }}>
                <ProductsBought orderItems={orderItem} />
              </Box>

              {/*Product Images*/}
              <Box sx={{ ...classes.content }}>
                <PriceSummary
                  orderItems={orderItem}
                  voucherID={voucherID}
                  promoType={promo_type}
                  discountAmount={discount_amount}
                  shippingFee={shipping_fee}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/*Display Alert */}
      <CustomAlert
        open={openAlert}
        setOpen={setOpenAlert}
        severity={severity}
        alertMsg={alertMsg}
      />
    </div>
  );
}

const classes = {
  main: {
    ...theme.components.box.contentColumn,
    width: "600px",
    "@media (max-width: 900px)": {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
  },
  displayInfo: {
    "@media (max-width: 900px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },

  tab: {
    color: "inherit",
    fontSize: 18,
  },
  content: {
    minWidth: "600px",
    ...theme.components.box.sectionContainer,
    "@media (max-width: 900px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },

  tabs: {
    height: 50,
    width: "100%",
    backgroundColor: `${theme.palette.background.paper}`,
    borderRadius: 5,
    mt: 2,
  },
};

export default OrderPageContent;
