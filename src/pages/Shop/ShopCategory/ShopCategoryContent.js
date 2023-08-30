import React from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import SoldPerCategory from "../AnalyticsShop/AnalyticsComponents/SoldPerCategory";
import MyShopCategories from "./ShopCategoryComponents/MyShopCategories";
import { Box } from "@mui/material";
import theme from "../../../Theme";

function ShopCategoryContent() {
  return (
    //Page Container
    <Box sx={{ ...theme.components.box.pageContainer }}>
      <PageInfoComponent
        PageName={"Shop Categories"}
        Subtitle={"Add and Manage your Custom Shop Categories"}
      />

      {/*Main Content*/}
      <Box sx={{ ...theme.components.box.mainContent }}>
        {/*(Left Side)*/}
        <Box
          sx={{
            ...theme.components.box.contentRow,
            "@media (max-width: 1516px)": {
              alignItems: "center",
              justifyContent: "center",
              minWidth: "100%",
            },
          }}
        >
          {/*My Categories*/}
          <Box
            sx={{
              ...theme.components.box.sectionContainer,
              minWidth: "600px",
              "@media (max-width: 912px)": {
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
            ...theme.components.box.contentRow,
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
            sx={{
              ...theme.components.box.sectionContainer,
              maxWidth: "340px",
              order: 3,
              "@media (max-width: 1516px)": {
                order: 3,
                alignItems: "center",
                justifyContent: "center",
                minWidth: 807,
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
  );
}

export default ShopCategoryContent;
