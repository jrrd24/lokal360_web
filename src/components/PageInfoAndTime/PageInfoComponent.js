import React from "react";
import { Box, Typography, Stack, Hidden } from "@mui/material";
import DateTimeComponent from "./DateTimeComponent";
import PartnerTag from "../ShopOnly/PartnerTag";

function PageInfoComponent({ PageName, Subtitle, isPartner }) {
  return (
    <Box sx={{ ...classes.mainContainer }}>
      {/*Shop Info */}
      <Box sx={{ ...classes.insideContainer }}>
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

const classes = {
  mainContainer: {
    pb: 5,
    "@media (max-width: 600px)": {
      px: 3,
    },
  },

  insideContainer: {
    textAlign: "start",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
  },
};

export default PageInfoComponent;
