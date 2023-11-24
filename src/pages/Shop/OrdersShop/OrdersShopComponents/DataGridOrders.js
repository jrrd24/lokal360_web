import React from "react";
import { Divider, IconButton, Typography } from "@mui/material";
import theme from "../../../../Theme";
import {
  ArrowCircleRight,
  Cancel,
  HourglassEmpty,
  Moped,
  Verified,
} from "@mui/icons-material";
import OrderStatus from "../../../../components/ShopOnly/StatusAndTags/OrderStatus";
import { BsBoxSeam } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { Link } from "react-router-dom";
import CustomDataGrid from "../../../../components/CustomDataGrid";
import { useRequestProcessor } from "../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import useAuth from "../../../../hooks/useAuth";
import { LoadingCircle } from "../../../../components/Loading/Loading";

function DataGridOrders() {
  //API CALL GET ALL SHOP ORDERS
  const { useCustomQuery } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const { data: orderData, isLoading } = useCustomQuery(
    "getShopOrder",
    () =>
      axiosPrivate
        .get(`/api/buy_product/get_all_shop_order/?shopID=${auth.shopID}`)
        .then((res) => res.data),
    { enabled: true }
  );

  if (isLoading) {
    return <LoadingCircle />;
  }
  // Define data grid columns
  const columns = [
    {
      field: "orderID",
      headerName: "ID",
      hideable: false,
      width: 110,
      filterable: true,
    },
    {
      field: "username",
      headerName: "Customer Name",
      width: 180,
      filterable: true,
    },
    {
      field: "orderItem",
      headerName: "Order Items",
      width: 280,
      renderCell: (params) => {
        const productNames = params.value
          .split(", ")
          .map((item, index, array) => {
            const [quantityAndProduct, varName] = item.split(" (var: ");
            const [quantity, productName] = quantityAndProduct.split("x ");

            return (
              <div style={{ textAlign: "left" }} key={productName}>
                <Typography variant="body" fontWeight="bold">
                  <br />
                  {quantity}x{" "}
                  <Typography
                    variant="body"
                    fontWeight="regular"
                    component={"span"}
                  >
                    {productName}
                  </Typography>{" "}
                  <br />
                  {varName && (
                    <Typography
                      variant="body"
                      fontWeight="regular"
                      color="primary"
                    >
                      (variation: {varName})
                    </Typography>
                  )}
                  <br /> <br />
                  {index !== array.length - 1 && (
                    <React.Fragment>
                      <Divider />
                    </React.Fragment>
                  )}
                </Typography>
              </div>
            );
          });

        return <div>{productNames}</div>;
      },
    },
    // {
    //   field: "sum_order_price",
    //   headerName: "Total Price",
    //   type: "number",
    //   width: 140,
    //   filterable: false,
    //   renderCell: (params) => {
    //     const totalPrice = Number(params.value);
    //     const formattedPrice = totalPrice.toFixed(2);
    //     let statusComponent;
    //     statusComponent = <Typography>₱ {formattedPrice}</Typography>;
    //     return statusComponent;
    //   },
    // },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      filterable: true,
      renderCell: (params) => {
        const status = params.value;
        let statusComponent;
        if (status === "Pending Approval") {
          statusComponent = (
            <OrderStatus status={status} component={Verified} />
          );
        } else if (status === "Preparing") {
          statusComponent = (
            <OrderStatus status={status} component={BsBoxSeam} />
          );
        } else if (status === "Ready For Pick-Up") {
          statusComponent = (
            <OrderStatus status={status} component={BiShoppingBag} />
          );
        } else if (status === "On Delivery") {
          statusComponent = <OrderStatus status={status} component={Moped} />;
        } else if (status === "Complete") {
          statusComponent = (
            <OrderStatus status={status} component={HourglassEmpty} />
          );
        } else if (status === "Cancelled") {
          statusComponent = <OrderStatus status={status} component={Cancel} />;
        } else if (status === "For Refund") {
          statusComponent = (
            <OrderStatus status={status} component={HiOutlineReceiptRefund} />
          );
        } else {
          statusComponent = <OrderStatus status={"N/A"} />;
        }

        return statusComponent;
      },
    },
    {
      field: "shipping_method",
      headerName: "Shipping Method",
      filterable: true,
      width: 120,
    },
    {
      field: "createdAt",
      headerName: "Date Created",
      filterable: true,
      width: 120,
    },
    {
      field: "",
      headerName: "Action",
      width: 60,
      align: "center",
      headerAlign: "center",
      sortable: false,
      filterable: false,
      hideable: false,
      disableExport: true,
      renderCell: (params) => {
        let statusComponent;
        let orderID = params.row.orderID;
        statusComponent = (
          <Link to={`/shop/orders/order_page/${orderID}`}>
            <IconButton>
              <ArrowCircleRight
                sx={{ color: `${theme.palette.primary.main}` }}
              />
            </IconButton>
          </Link>
        );
        return statusComponent;
      },
    },
  ];

  //Use to make sure orderItem are rendered as 1 string for csv export
  const preProcessedData = orderData?.map((order) => {
    const orderItems = order.OrderItems ?? [];

    const productNames = orderItems.map(
      (item) => `${item.quantity}x ${item.product_name} (var: ${item.var_name}`
    );

    return {
      ...order,
      username:
        order.Shopper.first_name && order.Shopper.last_name
          ? `${order.Shopper.first_name} ${order.Shopper.last_name}`
          : order.Shopper.username,
      orderItem: productNames.length > 0 ? productNames.join(", ") : "No items",
    };
  });

  return (
    <CustomDataGrid
      data={preProcessedData}
      columns={columns}
      rowID={"orderID"}
      autoHeight
      disableDensity
    />
  );
}

export default DataGridOrders;
