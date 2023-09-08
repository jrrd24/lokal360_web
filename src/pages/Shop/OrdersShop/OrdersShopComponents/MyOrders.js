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

        <DataGridOrders />
      </Stack>
    </Box>
  );
}

export default MyOrders;
