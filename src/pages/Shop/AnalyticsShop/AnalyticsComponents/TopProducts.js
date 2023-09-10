import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Styles from "../../../../css/Styles.module.css";
import CustomLink from "../../../../components/CustomLink";
import ProductContainer from "../../../../components/ShopOnly/ProductContainer";
import productData from "../../../../data/productData";
import MapData from "../../../../utils/MapData";

function TopProducts({ hideShowAll }) {
  return (
    <Stack spacing={2} sx={{ ...classes.main }}>
      {/*Section name */}
      <Stack spacing={3} direction={"row"} sx={{ ...classes.sectionName }}>
        <Typography variant="sectionTitle">Top Products</Typography>
        <Box
          className={`${Styles.grow}`}
          sx={{ display: hideShowAll ? "none" : "block" }}
        >
          <CustomLink to="/shop/products">{"See All"}</CustomLink>
        </Box>
      </Stack>

      {/*Content */}
      <Stack spacing={1} direction={"column"} sx={{ ...classes.content }}>
        {/*Mapping user data*/}
        <MapData
          inputData={productData}
          component={ProductContainer}
          sortByField={"total_sold"}
          showUpTo={5}
          idName={"productID"}
        />
      </Stack>
    </Stack>
  );
}

const classes = {
  main: {
    width: "100%",
  },

  sectionName: { alignItems: "baseline", justifyContent: "space-between" },

  content: {
    "@media (max-width: 1516px)": {
      alignItems: "center",
      justifyContent: "center",
    },
  },
};

export default TopProducts;
