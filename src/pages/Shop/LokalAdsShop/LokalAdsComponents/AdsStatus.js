import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import theme from "../../../../Theme";
import AdStatusContainer from "../../../../components/ShopOnly/AdStatusContainer";
import { LoadingCircle } from "../../../../components/Loading/Loading";
import { useRequestProcessor } from "../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import useAuth from "../../../../hooks/useAuth";

function AdsStatus() {
  // API CALL GET ALL SHOP VOUCHERS
  const { useCustomQuery } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();
  const { data: statusCount, isLoading } = useCustomQuery(
    "getAdStatusCount",
    () =>
      axiosPrivate
        .get(`/api/ad/status_count/?shopID=${auth.shopID}`)
        .then((res) => res.data),
    { enabled: true }
  );

  if (isLoading) {
    return <LoadingCircle />;
  }

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
          count={statusCount.active}
          status={"Active"}
        />
        <AdStatusContainer
          color={`${theme.palette.status.complete}`}
          count={statusCount.approved}
          status={"Approved"}
        />
        <AdStatusContainer
          color={`${theme.palette.status.preparing}`}
          count={statusCount.pendingApproval}
          status={"Pending Approval"}
        />
        <AdStatusContainer
          color={`${theme.palette.status.cancel}`}
          count={statusCount.rejected}
          status={"Rejected"}
        />
        <AdStatusContainer
          color={`${theme.palette.status.refund}`}
          count={statusCount.expired}
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
    justifyContent: "space-between",
    flexWrap: "wrap",
    "@media (max-width: 1200px)": {
      px: 2,
      height: "130px",
      overflow: "auto",
      flexDirection: "column",
      width: "100%",
    },
  },
};
export default AdsStatus;
