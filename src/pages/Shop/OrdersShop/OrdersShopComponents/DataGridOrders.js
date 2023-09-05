import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import theme from "../../../../Theme";
import {
  ArrowCircleRight,
  Cancel,
  HourglassEmpty,
  Moped,
  Verified,
} from "@mui/icons-material";
import orderData from "../../../../data/orderData";
import OrderStatus from "../../../../components/ShopOnly/StatusAndTags/OrderStatus";
import { BsBoxSeam } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { Link } from "react-router-dom";
import CustomDataGrid from "../../../../components/CustomDataGrid";

// Define data grid columns
const columns = [
  {
    field: "orderID",
    headerName: "ID",
    hideable: false,
    width: 80,
    filterable: true,
  },
  {
    field: "name",
    headerName: "Customer Name",
    width: 160,
    filterable: true,
  },
  {
    field: "products",
    headerName: "Products Bought",
    width: 180,
    filterable: true,
    renderCell: (params) => {
      return <Box>{params.value}</Box>;
    },
  },
  {
    field: "total_price",
    headerName: "Total Price",
    type: "number",
    width: 140,
    filterable: false,
    renderCell: (params) => {
      const totalPrice = params.value;
      const formattedPrice = totalPrice.toFixed(2);
      let statusComponent;
      statusComponent = <Typography>₱ {formattedPrice}</Typography>;
      return statusComponent;
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    filterable: true,
    //TODO: Fix order (Pending Approval to For Refund) Also: make default sort
    renderCell: (params) => {
      const status = params.value;
      let statusComponent;
      if (status === "Pending Approval") {
        statusComponent = <OrderStatus status={status} component={Verified} />;
      } else if (status === "Preparing") {
        statusComponent = <OrderStatus status={status} component={BsBoxSeam} />;
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
        <Link to={`/shop/orders/order_page?orderId=${orderID}`}>
          <IconButton>
            <ArrowCircleRight sx={{ color: `${theme.palette.primary.main}` }} />
          </IconButton>
        </Link>
      );
      return statusComponent;
    },
  },
];

//Use to make sure products are rendered as 1 string for csv export
const preProcessedData = orderData.map((order) => {
  return {
    ...order,
    products: order.products.join(", "),
  };
});

function DataGridOrders() {
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
