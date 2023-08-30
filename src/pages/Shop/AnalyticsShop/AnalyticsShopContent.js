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
        <Box
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
          <StatisticsBoxes />
        </Box>

        {/*Main Content*/}
        <Box sx={{ ...theme.components.box.mainContent, order: 2 }}>
          {/*Graphs (Left Side)*/}
          <Box
            sx={{
              ...theme.components.box.contentColumn,
              "@media (max-width: 1516px)": {
                alignItems: "center",
                justifyContent: "center",
                minWidth: "100%",
              },
            }}
          >
            {/*Product Sales Graph*/}
            <Box
              sx={{
                ...theme.components.box.graphContainer,
              }}
            >
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
          <Box
            sx={{
              ...theme.components.box.contentColumn,
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
              sx={{
                ...theme.components.box.sectionContainer,
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
              <TopProducts />
            </Box>

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
                  minWidth: "48%",
                },
                "@media (max-width: 913px)": {
                  minWidth: "100%",
                },
              }}
            >
              <SoldPerCategory />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AnalyticsShopContent;
