import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import PartnerTag from "../../../../../components/ShopOnly/PartnerTag";
import {
  DisplayColor,
  SimpleColorPicker,
} from "../../../../../components/ColorPicker";

function SelectColorD({ control, color, isPartner }) {
  return (
    <Stack spacing={3}>
      {/*Section Name */}
      <Stack spacing={2} direction={"row"} sx={{ alignItems: "center" }}>
        <Typography variant="sectionTitleSmall">Select Color</Typography>
        <PartnerTag />
      </Stack>
      <Typography variant="seeAll">
        {isPartner ? (
          <Typography variant="inherit">
            Use the <b>Slider Tool</b> to find a Color. <b>Click the Box</b> to
            Copy the Color Hex, then <b>Paste it to the Text Box</b> Below{" "}
          </Typography>
        ) : (
          <Typography variant="inherit">
            You must be a <b>360 Partner</b> to Access this Feature
          </Typography>
        )}
      </Typography>

      <Box sx={{ width: "100%" }}>
        {isPartner ? (
          <SimpleColorPicker control={control} color={color} />
        ) : (
          <DisplayColor color={color} />
        )}
      </Box>
    </Stack>
  );
}

export default SelectColorD;
