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
        {/*Orders Overview / Shop Orders*/}
        <Box sx={{ ...classes.leftContainer }}>
          {/*Orders Overview*/}
          <Box sx={{ ...classes.contentContainer }}>
            <OrderSummary hideShowAll={true} />
          </Box>

          {/*Shop Orders*/}
          <Box sx={{ ...classes.contentContainer }}>
            <MyOrders />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const classes = {
  leftContainer: {
    ...theme.components.box.contentColumn,
    order: 1,
    "@media (max-width: 1200px)": {
      order: 2,
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },

  contentContainer: {
    ...theme.components.box.sectionContainer,
    minWidth: "1120px",
    "@media (max-width: 1200px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },
};

export default OrdersShopContent;
