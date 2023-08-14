import * as React from "react";
import { Avatar, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { ProductInventoryStatus } from "../../../../components/ShopOnly/StatusAndTags/ProductInventoryStatus";
import theme from "../../../../Theme";
import { ArrowCircleRight } from "@mui/icons-material";
import productData from "../../../../data/productData";

// Define data grid columns
const columns = [
  { field: "productID", headerName: "ID", type: "number", width: 60 },
  {
    field: "product_image",
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
    field: "name",
    headerName: "Name",
    width: 120,
  },
  {
    field: "total_sold",
    headerName: "Total Sold",
    type: "number",
    width: 80,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      const status = params.value;
      let statusComponent;
      if (status === "In Stock") {
        statusComponent = <ProductInventoryStatus status={status} />;
      } else if (status === "Low Stock") {
        statusComponent = <ProductInventoryStatus status={status} />;
      } else if (status === "Out Of Stock") {
        statusComponent = <ProductInventoryStatus status={status} />;
      } else {
        statusComponent = <ProductInventoryStatus status={"Discontinued"} />;
      }

      return statusComponent;
    },
  },
  {
    field: "number_of_variations",
    headerName: "No. of Variations",
    type: "number",
    width: 130,
  },
  {
    field: "promo_type",
    headerName: "Promo Applied",
    width: 170,
  },
  {
    headerName: "Action",
    width: 60,
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

export default function DataGridCategories() {
  const getProductID = (productData) => productData.productID;
  return (
    <DataGrid
      //sx line is needed for overflow (bug in mui data grid v6)
      sx={{ display: "grid", gridTemplateRows: "auto 1f auto" }}
      rows={productData}
      columns={columns}
      getRowId={getProductID}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      pageSizeOptions={[5, 10, 15]}
    />
  );
}
