//TODO: Add google maps api
import { Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { CustomInput } from "../../../../../components/FormComponents/CustomInput";
import {
  barangays,
  districts,
  municipalities,
  provinces,
  regions,
} from "../../../../../utils/MapSelectMenuItems";

function ShopAddressD({
  control,
  setValue,
  sx,
  addressLine1,
  addressLine2,
  barangay,
  municipality,
  region,
  postalCode,
  province,
}) {
  const [selectedRegion, setSelectedRegion] = useState(region || "");
  const [selectedProvince, setSelectedProvince] = useState(province || "");
  const [selectedMunicipality, setSelectedMunicipality] = useState(
    municipality || ""
  );
  const [selectedBarangay, setSelectedBarangay] = useState(barangay || "");

  const [filteredProvince, setFilteredProvince] = useState([]);
  const [filteredMunicipality, setFilteredMunicipality] = useState([]);
  const [filteredBarangay, setFilteredBarangay] = useState([]);

  // Keep track of whether the component has loaded
  const [componentLoaded, setComponentLoaded] = useState(false);

  //For filtered Provinces
  useEffect(() => {
    const selectedRegionCode = regions.find(
      (region) => region.label === selectedRegion
    )?.code;

    let ProvinceData = [];
    if (selectedRegionCode === "130000000") {
      ProvinceData = districts.filter(
        (province) => province.regionCode === selectedRegionCode
      );
    } else {
      ProvinceData = provinces.filter(
        (province) => province.regionCode === selectedRegionCode
      );
    }

    // Check if the component has loaded before clearing the fields
    if (componentLoaded) {
      setSelectedProvince("");
      setSelectedMunicipality("");
      setSelectedBarangay("");

      setValue("addressProvince", "");
      setValue("addressMunicipality", "");
      setValue("addressBarangay", "");
    } else {
      // Set the component as loaded after the initial render
      setComponentLoaded(true);
    }

    setFilteredProvince(ProvinceData);
  }, [selectedRegion]);

  //For filtered Municipalities
  useEffect(() => {
    const selectedProvinceCode =
      provinces.find((province) => province.label === selectedProvince)
        ?.provinceCode ||
      districts.find((district) => district.label === selectedProvince)
        ?.districtCode;

    const MunicipalityData = municipalities.filter(
      (municipality) =>
        municipality.provinceCode === selectedProvinceCode ||
        municipality.districtCode === selectedProvinceCode
    );

    if (componentLoaded) {
      setSelectedMunicipality("");
      setSelectedBarangay("");

      setValue("addressMunicipality", "");
      setValue("addressBarangay", "");
    } else {
      setComponentLoaded(true);
    }

    setFilteredMunicipality(MunicipalityData);
  }, [selectedProvince, selectedRegion]);

  //For filtered Barangays
  useEffect(() => {
    const selectedMunicipalityCode = municipalities.find(
      (municipality) => municipality.label === selectedMunicipality
    )?.municipalityCode;

    const BarangayData = barangays.filter(
      (barangay) =>
        barangay.municipalityCode === selectedMunicipalityCode ||
        barangay.cityCode === selectedMunicipalityCode
    );

    if (componentLoaded) {
      setSelectedBarangay("");

      setValue("addressBarangay", "");
    } else {
      setComponentLoaded(true);
    }

    setFilteredBarangay(BarangayData);
  }, [selectedMunicipality]);

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
            required: "Address Line 1 Is Required",
            maxLength: {
              value: 200,
              message: "Max Length of 200 Characters",
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

        {/*region/province */}
        <Stack direction={"row"} spacing={3}>
          {/*region*/}
          <CustomInput
            control={control}
            name="addressRegion"
            label="Region"
            value={selectedRegion}
            width="48%"
            select
            selectMenuItems={regions}
            setSelectedValue={setSelectedRegion}
            rules={{ required: "Region Is Required" }}
          />
          {/*barangay*/}

          {/*province*/}
          <CustomInput
            control={control}
            name="addressProvince"
            label="Province"
            value={selectedProvince}
            width="48%"
            select
            selectMenuItems={filteredProvince}
            setSelectedValue={setSelectedProvince}
            rules={{ required: "Province Is Required" }}
          />
        </Stack>

        {/*municipality/ barangay */}
        <Stack direction={"row"} spacing={3}>
          {/*municipality*/}
          <CustomInput
            control={control}
            name="addressMunicipality"
            label="City/ Municipality"
            value={selectedMunicipality}
            width="48%"
            select
            selectMenuItems={filteredMunicipality}
            setSelectedValue={setSelectedMunicipality}
            rules={{ required: "City/ Municipality Is Required" }}
          />

          <CustomInput
            control={control}
            name="addressBarangay"
            label="Barangay"
            value={selectedBarangay}
            width="48%"
            select
            selectMenuItems={filteredBarangay}
            setSelectedValue={setSelectedBarangay}
            rules={{ required: "Barangay Is Required" }}
          />
        </Stack>
        {/*postal code*/}
        <CustomInput
          control={control}
          name="addressPostalCode"
          label="Postal Code"
          value={postalCode}
          width="48%"
          rules={{
            required: "Postal Code Is Required",
            maxLength: {
              value: 4,
              message: "Postal Code has 4 digits Only (Sample: 3500)",
            },
          }}
        />
      </Stack>
    </Stack>
  );
}

export default ShopAddressD;
