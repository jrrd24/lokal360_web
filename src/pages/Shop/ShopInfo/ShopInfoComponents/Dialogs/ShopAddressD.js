//TODO: Add google maps api
import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { CustomInput } from "../../../../../components/FormComponents/CustomInput";
import {
  municipalities,
  provinces,
  regions,
} from "../../../../../utils/MapSelectMenuItems";

function ShopAddressD({
  control,
  sx,
  addressLine1,
  addressLine2,
  barangay,
  municipality,
  region,
  postalCode,
  province,
}) {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedMunicipality, setSelectedMunicipality] = useState("");

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
        <CustomInput
          control={control}
          name="addressLine1"
          label="Address Line 1"
          value={addressLine1}
          width="100%"
          rules={{
            required: "Shop Name Is Required",
            maxLength: {
              value: 60,
              message: "Max Length of 60 Characters",
            },
          }}
        />

        {/*Address Line 2*/}
        <CustomInput
          control={control}
          name="addressLine2"
          label="Address Line 2"
          value={addressLine2}
          width="100%"
        />

        {/*barangay / municipality */}
        <Stack direction={"row"} spacing={3}>
          {/*region*/}
          <CustomInput
            control={control}
            name="region"
            label="Region"
            value={region}
            width="48%"
            select
            selectMenuItems={regions}
          />
          {/*barangay*/}

          {/*municipality*/}
          <CustomInput
            control={control}
            name="province"
            label="Province"
            value={province}
            width="48%"
            select
            selectMenuItems={provinces}
          />
        </Stack>

        {/*region / postal code */}
        <Stack direction={"row"} spacing={3}>
          {/*municipality*/}
          <CustomInput
            control={control}
            name="municipality"
            label="Municipality"
            value={municipality}
            width="48%"
            select
            selectMenuItems={municipalities}
          />

          <CustomInput
            control={control}
            name="barangay"
            label="Barangay"
            value={barangay}
            width="48%"
          />
        </Stack>
        {/*postal code*/}
        <CustomInput
          control={control}
          name="postalCode"
          label="Postal Code"
          value={postalCode}
          width="48%"
        />
      </Stack>
    </Stack>
  );
}

export default ShopAddressD;
