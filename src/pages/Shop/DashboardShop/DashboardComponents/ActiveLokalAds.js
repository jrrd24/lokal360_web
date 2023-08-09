import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import styles from "../../../../css/Styles.module.css";
import CustomLink from "../../../../components/CustomLink";

function ActiveLokalAds() {
  return (
    <Stack
      spacing={2}
      direction={"column"}
      sx={{
        "@media (max-width: 1516px)": {
          justifyContent: "center",
          maxWidth: "100%",
        },
      }}
    >
      {/*Section Name */}
      <Stack
        direction={"row"}
        sx={{ alignItems: "baseline", justifyContent: "space-between" }}
      >
        <Typography variant="sectionTitle">Active Lokal Ads</Typography>
        <Box className={`${styles.grow}`}>
          <CustomLink to="/shop/lokal_ads">{"See All"}</CustomLink>
        </Box>
      </Stack>

      {/*TODO: Add lokal ads here */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          flexWrap: "wrap",

          minWidth: "00px",
          height: "155px",
          overflow: "auto",
        }}
      >
        <Box sx={{ height: 145, width: 330, backgroundColor: "#ffbb03" }} />
        <Box sx={{ height: 145, width: 330, backgroundColor: "#ffd14d" }} />
        <Box sx={{ height: 145, width: 330, backgroundColor: "#6ef" }} />
      </Box>
    </Stack>
  );
}

export default ActiveLokalAds;
