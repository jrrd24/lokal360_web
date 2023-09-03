import React from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import { Box } from "@mui/material";
import theme from "../../../Theme";
import AdsStatus from "./LokalAdsComponents/AdsStatus";
import MyLokalAds from "./LokalAdsComponents/MyLokalAds";

function LokalAdsShopContent() {
  return (
    <Box sx={{ ...theme.components.box.pageContainer }}>
      <PageInfoComponent
        PageName={"Lokal Ads"}
        Subtitle={"Manage your Sidewide and Shop Page Advertisments"}
        isPartner={true}
      />
      {/*Main Content*/}
      <Box sx={{ ...theme.components.box.mainContent }}>
        {/*Ads Status / My Lokal Ads*/}
        <Box
          sx={{
            ...theme.components.box.contentColumn,
            order: 1,
            "@media (max-width: 1516px)": {
              order: 2,
              alignItems: "center",
              justifyContent: "center",
              minWidth: "100%",
            },
          }}
        >
          {/*Ads Status*/}
          <Box
            sx={{
              ...theme.components.box.sectionContainer,
              minWidth: "1120px",
              order: 1,
              "@media (max-width: 1516px)": {
                order: 1,
                alignItems: "center",
                justifyContent: "center",
                minWidth: "100%",
              },
            }}
          >
            <AdsStatus />
          </Box>

          {/*My Lokal Ads*/}
          <Box
            sx={{
              ...theme.components.box.sectionContainer,
              minWidth: "1120px",
              order: 2,
              "@media (max-width: 1516px)": {
                order: 2,
                alignItems: "center",
                justifyContent: "center",
                minWidth: "100%",
              },
            }}
          >
            <MyLokalAds />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LokalAdsShopContent;
