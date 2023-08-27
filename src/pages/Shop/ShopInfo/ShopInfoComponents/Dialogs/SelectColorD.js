import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import PartnerTag from "../../../../../components/ShopOnly/PartnerTag";
import SimpleColorPicker from "../../../../../components/SimpleColorPicker";

function SelectColorD({ control }) {
  return (
    <Stack spacing={3}>
      {/*Section Name */}
      <Stack spacing={2} direction={"row"} sx={{ alignItems: "center" }}>
        <Typography variant="sectionTitleSmall">Select Color</Typography>
        <PartnerTag />
      </Stack>
      <Typography variant="seeAll">
        Use the <b>Slider Tool</b> to find a Color. <b>Click the Box</b> to Copy
        the Color Hex, then <b>Paste it to the Text Box</b> Below
      </Typography>

      <Box sx={{ width: "100%" }}>
        <SimpleColorPicker control={control} color={null} />
      </Box>
    </Stack>
  );
}

export default SelectColorD;
