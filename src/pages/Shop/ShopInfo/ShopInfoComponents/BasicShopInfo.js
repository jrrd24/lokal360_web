import React from "react";
import {
  Stack,
  Typography,
  Switch,
  FormGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import DisplayInfo from "../../../../components/TextField/DisplayInfo";

function BasicShopInfo() {
  return (
    <Stack spacing={3}>
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
        <DisplayInfo
          name="shopName"
          label="Shop Name"
          defaultValue={"Bamboo Land"}
          width="100%"
        />

        {/*Product Category and Shop Type */}
        <Stack direction={"row"} spacing={3}>
          {/*Product Category*/}
          <DisplayInfo
            name="productsCategory"
            label="Products Category"
            defaultValue={"Bamboo"}
            width="48%"
          />

          {/*Shop Type */}

          <DisplayInfo
            name="shopType"
            label="Shop Type"
            defaultValue={"Bamboo Crafts"}
            width="48%"
          />
        </Stack>

        {/*Shop Description */}
        <DisplayInfo
          name="shopDescription"
          label="Shop Description"
          defaultValue={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
          }
          width="100%"
          multiline
        />

        <FormGroup sx={{ pl: 2 }}>
          <FormLabel
            component="legend"
            sx={{ fontSize: "18px", fontWeight: 600, textAlign: "left" }}
          >
            Shipping Options
          </FormLabel>
          <FormControlLabel
            disabled
            control={<Switch />}
            label="Delivery"
            name="delivery"
          />
          <FormControlLabel
            disabled
            control={<Switch defaultChecked />}
            label="Pick-Up"
            name="pickUp"
          />
        </FormGroup>
      </Stack>
    </Stack>
  );
}

export default BasicShopInfo;
