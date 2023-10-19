import React, { useEffect } from "react";
import { Stack, Typography, Alert, Divider } from "@mui/material";
import { CustomInput } from "../../../../../components/FormComponents/CustomInput";
import { ProductToggleNew } from "../../../../../components/FormComponents/ProductToggle";
//dummy data
import productData from "../../../../../data/productData";

function DEditCategoryDetails({ sx, control, register, setValue, data }) {
  useEffect(() => {
    setValue("shopCategoryID", data.shopCategoryID);
  }, [setValue, data]);
  
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
            value={data.shop_category_name}
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

      {/*Manage Products */}
      <Stack spacing={3}>
        {/*Section Name */}
        <Stack spacing={1}>
          <Stack
            sx={{ alignItems: "baseline", justifyContent: "space-between" }}
          >
            <Typography variant="sectionTitleSmall">Manage Products</Typography>
          </Stack>
          <Alert severity="info">
            All Products here belong to <b>{data.name}</b>
            <br />
            Click the Toggle to <b>Remove</b> a Product from this Category
          </Alert>
        </Stack>

        {/*Product Containers (MAP) */}
        <Stack spacing={3}>
          {/* Mapping user data */}
          <ProductToggleNew
            name="categoryProducts.manageProducts"
            control={control}
            label=""
            data={productData}
            condition={(product) =>
              product.shopCategoryID === data.shopCategoryID
            }
            targetField={"shopCategoryID"}
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
            Click the Toggle to <b>Add</b> or <b>Remove</b> a Product from this
            Category
          </Alert>
        </Stack>

        {/*Product Containers (MAP) */}
        {/*TODO: Add Product Containers Here */}
        <Stack spacing={3}>
          {/* Mapping user data */}
          <ProductToggleNew
            name="categoryProducts.assignProducts"
            control={control}
            label=""
            data={productData}
            condition={(product) => product.shopCategoryID === null}
            targetField={"shopCategoryID"}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default DEditCategoryDetails;
