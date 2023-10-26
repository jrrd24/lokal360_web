import React from "react";
import { Stack, Typography, Alert, Divider } from "@mui/material";
import { CustomInput } from "../../../../../components/FormComponents/CustomInput";
import { ProductToggle } from "../../../../../components/FormComponents/ProductToggle";

function DCategoryDetails({ sx, control, productData }) {
  return (
    <Stack spacing={5} sx={{ sx }}>
      {/*Shop Category Details */}
      <Stack spacing={3}>
        {/*Section Name */}
        <Stack sx={{ alignItems: "baseline", justifyContent: "space-between" }}>
          <Typography variant="sectionTitleSmall">
            Shop Category Details
          </Typography>
        </Stack>

        {/*TextBoxes */}
        <Stack spacing={3}>
          {/*Promo Type*/}
          <CustomInput
            control={control}
            name="shopCategoryName"
            label="Shop Category Name"
            width="100%"
            rules={{
              required: "Shop Category Name Is Required",
              maxLength: {
                value: 50,
                message: "Maximum of 50 Characters only",
              },
            }}
          />
        </Stack>
      </Stack>

      <Divider />
      {/*Assign a Product */}
      <Stack spacing={3}>
        {/*Section Name */}
        <Stack spacing={1}>
          <Stack
            sx={{ alignItems: "baseline", justifyContent: "space-between" }}
          >
            <Typography variant="sectionTitleSmall">
              Assign A Product
            </Typography>
          </Stack>
          <Alert severity="info">
            Click the Toggle to <b>Add</b> a Product to this Category
          </Alert>
        </Stack>

        {/*Product Containers (MAP) */}
        {/*TODO: Add Product Containers Here */}
        <Stack spacing={3}>
          {/* Mapping user data */}
          <ProductToggle
            name="noShopCategory"
            control={control}
            label=""
            data={productData.notInShopCategory}
            targetField={"shopCategoryID"}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default DCategoryDetails;
