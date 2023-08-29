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

function BasicShopInfo({
  shopName,
  category,
  type,
  description,
  deliver,
  pickup,
}) {
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
          defaultValue={shopName}
          width="100%"
        />

        {/*Product Category and Shop Type */}
        <Stack direction={"row"} spacing={3}>
          {/*Product Category*/}
          <DisplayInfo
            name="productsCategory"
            label="Products Category"
            defaultValue={category}
            width="48%"
          />

          {/*Shop Type */}

          <DisplayInfo
            name="shopType"
            label="Shop Type"
            defaultValue={type}
            width="48%"
          />
        </Stack>

        {/*Shop Description */}
        <DisplayInfo
          name="shopDescription"
          label="Shop Description"
          defaultValue={description}
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
            control={<Switch checked={deliver || false} />}
            label="Delivery"
            name="delivery"
          />
          <FormControlLabel
            disabled
            control={<Switch checked={pickup || false} />}
            label="Pick-Up"
            name="pickUp"
          />
        </FormGroup>
      </Stack>
    </Stack>
  );
}

export default BasicShopInfo;
