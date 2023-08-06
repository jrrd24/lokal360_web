import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import styles from "../../../../css/Styles.module.css";
import theme from "../../../../Theme";
import DateSelection from "../../../../components/DateSelection";
import ProductSalesGraph from "../Graphs/ProductSalesGraph";
import CustomLink from "../../../../components/CustomLink";
import { GetDate } from "../../../../components/Utils/GetDate";

function SalesAnalytics() {
  const [RangeGraph, setRangeGraph] = useState(<GetDate />);
  const [RangeEndGraph, setRangeEndGraph] = useState("");

  const handleRangeChangeGraph = (range) => {
    setRangeGraph(range);
  };

  const handleRangeEndChangeGraph = (rangeEnd) => {
    setRangeEndGraph(rangeEnd);
  };
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
        }}
      >
        {/*Section Name */}
        <Stack
          spacing={9}
          direction={"row"}
          sx={{ alignItems: "baseline", justifyItems: "baseline" }}
        >
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
          <Box className={`${styles.grow}`} sx={{ minWidth: 70 }}>
            <CustomLink to="/shop/analytics">{"See All"}</CustomLink>
          </Box>
        </Stack>

        {/*Date time */}
        <DateSelection
          onRangeChange={handleRangeChangeGraph}
          onRangeEndChange={handleRangeEndChangeGraph}
        />
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
        <ProductSalesGraph />
      </Box>
    </Stack>
  );
}

export default SalesAnalytics;
