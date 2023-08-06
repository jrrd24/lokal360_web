import React, { useState } from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import { Box } from "@mui/material";
import styles from "../../../css/Styles.module.css";
import UserShopInfo from "./Components/UserShopInfo";
import OrderSummary from "./Components/OrderSummary";
import ValuableCustomers from "./Components/ValuableCustomers";
import ActiveLokalAds from "./Components/ActiveLokalAds";
import ActiveVouchers from "./Components/ActiveVouchers";
import ProductStatus from "./Components/ProductStatus";
import SalesAnalytics from "./Components/SalesAnalytics";

function DashboardShopContent() {
  //For Date Range Query

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        maxWidth: 2250,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PageInfoComponent
        PageName={"Shop Dashboard"}
        Subtitle={"Good Morning {Shop Owner Name}"}
      />

      {/*Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "32px",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {/*User and Shop Info */}
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
          <UserShopInfo />
        </Box>

        {/*First Row*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "32px",
            flexWrap: "wrap",
            "@media (max-width: 1516px)": {
              minWidth: "100%",
            },
            "@media (max-width: 600px)": {
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          {/*Order Summary */}
          <Box
            className={`${styles.sectionContainer}`}
            sx={{
              maxWidth: "750px",
              order: 1,
              "@media (max-width: 1516px)": {
                order: 1,
                minWidth: "100%",
              },
            }}
          >
            <OrderSummary />
          </Box>

          {/*Valuable Customers */}
          <Box
            className={`${styles.sectionContainer}`}
            sx={{
              maxWidth: "340px",
              order: 3,
              "@media (max-width: 1516px)": {
                order: 3,
                alignItems: "center",
                justifyContent: "center",
                minWidth: "100%",
              },
            }}
          >
            <ValuableCustomers />
          </Box>
        </Box>

        {/*Second Row*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "32px",
            flexWrap: "wrap",

            "@media (max-width: 1516px)": {
              minWidth: "100%",
            },
            "@media (max-width: 600px)": {
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          {/*Active Lokal Ads*/}
          <Box
            className={`${styles.sectionContainer}`}
            sx={{
              width: "360px",
              order: 1,
              "@media (max-width: 1516px)": {
                order: 1,
                minWidth: "100%",
              },
            }}
          >
            <ActiveLokalAds />
          </Box>

          {/*Active Vouchers*/}
          <Box
            className={`${styles.sectionContainer}`}
            sx={{
              width: "360px",
              order: 1,
              "@media (max-width: 1516px)": {
                order: 1,
                minWidth: "100%",
              },
            }}
          >
            <ActiveVouchers />
          </Box>

          {/*Product Status */}
          <Box
            className={`${styles.sectionContainer}`}
            sx={{
              maxWidth: "340px",
              order: 3,

              "@media (max-width: 1516px)": {
                minWidth: "100%",
              },
            }}
          >
            <ProductStatus />
          </Box>
        </Box>

        {/*Third Row*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "32px",
            flexWrap: "wrap",

            "@media (max-width: 1516px)": {
              minWidth: "100%",
            },
            "@media (max-width: 600px)": {
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          {/*Product Sales Graph*/}
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
            <SalesAnalytics />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardShopContent;
