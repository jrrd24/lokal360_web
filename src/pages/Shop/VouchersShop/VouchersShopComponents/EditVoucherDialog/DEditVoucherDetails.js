import React from "react";
import { Stack, Typography, Alert, Divider } from "@mui/material";
import {
  ProductToggle,
  ReadOnlyPromoToggle,
} from "../../../../../components/FormComponents/ProductToggle";

import { ReadOnlyCustomInput } from "../../../../../components/FormComponents/CustomInput";
import moment from "moment";

function DEditVoucherDetails({ sx, control, data, productData }) {
  const startDate = moment(data.start_date).format("MM/DD/YYYY");
  const endDate = moment(data.end_date).format("MM/DD/YYYY");
  return (
    <Stack spacing={5} sx={{ sx }}>
      {/*Voucher Details */}
      <Stack spacing={3}>
        {/*Section Name */}
        <Stack spacing={1}>
          <Stack
            sx={{ alignItems: "baseline", justifyContent: "space-between" }}
          >
            <Typography variant="sectionTitleSmall">Voucher Details</Typography>
          </Stack>

          <Alert severity="warning">
            Voucher Start Date, End Date and Promo <b>Cannot be Edited</b>
          </Alert>
        </Stack>

        {/*TextBoxes */}
        <Stack spacing={3}>
          {/*Start and End Date Pickers*/}
          <Stack direction={"row"} spacing={3} sx={{ minWidth: "100%" }}>
            {/*Start Date */}
            <ReadOnlyCustomInput
              name="startDate"
              label="Start Date"
              defaultValue={startDate}
              width={"48%"}
            />

            {/*End Date */}
            <ReadOnlyCustomInput
              name="endDate"
              label="End Date"
              defaultValue={endDate}
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
          <ReadOnlyPromoToggle data={data} value={data.promoID} />
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
            Click the Toggle to <b>Remove</b> this Voucher from a Product
          </Alert>
        </Stack>

        {/*Product Containers (MAP) */}
        {/*TODO: Fix This when connected to backend */}

        <Stack spacing={3}>
          <ProductToggle
            name="inVoucher"
            control={control}
            label=""
            data={productData.inVoucher}
            targetField={"voucherID"}
            targetID={data.voucherID}
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
              Apply To Product
            </Typography>
          </Stack>

          <Alert severity="info">
            Click the Toggle to <b>Apply</b> this Voucher to a Product
          </Alert>
        </Stack>

        {/*Product Containers (MAP) */}
        {/*TODO: Fix This when connected to backend */}

        <Stack spacing={3}>
          <ProductToggle
            name="notInVoucher"
            control={control}
            label=""
            data={productData.notInVoucher}
            targetField={"voucherID"}
            targetID={data.voucherID}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default DEditVoucherDetails;
