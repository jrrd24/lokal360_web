import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import DataGridOrders from "./DataGridOrders";

function MyOrders() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2} direction={"column"}>
        {/*Section Name */}
        <Box
          direction={"row"}
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            flexWrap: "wrap",
            alignItems: "baseline",
            justifyContent: "flex-start",
            "@media (max-width: 415px)": {
              gap: "6px",
            },
          }}
        >
          <Typography variant="sectionTitle">Shop Orders</Typography>

          {/*TODO: Add onClick for Button */}
        </Box>
        <Typography variant="seeAll" sx={{ textAlign: "left" }}>
          To search for an Order, Click <b>Filters</b>, then{" "}
          <b>Select a Column</b>, then type what you are looking for in{" "}
          <b>Value</b>
        </Typography>

        <DataGridOrders />
      </Stack>
    </Box>
  );
}

export default MyOrders;
