import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import DataGridCustomers from "./DataGridCustomers";
import theme from "../../../../Theme";

function MyCustomers() {
  return (
    <Box sx={{ ...classes.main }}>
      <Stack spacing={2} direction={"column"}>
        {/*Section Name */}
        <Box direction={"row"} sx={{ ...classes.sectionName }}>
          <Typography variant="sectionTitle">My Customers</Typography>

          {/*TODO: Add onClick for Button */}
        </Box>
        <DataGridCustomers />
      </Stack>
    </Box>
  );
}

const classes = {
  main: {
    maxWidth: "750px",
    "@media (max-width: 1516px)": {
      justifyContent: "center",
      maxWidth: "100%",
    },
  },

  sectionName: {
    ...theme.components.box.sectionName,
    "@media (max-width: 415px)": {
      gap: "6px",
    },
  },
};
export default MyCustomers;
