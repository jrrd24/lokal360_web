import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import styles from "../../../../../css/Styles.module.css";

function ProductImages({ thumbnail }) {
  return (
    <Stack spacing={3} width={"100%"}>
      {/*Section Name */}
      <Stack
        direction={"row"}
        sx={{ alignItems: "baseline", justifyContent: "space-between" }}
      >
        <Typography variant="sectionTitleSmall">Product Thumbnail</Typography>
      </Stack>

      {/*Shop Logo */}

      <Box sx={{ display: "flex", alignItems: "left" }}>
        <img
          className={`${styles.grow}`}
          src={
            thumbnail ||
            require("../../../../../assets/product_placeholder_big.jpg")
          }
          alt="Product Thumbnail"
          loading="eager"
          style={{ ...classes.image, height: 100, width: 100 }}
        />
      </Box>
    </Stack>
  );
}

const classes = {
  image: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    border: "solid",
    borderColor: `#44444433`,
    objectFit: "cover",
    borderWidth: 2,
  },
};
export default ProductImages;
