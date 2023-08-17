import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
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

// Define data grid columns
const columns = [
  {
    field: "orderID",
    headerName: "Order ID",
    hideable: false,
    type: "number",
    width: 80,
  },
  {
    field: "name",
    headerName: "Customer Name",
    width: 160,
  },
  {
    field: "products",
    headerName: "Products Bought",
    width: 180,
    renderCell: (params) => {
      return <Box>{params.value}</Box>;
    },
  },
  {
    field: "total_price",
    headerName: "Total Price",
    type: "number",
    width: 140,
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
    width: 120,
  },
  {
    field: "createdAt",
    headerName: "Date Created",
    width: 120,
  },
  {
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
      statusComponent = (
        <IconButton>
          <ArrowCircleRight sx={{ color: `${theme.palette.primary.main}` }} />
        </IconButton>
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
    <DataGrid
      //sx line is needed for overflow (bug in mui data grid v6)
      sx={{ display: "grid", gridTemplateRows: "auto 1f auto" }}
      rows={preProcessedData}
      columns={columns}
      slots={{ toolbar: GridToolbar }}
      getRowId={(row) => row.orderID}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      getRowHeight={() => "auto"}
      disableRowSelectionOnClick
      pageSizeOptions={[5, 10, 15]}
    />
  );
}

export default DataGridOrders;
