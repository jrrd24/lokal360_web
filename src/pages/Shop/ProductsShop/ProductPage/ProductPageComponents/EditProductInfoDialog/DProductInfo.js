import React from "react";
import { Stack, Typography } from "@mui/material";
import { CustomInput } from "../../../../../../components/FormComponents/CustomInput";
import {
  ProductsCategory,
  shopCategory,
} from "../../../../../../utils/MapSelectMenuItems";
function DProductInfo({
  sx,
  control,
  name,
  category,
  selectedShopCategory,
  description,
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
            selectMenuItems={shopCategory}
            rules={{
              required: "Shop Category Is Required",
            }}
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
      </Stack>
    </Stack>
  );
}

export default DProductInfo;
