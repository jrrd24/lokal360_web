import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import DataGridVouchers from "./DataGridVouchers";
import theme from "../../../../Theme";

function MyVouchers() {
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
          <Typography variant="sectionTitle">My Vouchers</Typography>

          {/*TODO: Add onClick for Button */}
        </Box>
        <Typography variant="seeAll" sx={{ textAlign: "left" }}>
          To search for a Voucher, Click <b>Filters</b>, then{" "}
          <b>Select a Column</b>, then type what you are looking for in{" "}
          <b>Value</b>
        </Typography>

        <DataGridVouchers />
      </Stack>
    </Box>
  );
}

export default MyVouchers;
