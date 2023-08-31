import React from "react";
import { Box, Stack } from "@mui/material";
import StatisticBox from "../../../../components/StatisticBox";
import theme from "../../../../Theme";

function StatisticsBoxes() {
  return (
    <Box
      sx={{
        maxWidth: "1120px",
        ...theme.components.box.mainContent,
        "@media (max-width: 1516px)": {
          alignItems: "center",
          justifyContent: "center",
          minWidth: "100%",
        },
      }}
    >
      <Stack
        spacing={1}
        direction={"row"}
        sx={{
          "@media (max-width: 1189px)": {
            ...theme.components.box.mainContent,
          },
          "@media (max-width: 913px)": {
            gap: "0px",
            minWidth: "100%",
          },
        }}
      >
        {/*Statistics Box Container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            flexWrap: "wrap",
            order: 1,
            alignItems: "center",

            "@media (max-width: 1189px)": {
              order: 2,
              alignItems: "center",
              justifyContent: "center",
            },
            "@media (max-width: 913px)": {
              px: 2,
              height: "150px",
              overflow: "auto",
              flexDirection: "column",
              width: "100%",
            },
          }}
        >
          <StatisticBox
            name={"Sales"}
            amt={25995}
            prevAmt={21378}
            isMoney={true}
          />
          <StatisticBox name={"Checkouts"} amt={422} prevAmt={390} />
          <StatisticBox name={"In Cart"} amt={265} prevAmt={255} />
          <StatisticBox name={"Cancelled"} amt={17} prevAmt={18} />
          <StatisticBox name={"Page Visitors"} amt={4280} prevAmt={4000} />
          <StatisticBox name={"Followers"} amt={795} prevAmt={721} />
        </Box>
      </Stack>
    </Box>
  );
}

export default StatisticsBoxes;
