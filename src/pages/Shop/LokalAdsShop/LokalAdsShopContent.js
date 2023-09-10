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
        <Box sx={{ ...classes.leftContainer }}>
          {/*Ads Status*/}
          <Box sx={{ ...classes.contentContainer }}>
            <AdsStatus />
          </Box>

          {/*My Lokal Ads*/}
          <Box sx={{ ...classes.contentContainer }}>
            <MyLokalAds />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const classes = {
  leftContainer: {
    ...theme.components.box.contentColumn,
    "@media (max-width: 1516px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },

  contentContainer: {
    ...theme.components.box.sectionContainer,
    minWidth: "1120px",
    "@media (max-width: 1516px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },
};
export default LokalAdsShopContent;
