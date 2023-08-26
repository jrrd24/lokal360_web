import React, { useState } from "react";
import { Stack, Typography, FormGroup } from "@mui/material";
import CustomInput from "../../../../../components/TextField/CustomInput";
import CustomSwitch from "../../../../../components/CustomSwitch";

//Products Category
const productsCategory = [
  {
    value: "Bamboo",
    label: "Bamboo",
  },
  {
    value: "Cacao",
    label: "Cacao",
  },
  {
    value: "Coconut",
    label: "Coconut",
  },
  {
    value: "Coffee",
    label: "Coffee",
  },
  {
    value: "Fruits and Nuts",
    label: "Fruits and Nuts",
  },
  {
    value: "Local Cuisine",
    label: "Local Cuisine",
  },
  {
    value: "Meat and Fish",
    label: "Meat and Fish",
  },
  {
    value: "Wearables",
    label: "Wearables",
  },
  {
    value: "Homestyle",
    label: "Homestyle",
  },
];

function BasicShopInfoD({ sx, control }) {
  const [shopName] = useState("Bamboo Land");
  const [productCategory] = useState("Bamboo");
  const [shopType] = useState("Bamboo Crafts");
  const [shopDescription] = useState(
    "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
  );

  return (
    <Stack spacing={3} sx={{ sx }}>
      {/*Section Name */}
      <Stack
        direction={"row"}
        sx={{ alignItems: "baseline", justifyContent: "space-between" }}
      >
        <Typography variant="sectionTitleSmall">
          Basic Shop Information
        </Typography>
      </Stack>

      {/*TextBoxes */}
      <Stack spacing={3}>
        {/*Shop Name */}
        <CustomInput
          control={control}
          name="shopName"
          label="Shop Name"
          value={shopName}
          width="100%"
          rules={{
            required: "Shop Name Is Required",
            maxLength: {
              value: 60,
              message: "Max Length of 60 Characters",
            },
          }}
        />

        {/*Product Category and Shop Type */}
        <Stack direction={"row"} spacing={3} sx={{ minWidth: "100%" }}>
          {/*Product Category*/}
          <CustomInput
            control={control}
            name="productsCategory"
            label="Products Category"
            value={productCategory}
            width="48%"
            select
            selectMenuItems={productsCategory}
            rules={{
              required: "Products Category Is Required",
            }}
          />

          {/*Shop Type */}

          <CustomInput
            control={control}
            name="shopType"
            label="Shop Type"
            value={shopType}
            width="48%"
            rules={{
              required: "Shop Type Is Required",
              maxLength: {
                value: 60,
                message: "Max Length of 60 Characters",
              },
            }}
          />
        </Stack>
        {/*Shop Description */}

        <CustomInput
          control={control}
          name="shopDescription"
          label="Shop Description"
          value={shopDescription}
          width="100%"
          multiline
          rules={{
            required: "Shop Description Is Required",
            maxLength: {
              value: 500,
              message: "Max Length of 500 Characters",
            },
          }}
        />

        <FormGroup sx={{ pl: 2 }}>
          <Typography
            component="legend"
            sx={{ fontSize: "18px", fontWeight: 600, textAlign: "left" }}
          >
            Shipping Options
          </Typography>
          <CustomSwitch
            name="delivery"
            control={control}
            label="Delivery"
            defaultValue={false}
          />
          <CustomSwitch
            name="pickUp"
            control={control}
            label="Pick-Up"
            defaultValue={true}
          />
        </FormGroup>
      </Stack>
    </Stack>
  );
}

export default BasicShopInfoD;
