import React, { useEffect } from "react";
import { Stack, Typography, Alert, Divider } from "@mui/material";
import { CustomInput } from "../../../../../components/FormComponents/CustomInput";
import { ProductToggle } from "../../../../../components/FormComponents/ProductToggle";
import { LoadingCircle } from "../../../../../components/Loading/Loading";

function DEditCategoryDetails({ sx, control, setValue, data, productData }) {
  useEffect(() => {
    setValue("shopCategoryID", data.shopCategoryID);
  }, [setValue, data]);

  if (!productData || !productData.inShopCategory) {
    return <LoadingCircle />;
  }

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
            All Products here belong to <b>{data.shop_category_name}</b>
            <br />
            Click the Toggle to <b>Remove</b> a Product from this Category
          </Alert>
        </Stack>

        {/*Product Containers (MAP) */}
        <Stack spacing={3}>
          {/* Mapping  data */}
          <ProductToggle
            name="inShopCategory"
            control={control}
            label=""
            data={productData.inShopCategory}
            targetField={"shopCategoryID"}
            targetID={data.shopCategoryID}
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
            Click the Toggle to <b>Add</b> a Product to this Category. <br />
            <b>NOTE:</b> Only Products with <b>No Shop Category</b> are listed
            here
          </Alert>
        </Stack>

        {/*Product Containers (MAP) */}
        <Stack spacing={3}>
          {/* Mapping data */}
          <ProductToggle
            name="noShopCategory"
            control={control}
            label=""
            data={productData.notInShopCategory}
            targetField={"shopCategoryID"}
            targetID={data.shopCategoryID}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default DEditCategoryDetails;
