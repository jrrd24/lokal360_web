import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import theme from "../../../../Theme";
import DisplayDateSelection from "../../../../components/DisplayDateSelection";
import CustomLineChart from "../../../../components/CustomLineChart";

const data = [
  {
    name: "Monday",
    Products_Sold: 4000,
    In_Cart: 2400,
    Cancelled: 2400,
  },
  {
    name: "Tuesday",
    Products_Sold: 3000,
    In_Cart: 1398,
    Cancelled: 2210,
  },
  {
    name: "Wednesday",
    Products_Sold: 2000,
    In_Cart: 9800,
    Cancelled: 2290,
  },
  {
    name: "Thursday",
    Products_Sold: 2780,
    In_Cart: 3908,
    Cancelled: 2000,
  },
  {
    name: "Friday",
    Products_Sold: 1890,
    In_Cart: 4800,
    Cancelled: 2181,
  },
  {
    name: "Saturday",
    Products_Sold: 2390,
    In_Cart: 3800,
    Cancelled: 2500,
  },
  {
    name: "Sunday",
    Products_Sold: 3490,
    In_Cart: 4300,
    Cancelled: 2100,
  },
];

const lines = [
  { dataKey: "Products_Sold", stroke: "#6E5FDE" },
  { dataKey: "In_Cart", stroke: "#F18701" },
  { dataKey: "Cancelled", stroke: "#F7B900" },
];

function GraphProductStatus() {
  return (
    <Stack
      spacing={3}
      direction={"column"}
      sx={{
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
            Product Activity&nbsp;-&nbsp;
            <Typography
              variant="inherit"
              component={"span"}
              sx={{
                color: `${theme.palette.text.sixty}`,
              }}
            >
              Product Status Graph
            </Typography>
          </Typography>
        </Stack>

        {/*Date time */}
        <Box
          sx={{
            order: 2,
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
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
        {/*TODO: Add Graph Here */}
        {/*Graph */}
        <CustomLineChart data={data} lines={lines} />
      </Box>
    </Stack>
  );
}

export default GraphProductStatus;
