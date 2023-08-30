import React from "react";
import { Box } from "@mui/material";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import OrderSummary from "../DashboardShop/DashboardComponents/OrderSummary";
import MyOrders from "./OrdersShopComponents/MyOrders";
import theme from "../../../Theme";

function OrdersShopContent() {
  return (
    <Box sx={{ ...theme.components.box.pageContainer }}>
      <PageInfoComponent
        PageName={"Orders"}
        Subtitle={"Manage your Shop's Orders"}
      />

      {/*Main Content*/}
      <Box sx={{ ...theme.components.box.mainContent }}>
        {/*Featured Products/ My Products (Left Side)*/}
        <Box
          sx={{
            ...theme.components.box.contentColumn,
            order: 1,
            "@media (max-width: 1516px)": {
              order: 2,
              alignItems: "center",
              justifyContent: "center",
              minWidth: "100%",
            },
          }}
        >
          {/*Featured Products*/}
          <Box
            sx={{
              ...theme.components.box.sectionContainer,
              minWidth: "1120px",
              order: 1,
              "@media (max-width: 1516px)": {
                order: 1,
                alignItems: "center",
                justifyContent: "center",
                minWidth: "100%",
              },
            }}
          >
            <OrderSummary hideShowAll={true} />
          </Box>

          {/*My Orders*/}
          <Box
            sx={{
              ...theme.components.box.sectionContainer,
              minWidth: "1120px",
              order: 2,
              "@media (max-width: 1516px)": {
                order: 2,
                alignItems: "center",
                justifyContent: "center",
                minWidth: "100%",
              },
            }}
          >
            <MyOrders />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default OrdersShopContent;
