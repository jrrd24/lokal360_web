import React from "react";
import productData from "../DummyData/DummyProductData";
import { Box, Stack, Typography } from "@mui/material";
import Styles from "../../../../css/Styles.module.css";
import CustomLink from "../../../../components/CustomLink";
import ProductContainer from "../../../../components/ShopOnly/ProductContainer";

function TopProducts() {
  return (
    <Stack spacing={2}>
      {/*Section name */}
      <Stack
        spacing={3}
        direction={"row"}
        sx={{ alignItems: "baseline", justifyContent: "space-between" }}
      >
        <Typography variant="sectionTitle">Valuable Customers</Typography>
        <Box className={`${Styles.grow}`}>
          <CustomLink to="/shop/customers">{"See All"}</CustomLink>
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
        {productData.length > 0 ? (
          productData.map((productData) => (
            <ProductContainer
              key={productData.id}
              img={productData.img}
              name={productData.name}
              sold={productData.sold}
            />
          ))
        ) : (
          <Typography>No Record Found</Typography>
        )}
      </Stack>
    </Stack>
  );
}

export default TopProducts;
