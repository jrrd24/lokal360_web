import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { DisplayColor } from "../../../../components/ColorPicker";
import PartnerTag from "../../../../components/ShopOnly/PartnerTag";

function SelectColor({ color }) {
  return (
    <Stack spacing={3}>
      {/*Section Name */}
      <Stack spacing={2} direction={"row"} sx={{ alignItems: "center" }}>
        <Typography variant="sectionTitleSmall">Select Color</Typography>
        <PartnerTag />
      </Stack>

      <Box sx={{ width: "100%" }}>
        <DisplayColor color={color} />
      </Box>
    </Stack>
  );
}

export default SelectColor;
