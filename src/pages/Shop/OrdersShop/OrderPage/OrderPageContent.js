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
import useAlert from "../../../../hooks/useAlert";
import { useRequestProcessor } from "../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";

function OrderPageContent({ selectedOrderID }) {
  // Handle Alert Click
  const {
    open: openAlert,
    severity,
    alertMsg,
    showAlert,
    hideAlert,
  } = useAlert();

  const navigate = useNavigate();

  const handleDelete = ({ id }) => {
    console.log("Deleted:", id);
    showAlert(
      "error",
      <>
        ...Deleting <b>Order {id}</b>
      </>
    );
    setTimeout(() => {
      navigate("/shop/orders");
    }, 2000);
  };

  //API CALL UPDATE ORDER STATUS
  const { useCustomQuery, useCustomMutate } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();

  const { mutate } = useCustomMutate(
    "updateOrderStatus",
    async (data) => {
      await axiosPrivate.patch(
        `/api/buy_product/update_status/?orderID=${data.orderID}&updatedStatus=${data.status}`,
        data
      );
    },
    ["getShopOrder", "getOrderDetails"],
    {
      onError: (error) => {
        showAlert("error", error.response.data.error);
      },
      onMutate: () => {
        return <LoadingCircle />;
      },
      onSuccess: () => {
        if (status === "For Refund") {
          console.log("Redirect to Chat");
        } else {
          console.log("Updated Order", orderID, " Status to:", status);
          showAlert("success", `Updated Order Status `);
        }
      },
    }
  );

  const handleUpdateOrderStatus = ({ status, orderID }) => {
    const requestData = {
      orderID: orderID,
      status: status,
    };

    mutate(requestData);
  };

  //API CALL GET ORDER DETAILS
  const { data, isLoading } = useCustomQuery(
    "getOrderDetails",
    () =>
      axiosPrivate
        .get(
          `/api/buy_product/get_shop_order_details?orderID=${selectedOrderID}`
        )
        .then((res) => res.data),
    { enabled: selectedOrderID !== null }
  );

  if (isLoading) {
    return <LoadingCircle />;
  }

  const {
    orderID,
    status,
    shipping_method,
    createdAt,
    approved_at,
    completed_at,
    shipping_fee,
    OrderItems,
    Shopper,
    AppliedVoucher,
    sum_order_price,
  } = data || {};

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
                  createdAt={createdAt}
                  approvedAt={approved_at}
                  completedAt={completed_at}
                  shippingMethod={shipping_method}
                />
              </Box>

              {/*Vouchers*/}
              <Box sx={{ ...classes.content }}>
                <CustomerDetails
                  name={
                    Shopper.first_name && Shopper.last_name
                      ? `${Shopper.first_name} ${Shopper.last_name}`
                      : Shopper.username
                  }
                  municipality={Shopper.DeliveryAddress[0].municipality}
                  addressLine1={Shopper.DeliveryAddress[0].address_line_1}
                  addressLine2={Shopper.DeliveryAddress[0].address_line_2}
                  barangay={Shopper.DeliveryAddress[0].barangay}
                  province={Shopper.DeliveryAddress[0].province}
                  region={Shopper.DeliveryAddress[0].region}
                  postalCode={Shopper.DeliveryAddress[0].postal_code}
                  contactNumber={Shopper.mobile_num}
                />
              </Box>

              {/*Product Details*/}
              <Box sx={{ ...classes.content }}>
                <ProductsBought orderItems={OrderItems} />
              </Box>

              {/*Product Images*/}
              <Box sx={{ ...classes.content }}>
                <PriceSummary
                  orderItems={OrderItems}
                  appliedVoucher={AppliedVoucher}
                  shippingFee={shipping_fee}
                  productTotalPrice={sum_order_price}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/*Display Alert */}
      <CustomAlert
        open={openAlert}
        setOpen={hideAlert}
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
