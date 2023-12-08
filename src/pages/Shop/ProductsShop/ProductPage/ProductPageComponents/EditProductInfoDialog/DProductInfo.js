import React from "react";
import { FormGroup, Stack, Typography } from "@mui/material";
import { CustomInput } from "../../../../../../components/FormComponents/CustomInput";
import {
  ProductsCategory,
  ShopCategory,
} from "../../../../../../utils/MapSelectMenuItems";
import CustomSwitch from "../../../../../../components/FormComponents/CustomSwitch";
function DProductInfo({
  sx,
  control,
  name,
  category,
  selectedShopCategory,
  description,
  isRawMat,
}) {
  return (
    <Stack spacing={3} sx={{ sx }}>
      {/*Section Name */}
      <Stack
        direction={"row"}
        sx={{ alignItems: "baseline", justifyContent: "space-between" }}
      >
        <Typography variant="sectionTitleSmall">Product Details</Typography>
      </Stack>

      {/*TextBoxes */}
      <Stack spacing={3}>
        {/*Product Name */}
        <CustomInput
          control={control}
          name="productName"
          label="Product Name"
          value={name}
          width="100%"
          rules={{
            required: "Product Name Is Required",
            maxLength: {
              value: 60,
              message: "Max Length of 60 Characters",
            },
          }}
        />

        {/*Category and Shop Category */}
        <Stack direction={"row"} spacing={3} sx={{ minWidth: "100%" }}>
          {/*Product Category*/}
          <CustomInput
            control={control}
            name="category"
            label="Category"
            value={category}
            width="48%"
            select
            selectMenuItems={ProductsCategory()}
            rules={{
              required: "Category Is Required",
            }}
          />

          {/*Shop Category*/}
          <CustomInput
            control={control}
            name="shopCategory"
            label="Shop Category"
            value={selectedShopCategory}
            width="48%"
            select
            selectMenuItems={ShopCategory()}
          />
        </Stack>

        {/*Product Description */}
        <CustomInput
          control={control}
          name="productDescription"
          label="Product Description"
          value={description}
          width="100%"
          multiline
          rules={{
            required: "Product Description Is Required",
            maxLength: {
              value: 500,
              message: "Max Length of 500 Characters",
            },
          }}
        />

        <FormGroup
          sx={{
            pl: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {" "}
          <CustomSwitch
            name="isRawMaterial"
            control={control}
            label="Is Raw Material"
            defaultValue={isRawMat}
          />
        </FormGroup>
      </Stack>
    </Stack>
  );
}

export default DProductInfo;
