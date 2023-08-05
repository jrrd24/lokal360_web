import React, { useState } from "react";
import { Box, Typography, Stack, Hidden } from "@mui/material";
import DateTimeComponent from "./DateTimeComponent";
import PartnerTag from "../ShopOnly/PartnerTag";

function PageInfoComponent({ PageName, Subtitle, isPartner }) {
  return (
    <Box sx={{ pb: 5 }}>
      {/*Shop Info */}
      <Box
        sx={{
          textAlign: "start",
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Stack spacing={-1}>
          <Stack spacing={2} direction={"row"} alignContent={"center"}>
            {/*Show Page Name */}
            <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
              {PageName}
            </Typography>
            {/*Show Partner Tag */}
            {isPartner && <PartnerTag />}
          </Stack>
          <Typography variant="subtitle1">{Subtitle}</Typography>
        </Stack>
        <Hidden only={["xs", "sm"]}>
          <DateTimeComponent />
        </Hidden>
      </Box>
    </Box>
  );
}

export default PageInfoComponent;
