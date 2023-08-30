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
        width: "100%",
        "@media (max-width: 1516px)": {
          justifyContent: "center",
        },
      }}
    >
      {/*Section Name */}
      <Stack
        direction={"row"}
        sx={{ alignItems: "baseline", justifyContent: "space-between" }}
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
          justifyContent: "flex-start",
          maxWidth: "100%",
          height: "155px",
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
