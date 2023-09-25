import React from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import { Box } from "@mui/material";
import UserShopInfo from "./DashboardComponents/UserShopInfo";
import OrderSummary from "./DashboardComponents/OrderSummary";
import ValuableCustomers from "./DashboardComponents/ValuableCustomers";
import ActiveLokalAds from "./DashboardComponents/ActiveLokalAds";
import ActiveVouchers from "./DashboardComponents/ActiveVouchers";
import ProductStatus from "./DashboardComponents/ProductStatus";
import GraphSalesAnalytics from "../AnalyticsShop/AnalyticsComponents/GraphSalesAnalytics";
import theme from "../../../Theme";
import DateRangePicker from "../../../components/Pickers/DateRangePicker";

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
        <Box sx={{ ...classes.rightContainer }}>
          {/*Order Summary */}
          <Box sx={{ ...classes.orderSummaryContainer }}>
            <OrderSummary />
          </Box>
          {/*Vouchers and Lokal Ads */}
          <Box sx={{ ...classes.voucherAdsContainer }}>
            {/*Active Lokal Ads*/}
            <Box sx={{ ...classes.adsContainer }}>
              <ActiveLokalAds />
            </Box>

            {/*Active Vouchers*/}
            <Box sx={{ ...classes.voucherContainer }}>
              <ActiveVouchers />
            </Box>
          </Box>

          <Box sx={{ ...theme.components.box.graphContainer }}>
            <GraphSalesAnalytics />
          </Box>
        </Box>

        {/*Customer, Prod (Left Side)*/}
        <Box sx={{ ...classes.leftContainer }}>
          {/*Date Range Picker */}
          <Box sx={{ ...classes.datePickerContainer }}>
            <DateRangePicker />
          </Box>

          {/*Valuable Customers */}
          <Box sx={{ ...classes.valuableCustomersContainer }}>
            <ValuableCustomers />
          </Box>

          {/*Product Status */}
          <Box sx={{ ...classes.productStatusContainer }}>
            <ProductStatus />
          </Box>
        </Box>

        {/*User and Shop Info */}
        <Box sx={{ ...classes.infoContainer }}>
          <UserShopInfo />
        </Box>
      </Box>
    </Box>
  );
}

const classes = {
  rightContainer: {
    ...theme.components.box.contentColumn,
    "@media (max-width: 900px)": {
      minWidth: "100%",
    },
    "@media (max-width: 600px)": {
      alignItems: "center",
      justifyContent: "center",
    },
  },

  orderSummaryContainer: {
    ...theme.components.box.sectionContainer,
    maxWidth: "750px",
    "@media (max-width: 900px)": {
      minWidth: "100%",
    },
  },

  voucherAdsContainer: {
    ...theme.components.box.contentRow,
    minWidth: "100%",
    "@media (max-width: 1185px)": {
      minWidth: "100%",
      flexDirection: "column",
    },
  },

  adsContainer: {
    ...theme.components.box.sectionContainer,
    width: "360px",

    "@media (max-width: 1300px)": {
      minWidth: "100%",
    },
  },

  voucherContainer: {
    ...theme.components.box.sectionContainer,
    width: "360px",

    "@media (max-width: 1300px)": {
      minWidth: "100%",
    },
  },

  leftContainer: {
    ...theme.components.box.contentColumn,
    "@media (max-width: 1300px)": {
      minWidth: "752px",
      alignItems: "center",
      justifyContent: "center",
    },

    "@media (max-width: 900px)": {
      minWidth: "100%",
    },
  },

  datePickerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "340px",
    "@media (max-width: 1300px)": {
      minWidth: "100%",
      order: 1,
    },
  },

  valuableCustomersContainer: {
    ...theme.components.box.sectionContainer,
    maxWidth: "340px",
    "@media (max-width: 1300px)": {
      minWidth: "100%",
      order: 2,
    },
  },

  productStatusContainer: {
    ...theme.components.box.sectionContainer,
    maxWidth: "340px",
    "@media (max-width: 1300px)": {
      minWidth: "100%",
      order: 3,
    },
  },

  infoContainer: {
    ...theme.components.box.sectionContainer,
    minWidth: "1120px",
    "@media (max-width: 1300px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "750px",
    },
    "@media (max-width: 900px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },
};
export default DashboardShopContent;
