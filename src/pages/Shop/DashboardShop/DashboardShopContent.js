import React from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import { Box } from "@mui/material";
import UserShopInfo from "./DashboardComponents/UserShopInfo";
import OrderSummary from "./DashboardComponents/OrderSummary";
import ValuableCustomers from "./DashboardComponents/ValuableCustomers";
import ActiveLokalAds from "./DashboardComponents/ActiveLokalAds";
import ActiveVouchers from "./DashboardComponents/ActiveVouchers";
import ProductStatus from "./DashboardComponents/ProductStatus";
import GraphSalesAnalytics from "./DashboardComponents/GraphSalesAnalytics";
import theme from "../../../Theme";

function DashboardShopContent() {
  return (
    <Box sx={{ ...theme.components.box.pageContainer }}>
      <PageInfoComponent
        PageName={"Shop Dashboard"}
        Subtitle={"Good Morning {Shop Owner Name}"}
      />

      {/*Page Content */}
      <Box sx={{ ...theme.components.box.mainContent }}>
        {/*Orders, Ads, Vouchers (Right Side)*/}
        <Box
          sx={{
            ...theme.components.box.contentColumn,
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
            sx={{
              ...theme.components.box.sectionContainer,
              maxWidth: "750px",
              "@media (max-width: 1516px)": {
                minWidth: "100%",
              },
            }}
          >
            <OrderSummary />
          </Box>
          {/*Vouchers and Lokal Ads */}
          <Box
            sx={{
              ...theme.components.box.contentRow,
              minWidth: "100%",
              "@media (max-width: 1185px)": {
                minWidth: "100%",
                flexDirection: "column",
              },
            }}
          >
            {/*Active Lokal Ads*/}
            <Box
              sx={{
                ...theme.components.box.sectionContainer,
                width: "360px",
                "@media (max-width: 1516px)": {
                  minWidth: "48.5%",
                },
                "@media (max-width: 1185px)": {
                  minWidth: "100%",
                },
              }}
            >
              <ActiveLokalAds />
            </Box>

            {/*Active Vouchers*/}
            <Box
              sx={{
                ...theme.components.box.sectionContainer,
                width: "360px",
                "@media (max-width: 1516px)": {
                  minWidth: "48.5%",
                },
                "@media (max-width: 1185px)": {
                  minWidth: "100%",
                },
              }}
            >
              <ActiveVouchers />
            </Box>
          </Box>
        </Box>

        {/*Customer, Prod (Left Side)*/}
        <Box
          sx={{
            ...theme.components.box.contentColumn,
            "@media (max-width: 1516px)": {
              minWidth: "100%",
              flexDirection: "row",
            },
            "@media (max-width: 600px)": {
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          {/*Valuable Customers */}
          <Box
            sx={{
              ...theme.components.box.sectionContainer,
              maxWidth: "340px",
              "@media (max-width: 1516px)": {
                minWidth: "48.5%",
              },
              "@media (max-width: 1185px)": {
                minWidth: "100%",
              },
            }}
          >
            <ValuableCustomers />
          </Box>

          {/*Product Status */}
          <Box
            sx={{
              ...theme.components.box.sectionContainer,
              maxWidth: "340px",
              "@media (max-width: 1516px)": {
                minWidth: "48.5%",
              },
              "@media (max-width: 1185px)": {
                minWidth: "100%",
              },
            }}
          >
            <ProductStatus />
          </Box>
        </Box>

        {/*Graph*/}
        <Box
          sx={{
            ...theme.components.box.contentRow,
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
            sx={{
              ...theme.components.box.sectionContainer,
              minWidth: "1120px",
              "@media (max-width: 1516px)": {
                alignItems: "center",
                justifyContent: "center",
                minWidth: "100%",
              },
            }}
          >
            <GraphSalesAnalytics />
          </Box>
        </Box>

        {/*User and Shop Info */}
        <Box
          sx={{
            ...theme.components.box.sectionContainer,
            minWidth: "1120px",

            "@media (max-width: 1516px)": {
              alignItems: "center",
              justifyContent: "center",
              minWidth: "100%",
            },
          }}
        >
          <UserShopInfo />
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardShopContent;
