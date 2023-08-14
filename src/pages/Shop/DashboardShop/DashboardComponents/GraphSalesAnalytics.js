import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import styles from "../../../../css/Styles.module.css";
import theme from "../../../../Theme";
import DateSelection from "../../../../components/DateSelection";
import CustomLink from "../../../../components/CustomLink";
import DisplayDateSelection from "../../../../components/DisplayDateSelection";
import CustomLineChart from "../../../../components/CustomLineChart";

const data = [
  {
    name: "Monday",
    Total_Sales: 4000,
    Products_Sold: 2400,
  },
  {
    name: "Tuesday",
    Total_Sales: 3000,
    Products_Sold: 1398,
  },
  {
    name: "Wednesday",
    Total_Sales: 2000,
    Products_Sold: 9800,
  },
  {
    name: "Thursday",
    Total_Sales: 2780,
    Products_Sold: 3908,
  },
  {
    name: "Friday",
    Total_Sales: 1890,
    Products_Sold: 4800,
  },
  {
    name: "Saturday",
    Total_Sales: 2390,
    Products_Sold: 3800,
  },
  {
    name: "Sunday",
    Total_Sales: 3490,
    Products_Sold: 4300,
  },
];

const lines = [
  { dataKey: "Total_Sales", stroke: "#6E5FDE" },
  { dataKey: "Products_Sold", stroke: "#F18701" },
];

function GraphSalesAnalytics() {
  return (
    <Stack
      spacing={3}
      direction={"column"}
      sx={{
        maxWidth: "100%",
        "@media (max-width: 1516px)": {
          justifyContent: "center",
        },
      }}
    >
      {/*Section Header */}
      <Stack
        spacing={2}
        direction={"row"}
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {/*Section Name */}
        <Stack>
          <Typography variant="sectionTitle" sx={{ textAlign: "left" }}>
            Shop Activity&nbsp;-&nbsp;
            <Typography
              variant="inherit"
              component={"span"}
              sx={{
                color: `${theme.palette.text.sixty}`,
              }}
            >
              Product Sales Graph
            </Typography>
          </Typography>
        </Stack>
        <Box
          className={`${styles.grow}`}
          sx={{
            minWidth: 70,
            order: 3,
            "@media (max-width: 1073px)": {
              order: 2,
            },
            "@media (max-width: 700px)": {
              order: 3,
            },
          }}
        >
          <CustomLink to="/shop/analytics">{"See All"}</CustomLink>
        </Box>

        {/*Date time */}
        <Box
          sx={{
            order: 2,
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            flexWrap: "wrap",
            "@media (max-width: 760px)": {
              order: 3,
            },
          }}
        >
          <DateSelection />
          <DisplayDateSelection />
        </Box>
      </Stack>

      {/*Section Content */}
      <Box
        sx={{
          maxWidth: "99%",
          height: "350px",
        }}
      >
        {/*Graph */}
        <CustomLineChart data={data} lines={lines} />
      </Box>
    </Stack>
  );
}

export default GraphSalesAnalytics;