//TODO: Add google maps api
import { Stack, Typography } from "@mui/material";
import React from "react";

function shopAddressD({ control, sx }) {
  return (
    <Stack spacing={3} sx={{ sx }}>
      {/*Section Name */}
      <Stack
        direction={"row"}
        sx={{ alignItems: "baseline", justifyContent: "space-between" }}
      >
        <Typography variant="sectionTitleSmall">Shop Address</Typography>
      </Stack>
    </Stack>
  );
}

export default shopAddressD;
