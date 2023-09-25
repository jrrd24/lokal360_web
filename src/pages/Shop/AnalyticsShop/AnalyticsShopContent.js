import React from "react";
import { Box } from "@mui/material";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import StatisticsBoxes from "./AnalyticsComponents/StatisticsBoxes";
import GraphSalesAnalytics from "./AnalyticsComponents/GraphSalesAnalytics";
import TopProducts from "./AnalyticsComponents/TopProducts";
import SoldPerCategory from "./AnalyticsComponents/SoldPerCategory";
import GraphProductStatus from "./AnalyticsComponents/GraphProductStatus";
import GraphShopTraffic from "./AnalyticsComponents/GraphShopTraffic";
import theme from "../../../Theme";
import DateRangePicker from "../../../components/Pickers/DateRangePicker";

function AnalyticsShopContent() {
  return (
    <Box sx={{ ...theme.components.box.pageContainer }}>
      <PageInfoComponent
        PageName={"Analytics"}
        Subtitle={"View Realtime Product and Shop Analytics"}
      />

      {/*Page Content */}
      <Box sx={{ ...theme.components.box.mainContent }}>
        {/*Statistics Boxes Section*/}
        <Box sx={{ ...classes.statisticsBoxContainer }}>
          <StatisticsBoxes />
        </Box>

        {/*Main Content*/}
        <Box sx={{ ...theme.components.box.mainContent, order: 2 }}>
          {/*Graphs (Left Side)*/}
          <Box sx={{ ...classes.leftContainer }}>
            {/*Product Sales Graph*/}
            <Box sx={{ ...theme.components.box.graphContainer }}>
              <GraphSalesAnalytics />
            </Box>

            {/*Product Sales Graph*/}
            <Box sx={{ ...theme.components.box.graphContainer }}>
              <GraphProductStatus />
            </Box>

            {/*Product Sales Graph*/}
            <Box sx={{ ...theme.components.box.graphContainer }}>
              <GraphShopTraffic />
            </Box>
          </Box>

          {/*Product Info (Right Side)*/}
          <Box sx={{ ...classes.rightContainer }}>
            {/*Date time */}
            <Box sx={{ ...classes.dateTimeContainer }}>
              <DateRangePicker />
            </Box>
            {/*Top Products */}
            <Box sx={{ ...classes.topProducts }}>
              <TopProducts />
            </Box>

            {/*Products Sold Per Category */}
            <Box sx={{ ...classes.soldPerCategory }}>
              <SoldPerCategory />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const classes = {
  statisticsBoxContainer: {
    minWidth: "1120px",
    "@media (max-width: 1300px)": {
      maxWidth: "785px",
      minWidth: "750px",
    },
    "@media (max-width: 900px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },

  leftContainer: {
    ...theme.components.box.contentColumn,
    minWidth: "750px",
    "@media (max-width: 900px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },

  rightContainer: {
    ...theme.components.box.contentColumn,
    "@media (max-width: 1300px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "750px",
    },
    "@media (max-width: 900px)": {
      minWidth: "100%",
    },
  },

  dateTimeContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    flexWrap: "wrap",
    "@media (max-width: 1300px)": {
      gap: "16px",
      minWidth: "100%",
    },
  },

  topProducts: {
    ...theme.components.box.sectionContainer,
    maxWidth: "340px",
    "@media (max-width: 1300px)": {
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "100%",
      minWidth: "100%",
    },
  },

  soldPerCategory: {
    ...theme.components.box.sectionContainer,
    maxWidth: "340px",
    "@media (max-width: 1300px)": {
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "100%",
      minWidth: "100%",
    },
  },
};
export default AnalyticsShopContent;
