import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import styles from "../../../../css/Styles.module.css";
import CustomLink from "../../../../components/CustomLink";

function ActiveLokalAds() {
  return (
    <Stack spacing={2} direction={"column"} sx={{ ...classes.main }}>
      {/*Section Name */}
      <Stack direction={"row"} sx={{ ...classes.sectionName }}>
        <Typography variant="sectionTitle">Active Lokal Ads</Typography>

        <Box className={`${styles.grow}`}>
          <CustomLink to="/shop/lokal_ads">{"See All"}</CustomLink>
        </Box>
      </Stack>

      {/*TODO: Add lokal ads here */}
      <Box
        className="scrollable-content custom-scrollbar"
        sx={{ ...classes.adsContainer }}
      >
        <Box sx={{ height: 145, width: 330, backgroundColor: "#ffbb03" }} />
        <Box sx={{ height: 145, width: 330, backgroundColor: "#ffd14d" }} />
        <Box sx={{ height: 145, width: 330, backgroundColor: "#6ef" }} />
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

  adsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    flexWrap: "wrap",

    maxWidth: "100%",
    height: 171,
    overflow: "auto",
  },
};
export default ActiveLokalAds;
