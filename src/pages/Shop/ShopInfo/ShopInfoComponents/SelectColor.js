import React from "react";
import { Box, Stack, Typography } from "@mui/material";

function SelectColor() {
  return (
    <Box>
      {/*Section Name */}
      <Stack
        direction={"row"}
        sx={{ alignItems: "baseline", justifyContent: "space-between" }}
      >
        <Typography variant="sectionTitleSmall">Select Color</Typography>
      </Stack>
    </Box>
  );
}

export default SelectColor;
