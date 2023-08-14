import React from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import SoldPerCategory from "../AnalyticsShop/AnalyticsComponents/SoldPerCategory";
import MyShopCategories from "./ShopCategoryComponents/MyShopCategories";
import { Box } from "@mui/material";
import styles from "../../../css/Styles.module.css";

function ShopCategoryContent() {
  return (
    <Box>
      <PageInfoComponent
        PageName={"Shop Categories"}
        Subtitle={"Add and Manage your Custom Shop Categories"}
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
          {/*(Left Side)*/}
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
            {/*My Categories*/}
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
              <MyShopCategories />
            </Box>
          </Box>

          {/*(Right Side)*/}
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
              <SoldPerCategory hideShowAll={true} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ShopCategoryContent;
