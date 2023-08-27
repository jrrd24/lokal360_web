import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import DisplayColor from "../../../../components/DisplayColor";
import PartnerTag from "../../../../components/ShopOnly/PartnerTag";

function SelectColor() {
  return (
    <Stack spacing={3}>
      {/*Section Name */}
      <Stack spacing={2} direction={"row"} sx={{ alignItems: "center" }}>
        <Typography variant="sectionTitleSmall">Select Color</Typography>
        <PartnerTag />
      </Stack>

      <Box sx={{ width: "100%" }}>
        <DisplayColor color={null} />
      </Box>
    </Stack>
  );
}

export default SelectColor;
