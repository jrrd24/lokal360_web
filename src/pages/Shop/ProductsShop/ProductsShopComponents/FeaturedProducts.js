import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ButtonAdd from "../../../../components/Buttons/ButtonAdd";
import theme from "../../../../Theme";
import FeaturedProductsDialog from "./FeaturedProductsDialog/FeaturedProductsDialog";
import ProductPreview from "../../../../components/ShopOnly/ProductPreview";
import MapData from "../../../../utils/MapData";
import productData from "../../../../data/productData";

function FeaturedProducts() {
  // Handle Open Dialog Box (AddProduct)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ width: "100%" }}>
      <Stack spacing={2} direction={"column"}>
        {/*Section Name */}
        <Box direction={"row"} sx={{ ...theme.components.box.sectionName }}>
          <Typography variant="sectionTitle">Featured Products</Typography>
          <ButtonAdd label={"Add / Edit Featured"} onClickAction={handleOpen} />
          {/*TODO: Add onClick for Button */}
        </Box>

        {/*TODO: Add featured products */}
        <MapData
          inputData={productData}
          component={ProductPreview}
          idName={"productID"}
          horizontal
          height={300}
          condition={(data) => data.is_featured === true}
          sortByField={"total_sold"}
        />
      </Stack>

      <FeaturedProductsDialog open={open} handleClose={handleClose} />
    </div>
  );
}

export default FeaturedProducts;
