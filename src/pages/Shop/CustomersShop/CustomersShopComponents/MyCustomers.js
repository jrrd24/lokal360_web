import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import DataGridCustomers from "./DataGridCustomers";
function MyCustomers() {
  return (
    <Box
      sx={{
        maxWidth: "750px",
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
          <Typography variant="sectionTitle">My Customers</Typography>

          {/*TODO: Add onClick for Button */}
        </Box>
        <Typography variant="seeAll" sx={{ textAlign: "left" }}>
          To search for a Customer, click the menu beside "Name" then select
          filter and type Customer Name in Value
        </Typography>

        <DataGridCustomers />
      </Stack>
    </Box>
  );
}

export default MyCustomers;
