import React from "react";
import { Stack, Typography } from "@mui/material";
import { CustomInput } from "../../../../../components/FormComponents/CustomInput";
import {
  productsCategory,
  shopCategory,
} from "../../../../../utils/MapSelectMenuItems";
import { UploadImage } from "../../../../../components/DialogBox/UploadImageDialog";

function DProductDetails({ sx, control, register, setValue }) {
  return (
    <Stack spacing={3} sx={{ sx }}>
      {/*Section Name */}
      <Stack sx={{ alignItems: "baseline", justifyContent: "space-between" }}>
        <Typography variant="sectionTitleSmall">Product Details</Typography>
      </Stack>

      {/*TextBoxes */}
      <Stack spacing={3}>
        {/*Product Name */}
        <CustomInput
          control={control}
          name="productName"
          label="Product Name"
          width="100%"
          rules={{
            required: "Product Name Is Required",
            maxLength: {
              value: 160,
              message: "Max Length of 160 Characters",
            },
          }}
        />
        {/*Product Category and Shop Category */}
        <Stack direction={"row"} spacing={3} sx={{ minWidth: "100%" }}>
          {/*Product Category*/}
          <CustomInput
            control={control}
            name="productsCategory"
            label="Products Category"
            width="48%"
            select
            selectMenuItems={productsCategory}
            rules={{
              required: "Products Category Is Required",
            }}
          />

          {/*Shop Caategory*/}

          <CustomInput
            control={control}
            name="shopCategory"
            label="Shop Category"
            width="48%"
            select
            selectMenuItems={shopCategory}
            rules={{
              required: "Shop Category Is Required",
              maxLength: {
                value: 60,
                message: "Max Length of 60 Characters",
              },
            }}
          />
        </Stack>
        {/*Product Description */}
        <CustomInput
          control={control}
          name="productDescription"
          label="Product Description"
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
        <Stack sx={{ py: 5 }}>
          <Typography variant="sectionTitleSmall">Product Thumbnail</Typography>

          <UploadImage
            name={"productThumbnail"}
            alt={"Product Thumbnail"}
            control={control}
            register={register}
            setValue={setValue}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default DProductDetails;
