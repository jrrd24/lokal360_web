import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { ReadOnlyCustomInput } from "../../../../../components/FormComponents/CustomInput";
import { Star } from "@mui/icons-material";

function Details({
  name,
  category,
  shopCategory,
  description,
  rating,
  isRawMat,
}) {
  return (
    <Stack spacing={3} width={"100%"}>
      {/*Section Name */}
      <Stack
        direction={"row"}
        sx={{ alignItems: "baseline", justifyContent: "space-between" }}
      >
        <Typography variant="sectionTitleSmall">Product Details</Typography>
      </Stack>

      {/*TextBoxes */}
      <Stack spacing={3}>
        {/*Shop Name */}
        <ReadOnlyCustomInput
          name="productName"
          label="Product Name"
          defaultValue={name}
          width="100%"
        />

        {/*Product Category and Shop Type */}
        <Stack direction={"row"} spacing={3}>
          {/*Product Category*/}
          <ReadOnlyCustomInput
            name="category"
            label="Category"
            defaultValue={category}
            width="48%"
          />

          {/*Shop Type */}

          <ReadOnlyCustomInput
            name="shopCategory"
            label="Shop Category"
            defaultValue={shopCategory}
            width="48%"
          />
        </Stack>

        {/*Shop Description */}
        <ReadOnlyCustomInput
          name="productDescription"
          label="Product Description"
          defaultValue={description}
          width="100%"
          multiline
        />
        <Stack direction={"row"} spacing={3}>
          <ReadOnlyCustomInput
            name="rating"
            label="Product Rating"
            defaultValue={rating ? `${rating}/5` : "N/A"}
            width="48%"
            component={Star}
          />

          <ReadOnlyCustomInput
            name="isRawMat"
            label="Product Type"
            defaultValue={isRawMat ? "Raw Material" : "Finished Product"}
            width="48%"
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Details;
