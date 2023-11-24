import * as React from "react";
import { Avatar, Box, CircularProgress, IconButton } from "@mui/material";
import { ProductInventoryStatus } from "../../../../components/ShopOnly/StatusAndTags/ProductInventoryStatus";
import theme from "../../../../Theme";
import { ArrowCircleRight } from "@mui/icons-material";
// import productData from "../../../../data/productData";
import CustomDataGrid from "../../../../components/CustomDataGrid";
import { Link } from "react-router-dom";
import { useRequestProcessor } from "../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import useAuth from "../../../../hooks/useAuth";
import { BASE_URL } from "../../../../api/Api";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function DataGridProducts() {
  // get productData
  const { useCustomQuery } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const { data: productData, isLoading } = useCustomQuery(
    "getAllProduct",
    () =>
      axiosPrivate
        .get(`/api/product/?shopID=${auth.shopID}`)
        .then((res) => res.data),
    { enabled: true }
  );

  if (isLoading) {
    <Box sx={{ ...classes.loader }}>
      <CircularProgress />
    </Box>;
  }
  // Define Datagrid Columns
  const columns = [
    { field: "productID", headerName: "ID", width: 80, hideable: false },
    {
      field: "ProductImages",
      headerName: "Image",
      width: 100,
      disableExport: true,
      renderCell: (params) => {
        const productImages = params.value;
        const firstProductImage = productImages[0]; // Assuming the first image is the one you want to display
        const img = firstProductImage ? firstProductImage.prod_image : null;
        const imgPath = img ? `${BASE_URL}/${img}` : null;
        let statusComponent;
        statusComponent = (
          <Zoom>
            <Avatar
              src={
                imgPath ||
                require("../../../../assets/product_placeholder_big.jpg")
              }
              sx={{
                backgroundColor: "#FFF",
                width: 45,
                height: 45,
                border: "solid",
                borderColor: "transparent",
                borderRadius: 2,
              }}
            />
          </Zoom>
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

const classes = {
  loader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
};
