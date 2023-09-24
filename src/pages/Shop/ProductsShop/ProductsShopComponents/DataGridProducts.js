import * as React from "react";
import { Avatar, IconButton } from "@mui/material";
import { ProductInventoryStatus } from "../../../../components/ShopOnly/StatusAndTags/ProductInventoryStatus";
import theme from "../../../../Theme";
import { ArrowCircleRight } from "@mui/icons-material";
import productData from "../../../../data/productData";
import CustomDataGrid from "../../../../components/CustomDataGrid";
import { Link } from "react-router-dom";
// Define Datagrid Columns
const columns = [
  { field: "productID", headerName: "ID", width: 80, hideable: false },
  {
    field: "product_image",
    headerName: "Image",
    width: 100,
    disableExport: true,
    renderCell: (params) => {
      const img = params.value;
      let statusComponent;
      statusComponent = (
        <Avatar
          src={img || require("../../../../assets/lokal360_Logo.png")}
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
    field: "product_name",
    headerName: "Name",
    width: 275,
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
      if (
        status === "In Stock" ||
        status === "Low Stock" ||
        status === "Out Of Stock"
      ) {
        statusComponent = <ProductInventoryStatus status={status} />;
      } else {
        statusComponent = <ProductInventoryStatus status={"Discontinued"} />;
      }

      return statusComponent;
    },
  },

  {
    field: "",
    headerName: "Action",
    width: 60,
    sortable: false,
    filterable: false,
    hideable: false,
    disableExport: true,
    renderCell: (params) => {
      let statusComponent;
      const productID = params.row.productID;
      statusComponent = (
        <Link to={`/shop/products/product_page/${productID}`}>
          <IconButton>
            <ArrowCircleRight sx={{ color: `${theme.palette.primary.main}` }} />
          </IconButton>
        </Link>
      );
      return statusComponent;
    },
  },
];

export default function DataGridProducts() {
  return (
    <CustomDataGrid
      data={productData}
      columns={columns}
      rowID={"productID"}
      sortField={"status"}
      sortBy={"desc"}
    />
  );
}
