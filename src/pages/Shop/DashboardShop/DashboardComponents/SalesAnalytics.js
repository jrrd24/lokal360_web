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
          }}
        >
          <CustomLink to="/shop/analytics">{"See All"}</CustomLink>
        </Box>

        {/*Date time */}
        <Box
          sx={{
            order: 2,
            "@media (max-width: 1073px)": {
              order: 3,
            },
          }}
        >
          <DateSelection
            onRangeChange={handleRangeChangeGraph}
            onRangeEndChange={handleRangeEndChangeGraph}
          />
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
        <ProductSalesGraph />
      </Box>
    </Stack>
  );
}

export default SalesAnalytics;
