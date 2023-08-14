import React from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import DataGridProducts from "../ProductsShop/ProductsShopComponents/DataGridProducts";
import { Box } from "@mui/material";

function ShopCategoryContent() {
  return (
    <Box>
      <PageInfoComponent
        PageName={"Shop Categories"}
        Subtitle={"Add and Manage your Custom Shop Categories"}
      />
    </Box>
  );
}

export default ShopCategoryContent;
