import React from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import { Box } from "@mui/material";
import styles from "../../../css/Styles.module.css";
import TopProducts from "../AnalyticsShop/AnalyticsComponents/TopProducts";
import ProductStatus from "../DashboardShop/DashboardComponents/ProductStatus";
import FeaturedProducts from "./ProductsShopComponents/FeaturedProducts";
import MyProducts from "./ProductsShopComponents/MyProducts";

function ProductsShopContent() {
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        maxWidth: 2250,
        alignItems: "center",
        justifyContent: "center",
        pb: 5,
      }}
    >
      <PageInfoComponent
        PageName={"Products"}
        Subtitle={"Add and Manage your Products"}
      />

      {/*Page Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "32px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/*Main Content*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "32px",
            flexWrap: "wrap",
            order: 2,
          }}
        >
          {/*Featured Products/ My Products (Left Side)*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              flexWrap: "wrap",
              order: 3,
              "@media (max-width: 1516px)": {
                alignItems: "center",
                justifyContent: "center",
                minWidth: "100%",
              },
            }}
          >
            {/*Featured Products*/}
            <Box
              className={`${styles.sectionContainer}`}
              sx={{
                minWidth: "750px",
                order: 1,
                "@media (max-width: 1516px)": {
                  order: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "100%",
                },
              }}
            >
              <FeaturedProducts />
            </Box>

            {/*My Products*/}
            <Box
              className={`${styles.sectionContainer}`}
              sx={{
                minWidth: "750px",
                order: 1,
                "@media (max-width: 1516px)": {
                  order: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "100%",
                },
              }}
            >
              <MyProducts />
            </Box>
          </Box>

          {/*Product Info (Right Side)*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              flexWrap: "wrap",
              order: 4,
              "@media (max-width: 1516px)": {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "100%",
              },
            }}
          >
            {/*Top Products */}
            <Box
              className={`${styles.sectionContainer}`}
              sx={{
                maxWidth: "340px",
                order: 3,
                "@media (max-width: 1516px)": {
                  order: 3,
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "48%",
                },
                "@media (max-width: 913px)": {
                  minWidth: "100%",
                },
              }}
            >
              <TopProducts hideShowAll={true} />
            </Box>

            {/*Products Sold Per Category */}
            <Box
              className={`${styles.sectionContainer}`}
              sx={{
                maxWidth: "340px",
                order: 3,
                "@media (max-width: 1516px)": {
                  order: 3,
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "48%",
                },
                "@media (max-width: 913px)": {
                  minWidth: "100%",
                },
              }}
            >
              <ProductStatus hideShowAll={true} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductsShopContent;
