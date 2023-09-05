import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import styles from "../../../../css/Styles.module.css";
import CustomLink from "../../../../components/CustomLink";
import VoucherContainer from "../../../../components/ShopOnly/VoucherContainer";
import MapData from "../../../../utils/MapData";
import voucherData from "../../../../data/voucherData";

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
      <Box>
        <MapData
          inputData={voucherData}
          component={VoucherContainer}
          sortByField={"start_date"}
          showUpTo={3}
          idName={"voucherID"}
          horizontal
        />
      </Box>
    </Stack>
  );
}

export default ActiveVouchers;
