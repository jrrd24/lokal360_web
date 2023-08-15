import React from "react";
import { Avatar, IconButton, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import theme from "../../../../Theme";
import { ArrowCircleRight } from "@mui/icons-material";
import userData from "../../../../data/userData";
import CustomerStatus from "../../../../components/ShopOnly/StatusAndTags/CustomerStatus";
// Define data grid columns
const columns = [
  {
    field: "shopperID",
    headerName: "ID",
    hideable: false,
    type: "number",
    width: 60,
  },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      const img = params.value;
      let statusComponent;
      statusComponent = (
        <Avatar
          src={img}
          sx={{
            backgroundColor: "#FFF",
            width: 45,
            height: 45,
            border: "solid",
            borderColor: "transparent",
            borderRadius: 2,
          }}
        />
      );

      return statusComponent;
    },
  },
  {
    field: "username",
    headerName: "Name",
    width: 160,
  },
  {
    field: "orders",
    headerName: "No. of Purchases",
    type: "number",
    width: 120,
  },
  {
    field: "total",
    headerName: "Total Spent",
    type: "number",
    width: 120,
    renderCell: (params) => {
      const totalSpent = params.value;
      let statusComponent;
      statusComponent = <Typography>₱ {totalSpent}</Typography>;
      return statusComponent;
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => {
      const status = params.value;
      let statusComponent;
      if (
        status === "Follower" ||
        status === "Reported" ||
        status === "Banned"
      ) {
        statusComponent = <CustomerStatus status={status} />;
      } else {
        statusComponent = <CustomerStatus status={"N/A"} />;
      }

      return statusComponent;
    },
  },
  {
    headerName: "Action",
    width: 60,
    align: "center",
    headerAlign: "center",
    sortable: false,
    filterable: false,
    hideable: false,
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

function DataGridCustomers() {
  return (
    <DataGrid
      //sx line is needed for overflow (bug in mui data grid v6)
      sx={{ display: "grid", gridTemplateRows: "auto 1f auto" }}
      rows={userData}
      columns={columns}
      getRowId={(row) => row.shopperID}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      disableRowSelectionOnClick
      pageSizeOptions={[5, 10, 15]}
    />
  );
}

export default DataGridCustomers;
