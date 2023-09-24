// TODO: Add Shop Pin using google maps api

import React from "react";
import { Stack, Typography } from "@mui/material";
import { ReadOnlyCustomInput } from "../../../../components/FormComponents/CustomInput";

function ShopAddress({
  addressLine1,
  addressLine2,
  barangay,
  municipality,
  region,
  postalCode,
  province,
}) {
  return (
    <Stack spacing={3} width={"100%"}>
      {/*Section Name */}
      <Stack
        direction={"row"}
        sx={{ alignItems: "baseline", justifyContent: "space-between" }}
      >
        <Typography variant="sectionTitleSmall">Shop Address</Typography>
      </Stack>

      {/*TextBoxes */}
      <Stack spacing={3}>
        {/*Address Line 1*/}
        <ReadOnlyCustomInput
          name="addressLine1"
          label="Address Line 1"
          defaultValue={addressLine1}
          width="100%"
        />

        {/*Address Line 2*/}
        <ReadOnlyCustomInput
          name="addressLine2"
          label="Address Line 2"
          defaultValue={addressLine2}
          width="100%"
        />

        {/*barangay / municipality */}
        <Stack direction={"row"} spacing={3}>
          {/*region*/}
          <ReadOnlyCustomInput
            name="region"
            label="Region"
            defaultValue={region}
            width="48%"
          />

          {/*province*/}
          <ReadOnlyCustomInput
            name="province"
            label="Province"
            defaultValue={province}
            width="48%"
          />
        </Stack>

        {/*region / postal code */}
        <Stack direction={"row"} spacing={3}>
          {/*municipality*/}
          <ReadOnlyCustomInput
            name="municipality"
            label="Municipality"
            defaultValue={municipality}
            width="48%"
          />

          {/*barangay*/}
          <ReadOnlyCustomInput
            name="barangay"
            label="Barangay"
            defaultValue={barangay}
            width="48%"
          />
        </Stack>
        {/*postal code*/}
        <ReadOnlyCustomInput
          name="postalCode"
          label="Postal Code"
          defaultValue={postalCode}
          width="48%"
        />
      </Stack>
    </Stack>
  );
}

export default ShopAddress;
