import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import styles from "../../../../css/Styles.module.css";
import CustomLink from "../../../../components/CustomLink";

function ActiveVouchers() {
  return (
    <Stack
      spacing={1}
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
        spacing={9}
        direction={"row"}
        sx={{ alignItems: "baseline", justifyItems: "baseline" }}
      >
        <Typography variant="sectionTitle">Active Vouchers</Typography>
        <Box className={`${styles.grow}`}>
          <CustomLink to="/shop/vouchers">{"See All"}</CustomLink>
        </Box>
      </Stack>

      {/*TODO: Add vouchers here */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          flexWrap: "wrap",

          minWidth: "320px",
          maxWidth: "100%",
          height: "150px",
          overflow: "auto",
        }}
      >
        <Box sx={{ height: 145, width: 250, backgroundColor: "#ffbb03" }} />
        <Box sx={{ height: 145, width: 250, backgroundColor: "#ffd14d" }} />
        <Box sx={{ height: 145, width: 250, backgroundColor: "#6ef" }} />
      </Box>
    </Stack>
  );
}

export default ActiveVouchers;
