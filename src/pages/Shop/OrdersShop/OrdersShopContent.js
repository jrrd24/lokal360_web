import React from "react";
import { Box } from "@mui/material";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import styles from "../../../css/Styles.module.css";
import OrderSummary from "../DashboardShop/DashboardComponents/OrderSummary";
import MyOrders from "./OrdersShopComponents/MyOrders";

function OrdersShopContent() {
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
        PageName={"Orders"}
        Subtitle={"Manage your Shop's Orders"}
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
          }}
        >
          {/*Featured Products/ My Products (Left Side)*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              flexWrap: "wrap",
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
              className={`${styles.sectionContainer}`}
              sx={{
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
              className={`${styles.sectionContainer}`}
              sx={{
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
    </Box>
  );
}

export default OrdersShopContent;
