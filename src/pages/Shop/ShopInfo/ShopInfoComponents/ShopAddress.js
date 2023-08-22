// TODO: Add Shop Address using google maps api

import React from "react";
import { Box, Stack, Typography } from "@mui/material";

function ShopAddress() {
  return (
    <Box>
      {/*Section Name */}
      <Stack
        direction={"row"}
        sx={{ alignItems: "baseline", justifyContent: "space-between" }}
      >
        <Typography variant="sectionTitleSmall">Shop Address</Typography>
      </Stack>
    </Box>
  );
}

export default ShopAddress;
