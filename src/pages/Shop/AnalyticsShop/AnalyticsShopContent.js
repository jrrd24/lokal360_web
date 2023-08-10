import React from "react";
import { Box, Stack } from "@mui/material";
import styles from "../../../css/Styles.module.css";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import StatisticsBoxes from "./AnalyticsComponents/StatisticsBoxes";
import GraphSalesAnalytics from "./AnalyticsComponents/GraphSalesAnalytics";
import TopProducts from "./AnalyticsComponents/TopProducts";

function AnalyticsShopContent() {
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
        PageName={"Analytics"}
        Subtitle={"View Realtime Product and Shop Analytics"}
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "32px",
            flexWrap: "wrap",
            order: 2,
          }}
        >
          {/*Graphs (Left Side)*/}
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
            {/*Product Sales Graph*/}
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
              <GraphSalesAnalytics />
            </Box>

            {/*Product Sales Graph*/}
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
              <GraphSalesAnalytics />
            </Box>

            {/*Product Sales Graph*/}
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
              <GraphSalesAnalytics />
            </Box>
          </Box>

          {/*Product Info (Right Side)*/}
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
                  minWidth: "48%",
                },
                "@media (max-width: 913px)": {
                  minWidth: "100%",
                },
              }}
            >
              <TopProducts />
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
                  minWidth: "48%",
                },
                "@media (max-width: 913px)": {
                  minWidth: "100%",
                },
              }}
            >
              <TopProducts />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AnalyticsShopContent;
