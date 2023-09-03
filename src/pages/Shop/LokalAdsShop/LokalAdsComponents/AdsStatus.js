import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import theme from "../../../../Theme";
import AdStatusContainer from "../../../../components/ShopOnly/AdStatusContainer";

function AdsStatus() {
  return (
    <Stack spacing={3} sx={{ width: "100%" }}>
      {/*Section Name */}
      <Box
        direction={"row"}
        sx={{
          ...theme.components.box.sectionName,
          "@media (max-width: 415px)": {
            gap: "6px",
          },
        }}
      >
        <Typography variant="sectionTitle">Lokal Ads Status </Typography>
      </Box>
      {/*Main */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          flexWrap: "wrap",
          "@media (max-width: 600px)": {
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
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

export default AdsStatus;
