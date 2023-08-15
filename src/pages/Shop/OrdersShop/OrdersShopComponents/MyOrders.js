import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import DataGridOrders from "./DataGridOrders";

function MyOrders() {
  return (
    <Box
      sx={{
        maxWidth: "1120px",
        "@media (max-width: 1516px)": {
          justifyContent: "center",
          maxWidth: "100%",
        },
      }}
    >
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
          <Typography variant="sectionTitle">My Orders</Typography>

          {/*TODO: Add onClick for Button */}
        </Box>
        <Typography variant="seeAll" sx={{ textAlign: "left" }}>
          To search for an Order, click the menu beside "Order ID" then select
          filter and type Order ID in Value
        </Typography>

        <DataGridOrders />
      </Stack>
    </Box>
  );
}

export default MyOrders;
