import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import CustomColorPicker from "../../../../components/CustomColorPicker";
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
        <CustomColorPicker displayOnly />
      </Box>
    </Stack>
  );
}

export default SelectColor;
