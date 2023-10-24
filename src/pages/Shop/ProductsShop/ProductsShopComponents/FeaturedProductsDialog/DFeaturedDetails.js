import React from "react";
import { Divider, Stack, Typography, Alert } from "@mui/material";
import { ProductToggle } from "../../../../../components/FormComponents/ProductToggle";

function DFeaturedDetails({
  sx,
  control,
  featuredProdData,
  notFeaturedProdData,
}) {
  return (
    <Stack spacing={5} sx={{ sx }}>
      {/* Product Details */}
      <Stack spacing={3} sx={{ sx }}>
        {/* Section Name */}
        <Stack spacing={1}>
          <Stack
            sx={{ alignItems: "baseline", justifyContent: "space-between" }}
          >
            <Typography variant="sectionTitleSmall">
              My Featured Products
            </Typography>
          </Stack>
          <Alert severity="info">
            Click the Toggle to <b>Remove</b> a Product from the Featured
            Products
          </Alert>
        </Stack>
        {/* TextBoxes */}
        <Stack spacing={3}>
          {/* Product Containers */}
          <Stack spacing={1} direction={"column"} sx={{ ...classes.content }}>
            {/* Mapping user data */}
            <ProductToggle
              name="featured"
              control={control}
              label=""
              data={featuredProdData}
              targetField={"is_featured"}
            />
          </Stack>
        </Stack>
      </Stack>

      <Divider />

      {/* Product Thumbnail */}
      <Stack spacing={3}>
        {/* Section Name */}
        <Stack spacing={1}>
          <Stack
            sx={{ alignItems: "baseline", justifyContent: "space-between" }}
          >
            <Typography variant="sectionTitleSmall">My Products</Typography>
          </Stack>
          <Alert severity="info">
            Click the Toggle to <b>Add</b> a Product to the Featured Products
          </Alert>
        </Stack>

        {/* TextBoxes */}
        <Stack spacing={3}>
          {/* Product Containers */}
          <Stack spacing={1} direction={"column"} sx={{ ...classes.content }}>
            {/* Mapping data*/}
            <ProductToggle
              name="notFeatured"
              control={control}
              label=""
              data={notFeaturedProdData}
              targetField={"is_featured"}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

const classes = {
  content: {
    "@media (max-width: 1516px)": {
      alignItems: "center",
      justifyContent: "center",
    },
  },
};
export default DFeaturedDetails;
