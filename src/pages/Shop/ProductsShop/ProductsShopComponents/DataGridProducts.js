import * as React from "react";
import { Avatar, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { ProductInventoryStatus } from "../../../../components/ShopOnly/StatusAndTags/ProductInventoryStatus";
import theme from "../../../../Theme";
import { ArrowCircleRight } from "@mui/icons-material";

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

const rows = [
  {
    productID: 1,
    product_image: require("../../../../assets/lokal360_Logo.png"),
    name: "Product 1",
    total_sold: 76,
    status: "Low Stock",
    number_of_variations: 9,
    promo_type: "Peso Discount",
  },

  {
    productID: 2,
    product_image: require("../../../../assets/lokal360_Logo.png"),
    name: "Product 2",
    total_sold: 58,
    status: "Out Of Stock",
    number_of_variations: 4,
    promo_type: "Free Shipping",
  },
  {
    productID: 3,
    product_image: require("../../../../assets/lokal360_Logo.png"),
    name: "Product 3",
    total_sold: 11,
    status: "In Stock",
    number_of_variations: 3,
    promo_type: "Percent Discount",
  },
  {
    productID: 4,
    product_image: require("../../../../assets/lokal360_Logo.png"),
    name: "Product 4",
    total_sold: 93,
    status: "In Stock",
    number_of_variations: 8,
    promo_type: "None",
  },
  {
    productID: 5,
    product_image: require("../../../../assets/lokal360_Logo.png"),
    name: "Product 5",
    total_sold: 27,
    status: "Low Stock",
    number_of_variations: 5,
    promo_type: "Percent Discount",
  },
  {
    productID: 6,
    product_image: require("../../../../assets/lokal360_Logo.png"),
    name: "Product 6",
    total_sold: 105,
    status: "In Stock",
    number_of_variations: 2,
    promo_type: "Free Shipping",
  },
  {
    productID: 7,
    product_image: require("../../../../assets/lokal360_Logo.png"),
    name: "Product 7",
    total_sold: 87,
    status: "In Stock",
    number_of_variations: 7,
    promo_type: "Peso Discount",
  },
  {
    productID: 8,
    product_image: require("../../../../assets/lokal360_Logo.png"),
    name: "Product 8",
    total_sold: 37,
    status: "Low Stock",
    number_of_variations: 10,
    promo_type: "None",
  },
  {
    productID: 9,
    product_image: require("../../../../assets/lokal360_Logo.png"),
    name: "Product 9",
    total_sold: 9,
    status: "Discontinued",
    number_of_variations: 1,
    promo_type: "Percent Discount",
  },
  {
    productID: 10,
    product_image: require("../../../../assets/lokal360_Logo.png"),
    name: "Product 10",
    total_sold: 70,
    status: "Out Of Stock",
    number_of_variations: 6,
    promo_type: "Free Shipping",
  },
  {
    productID: 11,
    product_image: require("../../../../assets/lokal360_Logo.png"),
    name: "Product 11",
    total_sold: 62,
    status: "In Stock",
    number_of_variations: 9,
    promo_type: "Peso Discount",
  },
  {
    productID: 12,
    product_image: require("../../../../assets/lokal360_Logo.png"),
    name: "Product 12",
    total_sold: 39,
    status: "Low Stock",
    number_of_variations: 4,
    promo_type: "Percent Discount",
  },
  {
    productID: 13,
    product_image: require("../../../../assets/lokal360_Logo.png"),
    name: "Product 13",
    total_sold: 21,
    status: "Out Of Stock",
    number_of_variations: 7,
    promo_type: "None",
  },
];

export default function DataGridProducts() {
  const getRowId = (row) => row.productID;
  return (
    <DataGrid
      //sx line is needed for overflow (bug in mui data grid v6)
      sx={{ display: "grid", gridTemplateRows: "auto 1f auto" }}
      rows={rows}
      columns={columns}
      getRowId={getRowId}
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
