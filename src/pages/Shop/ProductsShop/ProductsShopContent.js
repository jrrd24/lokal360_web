import React from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import { Box } from "@mui/material";
import TopProducts from "../AnalyticsShop/AnalyticsComponents/TopProducts";
import ProductStatus from "../DashboardShop/DashboardComponents/ProductStatus";
import FeaturedProducts from "./ProductsShopComponents/FeaturedProducts";
import MyProducts from "./ProductsShopComponents/MyProducts";
import theme from "../../../Theme";

function ProductsShopContent() {
  return (
    <Box sx={{ ...theme.components.box.pageContainer }}>
      <PageInfoComponent
        PageName={"Products"}
        Subtitle={"Add and Manage your Products"}
      />

      {/*Main Content*/}
      <Box sx={{ ...theme.components.box.mainContent }}>
        {/*Featured Products/ My Products (Left Side)*/}
        <Box sx={{ ...classes.leftContainer }}>
          {/*Featured Products*/}
          <Box
            sx={{
              ...theme.components.box.sectionContainer,
              minWidth: "750px",
              maxWidth: "790px",
              "@media (max-width: 1516px)": {
                alignItems: "center",
                justifyContent: "center",
                minWidth: "100%",
              },
            }}
          >
            <FeaturedProducts />
          </Box>

          {/*My Products*/}
          <Box sx={{ ...classes.myProductsContainer }}>
            <MyProducts />
          </Box>
        </Box>

        {/*Product Info (Right Side)*/}
        <Box sx={{ ...classes.rightContainer }}>
          {/*Top Products */}
          <Box sx={{ ...classes.topProductsContainer }}>
            <TopProducts hideShowAll={true} />
          </Box>

          {/*Products Sold Per Category */}
          <Box sx={{ ...classes.categoryContainer }}>
            <ProductStatus hideShowAll={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const classes = {
  leftContainer: {
    ...theme.components.box.contentColumn,
    "@media (max-width: 1516px)": {
      alignItems: "baseline",
      justifyContent: "center",
      minWidth: "100%",
    },
  },

  rightContainer: {
    ...theme.components.box.contentColumn,
    "@media (max-width: 1516px)": {
      flexDirection: "row",
      alignItems: "baseline",
      justifyContent: "center",
      minWidth: "100%",
    },
  },

  myProductsContainer: {
    ...theme.components.box.sectionContainer,
    minWidth: "750px",
    "@media (max-width: 1516px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },

  topProductsContainer: {
    ...theme.components.box.sectionContainer,
    maxWidth: "340px",
    order: 1,
    "@media (max-width: 1516px)": {
      order: 2,
      alignItems: "center",
      justifyContent: "center",
      minWidth: "48%",
    },
    "@media (max-width: 913px)": {
      minWidth: "100%",
    },
  },

  categoryContainer: {
    ...theme.components.box.sectionContainer,
    maxWidth: "340px",
    order: 2,
    "@media (max-width: 1516px)": {
      order: 1,
      alignItems: "center",
      justifyContent: "center",
      minWidth: "48%",
    },
    "@media (max-width: 913px)": {
      minWidth: "100%",
    },
  },
};
export default ProductsShopContent;
