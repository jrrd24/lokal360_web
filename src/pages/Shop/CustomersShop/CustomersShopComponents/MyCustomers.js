import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import DataGridCustomers from "./DataGridCustomers";
import theme from "../../../../Theme";

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
            ...theme.components.box.sectionName,
            "@media (max-width: 415px)": {
              gap: "6px",
            },
          }}
        >
          <Typography variant="sectionTitle">My Customers</Typography>

          {/*TODO: Add onClick for Button */}
        </Box>
        <DataGridCustomers />
      </Stack>
    </Box>
  );
}

export default MyCustomers;
