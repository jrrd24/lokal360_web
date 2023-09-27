import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import styles from "../../../../css/Styles.module.css";
import CustomLink from "../../../../components/CustomLink";
import VoucherContainer from "../../../../components/ShopOnly/VoucherContainer";
import MapData from "../../../../utils/MapData";
import voucherData from "../../../../data/voucherData";

function ActiveVouchers() {
  return (
    <Stack spacing={1} direction={"column"} sx={{ ...classes.main }}>
      {/*Section Name */}
      <Stack direction={"row"} sx={{ ...classes.sectionName }}>
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
          idName={"voucherID"}
          horizontal
          height={180}
          condition={(voucher) => voucher.is_active === true}
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

  sectionName: {
    alignItems: "baseline",
    justifyContent: "space-between",
  },
};
export default ActiveVouchers;
