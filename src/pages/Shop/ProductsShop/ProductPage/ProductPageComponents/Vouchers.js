import React from "react";
import { Stack, Box, Typography, Alert } from "@mui/material";
import theme from "../../../../../Theme";
import MapData from "../../../../../utils/MapData";
import VoucherContainer from "../../../../../components/ShopOnly/VoucherContainer";
import voucherData from "../../../../../data/voucherData";

function Vouchers({ productID }) {
  return (
    <Stack spacing={3} width={"100%"}>
      {/*Section Name */}
      <Stack>
        <Box sx={{ ...theme.components.box.sectionName }}>
          <Typography variant="sectionTitle">Applied Vouchers</Typography>
        </Box>
        <Alert severity="info">
          To Add or Edit Applied Vouchers, Go to the <b>Vouchers Tab</b>
        </Alert>
      </Stack>

      <Box>
        <MapData
          inputData={voucherData}
          component={VoucherContainer}
          sortByField={"start_date"}
          idName={"voucherID"}
          horizontal
          height={170}
          condition={(voucher) =>
            voucher.voucherAppliedProduct.some(
              (product) => product.productID === productID
            )
          }
        />
      </Box>
    </Stack>
  );
}

export default Vouchers;
