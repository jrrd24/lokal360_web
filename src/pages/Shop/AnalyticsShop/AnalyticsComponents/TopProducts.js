import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Styles from "../../../../css/Styles.module.css";
import CustomLink from "../../../../components/CustomLink";
import ProductContainer from "../../../../components/ShopOnly/ProductContainer";

const data = [
  {
    id: 1,
    img: require("../../../../assets/lokal360_Logo.png"),
    name: "Product 1 asdadsa asdasdas dasdasda sdad",
    sold: 45,
  },
  {
    id: 2,
    img: require("../../../../assets/lokal360_Logo.png"),
    name: "Product 2",
    sold: 48,
  },
  {
    id: 3,
    img: require("../../../../assets/lokal360_Logo.png"),
    name: "Product 3",
    sold: 45,
  },
  {
    id: 4,
    img: require("../../../../assets/lokal360_Logo.png"),
    name: "Product 4",
    sold: 13,
  },
  {
    id: 5,
    img: require("../../../../assets/lokal360_Logo.png"),
    name: "Product 5",
    sold: 12,
  },
  {
    id: 6,
    img: require("../../../../assets/lokal360_Logo.png"),
    name: "Product 6",
    sold: 24,
  },
];

function TopProducts() {
  // Sort the data in descending order based on the 'sold' property
  const sortedData = data.slice().sort((a, b) => b.sold - a.sold);
  return (
    <Stack spacing={2}>
      {/*Section name */}
      <Stack
        spacing={3}
        direction={"row"}
        sx={{ alignItems: "baseline", justifyContent: "space-between" }}
      >
        <Typography variant="sectionTitle">Top Products</Typography>
        <Box className={`${Styles.grow}`}>
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
        {sortedData.length > 0 ? (
          sortedData.map((productData) => (
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
