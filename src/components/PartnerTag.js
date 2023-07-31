import { Box, Typography } from "@mui/material";
import React from "react";

function PartnerTag() {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: 10,
        height: 35,
        color: "#6E5FDE",
        borderColor: "#6E5FDE",
        border: 1,
        borderRadius: 5,
        px: 2,
      }}
    >
      <Typography variant="caption" sx={{ fontWeight: "500", fontSize: 14 }}>
        <Typography
          variant="h4"
          component={"span"}
          sx={{ fontWeight: "bold", fontSize: 24, pr: 0.5 }}
        >
          360
        </Typography>
        Partner
      </Typography>
    </Box>
  );
}

export default PartnerTag;
