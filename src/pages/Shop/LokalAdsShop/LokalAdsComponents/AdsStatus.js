import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import theme from "../../../../Theme";
import AdStatusContainer from "../../../../components/ShopOnly/AdStatusContainer";

function AdsStatus() {
  return (
    <Stack spacing={3} sx={{ width: "100%" }}>
      {/*Section Name */}
      <Box direction={"row"} sx={{ ...classes.sectionName }}>
        <Typography variant="sectionTitle">Lokal Ads Status </Typography>
      </Box>
      {/*Main */}
      <Box sx={{ ...classes.mainContent }}>
        <AdStatusContainer
          color={`${theme.palette.status.delivery}`}
          count={2}
          status={"Active"}
        />
        <AdStatusContainer
          color={`${theme.palette.status.preparing}`}
          count={1}
          status={"Pending Approval"}
        />
        <AdStatusContainer
          color={`${theme.palette.status.complete}`}
          count={3}
          status={"Approved"}
        />
        <AdStatusContainer
          color={`${theme.palette.status.cancel}`}
          count={1}
          status={"Rejected"}
        />
        <AdStatusContainer
          color={`${theme.palette.status.refund}`}
          count={7}
          status={"Expired"}
        />
      </Box>
    </Stack>
  );
}

const classes = {
  sectionName: {
    ...theme.components.box.sectionName,
    "@media (max-width: 415px)": {
      gap: "6px",
    },
  },

  mainContent: {
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    flexWrap: "wrap",
    "@media (max-width: 785px)": {
      px: 2,
      height: "120px",
      overflow: "auto",
      flexDirection: "column",
      width: "100%",
    },
  },
};
export default AdsStatus;
