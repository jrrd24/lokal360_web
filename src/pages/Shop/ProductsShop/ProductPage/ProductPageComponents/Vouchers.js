import React from "react";
import { Stack, Box, Typography, Alert } from "@mui/material";
import theme from "../../../../../Theme";
import MapData from "../../../../../utils/MapData";
import VoucherContainer from "../../../../../components/ShopOnly/VoucherContainer";
import { BASE_URL } from "../../../../../api/Api";

function Vouchers({ voucherData }) {
  const processedVouchers = voucherData.map((voucher) => {
    const startDate = new Date(voucher.Voucher.start_date);
    const endDate = new Date(voucher.Voucher.end_date);
    const currentDate = new Date();

    const isActive = currentDate >= startDate && currentDate <= endDate;

    return {
      shopName: voucher.Voucher.Shop.shop_name,
      logo: `${BASE_URL}/${voucher.Voucher.Shop.logo_img_link}`,
      value: voucher.Voucher.Promo.discount_amount,
      minSpend: voucher.Voucher.Promo.min_spend,
      validUntil: endDate,
      is_active: isActive,
      type: voucher.Voucher.Promo.PromoType.promo_type_name,
    };
  });

  //SORT BY IS ACTIVE
  processedVouchers.sort((a, b) =>
    a.is_active === b.is_active ? 0 : a.is_active ? -1 : 1
  );

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
          inputData={processedVouchers}
          component={VoucherContainer}
          sortByField={"start_date"}
          idName={"voucherID"}
          horizontal
          height={190}
        />
      </Box>
    </Stack>
  );
}

export default Vouchers;
