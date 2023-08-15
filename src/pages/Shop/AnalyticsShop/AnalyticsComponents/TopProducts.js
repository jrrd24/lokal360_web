import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Styles from "../../../../css/Styles.module.css";
import CustomLink from "../../../../components/CustomLink";
import ProductContainer from "../../../../components/ShopOnly/ProductContainer";
import productData from "../../../../data/productData";
import MapData from "../../../../utils/MapData";

function TopProducts({ hideShowAll }) {
  return (
    <Stack spacing={2}>
      {/*Section name */}
      <Stack
        spacing={3}
        direction={"row"}
        sx={{ alignItems: "baseline", justifyContent: "space-between" }}
      >
        <Typography variant="sectionTitle">Top Products</Typography>
        <Box
          className={`${Styles.grow}`}
          sx={{ display: hideShowAll ? "none" : "block" }}
        >
          <CustomLink to="/shop/products">{"See All"}</CustomLink>
        </Box>
      </Stack>

      {/*Content */}
      <Stack
        spacing={1}
        direction={"column"}
        sx={{
          "@media (max-width: 1516px)": {
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        {/*Mapping user data*/}
        <MapData
          inputData={productData}
          component={ProductContainer}
          sortByField={"total_sold"}
          showUpTo={6}
          idName={"productID"}
        />
      </Stack>
    </Stack>
  );
}

export default TopProducts;
