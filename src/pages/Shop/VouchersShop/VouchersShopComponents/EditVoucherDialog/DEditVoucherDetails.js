import React from "react";
import { Stack, Typography, Alert, Divider } from "@mui/material";
import {
  ProductToggleNew,
  PromoToggle,
} from "../../../../../components/FormComponents/ProductToggle";
import productData from "../../../../../data/productData";
import promoData from "../../../../../data/promoData";
import { ReadOnlyCustomInput } from "../../../../../components/FormComponents/CustomInput";

function DEditVoucherDetails({ sx, control, register, setValue, data }) {
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
            <ReadOnlyCustomInput
              name="startDate"
              label="Start Date"
              defaultValue={data.start_date}
              width={"48%"}
            />

            {/*End Date */}
            <ReadOnlyCustomInput
              name="endDate"
              label="End Date"
              defaultValue={data.end_date}
              width={"48%"}
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
            <Typography variant="sectionTitleSmall">Applied Promo</Typography>
          </Stack>
        </Stack>

        {/*Product Containers (MAP) */}
        {/*TODO: Add Promo Containers Here */}
        <Stack spacing={3}>
          {" "}
          <PromoToggle
            name="voucherPromo"
            control={control}
            label=""
            data={promoData}
            targetField={`promoID`}
            value={data.promoID}
            condition={(promo) => promo.promoID === data.promoID}
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
        {/*TODO: Fix This when connected to backend */}

        <Stack spacing={3}>
          <ProductToggleNew
            name="voucherProducts.applied"
            control={control}
            label=""
            data={productData}
            targetField={`voucherID`}
            condition={(product) => product.voucherID === data.voucherID}
          />
        </Stack>
      </Stack>

      {/*Apply To Products */}
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
            Click the Toggle to <b>Apply</b> this Voucher to a Product
          </Alert>
        </Stack>

        {/*Product Containers (MAP) */}
        {/*TODO: Fix This when connected to backend */}

        <Stack spacing={3}>
          <ProductToggleNew
            name="voucherProducts.applyTo"
            control={control}
            label=""
            data={productData}
            targetField={`voucherID`}
            targetID={data.voucherID}
            condition={(product) => product.voucherID !== data.voucherID}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default DEditVoucherDetails;
