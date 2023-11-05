import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import styles from "../../../../css/Styles.module.css";
import CustomLink from "../../../../components/CustomLink";
import { useRequestProcessor } from "../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import useAuth from "../../../../hooks/useAuth";
import { LoadingCircle } from "../../../../components/Loading/Loading";
import { BASE_URL } from "../../../../api/Api";
import MapData from "../../../../utils/MapData";
import LokalAdContainer from "../../../../components/ShopOnly/LokalAdContainer";

function ActiveLokalAds() {
  // API CALL GET ALL ACTIVE LOKAL ADS
  const { useCustomQuery } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();
  const { data: adData, isLoading } = useCustomQuery(
    "getActiveShopAds",
    () =>
      axiosPrivate
        .get(`/api/ad/get_active_shop_ads/?shopID=${auth.shopID}`)
        .then((res) => res.data),
    { enabled: true }
  );

  if (isLoading) {
    return <LoadingCircle />;
  }

  const processedAds = adData.map((ad) => {
    return {
      lokalAdsID: ad.lokalAdsID,
      ad_name: ad.ad_name,
      ad_image: `${BASE_URL}/${ad.ad_image}`,
      start_date: ad.start_date,
    };
  });

  return (
    <Stack spacing={1.5} direction={"column"} sx={{ ...classes.main }}>
      {/*Section Name */}
      <Stack direction={"row"} sx={{ ...classes.sectionName }}>
        <Typography variant="sectionTitle">Active Lokal Ads</Typography>

        <Box className={`${styles.grow}`}>
          <CustomLink to="/shop/lokal_ads">{"See All"}</CustomLink>
        </Box>
      </Stack>

      <Box>
        <MapData
          inputData={processedAds}
          component={LokalAdContainer}
          sortByField={"start_date"}
          idName={"lokalAdsID"}
          horizontal
          height={187}
        />
      </Box>
    </Stack>
  );
}

const classes = {
  main: {
    width: "100%",
    "@media (max-width: 1516px)": {
      justifyContent: "center",
    },
  },

  sectionName: { alignItems: "baseline", justifyContent: "space-between" },
};
export default ActiveLokalAds;
