import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import theme from "../../../../Theme";
import DisplayDateSelection from "../../../../components/DisplayDateSelection";
import CustomLineChart from "../../../../components/CustomLineChart";

const data = [
  {
    name: "Monday",
    Shop_Visitors: 4000,
    Followers: 2400,
  },
  {
    name: "Tuesday",
    Shop_Visitors: 3000,
    Followers: 1398,
  },
  {
    name: "Wednesday",
    Shop_Visitors: 2000,
    Followers: 9800,
  },
  {
    name: "Thursday",
    Shop_Visitors: 2780,
    Followers: 3908,
  },
  {
    name: "Friday",
    Shop_Visitors: 1890,
    Followers: 4800,
  },
  {
    name: "Saturday",
    Shop_Visitors: 2390,
    Followers: 3800,
  },
  {
    name: "Sunday",
    Shop_Visitors: 3490,
    Followers: 4300,
  },
];

const lines = [
  { dataKey: "Shop_Visitors", stroke: "#6E5FDE" },
  { dataKey: "Followers", stroke: "#F18701" },
];

function GraphShopTraffic() {
  return (
    <Stack spacing={3} direction={"column"} sx={{ ...classes.main }}>
      {/*Section Header */}
      <Stack spacing={2} direction={"row"} sx={{ ...classes.sectionHeader }}>
        {/*Section Name */}
        <Stack>
          <Typography variant="sectionTitle" sx={{ textAlign: "left" }}>
            Shop Activity&nbsp;-&nbsp;
            <Typography
              variant="inherit"
              component={"span"}
              sx={{ color: `${theme.palette.text.sixty}` }}
            >
              Shop Traffic Graph
            </Typography>
          </Typography>
        </Stack>

        {/*Date time */}
        <Box sx={{ ...classes.dateTimeContainer }}>
          <DisplayDateSelection />
        </Box>
      </Stack>

      {/*Section Content */}
      <Box sx={{ ...classes.sectionContent }}>
        {/*TODO: Add Graph Here */}
        {/*Graph */}
        <CustomLineChart
          data={data}
          lines={lines}
          downloadFileName={"Shop_Traffic_Graph.png"}
        />
      </Box>
    </Stack>
  );
}

const classes = {
  main: {
    "@media (max-width: 1516px)": {
      justifyContent: "center",
    },
  },
  sectionHeader: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  dateTimeContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "8px",
    flexWrap: "wrap",
  },
  sectionContent: {
    maxWidth: "99%",
    height: "350px",
  },
};

export default GraphShopTraffic;
