import React from "react";
import { Stack, Typography, Alert, Divider } from "@mui/material";
import CustomDatePicker from "../../../../../components/FormComponents/CustomDatePicker";
import {
  ProductToggle,
  PromoToggle,
} from "../../../../../components/FormComponents/ProductToggle";

function DVoucherDetails({
  sx,
  control,
  watch,
  productData,
  promoData,
  handlePromoError,
}) {
  const startDate = watch("startDate");
  const today = new Date();
  const formattedToday = `${today.getFullYear()}-${(today.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;

  return (
    <Stack spacing={5} sx={{ sx }}>
      {/*Voucher Details */}
      <Stack spacing={3}>
        {/*Section Name */}
        <Stack sx={{ alignItems: "baseline", justifyContent: "space-between" }}>
          <Typography variant="sectionTitleSmall">Voucher Details</Typography>
        </Stack>

        {/*TextBoxes */}
        <Stack spacing={3}>
          {/*Start and End Date Pickers*/}
          <Stack direction={"row"} spacing={3} sx={{ minWidth: "100%" }}>
            {/*Start Date */}
            <CustomDatePicker
              control={control}
              name="startDate"
              label="Start Date"
              width={"48%"}
              value={formattedToday}
              disablePastDates
              rules={{ required: "Start Date Is Required" }}
            />

            {/*End Date */}
            <CustomDatePicker
              control={control}
              name="endDate"
              label="End Date"
              width={"48%"}
              value={formattedToday}
              disablePastDates
              rules={{ required: "End Date Is Required" }}
              startDateValue={startDate}
            />
          </Stack>
        </Stack>
      </Stack>

      <Divider />

      {/*Select Promo */}
      <Stack spacing={3}>
        {/*Section Name */}
        <Stack spacing={1}>
          <Stack
            sx={{ alignItems: "baseline", justifyContent: "space-between" }}
          >
            <Typography variant="sectionTitleSmall">Select Promo</Typography>
          </Stack>
          <Alert severity="info">
            Only <b>One Promo</b> Can be Applied
            <br />
            To Create a Promo, Go to the <b>Promo Page</b>, then click the{" "}
            <b>New Promo Button</b>
          </Alert>
        </Stack>

        {/*Product Containers (MAP) */}
        {/*TODO: Add Promo Containers Here */}
        <Stack spacing={3}>
          {" "}
          <PromoToggle
            name="voucherPromo"
            control={control}
            data={promoData}
            targetField={`promoID`}
            handlePromoError={handlePromoError}
          />
        </Stack>
      </Stack>

      <Divider />

      {/*Products Applied To */}
      <Stack spacing={3}>
        {/*Section Name */}
        <Stack spacing={1}>
          <Stack
            sx={{ alignItems: "baseline", justifyContent: "space-between" }}
          >
            <Typography variant="sectionTitleSmall">
              Products Applied To
            </Typography>
          </Stack>

          <Alert severity="info">
            Click the Toggle to <b>Apply</b> or <b>Remove</b> this Voucher from
            a Product
          </Alert>
        </Stack>

        {/*Product Containers (MAP) */}
        {/*TODO: Add Product Containers Here */}
        <Stack spacing={3}>
          <ProductToggle
            name="noVoucher"
            control={control}
            label=""
            data={productData}
            setNull
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default DVoucherDetails;
